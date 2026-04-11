import { FloatingProof } from "@/components/FloatingProof";
import { MotionLink } from "@/components/MotionLink";
import { SplineBackground } from "@/components/SplineBackground";
import { VideoPlayer } from "@/components/VideoPlayer";
import { floatingProofs } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero">
      <SplineBackground />

      <div className="site-shell hero__shell">
        <div className="hero__layout">
          <div className="hero__content">
            <p className="hero__eyebrow sr">Branding + Social Media Estrategico</p>

            <h1 className="hero__title">
              <span className="hero__titleLine">Posicionamento</span>
              <span className="hero__titleLine hero__titleLine--combo">
                <span>que</span>
                <span className="hero__titleAccent">lota agenda.</span>
              </span>
            </h1>

            <p className="hero__text sr">
              Identidade visual + conteudo estrategico pra profissionais e escritorios que querem
              ser percebidos a altura do que entregam.
            </p>

            <div className="hero__actions sr">
              <MotionLink
                href="https://cal.com/madebyfelipe/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="button button--primary hero__buttonPrimary"
              >
                Agendar conversa gratuita
                <span className="hero__buttonIcon">{"->"}</span>
              </MotionLink>
              <MotionLink href="#planos" className="button button--ghost">
                Ver planos
              </MotionLink>
            </div>

            <div
              className="hero__meta sr"
              aria-label="15 minutos, sem compromisso e personalizado para o seu negocio"
            >
              <span>15 min</span>
              <span>Sem compromisso</span>
              <span>Personalizado pro seu negocio</span>
            </div>
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
