import { NextResponse } from "next/server";
import { LIMITES_TEXTO, STATUS_CONVERSA, assuntoEnviado, termoProibido } from "@/lib/prospeccao/config";
import { abrirImap, caixaDoLead, guardarEmEnviados, responder } from "@/lib/prospeccao/caixas";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { atualizarLead, buscarLead } from "@/lib/prospeccao/twenty";

/**
 * Responde, pelo painel, a quem respondeu — na mesma conversa (In-Reply-To da
 * resposta dela) e pela mesma caixa que conduz o lead. O texto é do Felipe
 * (pode partir da sugestão da IA); nada aqui sai sem ele clicar.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { id?: unknown; texto?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const lead = typeof body.id === "string" ? await buscarLead(body.id).catch(() => null) : null;
  if (!lead) return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  if (!STATUS_CONVERSA.includes(lead.status) || !lead.respostaMessageId) {
    return NextResponse.json({ ok: false, error: "sem_resposta" }, { status: 409 });
  }
  const texto = typeof body.texto === "string" ? body.texto.trim() : "";
  if (!texto) return NextResponse.json({ ok: false, error: "texto_vazio" }, { status: 400 });
  if (texto.length > LIMITES_TEXTO.resposta) return NextResponse.json({ ok: false, error: "texto_longo_demais" }, { status: 400 });
  if (termoProibido(texto)) return NextResponse.json({ ok: false, error: "termo_proibido" }, { status: 400 });

  const caixa = caixaDoLead(lead.caixa || undefined);
  if (!caixa) return NextResponse.json({ ok: false, error: "caixa_indisponivel" }, { status: 409 });

  try {
    const { raw } = await responder(caixa, {
      para: lead.email,
      assunto: assuntoEnviado(lead),
      corpo: texto,
      emRespostaA: lead.respostaMessageId,
      referencias: [lead.messageId, lead.respostaMessageId]
    });
    await atualizarLead(lead.id, { prospRespondidoEm: new Date().toISOString(), prospRespostaSugerida: "" });
    // Cópia em Enviados — best-effort, a resposta já saiu.
    try {
      const imap = await abrirImap(caixa);
      await guardarEmEnviados(imap, raw).finally(() => imap.logout().catch(() => {}));
    } catch {
      /* sem cópia, segue */
    }
    return NextResponse.json({ ok: true, de: caixa.email });
  } catch (error) {
    console.error("[painel/responder]", error);
    return NextResponse.json(
      { ok: false, error: "envio_falhou", detalhe: error instanceof Error ? error.message : String(error) },
      { status: 502 }
    );
  }
}
