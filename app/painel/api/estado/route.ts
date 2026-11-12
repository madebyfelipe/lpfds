import { NextResponse } from "next/server";
import { caixaConfigurada } from "@/lib/prospeccao/caixas";
import { iaConfigurada } from "@/lib/prospeccao/ia";
import { configuracao, distribuir, estadoDasCaixas, montarFila } from "@/lib/prospeccao/operacao";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { segredosConfigurados } from "@/lib/prospeccao/seguranca";
import { listarCaixas } from "@/lib/prospeccao/caixas";
import {
  lerBloqueios,
  listarCampanhas,
  listarExecucoes,
  listarLeads,
  pausaAtiva,
  twentyConfigurado
} from "@/lib/prospeccao/twenty";

/** Tudo o que o painel precisa numa ida só: leads, campanhas, caixas, fila, execuções, configuração. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const cfg = configuracao();
  const pronto = { twenty: twentyConfigurado(), smtp: caixaConfigurada(), ia: iaConfigurada(), ...segredosConfigurados() };
  if (!pronto.twenty) return NextResponse.json({ ok: false, error: "twenty_unconfigured", cfg, pronto });
  try {
    const [leads, campanhas, bloqueios, execucoes, pausado] = await Promise.all([
      listarLeads(),
      // Acessórios: se falharem, o painel abre mesmo assim.
      listarCampanhas().catch(() => []),
      lerBloqueios().catch(() => []),
      listarExecucoes(25).catch(() => []),
      pausaAtiva()
    ]);
    const caixas = await estadoDasCaixas(leads);
    // Prévia da fila: assume todas as caixas lidas (é o que o próximo lote faz).
    const orcamento = new Map(caixas.map((c) => [c.email, c.pausada ? 0 : Math.max(0, c.limiteHoje - c.enviadosHoje)]));
    const fila = distribuir(
      montarFila(leads, cfg.modo, { campanhas, bloqueios }),
      orcamento,
      listarCaixas(),
      new Set(caixas.map((c) => c.email))
    ).map((i) => ({ id: i.lead.id, tipo: i.tipo, caixa: i.caixa.email }));

    return NextResponse.json({
      ok: true,
      cfg: {
        ...cfg,
        pausado: cfg.pausado || pausado,
        pausaPeloPainel: pausado,
        limiteHoje: caixas.filter((c) => !c.pausada).reduce((a, c) => a + c.limiteHoje, 0),
        limiteAmanha: caixas.filter((c) => !c.pausada).reduce((a, c) => a + c.limiteAmanha, 0),
        enviadosHoje: caixas.reduce((a, c) => a + c.enviadosHoje, 0)
      },
      pronto,
      caixas,
      campanhas,
      bloqueios,
      fila,
      leads,
      execucoes
    });
  } catch (error) {
    console.error("[painel/estado]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed", cfg, pronto }, { status: 502 });
  }
}
