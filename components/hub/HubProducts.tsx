import Link from "next/link";

const featured = [
  {
    tone: "accent" as const,
    eyebrow: "IDENTIDADE DE MARCA",
    title: "Branding Completo",
    body: "Estratégia, naming e sistema visual completo para marcas que querem parecer — e ser — maiores.",
    cta: "Ver serviço",
    href: "/#servicos",
  },
  {
    tone: "dark" as const,
    eyebrow: "CONSULTORIA",
    title: "Diagnóstico de Marca",
    body: "Uma sessão para destravar o posicionamento e o próximo passo visual do seu negócio.",
    cta: "Agendar",
    href: "https://cal.com/madebyfelipe/15min",
    external: true,
  },
];

const secondary = [
  {
    eyebrow: "SOCIAL MEDIA",
    title: "Gestão Estratégica",
    body: "Conteúdo, design e distribuição no padrão da sua marca.",
    cta: "VER",
    href: "/#servicos",
  },
  {
    eyebrow: "PORTFÓLIO",
    title: "Trabalhos",
    body: "Cases selecionados de branding e design.",
    cta: "VER",
    href: "/portfolio",
  },
  {
    eyebrow: "MÉTODO",
    title: "Como trabalho",
    body: "Processo claro, do briefing à entrega final.",
    cta: "VER",
    href: "/#processo",
  },
];

export function HubProducts() {
  return (
    <section id="servicos" className="hub-products">
      <div className="hub-products__featured">
        {featured.map((item) => (
          <article
            key={item.title}
            className={`hub-card hub-card--${item.tone}`}
          >
            <span className="hub-card__eyebrow">{item.eyebrow}</span>
            <h3 className="hub-card__title">{item.title}</h3>
            <p className="hub-card__body">{item.body}</p>
            <div className="hub-card__footer">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button--ghost"
                >
                  {item.cta}
                </a>
              ) : (
                <Link href={item.href} className="button button--ghost">
                  {item.cta}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="hub-products__secondary">
        {secondary.map((item) => (
          <article key={item.title} className="hub-card">
            <span className="hub-card__eyebrow">{item.eyebrow}</span>
            <h3 className="hub-card__title">{item.title}</h3>
            <p className="hub-card__body">{item.body}</p>
            <div className="hub-card__footer">
              <Link href={item.href} className="button button--ghost">
                {item.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
