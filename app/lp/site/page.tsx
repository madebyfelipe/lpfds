import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { LpQuiz } from "@/components/lp/LpQuiz";
import { WHATSAPP_URL } from "@/lib/legal";
import { OG_IMAGE } from "@/lib/site";

// LP de tráfego pago — produto de entrada, separado da imersão. Condições
// alinhadas à proposta comercial enviada aos leads (nov/2026): página única
// R$ 599 e site institucional R$ 1.999, os dois em até 12x sem juros, sem
// mensalidade (depois do primeiro ano, só a renovação do domínio), com
// rascunho sem compromisso antes de fechar. São a única exceção do site à
// regra de não publicar preço. O que não foi informado (prazo) fica para a
// conversa — não inventar aqui. noindex e fora do sitemap: página de campanha.
export const metadata: Metadata = {
  title: "Site para psicólogas por R$ 599 em até 12x | Made by Felipe",
  description:
    "Site profissional para psicólogas, em até 12x sem juros e sem mensalidade: página única por R$ 599 e site institucional por R$ 1.999.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/site" },
  openGraph: {
    title: "Site para psicólogas por R$ 599",
    description: "Página única ou site institucional, em até 12x sem juros e sem mensalidade.",
    url: "/lp/site",
    siteName: "Made by Felipe",
    locale: "pt_BR",
    type: "website",
    images: [OG_IMAGE]
  }
};

const motivos = [
  {
    title: "É seu",
    copy: "O perfil depende do algoritmo e das regras da plataforma. O site fica no seu domínio, do jeito que você decidir."
  },
  {
    title: "Pode ser encontrado",
    copy: "Um site bem estruturado pode aparecer para quem procura psicóloga na sua cidade — sem depender do post do dia."
  },
  {
    title: "Passa confiança",
    copy: "Formação, abordagem, CRP e forma de atendimento num lugar só, antes mesmo da primeira mensagem."
  }
];

const planos = [
  {
    nome: "Página única",
    para: "Para sair do link na bio com uma presença própria.",
    preco: "599",
    itens: [
      "O site no ar: uma página com apresentação, como você atende e contato",
      "Seu perfil no Google configurado",
      "Conteúdo revisado de acordo com as normas do CFP, com nome, título e CRP visíveis",
      "Botão de WhatsApp em destaque",
      "Funciona bem no celular"
    ]
  },
  {
    nome: "Site institucional",
    para: "Para quem quer explicar melhor o trabalho e ser encontrada nas buscas.",
    preco: "1.999",
    itens: [
      "Até 8 páginas: início, sobre, atendimentos, contato e o que mais fizer sentido",
      "Otimização para aparecer nas buscas do Google (SEO)",
      "Seu perfil no Google configurado",
      "Conteúdo revisado de acordo com as normas do CFP",
      "Páginas separadas por tipo de atendimento"
    ],
    fora: "Não inclui blog"
  }
];

const sites = [
  {
    slug: "alves-nabuco",
    client: "Alves & Nabuco",
    tipo: "Site institucional",
    src: "/portfolio/alves-nabuco/pagina-inicio.png",
    w: 1920,
    h: 4975
  },
  {
    slug: "arflam-engenharia",
    client: "Arflam Engenharia",
    tipo: "Landing page",
    src: "/portfolio/arflam-engenharia/pagina-inicio.jpg",
    w: 960,
    h: 5800
  },
  {
    slug: "estruturart",
    client: "Estruturart Capital",
    tipo: "Site institucional",
    src: "/portfolio/estruturart/pagina-inicio.jpg",
    w: 960,
    h: 6400
  },
  {
    slug: "prismapay",
    client: "PrismaPay",
    tipo: "Landing page",
    src: "/portfolio/prismapay/pagina-inicio.jpg",
    w: 960,
    h: 6000
  }
];

const passos = [
  {
    title: "Você responde três perguntas",
    copy: "Tudo no clique: o tipo de site, o que você já tem e para quando precisa."
  },
  {
    title: "Montamos o rascunho",
    copy: "Sem compromisso: a gente monta, você vê como o seu site ficaria e decide."
  },
  {
    title: "Seu site no ar",
    copy: "Se gostar, fechamos em até 12x sem juros. Você revisa e o site vai para o seu endereço na internet."
  }
];

