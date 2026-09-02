import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Depoimentos } from "@/components/institucional/Depoimentos";
import { InstContato } from "@/components/institucional/InstContato";
import {
  agenda,
  deliverables,
  heroStrip,
  methodIntro,
  positioning,
  process
} from "@/lib/institucional";

// Title/description da home vêm do copy aprovado e sobrescrevem os do
// layout raiz, que seguem servindo /hub, /contato e /portfolio.
export const metadata: Metadata = {
  title: "Marca para consultório de psicologia em 45 dias | Made by Felipe",
  description:
    "Construa a marca do seu consultório em dois dias de imersão. Posicionamento, identidade visual e verbal no ar em 45 dias, dentro do artigo 20 do Código de Ética."
};

export default function Home() {
  return (
    <main>
      <header className="inst-hero">
        <h1 className="inst-hero__title">
          Construa a marca do seu consultório em{" "}
          <span className="inst-hero__accent">dois dias de imersão</span>.
        </h1>
        <p className="inst-hero__lead">
          Dois dias com você. Posicionamento, identidade visual e verbal no ar
          em 45 dias.
        </p>
        <p className="inst-hero__note">
          Dentro do artigo 20 do Código de Ética Profissional do Psicólogo.
        </p>
        <Link href="/imersao" className="inst-hero__cta">
          Agendar a imersão →
        </Link>
      </header>

      <div className="inst-strip">
        {heroStrip.map((foto) => (
          <div key={foto.src} className="inst-strip__cell">
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              quality={90}
              className="inst-strip__img"
            />
          </div>
        ))}
      </div>

      {/* id="processo": o card "Como trabalho" do /hub aponta para /#processo.
          Dobra do método NAVE — o posicionamento (N-A-V-E) e a linha do tempo
          de oito passos em duas etapas. Substituiu o antigo "Como funciona". */}
      <section id="processo" className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— O método</p>
          <p className="inst-method__intro">{methodIntro}</p>

          <div className="inst-method__block">
            <p className="inst-method__label">
              O posicionamento nasce de quatro áreas
            </p>
            <div className="inst-nave">
              {positioning.map((area) => (
                <div key={area.letter} className="inst-nave__item">
                  <span className="inst-nave__letter">{area.letter}</span>
                  <h3 className="inst-nave__title">{area.title}</h3>
                  <p className="inst-nave__copy">{area.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="inst-method__block">
            <p className="inst-method__label">Do briefing ao ar, em oito passos</p>
            {process.map((etapa) => (
              <div key={etapa.etapa} className="inst-etapa">
                <div className="inst-etapa__head">
                  <h3 className="inst-etapa__title">{etapa.etapa}</h3>
                  <span className="inst-etapa__tag">{etapa.tag}</span>
                </div>
                <div className="inst-etapa__steps">
                  {etapa.steps.map((step) => (
                    <div key={step.num} className="inst-step">
                      <p className="inst-step__num">{step.num}</p>
                      <h4 className="inst-step__title">{step.title}</h4>
                      <p className="inst-step__copy">{step.copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="inst-section">
        <p className="inst-kicker">— O estúdio</p>
        <div className="inst-studio">
          <p className="inst-studio__copy">
            Made by Felipe constrói marca a partir da leitura do negócio.{" "}
            <strong>
              Receita, carteira, valor de sessão e ocupação de agenda
            </strong>{" "}
            entram na mesa antes de qualquer decisão visual.
          </p>
          <p className="inst-studio__copy inst-studio__copy--muted">
            O foco em consultório de psicologia veio da mesma constatação
            repetida na região: profissionais com formação longa e uma presença
            que comunica muito abaixo do próprio preparo.
          </p>
        </div>
      </section>

      {/* id="servicos": âncora de Entregas, usada por links externos e pelo /hub. */}
      <section id="servicos" className="inst-section--rule">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--lg">— Entregas</p>
          <div className="inst-deliverables">
            {deliverables.map((item) => (
              <div key={item} className="inst-deliverable">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Depoimentos />

      <section className="inst-agenda">
        <div className="inst-section" style={{ paddingBlock: "96px" }}>
          <p className="inst-kicker inst-kicker--tight">— Agenda</p>
          <p className="inst-agenda__line">
            {agenda.numProjetos} projetos por trimestre. Próxima imersão
            disponível em{" "}
            <span className="inst-agenda__accent">{agenda.mesImersao}</span>.
          </p>
        </div>
      </section>

      <InstContato />
    </main>
  );
}
