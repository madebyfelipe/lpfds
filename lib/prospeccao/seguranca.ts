import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Segredos da prospecção.
 *
 * - PROSPECCAO_TOKEN: o que a rotina noturna manda em `Authorization: Bearer`
 *   para gravar leads e registrar a execução. Também aceito no disparo manual.
 * - PROSPECCAO_SECRET: assina o link de descadastro. Separado do token para
 *   que vazar um link de descadastro não dê acesso a nada.
 * - CRON_SECRET: o mesmo do webinar; o Vercel Cron manda no header.
 *
 * Sem o segredo configurado, a rota correspondente recusa — nunca fica aberta.
 */
const { PROSPECCAO_TOKEN, PROSPECCAO_SECRET, CRON_SECRET } = process.env;

function igual(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

function bearer(request: Request): string {
  const h = request.headers.get("authorization") ?? "";
  return h.startsWith("Bearer ") ? h.slice(7) : "";
}

/** A rotina (ou o Felipe, à mão) autenticada pelo token. */
export function autorizaRotina(request: Request): boolean {
  return Boolean(PROSPECCAO_TOKEN) && igual(bearer(request), PROSPECCAO_TOKEN!);
}

/** Vercel Cron (CRON_SECRET) ou a rotina (PROSPECCAO_TOKEN). */
export function autorizaDisparo(request: Request): boolean {
  const t = bearer(request);
  if (!t) return false;
  return (Boolean(CRON_SECRET) && igual(t, CRON_SECRET!)) || autorizaRotina(request);
}

export const segredosConfigurados = () => ({
  token: Boolean(PROSPECCAO_TOKEN),
  secret: Boolean(PROSPECCAO_SECRET),
  cron: Boolean(CRON_SECRET)
});

const b64 = (s: string) => Buffer.from(s, "utf8").toString("base64url");

function assinatura(email: string): string {
  return createHmac("sha256", PROSPECCAO_SECRET ?? "")
    .update(`descadastro:${email.toLowerCase()}`)
    .digest()
    .subarray(0, 18)
    .toString("base64url");
}

/** Token do link de descadastro: e-mail + HMAC. Não expira (a saída tem de funcionar sempre). */
export function tokenDescadastro(email: string): string {
  if (!PROSPECCAO_SECRET) throw new Error("prospeccao_secret_unconfigured");
  return `${b64(email.toLowerCase())}.${assinatura(email)}`;
}

/** Devolve o e-mail se o token for válido. */
export function lerTokenDescadastro(token: string): string | null {
  if (!PROSPECCAO_SECRET) return null;
  const [corpo, sig] = token.split(".");
  if (!corpo || !sig) return null;
  let email: string;
  try {
    email = Buffer.from(corpo, "base64url").toString("utf8");
  } catch {
    return null;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return igual(sig, assinatura(email)) ? email : null;
}
