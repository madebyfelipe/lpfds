import { NextResponse } from "next/server";
import { lerCampanha } from "@/lib/prospeccao/campanhas";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { criarCampanha, listarCampanhas, type DadosCampanha } from "@/lib/prospeccao/twenty";

/** Cria uma campanha (briefing para a rotina). O slug liga os leads e não muda depois. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const v = lerCampanha(body, false);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.motivo }, { status: 400 });
  try {
    if ((await listarCampanhas()).some((c) => c.slug === v.valor.slug)) {
      return NextResponse.json({ ok: false, error: "slug_em_uso" }, { status: 409 });
    }
    const id = await criarCampanha({ icp: "", oferta: "", regioes: "", excluir: "", referencias: "", tom: "", ...v.valor } as DadosCampanha);
    return NextResponse.json({ ok: true, id });
  } catch (error) {
    console.error("[painel/campanhas]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
