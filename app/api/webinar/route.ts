import { NextResponse } from "next/server";
import {
  EMAIL_RE,
  MAX_FIELD,
  normalizeInstagram,
  validateWebinar,
  webinar,
  type WebinarInput,
} from "@/lib/webinar";
import { escapeHtml } from "@/lib/webinarEmailContent";
import {
  MAIL_FROM,
  getTransporter,
  sendConfirmation as sendLeadConfirmation,
} from "@/lib/webinarMailer";

/**
 * Inscrição no webinar (/webinar) — form nativo → Twenty CRM (Core API).
 *
 * Fluxo:
 *   1. valida os campos (mesma função do cliente, para não confiar nele);
 *   2. escreve no Twenty pela Core API (Bearer): upsert Person (dedup por
 *      e-mail) com `origem: WEBINAR` + Note com a inscrição;
 *   3. manda a CONFIRMAÇÃO para o lead pelo SMTP do domínio ("vaga garantida");
 *   4. manda um e-mail de aviso para o Felipe (nunca deixa o lead cair).
 *
 * O `origem: WEBINAR` é o que separa esta lista de quem baixou o e-book
 * (origem E_BOOK). A opção foi criada no SELECT `origem` e o campo `instagram`
 * foi adicionado ao objeto Person — os dois pela Metadata API. É essa lista
 * (origem=WEBINAR) que a rota de lembretes lê para disparar 7/3/1 dias antes.
 *
 * A confirmação sai pelo SMTP do domínio (nodemailer), não pelo Twenty: o
 * workflow do Twenty exigiria uma caixa conectada no workspace (não há nenhuma),
 * então o Send Email lá fica inválido. O SMTP já está configurado e é o mesmo do
 * form da imersão. Conteúdo em `lib/webinarEmailContent`, envio em
 * `lib/webinarMailer`.
 *
 * Degrada com segurança: sem TWENTY_API_KEY o passo do CRM é pulado e o lead
 * ainda chega por e-mail; sem SMTP, ainda entra no CRM (só não confirma). Só
 * devolve erro quando NENHUM caminho de registro existe ou todos falham — o form
 * nunca finge que enviou.
 */
export const runtime = "nodejs";

const { TWENTY_API_KEY } = process.env;
const TWENTY_BASE = (process.env.TWENTY_BASE_URL ?? "https://crm.madebyfelipe.agency").replace(/\/$/, "");
const REST = `${TWENTY_BASE}/rest`;

const NOTIFY_TO = "alo@madebyfelipe.com.br";
const NOTIFY_BCC = "byonichip@gmail.com";
const TIMEOUT_MS = 12000;

// UTM snake_case (como vem da URL) → nomes dos campos no Twenty (Person).
const UTM_MAP = {
  utm_source: "utmSource",
  utm_medium: "utmMedium",
  utm_campaign: "utmCampaign",
  utm_content: "utmContent",
  utm_term: "utmTerm",
} as const;

// ---------------------------------------------------------------------------
// Cliente Twenty (Core API) — mesmo padrão do /diagnostico
// ---------------------------------------------------------------------------

async function twenty(method: string, path: string, body?: unknown) {
  const res = await fetch(`${REST}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${TWENTY_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Twenty ${method} ${path} → ${res.status} ${await res.text()}`);
  return res.json();
}

/** POST/PATCH devolvem { data: { createPerson: {...} } } — pega o id de dentro. */
function idOf(payload: unknown): string {
  const data = (payload as { data?: Record<string, { id?: string }> })?.data ?? {};
  const first = Object.values(data)[0];
  const id = first?.id;
  if (!id) throw new Error("Twenty não devolveu id");
  return id;
}

async function findPersonId(email: string): Promise<string | null> {
  // Operador `[eq]:"..."` literal (foi o que o servidor aceitou); só o e-mail
  // é percent-encoded.
  const filter = `emails.primaryEmail%5Beq%5D:%22${encodeURIComponent(email)}%22`;
  const json = await twenty("GET", `/people?filter=${filter}&limit=1`);
  const people = (json as { data?: { people?: Array<{ id: string }> } }).data?.people ?? [];
  return people[0]?.id ?? null;
}

