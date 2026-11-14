import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { HomeFaq } from "@/components/institucional/home/HomeFaq";
import { HomeMotion } from "@/components/institucional/home/HomeMotion";
import { HomeSlider } from "@/components/institucional/home/HomeSlider";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { alternatesDe } from "@/lib/i18n";
import { deliverables } from "@/lib/institucional";
import { deliverablesEn, depoimentosEn, positioningEn, processEn } from "@/lib/institucional-en";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
import "../../home.css";

/**
 * Home in English (/en) — same layout and motion as the PT home
 * (app/(institucional)/page.tsx), copy adapted for US therapists in private
 * practice. Keep the two in sync when the structure changes.
 */

const pad = (n: number) => String(n).padStart(2, "0");
const H = "/institucional/home";

const passo = (num: string) => processEn.flatMap((e) => e.steps).find((s) => s.num === num)!.copy;
const jornada = [
  {
    titulo: "We study your practice",
    texto:
      "A one-on-one interview and two days of guided immersion, where the method's six areas — Practice, Subject, Inner need, Quality, Universe and Ethos — become strategy, documented and approved with you before we move on.",
    foto: `${H}/passo-1-v2.jpg`,
    alt: "Wall covered in colorful sticky notes from a strategy workshop"
  },
  {
    titulo: "Strategy becomes identity",
    texto:
      "The brand platform distills the strategy. From it come your brand voice — how your practice speaks — and your visual identity: colors, graphic elements and typography.",
    foto: `${H}/passo-2-v2.jpg`,
    alt: "Notebook with logo sketches and a pencil resting on a laptop keyboard"
  },
  {
    titulo: "Your brand goes live",
    texto: passo("08"),
    foto: `${H}/passo-3-v2.jpg`,
    alt: "Hand drawing with a stylus on a graphics tablet in front of a monitor"
  }
];

// One photo per deliverable, matched by index with the PT list (same images).
const fotosEntregas = [
  { src: `${H}/servico-posicionamento-v2.jpg` },
  { src: `${H}/servico-identidade-visual.jpg` },
  { src: `${H}/servico-identidade-verbal-v2.jpg` },
  { src: `${H}/servico-brand-guide-v2.jpg` },
  { src: `${H}/servico-pagina-v2.jpg` },
  { src: `${H}/servico-papelaria.jpg` },
  { src: `${H}/servico-direcao-v2.jpg` }
];
if (fotosEntregas.length !== deliverables.length || deliverablesEn.length !== deliverables.length) {
  throw new Error("[en] deliverablesEn must match lib/institucional.ts deliverables");
}

const fotosTese = [1, 2, 3, 4, 5].map((n) => `${H}/gap-${n}.jpg`);

const depoSlides = depoimentosEn.map((d) => ({
  message: d.texto,
  name: d.titulo,
  role: d.cidade,
  detail: "(Studio client testimonial, translated from Portuguese)",
  mark: "Ps"
}));

const areaSlides = positioningEn.map((p, i) => ({
  message: p.copy,
  name: p.title,
  role: `Area ${pad(i + 1)} of ${pad(positioningEn.length)} in the PSIQUE method`,
  detail: "(Your positioning grows out of these six areas)",
  mark: p.letter
}));

const sliderEn = { carrossel: "carousel", anterior: "Previous", proximo: "Next" };

