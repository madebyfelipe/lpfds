import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  IMERSAO_BCC,
  IMERSAO_TO,
  MAX_FIELD,
  fieldLabels,
  validateImersao,
  type ImersaoInput
} from "@/lib/imersao";

/**
 * Form da imersão (/imersao) — manda o pedido por e-mail.
 *
 * Vai por SMTP do próprio domínio (Hostinger), autenticado como a caixa que
 * recebe: assim o remetente é `alo@madebyfelipe.com.br` de verdade, sem
 * problema de SPF/DKIM que um "From" falsificado teria.
 *
 * As credenciais vêm do ambiente (.env.local em dev, painel da hospedagem em
 * produção). Sem elas a rota responde 500 e o form mostra o WhatsApp como
 * alternativa — nunca finge que enviou.
 */
export const runtime = "nodejs";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
const TIMEOUT_MS = 15000;

// Uma instância só: o transporter reaproveita a conexão entre requisições.
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null;
  const port = Number(SMTP_PORT ?? 465);
  transporter ??= nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    // 465 é TLS implícito; 587 sobe para TLS com STARTTLS.
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: TIMEOUT_MS,
    greetingTimeout: TIMEOUT_MS
  });
  return transporter;
}

/** O corpo em HTML carrega dados digitados por terceiros — nada entra cru. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Só dígitos, para montar o link de WhatsApp; assume +55 quando vier sem DDI. */
function whatsappLink(raw: string) {
  const digits = raw.replace(/\D/g, "");
  return `https://wa.me/${digits.length <= 11 ? `55${digits}` : digits}`;
}

export async function POST(request: Request) {
  let body: Partial<ImersaoInput>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const clean = {
    nome: String(body.nome ?? "").trim().slice(0, MAX_FIELD),
    crp: String(body.crp ?? "").trim().slice(0, MAX_FIELD),
    whatsapp: String(body.whatsapp ?? "").trim().slice(0, MAX_FIELD)
  };

  const invalid = validateImersao(clean);
  if (invalid) {
    return NextResponse.json(
      { ok: false, error: "invalid_field", field: invalid },
      { status: 400 }
    );
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.error("[imersao] SMTP não configurado — faltam variáveis de ambiente.");
    return NextResponse.json({ ok: false, error: "smtp_unconfigured" }, { status: 500 });
  }

  const recebidoEm = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const link = whatsappLink(clean.whatsapp);

  const linhas: Array<[string, string]> = [
    [fieldLabels.nome, clean.nome],
    [fieldLabels.crp, clean.crp],
    [fieldLabels.whatsapp, clean.whatsapp],
    ["Recebido em", `${recebidoEm} (horário de Brasília)`]
  ];

  try {
    await mailer.sendMail({
      from: `"Made by Felipe — site" <${SMTP_USER}>`,
      to: IMERSAO_TO,
      bcc: IMERSAO_BCC,
      subject: `Nova imersão — ${clean.nome} (CRP ${clean.crp})`,
      text: [
        ...linhas.map(([rotulo, valor]) => `${rotulo}: ${valor}`),
        "",
        `Abrir no WhatsApp: ${link}`,
        "",
        "Enviado pelo formulário de /imersao — madebyfelipe.com"
      ].join("\n"),
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;color:#151515;max-width:520px">
          <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#bc0319;margin:0 0 16px">
            Novo pedido de imersão
          </p>
          <table style="border-collapse:collapse;width:100%;font-size:15px">
            ${linhas
              .map(
                ([rotulo, valor]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #ececec;color:#767676;width:120px">${escapeHtml(rotulo)}</td>
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
            Enviado pelo formulário de /imersao — madebyfelipe.com
          </p>
        </div>`
    });
  } catch (error) {
    console.error("[imersao] Envio falhou:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
