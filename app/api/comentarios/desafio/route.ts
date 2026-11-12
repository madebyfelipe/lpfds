import { NextResponse } from "next/server";
import { configurado, criarDesafio } from "@/lib/comentarios-server";

/** Desafio do captcha de prova de trabalho dos comentários. Nunca em cache. */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function GET() {
  if (!configurado()) return NextResponse.json({ error: "unconfigured" }, { status: 503 });
  return NextResponse.json(criarDesafio(), { headers: { "Cache-Control": "no-store" } });
}
