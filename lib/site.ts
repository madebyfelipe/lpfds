/**
 * Origem canônica do site — fonte única para metadataBase, sitemap, robots
 * e JSON-LD. Era "https://madebyfelipe.com", domínio que não resolve: o
 * canonical, o og:url e o sitemap apontavam para fora do site no ar. A
 * produção responde em www (o apex .com.br redireciona 301 para cá).
 */
export const SITE_URL = "https://www.madebyfelipe.com.br";

/** og:image padrão (app/og.png/route.tsx). Página com `openGraph` próprio
 *  precisa repetir `images: [OG_IMAGE]` — o Next não mescla o objeto. */
export const OG_IMAGE = "/og.png";