/** Dedup por e-mail: atualiza se já existe (a lista já vive na newsletter). */
async function upsertPerson(person: Record<string, unknown>, email: string): Promise<string> {
  let existing: string | null = null;
  try {
    existing = await findPersonId(email);
  } catch (error) {
    // Busca falhou: segue para criar. Pior caso, um duplicado — melhor que perder.
    console.error("[webinar] busca de pessoa falhou:", error);
  }
  if (existing) return idOf(await twenty("PATCH", `/people/${existing}`, person));
  return idOf(await twenty("POST", "/people", person));
}

/** Note com os dados da inscrição, ligado ao contato. */
async function attachNote(personId: string, title: string, markdown: string) {
  const noteId = idOf(
    await twenty("POST", "/notes", { title, bodyV2: { markdown, blocknote: null } }),
  );
  await twenty("POST", "/noteTargets", { noteId, targetPersonId: personId });
}

// ---------------------------------------------------------------------------
// Conteúdo
// ---------------------------------------------------------------------------

const esc = escapeHtml;

/** Achata os UTMs recebidos, já com os nomes de campo do Twenty. */
function normalizeUtm(raw: unknown): Record<string, string> {
  if (!raw || typeof raw !== "object") return {};
  const source = raw as Record<string, unknown>;
  const out: Record<string, string> = {};
  for (const [snake, camel] of Object.entries(UTM_MAP)) {
    const value = source[snake];
    if (typeof value === "string" && value.trim()) out[camel] = value.trim().slice(0, MAX_FIELD);
  }
  return out;
}

// ---------------------------------------------------------------------------
// E-mail de aviso interno (Felipe) — reusa o mesmo SMTP do domínio
// ---------------------------------------------------------------------------

