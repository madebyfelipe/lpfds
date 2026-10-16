import { NextResponse } from "next/server";
import { autorizaRotina } from "@/lib/prospeccao/seguranca";
import { registrarExecucao } from "@/lib/prospeccao/twenty";

/**
 * Relatório da rotina noturna (POST, Bearer PROSPECCAO_TOKEN): vira uma Note
 * no Twenty, que o painel lista na aba Rotina. É o "o que eu fiz esta noite".
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!autorizaRotina(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  let body: { titulo?: unknown; markdown?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const titulo = typeof body.titulo === "string" ? body.titulo.trim().slice(0, 120) : "";
  const markdown = typeof body.markdown === "string" ? body.markdown.slice(0, 20000) : "";
  if (!titulo || !markdown) return NextResponse.json({ ok: false, error: "invalid_fields" }, { status: 400 });
  try {
    await registrarExecucao(titulo, markdown);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[prospeccao/execucoes]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
