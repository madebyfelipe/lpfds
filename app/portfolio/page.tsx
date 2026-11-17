import type { Metadata } from "next";
import { InstNav } from "@/components/institucional/InstNav";
import { PortfolioLaunches } from "@/components/portfolio/PortfolioLaunches";
import { projectCover } from "@/lib/institucional";
import { projects } from "@/lib/portfolio";
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
export default function PortfolioPage() {
  const items = projects.map((project) => ({
    slug: project.slug,
    client: project.client,
    category: project.category,
    cover: projectCover(project)
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
