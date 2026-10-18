import { NextResponse } from "next/server";
import { CADENCIA, alocarPesquisa, metricasDe } from "@/lib/prospeccao/config";
import { caixaConfigurada } from "@/lib/prospeccao/caixas";
import { iaConfigurada } from "@/lib/prospeccao/ia";
import { configuracao, estadoDasCaixas } from "@/lib/prospeccao/operacao";
import { autorizaRotina, segredosConfigurados } from "@/lib/prospeccao/seguranca";
import { lerBloqueios, listarCampanhas, listarLeads, pausaAtiva, twentyConfigurado } from "@/lib/prospeccao/twenty";

/**
 * Pré-voo e pauta da rotina noturna (GET, Bearer PROSPECCAO_TOKEN).
 *
 * Diz se o sistema está de pé e o que fazer esta noite:
 * - `campanhas`: briefing de cada campanha ATIVA + quantos leads novos
 *   pesquisar para ela (`pesquisar`), alocado pelo desempenho (positivas por
 *   contatado, com piso para toda campanha ter amostra);
 * - `tarefas`: leads importados para completar, pedidos de reescrita e
 *   respostas sem leitura (quando não há IA no painel, a rotina faz isso);
 * - `bloqueios`: domínios/e-mails que não se contata.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_TAREFAS = 15;

export async function GET(request: Request) {
  if (!segredosConfigurados().token) {
    return NextResponse.json({ ok: false, error: "token_unconfigured" }, { status: 503 });
  }
  if (!autorizaRotina(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });

  const cfg = configuracao();
  const pronto = { twenty: twentyConfigurado(), smtp: caixaConfigurada(), ia: iaConfigurada(), ...segredosConfigurados() };
  if (!pronto.twenty) return NextResponse.json({ ok: false, error: "twenty_unconfigured", pronto }, { status: 503 });

  try {
    const [leads, campanhas, pausado, bloqueios] = await Promise.all([
      listarLeads(),
      listarCampanhas(),
      pausaAtiva(),
      lerBloqueios()
    ]);
    const caixas = await estadoDasCaixas(leads);
    const limiteAmanha = caixas.filter((c) => !c.pausada).reduce((a, c) => a + c.limiteAmanha, 0);
    const naFila = leads.filter((l) => l.status === "REVISAR" || l.status === "PRONTO").length;
    // Folga de 50%: parte do que a rotina traz o Felipe descarta na revisão.
    const alvo = Math.ceil(Math.max(limiteAmanha, CADENCIA.limiteInicial) * 1.5);
    const pesquisarAte = Math.max(0, Math.min(15, alvo - naFila));

    const ativas = campanhas.filter((c) => c.status === "ATIVA");
    const cotas = alocarPesquisa(
      ativas.map((c) => ({ slug: c.slug, metricas: metricasDe(leads.filter((l) => l.campanha === c.slug)) })),
      pesquisarAte
    );

    const resumo = (l: (typeof leads)[number]) => ({
      id: l.id,
      email: l.email,
      empresa: l.empresa,
      nome: l.nome,
      cidade: l.cidade,
      campanha: l.campanha,
      fonte: l.fonte,
      evidencia: l.evidencia
    });

    return NextResponse.json({
      ok: true,
      modo: cfg.modo,
      pausado: cfg.pausado || pausado,
      inicio: cfg.inicio || null,
      limiteAmanha,
      naFila,
      pesquisarAte,
      campanhas: ativas.map((c) => ({ ...c, pesquisar: cotas[c.slug] ?? 0, metricas: metricasDe(leads.filter((l) => l.campanha === c.slug)) })),
      bloqueios,
      tarefas: {
        completar: leads.filter((l) => l.status === "PESQUISAR").slice(0, MAX_TAREFAS).map(resumo),
        reescrever: leads
          .filter((l) => l.instrucao && (l.status === "REVISAR" || l.status === "PRONTO"))
          .slice(0, MAX_TAREFAS)
          .map((l) => ({
            ...resumo(l),
            instrucao: l.instrucao,
            assunto: l.assunto,
            assuntoB: l.assuntoB,
            mensagem: l.mensagem,
            followups: l.followups
          })),
        // Sem IA no painel, a leitura e o rascunho da réplica ficam com a rotina.
        responder: iaConfigurada()
          ? []
          : leads
              .filter((l) => l.status === "RESPONDEU" && l.resposta && !l.respostaSugerida)
              .slice(0, MAX_TAREFAS)
              .map((l) => ({
                ...resumo(l),
                classificacao: l.classificacao,
                resposta: l.resposta,
                enviado: l.etapa > 1 ? l.followups[l.etapa - 2] || l.mensagem : l.mensagem
              }))
      },
      pronto
    });
  } catch (error) {
    console.error("[prospeccao/status]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
