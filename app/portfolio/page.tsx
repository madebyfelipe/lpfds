import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { getImageSize } from "@/lib/image-size";
import { projects } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfólio — Made by Felipe",
  description:
    "Cases de branding e conteúdo estratégico: marcas que passaram a publicar com consistência e cresceram em alcance, autoridade e demanda.",
  openGraph: {
    title: "Portfólio — Made by Felipe",
    description:
      "Cases de branding e conteúdo estratégico da Made by Felipe.",
    type: "website"
  }
};

export default function PortfolioPage() {
  // Dimensões reais dos covers lidas em build time: o grid reserva a
  // proporção de cada card antes do download (zera o CLS do masonry).
  // Sem ScrollRevealInit aqui: a página não tem elementos .sr, então o
  // GSAP não é carregado e os cards pintam imediatamente (melhor LCP).
  const sized = projects.map((project) => ({
    ...project,
    coverSize: getImageSize(project.images.cover)
  }));

  return (
    <>
      <Nav collapsible theme="dark" />
      <main>
        <h1 className="visually-hidden">Portfólio — Made by Felipe</h1>
        <PortfolioGrid projects={sized} />
      </main>
      <Footer />
    </>
  );
}
