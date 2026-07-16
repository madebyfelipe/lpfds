const pillars = [
  { number: "/01", label: "quem são" },
  { number: "/02", label: "por que confiar" },
  { number: "/03", label: "por que escolher" },
];

export function Philosophy() {
  return (
    <section id="filosofia" className="philosophy-section">
      <div className="site-shell">
        <div className="philosophy__head">
          <span className="section-kicker sr">/FILOSOFIA</span>
          <h2 className="philosophy__title sr">
            Marcas não crescem porque têm um <em>logo bonito</em>.
          </h2>
          <p className="philosophy__lead sr">
            Elas crescem porque as pessoas entendem rapidamente:
          </p>
        </div>

        <div className="philosophy__grid">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="philosophy__item sr">
              <span className="philosophy__number">{pillar.number}</span>
              <span className="philosophy__label">{pillar.label}</span>
            </div>
          ))}
        </div>

        <div className="philosophy__closing sr">
          <p className="philosophy__closing-text">
            O design existe para tornar <em>isso evidente</em>.
          </p>
          <span className="philosophy__closing-tag">Boring is bad for business.®</span>
        </div>
      </div>
    </section>
  );
}
