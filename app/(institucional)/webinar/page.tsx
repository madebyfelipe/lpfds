import type { Metadata } from "next";
import { WebinarForm } from "@/components/institucional/WebinarForm";
import { bordas, entregas, partes, webinar } from "@/lib/webinar";

export const metadata: Metadata = {
  title: "Webinar de conteúdo para psicólogos | Made by Felipe",
  description:
    "Ao vivo, sábado 24/10 às 10h: monte seu sistema de conteúdo em uma manhã. O que publicar, para quem, em que ordem — para psicólogos de consultório particular.",
  alternates: { canonical: "/webinar" },
  openGraph: {
    title: "Webinar de conteúdo para psicólogos | Made by Felipe",
    description:
      "Sábado, 24 de outubro, 10h. Você sai com três editorias escolhidas e as duas primeiras semanas de publicação agendadas.",
    url: "/webinar",
    siteName: "Made by Felipe",
    locale: "pt_BR",
    type: "website",
  },
};

export default function WebinarPage() {
  return (
    <main id="conteudo">
      {/* Hero — promessa + data */}
      <header className="inst-hero">
        <p className="inst-kicker">— Webinar ao vivo · Gratuito</p>
        <h1 className="inst-hero__title">
          Monte seu <span className="inst-hero__accent">sistema de conteúdo</span> em
          uma manhã.
        </h1>
        <p className="inst-hero__lead">{webinar.promessa}</p>
        <p className="inst-hero__note">
          {webinar.dataLabel} · {webinar.duracao}
        </p>
        <a href="#inscricao" className="inst-hero__cta">
          Garantir minha vaga →
        </a>
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

      {/* A aula, bloco a bloco */}
      <section className="inst-section">
        <p className="inst-kicker">— A aula, bloco a bloco</p>
        <div className="inst-steps">
          {partes.map((parte) => (
            <div key={parte.num} className="inst-step">
              <p className="inst-step__num">
                {parte.num} · {parte.duracao}
              </p>
              <h2 className="inst-step__title">{parte.titulo}</h2>
              <p className="inst-step__copy">{parte.copy}</p>
            </div>
          ))}
        </div>
        <div className="inst-webinar__bordas">
          <p className="inst-webinar__note">{bordas.abertura}</p>
          <p className="inst-webinar__note">{bordas.perguntas}</p>
        </div>
      </section>

      {/* O que você leva */}
      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">— O que você leva</p>
        <p className="inst-method__intro">{webinar.contrato}</p>
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
