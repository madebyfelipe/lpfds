import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  LP_LEAD_BCC,
  LP_LEAD_TO,
  MAX_ANSWERS,
  MAX_FIELD,
  lpLeadFieldLabels,
  lpSourceLabels,
  validateLpLead,
  type LpLeadInput
} from "@/lib/lp-lead";

/**
 * Lead das LPs de captação (/lp/marca, /lp/site) — manda o pedido por e-mail.
 *
 * Mesmo SMTP do domínio que a rota /api/imersao usa (ver aquele arquivo para
 * o motivo do remetente ser a própria caixa que recebe). Mantida separada
 * porque os campos são diferentes (sem CRP, com as respostas do quiz).
 */
export const runtime = "nodejs";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
const TIMEOUT_MS = 15000;

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function whatsappLink(raw: string) {
  const digits = raw.replace(/\D/g, "");
  return `https://wa.me/${digits.length <= 11 ? `55${digits}` : digits}`;
}

export async function POST(request: Request) {
  let body: Partial<LpLeadInput>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const clean = {
    source: body.source,
    respostas: Array.isArray(body.respostas)
      ? body.respostas.slice(0, MAX_ANSWERS).map((r) => String(r).trim().slice(0, MAX_FIELD))
      : [],
    nome: String(body.nome ?? "").trim().slice(0, MAX_FIELD),
    whatsapp: String(body.whatsapp ?? "").trim().slice(0, MAX_FIELD),
    // O aceite é validado aqui também: o cliente pode ser contornado, e sem
    // consentimento não há base legal para guardar nem responder o contato.
    consentimento: body.consentimento === true
  } as LpLeadInput;

  const invalid = validateLpLead(clean);
  if (invalid) {
    return NextResponse.json(
      { ok: false, error: "invalid_field", field: invalid },
      { status: 400 }
    );
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.error("[lp-lead] SMTP não configurado — faltam variáveis de ambiente.");
    return NextResponse.json({ ok: false, error: "smtp_unconfigured" }, { status: 500 });
  }

  const recebidoEm = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const link = whatsappLink(clean.whatsapp);
  const origem = lpSourceLabels[clean.source];

  const linhas: Array<[string, string]> = [
    [lpLeadFieldLabels.nome, clean.nome],
    [lpLeadFieldLabels.whatsapp, clean.whatsapp],
    ...clean.respostas.map((resposta, i): [string, string] => [`Resposta ${i + 1}`, resposta]),
    ["Recebido em", `${recebidoEm} (horário de Brasília)`],
    // Registrado no próprio e-mail: é a prova de consentimento que o art. 8º,
    // § 2º da LGPD põe sob responsabilidade do controlador.
    ["Aceite da política", `sim — ${recebidoEm}`]
  ];

  try {
    await mailer.sendMail({
      from: `"Made by Felipe — site" <${SMTP_USER}>`,
      to: LP_LEAD_TO,
      bcc: LP_LEAD_BCC,
      subject: `Novo lead — ${origem} — ${clean.nome}`,
      text: [
        ...linhas.map(([rotulo, valor]) => `${rotulo}: ${valor}`),
        "",
        `Abrir no WhatsApp: ${link}`,
        "",
        `Enviado pelo formulário de /lp/${clean.source} — madebyfelipe.com`
      ].join("\n"),
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;color:#151515;max-width:520px">
          <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#bc0319;margin:0 0 16px">
            Novo lead — ${escapeHtml(origem)}
          </p>
          <table style="border-collapse:collapse;width:100%;font-size:15px">
            ${linhas
              .map(
                ([rotulo, valor]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ececec;color:#767676;width:140px;vertical-align:top">${escapeHtml(rotulo)}</td>
                <td style="padding:10px 0;border-bottom:1px solid #ececec;font-weight:600">${escapeHtml(valor)}</td>
              </tr>`
              )
              .join("")}
          </table>
          <p style="margin:24px 0 0">
            <a href="${link}" style="background:#bc0319;color:#f6f6f6;text-decoration:none;padding:12px 22px;border-radius:2px;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase">
              Responder no WhatsApp
            </a>
          </p>
          <p style="margin:24px 0 0;font-size:12px;color:#767676">
            Enviado pelo formulário de /lp/${clean.source} — madebyfelipe.com
          </p>
        </div>`
    });
  } catch (error) {
    console.error("[lp-lead] Envio falhou:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
