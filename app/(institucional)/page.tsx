import Image from "next/image";
import Link from "next/link";
import { Depoimentos } from "@/components/institucional/Depoimentos";
import { InstContato } from "@/components/institucional/InstContato";
import {
  agenda,
  clientLogos,
  deliverables,
  heroStrip,
  steps
} from "@/lib/institucional";

export default function Home() {
  return (
    <main>
      <header className="inst-hero">
        <h1 className="inst-hero__title">
          Construa a marca da sua banca em{" "}
          <span className="inst-hero__accent">uma imersão de dois dias</span>.
        </h1>
        <p className="inst-hero__lead">
          Dois dias com os sócios. Posicionamento, identidade visual e verbal no
          ar em 30 dias.
        </p>
        <p className="inst-hero__note">Dentro do Provimento 205 da OAB.</p>
        <Link href="/imersao" className="inst-hero__cta">
          Agendar a imersão →
        </Link>
      </header>

      {/* Faixa do hero — fotos ainda a definir pelo Felipe. */}
      <div className="inst-strip">
        {heroStrip.map((pauta) => (
          <div key={pauta} className="inst-strip__cell">
            <span className="inst-slot">{pauta}</span>
          </div>
        ))}
      </div>

      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— Como funciona</p>
          <div className="inst-steps">
            {steps.map((step) => (
              <div key={step.num} className="inst-step">
                <p className="inst-step__num">{step.num}</p>
                <h3 className="inst-step__title">{step.title}</h3>
                <p className="inst-step__copy">{step.copy}</p>
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
            <strong>Receita, carteira, ticket e processo comercial</strong>{" "}
            entram na mesa antes de qualquer decisão visual.
          </p>
          <p className="inst-studio__copy inst-studio__copy--muted">
            O foco em advocacia empresarial veio da mesma constatação repetida
            na região: bancas com reputação técnica sólida e presença abaixo do
            próprio porte.
          </p>
        </div>
      </section>

      <section className="inst-section inst-section--flush-top">
        <p className="inst-kicker inst-kicker--md">— Clientes</p>
        <div className="inst-clients">
          {clientLogos.map((logo) => (
            <div key={logo.src} className="inst-clients__cell">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={72}
                className="inst-clients__logo"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="inst-section--rule">
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
