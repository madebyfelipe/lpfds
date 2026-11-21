import { SITE_URL } from "@/lib/site";

/**
 * /openapi.json — descrição das rotas de escrita que o site publica.
 *
 * Só o que existe: os dois formulários (imersão e LP), a newsletter e o
 * status. Todas recebem JSON, respondem `{ ok: boolean }` e não exigem
 * autenticação — a proteção é o consentimento do titular e o rate limit da
 * hospedagem. Nenhuma rota de leitura de dado de cliente aparece aqui.
 */
export const dynamic = "force-static";

export function GET() {
  const doc = {
    openapi: "3.1.0",
    info: {
      title: "Made by Felipe — API pública de contato",
      version: "1.0.0",
      summary: "Formulários do site (escrita) e status do serviço.",
      contact: { name: "Made by Felipe", email: "alo@madebyfelipe.com.br", url: SITE_URL },
      license: { name: "Uso restrito ao contato comercial" }
    },
    servers: [{ url: SITE_URL }],
    paths: {
      "/api/health": {
        get: {
          operationId: "getHealth",
          summary: "Status do site",
          responses: {
            "200": {
              description: "Serviço no ar",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: { ok: { type: "boolean" }, service: { type: "string" }, checkedAt: { type: "string", format: "date-time" } },
                    required: ["ok"]
                  }
                }
              }
            }
          }
        }
      },
      "/api/imersao": {
        post: {
          operationId: "postImersao",
          summary: "Pedido de conversa sobre a imersão (formulário de /imersao)",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nome: { type: "string", maxLength: 200 },
                    crp: { type: "string", maxLength: 200 },
                    whatsapp: { type: "string", maxLength: 200 },
                    consentimento: { type: "boolean", description: "Aceite LGPD; obrigatório" }
                  },
                  required: ["nome", "whatsapp", "consentimento"]
                }
              }
            }
          },
          responses: {
            "200": { description: "Pedido registrado e enviado por e-mail" },
            "400": { description: "Dados inválidos ou sem consentimento" },
            "500": { description: "Envio indisponível; o site oferece o WhatsApp como alternativa" }
          }
        }
      },
      "/api/lp-lead": {
        post: {
          operationId: "postLpLead",
          summary: "Lead das landing pages (mesmo contrato do /api/imersao)",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    nome: { type: "string" },
                    whatsapp: { type: "string" },
                    consentimento: { type: "boolean" }
                  },
                  required: ["nome", "whatsapp", "consentimento"]
                }
              }
            }
          },
          responses: { "200": { description: "Lead registrado" }, "400": { description: "Dados inválidos" } }
        }
      }
    }
  };

  return new Response(JSON.stringify(doc, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
