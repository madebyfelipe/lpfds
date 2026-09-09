import type { Metadata } from "next";
import Image from "next/image";
import { WebinarForm } from "@/components/institucional/WebinarForm";
import { blocos, entregas, webinar } from "@/lib/webinar";

export const metadata: Metadata = {
  title: "Webinar de conteúdo para psicólogos | Made by Felipe",
  description:
    "Webinar ao vivo, sábado 24/10 às 10h: como transformar seu perfil em agenda cheia. Criação de conteúdo para psicólogas clínicas atraírem pacientes pelo Instagram, dentro do Art. 20.",
  alternates: { canonical: "/webinar" },
  openGraph: {
    title: "Webinar de conteúdo para psicólogos | Made by Felipe",
    description:
      "Sábado, 24 de outubro, 10h. Como transformar seu perfil em agenda cheia — criação de conteúdo para psicólogas clínicas, dentro do que o Art. 20 permite.",
    url: "/webinar",
    siteName: "Made by Felipe",
    locale: "pt_BR",
    type: "website",
  },
};

export default function WebinarPage() {
  return (
    <main id="conteudo">
      <header className="inst-hero inst-hero--split">
        <div className="inst-hero__col">
          <p className="inst-kicker">— Workshop ao vivo · Gratuito</p>
          <h1 className="inst-hero__title">
            Como transformar seu perfil em{" "}
            <span className="inst-hero__accent">agenda cheia.</span>
          </h1>
          <p className="inst-hero__lead">{webinar.promessa}</p>
          <p className="inst-hero__note">
            {webinar.dataLabel} · {webinar.duracao}
          </p>
          <a href="#inscricao" className="inst-hero__cta">
            Garantir minha vaga →
          </a>
        </div>
        <div className="inst-hero__media">
          <Image
            src="/institucional/webinar/palco.jpg"
            alt="Felipe apresentando ao vivo no palco, com microfone"
            fill
            priority
            quality={90}
            sizes="(max-width: 900px) 100vw, 42vw"
            className="inst-hero__media-img"
          />
        </div>
      </header>

      {/* A tese — frase-âncora sobre a faixa vermelha */}
      <section className="inst-red">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--on-red">— A tese</p>
          <p className="inst-webinar__quote">
            A decisão do paciente acontece antes da primeira sessão. O conteúdo é o
            que ocupa esse intervalo.
          </p>
        </div>
      </section>

      {/* Desarme do Art. 20 */}
      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— Antes de tudo</p>
          <p className="inst-webinar__quote">Divulgar não é infração.</p>
          <p className="inst-webinar__body">
            A aula abre lendo o Art. 20 do Código de Ética na íntegra, alínea por
            alínea — o que ele proíbe de fato e o que ele libera. Resolvido isso,
            sobra atenção para o resto.
          </p>
          <p className="inst-hero__note">{webinar.referencias}</p>
        </div>
      </section>

      {/* A aula, bloco a bloco — só os tópicos e subtópicos */}
      <section className="inst-section">
        <p className="inst-kicker">— A aula, bloco a bloco</p>
        <div className="inst-webinar__aula">
          {blocos.map((bloco) => (
            <div key={bloco.rotulo} className="inst-webinar__bloco">
              <div className="inst-webinar__bloco-head">
                <h2 className="inst-webinar__bloco-title">{bloco.rotulo}</h2>
                <span className="inst-webinar__bloco-tempo">{bloco.duracao}</span>
              </div>
              {bloco.itens.length > 0 && (
                <ul className="inst-webinar__subitens">
                  {bloco.itens.map((item) => (
                    <li key={item.n} className="inst-webinar__subitem">
                      <span className="inst-webinar__subitem-num">{item.n}</span>
                      <span className="inst-webinar__subitem-label">{item.label}</span>
                      <span className="inst-webinar__subitem-tempo">{item.duracao}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* O que você leva */}
      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">— O que você leva</p>
        <p className="inst-method__intro">{webinar.materiais}</p>
        <ul className="inst-webinar__entregas">
          {entregas.map((item) => (
            <li key={item} className="inst-webinar__entrega">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Para quem é */}
      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">— Para quem é</p>
        <p className="inst-webinar__body">{webinar.publico}</p>
      </section>

      {/* Inscrição */}
      <section id="inscricao" className="inst-dark">
        <div className="inst-section">
          <div className="inst-imersao">
            <div>
              <p className="inst-kicker inst-kicker--inverse">— Inscrição</p>
              <p className="inst-imersao__title">Garanta sua vaga.</p>
              <p className="inst-webinar__body">
                {webinar.dataLabel} · {webinar.duracao}. A confirmação e o link de
                acesso chegam por e-mail.
              </p>
            </div>
            <WebinarForm />
          </div>
        </div>
      </section>
    </main>
  );
}
