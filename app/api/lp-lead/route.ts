import { NextResponse } from "next/server";
import { IMERSAO_BCC, IMERSAO_TO } from "@/lib/imersao";
import {
  LP_MAX_FIELD,
  lpQuiz,
  lpTitulo,
  validateLpLead,
  type LpLeadInput,
  type LpOrigem
} from "@/lib/lp";
import { escapeHtml, getTransporter, whatsappLink } from "@/lib/smtp";

/**
 * Lead das LPs de captação (/lp/marca, /lp/site) — mesmo caminho do form da
 * imersão: e-mail por SMTP do domínio para a mesma caixa (IMERSAO_TO/BCC),
 * com as respostas do quiz e o botão para responder no WhatsApp.
 *
 * Sem SMTP ou com falha de envio, responde erro e o quiz manda a pessoa para
 * o WhatsApp — nunca mostra confirmação sem ter enviado.
 */
export const runtime = "nodejs";

// Tráfego pago atrai robô: honeypot no cliente + no máximo 3 envios por IP a
// cada 10 minutos (em memória, por instância — freio, não muralha).
const JANELA_MS = 10 * 60 * 1000;
const MAX_ENVIOS = 3;
const envios = new Map<string, number[]>();

function limitado(ip: string) {
  const agora = Date.now();
  const recentes = (envios.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  if (recentes.length >= MAX_ENVIOS) return true;
  envios.set(ip, [...recentes, agora]);
  return false;
}

function isOrigem(value: unknown): value is LpOrigem {
  return value === "marca" || value === "site";
}

export async function POST(request: Request) {
  let body: Partial<LpLeadInput> & { site?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  // Campo invisível preenchido = robô. Responde ok para não ensinar o filtro.
  if (body.site) return NextResponse.json({ ok: true });

  if (!isOrigem(body.origem)) {
    return NextResponse.json({ ok: false, error: "invalid_field", field: "respostas" }, { status: 400 });
  }

  const respostasBrutas = (body.respostas ?? {}) as Record<string, unknown>;
  const clean: LpLeadInput = {
    origem: body.origem,
    respostas: Object.fromEntries(
      lpQuiz[body.origem].map((step) => [step.id, String(respostasBrutas[step.id] ?? "")])
    ),
    nome: String(body.nome ?? "").trim().slice(0, LP_MAX_FIELD),
    whatsapp: String(body.whatsapp ?? "").trim().slice(0, LP_MAX_FIELD),
    // Validado aqui também: sem aceite não há base legal para o contato.
    consentimento: body.consentimento === true
  };

  const invalid = validateLpLead(clean);
  if (invalid) {
    return NextResponse.json({ ok: false, error: "invalid_field", field: invalid }, { status: 400 });
  }

  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "anon";
  if (limitado(ip)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const mailer = getTransporter();
  if (!mailer) {
    console.error("[lp-lead] SMTP não configurado — faltam variáveis de ambiente.");
    return NextResponse.json({ ok: false, error: "smtp_unconfigured" }, { status: 500 });
  }

  const recebidoEm = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
  const link = whatsappLink(clean.whatsapp);
  const titulo = lpTitulo[clean.origem];

  const linhas: Array<[string, string]> = [
    ["Nome", clean.nome],
    ["WhatsApp", clean.whatsapp],
    ...lpQuiz[clean.origem].map((step): [string, string] => [step.question, clean.respostas[step.id]]),
    ["Página", `/lp/${clean.origem}`],
    ["Recebido em", `${recebidoEm} (horário de Brasília)`],
    // Prova de consentimento (LGPD art. 8º, § 2º) no próprio e-mail.
    ["Aceite da política", `sim — ${recebidoEm}`]
  ];

  try {
    await mailer.sendMail({
      from: `"Made by Felipe — site" <${process.env.SMTP_USER}>`,
      to: IMERSAO_TO,
      bcc: IMERSAO_BCC,
      subject: `Novo lead — ${titulo} — ${clean.nome}`,
      text: [
        `Lead da LP de ${titulo.toLowerCase()}`,
        "",
        ...linhas.map(([rotulo, valor]) => `${rotulo}: ${valor}`),
        "",
        `Responder no WhatsApp: ${link}`
      ].join("\n"),
      html: `
        <div style="font-family:Helvetica,Arial,sans-serif;color:#151515;max-width:560px">
          <p style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#bc0319;margin:0 0 16px">
            Novo lead · ${escapeHtml(titulo)}
          </p>
          <table style="border-collapse:collapse;width:100%;font-size:15px">
            ${linhas
              .map(
                ([rotulo, valor]) => `
              <tr>
                <td style="padding:10px 12px 10px 0;border-bottom:1px solid #ececec;color:#767676;width:44%;vertical-align:top">${escapeHtml(rotulo)}</td>
                <td style="padding:10px 0;border-bottom:1px solid #ececec;font-weight:600;vertical-align:top">${escapeHtml(valor)}</td>
              </tr>`
              )
              .join("")}
          </table>
          <p style="margin:24px 0 0">
            <a href="${link}" style="background:#bc0319;color:#f6f6f6;text-decoration:none;padding:12px 22px;border-radius:2px;font-size:13px;font-weight:700;letter-spacing:.04em;text-transform:uppercase">
              Responder no WhatsApp
            </a>
          </p>
        </div>`
    });
  } catch (error) {
    console.error("[lp-lead] Envio falhou:", error);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
