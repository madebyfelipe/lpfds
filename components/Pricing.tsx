import { MotionCard } from "@/components/MotionCard";
import { MotionLink } from "@/components/MotionLink";
import { pricingTiers } from "@/lib/data";

function IncludedFeatures({ items, dark = false }: { items: { label: string; included: boolean }[]; dark?: boolean }) {
  const visibleItems = items.filter((item) => item.included);

  return (
    <ul className={`pricing-features__list ${dark ? "pricing-features__list--dark" : ""}`}>
      {visibleItems.map((item) => (
        <li key={item.label} className="pricing-features__item">
          <span className="pricing-features__mark">{dark ? "✳" : "✶"}</span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

function CardTier({
  name,
  price,
  cta,
  highlighted,
  paymentUrl,
  features
}: {
  name: string;
  price: string;
  cta: string;
  highlighted?: boolean;
  paymentUrl: string;
  features: { label: string; included: boolean }[];
}) {
  return (
    <MotionCard className={`pricing-card sr${highlighted ? " pricing-card--highlighted" : ""}`}>
      <div className="pricing-card__top">
        <div className="pricing-card__frame">
          <div className="pricing-card__headerRow">
            <p className="pricing-card__label">{name}</p>
            {highlighted ? <span className="pricing-card__badge">Popular</span> : null}
          </div>

          <div className="pricing-card__priceRow">
            <span className="pricing-card__currency">{price.split("/")[0]}</span>
            <span className="pricing-card__period">/{price.split("/")[1]}</span>
          </div>

          <MotionLink
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`pricing-card__button button ${highlighted ? "button--primary" : "button--ghost"}`}
          >
            {cta}
            <span className="pricing-card__btn-circle">→</span>
          </MotionLink>
        </div>
      </div>

      <div className="pricing-features">
        <p className="pricing-features__title">O que está incluído:</p>
        <IncludedFeatures items={features} />
      </div>
    </MotionCard>
  );
}

export function Pricing() {
  const [essential, strategic, premium] = pricingTiers;
  const premiumFeatures = [...premium.branding, ...premium.social];

  return (
    <section id="planos" className="section">
      <div className="site-shell">
        <div className="section-header">
          <span className="section-kicker sr">Planos</span>
          <h2 className="section-title sr">
            Planos que <em>escalam</em> com você
          </h2>
        </div>

        <div className="pricing-showcase">
          <div className="pricing-showcase__top">
            <CardTier
              name={essential.name}
              price={essential.price}
              cta={essential.cta}
              paymentUrl={essential.paymentUrl}
              features={[...essential.branding, ...essential.social]}
            />
            <CardTier
              name={strategic.name}
              price={strategic.price}
              cta={strategic.cta}
              paymentUrl={strategic.paymentUrl}
              highlighted
              features={[...strategic.branding, ...strategic.social]}
            />
          </div>

          <article className="pricing-premium sr">
            <div className="pricing-premium__offer">
              <p className="pricing-premium__label">{premium.name}</p>
              <div className="pricing-card__priceRow pricing-card__priceRow--dark">
                <span className="pricing-card__currency">{premium.price.split("/")[0]}</span>
                <span className="pricing-card__period pricing-card__period--dark">
                  /{premium.price.split("/")[1]}
                </span>
              </div>
              <MotionLink href={premium.paymentUrl} target="_blank" rel="noopener noreferrer" className="pricing-premium__button button button--ghost">
                {premium.cta}
                <span className="pricing-premium__buttonIcon">→</span>
              </MotionLink>
            </div>

            <div className="pricing-premium__details">
              <p className="pricing-features__title pricing-features__title--dark">O que está incluído:</p>
              <IncludedFeatures items={premiumFeatures} dark />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
