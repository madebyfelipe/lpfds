import { NextResponse } from "next/server";
import {
  CLASSIFICACOES,
  LIMITES_TEXTO,
  LINKEDIN_STATUS,
  STATUS_CONVERSA,
  STATUS_EM_SEQUENCIA,
  type Classificacao,
  type LinkedinStatus
} from "@/lib/prospeccao/config";
import { iaConfigurada, lerResposta, reescreverEmail } from "@/lib/prospeccao/ia";
import { configuracao } from "@/lib/prospeccao/operacao";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { atualizarLead, buscarLead, listarCampanhas, patchDeTexto, type PatchLead } from "@/lib/prospeccao/twenty";
import { validarTextos } from "@/lib/prospeccao/validacao";

/**
 * Ações do Felipe sobre um lead.
 *
 * Revisão:   editar · aprovar (→ PRONTO) · revisar (tira da fila) · descartar
 *            reescrever { instrucao } → IA na hora, ou pedido para a rotina
 * Sequência: editar follow-ups que ainda não saíram · parar (→ DESCARTADO)
 * Conversa:  classificar · sugerir (IA lê a resposta e rascunha) · reuniao · encerrar
 * LinkedIn:  linkedin { linkedinStatus, linkedinNota }
 *
 * Texto de e-mail já enviado não muda (o CRM é o registro do que saiu).
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 90;

const erro = (error: string, status = 400, extra: Record<string, unknown> = {}) =>
  NextResponse.json({ ok: false, error, ...extra }, { status });

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!autorizaPainel(request)) return erro("unauthorized", 401);
  const { id } = await params;
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return erro("invalid_json");
  }

  const lead = await buscarLead(id).catch(() => null);
  if (!lead) return erro("not_found", 404);
  const naRevisao = lead.status === "REVISAR" || lead.status === "PRONTO";
  const emSequencia = STATUS_EM_SEQUENCIA.includes(lead.status);
  const emConversa = STATUS_CONVERSA.includes(lead.status);
  const patch: PatchLead = {};
  let aviso = "";

  switch (body.acao) {
    case "editar":
    case "aprovar": {
      if (naRevisao) {
        const v = validarTextos({
          assunto: body.assunto ?? lead.assunto,
          assuntoB: body.assuntoB ?? lead.assuntoB,
          mensagem: body.mensagem ?? lead.mensagem,
          followups: Array.isArray(body.followups) ? body.followups : lead.followups
        });
        if (!v.ok) return erro(v.motivo);
        Object.assign(patch, patchDeTexto(v.valor));
        if (body.acao === "aprovar") patch.prospStatus = "PRONTO";
      } else if (emSequencia && body.acao === "editar" && Array.isArray(body.followups)) {
        // Na sequência, só os follow-ups que ainda não saíram podem mudar.
        const novos = [0, 1, 2].map((i) =>
          i < lead.etapa - 1 ? lead.followups[i] : String((body.followups as unknown[])[i] ?? "").trim()
        );
        const v = validarTextos({ assunto: lead.assunto, assuntoB: lead.assuntoB, mensagem: lead.mensagem, followups: novos });
        if (!v.ok) return erro(v.motivo);
        Object.assign(patch, { prospFollowup: novos[0], prospFollowup2: novos[1], prospFollowup3: novos[2] });
      } else {
        return erro("ja_enviado", 409);
      }
      break;
    }
    case "revisar":
    case "descartar": {
      if (!naRevisao && lead.status !== "PESQUISAR") return erro("ja_enviado", 409);
      patch.prospStatus = body.acao === "revisar" ? "REVISAR" : "DESCARTADO";
      break;
    }
    case "parar": {
      // Interrompe uma sequência em andamento (ex.: falou com ela por outro canal).
      if (!emSequencia) return erro("sem_sequencia", 409);
      patch.prospStatus = "DESCARTADO";
      patch.prospErro = "sequência interrompida pelo painel";
      break;
    }
    case "reescrever": {
      if (!naRevisao) return erro("ja_enviado", 409);
      const instrucao = typeof body.instrucao === "string" ? body.instrucao.trim().slice(0, 600) : "";
      if (!instrucao) return erro("falta_instrucao");
      if (!iaConfigurada()) {
        // Sem IA no painel: fica na pauta da rotina desta noite.
        patch.prospInstrucao = instrucao;
        aviso = "na_rotina";
        break;
      }
      const campanha = (await listarCampanhas().catch(() => [])).find((c) => c.slug === lead.campanha);
      const r = await reescreverEmail(lead, instrucao, campanha);
      if (!r.ok) return erro(r.erro, 502);
      Object.assign(patch, patchDeTexto(r.dados), { prospInstrucao: "", prospStatus: "REVISAR" } satisfies PatchLead);
      aviso = "reescrito";
      break;
    }
    case "classificar": {
      if (!emConversa) return erro("sem_resposta", 409);
      const c = String(body.classificacao ?? "");
      if (!(CLASSIFICACOES as readonly string[]).includes(c)) return erro("classificacao_invalida");
      patch.prospClassificacao = c as Classificacao;
      break;
    }
    case "sugerir": {
      if (!emConversa || !lead.resposta) return erro("sem_resposta", 409);
      if (!iaConfigurada()) return erro("ia_desligada", 409);
      const campanha = (await listarCampanhas().catch(() => [])).find((c) => c.slug === lead.campanha);
      const enviado = lead.etapa > 1 ? lead.followups[lead.etapa - 2] || lead.mensagem : lead.mensagem;
      const r = await lerResposta(lead, enviado, configuracao().linkAgenda, campanha);
      if (!r.ok) return erro(r.erro, 502);
      patch.prospClassificacao = r.dados.classificacao;
      patch.prospRespostaSugerida = r.dados.sugestao;
      break;
    }
    case "rascunho": {
      // Guarda o rascunho editado à mão sem enviar.
      if (!emConversa) return erro("sem_resposta", 409);
      patch.prospRespostaSugerida = String(body.texto ?? "").slice(0, LIMITES_TEXTO.resposta);
      break;
    }
    case "reuniao": {
      if (!emConversa) return erro("sem_resposta", 409);
      patch.prospStatus = "REUNIAO";
      if (!lead.classificacao) patch.prospClassificacao = "INTERESSADA";
      break;
    }
    case "encerrar": {
      // Conversa sem futuro: sai da caixa de conversas, segue suprimida.
      if (!emConversa) return erro("sem_resposta", 409);
      patch.prospStatus = "DESCARTADO";
      if (!lead.classificacao) patch.prospClassificacao = "SEM_INTERESSE";
      break;
    }
    case "linkedin": {
      const st = body.linkedinStatus as LinkedinStatus;
      if (!(LINKEDIN_STATUS as readonly string[]).includes(st)) return erro("invalid_status");
      patch.prospLinkedinStatus = st;
      if (typeof body.linkedinNota === "string") patch.prospLinkedinNota = body.linkedinNota.slice(0, LIMITES_TEXTO.linkedinNota);
      break;
    }
    default:
      return erro("invalid_action");
  }

  try {
    await atualizarLead(id, patch);
    return NextResponse.json({ ok: true, aviso, lead: await buscarLead(id) });
  } catch (error) {
    console.error("[painel/leads]", error);
    return erro("twenty_failed", 502);
  }
}
