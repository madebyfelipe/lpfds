import "server-only";
import nodemailer from "nodemailer";
import { confirmationEmail, reminderEmail } from "./webinarEmailContent";

/**
 * Envio dos e-mails do webinar pelo SMTP do domínio (Hostinger, o mesmo do form
 * da imersão e do aviso interno). O conteúdo vem de `webinarEmailContent`; aqui
 * fica só o transporte. Degrada com segurança: sem SMTP configurado, as funções
 * devolvem `false` e a inscrição continua valendo.
 */
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
const TIMEOUT_MS = 12000;

/** Remetente legítimo: a mesma caixa autenticada que envia (passa SPF/DKIM). */
export const MAIL_FROM = `"Made by Felipe" <${SMTP_USER ?? "alo@madebyfelipe.com.br"}>`;

let transporter: nodemailer.Transporter | null = null;
export function getTransporter(): nodemailer.Transporter | null {
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

/** Confirmação de inscrição para o lead. `false` = SMTP não configurado. */
export async function sendConfirmation(to: string, nome: string): Promise<boolean> {
  const mailer = getTransporter();
  if (!mailer) return false;
  const { subject, text, html } = confirmationEmail(nome);
  await mailer.sendMail({ from: MAIL_FROM, to, subject, text, html });
  return true;
}

/** Lembrete de N dias antes (7/3/1) para o lead. */
export async function sendReminder(to: string, nome: string, dias: number): Promise<boolean> {
  const mailer = getTransporter();
  if (!mailer) return false;
  const { subject, text, html } = reminderEmail(nome, dias);
  await mailer.sendMail({ from: MAIL_FROM, to, subject, text, html });
  return true;
}
