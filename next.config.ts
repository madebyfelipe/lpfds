import type { NextConfig } from "next";

const SITE = "https://www.madebyfelipe.com.br";

/**
 * Link headers (RFC 8288) que o site publica em toda página HTML: é por aqui
 * que um agente descobre o catálogo de APIs, o OpenAPI, o llms.txt, as skills
 * e o auth.md sem ter que adivinhar caminho.
 */
const LINK_HEADER = [
  `<${SITE}/.well-known/api-catalog>; rel="api-catalog"`,
  `<${SITE}/openapi.json>; rel="service-desc"; type="application/openapi+json"`,
  `<${SITE}/llms.txt>; rel="describedby"; type="text/plain"`,
  `<${SITE}/auth.md>; rel="authorization"; type="text/markdown"`,
  `<${SITE}/.well-known/agent-skills/index.json>; rel="agent-skills"; type="application/json"`,
  `<${SITE}/.well-known/mcp/server-card.json>; rel="mcp-server-card"; type="application/json"`,
  `<${SITE}/sitemap.xml>; rel="sitemap"; type="application/xml"`
].join(", ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Toda página HTML. /_next (asset) fica de fora para não gastar header.
        source: "/((?!_next/|api/).*)",
        headers: [
          { key: "Link", value: LINK_HEADER },
          { key: "Vary", value: "Accept" }
        ]
      }
    ];
  },
  async rewrites() {
    return [
      // /.well-known/* mora em app/well-known/* (o Next não gosta de pasta
      // com ponto no nome); o rewrite mantém a URL pública correta.
      { source: "/.well-known/:path*", destination: "/well-known/:path*" }
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // 90 é usado na faixa de fotos do hero: são recortes grandes e o
    // padrão (75) deixava a compressão visível.
    qualities: [75, 90],
    // Imagens do portfólio são estáticas — cache longo no CDN/navegador
    // (o PageSpeed penaliza o max-age curto padrão do /_next/image)
    minimumCacheTTL: 2678400 // 31 dias
  },
  async redirects() {
    return [
      // /cases era redirect para /portfolio (links antigos de bio). Desde
      // nov/2026 é a página de cases própria, que linka o portfólio.
      // Workshop fora do ar (webinarNoAr em lib/webinar.ts). Temporário (307):
      // a página continua no repo e pode voltar; remova esta linha para reativar.
      { source: "/webinar", destination: "/", permanent: false },
      // O case institucional foi fundido ao case principal da Alves & Nabuco.
      {
        source: "/portfolio/alves-nabuco-institucional",
        destination: "/portfolio/alves-nabuco",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
