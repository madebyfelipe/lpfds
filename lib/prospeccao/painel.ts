import "server-only";
import { timingSafeEqual } from "node:crypto";

/** Mesma credencial do proxy.ts, conferida de novo dentro das rotas /painel/api. */
export function autorizaPainel(request: Request): boolean {
  const senha = process.env.PAINEL_SENHA;
  if (!senha) return false;
  const usuario = process.env.PAINEL_USUARIO || "felipe";
  const esperado = Buffer.from(`Basic ${Buffer.from(`${usuario}:${senha}`).toString("base64")}`);
  const recebido = Buffer.from(request.headers.get("authorization") ?? "");
  return recebido.length === esperado.length && timingSafeEqual(recebido, esperado);
}
