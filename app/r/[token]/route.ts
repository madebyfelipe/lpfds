import { NextResponse, after } from "next/server";
import { DESTINO_CLIQUE, ehRobo, lerToken } from "@/lib/prospeccao/clique";
import { registrarClique, twentyConfigurado } from "@/lib/prospeccao/twenty";

/**
 * Link rastreado do cold mail: /r/<token> → página de exemplo.
 *
 * Sem pixel: o único rastreio é este clique. Grava prospCliques (+1) e
 * prospUltimoCliqueEm no lead do Twenty, depois de responder, para o
 * redirecionamento não esperar o CRM. Não conta pré-busca, robôs de prévia de
 * link nem scanners de segurança de e-mail (lib/prospeccao/clique.ts → ehRobo).
 * Token inválido ou adulterado só redireciona, sem gravar e sem dizer o motivo.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const segredo = () => process.env.CLIQUE_SECRET || process.env.PROSPECCAO_SECRET || "";

function destino(request: Request) {
  const res = NextResponse.redirect(new URL(DESTINO_CLIQUE, request.url), 302);
  res.headers.set("Cache-Control", "no-store");
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  res.headers.set("Referrer-Policy", "no-referrer");
  return res;
}

async function handle(request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const id = lerToken(token, segredo());
  if (id && twentyConfigurado() && !ehRobo(request.method, request.headers)) {
    after(async () => {
      try {
        await registrarClique(id);
      } catch (error) {
        console.error("[r/clique]", error instanceof Error ? error.message : error);
      }
    });
  }
  return destino(request);
}

export const GET = handle;
export const HEAD = handle;
