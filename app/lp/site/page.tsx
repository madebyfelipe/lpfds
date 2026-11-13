import type { Metadata } from "next";
import Link from "next/link";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { LpQuiz } from "@/components/lp/LpQuiz";
import { WHATSAPP_URL } from "@/lib/legal";
import { OG_IMAGE } from "@/lib/site";

// LP de tráfego pago — produto de entrada, separado da imersão: site
// parcelado no cartão. Os dois preços "a partir de" foram passados pelo
// Felipe (one page R$ 440, institucional R$ 1.550) e são a única exceção do
// site à regra de não publicar preço. O que ele não informou (parcelas,
// prazo, domínio, hospedagem) fica para o orçamento — não inventar aqui.
// noindex e fora do sitemap: página de campanha.
export const metadata: Metadata = {
  title: "Site para psicólogas a partir de R$ 440 | Made by Felipe",
  description:
    "Site profissional para psicólogas, parcelado no cartão: one page a partir de R$ 440 e institucional a partir de R$ 1.550.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/site" },
  openGraph: {
    title: "Site para psicólogas a partir de R$ 440",
    description: "One page ou institucional, parcelado no cartão.",
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
    nome: "One page",
    para: "Para sair do link na bio com uma presença própria.",
    preco: "440",
    itens: [
      "Uma página com rolagem: apresentação, como você atende e contato",
      "Botão de WhatsApp em destaque",
      "Funciona bem no celular",
      "Título e descrição configurados para o Google",
      "Nome completo, título e CRP visíveis, como pede o artigo 20"
    ]
  },
  {
    nome: "Institucional",
    para: "Para quem quer explicar mais e publicar conteúdo.",
    preco: "1.550",
    itens: [
      "Tudo o que vem no one page",
      "Várias páginas: início, sobre, atendimentos e contato",
      "Páginas separadas por tipo de atendimento",
      "Blog para publicar artigos",
      "Estrutura pensada para crescer com o consultório"
    ]
  }
];

const passos = [
  {
    title: "Você responde três perguntas",
    copy: "Tudo no clique: o tipo de site, o que você já tem e para quando precisa."
  },
  {
    title: "Fechamos o orçamento",
    copy: "No WhatsApp, combinamos escopo, prazo e parcelas antes de qualquer coisa começar."
  },
  {
    title: "Seu site no ar",
    copy: "Eu construo, você revisa, e o site vai para o seu endereço na internet."
  }
];

const faq = [
  {
    q: "Dá para parcelar?",
    a: "Sim, no cartão. O número de parcelas é combinado no orçamento."
  },
  {
    q: "Domínio e hospedagem estão inclusos?",
    a: "Depende do plano e do que você já tem. Eu explico tudo no orçamento, antes de você decidir."
  },
  {
    q: "Quanto tempo leva?",
    a: "Depende do plano e de quando os textos e as fotos ficam prontos. O prazo entra no orçamento."
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
          <p className="lp-mono">Parcelado no cartão</p>
        </div>
        <div className="lp-hero__split">
          <div className="lp-hero__copy">
            <h1 className="lp-hero__title lp-hero__title--site">
              Site profissional a partir de <span className="lp-red">R$&nbsp;440.</span>
            </h1>
            <p className="lp-hero__lead">
              Para psicólogas que querem sair do link na bio e ter um endereço próprio na
              internet. One page ou institucional, com preço de partida claro.
            </p>
            <div className="lp-hero__ctas">
              <a href="#quiz" className="mbtn mbtn--large mbtn--secondary">
                <MButtonInner>Montar meu orçamento</MButtonInner>
              </a>
              <a href="#planos" className="lp-textlink">
                Ver os planos
              </a>
            </div>
          </div>
          {/* Esquema do one page, não um site real: Felipe não quer exemplos de
              site na página. Blocos neutros com o nome de cada seção. */}
          <div className="lp-window lp-wire" aria-hidden="true">
            <div className="lp-window__bar">
              <i />
              <i />
              <i />
              <span className="lp-window__url">seuconsultorio.com.br</span>
            </div>
            <div className="lp-wire__page">
              <div className="lp-wire__nav">
                <span className="lp-wire__logo" />
                <span />
                <span />
                <span />
              </div>
              <div className="lp-wire__hero">
                <span className="lp-wire__label">Apresentação</span>
                <span className="lp-wire__line" />
                <span className="lp-wire__line lp-wire__line--short" />
                <span className="lp-wire__btn">WhatsApp</span>
              </div>
              <div className="lp-wire__cards">
                {["Como atendo", "Abordagem", "Contato"].map((label) => (
                  <span key={label} className="lp-wire__card">
                    <span className="lp-wire__label">{label}</span>
                    <span className="lp-wire__line" />
                    <span className="lp-wire__line lp-wire__line--short" />
                  </span>
                ))}
              </div>
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
            Dois formatos. <span className="lp-dim">Preço de partida claro.</span>
          </h2>
        </div>
        <div className="lp-pricing">
          <div className="lp-pricing__plans">
            {planos.map((p) => (
              <article key={p.nome} className="lp-plan">
                <h3 className="lp-plan__name">{p.nome}</h3>
                <p className="lp-plan__for">{p.para}</p>
                <p className="lp-plan__price">
                  <span className="lp-plan__from">a partir de</span>
                  <span className="lp-plan__value">R$ {p.preco}</span>
                  <span className="lp-plan__note">parcelado no cartão</span>
                </p>
                <ul className="lp-plan__list">
                  {p.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#quiz" className="lp-plan__cta">
                  Quero o {p.nome.toLowerCase()} <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
          <div className="lp-pricing__bar">
            <p>
              <strong>Precisa de marca também?</strong> A imersão de marca já inclui a página
              profissional.{" "}
              <Link href="/lp/marca" className="inst-link">
                Conhecer a imersão
              </Link>
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lp-pricing__wa">
              Tirar dúvida no WhatsApp
            </a>
          </div>
          <p className="lp-pricing__fine">
            Valores de partida. Escopo final, prazo, parcelas, domínio e hospedagem são
            confirmados no orçamento, antes de qualquer pagamento.
          </p>
        </div>
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
          <p className="lp-mono lp-mono--dot">Orçamento</p>
          <h2 id="quiz-titulo" className="lp-h2">
            Monte o seu orçamento em três cliques.
          </h2>
          <p className="lp-apply__copy">
            Responda, deixe o seu WhatsApp e eu volto com a proposta do site certo para o seu
            consultório.
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
          <MButtonInner>Montar meu orçamento</MButtonInner>
        </a>
      </section>
    </main>
  );
}
