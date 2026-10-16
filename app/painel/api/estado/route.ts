import { NextResponse } from "next/server";
import { inicioDoDiaBrtIso } from "@/lib/prospeccao/config";
import { caixaConfigurada, remetente } from "@/lib/prospeccao/caixa";
import { configuracao, enviadosDesde, montarFila } from "@/lib/prospeccao/operacao";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { segredosConfigurados } from "@/lib/prospeccao/seguranca";
import { listarExecucoes, listarLeads, pausaAtiva, twentyConfigurado } from "@/lib/prospeccao/twenty";

/** Tudo o que o painel precisa numa ida só: leads, fila, limites, execuções, configuração. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = configuracao();
  const r = remetente();
  const pronto = { twenty: twentyConfigurado(), smtp: caixaConfigurada(), ...segredosConfigurados() };
  if (!pronto.twenty) {
    return NextResponse.json({ ok: false, error: "twenty_unconfigured", cfg, pronto, remetente: r });
  }
  try {
    const [leads, execucoes, pausado] = await Promise.all([
      listarLeads(),
      // Histórico é acessório: se a listagem de Notes falhar, o painel abre mesmo assim.
      listarExecucoes(20).catch(() => []),
      pausaAtiva()
    ]);
    const fila = montarFila(leads, cfg.modo).map((i) => ({ id: i.lead.id, tipo: i.tipo }));
    return NextResponse.json({
      ok: true,
      cfg: { ...cfg, pausado: cfg.pausado || pausado, pausaPeloPainel: pausado },
      pronto,
      remetente: r,
      enviadosHoje: enviadosDesde(leads, inicioDoDiaBrtIso()),
      fila,
      leads,
      execucoes
    });
  } catch (error) {
    console.error("[painel/estado]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed", cfg, pronto, remetente: r }, { status: 502 });
  }
}
