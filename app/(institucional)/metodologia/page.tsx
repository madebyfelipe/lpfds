import type { Metadata } from "next";
import { InstContato } from "@/components/institucional/InstContato";
import {
  LinhaTempo,
  MetodologiaFlow
} from "@/components/institucional/MetodoDiagrams";
import { methodIntro, positioning, process } from "@/lib/institucional";

export const metadata: Metadata = {
  title: "Método de construção de marca — PSIQUE | Made by Felipe",
  description:
    "Como construir uma marca do zero: o método PSIQUE traduz o negócio em posicionamento, identidade visual e verbal — da estratégia à comunicação, em oito passos e duas etapas. Branding em Sorocaba e São Paulo.",
  alternates: { canonical: "/metodologia" },
  keywords: [
    "construção de marca",
    "como construir uma marca",
    "método de branding",
    "processo de branding",
    "posicionamento de marca",
    "identidade visual",
    "identidade verbal",
    "branding Sorocaba",
    "branding São Paulo"
  ],
  openGraph: {
    title: "Método de construção de marca — PSIQUE | Made by Felipe",
    description:
      "O método PSIQUE traduz o negócio em posicionamento, identidade visual e verbal — da estratégia à comunicação.",
    url: "/metodologia",
    siteName: "Made by Felipe",
    locale: "pt_BR",
    type: "article"
  }
};

export default function MetodologiaPage() {
  return (
    <main>
      <header className="inst-hero">
        <p className="inst-kicker inst-kicker--tight">— O método</p>
        <h1 className="inst-hero__title">
          Método <span className="inst-hero__accent">PSIQUE</span>.
        </h1>
        <p className="inst-hero__lead">{methodIntro}</p>
      </header>

      {/* Diagrama 1 — Metodologia: estratégia → identidade → comunicação. */}
      <section className="inst-section inst-section--rule inst-section--flush-top">
        <p className="inst-kicker">— Metodologia</p>
        <MetodologiaFlow />
        <p className="inst-diagram__caption">
          O posicionamento nasce do cruzamento de seis áreas. Dele saem a
          identidade — visual e verbal — e, por fim, os pontos de contato em que
          a marca aparece.
        </p>
      </section>

      {/* As seis áreas do posicionamento (P-S-I-Q-U-E) — cards no fundo escuro. */}
      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— O posicionamento</p>
          <p className="inst-method__intro">
            O posicionamento é a tradução de seis áreas. Investigadas juntas,
            elas revelam o que só existe no seu consultório.
          </p>
          <div className="inst-nave">
            {positioning.map((area) => (
              <div key={area.letter} className="inst-nave__item">
                <span className="inst-nave__letter">{area.letter}</span>
                <h2 className="inst-nave__title">{area.title}</h2>
                <p className="inst-nave__copy">{area.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O processo: a linha do tempo (visão geral por fase) + a lista
          numerada dos oito passos (o detalhe do que cada um entrega). */}
      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">— O processo</p>
        <LinhaTempo />
        <p className="inst-diagram__caption">
          Duas etapas — estratégia e identidade — quebradas em quatro fases:
          coletar, explorar, criar e definir. No ar em 45 dias.
        </p>

        <div className="inst-proc">
          {process.map((etapa) => (
            <div key={etapa.etapa} className="inst-proc__etapa">
              <div className="inst-proc__head">
                <h2 className="inst-proc__title">{etapa.etapa}</h2>
                <span className="inst-proc__tag">{etapa.tag}</span>
              </div>
              <ol className="inst-proc__rows">
                {etapa.steps.map((step) => (
                  <li key={step.num} className="inst-proc__row">
                    <span className="inst-proc__num">{step.num}</span>
                    <h3 className="inst-proc__step">{step.title}</h3>
                    <p className="inst-proc__copy">{step.copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <InstContato />
    </main>
  );
}
