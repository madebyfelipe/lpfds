import Link from "next/link";

const Arrow = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const featured = [
  {
    tone: "accent" as const,
    eyebrow: "/ESTÚDIO",
    title: "Identidade de Marca",
    body: "Estratégia, naming e sistema visual completo para marcas que querem parecer — e ser — maiores.",
    cta: "Ver serviço",
    href: "/#servicos",
  },
  {
    tone: "dark" as const,
    eyebrow: "/CONSULTORIA",
    title: "Diagnóstico de Marca",
    body: "Uma sessão para destravar o posicionamento e o próximo passo visual do seu negócio.",
    cta: "Agendar",
    href: "https://cal.com/madebyfelipe/15min",
    external: true,
  },
];

const secondary = [
  {
    eyebrow: "/SOCIAL",
    title: "Social Kit",
    body: "Templates e arte para redes, no padrão da sua marca.",
    cta: "VER",
    href: "/#servicos",
  },
  {
    eyebrow: "/PORTFÓLIO",
    title: "Trabalhos",
    body: "Cases selecionados de branding e design.",
    cta: "VER",
    href: "/portfolio",
  },
  {
    eyebrow: "/MÉTODO",
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
                  className="button button--inverse button--pill"
                >
                  {item.cta}
                </a>
              ) : (
                <Link href={item.href} className="button button--inverse button--pill">
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
              <Link href={item.href} className="button button--secondary">
                {item.cta}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
