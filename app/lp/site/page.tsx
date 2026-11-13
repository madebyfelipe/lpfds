import type { Metadata } from "next";
import { LpFooter } from "@/components/lp/LpFooter";
import { LpHeader } from "@/components/lp/LpHeader";
import { LpQuiz } from "@/components/lp/LpQuiz";
import { OG_IMAGE } from "@/lib/site";
import "../../institucional.css";
import "../../monolog.css";

// LP de tráfego pago para o site entry-level — produto novo, separado da
// imersão: preço fixo e parcelado, pensado para quem só quer sair do
// Instagram e ainda não está pronto para o processo completo de marca.
// Preço aparece aqui por decisão do Felipe — é exceção à regra geral do site
// de não publicar preço (que segue valendo para a imersão em /lp/marca e
// /imersao). Não inventar o que não foi informado (domínio, hospedagem,
// prazo, nº de parcelas) — isso fica para a conversa, ver FAQ.
//
// noindex de propósito, como /contato, /portfolio e /lp/marca: página de
// campanha, não conteúdo de busca orgânica.
export const metadata: Metadata = {
  title: "Site para psicólogo a partir de R$ 440 | Made by Felipe",
  description:
    "Site profissional para consultório de psicologia, parcelado no cartão: one page a partir de R$ 440, institucional a partir de R$ 1.550.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Site para psicólogo, parcelado",
    description: "One page a partir de R$ 440. Institucional a partir de R$ 1.550.",
    url: "/lp/site",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "website"
  }
};

const steps = [
  {
    question: "Qual situação é a sua?",
    options: [
      "Não tenho site, só uso o Instagram",
      "Tenho site, mas está desatualizado",
      "Quero um link mais profissional pra bio",
      "Só queria entender os preços"
    ]
  },
  {
    question: "Para quando você gostaria de estar no ar?",
    options: [
      "O quanto antes",
      "Nas próximas semanas",
      "Ainda este ano",
      "Só pesquisando por enquanto"
    ]
  }
];

const planos = [
  {
    nome: "Site One Page",
    preco: "R$ 440",
    desde: "a partir de",
    descricao: "Para sair do Instagram e ter um link profissional pra chamar de seu.",
    itens: [
      "Uma página só, com rolagem",
      "Seções de Sobre, Serviços e Contato",
      "Botão de WhatsApp em destaque",
      "Layout responsivo (funciona bem no celular)",
      "Otimizado para aparecer no Google"
    ],
    destaque: false
  },
  {
    nome: "Site Institucional",
    preco: "R$ 1.550",
    desde: "a partir de",
    descricao: "Para quem quer presença completa: mais páginas, mais autoridade.",
    itens: [
      "Várias páginas (Home, Sobre, Serviços, Contato)",
      "Espaço para blog, se quiser escrever",
      "Formulário de contato",
      "Tudo no seu próprio domínio",
      "Otimizado para aparecer no Google"
    ],
    destaque: true
  }
];

const faq = [
  {
    q: "O preço já inclui domínio e hospedagem?",
    a: "Isso a gente fecha na conversa, depois que eu entender o que você precisa — prefiro te passar um valor fechado do que chutar aqui."
  },
  {
    q: "Em quanto tempo o site fica pronto?",
    a: "Depende do plano e do quanto o seu conteúdo (fotos e textos) já está pronto. A gente combina o prazo antes de começar, sem surpresa no meio do caminho."
  },
  {
    q: "Posso parcelar?",
    a: "Sim, no cartão. As condições de parcelamento a gente fecha no WhatsApp."
  },
  {
    q: "Preciso ter todo o conteúdo pronto?",
    a: "Não. Se faltar alguma coisa eu ajudo a organizar — mas quanto mais pronto você chegar, mais rápido o site sai do papel."
  }
];

export default function LpSitePage() {
  return (
    <div className="inst">
      <LpHeader />

      <main id="conteudo">
        <header className="inst-shell lp-hero">
          <p className="inst-kicker inst-kicker--tight">Site para psicólogo</p>
          <h1 className="lp-hero__title">Seu consultório ainda não tem site?</h1>
          <p className="lp-hero__lead">
            Site profissional, parcelado no cartão — sem o custo nem o prazo de
            um projeto de marca completo. Da página única ao institucional com
            várias seções.
          </p>
          <a href="#planos" className="inst-submit lp-hero__cta">
            Ver os planos →
          </a>
        </header>

        <section className="inst-section" id="planos" aria-labelledby="planos-titulo">
          <p id="planos-titulo" className="inst-kicker">
            Planos
          </p>
          <div className="lp-pricing">
            {planos.map((plano) => (
              <div key={plano.nome} className="lp-pricing__card" data-destaque={plano.destaque || undefined}>
                {plano.destaque && <p className="lp-pricing__badge">Mais escolhido</p>}
                <p className="lp-pricing__nome">{plano.nome}</p>
                <p className="lp-pricing__descricao">{plano.descricao}</p>
                <p className="lp-pricing__preco">
                  <span className="lp-pricing__desde">{plano.desde}</span>
                  {plano.preco}
                </p>
                <ul className="lp-pricing__lista">
                  {plano.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="#quiz" className="inst-submit lp-pricing__cta">
                  Quero este plano →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="inst-dark" aria-labelledby="faq-titulo">
          <div className="inst-section">
            <p id="faq-titulo" className="inst-kicker inst-kicker--inverse">
              Perguntas frequentes
            </p>
            <div className="lp-faq">
              {faq.map((item) => (
                <details key={item.q} className="lp-faq__item">
                  <summary className="lp-faq__q">{item.q}</summary>
                  <p className="lp-faq__a">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="inst-section" id="quiz" aria-labelledby="quiz-titulo">
          <p id="quiz-titulo" className="inst-kicker">
            Vamos conversar
          </p>
          <p className="lp-quiz__intro">
            Duas perguntas rápidas e você me diz como te chamar.
          </p>
          <LpQuiz
            source="site"
            steps={steps}
            submitLabel="Quero meu site →"
            whatsappMessage="Olá! Vim da página de site e quero entender os planos."
          />
        </section>
      </main>

      <LpFooter />
    </div>
  );
}
