import { NextResponse } from "next/server";
import { CLASSIFICACOES, LIMITES_TEXTO, termoProibido, type Classificacao } from "@/lib/prospeccao/config";
import { autorizaRotina } from "@/lib/prospeccao/seguranca";
import { atualizarLead, buscarLead, patchDeTexto, type PatchLead } from "@/lib/prospeccao/twenty";
import { validarPesquisa, validarTextos } from "@/lib/prospeccao/validacao";

/**
 * Tarefas da rotina sobre um lead existente (PATCH, Bearer PROSPECCAO_TOKEN).
 * A pauta vem de GET /api/prospeccao/status → `tarefas`.
 *
 * - `completar`  lead importado (PESQUISAR): pesquisa + texto → REVISAR.
 *                `fonte` pode trocar pela URL onde o e-mail aparece publicado.
 * - `reescrever` pedido de reescrita do Felipe: texto novo, limpa a instrução.
 * - `responder`  resposta recebida: classificação + rascunho da réplica.
 *                Só rascunho — quem envia é o Felipe, pelo painel.
 * - `descartar`  lead que não serve (site fora do ar, fora do ICP): DESCARTADO.
 *
 * As regras de copy são as mesmas da criação; a rotina não tem atalho.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!autorizaRotina(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const { id } = await params;
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const lead = await buscarLead(id).catch(() => null);
  if (!lead) return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });

  const patch: PatchLead = {};
  switch (body.acao) {
    case "completar": {
      if (lead.status !== "PESQUISAR") return NextResponse.json({ ok: false, error: "nao_e_importado" }, { status: 409 });
      const pesquisa = validarPesquisa(body);
      if (!pesquisa.ok) return NextResponse.json({ ok: false, error: pesquisa.motivo }, { status: 400 });
      const textos = validarTextos(body);
      if (!textos.ok) return NextResponse.json({ ok: false, error: textos.motivo }, { status: 400 });
      Object.assign(patch, patchDeTexto(textos.valor), {
        prospStatus: "REVISAR",
        prospEvidencia: pesquisa.valor.evidencia,
        prospHipotese: pesquisa.valor.hipotese,
        prospLimite: pesquisa.valor.limite || lead.limite,
        prospPrioridade: pesquisa.valor.prioridade,
        prospScore: pesquisa.valor.score
      } satisfies PatchLead);
      if (pesquisa.valor.linkedinNota) {
        patch.prospLinkedinNota = pesquisa.valor.linkedinNota;
        patch.prospLinkedinStatus = "SUGERIDO";
      }
      break;
    }
    case "reescrever": {
      if (lead.status !== "REVISAR" && lead.status !== "PRONTO") {
        return NextResponse.json({ ok: false, error: "ja_enviado" }, { status: 409 });
      }
      const textos = validarTextos(body);
      if (!textos.ok) return NextResponse.json({ ok: false, error: textos.motivo }, { status: 400 });
      // Volta para revisão: o Felipe pediu a mudança, ele aprova o resultado.
      Object.assign(patch, patchDeTexto(textos.valor), { prospInstrucao: "", prospStatus: "REVISAR" } satisfies PatchLead);
      break;
    }
    case "responder": {
      if (lead.status !== "RESPONDEU" && lead.status !== "REUNIAO") {
        return NextResponse.json({ ok: false, error: "sem_resposta" }, { status: 409 });
      }
      const c = String(body.classificacao ?? "");
      if (!(CLASSIFICACOES as readonly string[]).includes(c)) {
        return NextResponse.json({ ok: false, error: "classificacao_invalida" }, { status: 400 });
      }
      const sugestao = typeof body.sugestao === "string" ? body.sugestao.trim().slice(0, LIMITES_TEXTO.resposta) : "";
      if (sugestao && termoProibido(sugestao)) return NextResponse.json({ ok: false, error: "termo_proibido" }, { status: 400 });
      patch.prospClassificacao = c as Classificacao;
      patch.prospRespostaSugerida = sugestao;
      break;
    }
    case "descartar": {
      if (lead.status !== "PESQUISAR" && lead.status !== "REVISAR") {
        return NextResponse.json({ ok: false, error: "nao_descartavel" }, { status: 409 });
      }
      const motivo = typeof body.motivo === "string" ? body.motivo.trim().slice(0, 300) : "";
      patch.prospStatus = "DESCARTADO";
      patch.prospErro = `rotina: ${motivo || "fora do ICP"}`;
      break;
    }
    default:
      return NextResponse.json({ ok: false, error: "invalid_action" }, { status: 400 });
  }

  // Lead importado: a rotina pode trocar a origem da lista pela página onde o
  // e-mail aparece publicado (aí o rodapé passa a dizer "vi seu e-mail em …").
  if (body.acao === "completar" && typeof body.fonte === "string" && /^https?:\/\//.test(body.fonte)) {
    patch.prospFonte = body.fonte.trim().slice(0, LIMITES_TEXTO.curto);
  }

  try {
    await atualizarLead(id, patch);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[prospeccao/leads/id]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
