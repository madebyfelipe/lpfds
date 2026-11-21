/**
 * GET /api/health — status endpoint usado pelo catálogo de APIs
 * (/.well-known/api-catalog) e pelos agentes que checam disponibilidade.
 */
export const dynamic = "force-dynamic";

export function GET() {
  return new Response(
    JSON.stringify({ ok: true, service: "madebyfelipe.com.br", checkedAt: new Date().toISOString() }),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "access-control-allow-origin": "*",
        "cache-control": "no-store"
      }
    }
  );
}
