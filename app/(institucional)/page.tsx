import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { HomeFaq } from "@/components/institucional/home/HomeFaq";
import { HomeMotion } from "@/components/institucional/home/HomeMotion";
import { HomeSlider } from "@/components/institucional/home/HomeSlider";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { deliverables, depoimentos, positioning, process } from "@/lib/institucional";
import { OG_IMAGE, SITE_URL } from "@/lib/site";
import "../home.css";

const pad = (n: number) => String(n).padStart(2, "0");
const H = "/institucional/home";

// Os oito passos de `process` agrupados nos três da jornada. O texto do 3º é o
// do passo 08, palavra por palavra.
const passo = (num: string) =>
  process.flatMap((e) => e.steps).find((s) => s.num === num)!.copy;
const jornada = [
  {
    titulo: "Investigamos o seu consultório",
    texto:
      "Entrevista individual e dois dias de imersão guiada, em que as seis áreas do método — Prática, Sujeito, Inquietação, Qualidade, Universo e Estória — viram estratégia, documentada e aprovada com você antes de seguir.",
    foto: `${H}/passo-1-v2.jpg`,
    alt: "Parede coberta de post-its coloridos com anotações de um workshop de estratégia"
  },
  {
    titulo: "A estratégia vira identidade",
    texto:
      "A plataforma sintetiza a estratégia. Dela saem a identidade verbal — o discurso do consultório — e a identidade visual: cores, grafismos e tipografia.",
    foto: `${H}/passo-2-v2.jpg`,
    alt: "Caderno com esboços de símbolos e um lápis sobre o teclado de um notebook"
  },
  {
    titulo: "A marca vai para o ar",
    texto: passo("08"),
    foto: `${H}/passo-3-v2.jpg`,
    alt: "Mão com caneta desenhando numa mesa digitalizadora diante do monitor"
  }
];

// Uma imagem por entrega, na mesma ordem de `deliverables`.
const fotosEntregas: Record<string, { src: string; alt: string }> = {
  Posicionamento: { src: `${H}/servico-posicionamento-v2.jpg`, alt: "Parede de post-its com anotações de posicionamento" },
  "Identidade Visual": { src: `${H}/servico-identidade-visual.jpg`, alt: "Leque de amostras de cor em tons de vermelho" },
  "Identidade Verbal": { src: `${H}/servico-identidade-verbal.jpg`, alt: "Tipos móveis de metal com letras e números" },
  "Brand Guide": { src: `${H}/servico-brand-guide-v2.jpg`, alt: "Caderno com esboços de símbolos ao lado do teclado" },
  "Página Profissional": { src: `${H}/servico-pagina-v2.jpg`, alt: "Notebook com um logotipo aberto no editor e o esboço no caderno" },
  "Papelaria Clínica": { src: `${H}/servico-papelaria.jpg`, alt: "Cartões, envelopes e papéis timbrados em branco" },
  "Direção de Arte": { src: `${H}/servico-direcao-v2.jpg`, alt: "Câmera, lentes e notebook sobre a mesa de um set de fotografia" }
};

// Fotos de banco (Freepik) que se revezam atrás da tese, a cada 800ms.
const fotosTese = [1, 2, 3, 4, 5].map((n) => `${H}/gap-${n}.jpg`);

const depoSlides = depoimentos.map((d) => ({
  message: d.texto,
  name: d.titulo,
  role: d.cidade,
  detail: "(Depoimento de cliente do estúdio)",
  mark: "Ps"
}));

const areaSlides = positioning.map((p, i) => ({
  message: p.copy,
  name: p.title,
  role: `Área ${pad(i + 1)} de ${pad(positioning.length)} do método PSIQUE`,
  detail: "(O posicionamento nasce destas seis áreas)",
  mark: p.letter
}));

