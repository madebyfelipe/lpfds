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
      <Nav collapsible />
      <main>
        <h1 className="visually-hidden">Portfólio — Made by Felipe</h1>
        <PortfolioGrid projects={projects} />
      </main>
      <Footer />
    </>
  );
}