const faq = [
  {
    q: "How long does the project take?",
    a: "Two days of immersion and 45 days until your brand is live. Your positioning is documented and approved with you before any visual work begins."
  },
  {
    q: "What happens during the two-day immersion?",
    a: "A guided workshop that follows a one-on-one interview with you — and with anyone else who works in your practice. Over the two days, the six areas of the PSIQUE method become strategy."
  },
  {
    q: "What do I get at the end?",
    a: `${deliverablesEn.join(", ").replace(/, ([^,]*)$/, " and $1")}, all brought together in your brand guide.`
  },
  {
    q: "Is the brand built with professional ethics in mind?",
    a: "Yes. Everything is built with professional ethics guidelines in mind: no promised outcomes, no pricing used as bait, and your name and credentials clearly shown. The rules of your own licensing board still apply, and you have the final say on what goes out."
  },
  {
    q: "How many projects does the studio take on at a time?",
    a: "Three per quarter. Availability for the next immersion is confirmed when we first talk."
  },
  {
    q: "How much does it cost?",
    a: "Pricing isn't listed on the site. Book a 15-minute call or write to us and we'll send you a quote."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/en#faq`,
  inLanguage: "en",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

const title = "Brand Studio for Therapists in Private Practice | Made by Felipe";
const description =
  "Build your therapy practice's brand in a two-day immersion. Positioning, visual identity and brand voice, live in 45 days. Book a 15-minute call to get a quote.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesDe("/", "en"),
  keywords: [
    "branding for therapists",
    "therapist brand identity",
    "private practice branding",
    "therapy practice logo",
    "brand strategy for therapists"
  ],
  openGraph: {
    title,
    description,
    url: "/en",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website"
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE] }
};

