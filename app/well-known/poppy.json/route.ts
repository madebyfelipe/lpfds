import { AGENT_NAME, AGENT_SUMMARY } from "@/lib/agent-surface";
import { SITE_URL } from "@/lib/site";

/**
 * /.well-known/poppy.json — declaração do site no Personal Agent Protocol.
 *
 * O site não tem sessão de agente nem emissor OAuth, então a declaração é a
 * variante somente-site (`web: {}`), que é o que a especificação prevê para
 * esse caso. Nada de `auth` apontando para emissor que não existe.
 */
export const dynamic = "force-static";

export function GET() {
  const manifest = {
    protocol_version: "0.1",
    organization: {
      name: AGENT_NAME,
      domain: "madebyfelipe.com.br",
      description: AGENT_SUMMARY,
      url: SITE_URL
    },
    web: {}
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
