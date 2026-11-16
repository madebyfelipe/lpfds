import type { Metadata } from "next";
import { HomeFaq } from "@/components/institucional/home/HomeFaq";
import { HomeMotion } from "@/components/institucional/home/HomeMotion";
import { LpPreviewForm } from "@/components/institucional/lp/LpPreviewForm";
import { SITE_URL } from "@/lib/site";
import "../../../home.css";
import "./lp-en.css";

/**
 * /en/lp — LP da oferta em inglês (prévia grátis da home + site com preço único).
 * Roda dentro do shell de /en: mesmo menu, cursor, rodapé, tokens e movimento da home.
 * Exceção de preço (Felipe, 15/11/2026): US$ 499 / US$ 1.499 só aqui; /en segue sem preço.
 * Sem depoimento, cliente ou número fora destes valores. noindex, como /lp/marca e /lp/site.
 */

const title = "See your therapy website before we talk price | Made by Felipe";
const description =
  "A free preview of your homepage, made from what is already public about your practice. Then a one-page site for $499 or a full site for $1,499. Paid once, no monthly fee.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${SITE_URL}/en/lp` },
  robots: { index: false, follow: true },
  openGraph: { title, description, url: "/en/lp", siteName: "Made by Felipe", locale: "en_US", type: "website" }
};

