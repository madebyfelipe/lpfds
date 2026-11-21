import { AGENT_CONTACT, AGENT_PAGES, AGENT_SUMMARY } from "@/lib/agent-surface";
import { SITE_URL } from "@/lib/site";

/**
 * /auth.md — como um agente fala com o estúdio.
 *
 * O site é público e somente leitura: não existe conta de agente, token nem
 * cadastro. O que existe é um caminho de contato (e-mail e WhatsApp) e dois
 * endpoints de escrita que recebem formulário com consentimento. Este arquivo
 * descreve exatamente isso — inventar um provedor de identidade aqui só faria
 * o agente bater em porta que não abre.
 */
export const dynamic = "force-static";

export function GET() {
  const paginas = AGENT_PAGES.map((p) => `- ${p.title}: ${SITE_URL}${p.path}`);

  const md = `# Registro de agentes — Made by Felipe

${AGENT_SUMMARY}

## Regra geral

Todo o site é **leitura pública**: páginas HTML, \`llms.txt\`, \`openapi.json\`,
\`/.well-known/*\` e o servidor MCP em \`/api/mcp\` (somente ferramentas de
leitura). Não há login, chave de API nem cadastro de agente.

Escrita só existe nos formulários do próprio site, e eles exigem o
consentimento do titular (LGPD): \`POST /api/imersao\` (pedido de conversa) e
\`POST /api/lp-lead\`. Nenhuma dessas rotas cria conta.

## Como pedir algo em nome de uma pessoa

1. Leia \`${SITE_URL}/llms.txt\` para o resumo e os serviços.
2. Se a pessoa quiser conversar, use ${AGENT_CONTACT.agenda} (ou o formulário
   de \`/imersao\`) — sempre com o consentimento dela.
3. Para assuntos comerciais, contratos e privacidade: ${AGENT_CONTACT.email}.

## Identidade do site

- Domínio canônico: ${SITE_URL} (o apex redireciona 301 para www).
- Área interna \`/painel\` é fechada (HTTP Basic) e não faz parte da superfície
  para agentes.

## Páginas

${paginas.join("\n")}

## Metadados de descoberta

- Catálogo de APIs: ${SITE_URL}/.well-known/api-catalog (RFC 9727)
- OpenAPI: ${SITE_URL}/openapi.json
- MCP Server Card: ${SITE_URL}/.well-known/mcp/server-card.json
- Skills: ${SITE_URL}/.well-known/agent-skills/index.json
- Catálogo de recursos (ARD): ${SITE_URL}/.well-known/ai-catalog.json
- Status: ${SITE_URL}/api/health
`;

  return new Response(md, {
    headers: {
      "content-type": "text/markdown; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
