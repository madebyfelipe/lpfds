import { NextResponse } from "next/server";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { salvarBloqueios } from "@/lib/prospeccao/twenty";

/** Lista "não contatar": { texto } com um e-mail ou domínio por linha. Substitui a lista inteira. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { texto?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const texto = typeof body.texto === "string" ? body.texto.slice(0, 50_000) : "";
  try {
    const lista = await salvarBloqueios(texto.split("\n"));
    return NextResponse.json({ ok: true, bloqueios: lista });
  } catch (error) {
    console.error("[painel/bloqueios]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
