import type { Metadata } from "next";
import { InstNav } from "@/components/institucional/InstNav";
import { PortfolioLaunches } from "@/components/portfolio/PortfolioLaunches";
import { getImageSize } from "@/lib/image-size";
import { projectCover } from "@/lib/institucional";
import { projects, type Project } from "@/lib/portfolio";
import "../institucional.css";
import "../monolog.css";

export const metadata: Metadata = {
  title: "Portfólio — Made by Felipe",
  description:
    "Cases de branding e conteúdo estratégico: marcas que passaram a publicar com consistência e cresceram em alcance, autoridade e demanda.",
  // Não é público: abre só por link direto, fora da navegação e do índice.
  robots: { index: false, follow: false },
  openGraph: {
    title: "Portfólio — Made by Felipe",
    description: "Cases de branding e conteúdo estratégico da Made by Felipe.",
    type: "website"
  }
};

// Layout da referência shortscut.com/launches (tela cheia, sem rodapé):
// a página inteira é o carrossel. Os cases continuam em /portfolio/[slug].
// Peças da gaveta do projeto: a galeria do case (até 12, como amostra), ou
// detalhe + série, ou as capturas do site; sem nada disso, a capa.
const MAX_PIECES = 12;
function drawerPieces(project: Project): string[] {
  const list =
    project.gallery ??
    (project.images.detail && project.images.series
      ? [project.images.detail, ...project.images.series]
      : project.website?.pages.map((page) => page.src) ?? []);
  return (list.length ? list : [projectCover(project)]).slice(0, MAX_PIECES);
}

export default function PortfolioPage() {
  // Dimensões reais lidas em build time: o carrossel da gaveta reserva a
  // proporção de cada peça antes do download.
  const items = projects.map((project) => ({
    slug: project.slug,
    client: project.client,
    category: project.category,
    cover: projectCover(project),
    scope: project.scope,
    tagline: project.tagline,
    statement: project.statement,
    about: project.about,
    // Só cases com site entregue ganham o botão "Acessar o site" na gaveta.
    site: project.website ? `https://${project.website.url}` : undefined,
    pieces: drawerPieces(project).map((src) => ({ src, ...getImageSize(src) }))
  }));

  return (
    <>
      <InstNav />
      <main id="conteudo" className="inst pfl-page">
        <PortfolioLaunches items={items} />
      </main>
    </>
  );
}
