import { ScheduleLink } from "@/components/ScheduleLink";

export function FinalCTA() {
  return (
    <section id="agendar" className="cta-band cta-band--accent">
      <div className="site-shell">
        <div className="grid-2col grid-2col--align-start sr" style={{ textAlign: "left" }}>
          {/* Left Column */}
          <div>
            <h2 className="cta-box__title" style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)", lineHeight: "1.15", margin: 0 }}>
              Sua empresa já transmite o <em>valor</em> que ela realmente tem?
            </h2>
          </div>

          {/* Right Column */}
          <div>
            <p className="cta-box__copy" style={{ color: "rgba(255, 255, 255, 0.85)", fontSize: "var(--fs-body-lg)", margin: "0 0 var(--space-4)" }}>
              Se a resposta for não, provavelmente o problema não é o produto. É a forma como ele está sendo percebido.
            </p>
            <p className="cta-box__copy" style={{ color: "#fff", fontWeight: 700, margin: "0 0 var(--space-5)" }}>
              Vamos construir uma marca que comunique isso com clareza.
            </p>
            <div className="cta-box__actions" style={{ margin: 0 }}>
              <ScheduleLink className="button button--inverse">
                Vamos conversar
              </ScheduleLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
