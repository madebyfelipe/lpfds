import { NextResponse } from "next/server";
import { enviar, remetente } from "@/lib/prospeccao/caixa";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { buscarLead } from "@/lib/prospeccao/twenty";

/**
 * Manda para a PRÓPRIA caixa de envio o e-mail de um lead, exatamente como ele
 * sairia (rodapé, link de descadastro, cabeçalhos) — só o destinatário muda.
 * Serve para ver no Gmail/Outlook se cai na entrada ou no spam antes de
 * liberar a fila. Não altera o lead.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { id?: unknown; etapa?: unknown; para?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const lead = typeof body.id === "string" ? await buscarLead(body.id).catch(() => null) : null;
  if (!lead) return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });

  // Destino: a caixa de envio, ou um e-mail de teste informado no painel
  // (ex.: um Gmail pessoal, para ver a caixa de entrada de um provedor grande).
  const para =
    typeof body.para === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.para.trim())
      ? body.para.trim()
      : remetente().email;
  try {
    await enviar({
      para,
      assunto: `[TESTE] ${lead.assunto}`,
      // etapa 0 = 1º e-mail; 1–3 = follow-up correspondente.
      corpo: (Number(body.etapa) > 0 ? lead.followups[Number(body.etapa) - 1] : "") || lead.mensagem,
      fonte: lead.fonte
    });
    return NextResponse.json({ ok: true, para });
  } catch (error) {
    console.error("[painel/teste]", error);
    return NextResponse.json(
      { ok: false, error: "envio_falhou", detalhe: error instanceof Error ? error.message : String(error) },
      { status: 502 }
    );
  }
}
