import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { grupoLivesUrl, recemFormados as content, recemFormadosHref } from "@/lib/recemFormados";
import "./recem-formados.css";

export const metadata: Metadata = {
  title: content.title,
  description: content.description,
  alternates: { canonical: recemFormadosHref },
  openGraph: {
    title: content.title,
    description: content.description,
    url: recemFormadosHref,
    siteName: "Made by Felipe",
    locale: "pt_BR",
    type: "website",
    images: [{ url: content.hero.image, width: 1920, height: 1280, alt: content.hero.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.title,
    description: content.description,
    images: [content.hero.image],
  },
};

function Arrow({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}

export default function RecemFormadosPage() {
  return (
    <main id="conteudo" className="inst-graduates">
      <header className="inst-section inst-graduates__hero">
        <div className="inst-graduates__hero-copy">
          <p className="inst-kicker inst-kicker--tight">{content.hero.kicker}</p>
          <p className="inst-graduates__intro">{content.hero.intro}</p>
          <h1 className="inst-graduates__title">
            {content.hero.title}<br /><em>{content.hero.accent}</em>
          </h1>
          <p className="inst-graduates__promise">{content.hero.promise}</p>
          <p className="inst-graduates__body">{content.hero.description}</p>
          <div className="inst-graduates__actions">
            <a href="#grupo" className="inst-graduates__button">
              {content.hero.cta} <Arrow />
            </a>
            <a href="#aprendizado" className="inst-graduates__text-link">
              {content.hero.secondaryCta} <span aria-hidden="true">↓</span>
            </a>
          </div>
          {!grupoLivesUrl && <p className="inst-graduates__note">{content.hero.pending}</p>}
        </div>
        <figure className="inst-graduates__portrait">
          <div className="inst-graduates__photo">
            <Image src={content.hero.image} alt={content.hero.imageAlt} fill priority sizes="(max-width: 900px) 100vw, 42vw" />
            <span className="inst-graduates__photo-mark" aria-hidden="true"><Arrow /></span>
          </div>
          <figcaption>
            <span>{content.hero.caption}</span>
            <strong>{content.hero.frequency}</strong>
          </figcaption>
        </figure>
      </header>

      <div className="inst-red inst-graduates__subjects" aria-label="Temas das lives">
        {content.subjects.map((subject) => <span key={subject}>{subject}<Arrow /></span>)}
      </div>

      <section className="inst-section inst-graduates__split" aria-labelledby="primeiro-passo">
        <div>
          <p className="inst-kicker inst-kicker--tight">{content.problem.kicker}</p>
          <h2 id="primeiro-passo" className="inst-graduates__heading">{content.problem.title}</h2>
        </div>
        <div>
          <p className="inst-graduates__body">{content.problem.description}</p>
          <ul className="inst-graduates__questions">
            {content.problem.situations.map((question) => <li key={question}>{question}</li>)}
          </ul>
          <p className="inst-graduates__body">{content.problem.closing}</p>
        </div>
      </section>

      <section id="aprendizado" className="inst-dark" aria-labelledby="temas-titulo">
        <div className="inst-section">
          <div className="inst-graduates__section-head">
            <p className="inst-kicker inst-kicker--inverse inst-kicker--tight">{content.learning.kicker}</p>
            <h2 id="temas-titulo" className="inst-graduates__heading">{content.learning.title}</h2>
            <p className="inst-graduates__body">{content.learning.description}</p>
          </div>
          <ol className="inst-graduates__topics">
            {content.learning.topics.map((topic, index) => (
              <li key={topic.label}>
                <span className="inst-graduates__number" aria-hidden="true">0{index + 1}</span>
                <div>
                  <p className="inst-graduates__label">{topic.label}</p>
                  <h3>{topic.title}</h3>
                  <p className="inst-graduates__body">{topic.description}</p>
                </div>
                <Arrow className="inst-graduates__topic-arrow" />
              </li>
            ))}
          </ol>
          <a href="#grupo" className="inst-graduates__text-link">{content.hero.cta} <Arrow /></a>
        </div>
      </section>

      <section className="inst-section inst-graduates__autonomy" aria-labelledby="autonomia-titulo">
        <p className="inst-kicker inst-kicker--tight">{content.autonomy.kicker}</p>
        <h2 id="autonomia-titulo">{content.autonomy.title}</h2>
        <div className="inst-graduates__autonomy-copy">
          <p className="inst-graduates__body">{content.autonomy.description}</p>
          <p className="inst-graduates__note">{content.autonomy.note}</p>
        </div>
      </section>

      <section className="inst-section inst-section--rule" aria-labelledby="como-funciona">
        <div className="inst-graduates__section-head">
          <p className="inst-kicker inst-kicker--tight">{content.steps.kicker}</p>
          <h2 id="como-funciona" className="inst-graduates__heading">{content.steps.title}</h2>
        </div>
        <ol className="inst-graduates__steps">
          {content.steps.items.map((step, index) => (
            <li key={step.title}>
              <span className="inst-graduates__step-number" aria-hidden="true">0{index + 1} /</span>
              <h3>{step.title}</h3>
              <p className="inst-graduates__body">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="inst-graduates__host" aria-labelledby="felipe-titulo">
        <div className="inst-section inst-graduates__split">
          <div className="inst-graduates__host-photo">
            <Image src={content.host.image} alt={content.host.imageAlt} fill sizes="(max-width: 900px) 100vw, 45vw" />
          </div>
          <div>
            <p className="inst-kicker inst-kicker--tight">{content.host.kicker}</p>
            <h2 id="felipe-titulo" className="inst-graduates__heading">{content.host.title}</h2>
            <p className="inst-graduates__body">{content.host.description}</p>
            <p className="inst-graduates__body">{content.host.closing}</p>
          </div>
        </div>
      </section>

      <section className="inst-section inst-graduates__split" aria-labelledby="duvidas-titulo">
        <div>
          <p className="inst-kicker inst-kicker--tight">{content.faq.kicker}</p>
          <h2 id="duvidas-titulo" className="inst-graduates__heading">{content.faq.title}</h2>
        </div>
        <div className="inst-graduates__faq">
          {content.faq.items.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p className="inst-graduates__body">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="grupo" className="inst-red inst-graduates__join" aria-labelledby="grupo-titulo" tabIndex={-1}>
        <div className="inst-section inst-graduates__split">
          <div>
            <p className="inst-kicker inst-kicker--on-red inst-kicker--tight">{content.join.kicker}</p>
            <h2 id="grupo-titulo" className="inst-graduates__heading">{content.join.title}</h2>
            <p className="inst-graduates__body">{content.join.description}</p>
          </div>
          <div className="inst-graduates__invite">
            <Arrow className="inst-graduates__invite-arrow" />
            {grupoLivesUrl ? (
              <a href={grupoLivesUrl} className="inst-graduates__button inst-graduates__button--on-red">{content.join.cta} <Arrow /></a>
            ) : (
              <>
                <h3>{content.join.pendingTitle}</h3>
                <p id="grupo-aviso">{content.join.pendingDescription}</p>
                <button type="button" className="inst-graduates__button inst-graduates__button--on-red" disabled aria-describedby="grupo-aviso">{content.join.pendingButton}</button>
              </>
            )}
            <Link href="/hub" className="inst-graduates__back">{content.join.back} <Arrow /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
