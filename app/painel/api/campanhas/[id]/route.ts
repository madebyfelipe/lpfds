import { NextResponse } from "next/server";
import { lerCampanha } from "@/lib/prospeccao/campanhas";
import { autorizaPainel } from "@/lib/prospeccao/painel";
import { atualizarCampanha } from "@/lib/prospeccao/twenty";

/** Edita/pausa/arquiva uma campanha. O slug não muda aqui (os leads apontam para ele). */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!autorizaPainel(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const { id } = await params;
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }
  const { slug: _slug, ...semSlug } = body;
  const v = lerCampanha(semSlug, true);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.motivo }, { status: 400 });
  try {
    await atualizarCampanha(id, v.valor);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[painel/campanhas/id]", error);
    return NextResponse.json({ ok: false, error: "twenty_failed" }, { status: 502 });
  }
}
