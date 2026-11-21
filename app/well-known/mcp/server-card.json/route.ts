import { SITE_URL } from "@/lib/site";

/**
 * /.well-known/mcp/server-card.json — MCP Server Card.
 *
 * Descreve o servidor MCP publicado em /api/mcp: nome, versão, transporte e
 * as ferramentas de leitura que ele expõe.
 */
export const dynamic = "force-static";

export function GET() {
  const card = {
    serverInfo: { name: "madebyfelipe", version: "1.0.0" },
    description:
      "Ferramentas de leitura do estúdio Made by Felipe: resumo, serviços, método PSIQUE, posts do blog e como marcar a conversa de 15 minutos.",
    transport: {
      type: "streamable-http",
      url: `${SITE_URL}/api/mcp`
    },
    authentication: {
      type: "none",
      note: "Leitura pública. Escrita (agendar, enviar pedido) é ação da própria pessoa, pelo link devolvido pelas ferramentas."
    },
    capabilities: {
      tools: {
        studio_info: "Resumo, contato, capacidade e ações do estúdio.",
        list_services: "O que é entregue em cada projeto.",
        get_method: "As duas etapas e os oito passos do método PSIQUE.",
        list_blog_posts: "Posts publicados (título, resumo, data, URL).",
        schedule_call: "Link e texto para marcar a conversa de 15 minutos."
      }
    },
    documentation: `${SITE_URL}/llms.txt`
  };

  return new Response(JSON.stringify(card, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
