import { NextResponse } from "next/server";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { definirPausa } from "@/lib/prospeccao/twenty";

/** Freio de emergência: { pausar: true | false }. Vale já no próximo lote do cron. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { pausar?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  try {
    await definirPausa(body.pausar === true);
    return NextResponse.json({ ok: true, pausado: body.pausar === true });
  } catch (error) {
    console.error("[painel/pausa]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
