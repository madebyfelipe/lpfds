import type { Metadata } from "next";
import Image from "next/image";
import { alternatesDe } from "@/lib/i18n";
import { OG_IMAGE } from "@/lib/site";
import { ScheduleLink } from "@/components/ScheduleLink";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { MetodologiaFlow } from "@/components/institucional/MetodoDiagrams";
import { MetodoMotion, PixelIcon } from "@/components/institucional/MetodoMotion";
import { positioning, process } from "@/lib/institucional";
import "./metodologia.css";

export const metadata: Metadata = {
  title: "Método de construção de marca — PSIQUE | Made by Felipe",
  description:
    "Como construir uma marca do zero: o método PSIQUE traduz o negócio em posicionamento, identidade visual e verbal — da estratégia à comunicação, em oito passos e duas etapas. Branding em Sorocaba e São Paulo.",
  alternates: alternatesDe("/metodologia", "pt"),
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
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "article"
  }
};

// Letras que passam no rolo antes de parar na letra da área (decorativo).
const REEL = "BRANDMKTGVXZ";
const reelFor = (letter: string, i: number) =>
  Array.from({ length: 7 }, (_, k) => REEL[(k * 5 + i * 3) % REEL.length]).filter((c) => c !== letter);

const steps = process.flatMap((etapa) => etapa.steps);

/**
 * /metodologia no formato da página "About" do shortscut.com (pedido do
 * Felipe, nov/2026: "método assim, animado inteirinho"), com o conteúdo do
 * método: frase de abertura gigante com ícones de pontos, dois textos em
 * colunas, janela 16:9 com o diagrama, as seis áreas com letras em rolo,
 * os oito passos em tipo grande numa faixa cinza e a régua + chamada final.
 * Toda a animação mora em MetodoMotion (GSAP); sem JS ou com movimento
 * reduzido, tudo aparece parado no lugar.
 */
export default function MetodologiaPage() {
  return (
    <main id="conteudo" className="mtd">
      <MetodoMotion />

      {/* 1 — Abertura */}
      <section className="mtd-hero">
        <h1 className="mtd-hero__title" data-mtd-split>
          <span className="mtd-red">Método PSIQUE</span> parte de uma ideia simples{" "}
          <PixelIcon shape="eye" /> Branding é tradução <PixelIcon shape="grid" /> não invenção.
        </h1>

        <div className="mtd-hero__cols">
          <p className="mtd-hero__col" data-mtd-rise>
            A marca do seu consultório não é inventada — ela é traduzida de seis áreas que a gente investiga até
            encontrar o que só existe em você.
          </p>
          <p className="mtd-hero__col" data-mtd-rise>
            O posicionamento nasce do cruzamento de seis áreas. Dele saem a identidade — visual e verbal — e, por fim,
            os pontos de contato em que a marca aparece.
          </p>
        </div>

        {/* 2 — Janela 16:9 com o diagrama (no lugar do vídeo da referência) */}
        <figure className="mtd-media" data-mtd-media>
          <figcaption className="mtd-media__bar">metodologia-psique.svg</figcaption>
          <div className="mtd-media__screen">
            <MetodologiaFlow />
          </div>
          <div className="mtd-media__foot">
            <PixelIcon shape="wave" />
            <p className="mtd-media__label">
              Estratégia → identidade → comunicação.
              <br />
              Sorocaba (SP), Brasil
            </p>
            <p className="mtd-media__meta mmono">
              <span className="mtd-media__pill">Prazo</span> até 30 dias
            </p>
          </div>
        </figure>
      </section>

      {/* 3 — As seis áreas: letras em rolo (no lugar dos números da referência) */}
      <section className="mtd-facts" aria-labelledby="mtd-facts-title">
        <h2 id="mtd-facts-title" className="mtd-facts__label">
          O posicionamento:
        </h2>
        <ul className="mtd-facts__list">
          {positioning.map((area, i) => (
            <li key={area.letter} className="mtd-fact" data-mtd-fact>
              <span className="mtd-reel" aria-hidden="true">
                <span className="mtd-reel__strip" style={{ "--n": reelFor(area.letter, i).length } as React.CSSProperties}>
                  {reelFor(area.letter, i).map((c, k) => (
                    <span key={k}>{c}</span>
                  ))}
                  <span>{area.letter}</span>
                </span>
              </span>
              <div className="mtd-fact__body">
                <h3 className="mtd-fact__title">{area.title}</h3>
                <p className="mtd-fact__copy">{area.copy}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* 4 — Os oito passos em tipo grande (no lugar da lista de clientes) */}
      <section className="mtd-steps" aria-labelledby="mtd-steps-title">
        <h2 id="mtd-steps-title" className="mtd-pill mmono">
          O processo • oito passos
        </h2>
        <ol className="mtd-steps__list">
          {steps.map((step) => (
            <li key={step.num} className="mtd-step" data-mtd-step>
              <h3 className="mtd-step__name">
                <span className="mtd-step__num mmono">{step.num}</span>
                <span className="mtd-step__text">{step.title}</span>
              </h3>
              <p className="mtd-step__copy">{step.copy}</p>
            </li>
          ))}
        </ol>
        <p className="mtd-steps__note" data-mtd-rise>
          Duas etapas — estratégia e identidade — quebradas em quatro fases: coletar, explorar, criar e definir. Tudo
          apresentado em até 30 dias, com o site incluso.
        </p>
      </section>

      {/* 5 — Régua + chamada final */}
      <section className="mtd-cta" aria-labelledby="mtd-cta-title">
        <div className="mtd-ruler" aria-hidden="true">
          <div className="mtd-ruler__track" data-mtd-ruler>
            {steps.map((step) => (
              <span key={step.num} className="mtd-ruler__mark">
                <span className="mtd-ruler__ticks" />
                <span className="mtd-ruler__label mmono">{step.num}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="mtd-cta__grid" aria-hidden="true" />

        <h2 id="mtd-cta-title" className="mtd-cta__title">
          <span className="mtd-cta__line" data-mtd-line>
            Vamos traduzir
          </span>
          <span className="mtd-cta__line" data-mtd-line>
            o seu consultório
          </span>
          <span className="mtd-cta__photo" data-mtd-photo aria-hidden="true">
            <Image src="/institucional/home/hero-figma.jpg" alt="" fill sizes="(max-width: 767px) 80vw, 460px" />
          </span>
          <span className="mtd-cta__line" data-mtd-line>
            em uma <span className="mtd-red">marca</span>
          </span>
        </h2>
        <div className="mtd-cta__action" data-mtd-rise>
          <ScheduleLink className="mbtn">
            <MButtonInner>Conversar por 15 minutos</MButtonInner>
          </ScheduleLink>
        </div>
      </section>
    </main>
  );
}
