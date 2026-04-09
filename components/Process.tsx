import { processSteps } from "@/lib/data";

// ── Per-step visual illustrations ────────────────────────

function VisualDiagnostico() {
  return (
    <svg viewBox="0 0 220 126" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Calendar widget */}
      <rect x="44" y="18" width="90" height="82" rx="12" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-1" />
      {/* Calendar header */}
      <rect x="44" y="18" width="90" height="24" rx="10" fill="rgba(212,43,43,0.15)" />
      <rect x="44" y="30" width="90" height="12" fill="rgba(212,43,43,0.15)" />
      <text x="89" y="34" textAnchor="middle" fill="rgba(212,43,43,0.9)" fontSize="9.5" fontWeight="700" fontFamily="system-ui">MARÇO</text>
      {/* Calendar grid dots */}
      {[0,1,2,3,4,5,6].map((i) => (
        <circle key={i} cx={56 + i * 12} cy={56} r="3" fill={i === 3 ? "#d42b2b" : "rgba(255,255,255,0.1)"} />
      ))}
      {[0,1,2,3,4,5,6].map((i) => (
        <circle key={i} cx={56 + i * 12} cy={70} r="3" fill="rgba(255,255,255,0.07)" />
      ))}
      {[0,1,2,3,4].map((i) => (
        <circle key={i} cx={56 + i * 12} cy={84} r="3" fill="rgba(255,255,255,0.07)" />
      ))}
      {/* Highlighted slot */}
      <rect x="80" y="48" width="18" height="18" rx="5" fill="rgba(212,43,43,0.25)" stroke="rgba(212,43,43,0.5)" strokeWidth="1" />

      {/* Chat bubble */}
      <rect x="144" y="24" width="58" height="36" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="svc-float-2" />
      <path d="M144 50 L136 56 L144 54" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeLinejoin="round" />
      <rect x="152" y="33" width="42" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
      <rect x="152" y="43" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.08)" />

      {/* Second bubble (reply) */}
      <rect x="136" y="70" width="58" height="30" rx="10" fill="rgba(212,43,43,0.1)" stroke="rgba(212,43,43,0.25)" strokeWidth="1" className="svc-float-3" />
      <path d="M194 82 L202 86 L194 88" fill="rgba(212,43,43,0.1)" stroke="rgba(212,43,43,0.25)" strokeWidth="1" strokeLinejoin="round" />
      <rect x="144" y="78" width="42" height="5" rx="2.5" fill="rgba(212,43,43,0.4)" />
      <rect x="144" y="87" width="28" height="4" rx="2" fill="rgba(212,43,43,0.2)" />

    </svg>
  );
}

function VisualMarca() {
  return (
    <svg viewBox="0 0 220 126" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Central brand circle */}
      <circle cx="110" cy="63" r="32" fill="rgba(212,43,43,0.08)" stroke="rgba(212,43,43,0.35)" strokeWidth="1.5" className="svc-float-2" />
      <circle cx="110" cy="63" r="22" fill="rgba(212,43,43,0.06)" />
      <text x="110" y="69" textAnchor="middle" fill="#d42b2b" fontSize="20" fontWeight="700" fontFamily="system-ui">F</text>

      {/* Lines to satellites */}
      <line x1="110" y1="63" x2="44" y2="35" stroke="rgba(212,43,43,0.25)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="110" y1="63" x2="44" y2="91" stroke="rgba(212,43,43,0.25)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="110" y1="63" x2="176" y2="35" stroke="rgba(212,43,43,0.25)" strokeWidth="1" strokeDasharray="4 3" />
      <line x1="110" y1="63" x2="176" y2="91" stroke="rgba(212,43,43,0.25)" strokeWidth="1" strokeDasharray="4 3" />

      {/* Palette node */}
      <rect x="22" y="22" width="44" height="26" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-1" />
      <circle cx="33" cy="35" r="5" fill="#d42b2b" />
      <circle cx="45" cy="35" r="5" fill="rgba(212,43,43,0.4)" />
      <circle cx="57" cy="35" r="5" fill="rgba(255,255,255,0.15)" />
      <circle cx="44" cy="35" r="4" fill="#d42b2b" opacity="0" />

      {/* Typography node */}
      <rect x="154" y="22" width="44" height="26" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-3" />
      <text x="176" y="39" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="15" fontWeight="700" fontFamily="Georgia, serif">Aa</text>

      {/* Logo node */}
      <rect x="22" y="78" width="44" height="26" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-2" />
      <text x="44" y="95" textAnchor="middle" fill="rgba(212,43,43,0.6)" fontSize="11" fontWeight="700" fontFamily="system-ui">LOGO</text>

      {/* Shield node */}
      <rect x="154" y="78" width="44" height="26" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="1" className="svc-float-1" />
      <path d="M176 84 L182 87 L182 95 Q176 98 170 95 L170 87 Z" fill="none" stroke="rgba(212,43,43,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M173 91 L175.5 93.5 L179.5 89" stroke="#d42b2b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Pulse dots on lines */}
      <circle cx="44" cy="35" r="3" fill="#d42b2b" className="svc-pulse" />
      <circle cx="176" cy="35" r="3" fill="#d42b2b" className="svc-pulse" />
      <circle cx="44" cy="91" r="3" fill="#d42b2b" className="svc-pulse" />
      <circle cx="176" cy="91" r="3" fill="#d42b2b" className="svc-pulse" />
    </svg>
  );
}

