import { NextResponse } from "next/server";
import { listarCaixas } from "@/lib/prospeccao/caixas";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { definirPausaCaixa } from "@/lib/prospeccao/twenty";

/** Pausa/reativa uma caixa do pool: { email, pausar }. Vale no próximo lote. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { email?: unknown; pausar?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const email = typeof body.email === "string" ? body.email.toLowerCase() : "";
  if (!listarCaixas().some((c) => c.email === email)) {
    return NextResponse.json({ ok: false, error: "caixa_desconhecida" }, { status: 404 });
  }
  try {
    await definirPausaCaixa(email, body.pausar === true, body.pausar === true ? "Pausada pelo painel." : "");
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[painel/caixas]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