const motionFlag = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.mhMotion=""}catch(e){}`;

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`meyebrow ${className}`} data-eyebrow>
      <span className="meyebrow__marker" aria-hidden="true" />
      <p className="meyebrow__text">{children}</p>
    </div>
  );
}

export default function HomeEn() {
  return (
    <main id="conteudo" className="mh">
      <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      <HomeMotion />

      <div className="mcursor" data-cursor="" aria-hidden="true">
        <div className="mcursor__bubble">
          <span data-cursor-text />
        </div>
      </div>

      {/* ---- Hero ------------------------------------------------------ */}
      <section id="inicio" className="mh-hero" data-theme-section="light" data-scroll-container data-translate="150">
        <div className="mh-hero__deco" data-animate>
          <p data-hero-p data-delay="0.6">
            (Brand studio for therapy practices)
          </p>
        </div>
        <div className="mh-hero__container mgrid">
          <svg className="mh-hero__graphic" viewBox="0 0 400 1600" aria-hidden="true" focusable="false">
            <path d="M100 40h200l100 180-100 180H100L0 220z" />
            <path d="M100 40l200 360M300 40L100 400M0 220h400" />
            <path d="M100 620h200l100 180-100 180H100L0 800z" />
            <path d="M100 1200h200l100 180-100 180H100L0 1380z" />
            <path d="M100 1200l200 360M300 1200l-200 360" />
          </svg>
          <div className="mh-hero__left" data-animate>
            <p className="mh-hero__lead" data-hero-p data-delay="0.2">
              Two days with you. Positioning, visual identity and brand voice, live in 45 days — built with professional
              ethics guidelines in mind.
            </p>
            <div className="mh-hero__btn">
              <ScheduleLink className="mbtn mbtn--secondary">
                <MButtonInner>Book a 15-minute call</MButtonInner>
              </ScheduleLink>
            </div>
          </div>
          <div className="mh-hero__aside" data-animate>
            <h1 className="mh-hero__title" data-hero-p data-delay="0">
              Build your practice&apos;s brand in a <span className="mh-red">two-day immersion</span>.
            </h1>
          </div>
          <div className="mh-hero__visuals" data-animate>
            <div className="mh-hero__items">
              <div className="mh-hero__item">
                <Image
                  src={`${H}/hero-1.jpg`}
                  alt="Design studio desk with an open notebook, color swatches and brushes"
                  fill
                  priority
                  sizes="(max-width: 991px) 100vw, 64vw"
                  data-translate
                />
              </div>
              <div className="mh-hero__item">
                <Image
                  src={`${H}/hero-2.jpg`}
                  alt="Fan of color swatches open on white paper"
                  fill
                  sizes="(max-width: 991px) 100vw, 64vw"
                  data-translate
                />
              </div>
            </div>
            <div className="mh-hero__flash" aria-hidden="true" />
            <div className="mh-hero__pops">
              <div className="mh-pop">
                <div className="mh-pop__fill" aria-hidden="true" />
                <div className="mh-pop__cover" aria-hidden="true">
                  <svg viewBox="0 0 48 42" focusable="false">
                    <path d="M12 1h24l11 20-11 20H12L1 21z" />
                    <path d="M12 1l24 40M36 1L12 41M1 21h46" />
                  </svg>
                </div>
                <div className="mh-pop__content">
                  <p className="mh-pop__p">Two days of guided immersion: the six areas of the PSIQUE method become strategy.</p>
                  <p className="mh-pop__meta mmono">PSIQUE method • 2 days</p>
                </div>
                <button type="button" className="mh-pop__trigger">
                  <span className="sr-only">Show: two days of guided immersion</span>
                </button>
                <div className="mh-pop__shade" aria-hidden="true" />
              </div>
              <div className="mh-pop">
                <div className="mh-pop__fill" aria-hidden="true" />
                <div className="mh-pop__cover mh-pop__cover--red" aria-hidden="true">
                  <span>45</span>
                </div>
                <div className="mh-pop__content">
                  <p className="mh-pop__p">Positioning, visual identity and brand voice, live in 45 days.</p>
                  <p className="mh-pop__meta mmono">Delivery • 45 days</p>
                </div>
                <button type="button" className="mh-pop__trigger">
                  <span className="sr-only">Show: your brand live in 45 days</span>
                </button>
                <div className="mh-pop__shade" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Manifesto + testimonials --------------------------------- */}
      <section className="mh-problems" data-theme-section="dark" data-stack>
        <div className="mh-problems__header">
          <div className="mh-problems__stats">
            <HomeSlider items={depoSlides} label="Client testimonials" controles={sliderEn} />
          </div>
          <div className="mh-problems__top">
            <h2 className="mh-problems__heading" data-highlight-text>
              Made by Felipe builds brands from a close reading of the business. Revenue, caseload, session fee and how
              full your schedule is are on the table before any visual decision.
              <br />
              <br />
              The focus on therapy practices came from the same pattern, seen again and again: clinicians with years of
              training whose presence says far less than their expertise.
            </h2>
          </div>
        </div>
        <div className="mh-problems__overlay" data-stack-overlay aria-hidden="true" />
      </section>

      {/* ---- Thesis: "Branding is translation" ------------------------ */}
      <section className="mh-gap" data-theme-section="dark" data-stack aria-labelledby="tese">
        <div className="mh-gap__contain">
          <div className="mh-gap__lines" aria-hidden="true">
            <div className="mh-gap__hline">
              <span /> <span /> <span />
            </div>
            <div className="mh-gap__vlines mgrid">
              <span /> <span /> <span /> <span /> <span />
            </div>
            <div className="mh-gap__hline mh-gap__hline--bottom">
              <span /> <span /> <span />
            </div>
          </div>
          <div className="mh-gap__inner">
            <h2 id="tese" className="sr-only">
              Branding is translation
            </h2>
            <div className="mh-gap__content" aria-hidden="true">
              <div className="mh-gap__side is-left">
                <span className="mh-gap__word is-left">Branding is</span>
              </div>
              <div className="mh-gap__side is-right">
                <span className="mh-gap__word is-right">translation</span>
              </div>
            </div>
            <p className="mh-gap__p">
              Your practice&apos;s brand isn&apos;t invented — it&apos;s translated from six areas we explore until we
              find what only exists in you.
            </p>
          </div>
          <div className="mh-gap__cover" aria-hidden="true">
            <div className="mh-gap__gradient" />
            {fotosTese.map((src) => (
              <Image key={src} src={src} alt="" fill sizes="256px" className="mh-gap__img" />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Deliverables ---------------------------------------------- */}
      <section id="servicos" className="mh-services" data-theme-section="dark">
        <div className="mh-services__header">
          <div className="mh-services__stats">
            <HomeSlider items={areaSlides} label="The six areas of the PSIQUE method" controles={sliderEn} />
          </div>
          <div className="mh-services__top">
            <Eyebrow>What we deliver</Eyebrow>
            <div className="mh-services__content">
              <ul className="mh-services__list">
                {deliverablesEn.map((item, i) => (
                  <li key={item} className="mh-services__item" data-content-trigger data-active={i === 0 || undefined}>
                    <h3 className="mh-services__heading">{item}</h3>
                  </li>
                ))}
              </ul>
              <div className="mh-services__img-wrap" aria-hidden="true">
                <div className="mh-services__img-box">
                  {fotosEntregas.map((foto) => (
                    <Image
                      key={foto.src}
                      src={foto.src}
                      alt=""
                      fill
                      sizes="(max-width: 991px) 0px, 16vw"
                      className="mh-services__img"
                      data-content-image
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- PSIQUE method --------------------------------------------- */}
      <section id="processo" className="mh-process" data-theme-section="dark" aria-labelledby="metodo">
        <h2 id="metodo" className="mh-process__heading" data-split="heading">
          The <span className="mh-red">PSIQUE</span> method
        </h2>
        <ol className="mh-process__list">
          {jornada.map((step, i) => (
            <li key={step.titulo} className="mh-process__item">
              <div className="mh-process__left">
                <p className="mh-process__index mmono">
                  <span>Step</span>
                  <span className="mh-process__dot" aria-hidden="true" />
                  <span>{pad(i + 1)}</span>
                </p>
                <div className="mh-process__inner">
                  <h3 className="mh-process__title">{step.titulo}</h3>
                  <p className="mh-process__p">{step.texto}</p>
                </div>
              </div>
              <Link
                href="/en/method"
                className="mh-process__media"
                data-cursor-hover
                data-cursor-label={`See step ${pad(i + 1)} in the method ↗`}
                aria-label={`${step.titulo}: see it in the full method`}
              >
                <Image src={step.foto} alt={step.alt} fill sizes="(max-width: 767px) 100vw, 48vw" />
                <span className="mh-process__cta mmono" aria-hidden="true">
                  See step {pad(i + 1)} in the method ↗
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- FAQ ------------------------------------------------------- */}
      <section className="mh-faq mgrid" data-theme-section="dark" aria-labelledby="faq-titulo">
        <div className="mh-faq__left">
          <Eyebrow>Frequently asked questions</Eyebrow>
        </div>
        <div className="mh-faq__main">
          <h2 id="faq-titulo" className="mh-faq__heading" data-split="heading">
            What to consider before <span className="mh-red">you start.</span>
          </h2>
          <HomeFaq items={faq} />
        </div>
        <div className="mh-faq__content">
          <Image
            src="/institucional/felipe-avatar.jpg"
            alt="Felipe, brand strategist at Made by Felipe"
            width={140}
            height={140}
            className="mh-faq__headshot"
          />
          <p className="mh-faq__p">Wondering whether it&apos;s a fit for your practice?</p>
          <ScheduleLink className="mbtn">
            <MButtonInner>Talk to Felipe</MButtonInner>
          </ScheduleLink>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* ---- Final call ------------------------------------------------ */}
      <section className="mh-cta" aria-labelledby="final">
        <div className="mh-cta__clip">
          <div className="mh-cta__contain">
            <div className="mh-cta__header">
              <h2 id="final" className="sr-only">
                Let&apos;s translate your practice into a brand
              </h2>
              <div className="mh-cta__lines" aria-hidden="true">
                <span className="mh-cta__line">Let&apos;s translate</span>
                <span className="mh-cta__line is-2">your practice</span>
                <span className="mh-cta__line is-3">into a</span>
                <span className="mh-cta__slide">
                  <span className="mh-cta__line is-4 mh-red">→</span>
                  <span className="mh-cta__line is-4 mh-red">brand</span>
                </span>
              </div>
              <ScheduleLink className="mbtn mbtn--large">
                <MButtonInner>Book a 15-minute call</MButtonInner>
              </ScheduleLink>
            </div>
            <figure className="mh-cta__proof">
              <blockquote className="mh-cta__quote">“What changed wasn&apos;t the look, it was the first conversation.”</blockquote>
              <figcaption className="mh-cta__who mmono">— Psychologist, Itu, Brazil (translated from Portuguese)</figcaption>
            </figure>
          </div>
          <div className="mh-cta__cover" data-scroll-container data-translate="150" data-start="top bottom" aria-hidden="true">
            <div className="mh-cta__overlay" />
            <div className="mh-cta__media" data-translate>
              <Image src={`${H}/cta.jpg`} alt="" fill sizes="100vw" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
