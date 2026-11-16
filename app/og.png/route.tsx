import { renderOg } from "@/lib/og";

// og:image padrão do site, numa URL fixa (/og.png) para as páginas que
// declaram `openGraph` próprio poderem citá-la (OG_IMAGE, lib/site.ts) — um
// opengraph-image no grupo seria descartado por elas. Gerada no build.
export const dynamic = "force-static";

export function GET() {
  return renderOg({
    kicker: "Branding para psicólogos",
    title: "Marca para consultório de psicologia em até 30 dias."
  });
}
