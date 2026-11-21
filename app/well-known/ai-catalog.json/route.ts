import { AGENT_SUMMARY } from "@/lib/agent-surface";
import { SITE_URL } from "@/lib/site";

/**
 * /.well-known/ai-catalog.json — ARD (Agentic Resource Discovery).
 *
 * Declara o que existe neste host e para que serve: as páginas em HTML, o
 * índice em markdown, as skills, o OpenAPI e o servidor MCP. Cada entrada
 * traz 2–5 perguntas representativas para o registro montar o embedding.
 */
export const dynamic = "force-static";

const HOST = "madebyfelipe.com.br";

function entry(
  namespace: string,
  name: string,
  displayName: string,
  type: string,
  url: string,
  queries: string[]
) {
  return {
    "urn:air": `${HOST}:${namespace}:${name}`,
    displayName,
    description: displayName,
    type,
    url: `${SITE_URL}${url}`,
    representativeQueries: queries
  };
}

export function GET() {
  const catalog = {
    specVersion: "1.0",
    host: {
      displayName: "Made by Felipe",
      identifier: `urn:air:${HOST}:host`,
      url: SITE_URL,
      description: AGENT_SUMMARY
    },
    entries: [
      entry(
        "web",
        "site",
        "Site institucional (marca para consultório de psicologia)",
        "text/html",
        "/",
        [
          "o que a Made by Felipe faz",
          "marca para consultório de psicologia em Sorocaba",
          "branding para psicólogo em até 30 dias",
          "quem faz identidade visual para psicólogos no Brasil"
        ]
      ),
      entry(
        "doc",
        "llms-txt",
        "Resumo do site e dos serviços em texto para LLM",
        "text/plain",
        "/llms.txt",
        ["resumo da Made by Felipe para IA", "serviços e prazo do estúdio em texto"]
      ),
      entry(
        "doc",
        "metodo",
        "Método PSIQUE: seis áreas e oito passos",
        "text/html",
        "/metodologia",
        ["como funciona o método PSIQUE", "etapas do projeto de marca", "o que é investigado no diagnóstico"]
      ),
      entry(
        "api",
        "contato",
        "OpenAPI dos formulários de contato (imersão e LP)",
        "application/json",
        "/openapi.json",
        [
          "como enviar um lead para a Made by Felipe",
          "API de contato do site",
          "endpoint para pedir orçamento"
        ]
      ),
      entry(
        "skill",
        "skills",
        "Índice de skills para agentes",
        "application/json",
        "/.well-known/agent-skills/index.json",
        ["skills disponíveis para agentes", "como um agente consulta o estúdio"]
      ),
      entry(
        "mcp",
        "server",
        "MCP Server Card (leitura: serviços, método, portfólio público)",
        "application/json",
        "/.well-known/mcp/server-card.json",
        ["servidor MCP da Made by Felipe", "ferramentas MCP para consultar o estúdio"]
      )
    ]
  };

  return new Response(JSON.stringify(catalog, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
