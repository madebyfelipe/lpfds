import { NextResponse } from "next/server";
import { CADENCIA } from "@/lib/prospeccao/config";
import { caixaConfigurada } from "@/lib/prospeccao/caixa";
import { configuracao } from "@/lib/prospeccao/operacao";
import { autorizaRotina, segredosConfigurados } from "@/lib/prospeccao/seguranca";
import { listarLeads, pausaAtiva, twentyConfigurado } from "@/lib/prospeccao/twenty";

/**
 * Pré-voo da rotina noturna (GET, Bearer PROSPECCAO_TOKEN). Diz se o sistema
 * está de pé e quantos leads novos valem a pena pesquisar esta noite — não
 * adianta encher a fila além do que o limite de amanhã consegue enviar.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!segredosConfigurados().token) {
    return NextResponse.json({ ok: false, error: "token_unconfigured" }, { status: 503 });
  }
  if (!autorizaRotina(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });

  const cfg = configuracao();
  const pronto = { twenty: twentyConfigurado(), smtp: caixaConfigurada(), ...segredosConfigurados() };
  if (!pronto.twenty) return NextResponse.json({ ok: false, error: "twenty_unconfigured", pronto }, { status: 503 });

  try {
    const [fila, pausado] = await Promise.all([listarLeads(["REVISAR", "PRONTO"]), pausaAtiva()]);
    // Folga de 50%: parte do que a rotina traz o Felipe descarta na revisão.
    const alvo = Math.ceil(Math.max(cfg.limiteAmanha, CADENCIA.limiteInicial) * 1.5);
    return NextResponse.json({
      ok: true,
      modo: cfg.modo,
      pausado: cfg.pausado || pausado,
      inicio: cfg.inicio || null,
      limiteHoje: cfg.limiteHoje,
      limiteAmanha: cfg.limiteAmanha,
      naFila: fila.length,
      pesquisarAte: Math.max(0, Math.min(15, alvo - fila.length)),
      pronto
    });
  } catch (error) {
    console.error("[prospeccao/status]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