async function notify(fields: WebinarInput, instagram: string, crmOk: boolean) {
  const mailer = getTransporter();
  if (!mailer) return false;

  const digits = fields.whatsapp.replace(/\D/g, "");
  const waNumber = digits.length <= 11 ? `55${digits}` : digits;
  const linhas = [
    `Nome: ${fields.nome}`,
    `E-mail: ${fields.email}`,
    `WhatsApp: ${fields.whatsapp}`,
    `Instagram: @${instagram}`,
    fields.crp ? `CRP: ${fields.crp}` : null,
    `CRM (Twenty): ${crmOk ? "gravado (origem WEBINAR)" : "NÃO gravado — cadastre à mão"}`,
  ].filter(Boolean) as string[];

  await mailer.sendMail({
    from: MAIL_FROM,
    to: NOTIFY_TO,
    bcc: NOTIFY_BCC,
    subject: `Nova inscrição no webinar — ${fields.nome}`,
    text: [`Inscrição no webinar (${webinar.dataLabel})`, "", ...linhas].join("\n"),
    html: `
      <div style="font-family:Helvetica,Arial,sans-serif;color:#151515;max-width:620px">
        <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#bc0319;margin:0 0 8px">
          Nova inscrição no webinar
        </p>
        <p style="font-size:22px;font-weight:700;margin:0 0 4px">${esc(fields.nome)}</p>
        <p style="margin:0 0 16px;color:#454545">${esc(webinar.dataLabel)}</p>
        <table style="border-collapse:collapse;font-size:14px;color:#151515">
          <tr><td style="padding:4px 16px 4px 0;color:#696969">E-mail</td><td>${esc(fields.email)}</td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#696969">WhatsApp</td><td>
            <a href="https://wa.me/${esc(waNumber)}" style="color:#bc0319">${esc(fields.whatsapp)}</a></td></tr>
          <tr><td style="padding:4px 16px 4px 0;color:#696969">Instagram</td><td>
            <a href="https://instagram.com/${esc(instagram)}" style="color:#bc0319">@${esc(instagram)}</a></td></tr>
          ${fields.crp ? `<tr><td style="padding:4px 16px 4px 0;color:#696969">CRP</td><td>${esc(fields.crp)}</td></tr>` : ""}
          <tr><td style="padding:4px 16px 4px 0;color:#696969">CRM</td><td>${
            crmOk ? "gravado (origem WEBINAR)" : '<strong style="color:#bc0319">não gravado</strong>'
          }</td></tr>
        </table>
      </div>`,
  });
  return true;
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const str = (v: unknown) => (typeof v === "string" ? v.trim().slice(0, MAX_FIELD) : "");
  const fields: WebinarInput = {
    nome: str(body.nome),
    email: str(body.email).toLowerCase(),
    whatsapp: str(body.whatsapp),
    instagram: str(body.instagram),
    crp: str(body.crp) || undefined,
    consentimento: body.consentimento === true,
  };

  const faltando = validateWebinar(fields);
  if (faltando) {
    // Sem aceite não há base legal (LGPD art. 7º, I). Os demais evitam lixo no CRM.
    const error = faltando === "consentimento" ? "consent_required" : "invalid_fields";
    return NextResponse.json({ ok: false, error, field: faltando }, { status: 400 });
  }

  const instagram = normalizeInstagram(fields.instagram);
  const utmFields = normalizeUtm(body.utm);

  // --- CRM (Twenty) ---------------------------------------------------------
  let crmOk = false;
  if (TWENTY_API_KEY) {
    try {
      const [firstName, ...rest] = fields.nome.split(/\s+/).filter(Boolean);
      const person: Record<string, unknown> = {
        name: { firstName: firstName ?? "", lastName: rest.join(" ") },
        emails: { primaryEmail: fields.email },
        phones: {
          primaryPhoneNumber: fields.whatsapp.replace(/\D/g, ""),
          primaryPhoneCountryCode: "BR",
          primaryPhoneCallingCode: "+55",
        },
        instagram,
        origem: "WEBINAR",
        consentimentoLgpd: true,
        ...utmFields,
      };
      if (fields.crp) person.crp = fields.crp;

      const personId = await upsertPerson(person, fields.email);
      crmOk = true;

      // Note = registro da inscrição (best-effort: Person já capturou o essencial).
      const md = [
        `# Inscrição no webinar — ${fields.nome}`,
        "",
        `**Evento:** ${webinar.dataLabel}`,
        `- E-mail: ${fields.email}`,
        `- WhatsApp: ${fields.whatsapp}`,
        `- Instagram: @${instagram}`,
        fields.crp ? `- CRP: ${fields.crp}` : null,
        `- Consentimento LGPD: sim (${new Date().toISOString()})`,
      ]
        .filter(Boolean)
        .join("\n");
      await attachNote(personId, `Inscrição webinar — ${fields.nome}`, md).catch((error) =>
        console.error("[webinar] note falhou:", error),
      );
    } catch (error) {
      console.error("[webinar] Twenty falhou:", error);
    }
  }

  // --- Confirmação para o lead (SMTP do domínio) ---------------------------
  // O lead já passou na validação; a confirmação sai mesmo se o CRM falhou (o
  // aviso interno abaixo garante que o Felipe cadastre à mão). Best-effort — não
  // derruba a inscrição.
  try {
    await sendLeadConfirmation(fields.email, fields.nome);
  } catch (error) {
    console.error("[webinar] confirmação (SMTP) falhou:", error);
  }

  // --- E-mail (sempre que houver SMTP: notifica e segura o lead) ------------
  let mailOk = false;
  try {
    mailOk = await notify(fields, instagram, crmOk);
  } catch (error) {
    console.error("[webinar] e-mail falhou:", error);
  }

  if (!crmOk && !mailOk) {
    const configured = Boolean(TWENTY_API_KEY) || Boolean(getTransporter());
    return NextResponse.json(
      { ok: false, error: configured ? "delivery_failed" : "unconfigured" },
      { status: configured ? 502 : 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
