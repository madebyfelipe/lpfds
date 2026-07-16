import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section id="processo" className="section">
      <div className="site-shell">
        <div className="section-header">
          <span className="section-kicker sr">Processo</span>
          <h2 className="section-title sr">
            Todo projeto começa <em>antes do Figma</em>.
          </h2>
          <p className="section-copy sr">
            Não acredito em design feito por inspiração. Cada projeto segue um processo claro.
          </p>
        </div>

        <div className="process__horizontal">
          {processSteps.map((step, index) => {
            const isLast = index === processSteps.length - 1;
            return (
              <div key={step.number} style={{ display: "contents" }}>
                <article className="process-step-column sr">
                  <span className="process-step-column__number">{step.number}</span>
                  <h3 className="process-step-column__title">{step.title}</h3>
                  <p className="process-step-column__description">{step.description}</p>
                </article>
                {!isLast && (
                  <div className="process-horizontal-arrow sr" aria-hidden="true">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