// FAQ só com fatos já aprovados no site (oferta, método, entregas, artigo 20,
// preço fora do site, agenda). Não acrescentar resposta com dado novo sem o
// Felipe confirmar.
const faq = [
  {
    q: "Quanto tempo leva o projeto?",
    a: "Dois dias de imersão e 45 dias até a marca estar no ar. O posicionamento é documentado e aprovado com você antes de qualquer peça visual."
  },
  {
    q: "Como são os dois dias de imersão?",
    a: "Um workshop guiado, que vem depois de uma entrevista individual com você — e com quem mais atua no consultório. Nos dois dias, as seis áreas do método PSIQUE viram estratégia."
  },
  {
    q: "O que eu recebo no fim?",
    a: `${deliverables.join(", ").replace(/, ([^,]*)$/, " e $1")}, reunidos no guia da marca.`
  },
  {
    q: "A marca respeita o Código de Ética do psicólogo?",
    a: "Sim. Tudo é feito dentro do artigo 20 do Código de Ética Profissional do Psicólogo: sem promessa de resultado, sem preço como chamariz e com nome completo, título e CRP na divulgação."
  },
  {
    q: "Quantos projetos o estúdio pega por vez?",
    a: "Três por trimestre. A disponibilidade da próxima imersão é confirmada no contato inicial."
  },
  {
    q: "Quanto custa?",
    a: "O preço não fica no site. Ele é conversado na chamada de 15 minutos."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

// Title/description da home vêm do copy aprovado e sobrescrevem os do
// layout raiz, que seguem servindo /hub, /contato e /portfolio.
export const metadata: Metadata = {
  title: "Marca para consultório de psicologia em 45 dias | Made by Felipe",
  description:
    "Construa a marca do seu consultório em dois dias de imersão. Posicionamento, identidade visual e verbal no ar em 45 dias, dentro do artigo 20 do Código de Ética. Estúdio de branding em Sorocaba (SP).",
  alternates: { canonical: "/" },
  keywords: [
    "marca para psicólogo",
    "branding para psicólogo",
    "identidade visual para consultório",
    "marca para consultório de psicologia",
    "construção de marca",
    "Sorocaba",
    "São Paulo"
  ],
  openGraph: {
    title: "Marca para consultório de psicologia em 45 dias | Made by Felipe",
    description:
      "Dois dias de imersão. Posicionamento, identidade visual e verbal no ar em 45 dias, dentro do artigo 20 do Código de Ética.",
    url: "/",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "website"
  }
};

// Liga o estado inicial das animações antes da primeira pintura (sem isso o
// hero aparece pronto e some para animar). Movimento reduzido não liga nada.
const motionFlag = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.mhMotion=""}catch(e){}`;

function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`meyebrow ${className}`} data-eyebrow>
      <span className="meyebrow__marker" aria-hidden="true" />
      <p className="meyebrow__text">{children}</p>
    </div>
  );
}

export default function Home() {
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
            (Estúdio de marca para consultórios de psicologia)
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
              Dois dias com você. Posicionamento, identidade visual e verbal no ar em 45 dias, dentro do artigo 20
              do Código de Ética Profissional do Psicólogo.
            </p>
            <div className="mh-hero__btn">
              <ScheduleLink className="mbtn mbtn--secondary">
                <MButtonInner>Conversar por 15 minutos</MButtonInner>
              </ScheduleLink>
            </div>
          </div>
          <div className="mh-hero__aside" data-animate>
            <h1 className="mh-hero__title" data-hero-p data-delay="0">
              Construa a marca do seu consultório em <span className="mh-red">dois dias de imersão</span>.
            </h1>
          </div>
          <div className="mh-hero__visuals" data-animate>
            <div className="mh-hero__items">
              <div className="mh-hero__item">
                <Image
                  src={`${H}/hero-1.jpg`}
                  alt="Mesa de estúdio de design com caderno aberto, amostras de cor e pincéis"
                  fill
                  priority
                  sizes="(max-width: 991px) 100vw, 64vw"
                  data-translate
                />
              </div>
              <div className="mh-hero__item">
                <Image
                  src={`${H}/hero-2.jpg`}
                  alt="Leque de amostras de cor aberto sobre papel branco"
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
                  <p className="mh-pop__p">Dois dias de imersão guiada: as seis áreas do método PSIQUE viram estratégia.</p>
                  <p className="mh-pop__meta mmono">Método PSIQUE • 2 dias</p>
                </div>
                <button type="button" className="mh-pop__trigger">
                  <span className="sr-only">Mostrar: dois dias de imersão guiada</span>
                </button>
                <div className="mh-pop__shade" aria-hidden="true" />
              </div>
              <div className="mh-pop">
                <div className="mh-pop__fill" aria-hidden="true" />
                <div className="mh-pop__cover mh-pop__cover--red" aria-hidden="true">
                  <span>45</span>
                </div>
                <div className="mh-pop__content">
                  <p className="mh-pop__p">Posicionamento, identidade visual e verbal no ar em 45 dias.</p>
                  <p className="mh-pop__meta mmono">Entrega • 45 dias</p>
                </div>
                <button type="button" className="mh-pop__trigger">
                  <span className="sr-only">Mostrar: a marca no ar em 45 dias</span>
                </button>
                <div className="mh-pop__shade" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Manifesto + depoimentos (card empilhado) ----------------- */}
      <section className="mh-problems" data-theme-section="dark" data-stack>
        <div className="mh-problems__header">
          <div className="mh-problems__stats">
            <HomeSlider items={depoSlides} label="Depoimentos de clientes" />
          </div>
          <div className="mh-problems__top">
            <h2 className="mh-problems__heading" data-highlight-text>
              Made by Felipe constrói marca a partir da leitura do negócio. Receita, carteira, valor de sessão e
              ocupação de agenda entram na mesa antes de qualquer decisão visual.
              <br />
              <br />
              O foco em consultório de psicologia veio da mesma constatação repetida na região: profissionais com
              formação longa e uma presença que comunica muito abaixo do próprio preparo.
            </h2>
          </div>
        </div>
        <div className="mh-problems__overlay" data-stack-overlay aria-hidden="true" />
      </section>

      {/* ---- Tese: "Branding é tradução" ------------------------------ */}
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
              Branding é tradução
            </h2>
            <div className="mh-gap__content" aria-hidden="true">
              <div className="mh-gap__side is-left">
                <span className="mh-gap__word is-left">Branding é</span>
              </div>
              <div className="mh-gap__side is-right">
                <span className="mh-gap__word is-right">tradução</span>
              </div>
            </div>
            <p className="mh-gap__p">
              A marca do seu consultório não é inventada — ela é traduzida de seis áreas que a gente investiga até
              encontrar o que só existe em você.
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

      {/* ---- Entregas -------------------------------------------------- */}
      {/* id="servicos": âncora de Entregas, usada por links externos e pelo /hub. */}
      <section id="servicos" className="mh-services" data-theme-section="dark">
        <div className="mh-services__header">
          <div className="mh-services__stats">
            <HomeSlider items={areaSlides} label="As seis áreas do método PSIQUE" />
          </div>
          <div className="mh-services__top">
            <Eyebrow>O que entregamos</Eyebrow>
            <div className="mh-services__content">
              <ul className="mh-services__list">
                {deliverables.map((item, i) => (
                  <li key={item} className="mh-services__item" data-content-trigger data-active={i === 0 || undefined}>
                    <h3 className="mh-services__heading">{item}</h3>
                  </li>
                ))}
              </ul>
              <div className="mh-services__img-wrap" aria-hidden="true">
                <div className="mh-services__img-box">
                  {deliverables.map((item) => (
                    <Image
                      key={item}
                      src={fotosEntregas[item].src}
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

      {/* ---- Método PSIQUE -------------------------------------------- */}
      {/* id="processo": o card "Como trabalho" do /hub aponta para /#processo. */}
      <section id="processo" className="mh-process" data-theme-section="dark" aria-labelledby="metodo">
        <h2 id="metodo" className="mh-process__heading" data-split="heading">
          Método <span className="mh-red">PSIQUE</span>
        </h2>
        <ol className="mh-process__list">
          {jornada.map((step, i) => (
            <li key={step.titulo} className="mh-process__item">
              <div className="mh-process__left">
                <p className="mh-process__index mmono">
                  <span>Passo</span>
                  <span className="mh-process__dot" aria-hidden="true" />
                  <span>{pad(i + 1)}</span>
                </p>
                <div className="mh-process__inner">
                  <h3 className="mh-process__title">{step.titulo}</h3>
                  <p className="mh-process__p">{step.texto}</p>
                </div>
              </div>
              <Link
                href="/metodologia"
                className="mh-process__media"
                data-cursor-hover
                data-cursor-label={`Ver o passo ${pad(i + 1)} no método ↗`}
                aria-label={`${step.titulo}: ver no método completo`}
              >
                <Image src={step.foto} alt={step.alt} fill sizes="(max-width: 767px) 100vw, 48vw" />
                <span className="mh-process__cta mmono" aria-hidden="true">
                  Ver o passo {pad(i + 1)} no método ↗
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Perguntas frequentes ------------------------------------- */}
      <section className="mh-faq mgrid" data-theme-section="dark" aria-labelledby="faq-titulo">
        <div className="mh-faq__left">
          <Eyebrow>Perguntas frequentes</Eyebrow>
        </div>
        <div className="mh-faq__main">
          <h2 id="faq-titulo" className="mh-faq__heading" data-split="heading">
            O que considerar antes de <span className="mh-red">começar.</span>
          </h2>
          <HomeFaq items={faq} />
        </div>
        <div className="mh-faq__content">
          <Image
            src="/institucional/felipe-avatar.jpg"
            alt="Felipe, estrategista de marca da Made by Felipe"
            width={140}
            height={140}
            className="mh-faq__headshot"
          />
          <p className="mh-faq__p">Quer saber se faz sentido para o seu consultório?</p>
          <ScheduleLink className="mbtn">
            <MButtonInner>Conversar com o Felipe</MButtonInner>
          </ScheduleLink>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </section>

      {/* ---- Chamada final -------------------------------------------- */}
      <section className="mh-cta" aria-labelledby="final">
        <div className="mh-cta__clip">
          <div className="mh-cta__contain">
            <div className="mh-cta__header">
              <h2 id="final" className="sr-only">
                Vamos traduzir o seu consultório em uma marca
              </h2>
              <div className="mh-cta__lines" aria-hidden="true">
                <span className="mh-cta__line">Vamos traduzir</span>
                <span className="mh-cta__line is-2">o seu consultório</span>
                <span className="mh-cta__line is-3">em uma</span>
                <span className="mh-cta__slide">
                  <span className="mh-cta__line is-4 mh-red">→</span>
                  <span className="mh-cta__line is-4 mh-red">marca</span>
                </span>
              </div>
              <ScheduleLink className="mbtn mbtn--large">
                <MButtonInner>Conversar por 15 minutos</MButtonInner>
              </ScheduleLink>
            </div>
            <figure className="mh-cta__proof">
              <blockquote className="mh-cta__quote">“O que mudou não foi a aparência, foi a conversa inicial.”</blockquote>
              <figcaption className="mh-cta__who mmono">— Psicóloga, Itu</figcaption>
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
