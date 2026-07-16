import Link from "next/link";

const productList = [
  {
    kicker: "/SOCIAL",
    title: "Social Kit",
    description: "Templates e arte para redes, no padrão da sua marca.",
    link: "/#servicos",
    cta: "VER"
  },
  {
    kicker: "/PORTFÓLIO",
    title: "Trabalhos",
    description: "Cases selecionados de branding e design.",
    link: "/portfolio",
    cta: "VER"
  },
  {
    kicker: "/MÉTODO",
    title: "Como trabalho",
    description: "Processo claro, do briefing à entrega final.",
    link: "/#processo",
    cta: "VER"
  }
];

export function Products() {
  return (
    <section className="products-section">
      <div className="site-shell">
        <div className="products__grid">
          {productList.map((prod) => (
            <article key={prod.title} className="product-card sr">
              <span className="product-card__kicker">{prod.kicker}</span>
              <h3 className="product-card__title">{prod.title}</h3>
              <p className="product-card__description">{prod.description}</p>
              <Link href={prod.link} className="button button--secondary product-card__btn">
                {prod.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
