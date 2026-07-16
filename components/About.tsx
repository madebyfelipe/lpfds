import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";

export function About() {
  return (
    <section id="sobre" className="section about-section">
      <div className="site-shell">
        <div className="grid-2col grid-2col--align-start">
          {/* Left Column */}


          {/* Right Column */}
          <div className="about__col-right sr">
            <div className="section-header section-header--left" style={{ marginBottom: "var(--space-6)" }}>
              <span className="section-kicker">/SOBRE</span>
              <h2 className="section-title">
                Design que faz empresas parecerem <em>maiores</em>.
              </h2>
            </div>
            <div className="hero__actions" style={{ marginTop: 0, marginBottom: "var(--space-6)" }}>
              <ScheduleLink className="button button--primary">
                Vamos conversar
              </ScheduleLink>
              <Link href="/portfolio" className="button button--secondary">
                Ver portfólio
              </Link>
            </div>
            <p className="about__text">
              Meu trabalho é unir estratégia, branding, design, conteúdo e experiência digital para que sua empresa pareça profissional em todos os pontos de contato.
            </p>
            <p className="about__text">
              Da identidade visual ao site, do conteúdo às campanhas, tudo precisa comunicar a mesma mensagem.
            </p>
            <p className="about__text" style={{ fontWeight: 700, color: "var(--accent)" }}>
              É isso que eu construo.
            </p>
          </div>
          <div className="about__col-left sr">

          </div>
        </div>
      </div>
    </section>
  );
}
