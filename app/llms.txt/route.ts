import {
  AGENT_ACTIONS,
  AGENT_CONTACT,
  AGENT_PAGES,
  AGENT_SUMMARY,
  agentBlog,
  agentCapacity,
  agentMethod,
  agentServices,
  agentSocial
} from "@/lib/agent-surface";
import { SITE_URL } from "@/lib/site";

/**
 * /llms.txt — índice do site para modelos de linguagem.
 *
 * Segue o formato do llms.txt: H1 com o nome, um resumo em uma linha e
 * listas de links com uma frase de contexto cada. É o resumo que um agente
 * lê antes de abrir qualquer página — então só entra o que é público
 * (portfólio e contato seguem noindex e ficam de fora).
 */
export const dynamic = "force-static";

export function GET() {
  const servicos = agentServices().map((s) => `- ${s.nome}`);
  const metodo = agentMethod()
    .map((e) => `- **${e.etapa}** (${e.tag}): ${e.passos.map((p) => p.titulo).join(" → ")}`)
    .join("\n");
  const paginas = AGENT_PAGES.map((p) => `- [${p.title}](${SITE_URL}${p.path})`);
  const blog = agentBlog()
    .slice(0, 12)
    .map((p) => `- [${p.titulo}](${p.url}): ${p.resumo}`);
  const redes = agentSocial().map((r) => `- ${r.rede}: ${r.url}`);
  const capacidade = agentCapacity();

  const txt = `# Made by Felipe

> ${AGENT_SUMMARY}

Estúdio sediado em Sorocaba (SP), Brasil. CNPJ 68.121.518/0001-17.
Contato: ${AGENT_CONTACT.email} · WhatsApp: ${AGENT_CONTACT.whatsapp}
Idiomas: pt-BR (principal) e inglês em ${SITE_URL}/en.

## O que é entregue

${servicos.join("\n")}

## Como o trabalho acontece

${metodo}

## Capacidade e agenda

- Projetos por trimestre: ${capacidade.projetosPorTrimestre}
- Prazo de entrega: ${capacidade.prazoDeEntrega}
- ${capacidade.observacao}

## Páginas

${paginas.join("\n")}

## Blog

${blog.join("\n")}

## Para agentes

- Markdown direto: envie \`Accept: text/markdown\` em qualquer página acima.
- Catálogo de APIs: ${SITE_URL}/.well-known/api-catalog
- Documento OpenAPI: ${SITE_URL}/openapi.json
- Servidor MCP (leitura): ${SITE_URL}/.well-known/mcp/server-card.json
- Skills: ${SITE_URL}/.well-known/agent-skills/index.json
- Registro e contato para agentes: ${SITE_URL}/auth.md

## Ações

- Conversar 15 minutos: ${AGENT_ACTIONS.conversar15min}
- E-mail: ${AGENT_ACTIONS.email}
- Método completo: ${AGENT_ACTIONS.lerMetodo}

## Redes

${redes.join("\n")}
`;

  return new Response(txt, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
