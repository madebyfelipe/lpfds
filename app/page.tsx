import { About } from "@/components/About";
import { AboutMe } from "@/components/AboutMe";
import { Diferenciais } from "@/components/Diferenciais";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { NewsletterBand } from "@/components/NewsletterBand";
import { Philosophy } from "@/components/Philosophy";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Process } from "@/components/Process";
import { Products } from "@/components/Products";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { Services } from "@/components/Services";
import { VisitorFloater } from "@/components/VisitorFloater";

export default function Home() {
  return (
    <>
      <ScrollRevealInit />
      <Nav />
      <main>
        <About />
        <Products />
        <NewsletterBand />
        <Services />
        <Process />
        <PortfolioSection />
        <Philosophy />
        <AboutMe />
        <Diferenciais />
        <FinalCTA />
      </main>
      <Footer />
      <VisitorFloater />
    </>
  );
}
