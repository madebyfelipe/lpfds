import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  DIAGNOSTICO_ORIGEM,
  computeIndice,
  labelFor,
  optionLabelFor,
  pontosContato,
  sections,
  validateDiagnostico,
  type Banda,
  type DiagnosticoValues,
  type Utm
} from "@/lib/diagnostico";

/**
 * Diagnóstico (/diagnostico) — form nativo → Twenty CRM (Core API).
 *
 * Fluxo (a fórmula do Índice é calculada AQUI, fonte única da verdade):
 *   1. valida e calcula Índice/banda/gargalo;
 *   2. escreve no Twenty pela Core API (Bearer):
 *        upsert Person (dedup por e-mail) → Note com as respostas → Task;
 *   3. manda um e-mail de aviso para o Felipe (nunca deixa o lead cair).
 *
 * Degrada com segurança: sem TWENTY_API_KEY o passo do CRM é pulado e o lead
 * ainda chega por e-mail; sem SMTP, ainda entra no CRM. Só devolve erro quando
 * NENHUM caminho existe ou todos falham — o form nunca finge que enviou.
 *
 * Person, Note, Task e os vínculos foram conferidos contra o schema real do
 * workspace (Person já tem os campos custom; Opportunity ainda não — por isso
 * o Índice mora nos espelhos indiceAtual/bandaAtual e nas respostas do Note).
 */
export const runtime = "nodejs";

const { TWENTY_API_KEY, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
const TWENTY_BASE = (process.env.TWENTY_BASE_URL ?? "https://crm.madebyfelipe.agency").replace(/\/$/, "");
const REST = `${TWENTY_BASE}/rest`;

const NOTIFY_TO = "alo@madebyfelipe.com.br";
const NOTIFY_BCC = "byonichip@gmail.com";
const TIMEOUT_MS = 12000;
const MAX_VALUE = 4000;

// SELECT do Person aceitam só os valores definidos no workspace.
const BANDA_TO_SELECT: Record<Banda, string> = {
  "Ponto de partida": "PONTO_DE_PARTIDA",
  "Em construção": "EM_CONSTRUCAO",
  Território: "TERRITORIO"
};
const ATUACAO_SELECT = new Set(["PRESENCIAL", "ONLINE", "AMBOS"]);

// ---------------------------------------------------------------------------
// Cliente Twenty (Core API)
// ---------------------------------------------------------------------------

async function twenty(method: string, path: string, body?: unknown) {
  const res = await fetch(`${REST}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${TWENTY_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS)
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
  // Mantém o operador `[eq]:"..."` literal (foi o que o servidor aceitou);
  // só o e-mail é percent-encoded.
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
    console.error("[diagnostico] busca de pessoa falhou:", error);
  }
  if (existing) return idOf(await twenty("PATCH", `/people/${existing}`, person));
  return idOf(await twenty("POST", "/people", person));
}

async function attachNote(personId: string, title: string, markdown: string) {
  const noteId = idOf(
    await twenty("POST", "/notes", { title, bodyV2: { markdown, blocknote: null } })
  );
  await twenty("POST", "/noteTargets", { noteId, targetPersonId: personId });
}

async function attachTask(personId: string, title: string, dueAt: string) {
  const taskId = idOf(await twenty("POST", "/tasks", { title, status: "TODO", dueAt }));
  await twenty("POST", "/taskTargets", { taskId, targetPersonId: personId });
}

// ---------------------------------------------------------------------------
// Montagem do conteúdo
// ---------------------------------------------------------------------------

function esc(v: string) {
  return v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const GARGALO_LABEL: Record<string, string> = {
  territorio: "Território",
  "pontos-contato": "Pontos de contato",
  "conta-hora": "A conta da hora",
  ativos: "Ativos próprios",
  conformidade: "Conformidade"
};

/** Markdown com o resultado + todas as respostas, para o Note do Twenty. */
function buildMarkdown(
  values: DiagnosticoValues,
  d: ReturnType<typeof computeIndice>,
  utm?: Utm
): string {
  const out: string[] = [];
  out.push(`# Diagnóstico — ${values.nome ?? ""}`.trim());
  out.push("");
  out.push(`**Índice:** ${d.indice}/100 · **Banda:** ${d.banda} · **Gargalo:** ${GARGALO_LABEL[d.gargalo]}`);
  out.push(
    `Blocos — Território ${d.blocos.territorio}/25 · Pontos de contato ${d.blocos.pontosContato}/30 ` +
      `· Conta da hora ${d.blocos.contaHora}/15 · Ativos ${d.blocos.ativos}/20 · Conformidade ${d.blocos.conformidade}/10`
  );
  out.push(`Total pontos de contato (pc_total): ${d.pcTotal}/36`);
  out.push("");

  for (const section of sections) {
    const lines: string[] = [];
    for (const field of section.fields) {
      if (field.type === "matrix") {
        const rows = pontosContato
          .filter((r) => values[r.name])
          .map((r) => `  - ${r.label}: ${values[r.name]}`);
        if (rows.length) lines.push(`- **Pontos de contato:**`, ...rows);
        continue;
      }
      const raw = (values[field.name] ?? "").trim();
      if (!raw) continue;
      const shown = field.options ? optionLabelFor(field.name, raw) : raw;
      lines.push(`- **${field.label}** ${shown}`);
    }
    if (lines.length) {
      out.push(`## ${section.title}`);
      out.push(...lines, "");
    }
  }

  if (utm && (utm.utm_source || utm.utm_medium || utm.utm_campaign)) {
    out.push("## Campanha");
    out.push(
      `- source: ${utm.utm_source ?? "—"} · medium: ${utm.utm_medium ?? "—"} · campaign: ${utm.utm_campaign ?? "—"}`
    );
  }
  return out.join("\n");
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
    greetingTimeout: TIMEOUT_MS
  });
  return transporter;
}

