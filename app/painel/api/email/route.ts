import { NextResponse } from "next/server";
import { calcular } from "@/lib/prospeccao/email-metricas";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { listarPessoasCrm, twentyConfigurado } from "@/lib/prospeccao/twenty";

/**
 * Aba "E-mail" do painel: só números agregados do cold mail (painel e Dylan),
 * calculados aqui no servidor. Nenhum nome, e-mail ou id de lead sai desta rota.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  if (!twentyConfigurado()) return NextResponse.json({ ok: false, error: "twenty_unconfigured" }, { status: 503 });
  try {
    const metricas = calcular(await listarPessoasCrm());
    return NextResponse.json({ ok: true, metricas }, { headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("[painel/email]", error);
    return NextResponse.json({ ok: false, error: "crm_failed" }, { status: 502 });
  }
}
