import { FloatingProof } from "@/components/FloatingProof";
import { VideoPlayer } from "@/components/VideoPlayer";
import { floatingProofs } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero">
      <div className="site-shell">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="hero__eyebrow sr">Branding + Social Media Estratégico</p>

            <h1 className="hero__title sr">
              <span className="hero__titleLine">Posicionamento</span>
              <span className="hero__titleLine hero__titleLine--combo">
                <span>que</span>
                <span className="hero__titleAccent">lota agenda.</span>
              </span>
            </h1>

            <p className="hero__text sr">
              Identidade visual + conteúdo estratégico pra profissionais e escritórios que querem
              ser percebidos à altura do que entregam.
            </p>

            <div className="hero__actions sr">
              <a href="#agendar" className="button button--primary hero__buttonPrimary">
                Agendar conversa gratuita
                <span className="hero__buttonIcon">→</span>
              </a>
              <a href="#planos" className="button button--ghost">
                Ver planos
              </a>
            </div>

            <p className="hero__meta sr">
              15 min · Sem compromisso · Personalizado pro seu negócio
            </p>
          </div>

          <aside className="hero__aside sr-right" aria-label="Provas sociais">
            <FloatingProof
              initials={floatingProofs[1].initials}
              handle={floatingProofs[1].handle}
              quote={floatingProofs[1].quote}
              className="proof-card--top float-card"
            />
            <FloatingProof
              initials={floatingProofs[0].initials}
              handle={floatingProofs[0].handle}
              quote={floatingProofs[0].quote}
              className="proof-card--bottom float-card-delayed"
            />
          </aside>
        </div>

        <VideoPlayer />
      </div>
    </section>
  );
}
