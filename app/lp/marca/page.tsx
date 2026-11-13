import type { Metadata } from "next";
import Link from "next/link";
import { Depoimentos } from "@/components/institucional/Depoimentos";
import { MetodoFoco } from "@/components/institucional/MetodoFoco";
import { LpFooter } from "@/components/lp/LpFooter";
import { LpHeader } from "@/components/lp/LpHeader";
import { LpQuiz } from "@/components/lp/LpQuiz";
import { positioning } from "@/lib/institucional";
import { OG_IMAGE } from "@/lib/site";
import "../../institucional.css";
import "../../monolog.css";

// LP de tráfego pago para construção de marca — mais qualificada que
// /lp/site: sem preço (segue a decisão do Felipe de não publicar o valor da
// imersão), fala a dor de quem já atende mas cobra menos do que deveria e
// não se diferencia da concorrência local.
//
// noindex de propósito, como /contato e /portfolio: é página de campanha,
// não conteúdo para busca orgânica — evita conteúdo quase-duplicado com
// /imersao competindo no índice.
export const metadata: Metadata = {
  title: "Construção de marca para psicólogos | Made by Felipe",
  description:
    "Imersão de marca para consultórios de psicologia: posicionamento, identidade visual e verbal no ar em 45 dias, dentro do artigo 20 do Código de Ética.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Construção de marca para psicólogos",
    description: "Pare de parecer igual à concorrência. Imersão de marca para quem atende psicologia.",
    url: "/lp/marca",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "website"
  }
};

const steps = [
  {
    question: "O que mais pesa na sua marca hoje?",
    options: [
      "Cobro menos do que eu deveria",
      "Pareço igual a qualquer outro consultório",
      "Não sei como me posicionar",
      "Minha identidade visual não parece profissional"
    ]
  },
  {
    question: "Há quanto tempo isso te incomoda?",
    options: [
      "Começou agora",
      "Alguns meses",
      "Mais de um ano",
      "Desde que abri o consultório"
    ]
  }
];

const dores = [
  "Você cobra menos do que deveria, porque ainda não sabe mostrar o que vale.",
  "Quem pesquisa compara consultórios como quem compara prateleira — e o preço vira o único critério.",
  "Sua presença não constrói uma audiência que já confia em você antes da primeira mensagem.",
  "Cada post parece um teste solto, sem um fio condutor que vire marca com o tempo."
];

export default function LpMarcaPage() {
  return (
    <div className="inst">
      <LpHeader />

      <main id="conteudo">
        <header className="inst-shell lp-hero">
          <p className="inst-kicker inst-kicker--tight">Construção de marca</p>
          <h1 className="lp-hero__title">
            Enquanto sua marca for igual à de qualquer consultório, o preço é a
            única diferença que sobra.
          </h1>
          <p className="lp-hero__lead">
            Imersão de marca para quem atende psicologia: duas coisas difíceis
            de copiar de concorrente nenhum — como você pensa o seu
            consultório e como isso aparece para quem te procura.
          </p>
          <a href="#quiz" className="inst-submit lp-hero__cta">
            Quero descobrir o que muda →
          </a>
        </header>

        <section className="inst-section" aria-labelledby="dores-titulo">
          <p id="dores-titulo" className="inst-kicker">
            Isso te soa familiar?
          </p>
          <div className="lp-pains">
            {dores.map((dor) => (
              <p key={dor} className="lp-pains__item">
                {dor}
              </p>
            ))}
          </div>
        </section>

        <section className="inst-dark" aria-labelledby="posicionamento-titulo">
          <div className="inst-section">
            <p id="posicionamento-titulo" className="inst-kicker inst-kicker--inverse">
              O método
            </p>
            <p className="lp-method__intro">
              Marca não é logotipo — é a tribo que confia em você antes de te
              conhecer. Ela nasce do cruzamento de seis áreas, não de gosto
              pessoal por uma cor.
            </p>
            <MetodoFoco
              titulo="h2"
              itens={positioning.map((a) => ({ chave: a.letter, titulo: a.title, texto: a.copy }))}
            />
            <Link href="/metodologia" className="inst-link lp-method__link">
              Ver o método completo →
            </Link>
          </div>
        </section>

        <Depoimentos />

        <section className="inst-section" id="quiz" aria-labelledby="quiz-titulo">
          <p id="quiz-titulo" className="inst-kicker">
            Vamos conversar
          </p>
          <p className="lp-quiz__intro">
            Três perguntas rápidas e você me diz como te chamar.
          </p>
          <LpQuiz
            source="marca"
            steps={steps}
            submitLabel="Quero conversar sobre minha marca →"
            whatsappMessage="Olá! Vim da página de construção de marca e quero conversar."
          />
        </section>
      </main>

      <LpFooter />
    </div>
  );
}
