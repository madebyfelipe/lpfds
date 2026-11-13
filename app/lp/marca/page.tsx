import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { LpQuiz } from "@/components/lp/LpQuiz";
import { depoimentos, deliverables, positioning } from "@/lib/institucional";
import { WHATSAPP_URL } from "@/lib/legal";
import { OG_IMAGE } from "@/lib/site";

// LP de tráfego pago — oferta qualificada: a imersão em dois encontros de
// cerca de 1h30, com tudo apresentado em até 30 dias e o site incluso (mesma
// de /imersao). Sem preço, como no resto do site. noindex e fora
// do sitemap: é página de campanha, não conteúdo de busca.
export const metadata: Metadata = {
  title: "Imersão de marca para psicólogas | Made by Felipe",
  description:
    "Dois encontros de imersão para construir uma marca que se destaca da concorrência e sustenta o valor da sua sessão. Em até 30 dias, tudo apresentado, com o site incluso.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/marca" },
  openGraph: {
    title: "Imersão de marca para psicólogas",
    description: "Dois encontros de imersão. Tudo em até 30 dias, com o site incluso.",
    url: "/lp/marca",
    siteName: "Made by Felipe",
    locale: "pt_BR",
    type: "website",
    images: [OG_IMAGE]
  }
};

const dores = [
  {
    title: "Você é comparada pelo preço",
    copy: "Quando a marca não diz por que você, quem procura escolhe pelo valor da sessão — e a conversa começa pela tabela."
  },
  {
    title: "Seu perfil poderia ser de qualquer colega",
    copy: "Os mesmos tons pastel, as mesmas frases prontas, o mesmo cérebro de banco de imagem. Nada ali é seu."
  },
  {
    title: "Reajustar o valor dá frio na barriga",
    copy: "Você sabe que o seu trabalho vale mais, mas nada na sua comunicação sustenta esse número quando alguém pergunta."
  },
  {
    title: "Chega quem você não escolheu atender",
    copy: "Sem um posicionamento claro, a agenda enche de casos fora do seu foco e falta espaço para os que você quer."
  }
];

const tribo = [
  {
    title: "Sair da comparação",
    copy: "Quando fica claro para quem você trabalha e o que você defende, a concorrência da sua cidade deixa de ser a régua."
  },
  {
    title: "Sustentar o valor da sessão",
    copy: "Marca coerente é argumento: ela explica o seu preço antes de você precisar explicar — inclusive o reajuste que você vem adiando."
  },
  {
    title: "Ser indicada pelo motivo certo",
    copy: "Uma tribo indica. Famílias, colegas e escolas que entendem a sua especialidade sabem exatamente para quem mandar você."
  }
];

const etapas = [
  {
    tag: "Encontros 1 e 2",
    title: "Imersão",
    copy: "Dois encontros de cerca de 1h30 para entender como você trabalha, para quem e aonde quer chegar, pelas seis áreas do método PSIQUE."
  },
  {
    tag: "Depois",
    title: "Construção",
    copy: "Diagnóstico, estudo de mercado e, com o posicionamento aprovado antes de qualquer arte, a identidade visual e verbal e o guia da marca."
  },
  {
    tag: "Até 30 dias",
    title: "Apresentação",
    copy: "Apresento tudo para você, com o site já incluso, a papelaria do consultório e a direção de arte."
  }
];

const faq = [
  {
    q: "Quanto custa a imersão?",
    a: "O valor depende do escopo, e eu apresento na conversa depois de entender o momento do seu consultório. Não publico preço porque ele muda conforme o que cada marca precisa."
  },
  {
    q: "Serve para quem está começando?",
    a: "A primeira pergunta do formulário é justamente sobre o seu momento. Com ela eu consigo dizer se a imersão é o passo certo agora ou se faz mais sentido começar por outro caminho."
  },
  {
    q: "A marca respeita o Código de Ética?",
    a: "Sim. Toda a comunicação é pensada dentro do artigo 20 do Código de Ética Profissional do Psicólogo: nada de promessa de resultado, preço como chamariz ou imagem de atendimento."
  },
  {
    q: "Preciso ter CNPJ ou nome fantasia?",
    a: "Não. A divulgação precisa trazer seu nome completo, título e CRP. Nome fantasia depende de PJ registrada e entra só quando faz sentido, caso a caso."
  }
];

