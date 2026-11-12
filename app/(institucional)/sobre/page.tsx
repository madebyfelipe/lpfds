import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { HomeMotion } from "@/components/institucional/home/HomeMotion";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { methodIntro } from "@/lib/institucional";
import { OG_IMAGE } from "@/lib/site";
import "../../home.css";

const title = "Sobre | Made by Felipe";
const description =
  "Felipe constrói marca há sete anos e hoje atende exclusivamente psicólogos: posicionamento, identidade visual e verbal para consultórios de psicologia.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sobre" },
  openGraph: {
    title,
    description,
    url: "/sobre",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "profile"
  }
};

const motionFlag = `try{if(!matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.dataset.mhMotion=""}catch(e){}`;

// Só fatos já publicados no site (bio do /hub, oferta e método aprovados).
const principios = [
  {
    titulo: "Branding é tradução, não invenção",
    texto: methodIntro.replace(/^Branding é tradução, não invenção\. /, "")
  },
  {
    titulo: "Dois dias com você, 45 dias no ar",
    texto:
      "Posicionamento documentado e aprovado antes de qualquer peça visual. Depois, identidade visual e verbal aplicadas e no ar em 45 dias."
  },
  {
    titulo: "Dentro do artigo 20",
    texto:
      "Tudo é feito dentro do artigo 20 do Código de Ética Profissional do Psicólogo: sem promessa de resultado, sem preço como chamariz e com nome completo, título e CRP na divulgação."
  }
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="meyebrow" data-eyebrow>
      <span className="meyebrow__marker" aria-hidden="true" />
      <p className="meyebrow__text">{children}</p>
    </div>
  );
}

/**
 * Página Sobre no padrão da home (Monolog): título display, foto com
 * parallax, texto que acende no scroll, princípios em linhas e chamada final.
 * A bio é a mesma já publicada no /hub (HubBio).
 */
export default function SobrePage() {
  return (
    <main id="conteudo" className="mh ms">
      <script dangerouslySetInnerHTML={{ __html: motionFlag }} />
      <HomeMotion />

      <section className="ms-hero" data-theme-section="light">
        <div className="ms-hero__grid mgrid">
          <div className="ms-hero__left">
            <Eyebrow>Sobre</Eyebrow>
            <p className="ms-hero__lead" data-hero-p data-delay="0.2" data-animate>
              Construo marca há sete anos e hoje atendo exclusivamente psicólogos.
            </p>
          </div>
          <h1 className="ms-hero__title" data-hero-p data-delay="0" data-animate>
            Eu sou o <span className="mh-red">Felipe.</span>
          </h1>
        </div>
        <div className="ms-hero__photo" data-scroll-container data-translate="120" data-start="top bottom">
          <div className="ms-hero__media" data-translate>
            <Image
              src="/institucional/sobre/felipe.jpg"
              alt="Felipe, estrategista de marca da Made by Felipe, em seu estúdio"
              fill
              priority
              sizes="100vw"
              className="ms-hero__img"
            />
          </div>
        </div>
      </section>

      <section className="mh-problems ms-story" data-theme-section="dark">
        <div className="mh-problems__header">
          <div className="ms-story__side">
            <Image
              src="/institucional/sobre/felipe-retrato.jpg"
              alt=""
              width={180}
              height={225}
              className="ms-story__portrait"
            />
            <p className="ms-story__who mmono">Felipe — estrategista de marca, Made by Felipe</p>
          </div>
          <div className="mh-problems__top">
            <h2 className="mh-problems__heading" data-highlight-text>
              Cheguei nesse mercado por um motivo pessoal: minha mulher está se formando em psicologia, e eu quis
              resolver pra ela a parte que a faculdade não ensina, que é como o paciente chega.
            </h2>
            <div className="ms-story__text">
              <p>
                Estudei o nicho a fundo — as regras de publicidade do Conselho, as dinâmicas de captação, o
                comportamento de quem procura terapia pela primeira vez — e entendi uma coisa que mudou meu trabalho:
                com o atendimento online, a sala perdeu o endereço, e a escolha do paciente passou a acontecer{" "}
                <strong className="mh-red">antes da primeira sessão</strong>. Ela acontece no perfil, no tom de voz,
                na clareza sobre quem aquela profissional atende.
              </p>
              <p>
                É exatamente aí que eu atuo: na percepção que define o preço que você consegue cobrar, o tipo de
                paciente que agenda e a indicação que chega depois.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mh-process ms-principles" data-theme-section="dark" aria-labelledby="principios">
        <h2 id="principios" className="mh-process__heading" data-split="heading">
          Como <span className="mh-red">trabalho</span>
        </h2>
        <ol className="ms-principles__list">
          {principios.map((p, i) => (
            <li key={p.titulo} className="ms-principles__item">
              <p className="mh-process__index mmono">
                <span>Princípio</span>
                <span className="mh-process__dot" aria-hidden="true" />
                <span>{String(i + 1).padStart(2, "0")}</span>
              </p>
              <h3 className="ms-principles__title">{p.titulo}</h3>
              <p className="ms-principles__text">{p.texto}</p>
            </li>
          ))}
        </ol>
        <p className="ms-principles__more">
          <Link href="/metodologia" className="ms-link">
            Ver o método PSIQUE completo →
          </Link>
        </p>
      </section>

      <section className="ms-cta" data-theme-section="dark" aria-labelledby="sobre-cta">
        <h2 id="sobre-cta" className="ms-cta__title" data-split="heading">
          Vamos conversar sobre a marca do seu <span className="mh-red">consultório?</span>
        </h2>
        <ScheduleLink className="mbtn mbtn--large">
          <MButtonInner>Conversar por 15 minutos</MButtonInner>
        </ScheduleLink>
      </section>
    </main>
  );
}
