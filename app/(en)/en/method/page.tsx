import type { Metadata } from "next";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { MetodoFoco } from "@/components/institucional/MetodoFoco";
import { alternatesDe } from "@/lib/i18n";
import { EMAIL } from "@/lib/institucional";
import { methodIntroEn, positioningEn, processEn } from "@/lib/institucional-en";
import { OG_IMAGE } from "@/lib/site";

// /en/method — English version of /metodologia. The PT page's diagrams
// (MetodologiaFlow, LinhaTempo) have Portuguese text baked into the images and
// SVG, so this page keeps the same content as text only.

const title = "The PSIQUE Brand Method for Therapy Practices | Made by Felipe";
const description =
  "How we build a therapy practice's brand: the PSIQUE method turns your practice into positioning, visual identity and brand voice — eight steps, two stages, delivered within 30 days.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesDe("/metodologia", "en"),
  openGraph: {
    title,
    description,
    url: "/en/method",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "article"
  }
};

export default function MethodEn() {
  return (
    <main id="conteudo">
      <header className="inst-hero">
        <p className="inst-kicker inst-kicker--tight">The method</p>
        <h1 className="inst-hero__title">
          The <span className="inst-hero__accent">PSIQUE</span> method.
        </h1>
        <p className="inst-hero__lead">{methodIntroEn}</p>
      </header>

      <section className="inst-section inst-section--rule inst-section--flush-top">
        <p className="inst-kicker">How it works</p>
        <p className="inst-method__intro">
          Your positioning comes from the overlap of six areas. From it comes your identity — visual and verbal — and,
          finally, every touchpoint where your brand shows up.
        </p>
      </section>

      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">Positioning</p>
          <p className="inst-method__intro">
            Positioning is a translation of six areas. Explored together, they reveal what only exists in your practice.
          </p>
          <MetodoFoco
            titulo="h2"
            itens={positioningEn.map((a) => ({ chave: a.letter, titulo: a.title, texto: a.copy }))}
          />
        </div>
      </section>

      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">The process</p>
        <p className="inst-diagram__caption">
          Two stages — strategy and identity — broken into four phases: gathering, exploring, creating and defining.
          The immersion is two online sessions, in English, with Felipe. Everything delivered within 30 days.
        </p>
        <div className="inst-proc">
          {processEn.map((etapa) => (
            <div key={etapa.etapa} className="inst-proc__etapa">
              <div className="inst-proc__head">
                <h2 className="inst-proc__title">{etapa.etapa}</h2>
                <span className="inst-proc__tag">{etapa.tag}</span>
              </div>
              <ol className="inst-proc__rows">
                {etapa.steps.map((step) => (
                  <li key={step.num} className="inst-proc__row">
                    <span className="inst-proc__num">{step.num}</span>
                    <h3 className="inst-proc__step">{step.title}</h3>
                    <p className="inst-proc__copy">{step.copy}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
        <p className="inst-contact__line">
          See how this turns into a website in{" "}
          <Link href="/en/website-process" className="inst-link">
            how we build a therapist website
          </Link>
          .
        </p>
        <ScheduleLink className="inst-hero__cta">Book a 15-minute call →</ScheduleLink>
      </section>

      <section className="inst-section" style={{ paddingBlock: "96px" }}>
        <p className="inst-kicker inst-kicker--tight">Contact</p>
        <p className="inst-contact__line">
          Projects and partnerships:{" "}
          <a href={`mailto:${EMAIL}`} className="inst-link">
            {EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}
