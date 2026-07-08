import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
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
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <main>
        <section className="section portfolio-hero">
          <div className="site-shell">
            <div className="section-header section-header--left">
              <span className="section-kicker sr">Portfólio</span>
              <h1 className="portfolio-hero__title sr">
                Marcas que publicam <em>e crescem</em>
              </h1>
              <p className="section-copy sr">
                Uma seleção de projetos de branding e conteúdo estratégico — do
                posicionamento à execução que gera alcance, autoridade e demanda.
              </p>
            </div>
          </div>
        </section>

        <PortfolioGrid projects={projects} />
      </main>
      <Footer />
    </>
  );
}