function VisualConteudo() {
  return (
    <svg viewBox="0 0 220 126" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Phone outline */}
      <rect x="74" y="10" width="72" height="106" rx="14" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" className="svc-float-2" />
      <rect x="78" y="14" width="64" height="98" rx="11" fill="rgba(0,0,0,0.3)" />
      {/* Camera dot */}
      <circle cx="110" cy="20" r="2.5" fill="rgba(255,255,255,0.15)" />

      {/* Content grid inside phone */}
      <rect x="82" y="30" width="28" height="28" rx="5" fill="rgba(212,43,43,0.2)" stroke="rgba(212,43,43,0.25)" strokeWidth="1" />
      <rect x="114" y="30" width="24" height="28" rx="5" fill="rgba(255,255,255,0.05)" />
      <rect x="82" y="62" width="24" height="22" rx="5" fill="rgba(255,255,255,0.05)" />
      <rect x="110" y="62" width="28" height="22" rx="5" fill="rgba(255,255,255,0.04)" />
      <rect x="82" y="88" width="56" height="14" rx="5" fill="rgba(255,255,255,0.04)" />

      {/* Red accent lines in post 1 */}
      <rect x="86" y="38" width="20" height="3" rx="1.5" fill="rgba(212,43,43,0.7)" />
      <rect x="86" y="44" width="14" height="3" rx="1.5" fill="rgba(212,43,43,0.4)" />

      {/* LIVE badge */}
      <rect x="22" y="22" width="42" height="18" rx="9" fill="rgba(212,43,43,0.15)" stroke="rgba(212,43,43,0.4)" strokeWidth="1" />
      <circle cx="33" cy="31" r="3" fill="#d42b2b" className="svc-pulse" />
      <text x="50" y="35" textAnchor="middle" fill="rgba(212,43,43,0.9)" fontSize="8.5" fontWeight="700" fontFamily="system-ui">LIVE</text>

      {/* Upload arrow right */}
      <rect x="156" y="40" width="44" height="18" rx="9" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="svc-float-3" />
      <text x="178" y="52.5" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="8.5" fontWeight="600" fontFamily="system-ui">↑ Post</text>

      {/* Engagement below */}
      <rect x="22" y="80" width="44" height="32" rx="10" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" className="svc-float-1" />
      <text x="44" y="94" textAnchor="middle" fill="#d42b2b" fontSize="10" fontWeight="700" fontFamily="system-ui">❤ 248</text>
    </svg>
  );
}

function VisualCrescimento() {
  return (
    <svg viewBox="0 0 220 126" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Chart background */}
      <rect x="20" y="16" width="180" height="90" rx="10" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* Grid lines */}
      <line x1="20" y1="88" x2="200" y2="88" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="20" y1="65" x2="200" y2="65" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="20" y1="42" x2="200" y2="42" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

      {/* Trend area fill */}
      <path d="M30 85 L72 75 L114 60 L156 38 L190 22 L190 88 L30 88 Z" fill="rgba(212,43,43,0.06)" />

      {/* Trend line */}
      <path d="M30 85 L72 75 L114 60 L156 38 L190 22" stroke="#d42b2b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Milestone dots */}
      <circle cx="30" cy="85" r="4" fill="rgba(212,43,43,0.5)" stroke="rgba(212,43,43,0.8)" strokeWidth="1" />
      <circle cx="72" cy="75" r="4" fill="rgba(212,43,43,0.5)" stroke="rgba(212,43,43,0.8)" strokeWidth="1" />
      <circle cx="114" cy="60" r="4" fill="rgba(212,43,43,0.5)" stroke="rgba(212,43,43,0.8)" strokeWidth="1" />
      <circle cx="156" cy="38" r="4" fill="rgba(212,43,43,0.7)" stroke="#d42b2b" strokeWidth="1.5" />
      <circle cx="190" cy="22" r="6" fill="#d42b2b" className="svc-pulse" />

      {/* Up arrow at end */}
      <polygon points="190,14 194,22 186,22" fill="#d42b2b" opacity="0.8" />
    </svg>
  );
}

const stepVisuals = [VisualDiagnostico, VisualMarca, VisualConteudo, VisualCrescimento];

// ─────────────────────────────────────────────────────────

export function Process() {
  return (
    <section id="processo" className="section">
      <div className="site-shell">
        <div className="section-header">
          <span className="section-kicker sr">Processo</span>
          <h2 className="section-title sr">
            Como <em>funciona</em>
          </h2>
          <p className="section-copy sr">Simples, direto e sem enrolação.</p>
        </div>

        <div className="process__grid">
          {processSteps.map((step, index) => {
            const Visual = stepVisuals[index];
            return (
              <article key={step.number} className="process-card sr">
                <div className="process-card__visual">
                  <Visual />
                </div>
                <div className="process-card__body">
                  <span className="process-card__number">{step.number}</span>
                  <h3 className="process-card__title">{step.title}</h3>
                  <p className="process-card__description">{step.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
