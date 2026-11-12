import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { DepoSlider } from "@/components/institucional/DepoSlider";
import { deliverables, process, projectCover } from "@/lib/institucional";
import { projects } from "@/lib/portfolio";
import { SITE_URL } from "@/lib/site";

const pad = (n: number) => String(n).padStart(2, "0");

// Grade de marcas: os oito primeiros clientes do portfólio, na ordem dele.
const clientes = projects.slice(0, 8);

// Cases em destaque: os de marca primeiro, que é o que o consultório contrata.
const destaque = ["alves-nabuco", "rei-das-barras", "doce-afeto", "liz-helena", "estruturart"];
const cases = destaque
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter((p): p is (typeof projects)[number] => Boolean(p));

// Os oito passos de `process` agrupados nos três da jornada. O texto do 3º é o
// do passo 08, palavra por palavra.
const passo = (num: string) =>
  process.flatMap((e) => e.steps).find((s) => s.num === num)!.copy;
const jornada = [
  {
    titulo: "Investigamos o seu consultório",
    texto:
      "Entrevista individual e dois dias de imersão guiada, em que as seis áreas do método — Prática, Sujeito, Inquietação, Qualidade, Universo e Estória — viram estratégia, documentada e aprovada com você antes de seguir.",
    foto: "/institucional/hero/01.jpg",
    alt: "Reunião de trabalho em volta da mesa, com o time analisando um documento na tela",
    topo: false
  },
  {
    titulo: "A estratégia vira identidade",
    texto:
      "A plataforma sintetiza a estratégia. Dela saem a identidade verbal — o discurso do consultório — e a identidade visual: cores, grafismos e tipografia.",
    foto: "/portfolio/doce-afeto/aplicacao.jpg",
    alt: "Embalagens da Doce & Afeto com a identidade visual aplicada",
    topo: false
  },
  {
    titulo: "A marca vai para o ar",
    texto: passo("08"),
    foto: "/portfolio/alves-nabuco/pagina-inicio.png",
    alt: "Página inicial do site entregue para a Alves & Nabuco",
    topo: true
  }
];

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

