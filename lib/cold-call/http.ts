import { NextResponse } from "next/server";
import { Validacao, objeto } from "./model";
import { StorageError } from "./store";
export const json = (data: unknown, status = 200) =>
  NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
export async function body(request: Request) {
  if (Number(request.headers.get("content-length")) > 100000)
    throw new Validacao("Lote muito grande (máximo 100 KB).");
  const text = await request.text();
  if (text.length > 100000)
    throw new Validacao("Lote muito grande (máximo 100 KB).");
  try {
    return objeto(JSON.parse(text));
  } catch (e) {
    if (e instanceof Validacao) throw e;
    throw new Validacao("JSON inválido.");
  }
}
export function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const u = new URL(origin);
    const host = request.headers.get("host") || new URL(request.url).host;
    return (
      ["https:", "http:"].includes(u.protocol) &&
      !u.username &&
      !u.password &&
      u.host === host
    );
  } catch {
    return false;
  }
}
export function falha(e: unknown) {
  if (e instanceof Validacao) return json({ ok: false, error: e.message }, 400);
  if (e instanceof StorageError)
    return json(
      { ok: false, error: e.message },
      [400, 404, 409, 503].includes(e.status) ? e.status : 502,
    );
  console.error(
    "[cold-call] falha interna",
    e instanceof Error ? e.name : "unknown",
  );
  return json(
    { ok: false, error: "Não foi possível concluir. Tente novamente." },
    500,
  );
}
