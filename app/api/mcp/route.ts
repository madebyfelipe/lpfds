import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { z } from "zod";

import {
  AGENT_ACTIONS,
  AGENT_CONTACT,
  AGENT_SUMMARY,
  agentBlog,
  agentCapacity,
  agentMethod,
  agentServices
} from "@/lib/agent-surface";
import { SITE_URL } from "@/lib/site";

/**
 * Servidor MCP do estúdio — /api/mcp (Streamable HTTP, sem sessão).
 *
 * Só ferramentas de leitura, e todas respondem com dado do próprio site:
 * resumo, serviços, método, blog e links. Nada de escrita: agendar conversa é
 * uma ação de uma pessoa, então a ferramenta devolve o link e o texto pronto
 * para ela confirmar. Stateless de propósito — cada POST monta servidor e
 * transporte, o que funciona em serverless sem guardar sessão.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTATO = `E-mail: ${AGENT_CONTACT.email}\nWhatsApp: ${AGENT_CONTACT.whatsapp}`;

function buildServer() {
  const server = new McpServer(
    { name: "madebyfelipe", version: "1.0.0" },
    { instructions: `${AGENT_SUMMARY}\n\n${CONTATO}` }
  );

  server.registerTool(
    "studio_info",
    {
      title: "Informações do estúdio",
      description: "Resumo do estúdio, contato, capacidade por trimestre e prazo de entrega.",
      inputSchema: {}
    },
    async () => ({
      content: [
        {
          type: "text",
          text: JSON.stringify(
            {
              nome: "Made by Felipe",
              site: SITE_URL,
              resumo: AGENT_SUMMARY,
              contato: AGENT_CONTACT,
              capacidade: agentCapacity(),
              acoes: AGENT_ACTIONS
            },
            null,
            2
          )
        }
      ]
    })
  );

  server.registerTool(
    "list_services",
    {
      title: "Listar entregas",
      description: "Lista o que o estúdio entrega em cada projeto de marca.",
      inputSchema: {}
    },
    async () => ({
      content: [
        {
          type: "text",
          text: agentServices()
            .map((s) => `- ${s.nome}`)
            .join("\n")
        }
      ]
    })
  );

  server.registerTool(
    "get_method",
    {
      title: "Método PSIQUE",
      description: "As duas etapas e os oito passos do método, com o resumo de cada passo.",
      inputSchema: {}
    },
    async () => ({
      content: [{ type: "text", text: JSON.stringify(agentMethod(), null, 2) }]
    })
  );

  server.registerTool(
    "list_blog_posts",
    {
      title: "Listar posts do blog",
      description: "Posts publicados, com título, resumo, data e URL.",
      inputSchema: {
        limite: z.number().int().min(1).max(50).optional().describe("Quantos posts (padrão 10)")
      }
    },
    async ({ limite }) => ({
      content: [
        {
          type: "text",
          text: JSON.stringify(agentBlog().slice(0, limite ?? 10), null, 2)
        }
      ]
    })
  );

  server.registerTool(
    "schedule_call",
    {
      title: "Como marcar a conversa de 15 minutos",
      description:
        "Devolve o link e o texto pronto para a pessoa marcar a conversa. Não agenda nada sozinho: o envio é da própria pessoa.",
      inputSchema: {}
    },
    async () => ({
      content: [
        {
          type: "text",
          text: `Passe este link para a pessoa confirmar:\n${AGENT_CONTACT.agenda}\n\nSe preferir, o formulário é ${SITE_URL}/imersao.\nNão envie nada em nome dela sem o aceite dela.`
        }
      ]
    })
  );

  return server;
}

export async function POST(request: Request) {
  const server = buildServer();
  const transport = new WebStandardStreamableHTTPServerTransport({ sessionIdGenerator: undefined });

  try {
    await server.connect(transport);
    return await transport.handleRequest(request);
  } catch (erro) {
    console.error("mcp: falha ao tratar a requisição", erro);
    return new Response(
      JSON.stringify({ jsonrpc: "2.0", error: { code: -32603, message: "internal_error" }, id: null }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}

export function GET() {
  return new Response(JSON.stringify({ error: "method_not_allowed" }), {
    status: 405,
    headers: { "content-type": "application/json", allow: "POST" }
  });
}

export const DELETE = GET;