const motionFlag = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.mhMotion=""}catch(e){}`;

const steps = [
  { who: "You", text: "Here's the link to my practice." },
  { who: "Made by Felipe", text: "Here's a free preview of your homepage, made from what's already public about your practice. No cost discussed yet." },
  { who: "You", text: "I like it. I'll go with the one-page site. Or the full one." },
  { who: "Made by Felipe", text: "We build it and send it to you. It goes live once you approve it in writing." }
];

const plans = [
  { name: "Free preview", price: "$0", note: "before any cost is discussed", body: "Your homepage, made from what is already public about your practice. See what your own website would look like.", list: [] as string[] },
  { name: "One-page website", price: "$499", note: "paid once · no monthly fee", body: "A single page that tells people who you are, how you work and how to reach you.", list: ["Copy written from what you already publish", "Nothing goes live without your written OK"] },
  { name: "Full institutional website", price: "$1,499", note: "paid once · no monthly fee", body: "A complete website with room for everything your practice wants to say.", list: ["Copy written from what you already publish", "Nothing goes live without your written OK"] }
];

const compare = [
  ["Seeing your site", "Can I see it before I pay?", "A free preview of your homepage, before any cost is discussed"],
  ["Price", "What will it cost, exactly?", "$499 or $1,499, paid once"],
  ["Monthly fee", "Is there a monthly fee?", "None"],
  ["The words on your site", "Who writes the text?", "We write them from what you already publish"],
  ["Going live and paying", "When do I approve and pay?", "Only with your written approval"]
];

const faq = [
  { q: "What is the free preview?", a: "It's a homepage for your practice, made from what is already public about it. You get to see what your own website would look like before any cost is discussed." },
  { q: "Do I have to write the text?", a: "No. We write the copy from what you already publish, so it takes very little of your time." },
  { q: "When do I pay?", a: "Only after you've seen the preview, liked it and approved in writing. It's one payment: $499 for a one-page website or $1,499 for a full institutional website. There is no monthly fee." },
  { q: "Can I say no after seeing the preview?", a: "Yes. Nothing is published or charged without your written approval." },
  { q: "What do you use to make the preview?", a: "Only what is already public about your practice." },
  { q: "What about timing, domain and hosting?", a: "We agree on those details with you in writing, before anything is charged." },
  { q: "Who are you?", a: "Made by Felipe is a small remote studio based in São Paulo, Brazil. Everything is done online, in English." }
];

export default function LpEn() {
  return (
    <main id="conteudo" className="mh lpx">
      <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      <HomeMotion />
      <div className="mcursor" data-cursor="" aria-hidden="true">
        <div className="mcursor__bubble">
          <span data-cursor-text />
        </div>
      </div>

      {/* Hero */}
      <header className="inst-hero lpx-hero">
        <p className="inst-kicker inst-kicker--tight">— Websites for therapists in private practice</p>
        <h1 className="inst-hero__title" style={{ maxWidth: "14ch" }}>
          See your website before we talk <span className="inst-hero__accent">price.</span>
        </h1>
        <p className="inst-hero__lead">
          We make a free preview of your homepage from what is already public about your practice. If you like it, we
          build the full site. You pay once, and there is no monthly fee.
        </p>
        <p className="inst-hero__note">Nothing is published or charged without your written approval.</p>
        <a href="#start" className="inst-hero__cta">See my free preview →</a>
      </header>

      {/* Statement + numbers */}
      <section className="inst-dark lpx-numbers" data-theme-section="dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— Why this exists</p>
          <p className="lpx-statement" data-highlight-text>
            You already wrote about your practice somewhere. We turn it into a website you can look at before you decide anything.
          </p>
          <dl className="lpx-stats">
            {[
              ["$0", "to see your homepage preview"],
              ["$499", "for a one-page website, paid once"],
              ["$1,499", "for a full institutional website, paid once"],
              ["$0", "monthly fee, on either plan"]
            ].map(([n, t]) => (
              <div key={n + t} className="lpx-stat">
                <dt className="lpx-stat__n">{n}</dt>
                <dd className="lpx-stat__t">{t}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="inst-section">
        <p className="inst-kicker inst-kicker--tight">— How it works</p>
        <h2 className="inst-imersao__title" style={{ maxWidth: "18ch" }}>Four messages, start to finish.</h2>
        <p className="inst-method__intro">Everything happens online, in English. You can stop at any step.</p>
        <ol className="inst-proc__rows inst-proc">
          {steps.map((s, i) => (
            <li key={s.text} className="inst-proc__row">
              <span className="inst-proc__num">0{i + 1}</span>
              <h3 className="inst-proc__step">{s.who}</h3>
              <p className="inst-proc__copy">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Plans */}
      <section id="plans" className="inst-section inst-section--rule">
        <p className="inst-kicker inst-kicker--tight">— Plans</p>
        <h2 className="inst-imersao__title" style={{ maxWidth: "18ch" }}>Two sizes. One payment.</h2>
        <p className="inst-method__intro">Both start the same way: with a free look at your own homepage.</p>
        <div className="lpx-plans">
          {plans.map((p, i) => (
            <article key={p.name} className={`lpx-plan${i === 2 ? " lpx-plan--red" : ""}`} data-cursor-hover>
              <h3 className="lpx-plan__name">{p.name}</h3>
              <p className="lpx-plan__body">{p.body}</p>
              {p.list.length > 0 && (
                <ul className="lpx-plan__list">
                  {p.list.map((l) => <li key={l}>{l}</li>)}
                </ul>
              )}
              <p className="lpx-plan__price">{p.price}</p>
              <p className="lpx-plan__note">{p.note}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Compare */}
      <section id="compare" className="inst-section inst-section--rule">
        <p className="inst-kicker inst-kicker--tight">— Compare</p>
        <h2 className="inst-imersao__title" style={{ maxWidth: "20ch" }}>Questions to ask any studio, and our answers.</h2>
        <div className="lpx-table" role="table" aria-label="Questions to ask any studio and our answers">
          <div role="row" className="lpx-row lpx-row--head">
            <span role="columnheader">Topic</span>
            <span role="columnheader">Question to ask</span>
            <span role="columnheader">Made by Felipe</span>
          </div>
          {compare.map(([topic, q, a]) => (
            <div role="row" className="lpx-row" key={topic}>
              <span role="rowheader" className="lpx-row__topic">{topic}</span>
              <span role="cell">{q}</span>
              <span role="cell" className="lpx-row__ans">{a}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mh-faq mgrid" data-theme-section="dark" aria-labelledby="faq-titulo">
        <div className="mh-faq__left">
          <div className="meyebrow" data-eyebrow>
            <span className="meyebrow__marker" aria-hidden="true" />
            <p className="meyebrow__text">Questions you might have</p>
          </div>
        </div>
        <div className="mh-faq__main">
          <h2 id="faq-titulo" className="mh-faq__heading" data-split="heading">
            Fair questions. <span className="mh-red">Plain answers.</span>
          </h2>
          <HomeFaq items={faq} />
        </div>
      </section>

      {/* Form */}
      <section id="start" className="inst-dark">
        <div className="inst-section">
          <div className="inst-imersao">
            <div>
              <p className="inst-kicker inst-kicker--inverse">— Free preview</p>
              <p className="inst-imersao__title">See your homepage first.</p>
              <p className="inst-method__intro" style={{ marginTop: 32 }}>
                Send us the link to your practice. We&apos;ll make a preview of your homepage from what&apos;s already
                public. Then you decide. We work online, in English.
              </p>
            </div>
            <LpPreviewForm />
          </div>
        </div>
      </section>
    </main>
  );
}
