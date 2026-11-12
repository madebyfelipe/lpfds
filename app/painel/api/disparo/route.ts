import { NextResponse } from "next/server";
import { disparar } from "@/lib/prospeccao/operacao";
import { autorizaPainel } from "@/lib/prospeccao/painel";

/**
 * Disparo manual pelo painel. `{ dry: true }` só mostra a fila; sem dry, envia
 * o que resta do limite de hoje — mesmas regras do cron (lib/prospeccao/operacao).
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { dry?: unknown } = {};
  try {
    body = await request.json();
  } catch {
    /* sem corpo = envio real */
  }
  try {
    const r = await disparar({ dry: body.dry === true, tudo: true });
    return NextResponse.json(r);
  } catch (error) {
    console.error("[painel/disparo]", error);
    return NextResponse.json({ ok: false, error: "disparo_failed" }, { status: 502 });
  }
}
