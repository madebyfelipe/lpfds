import { NextResponse } from "next/server";
import { LIMITES_TEXTO, LINKEDIN_STATUS, checarCopy, termoProibido, type LinkedinStatus } from "@/lib/prospeccao/config";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { atualizarLead, buscarLead, type PatchLead } from "@/lib/prospeccao/twenty";

/**
 * Ações do Felipe sobre um lead: editar o texto, aprovar (→ PRONTO, entra na
 * fila), devolver para revisão, descartar, e marcar o passo no LinkedIn.
 * Só mexe em lead de prospecção que ainda não saiu — texto de e-mail já
 * enviado não muda (o CRM é o registro do que foi mandado).
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Acao = "editar" | "aprovar" | "revisar" | "descartar" | "linkedin";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const { id } = await params;
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const acao = body.acao as Acao;

  const lead = await buscarLead(id).catch(() => null);
  if (!lead) return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  const editavel = lead.status === "REVISAR" || lead.status === "PRONTO";

  const patch: PatchLead = {};
  if (acao === "linkedin") {
    const st = body.linkedinStatus as LinkedinStatus;
    if (!(LINKEDIN_STATUS as readonly string[]).includes(st)) {
      return NextResponse.json({ ok: false, error: "invalid_status" }, { status: 400 });
    }
    patch.prospLinkedinStatus = st;
    if (typeof body.linkedinNota === "string") patch.prospLinkedinNota = body.linkedinNota.slice(0, LIMITES_TEXTO.linkedinNota);
  } else {
    if (!editavel) return NextResponse.json({ ok: false, error: "ja_enviado" }, { status: 409 });
    if (acao === "editar" || acao === "aprovar") {
      const limpa = (v: unknown) => (typeof v === "string" ? v.replace(/\r\n/g, "\n").trim() : undefined);
      const assunto = limpa(body.assunto) ?? lead.assunto;
      const mensagem = limpa(body.mensagem) ?? lead.mensagem;
      const followups = Array.isArray(body.followups)
        ? [0, 1, 2].map((i) => limpa((body.followups as unknown[])[i]) ?? "")
        : lead.followups;
      if (assunto.length > LIMITES_TEXTO.assunto || mensagem.length > LIMITES_TEXTO.mensagem) {
        return NextResponse.json({ ok: false, error: "texto_longo_demais" }, { status: 400 });
      }
      if (!assunto || !mensagem) return NextResponse.json({ ok: false, error: "texto_vazio" }, { status: 400 });
      // As mesmas regras que a rotina cumpre valem para a edição à mão.
      const copy = checarCopy({ assunto, mensagem, followups });
      if (copy) return NextResponse.json({ ok: false, error: copy }, { status: 400 });
      const proibido = termoProibido(`${assunto}\n${mensagem}\n${followups.join("\n")}`);
      if (proibido) return NextResponse.json({ ok: false, error: "termo_proibido", termo: proibido }, { status: 400 });
      const ultimo = followups.map(Boolean).lastIndexOf(true);
      if (followups.slice(0, ultimo + 1).some((f) => !f)) {
        return NextResponse.json({ ok: false, error: "followups_com_buraco" }, { status: 400 });
      }
      Object.assign(patch, {
        prospAssunto: assunto,
        prospMensagem: mensagem,
        prospFollowup: followups[0],
        prospFollowup2: followups[1],
        prospFollowup3: followups[2]
      });
    }
    if (acao === "aprovar") patch.prospStatus = "PRONTO";
    else if (acao === "revisar") patch.prospStatus = "REVISAR";
    else if (acao === "descartar") patch.prospStatus = "DESCARTADO";
    else if (acao !== "editar") return NextResponse.json({ ok: false, error: "invalid_action" }, { status: 400 });
  }

  try {
    await atualizarLead(id, patch);
    return NextResponse.json({ ok: true, lead: await buscarLead(id) });
  } catch (error) {
    console.error("[painel/leads]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
