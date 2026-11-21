import { SITE_URL } from "@/lib/site";

/**
 * /.well-known/api-catalog — RFC 9727 (Web API discovery).
 *
 * Um linkset com uma entrada por API que este site realmente expõe. O
 * `anchor` é a URL base da API; `service-desc` aponta para o OpenAPI,
 * `service-doc` para o llms.txt (a documentação em prosa) e `status` para o
 * endpoint de saúde que existe em /api/health.
 */
export const dynamic = "force-static";

export function GET() {
  const linkset = {
    linkset: [
      {
        anchor: `${SITE_URL}/api`,
        "service-desc": [
          { href: `${SITE_URL}/openapi.json`, type: "application/openapi+json" }
        ],
        "service-doc": [
          { href: `${SITE_URL}/llms.txt`, type: "text/plain" },
          { href: `${SITE_URL}/auth.md`, type: "text/markdown" }
        ],
        status: [{ href: `${SITE_URL}/api/health`, type: "application/json" }]
      }
    ]
  };

  return new Response(JSON.stringify(linkset, null, 2), {
    headers: {
      "content-type": "application/linkset+json; charset=utf-8",
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400"
    }
  });
}
