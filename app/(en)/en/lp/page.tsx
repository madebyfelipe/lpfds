import type { Metadata } from "next";
import Image from "next/image";
import { HomeMotion } from "@/components/institucional/home/HomeMotion";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { Check, LpClock, LpLever, LpReveal, LpRuler, LpSamples, type Amostra, type Tamanho } from "@/components/institucional/lp/LpCanvas";
import { LpPreviewForm } from "@/components/institucional/lp/LpPreviewForm";
import { SITE_URL } from "@/lib/site";
import "../../../home.css";
import "./lp-en.css";

/**
 * /en/lp — LP da oferta em inglês (prévia grátis da home + site com preço único).
 * Refeita em 16/11/2026 (Felipe: "longe da minha identidade e da referência"):
 * a página é um arquivo de design aberto (ref. ohhmydesign: régua, molduras de
 * seleção, conversa, alavanca de preço), dentro do shell de /en e só com tokens.
 * Exceção de preço (Felipe, 15/11/2026): US$ 499 / US$ 1.499 só aqui.
 * Sem depoimento, cliente ou número fora destes valores. As três prévias são
 * exemplos rotulados, com foto de banco (Freepik). noindex.
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

const amostras: Amostra[] = [
  {
    id: "A",
    arquivo: "sample-a.png",
    foto: "/institucional/lp-en/sample-wooden-chair-garden.jpg",
    alt: "Sample homepage layout over a photo of a leather armchair beside a garden window",
    titulo: "Therapy for adults and couples.",
    linha: "In person and online.",
    botao: "Book a first call",
    estilo: "lado",
    tags: ["Full site", "Sample"]
  },
  {
    id: "B",
    arquivo: "your-homepage-preview.png",
    foto: "/institucional/lp-en/sample-armchair-window.jpg",
    alt: "Sample homepage layout over a photo of a wicker armchair by a bright window with sheer curtains",
    titulo: "A quiet room to think out loud.",
    linha: "Individual therapy, at your pace.",
    botao: "Get in touch",
    estilo: "base",
    tags: ["One-page", "Sample"]
  },
  {
    id: "C",
    arquivo: "sample-c.png",
    foto: "/institucional/lp-en/sample-notebook-coffee.jpg",
    alt: "Sample homepage layout over a photo of a coffee cup on notebooks next to a small plant",
    titulo: "Start with one conversation.",
    linha: "Who I am, how I work, how to reach me.",
    botao: "Say hello",
    estilo: "topo",
    tags: ["One-page", "Sample"]
  }
];

const tamanhos: [Tamanho, Tamanho] = [
  {
    id: "one",
    rotulo: "One-page website",
    preco: "499",
    texto: "A single page that tells people who you are, how you work and how to reach you."
  },
  {
    id: "full",
    rotulo: "Full website",
    preco: "1,499",
    texto: "A complete website with room for everything your practice wants to say."
  }
];

const inclui = [
  "Free homepage preview first",
  "Copy written from what you already publish",
  "Nothing goes live without your written OK",
  "One payment",
  "No monthly fee",
  "Done online, in English"
];

const conversa: { passo: string; falas: { eu?: boolean; texto: string; anexo?: boolean }[] }[] = [
  {
    passo: "01 · Send the link",
    falas: [
      { eu: true, texto: "Here's the link to my practice." },
      { texto: "Got it. We'll work from what's already public about your practice." }
    ]
  },
  {
    passo: "02 · See the preview",
    falas: [
      { texto: "Here's a free preview of your homepage. No cost discussed yet.", anexo: true },
      { eu: true, texto: "Thanks. I'll take a look." }
    ]
  },
  {
    passo: "03 · Pick a size",
    falas: [
      { eu: true, texto: "I like it. I'll go with the one-page site." },
      { texto: "One page it is. $499, paid once. No monthly fee." }
    ]
  },
  {
    passo: "04 · Approve in writing",
    falas: [
      { texto: "Your site is built. It goes live once you approve it in writing." },
      { eu: true, texto: "Approved." }
    ]
  }
];

const perguntas = [
  ["Seeing your site", "Can I see it before I pay?", "A free preview of your homepage, before any cost is discussed"],
  ["Price", "What will it cost, exactly?", "$499 or $1,499, paid once"],
  ["Monthly fee", "Is there a monthly fee?", "None"],
  ["The words", "Who writes the text?", "We write it from what you already publish"],
  ["Going live", "When do I approve and pay?", "Only with your written approval"]
];

const faq = [
  {
    tag: "the-preview",
    q: "What is the free preview?",
    a: "It's a homepage for your practice, made from what is already public about it. You get to see what your own website would look like before any cost is discussed."
  },
  {
    tag: "the-writing",
    q: "Do I have to write the text?",
    a: "We write the copy from what you already publish. You read it and approve it."
  },
  {
    tag: "the-money",
    q: "When do I pay?",
    a: "Only after you've seen the preview, liked it and approved in writing. It's one payment: $499 for a one-page website or $1,499 for a full website. There is no monthly fee."
  },
  {
    tag: "the-way-out",
    q: "Can I say no after seeing the preview?",
    a: "Yes. Nothing is published or charged without your written approval."
  },
  { tag: "the-sources", q: "What do you use to make the preview?", a: "Only what is already public about your practice." },
  {
    tag: "the-details",
    q: "What about timing, domain and hosting?",
    a: "We agree on those details with you in writing, before anything is charged."
  },
  {
    tag: "the-studio",
    q: "Who are you?",
    a: "Made by Felipe is a small remote studio based in São Paulo, Brazil. Everything is done online, in English."
  }
];

function Titulo({ id, children, nota }: { id: string; children: React.ReactNode; nota: string }) {
  return (
    <div className="lpc-head">
      <h2 id={id} className="lpc-h" data-split="heading">
        {children}
      </h2>
      <p className="lpc-note" data-lpc-in="">
        {nota}
      </p>
    </div>
  );
}

export default function LpEn() {
  return (
    <main id="conteudo" className="mh lpc">
      <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      <HomeMotion />
      <LpReveal />
      <div className="mcursor" data-cursor="" aria-hidden="true">
        <div className="mcursor__bubble">
          <span data-cursor-text />
        </div>
      </div>

      <LpRuler />

      {/* Hero */}
      <header className="lpc-hero">
        <div className="lpc-hero__in">
          <p className="lpc-chip lpc-sel" data-animate="">
            <span className="lpc-dot" aria-hidden="true" />
            Websites for therapists in private practice
          </p>
          <h1 className="lpc-hero__title" data-animate="" data-hero-p="">
            See your website{" "}
            <br />
            before we talk{" "}
            <br />
            <span className="mh-red">price.</span>
          </h1>
          <div className="lpc-hero__lead lpc-sel lpc-sel--dash" data-tag="free-preview" data-animate="">
            <p>
              We make a free preview of your homepage from what is already public about your practice. If you like it, we
              build the full site. You pay once, and there is no monthly fee.
            </p>
          </div>
          <div className="lpc-hero__cta" data-animate="">
            <a href="#start" className="mbtn lpc-btn-red" data-cursor-hover="" data-cursor-label="It's free">
              <MButtonInner>See my free preview</MButtonInner>
            </a>
            <a href="#how" className="mbtn mbtn--secondary">
              <MButtonInner>How it works</MButtonInner>
            </a>
          </div>
          <p className="lpc-hero__fine" data-animate="">
            Nothing is published or charged without your written approval.
          </p>

          <span className="lpc-ptr lpc-ptr--a" aria-hidden="true">
            <Ponteiro />
            <i>Felipe</i>
          </span>
          <span className="lpc-ptr lpc-ptr--b" aria-hidden="true">
            <Ponteiro />
            <i>You</i>
          </span>
        </div>

        <div className="lpc-hero__foot" data-animate="">
          <p>
            <b>Remote studio</b>
            São Paulo, Brazil
          </p>
          <p>
            <b>In English</b>
            Online, start to finish
          </p>
        </div>

        <LpSamples itens={amostras} />
        <p className="lpc-hero__legend">
          Sample layouts with stock photos, to show the idea. Your preview is made from your own practice.
        </p>
      </header>

      {/* O que está na mesa */}
      <section className="lpc-sec" aria-labelledby="t-table">
        <Titulo id="t-table" nota="the short version">
          What&apos;s on the <span className="mh-red">table</span>
        </Titulo>
        <div className="lpc-bento">
          <article className="lpc-card lpc-bento__say" data-lpc-in="">
            <span className="lpc-file" aria-hidden="true">
              statement.txt
            </span>
            <svg className="lpc-quote" viewBox="0 0 40 30" aria-hidden="true" focusable="false">
              <path d="M0 30V17C0 7 5 1 15 0v6c-4 1-6 4-6 8h6v16H0zm23 0V17C23 7 28 1 38 0v6c-4 1-6 4-6 8h6v16H23z" fill="currentColor" />
            </svg>
            <p className="lpc-bento__big">
              You already wrote about your practice somewhere. <span className="mh-red">We turn it into a website you can look at.</span>
            </p>
            <p className="lpc-bento__small">
              You see your own homepage first. Then you decide.
            </p>
            <p className="lpc-bento__base">
              <span>Made by Felipe, remote studio</span>
              <span>
                <span className="lpc-dot" aria-hidden="true" /> Open for previews
              </span>
            </p>
          </article>

          <article className="lpc-card lpc-card--ink lpc-bento__nums" data-lpc-in="">
            <span className="lpc-file" aria-hidden="true">
              the-numbers
            </span>
            <dl>
              {[
                ["$0", "homepage preview"],
                ["$499", "one-page website, paid once"],
                ["$1,499", "full website, paid once"],
                ["$0", "monthly fee"]
              ].map(([n, t]) => (
                <div key={n + t}>
                  <dt>{n}</dt>
                  <dd>{t}</dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="lpc-card lpc-bento__src" data-lpc-in="">
            <span className="lpc-file" aria-hidden="true">
              what-we-read
            </span>
            <p className="lpc-bento__label">Only what is already public about your practice.</p>
            <p className="lpc-bento__pills">
              <span className="lpc-pill">Your current site</span>
              <span className="lpc-pill">Your public profiles</span>
              <span className="lpc-pill">Your bio</span>
            </p>
          </article>

          <figure className="lpc-card lpc-bento__photo" data-lpc-in="">
            <Image
              src="/institucional/hero/06.jpg"
              alt="Felipe, the designer behind Made by Felipe, looking down at his work"
              fill
              sizes="(max-width: 767px) 100vw, 30vw"
            />
            <figcaption>
              <b>Felipe</b>
              designs and builds it
            </figcaption>
          </figure>

          <article className="lpc-card lpc-bento__way" data-lpc-in="">
            <span className="lpc-file" aria-hidden="true">
              how-we-work
            </span>
            <p className="lpc-bento__mid">Online, in English.</p>
            <p className="lpc-bento__small">A small remote studio based in São Paulo, Brazil.</p>
          </article>

          <figure className="lpc-card lpc-bento__desk" data-lpc-in="">
            <Image
              src="/institucional/home/hero-2.jpg"
              alt="Color swatches, a pair of glasses and a phone laid out on the studio desk"
              fill
              sizes="(max-width: 767px) 100vw, 30vw"
            />
            <figcaption className="lpc-file lpc-file--on">in-progress.jpg</figcaption>
          </figure>
        </div>
      </section>

      {/* Como funciona: a conversa */}
      <section id="how" className="lpc-sec" aria-labelledby="t-how">
        <Titulo id="t-how" nota="online, in English. stop at any step.">
          Four messages. <span className="mh-red">Start to finish.</span>
        </Titulo>
        <div className="lpc-thread">
          <div className="lpc-thread__bar">
            <span>
              <span className="lpc-dot" aria-hidden="true" /> made by felipe × your practice
            </span>
            <span className="lpc-thread__on">Example conversation</span>
          </div>
          <ol className="lpc-thread__list">
            {conversa.map((bloco) => (
              <li key={bloco.passo} className="lpc-thread__step">
                <p className="lpc-thread__rule">
                  <span>{bloco.passo}</span>
                </p>
                {bloco.falas.map((f) => (
                  <div key={f.texto} className="lpc-msg" data-lpc-in="">
                    {f.eu ? (
                      <span className="lpc-msg__av lpc-msg__av--you" aria-hidden="true">
                        Y
                      </span>
                    ) : (
                      <Image className="lpc-msg__av" src="/institucional/felipe-avatar.jpg" alt="" width={40} height={40} />
                    )}
                    <div>
                      <p className="lpc-msg__who">{f.eu ? "You" : "Made by Felipe"}</p>
                      <p className="lpc-msg__txt">{f.texto}</p>
                      {f.anexo && (
                        <figure className="lpc-msg__file">
                          <Image
                            src="/institucional/lp-en/sample-armchair-window.jpg"
                            alt="Thumbnail of a sample homepage preview, with a stock photo"
                            width={320}
                            height={200}
                          />
                          <figcaption>sample-preview.png</figcaption>
                        </figure>
                      )}
                    </div>
                  </div>
                ))}
              </li>
            ))}
          </ol>
          <p className="lpc-thread__end" data-lpc-in="">
            <Image className="lpc-msg__av" src="/institucional/felipe-avatar.jpg" alt="" width={40} height={40} />
            <span className="lpc-typing" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="sr-only">Your site goes live after your written approval.</span>
          </p>
        </div>
      </section>

      {/* Os dois tamanhos */}
      <section id="plans" className="lpc-sec" aria-labelledby="t-plans">
        <Titulo id="t-plans" nota="one payment. no monthly fee.">
          Pick your <span className="mh-red">size.</span>
        </Titulo>
        <div data-lpc-in="">
          <LpLever tamanhos={tamanhos} inclui={inclui} />
        </div>
        <p className="lpc-after">
          <a href="#start" className="mbtn lpc-btn-red">
            <MButtonInner>Start with the free preview</MButtonInner>
          </a>
          <span>Both sizes start the same way: with a free look at your own homepage.</span>
        </p>
      </section>

      {/* Perguntas para qualquer estúdio */}
      <section className="lpc-sec" aria-labelledby="t-ask">
        <Titulo id="t-ask" nota="five questions, and our answers.">
          Ask any studio <span className="mh-red">this.</span>
        </Titulo>
        <div className="lpc-win" data-lpc-in="">
          <div className="lpc-win__bar" aria-hidden="true">
            <span className="lpc-win__dots">
              <i />
              <i />
              <i />
            </span>
            <span>questions-to-ask.fig</span>
            <span>100%</span>
          </div>
          <div className="lpc-ask" role="table" aria-label="Questions to ask any studio, and our answers">
            <div className="lpc-ask__row lpc-ask__row--head" role="row">
              <span role="columnheader">Topic</span>
              <span role="columnheader">The question</span>
              <span role="columnheader" className="lpc-ask__us">
                Made by Felipe
              </span>
            </div>
            {perguntas.map(([topico, q, a]) => (
              <div className="lpc-ask__row" role="row" key={topico}>
                <span role="rowheader" className="lpc-ask__topic">
                  {topico}
                </span>
                <span role="cell" className="lpc-ask__q">
                  {q}
                </span>
                <span role="cell" className="lpc-ask__a">
                  <Check />
                  {a}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hora do estúdio */}
      <section className="lpc-sec lpc-night" aria-labelledby="t-clock">
        <div className="lpc-head">
          <h2 id="t-clock" className="lpc-h">
            It&apos;s{" "}
            <LpClock className="mh-red" />{" "}
            in São&nbsp;Paulo.
          </h2>
          <p className="lpc-note" data-lpc-in="">
            send it whenever
          </p>
        </div>
        <figure className="lpc-night__photo lpc-sel" data-tag="studio-desk.jpg" data-lpc-in="">
          <Image
            src="/institucional/home/cta.jpg"
            alt="An open blank notebook on the studio desk, with color swatches and pens around it"
            fill
            sizes="(max-width: 767px) 92vw, 520px"
          />
        </figure>
        <p className="lpc-night__txt">Leave your link now. We&apos;ll read it and reply by email.</p>
        <a href="#start" className="mbtn lpc-btn-red">
          <MButtonInner>Leave my link</MButtonInner>
        </a>
      </section>

      {/* FAQ */}
      <section className="lpc-sec" aria-labelledby="t-faq">
        <Titulo id="t-faq" nota="everything you'd ask on a call, minus the call.">
          Fair questions. <span className="mh-red">Plain answers.</span>
        </Titulo>
        <div className="lpc-faq">
          {faq.map((f, i) => (
            <details key={f.q} className="lpc-faq__item" name="lpc-faq" data-lpc-in="">
              <summary>
                <span className="lpc-file" aria-hidden="true">
                  {f.tag}.frame
                </span>
                <span className="lpc-faq__n" aria-hidden="true">
                  0{i + 1}
                </span>
                <span className="lpc-faq__q">{f.q}</span>
                <span className="lpc-faq__plus" aria-hidden="true" />
              </summary>
              <p className="lpc-faq__a">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Formulário */}
      <section id="start" className="inst-dark lpc-start" data-theme-section="dark" aria-labelledby="t-start">
        <div className="lpc-start__in">
          <div>
            <p className="lpc-file lpc-file--inverse" aria-hidden="true">
              free-preview.frame
            </p>
            <h2 id="t-start" className="lpc-h lpc-h--left" data-split="heading">
              Send the link. <span className="mh-red">See your homepage.</span>
            </h2>
            <p className="lpc-start__txt">
              Send us the link to your practice. We&apos;ll make a preview of your homepage from what&apos;s already public.
              Then you decide.
            </p>
            <ul className="lpc-start__list">
              <li>
                <Check />
                Free, before any cost is discussed
              </li>
              <li>
                <Check />
                Online, in English
              </li>
              <li>
                <Check />
                You can say no after seeing it
              </li>
            </ul>
          </div>
          <div className="lpc-start__form lpc-sel" data-tag="your-turn">
            <LpPreviewForm />
          </div>
        </div>
      </section>
    </main>
  );
}

function Ponteiro() {
  return (
    <svg viewBox="0 0 16 16" focusable="false">
      <path d="M2 1.5l11 5.2-4.7 1.4-1.6 4.9L2 1.5z" fill="currentColor" />
    </svg>
  );
}
