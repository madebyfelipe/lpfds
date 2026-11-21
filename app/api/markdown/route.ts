import { extrairMeta, htmlToMarkdown } from "@/lib/html-to-markdown";
import { SITE_URL } from "@/lib/site";

/**
 * GET /api/markdown?path=/metodologia — a página, em markdown.
 *
 * O proxy manda para cá toda requisição de página que pede
 * `Accept: text/markdown` (e também quem usa o sufixo `.md`). Aqui a página é
 * buscada de novo em HTML, dentro do próprio site, e convertida. Só caminho
 * do mesmo host passa: `path` não pode apontar para fora nem para /api, o que
 * evita usar a rota como proxy aberto ou como laço.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function caminhoSeguro(valor: string | null): string | null {
  if (!valor) return null;
  if (!valor.startsWith("/")) return null;
  if (valor.startsWith("//")) return null;
  if (valor.startsWith("/api") || valor.startsWith("/_next")) return null;
  if (valor.startsWith("/painel")) return null;
  return valor;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  // O proxy manda o caminho no header (mais confiável na reescrita) e também
  // em ?path=, para quando a rota é chamada direto.
  const caminho = caminhoSeguro(request.headers.get("x-markdown-path") ?? url.searchParams.get("path"));

  if (!caminho) {
    return new Response("Informe ?path=/caminho-da-pagina\n", {
      status: 400,
      headers: { "content-type": "text/plain; charset=utf-8" }
    });
  }

  // Mesmo host da requisição (no Vercel é o deployment atual): buscar a
  // produção a partir da produção seria uma ida-e-volta desnecessária.
  const destino = new URL(caminho, url.origin);
  let html = "";

  try {
    const resposta = await fetch(destino, {
      headers: { accept: "text/html", "user-agent": "MadeByFelipe-Markdown/1.0" },
      cache: "no-store"
    });

    if (!resposta.ok) {
      return new Response(`Página não encontrada: ${caminho}\n`, {
        status: 404,
        headers: { "content-type": "text/plain; charset=utf-8" }
      });
    }

    html = await resposta.text();
  } catch (erro) {
    console.error("markdown: falha ao buscar a página", caminho, erro);
    return new Response("Não foi possível ler a página agora.\n", {
      status: 503,
      headers: { "content-type": "text/plain; charset=utf-8", "retry-after": "30" }
    });
  }

  const { titulo, descricao } = extrairMeta(html);
  const corpo = htmlToMarkdown(html);
  const doc = `# ${titulo || "Made by Felipe"}\n\n> ${descricao || "Site da Made by Felipe."}\n\nFonte: ${SITE_URL}${caminho} — versão HTML para navegador; este é o markdown para agentes.\n\n${corpo}`;

  return new Response(doc, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      vary: "Accept",
      "cache-control": "public, max-age=0, s-maxage=600, stale-while-revalidate=86400",
      "x-markdown-source": `${SITE_URL}${caminho}`
    }
  });
}
