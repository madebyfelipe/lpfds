import nodemailer from "nodemailer";

/**
 * SMTP do próprio domínio (Hostinger), autenticado como a caixa que recebe —
 * o remetente é `alo@` de verdade, sem esbarrar em SPF/DKIM. Compartilhado
 * pelas rotas que mandam pedido por e-mail (/api/imersao, /api/lp-lead).
 * Só servidor: as credenciais vêm do ambiente.
 */
const TIMEOUT_MS = 15000;

let transporter: nodemailer.Transporter | null = null;

/** null quando faltam variáveis: a rota responde 500 e o form oferece o WhatsApp. */
export function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null;
  const port = Number(SMTP_PORT ?? 465);
  // Uma instância só: reaproveita a conexão entre requisições.
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
export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Só dígitos, para montar o link de WhatsApp; assume +55 quando vier sem DDI. */
export function whatsappLink(raw: string) {
  const digits = raw.replace(/\D/g, "");
  return `https://wa.me/${digits.length <= 11 ? `55${digits}` : digits}`;
}
