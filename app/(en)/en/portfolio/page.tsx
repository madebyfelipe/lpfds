import type { Metadata } from "next";
import { PortfolioLaunches } from "@/components/portfolio/PortfolioLaunches";
import { getImageSize } from "@/lib/image-size";
import { projectCover } from "@/lib/institucional";
import { projects, type Project } from "@/lib/portfolio";
import { localizarProjeto, ordemCategoriasEn } from "@/lib/portfolio-texto";

/**
 * Portfólio em inglês (/en/portfolio). Mesma página e mesmo carrossel do
 * portfólio em português; o texto vem de lib/portfolio-texto.ts e as peças são
 * as mesmas imagens de /public/portfolio.
 *
 * Como o original, não é público: abre só por link direto e não entra no
 * sitemap (robots noindex aqui e em cada case).
 */
export const metadata: Metadata = {
  title: "Work — Made by Felipe",
  description:
    "Branding and strategic content cases: brands that started publishing consistently and grew in reach, authority and demand.",
  alternates: { canonical: "/en/portfolio" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Work — Made by Felipe",
    description: "Branding and strategic content cases from Made by Felipe.",
    type: "website"
  }
};

// Mesmo recorte da gaveta do portfólio em português: a galeria do case (até
// 12 peças), ou detalhe + série, ou as capturas do site; sem nada disso, a capa.
const MAX_PIECES = 12;
function drawerPieces(project: Project): string[] {
  const list =
    project.gallery ??
    (project.images.detail && project.images.series
      ? [project.images.detail, ...project.images.series]
      : project.website?.pages.map((page) => page.src) ?? []);
  return (list.length ? list : [projectCover(project)]).slice(0, MAX_PIECES);
}

export default function PortfolioEnPage() {
  // Dimensões reais lidas em build time, como no carrossel em português.
  const items = projects.map((project) => {
    const localized = localizarProjeto(project, "en");
    return {
      slug: localized.slug,
      client: localized.client,
      category: localized.category,
      cover: projectCover(project),
      scope: localized.scope,
      tagline: localized.tagline,
      statement: localized.statement,
      about: localized.about,
      site: localized.website ? `https://${localized.website.url}` : undefined,
      pieces: drawerPieces(project).map((src) => ({ src, ...getImageSize(src) }))
    };
  });

  return (
    <main id="conteudo" className="inst pfl-page">
      <PortfolioLaunches items={items} locale="en" categories={ordemCategoriasEn} />
    </main>
  );
}
