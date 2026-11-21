import { NextResponse, type NextRequest } from "next/server";

/**
 * Proxy (o antigo middleware, renomeado no Next 16). Faz duas coisas, nesta
 * ordem:
 *
 * 1. /painel — o painel de campanhas mostra contatos de terceiros e dispara
 *    e-mail; fica atrás de HTTP Basic com PAINEL_SENHA (e PAINEL_USUARIO,
 *    padrão "felipe"). Sem senha no ambiente o painel não abre — nunca fica
 *    público por omissão. As rotas /painel/api/* conferem a mesma credencial
 *    de novo (defesa em profundidade: se o matcher mudar, a API não abre
 *    junto).
 *
 * 2. Markdown para agentes — pedido com `Accept: text/markdown` (ou o sufixo
 *    `.md` no caminho) é reescrito para /api/markdown, que devolve a mesma
 *    página em markdown. Navegador não manda esse Accept, então continua
 *    recebendo HTML; o `Vary: Accept` avisa o CDN de que a resposta muda.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname === "/painel" || pathname.startsWith("/painel/")) {
    return painel(request);
  }

  const accept = request.headers.get("accept") ?? "";
  // Arquivo estático (imagem, fonte, xml…) não vira markdown: sai antes.
  const estatico = /\.[a-z0-9]{1,5}$/i.test(pathname) && !pathname.endsWith(".md");
  if (estatico) return NextResponse.next();
  // Só vira markdown se o agente pedir markdown antes de HTML na lista de
  // Accept (navegador manda text/html primeiro ou só ele).
  const posMd = accept.search(/text\/markdown/i);
  const posHtml = accept.search(/text\/html/i);
  const pedeMarkdown = posMd !== -1 && (posHtml === -1 || posMd < posHtml);
  const sufixoMd = pathname.endsWith(".md") && pathname !== "/auth.md";

  if (pedeMarkdown || sufixoMd) {
    const pagina = sufixoMd ? pathname.slice(0, -3) || "/" : pathname;
    const alvo = `${pagina}${sufixoMd ? "" : search}`;
    const destino = request.nextUrl.clone();
    destino.pathname = "/api/markdown";
    destino.search = `?path=${encodeURIComponent(alvo)}`;
    const resposta = NextResponse.rewrite(destino);
    resposta.headers.set("vary", "Accept");
    // O caminho também vai em header: na reescrita do proxy o querystring nem
    // sempre chega intacto na rota de destino.
    resposta.headers.set("x-markdown-path", alvo);
    return resposta;
  }

  const resposta = NextResponse.next();
  resposta.headers.set("vary", "Accept");
  return resposta;
}

function painel(request: NextRequest) {
  const senha = process.env.PAINEL_SENHA;
  if (!senha) {
    return new NextResponse("Painel desativado: defina PAINEL_SENHA no ambiente.", { status: 503 });
  }
  const usuario = process.env.PAINEL_USUARIO || "felipe";
  const esperado = `Basic ${btoa(`${usuario}:${senha}`)}`;
  if (request.headers.get("authorization") === esperado) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    res.headers.set("Cache-Control", "no-store");
    return res;
  }
  return new NextResponse("Autenticação necessária.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Painel Made by Felipe", charset="UTF-8"' }
  });
}

export const config = {
  // /painel continua no matcher; o resto são páginas e o sufixo .md (sem
  // _next e sem /api). Arquivo estático é descartado dentro do proxy.
  matcher: ["/painel", "/painel/:path*", "/((?!_next/|api/).*)"]
};
