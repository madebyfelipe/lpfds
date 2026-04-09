import { GlobeCanvas } from "@/components/GlobeCanvas";
import { MotionLink } from "@/components/MotionLink";
import { ScrollingTags } from "@/components/ScrollingTags";

export function FinalCTA() {
  return (
    <section id="agendar" className="cta-band">
      <div className="site-shell">
        <div className="cta-box sr">
          <GlobeCanvas />

          <div className="cta-box__header">
            <h2 className="cta-box__title">
              Pronto pra ser percebido à <em>altura do seu trabalho</em>?
            </h2>
            <p className="cta-box__copy">
              15 minutos de conversa. Vou entender seu negócio e te mostrar o caminho mais curto
              pro posicionamento que lota agenda.
            </p>

            <div className="cta-box__actions">
              <MotionLink href="#agendar" className="button button--primary">
                Agendar minha conversa gratuita →
              </MotionLink>
            </div>

            <div className="cta-box__chips">
              {["15 minutos", "Sem compromisso", "Personalizado"].map((item) => (
                <span key={item} className="chip cta-box__chip">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <ScrollingTags />
        </div>
      </div>
    </section>
  );
}