const faq = [
  {
    q: "Dá para parcelar?",
    a: "Sim. Os dois planos saem em até 12x sem juros: R$ 599 a página única e R$ 1.999 o site institucional."
  },
  {
    q: "Tem mensalidade?",
    a: "Não. Depois do primeiro ano, você paga só a renovação do domínio."
  },
  {
    q: "Preciso pagar para ver o rascunho?",
    a: "Não. O rascunho é sem compromisso: a gente monta, você vê como o site ficaria e decide se quer seguir."
  },
  {
    q: "O site institucional tem blog?",
    a: "Não. São até 8 páginas, com SEO, perfil no Google e revisão pelas normas do CFP, mas o blog não está incluso."
  },
  {
    q: "Quanto tempo leva?",
    a: "Depende do plano e de quando os textos e as fotos ficam prontos. O prazo é combinado antes de você fechar."
  }
];

export default function LpSitePage() {
  return (
    <main id="conteudo" className="lps">
      {/* ---- Hero: preço grande + janela com um site real rolando ---- */}
      <section className="lp-hero lp-hero--site">
        <div className="lp-hero__top">
          <p className="meyebrow">
            <span className="meyebrow__marker" aria-hidden="true" />
            <span className="meyebrow__text">Sites para psicólogas</span>
          </p>
          <p className="lp-mono">Em até 12x sem juros</p>
        </div>
        <div className="lp-hero__split">
          <div className="lp-hero__copy">
            <h1 className="lp-hero__title lp-hero__title--site">
              Site profissional por <span className="lp-red">R$&nbsp;599.</span>
            </h1>
            <p className="lp-hero__lead">
              Para psicólogas que querem sair do link na bio e ter um endereço próprio na
              internet. Página única ou site institucional, em até 12x sem juros e sem
              mensalidade.
            </p>
            <div className="lp-hero__ctas">
              <a href="#quiz" className="mbtn mbtn--large mbtn--secondary">
                <MButtonInner>Quero ver meu rascunho</MButtonInner>
              </a>
              <a href="#planos" className="lp-textlink">
                Ver os planos
              </a>
            </div>
          </div>
          <div className="lp-window lp-window--hero" aria-hidden="true">
            <div className="lp-window__bar">
              <i />
              <i />
              <i />
              <span className="lp-window__url">seuconsultorio.com.br</span>
            </div>
            <div className="lp-window__view">
              <Image
                src="/portfolio/alves-nabuco/pagina-inicio.png"
                alt=""
                width={1920}
                height={4975}
                sizes="(max-width: 900px) 100vw, 50vw"
                priority
                className="lp-window__shot lp-window__shot--auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Por que site ---- */}
      <section className="lp-sec lp-dark" aria-labelledby="porque-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">Por que um site</p>
          <h2 id="porque-titulo" className="lp-h2">
            Instagram é vitrine. Site é endereço.
          </h2>
        </div>
        <ul className="lp-trio lp-trio--dark">
          {motivos.map((m, i) => (
            <li key={m.title}>
              <span className="lp-trio__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="lp-trio__title">{m.title}</h3>
              <p className="lp-trio__copy">{m.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- Planos ---- */}
      <section id="planos" className="lp-sec" aria-labelledby="planos-titulo">
        <div className="lp-sec__head lp-sec__head--center">
          <p className="lp-mono lp-mono--dot">Planos</p>
          <h2 id="planos-titulo" className="lp-h2">
            Dois formatos. <span className="lp-dim">Sem mensalidade.</span>
          </h2>
        </div>
        <div className="lp-pricing">
          <div className="lp-pricing__plans">
            {planos.map((p) => (
              <article key={p.nome} className="lp-plan">
                <h3 className="lp-plan__name">{p.nome}</h3>
                <p className="lp-plan__for">{p.para}</p>
                <p className="lp-plan__price">
                  <span className="lp-plan__from">Preço fechado</span>
                  <span className="lp-plan__value">R$ {p.preco}</span>
                  <span className="lp-plan__note">em até 12x sem juros</span>
                </p>
                <ul className="lp-plan__list">
                  {p.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {p.fora ? <p className="lp-plan__note">{p.fora}</p> : null}
                <a href="#quiz" className="lp-plan__cta">
                  Quero o {p.nome.toLowerCase()} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="lp-pricing__bar">
            <p>
              <strong>Precisa de marca também?</strong> A imersão de marca já inclui o
              site.{" "}
              <Link href="/lp/marca" className="inst-link">
                Conhecer a imersão
              </Link>
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lp-pricing__wa">
              Tirar dúvida no WhatsApp
            </a>
          </div>
          <p className="lp-pricing__fine">
            Sem mensalidade: depois do primeiro ano, você paga só a renovação do domínio.
            Antes de fechar, você vê um rascunho do seu site, sem compromisso.
          </p>
        </div>
      </section>

      {/* ---- Sites no ar ---- */}
      <section className="lp-sec lp-sec--tint" aria-labelledby="sites-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">Feitos pelo estúdio</p>
          <h2 id="sites-titulo" className="lp-h2">
            Sites que já estão no ar.
          </h2>
          <p className="lp-sec__sub">
            Projetos para outras áreas — passe o mouse para rolar a página. O mesmo cuidado vai
            para o site do seu consultório.
          </p>
        </div>
        <ul className="lp-sites">
          {sites.map((s) => (
            <li key={s.slug}>
              <Link href={`/portfolio/${s.slug}`} className="lp-site">
                <span className="lp-window">
                  <span className="lp-window__bar">
                    <i />
                    <i />
                    <i />
                  </span>
                  {/* --r = largura/altura da captura: o hover rola até o fim exato. */}
                  <span
                    className="lp-window__view lp-window__view--card"
                    style={{ "--r": s.w / s.h } as CSSProperties}
                  >
                    <Image
                      src={s.src}
                      alt={`Página inicial do site de ${s.client}`}
                      width={s.w}
                      height={s.h}
                      sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 25vw"
                      className="lp-window__shot lp-window__shot--hover"
                    />
                  </span>
                </span>
                <span className="lp-site__meta">
                  <span className="lp-site__client">{s.client}</span>
                  <span className="lp-site__type">{s.tipo}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- Como funciona ---- */}
      <section className="lp-sec" aria-labelledby="como-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">Como funciona</p>
          <h2 id="como-titulo" className="lp-h2">
            Do clique ao site no ar, sem complicação.
          </h2>
        </div>
        <ol className="lp-steps">
          {passos.map((p, i) => (
            <li key={p.title} className="lp-step">
              <span className="lp-step__tag">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="lp-step__title">{p.title}</h3>
              <p className="lp-step__copy">{p.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Quiz ---- */}
      <section id="quiz" className="lp-sec lp-dark lp-apply" aria-labelledby="quiz-titulo">
        <div className="lp-apply__intro">
          <p className="lp-mono lp-mono--dot">Rascunho</p>
          <h2 id="quiz-titulo" className="lp-h2">
            Peça o seu rascunho em três cliques.
          </h2>
          <p className="lp-apply__copy">
            Responda, deixe o seu WhatsApp e eu te chamo para seguirmos com o rascunho do seu
            site, sem compromisso.
          </p>
        </div>
        <LpQuiz origem="site" />
      </section>

      {/* ---- FAQ ---- */}
      <section className="lp-sec" aria-labelledby="faq-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">Perguntas</p>
          <h2 id="faq-titulo" className="lp-h2">
            Dúvidas comuns.
          </h2>
        </div>
        <div className="lp-faq">
          {faq.map((item) => (
            <details key={item.q} className="lp-faq__item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
          <details className="lp-faq__item">
            <summary>Posso colocar o valor da sessão no site?</summary>
            <p>
              Depende de como. Expliquei o que o Código de Ética permite{" "}
              <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
                neste artigo
              </Link>
              .
            </p>
          </details>
        </div>
      </section>

      <section className="lp-final">
        <p className="lp-final__line">
          Seu consultório, <span className="lp-red">no seu endereço.</span>
        </p>
        <a href="#quiz" className="mbtn mbtn--large mbtn--secondary">
          <MButtonInner>Quero ver meu rascunho</MButtonInner>
        </a>
      </section>
    </main>
  );
}
