import { NextResponse } from "next/server";
import { assuntoEnviado } from "@/lib/prospeccao/config";
import { caixaDoLead, enviar, listarCaixas } from "@/lib/prospeccao/caixas";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { buscarLead } from "@/lib/prospeccao/twenty";

/**
 * Manda o e-mail de um lead exatamente como ele sairia (rodapé, link de
 * descadastro, cabeçalhos, caixa) — só o destinatário muda. Serve para ver no
 * Gmail/Outlook se cai na entrada ou no spam antes de liberar a fila. Não
 * altera o lead.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { id?: unknown; etapa?: unknown; para?: unknown; caixa?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const lead = typeof body.id === "string" ? await buscarLead(body.id).catch(() => null) : null;
  if (!lead) return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });

  const caixas = listarCaixas();
  const caixa =
    (typeof body.caixa === "string" && caixas.find((c) => c.email === body.caixa)) ||
    caixaDoLead(lead.caixa || undefined, caixas) ||
    caixas[0];
  if (!caixa) return NextResponse.json({ ok: false, error: "smtp_unconfigured" }, { status: 503 });

  // Destino: a própria caixa, ou um e-mail de teste informado no painel
  // (ex.: um Gmail pessoal, para ver a caixa de entrada de um provedor grande).
  const para =
    typeof body.para === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.para.trim()) ? body.para.trim() : caixa.email;
  const etapa = Number(body.etapa) || 0;
  try {
    await enviar(caixa, {
      para,
      assunto: `[TESTE] ${assuntoEnviado(lead)}`,
      // etapa 0 = 1º e-mail; 1–3 = follow-up correspondente.
      corpo: (etapa > 0 ? lead.followups[etapa - 1] : "") || lead.mensagem,
      fonte: lead.fonte
    });
    return NextResponse.json({ ok: true, para, de: caixa.email });
  } catch (error) {
    console.error("[painel/teste]", error);
    return NextResponse.json(
      { ok: false, error: "envio_falhou", detalhe: error instanceof Error ? error.message : String(error) },
      { status: 502 }
    );
  }
}