export default function LpMarcaPage() {
  return (
    <main id="conteudo" className="lpm">
      {/* ---- Hero: título gigante + foto com o bloco vermelho da oferta ---- */}
      <section className="lp-hero">
        <div className="lp-hero__top">
          <p className="meyebrow">
            <span className="meyebrow__marker" aria-hidden="true" />
            <span className="meyebrow__text">Imersão de marca para psicólogas</span>
          </p>
          <p className="lp-mono">2 encontros · tudo em até 30 dias</p>
        </div>
        <h1 className="lp-hero__title">
          Pare de competir <span className="lp-red">por preço.</span>
        </h1>
        <div className="lp-hero__grid">
          <div className="lp-hero__copy">
            <p className="lp-hero__lead">
              Uma imersão em dois encontros para psicólogas que já atendem bem e querem uma marca à
              altura: posicionamento claro, identidade própria e uma comunicação que reúne as
              pessoas certas em volta do seu trabalho.
            </p>
            <div className="lp-hero__ctas">
              <a href="#quiz" className="mbtn mbtn--large mbtn--secondary">
                <MButtonInner>Quero aplicar</MButtonInner>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="lp-textlink">
                Prefiro conversar no WhatsApp
              </a>
            </div>
          </div>
          <figure className="lp-hero__media">
            <Image
              src="/institucional/home/hero-2.jpg"
              alt="Leques de cores, régua e óculos sobre a mesa de trabalho do estúdio"
              width={1840}
              height={1227}
              sizes="(max-width: 900px) 100vw, 58vw"
              priority
              className="lp-hero__img"
            />
            <div className="lp-hero__offer">
              <p>
                <b>2</b>
                <span>dias de imersão comigo</span>
              </p>
              <p>
                <b>45</b>
                <span>dias até tudo no ar</span>
              </p>
            </div>
          </figure>
        </div>
      </section>

      {/* ---- Dores: lista numerada ---- */}
      <section className="lp-sec lp-dark" aria-labelledby="dores-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">Isso soa familiar?</p>
          <h2 id="dores-titulo" className="lp-h2">
            Você é ótima no consultório. Sua marca ainda não conta isso.
          </h2>
        </div>
        <ol className="lp-rows">
          {dores.map((d, i) => (
            <li key={d.title} className="lp-row">
              <span className="lp-row__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="lp-row__title">{d.title}</h3>
              <p className="lp-row__copy">{d.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---- Tribo: faixa vermelha ---- */}
      <section className="lp-sec lp-redband" aria-labelledby="tribo-titulo">
        <p className="lp-mono">A tese</p>
        <h2 id="tribo-titulo" className="lp-statement">
          Marca forte não grita mais alto. Ela reúne as pessoas certas.
        </h2>
        <p className="lp-redband__lead">
          Uma tribo é o grupo de pessoas que se reconhece no que você defende. Ela nasce quando a
          sua forma de trabalhar vira linguagem — nome, tom, cores, o jeito de explicar o que você
          faz — e passa a ser fácil de reconhecer, de lembrar e de indicar.
        </p>
        <ul className="lp-trio">
          {tribo.map((t, i) => (
            <li key={t.title}>
              <span className="lp-trio__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="lp-trio__title">{t.title}</h3>
              <p className="lp-trio__copy">{t.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- A imersão: etapas + método + entregas ---- */}
      <section className="lp-sec" aria-labelledby="imersao-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">A imersão</p>
          <h2 id="imersao-titulo" className="lp-h2">
            Dois encontros com você. Tudo em até 30 dias.
          </h2>
        </div>
        <ol className="lp-steps">
          {etapas.map((e) => (
            <li key={e.title} className="lp-step">
              <span className="lp-step__tag">{e.tag}</span>
              <h3 className="lp-step__title">{e.title}</h3>
              <p className="lp-step__copy">{e.copy}</p>
            </li>
          ))}
        </ol>

        <div className="lp-method">
          <div className="lp-method__intro">
            <p className="lp-mono lp-mono--dot">Método PSIQUE</p>
            <p className="lp-method__thesis">
              Branding é tradução, não invenção. O que diferencia você já existe — a imersão
              encontra e organiza.
            </p>
          </div>
          <ul className="lp-letters">
            {positioning.map((p) => (
              <li key={p.letter}>
                <span className="lp-letters__letter" aria-hidden="true">
                  {p.letter}
                </span>
                <span className="lp-letters__title">{p.title}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lp-deliver">
          <p className="lp-mono lp-mono--dot">O que você recebe</p>
          <ul className="lp-deliver__list">
            {deliverables.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- Depoimentos (anonimizados, ver lib/institucional.ts) ---- */}
      <section className="lp-sec lp-sec--tint" aria-labelledby="depo-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">Quem já passou pela imersão</p>
          <h2 id="depo-titulo" className="lp-h2">
            O que mudou não foi a aparência. Foi a conversa.
          </h2>
        </div>
        <ul className="lp-quotes">
          {depoimentos.map((d) => (
            <li key={d.texto.slice(0, 24)} className="lp-quote">
              <blockquote className="lp-quote__text">{d.texto}</blockquote>
              <p className="lp-quote__who">
                {d.titulo} · {d.cidade}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- Quem faz ---- */}
      <section className="lp-sec lp-who" aria-labelledby="quem-titulo">
        <Image
          src="/eu.jpg"
          alt="Felipe Silva, estrategista de marca"
          width={1080}
          height={1350}
          sizes="(max-width: 900px) 60vw, 28vw"
          className="lp-who__img"
        />
        <div className="lp-who__text">
          <p className="lp-mono lp-mono--dot">Quem conduz</p>
          <h2 id="quem-titulo" className="lp-h2">
            Felipe Silva
          </h2>
          <p className="lp-who__bio">
            Estrategista de marca. Constrói marca há sete anos e hoje atende exclusivamente
            psicólogos. Trabalho com poucos projetos ao mesmo tempo para conduzir cada imersão
            pessoalmente, do primeiro dia ao último arquivo.
          </p>
          <Link href="/metodologia" className="lp-textlink">
            Ver o método completo
          </Link>
        </div>
      </section>

      {/* ---- Quiz ---- */}
      <section id="quiz" className="lp-sec lp-dark lp-apply" aria-labelledby="quiz-titulo">
        <div className="lp-apply__intro">
          <p className="lp-mono lp-mono--dot">Aplicar</p>
          <h2 id="quiz-titulo" className="lp-h2">
            Vamos ver se a imersão faz sentido para você.
          </h2>
          <p className="lp-apply__copy">
            Três perguntas de clique e o seu WhatsApp. Eu leio cada resposta e volto com uma
            conversa sobre o seu consultório — não com um orçamento genérico.
          </p>
        </div>
        <LpQuiz origem="marca" />
      </section>

      {/* ---- FAQ ---- */}
      <section className="lp-sec" aria-labelledby="faq-titulo">
        <div className="lp-sec__head">
          <p className="lp-mono lp-mono--dot">Perguntas</p>
          <h2 id="faq-titulo" className="lp-h2">
            Antes de aplicar.
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
            <summary>E se eu só precisar de um site?</summary>
            <p>
              Também faço site avulso, em até 12x sem juros e sem mensalidade.{" "}
              <Link href="/lp/site" className="inst-link">
                Veja os planos de site
              </Link>
              .
            </p>
          </details>
        </div>
      </section>

      <section className="lp-final">
        <p className="lp-final__line">
          A sua marca já existe. <span className="lp-red">Falta traduzir.</span>
        </p>
        <a href="#quiz" className="mbtn mbtn--large mbtn--secondary">
          <MButtonInner>Quero aplicar</MButtonInner>
        </a>
      </section>
    </main>
  );
}
