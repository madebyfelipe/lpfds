import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  EMAIL_RE,
  MAX_FIELD,
  normalizeInstagram,
  validateWebinar,
  webinar,
  type WebinarInput,
} from "@/lib/webinar";

/**
 * Inscrição no webinar (/webinar) — form nativo → Twenty CRM (Core API).
 *
 * Fluxo:
 *   1. valida os campos (mesma função do cliente, para não confiar nele);
 *   2. escreve no Twenty pela Core API (Bearer): upsert Person (dedup por
 *      e-mail) com `origem: WEBINAR` + Note com a inscrição;
 *   3. assim que o lead cai no Twenty (crmOk), dispara o WORKFLOW de
 *      confirmação do Twenty (webhook) — é o Twenty que manda o e-mail de
 *      "vaga confirmada" para a inscrita, no mesmo padrão da newsletter;
 *   4. manda um e-mail de aviso para o Felipe (nunca deixa o lead cair).
 *
 * O `origem: WEBINAR` é o que separa esta lista de quem baixou o e-book
 * (origem E_BOOK). A opção foi criada no SELECT `origem` e o campo `instagram`
 * foi adicionado ao objeto Person — os dois pela Metadata API.
 *
 * O e-mail de confirmação sai por WORKFLOW do Twenty (não pelo SMTP daqui), por
 * decisão do Felipe: assim a inscrição e a confirmação vivem no mesmo lugar do
 * CRM. A URL do workflow é /webhooks/workflows/{workspaceId}/{workflowId} — o
 * workspace é o mesmo da newsletter; só o workflowId muda. Vive em
 * TWENTY_WEBINAR_WEBHOOK (env) porque o workflow ainda precisa ser criado e
 * ativado no workspace (duplicar o `newsletter_listing`, trocar a copy do passo
 * Send Email pela do webinar, e em "Define expected body" colar um JSON com os
 * campos abaixo). O gatilho é webhook, então o e-mail usa {{trigger.body.*}} —
 * o registro já foi criado pela Core API no passo 2, o workflow só envia.
 *
 * Degrada com segurança: sem TWENTY_API_KEY o passo do CRM é pulado e o lead
 * ainda chega por e-mail; sem SMTP, ainda entra no CRM; sem TWENTY_WEBINAR_WEBHOOK
 * a confirmação não sai, mas a inscrição vale. Só devolve erro quando NENHUM
 * caminho de registro existe ou todos falham — o form nunca finge que enviou.
 */
export const runtime = "nodejs";

const { TWENTY_API_KEY, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
const TWENTY_BASE = (process.env.TWENTY_BASE_URL ?? "https://crm.madebyfelipe.agency").replace(/\/$/, "");
const REST = `${TWENTY_BASE}/rest`;

// Workflow de confirmação do webinar (webhook). Vazio até ser criado/ativado no
// workspace do Twenty — então o disparo é pulado sem derrubar a inscrição.
const TWENTY_WEBINAR_WEBHOOK = process.env.TWENTY_WEBINAR_WEBHOOK ?? "";

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

/**
 * Dispara o workflow de confirmação do Twenty (webhook público — sem Bearer).
 * O payload é flat porque o passo Send Email lê {{trigger.body.email}} etc.
 * Best-effort: se o workflow estiver desativado (400 INVALID_WORKFLOW_STATUS)
 * ou a URL não estiver setada, a inscrição continua valendo.
 */
async function sendConfirmation(fields: WebinarInput, instagram: string): Promise<boolean> {
  if (!TWENTY_WEBINAR_WEBHOOK) return false;
  const [firstName, ...rest] = fields.nome.split(/\s+/).filter(Boolean);
  const res = await fetch(TWENTY_WEBINAR_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: fields.email,
      name: fields.nome,
      firstName: firstName ?? "",
      lastName: rest.join(" "),
      whatsapp: fields.whatsapp,
      instagram,
      crp: fields.crp ?? "",
      origem: "WEBINAR",
      // Dados do evento para o corpo do e-mail não ficar hardcoded no workflow.
      eventoData: webinar.dataLabel,
      eventoDuracao: webinar.duracao,
      submittedAt: new Date().toISOString(),
    }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Twenty workflow → ${res.status} ${await res.text()}`);
  return true;
}

// ---------------------------------------------------------------------------
// Conteúdo
// ---------------------------------------------------------------------------

function esc(v: string) {
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

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
// E-mail de aviso (fallback + notificação — reusa o SMTP do domínio)
// ---------------------------------------------------------------------------

let transporter: nodemailer.Transporter | null = null;
function getTransporter() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null;
  const port = Number(SMTP_PORT ?? 465);
  transporter ??= nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: TIMEOUT_MS,
    greetingTimeout: TIMEOUT_MS,
  });
  return transporter;
}

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
    from: `"Made by Felipe — site" <${SMTP_USER}>`,
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

  // --- Confirmação para o lead (workflow do Twenty) -------------------------
  // Só depois de o lead cair no CRM: a confirmação diz "vaga confirmada", então
  // não pode sair sem o registro. Best-effort — não derruba a inscrição.
  if (crmOk) {
    try {
      await sendConfirmation(fields, instagram);
    } catch (error) {
      console.error("[webinar] confirmação (workflow) falhou:", error);
    }
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
