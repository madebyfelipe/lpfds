import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { alternatesDe } from "@/lib/i18n";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

// /en/website-process — English version of /cases. Same rule as PT: the studio's
// creative process can be told as narrative, but NO testimonial, metric, result
// or invented real client. The sample site is illustrative and labeled fictional.

const title = "How We Build a Therapist Website, Start to Launch | Made by Felipe";
const description =
  "How Made by Felipe builds a therapist's practice website: discovery and research, brand strategy, design, development, launch and support. Illustrative example.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesDe("/cases", "en"),
  openGraph: {
    title,
    description,
    url: "/en/website-process",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "en_US",
    alternateLocale: ["pt_BR"],
    type: "website"
  }
};

const etapas = [
  {
    num: "01",
    title: "Discovery and research",
    copy: "An online interview and immersion, in English with Felipe, to understand how your practice really works, followed by research into your niche, your clients, the other practices in your area and the words people use when they search for help."
  },
  {
    num: "02",
    title: "Brand strategy",
    copy: "The six areas of the PSIQUE method become positioning: who your practice is for, what sets it apart and how it speaks. It's approved before any design work."
  },
  {
    num: "03",
    title: "Design",
    copy: "Your visual identity and brand voice applied to the site: a structure shaped by the questions your clients ask, copy written with professional ethics guidelines in mind, readable contrast and images that never expose clients."
  },
  {
    num: "04",
    title: "Development",
    copy: "The site takes shape on desktop and mobile, with technical SEO from the first version: unique titles and descriptions, structured data, image alt text and a sitemap."
  },
  {
    num: "05",
    title: "“Your new site is here”",
    copy: "Launch is a moment, not a link dropped in an email: we walk you through the site page by page, show what each decision solves and hand over your brand guide."
  },
  {
    num: "06",
    title: "Support",
    copy: "After launch, we handle the first adjustments and show you how to keep your site and brand consistent across your other channels."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${SITE_URL}/en/website-process`,
  inLanguage: "en",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` }
};

export default function WebsiteProcessEn() {
  return (
    <main id="conteudo">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="inst-hero">
        <p className="inst-kicker inst-kicker--tight">Websites</p>
        <h1 className="inst-hero__title">
          A therapist&apos;s website, <span className="inst-hero__accent">from zero to launch</span>.
        </h1>
        <p className="inst-hero__lead">
          What we deliver and the creative process behind it: research before design, brand before layout, and a
          launch designed to feel like a moment.
        </p>
      </header>

      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">The finished site</p>
        <div className="inst-case">
          <figure className="inst-case__figure">
            <Image
              src="/cases/exemplo-site-para-psicologa-dados-ficticios.jpg"
              alt="Sample website for a psychologist on a laptop and a phone, with a warm headline, a menu with specialties and approach, and a booking button"
              width={960}
              height={880}
              sizes="(max-width: 900px) 100vw, 560px"
              className="inst-case__img"
            />
            <figcaption className="inst-blog__caption">
              Sample with fictional details, shown in Portuguese. It does not represent a real client.
            </figcaption>
          </figure>
          <div className="inst-case__copy">
            <h2 className="inst-case__title">Practice web page</h2>
            <p>
              One page per practice, built from your positioning and brand identity. The sample shows the kind of
              deliverable:
            </p>
            <ul className="inst-case__list">
              <li>A headline that says who your services are for</li>
              <li>A menu with specialties, approach, about and FAQ</li>
              <li>Your name and credentials clearly shown</li>
              <li>A booking button and a direct way to get in touch</li>
              <li>A mobile version designed alongside, not adapted afterwards</li>
            </ul>
            <p className="inst-case__note">
              Real client case studies appear here only with each clinician&apos;s written permission.
            </p>
          </div>
        </div>
      </section>

      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">The creative process</p>
          <p className="inst-method__intro">Six stages, from the first conversation to support after launch.</p>
          <ol className="inst-proc__rows inst-case__steps">
            {etapas.map((e) => (
              <li key={e.num} className="inst-proc__row">
                <span className="inst-proc__num">{e.num}</span>
                <h3 className="inst-proc__step">{e.title}</h3>
                <p className="inst-proc__copy">{e.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="inst-section">
        <p className="inst-kicker inst-kicker--tight">Next steps</p>
        <p className="inst-contact__line">
          The full brand method is on{" "}
          <Link href="/en/method" className="inst-link">
            the PSIQUE method page
          </Link>
          . To get a quote for your practice,{" "}
          <Link href="/en/contact" className="inst-link">
            get in touch
          </Link>
          .
        </p>
        <ScheduleLink className="inst-hero__cta">Book a 15-minute call →</ScheduleLink>
      </section>
    </main>
  );
}
