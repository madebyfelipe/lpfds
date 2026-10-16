import { NextResponse, type NextRequest } from "next/server";

/**
 * Proxy (o antigo middleware, renomeado no Next 16) — só protege o /painel.
 *
 * O painel de campanhas mostra contatos de terceiros e dispara e-mail; fica
 * atrás de HTTP Basic com PAINEL_SENHA (e PAINEL_USUARIO, padrão "felipe").
 * Sem senha no ambiente o painel não abre — nunca fica público por omissão.
 * As rotas /painel/api/* conferem a mesma credencial de novo (defesa em
 * profundidade: se o matcher mudar, a API não abre junto).
 */
export function proxy(request: NextRequest) {
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
  matcher: ["/painel", "/painel/:path*"]
};
