import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MetricsBar } from "@/components/MetricsBar";
import { Nav } from "@/components/Nav";
import { Pricing } from "@/components/Pricing";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Process } from "@/components/Process";
import { Reviews } from "@/components/Reviews";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import { Services } from "@/components/Services";
import { TrustBar } from "@/components/TrustBar";
import { VisitorFloater } from "@/components/VisitorFloater";

export default function Home() {
  return (
    <>
<ScrollRevealInit />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <MetricsBar />
        <Services />
        <ProblemSolution />
        <Process />
        <Pricing />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <VisitorFloater />
    </>
  );
}
