import { SITE_URL } from "@/lib/site";

/**
 * robots.txt como rota (e não metadata route) porque o arquivo emite
 * diretivas que o MetadataRoute.Robots não tipa: Content Signals e um
 * grupo por agente. O resto continua igual ao robots anterior: /painel
 * fica de fora (está atrás de senha) e /api não tem o que indexar — com a
 * exceção de /api/health, que os agentes usam como status endpoint.
 *
 * Content-Signal (contentsignals.org): o site aceita ser lido e usado como
 * entrada de resposta por IA (search=yes, ai-input=yes) e não aceita ser
 * usado como material de treino (ai-train=no).
 */
export const dynamic = "force-static";

export function GET() {
  const robots = `# robots.txt — ${SITE_URL.replace(/^https?:\/\//, "")}
# Dono: Made by Felipe (alo@madebyfelipe.com.br)
# Arquivos para agentes: /llms.txt · /auth.md · /.well-known/api-catalog · /openapi.json
#                        /.well-known/mcp/server-card.json · /.well-known/agent-skills/index.json
# Markdown: envie "Accept: text/markdown" e receba qualquer página em markdown.

User-Agent: *
Allow: /
Allow: /api/health
Disallow: /painel
Disallow: /api/
Content-Signal: search=yes, ai-input=yes, ai-train=no

# Agentes de IA — liberados para busca e leitura (mesmas regras do *)
User-Agent: GPTBot
User-Agent: OAI-SearchBot
User-Agent: ChatGPT-User
User-Agent: ClaudeBot
User-Agent: Claude-User
User-Agent: Claude-SearchBot
User-Agent: PerplexityBot
User-Agent: Perplexity-User
User-Agent: Google-Extended
User-Agent: Applebot-Extended
User-Agent: Amazonbot
User-Agent: meta-externalagent
Allow: /
Allow: /api/health
Disallow: /painel
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;

  return new Response(robots, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
