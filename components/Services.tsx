import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="servicos" className="section">
      <div className="site-shell">
        <div className="section-header section-header--left">
          <span className="section-kicker sr">Serviços</span>
          <h2 className="section-title sr">
            O que a Made by Felipe <em>entrega</em>
          </h2>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card sr">
              <div>
                <span className="service-card__icon">0{index + 1}</span>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </div>

              <div className="service-card__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