async function notify(
  values: DiagnosticoValues,
  d: ReturnType<typeof computeIndice>,
  markdown: string,
  crmOk: boolean
) {
  const mailer = getTransporter();
  if (!mailer) return false;

  const nome = values.nome ?? "sem nome";
  await mailer.sendMail({
    from: `"Made by Felipe — site" <${SMTP_USER}>`,
    to: NOTIFY_TO,
    bcc: NOTIFY_BCC,
    subject: `Novo diagnóstico — ${nome} (Índice ${d.indice}, ${d.banda})`,
    text: [
      `Índice: ${d.indice}/100 — ${d.banda} — gargalo: ${GARGALO_LABEL[d.gargalo]}`,
      `CRM (Twenty): ${crmOk ? "gravado" : "NÃO gravado — cadastre à mão"}`,
      "",
      markdown
    ].join("\n"),
    html: `
      <div style="font-family:Helvetica,Arial,sans-serif;color:#151515;max-width:620px">
        <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#bc0319;margin:0 0 8px">
          Novo diagnóstico
        </p>
        <p style="font-size:22px;font-weight:700;margin:0 0 4px">${esc(nome)} — Índice ${d.indice}/100</p>
        <p style="margin:0 0 16px;color:#454545">
          ${esc(d.banda)} · gargalo: ${esc(GARGALO_LABEL[d.gargalo])} ·
          CRM: ${crmOk ? "gravado" : "<strong style=\"color:#bc0319\">não gravado</strong>"}
        </p>
        <pre style="white-space:pre-wrap;font:13px/1.5 ui-monospace,Menlo,monospace;background:#f6f6f6;padding:16px;border-radius:6px;border:1px solid #ececec">${esc(markdown)}</pre>
      </div>`
  });
  return true;
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  let body: { values?: unknown; utm?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const rawValues = (body.values ?? {}) as Record<string, unknown>;
  const values: DiagnosticoValues = {};
  for (const [k, v] of Object.entries(rawValues)) {
    if (v == null) continue;
    values[k] = String(v).trim().slice(0, MAX_VALUE);
  }

  const faltando = validateDiagnostico(values);
  if (faltando.length) {
    return NextResponse.json(
      { ok: false, error: "invalid_fields", fields: faltando, label: labelFor(faltando[0]) },
      { status: 400 }
    );
  }

  const utm = (body.utm ?? undefined) as Utm | undefined;
  const d = computeIndice(values);
  const markdown = buildMarkdown(values, d, utm);

  // --- CRM (Twenty) ---------------------------------------------------------
  let crmOk = false;
  if (TWENTY_API_KEY) {
    try {
      const email = values.email.toLowerCase();
      const fullName = values.nome ?? "";
      const [firstName, ...rest] = fullName.split(/\s+/).filter(Boolean);
      const anos = Number(values.anos_formada);
      const atuacao = (values.atuacao ?? "").toUpperCase();

      const person: Record<string, unknown> = {
        name: { firstName: firstName ?? "", lastName: rest.join(" ") },
        emails: { primaryEmail: email },
        consentimentoLgpd: values.consent_lgpd === "sim",
        origem: DIAGNOSTICO_ORIGEM === "form-ebook" ? "E_BOOK" : "CONTATO_DO_SITE",
        indiceAtual: d.indice,
        bandaAtual: BANDA_TO_SELECT[d.banda]
      };
      if (values.whatsapp) {
        person.phones = {
          primaryPhoneNumber: values.whatsapp.replace(/\D/g, ""),
          primaryPhoneCountryCode: "BR",
          primaryPhoneCallingCode: "+55"
        };
      }
      if (values.crp) person.crp = values.crp;
      if (values.abordagem) person.abordagem = values.abordagem;
      if (Number.isFinite(anos) && anos > 0) person.anosDeFormada = anos;
      if (ATUACAO_SELECT.has(atuacao)) person.atuacao = atuacao;

      const personId = await upsertPerson(person, email);
      crmOk = true;

      // Secundários: falha aqui não derruba o cadastro (Person já capturou tudo).
      const dueAt = new Date(Date.now() + 2 * 86400_000).toISOString();
      const tarefa = `Escrever análise — ${fullName} (Índice ${d.indice}, gargalo: ${GARGALO_LABEL[d.gargalo]})`;
      await Promise.allSettled([
        attachNote(personId, `Respostas do form — ${fullName}`, markdown),
        attachTask(personId, tarefa, dueAt)
      ]).then((results) => {
        for (const r of results) {
          if (r.status === "rejected") console.error("[diagnostico] secundário falhou:", r.reason);
        }
      });
    } catch (error) {
      console.error("[diagnostico] Twenty falhou:", error);
    }
  }

  // --- E-mail (sempre que houver SMTP: notifica e segura o lead) ------------
  let mailOk = false;
  try {
    mailOk = await notify(values, d, markdown, crmOk);
  } catch (error) {
    console.error("[diagnostico] e-mail falhou:", error);
  }

  if (!crmOk && !mailOk) {
    // Nenhum destino configurado, ou todos falharam.
    const configured = Boolean(TWENTY_API_KEY) || Boolean(getTransporter());
    return NextResponse.json(
      { ok: false, error: configured ? "delivery_failed" : "unconfigured" },
      { status: configured ? 502 : 500 }
    );
  }

  return NextResponse.json({ ok: true, indice: d.indice, banda: d.banda });
}
