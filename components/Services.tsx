import { MotionTrailsBg } from "@/components/MotionTrailsBg";
import { services } from "@/lib/data";

// ── Per-service visual illustrations ─────────────────────

function VisualSocial() {
  return (
    <svg viewBox="0 0 320 156" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Post 1 – leftmost, lower */}
      <rect x="28" y="44" width="78" height="96" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-1" />
      <rect x="28" y="44" width="78" height="5" rx="4" fill="rgba(212,43,43,0.55)" />
      <rect x="37" y="60" width="60" height="5" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="37" y="70" width="46" height="5" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="37" y="80" width="52" height="5" rx="3" fill="rgba(255,255,255,0.05)" />
      <text x="37" y="128" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="system-ui">❤ 142</text>

      {/* Post 2 – center, elevated */}
      <rect x="121" y="18" width="78" height="96" rx="10" fill="rgba(255,255,255,0.05)" stroke="rgba(212,43,43,0.22)" strokeWidth="1" className="svc-float-2" />
      <rect x="121" y="18" width="78" height="5" rx="4" fill="#d42b2b" />
      <rect x="130" y="34" width="60" height="5" rx="3" fill="rgba(255,255,255,0.1)" />
      <rect x="130" y="44" width="46" height="5" rx="3" fill="rgba(255,255,255,0.07)" />
      <rect x="130" y="54" width="56" height="5" rx="3" fill="rgba(255,255,255,0.07)" />
      <text x="130" y="102" fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="system-ui">❤ 287</text>

      {/* Post 3 – right, lower */}
      <rect x="214" y="44" width="78" height="96" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-3" />
      <rect x="214" y="44" width="78" height="5" rx="4" fill="rgba(212,43,43,0.55)" />
      <rect x="223" y="60" width="60" height="5" rx="3" fill="rgba(255,255,255,0.08)" />
      <rect x="223" y="70" width="50" height="5" rx="3" fill="rgba(255,255,255,0.05)" />
      <rect x="223" y="80" width="44" height="5" rx="3" fill="rgba(255,255,255,0.05)" />
      <text x="223" y="128" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="system-ui">❤ 198</text>

    </svg>
  );
}

function VisualPosition() {
  return (
    <svg viewBox="0 0 320 156" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="40" y="16" width="240" height="124" rx="12" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="160" y1="16" x2="160" y2="140" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <line x1="40" y1="78" x2="280" y2="78" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <text x="220" y="32" fill="rgba(212,43,43,0.3)" fontSize="8" fontFamily="system-ui" fontWeight="600" letterSpacing="0.1em">PREMIUM</text>
      <circle cx="80" cy="110" r="4" fill="rgba(255,255,255,0.12)" />
      <circle cx="110" cy="100" r="3.5" fill="rgba(255,255,255,0.1)" />
      <circle cx="70" cy="90" r="3" fill="rgba(255,255,255,0.1)" />
      <circle cx="130" cy="115" r="4" fill="rgba(255,255,255,0.08)" />
      <circle cx="95" cy="122" r="3" fill="rgba(255,255,255,0.08)" />
      <circle cx="145" cy="95" r="3" fill="rgba(255,255,255,0.1)" />
      <circle cx="230" cy="40" r="22" fill="rgba(212,43,43,0.07)" className="svc-pulse" />
      <circle cx="230" cy="40" r="14" fill="rgba(212,43,43,0.12)" />
      <circle cx="230" cy="40" r="7" fill="#d42b2b" />
    </svg>
  );
}

function VisualBrand() {
  return (
    <svg viewBox="0 0 320 156" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <line x1="160" y1="78" x2="76" y2="78" stroke="rgba(212,43,43,0.3)" strokeWidth="1.2" strokeDasharray="5 4" />
      <line x1="160" y1="78" x2="244" y2="44" stroke="rgba(212,43,43,0.3)" strokeWidth="1.2" strokeDasharray="5 4" />
      <line x1="160" y1="78" x2="244" y2="112" stroke="rgba(212,43,43,0.3)" strokeWidth="1.2" strokeDasharray="5 4" />
      <circle cx="160" cy="78" r="30" fill="rgba(212,43,43,0.1)" stroke="rgba(212,43,43,0.4)" strokeWidth="1.5" className="svc-float-2" />
      <circle cx="160" cy="78" r="22" fill="rgba(212,43,43,0.07)" />
      <text x="160" y="84" textAnchor="middle" fill="#d42b2b" fontSize="18" fontWeight="700" fontFamily="system-ui, sans-serif">F</text>
      <rect x="40" y="56" width="36" height="44" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-1" />
      <rect x="47" y="63" width="22" height="7" rx="3" fill="#d42b2b" />
      <rect x="47" y="74" width="22" height="7" rx="3" fill="rgba(212,43,43,0.5)" />
      <rect x="47" y="85" width="22" height="7" rx="3" fill="rgba(212,43,43,0.2)" />
      <circle cx="76" cy="78" r="4" fill="#d42b2b" opacity="0.9" className="svc-pulse" />
      <rect x="216" y="22" width="56" height="44" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-3" />
      <text x="244" y="52" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="22" fontWeight="700" fontFamily="Georgia, serif">Aa</text>
      <circle cx="244" cy="44" r="4" fill="#d42b2b" opacity="0.9" className="svc-pulse" />
      <rect x="216" y="90" width="56" height="44" rx="9" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-1" />
      <path d="M244 100 L252 104.5 L252 116 Q244 120.5 236 116 L236 104.5 Z" fill="none" stroke="rgba(212,43,43,0.65)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M240 110.5 L243 113.5 L248.5 108" stroke="#d42b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="244" cy="112" r="4" fill="#d42b2b" opacity="0.9" className="svc-pulse" />
    </svg>
  );
}

const visuals = [VisualSocial, VisualPosition, VisualBrand];

// ─────────────────────────────────────────────────────────

export function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="services__liquid" aria-hidden="true">
        <div className="services__blob services__blob--1" />
        <div className="services__blob services__blob--2" />
        <div className="services__blob services__blob--3" />
      </div>
      <MotionTrailsBg />
      <div className="site-shell services__content">
        <div className="section-header">
          <span className="section-kicker sr">O que fazemos melhor</span>
          <h2 className="section-title sr">
            O que a Made by Felipe <em>resolve</em>
          </h2>
          <p className="section-copy sr">
            Transformamos suas redes sociais em verdadeiras vitrines para seu negócio.<br />
            Conteúdo, design e posicionamento alinhados para gerar demanda e autoridade.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Visual = visuals[index];
            return (
              <article key={service.title} className="service-card sr">
                <div className="service-card__visual">
                  <Visual />
                </div>
                <div className="service-card__body">
                  <span className="service-card__icon">0{index + 1}</span>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <div className="service-card__tags">
                    {service.tags.map((tag) => (
                      <span key={tag} className="service-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
