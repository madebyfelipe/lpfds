import { processSteps } from "@/lib/data";

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
          {processSteps.map((step) => (
            <article key={step.number} className="process-card sr">
              <span className="process-card__number">{step.number}</span>
              <h3 className="process-card__title">{step.title}</h3>
              <p className="process-card__description">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
