import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Diagnóstico do envio de e-mail do site.
 *
 * Responde se o SMTP do domínio (Hostinger) está configurado no projeto e se a
 * caixa autentica — sem enviar nenhuma mensagem. Serve para separar "o e-mail
 * não saiu porque falta configuração" de "saiu mas caiu em spam" ou de "o
 * formulário falhou por outro motivo".
 *
 * Só devolve booleanos e o domínio da caixa. Nunca devolve a senha, o usuário
 * completo nem o conteúdo do erro do provedor.
 *
 * O `verify()` abre conexão de verdade, então o resultado fica em cache por 60s
 * dentro da mesma instância para não repetir autenticação a cada chamada.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TIMEOUT_MS = 12000;
const CACHE_MS = 60_000;

type Health = {
  smtpConfigured: boolean;
  host: string | null;
  port: number | null;
  mailboxDomain: string | null;
  authOk: boolean | null;
  checkedAt: string;
};

let cached: { at: number; body: Health } | null = null;

export async function GET() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (cached && Date.now() - cached.at < CACHE_MS) {
    return NextResponse.json(cached.body, { headers: { "Cache-Control": "no-store" } });
  }

  const port = Number(SMTP_PORT ?? 465);
  const mailboxDomain = SMTP_USER?.includes("@") ? SMTP_USER.split("@")[1] : null;
  const body: Health = {
    smtpConfigured: Boolean(SMTP_HOST && SMTP_USER && SMTP_PASSWORD),
    host: SMTP_HOST ?? null,
    port: SMTP_HOST ? port : null,
    mailboxDomain,
    authOk: null,
    checkedAt: new Date().toISOString(),
  };

  if (body.smtpConfigured) {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      connectionTimeout: TIMEOUT_MS,
      greetingTimeout: TIMEOUT_MS,
    });
    try {
      await transporter.verify();
      body.authOk = true;
    } catch {
      body.authOk = false;
    } finally {
      transporter.close();
    }
  }

  cached = { at: Date.now(), body };
  return NextResponse.json(body, { headers: { "Cache-Control": "no-store" } });
}