export default function Home() {
  return (
    <main id="conteudo">
      {/* Hero no padrão do Monolog: superfície escura com foto desfocada e
          grão, nav por cima (InstNav fica transparente enquanto o hero está
          sob ela), texto curto centralizado e o nome da marca na largura
          inteira, encostado na base. O H1 é a headline aprovada. */}
      <header id="inicio" className="inst-dark inst-mono">
        <div className="inst-mono__bg" aria-hidden="true" />
        <div className="inst-mono__center">
          <svg
            className="inst-mono__icon"
            viewBox="0 0 48 42"
            aria-hidden="true"
            focusable="false"
          >
            {/* O hexágono das seis áreas do método PSIQUE. */}
            <path d="M12 1h24l11 20-11 20H12L1 21z" />
            <path d="M12 1l24 40M36 1L12 41M1 21h46" />
          </svg>
          <h1 className="inst-mono__title">
            Construa a marca do seu consultório em dois dias de imersão.
          </h1>
          <p className="inst-mono__lead">
            Dois dias com você. Posicionamento, identidade visual e verbal no
            ar em 45 dias.
          </p>
          <p className="inst-mono__lead">
            Dentro do artigo 20 do Código de Ética Profissional do Psicólogo.
          </p>
        </div>
        {/* Decorativo: o nome já está na nav e no H1 do documento. */}
        <p className="inst-mono__mark" aria-hidden="true">
          Made by Felipe
        </p>
      </header>

      {/* Manifesto logo abaixo do hero, como no Monolog: coluna estreita à
          esquerda (rótulo, nota e CTA) e o texto do estúdio em tipo grande à
          direita, assinado. A copy é a do bloco "O estúdio", que saiu daqui
          de baixo. */}
      <section className="inst-dark inst-manifest">
        <div className="inst-manifest__inner">
          <div className="inst-manifest__side">
            <p className="inst-dot inst-manifest__label">O estúdio</p>
            <p className="inst-manifest__note">
              Antes da imersão, 15 minutos para conversar sobre a marca do seu
              consultório.
            </p>
            <ScheduleLink className="inst-hero__cta inst-manifest__cta">
              Conversar por 15 minutos →
            </ScheduleLink>
          </div>
          <div className="inst-manifest__body">
            <p className="inst-manifest__text">
              Made by Felipe constrói marca a partir da leitura do negócio.
              Receita, carteira, valor de sessão e ocupação de agenda entram na
              mesa antes de qualquer decisão visual.
            </p>
            <p className="inst-manifest__text">
              O foco em consultório de psicologia veio da mesma constatação
              repetida na região: profissionais com formação longa e uma
              presença que comunica muito abaixo do próprio preparo.
            </p>
            <div className="inst-manifest__sign">
              <Image
                src="/institucional/felipe-avatar.jpg"
                alt=""
                width={48}
                height={48}
                className="inst-manifest__avatar"
              />
              <p className="inst-manifest__who">
                Felipe
                <span>Estrategista de marca, Made by Felipe</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marcas que passaram pelo estúdio (padrão "Clients" do Monolog): rótulo
          à esquerda e grade 4 × 2 à direita. Sem arquivos de logo, os nomes
          entram como marca tipográfica, cada um levando ao case. Fonte única:
          lib/portfolio.ts — os mesmos clientes já públicos em /projetos. */}
      <section className="inst-dark inst-clients" aria-labelledby="clientes-titulo">
        <div className="inst-clients__inner">
          <h2 id="clientes-titulo" className="inst-clients__title">
            Marcas que passaram pelo estúdio
          </h2>
          <ul className="inst-clients__grid">
            {clientes.map((p) => (
              <li key={p.slug} className="inst-clients__cell">
                <Link href={`/portfolio/${p.slug}`} className="inst-clients__link">
                  <span className="inst-clients__name">{p.client}</span>
                  <span className="inst-clients__cat">{p.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Declaração em tipo gigante com uma foto atrás do meio da frase
          ("We close that gap" do Monolog). A frase é a tese do método. */}
      <section className="inst-dark inst-thesis" aria-labelledby="tese-titulo">
        <div className="inst-thesis__stage">
          <div className="inst-thesis__photo">
            <Image
              src="/institucional/hero/05.jpg"
              alt="Felipe ao lado do painel do Know How Experience"
              fill
              sizes="(max-width: 900px) 40vw, 240px"
              className="inst-thesis__img"
            />
          </div>
          <h2 id="tese-titulo" className="inst-thesis__title">
            <span>Branding é</span> <span>tradução</span>
          </h2>
        </div>
        <p className="inst-thesis__copy">
          A marca do seu consultório não é inventada — ela é traduzida de seis
          áreas que a gente investiga até encontrar o que só existe em você.
        </p>
      </section>

      {/* Projetos (padrão "Success Stories"): superfície clara, rótulo à
          esquerda, foto grande, contador e texto à direita. Sem métrica: não
          há número de resultado verificado — no lugar, a categoria do case. */}
      <section className="inst-stories" aria-labelledby="projetos-titulo">
        <div className="inst-stories__inner">
          <h2 id="projetos-titulo" className="inst-dot inst-stories__label">
            Projetos
          </h2>
          <ol className="inst-stories__list">
            {cases.map((p, i) => (
              <li key={p.slug} className="inst-story">
                <Link href={`/portfolio/${p.slug}`} className="inst-story__link">
                  <span className="inst-story__media">
                    <Image
                      src={projectCover(p)}
                      alt=""
                      fill
                      sizes="(max-width: 900px) 100vw, 46vw"
                      className="inst-story__img"
                    />
                  </span>
                  <span className="inst-story__info">
                    <span className="inst-story__count" aria-hidden="true">
                      Case ← {pad(i + 1)}/{pad(cases.length)}
                    </span>
                    <span className="inst-story__client">{p.client}</span>
                    <span className="inst-story__tagline">{p.tagline}</span>
                    <span className="inst-story__chip">{p.category}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/projetos" className="inst-stories__all">
            <span aria-hidden="true">##</span>
            <span className="inst-stories__all-text">Ver todos os projetos</span>
            <span aria-hidden="true">(→)</span>
          </Link>
        </div>
      </section>

      {/* id="servicos": âncora de Entregas, usada por links externos e pelo /hub.
          Padrão "What we can help with": depoimentos à esquerda, lista das
          entregas em tipo grande no centro (a primeira acesa; passar o mouse
          acende a outra) e uma foto pequena à direita. */}
      <section id="servicos" className="inst-dark inst-help" aria-labelledby="entregas-titulo">
        <div className="inst-help__inner">
          <DepoSlider />
          <div className="inst-help__main">
            <h2 id="entregas-titulo" className="inst-dot">
              O que entregamos
            </h2>
            <ul className="inst-help__list">
              {deliverables.map((item) => (
                <li key={item} className="inst-help__item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="inst-help__card">
            <Image
              src="/institucional/hero/04.jpg"
              alt="Felipe em entrevista no palco do Know How Experience"
              fill
              sizes="(max-width: 900px) 50vw, 180px"
              className="inst-help__img"
            />
          </div>
        </div>
      </section>

      {/* id="processo": o card "Como trabalho" do /hub aponta para /#processo.
          Padrão "Project Journey": título na largura inteira e três passos,
          cada um com rótulo, texto e foto. A copy junta os oito passos de
          `process` em três; o detalhe completo vive em /metodologia. */}
      <section id="processo" className="inst-dark inst-journey" aria-labelledby="metodo-titulo">
        <h2 id="metodo-titulo" className="inst-journey__title">
          Método PSIQUE
        </h2>
        <ol className="inst-journey__steps">
          {jornada.map((passo, i) => (
            <li key={passo.titulo} className="inst-journey__step">
              <p className="inst-journey__num">Passo • {pad(i + 1)}</p>
              <div className="inst-journey__text">
                <h3 className="inst-journey__name">{passo.titulo}</h3>
                <p className="inst-journey__copy">{passo.texto}</p>
              </div>
              <div className="inst-journey__media">
                <Image
                  src={passo.foto}
                  alt={passo.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  className="inst-journey__img"
                  style={passo.topo ? { objectPosition: "top" } : undefined}
                />
              </div>
            </li>
          ))}
        </ol>
        <p className="inst-journey__more">
          <Link href="/metodologia" className="inst-hero__cta inst-journey__cta">
            Ver o método completo →
          </Link>
        </p>
      </section>

      {/* Perguntas frequentes (padrão "FAQs" do Monolog): rótulo e contato à
          esquerda, título grande e acordeão à direita. <details name> deixa
          uma aberta por vez sem JS; o texto está no HTML e vai em FAQPage. */}
      <section className="inst-dark inst-faq" aria-labelledby="faq-titulo">
        <div className="inst-faq__inner">
          <div className="inst-faq__side">
            <p className="inst-dot">Perguntas frequentes</p>
            <div className="inst-faq__contact">
              <Image
                src="/institucional/felipe-avatar.jpg"
                alt="Felipe"
                width={104}
                height={104}
                className="inst-faq__photo"
              />
              <p className="inst-faq__ask">
                Ficou com dúvida?
                <span>Fale com o Felipe.</span>
              </p>
              <ScheduleLink className="inst-btn">
                Conversar por 15 minutos
                <span className="inst-btn__arrow" aria-hidden="true">
                  ↗
                </span>
              </ScheduleLink>
            </div>
          </div>
          <div className="inst-faq__main">
            <h2 id="faq-titulo" className="inst-faq__title">
              O que considerar antes de começar.
            </h2>
            <div className="inst-faq__list">
              {faq.map((item, i) => (
                <details key={item.q} className="inst-faq__item" name="faq" open={i === 0}>
                  <summary className="inst-faq__q">{item.q}</summary>
                  <p className="inst-faq__a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </section>

      {/* Chamada final em tipo gigante sobre foto em cinza (padrão "Let's
          build" do Monolog), com o botão e uma fala de depoimento. */}
      <section className="inst-dark inst-final" aria-labelledby="final-titulo">
        <div className="inst-final__bg" aria-hidden="true">
          <Image
            src="/institucional/hero/02.jpg"
            alt=""
            fill
            sizes="100vw"
            className="inst-final__img"
          />
        </div>
        <h2 id="final-titulo" className="inst-final__title">
          <span className="inst-final__line inst-final__line--1">Vamos traduzir</span>{" "}
          <span className="inst-final__line inst-final__line--2">o seu consultório</span>{" "}
          <span className="inst-final__line inst-final__line--3">em uma</span>{" "}
          <span className="inst-final__line inst-final__line--4">
            <span aria-hidden="true">→ </span>marca
          </span>
        </h2>
        <ScheduleLink className="inst-btn inst-btn--lg">
          Conversar por 15 minutos
          <span className="inst-btn__arrow" aria-hidden="true">
            ↗
          </span>
        </ScheduleLink>
        <figure className="inst-final__quote">
          <blockquote>“O que mudou não foi a aparência, foi a conversa inicial.”</blockquote>
          <figcaption>— Psicóloga, Itu</figcaption>
        </figure>
      </section>
    </main>
  );
}
