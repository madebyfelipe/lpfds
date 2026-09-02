import type { Metadata } from "next";
import { InstContato } from "@/components/institucional/InstContato";
import {
  LinhaTempo,
  MetodologiaFlow
} from "@/components/institucional/MetodoDiagrams";
import { methodIntro, positioning, process } from "@/lib/institucional";

export const metadata: Metadata = {
  title: "Método NAVE — Made by Felipe",
  description:
    "Da estratégia à comunicação: como a marca do seu consultório é traduzida a partir de Negócio, Audiência, Valor e Estória, em oito passos e duas etapas."
};

export default function MetodologiaPage() {
  return (
    <main>
      <header className="inst-hero">
        <p className="inst-kicker inst-kicker--tight">— O método</p>
        <h1 className="inst-hero__title">
          Método <span className="inst-hero__accent">NAVE</span>.
        </h1>
        <p className="inst-hero__lead">{methodIntro}</p>
      </header>

      {/* Diagrama 1 — Metodologia: estratégia → identidade → comunicação. */}
      <section className="inst-section inst-section--rule inst-section--flush-top">
        <p className="inst-kicker">— Metodologia</p>
        <MetodologiaFlow />
        <p className="inst-diagram__caption">
          O posicionamento nasce do cruzamento de quatro áreas. Dele saem a
          identidade — visual e verbal — e, por fim, os pontos de contato em que
          a marca aparece.
        </p>
      </section>

      {/* As quatro áreas (N-A-V-E) e os oito passos — cards no fundo escuro. */}
      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— O posicionamento</p>
          <div className="inst-nave">
            {positioning.map((area) => (
              <div key={area.letter} className="inst-nave__item">
                <span className="inst-nave__letter">{area.letter}</span>
                <h2 className="inst-nave__title">{area.title}</h2>
                <p className="inst-nave__copy">{area.copy}</p>
              </div>
            ))}
          </div>

          <div className="inst-method__block">
            <p className="inst-method__label">Do briefing ao ar, em oito passos</p>
            {process.map((etapa) => (
              <div key={etapa.etapa} className="inst-etapa">
                <div className="inst-etapa__head">
                  <h2 className="inst-etapa__title">{etapa.etapa}</h2>
                  <span className="inst-etapa__tag">{etapa.tag}</span>
                </div>
                <div className="inst-etapa__steps">
                  {etapa.steps.map((step) => (
                    <div key={step.num} className="inst-step">
                      <p className="inst-step__num">{step.num}</p>
                      <h3 className="inst-step__title">{step.title}</h3>
                      <p className="inst-step__copy">{step.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagrama 2 — Linha do tempo: duas etapas, quatro fases. */}
      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">— Linha do tempo</p>
        <LinhaTempo />
        <p className="inst-diagram__caption">
          Duas etapas — estratégia e identidade — quebradas em quatro fases:
          coletar, explorar, criar e definir. No ar em 45 dias.
        </p>
      </section>

      <InstContato />
    </main>
  );
}
