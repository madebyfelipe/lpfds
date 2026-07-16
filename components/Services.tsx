import { ScheduleLink } from "@/components/ScheduleLink";
import { services } from "@/lib/data";

export function Services() {
  const s1 = services[0];
  const s2 = services[1];
  const s3 = services[2];
  const s4 = services[3];
  const s5 = services[4];

  return (
    <section id="servicos" className="section services">
      <div className="site-shell services__content">
        <div className="section-header" style={{ marginBottom: "var(--section-gap)" }}>
          <span className="section-kicker sr">Serviços</span>
          <h2 className="section-title sr">
            Como posso <em>ajudar</em>
          </h2>
        </div>

        {/* Row 1 (2 Columns) */}
        <div className="services__grid services__grid--featured">
          {/* Card 1: Identidade Visual (Red Background) */}
          <article className="service-card service-card--accent sr">
            <div className="service-card__body">
              <span className="service-card__icon" style={{ color: "rgba(255, 255, 255, 0.7)" }}>/IDENTIDADE</span>
              <h3 className="service-card__title">{s1.title}</h3>
              <p className="service-card__description">{s1.description}</p>
              <ScheduleLink className="button button--inverse service-card__btn">
                Agendar projeto
              </ScheduleLink>
            </div>
          </article>

          {/* Card 2: Websites (Black Background) */}
          <article className="service-card service-card--black sr">
            <div className="service-card__body">
              <span className="service-card__icon" style={{ color: "rgba(255, 255, 255, 0.7)" }}>/WEB</span>
              <h3 className="service-card__title">{s2.title}</h3>
              <p className="service-card__description">{s2.description}</p>
              <ScheduleLink className="button button--inverse service-card__btn">
                Criar site
              </ScheduleLink>
            </div>
          </article>
        </div>

        {/* Row 2 (3 Columns) */}
        <div className="services__grid services__grid--small">
          {/* Card 3: UX/UI Design (Gray Background) */}
          <article className="service-card service-card--gray sr">
            <div className="service-card__body">
              <span className="service-card__icon">/DESIGN</span>
              <h3 className="service-card__title">{s3.title}</h3>
              <p className="service-card__description">{s3.description}</p>
              <ScheduleLink className="button button--secondary service-card__btn">
                Acessar design
              </ScheduleLink>
            </div>
          </article>

          {/* Card 4: Conteúdo (Gray Background) */}
          <article className="service-card service-card--gray sr">
            <div className="service-card__body">
              <span className="service-card__icon">/CONTEÚDO</span>
              <h3 className="service-card__title">{s4.title}</h3>
              <p className="service-card__description">{s4.description}</p>
              <ScheduleLink className="button button--secondary service-card__btn">
                Ver conteúdo
              </ScheduleLink>
            </div>
          </article>

          {/* Card 5: Direção Criativa (White Background) */}
          <article className="service-card service-card--white sr">
            <div className="service-card__body">
              <span className="service-card__icon">/DIREÇÃO</span>
              <h3 className="service-card__title">{s5.title}</h3>
              <p className="service-card__description">{s5.description}</p>
              <ScheduleLink className="button button--secondary service-card__btn">
                Ver direção
              </ScheduleLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
