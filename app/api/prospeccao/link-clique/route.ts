import { NextResponse } from "next/server";
import { gerarToken } from "@/lib/prospeccao/clique";
import { autorizaRotina } from "@/lib/prospeccao/seguranca";
import { SITE_URL } from "@/lib/site";

/**
 * Gera o link rastreado de um lead: GET ?id=<uuid do Twenty>, com
 * `Authorization: Bearer PROSPECCAO_TOKEN`. Quem monta o e-mail (painel,
 * rotina ou o Dylan) chama esta rota em vez de conhecer o segredo.
 * Devolve { url: "https://www.madebyfelipe.com.br/r/<token>" }.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!autorizaRotina(request)) return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  const segredo = process.env.CLIQUE_SECRET || process.env.PROSPECCAO_SECRET || "";
  if (!segredo) return NextResponse.json({ ok: false, error: "clique_secret_unconfigured" }, { status: 503 });
  const id = new URL(request.url).searchParams.get("id") ?? "";
  try {
    return NextResponse.json({ ok: true, url: `${SITE_URL}/r/${gerarToken(id, segredo)}` });
  } catch {
    return NextResponse.json({ ok: false, error: "id_invalido" }, { status: 400 });
  }
}
