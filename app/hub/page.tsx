import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { InstNav } from "@/components/institucional/InstNav";
import { InstFooter } from "@/components/institucional/InstFooter";
import { SmoothScroll } from "@/components/institucional/SmoothScroll";
import { UiSound } from "@/components/institucional/UiSound";
import { HubWebinarBar } from "@/components/hub/HubWebinarBar";
import { HubLinks } from "@/components/hub/HubLinks";
import { HubMedia } from "@/components/hub/HubMedia";
import { HubSocial } from "@/components/hub/HubSocial";
import { EbookModal } from "@/components/hub/EbookModal";
import { MButtonInner } from "@/components/institucional/home/MButton";
import { webinarNoAr } from "@/lib/webinar";
import "../institucional.css";
import "../monolog.css";
import "./hub.css";
import "./hub-monolog.css";

export const metadata: Metadata = {
  title: "Hub | Made by Felipe — Conexões e Projetos",
  description:
    "Branding para consultórios de psicologia. E-book, newsletter, lives para recém-formados, conteúdo e a conversa de 15 minutos com o Felipe.",
  alternates: { canonical: "/hub" },
  openGraph: {
    title: "Hub | Made by Felipe — Conexões e Projetos",
    description:
      "Branding para consultórios de psicologia. E-book, newsletter, lives para recém-formados, conteúdo e a conversa de 15 minutos com o Felipe.",
    images: ["/logo-black.png"],
    locale: "pt_BR",
    type: "website"
  }
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="meyebrow">
      <span className="meyebrow__marker" aria-hidden="true" />
      <p className="meyebrow__text">{children}</p>
    </div>
  );
}

/**
 * Hub refeito na linguagem do site (nov/2026): perfil e a oferta no topo,
 * links em tipo grande numerados (como o menu do rodapé do Monolog),
 * newsletter, redes e a bio. Sem baralho de cards. O e-book segue com o
 * portão da newsletter (EbookModal) e os embeds atrás do consentimento.
 */
export default function HubPage() {
  return (
    <div className="inst hub2">
      {webinarNoAr && <HubWebinarBar />}
      <InstNav />
      <main id="conteudo">
        {/* Primeira dobra = HubHero: a oferta da imersão (copy aprovada). */}
        <section className="hub2-hero">
          <div className="hub2-hero__profile">
            <Image
              src="/institucional/felipe-avatar.jpg"
              alt="Felipe, estrategista de marca"
              width={64}
              height={64}
              className="hub2-hero__avatar"
              priority
            />
            <div>
              <p className="hub2-hero__name">Made by Felipe®</p>
              <p className="hub2-hero__role mmono">Marca para consultórios de psicologia · Sorocaba/SP</p>
            </div>
          </div>
          <Eyebrow>A imersão</Eyebrow>
          <h1 className="hub2-hero__title">
            Dois dias com você. <span className="mh-red">Quarenta e cinco dias no ar.</span>
          </h1>
          <div className="hub2-hero__copy">
            <p>
              Dois dias para ler o consultório: histórico, carteira, valor da sessão, o público que você atende
              melhor e a concorrência da sua região.
            </p>
            <p>
              Depois vem o território — posicionamento, recorte e discurso —, aprovado antes de qualquer arte. E o
              sistema aplicado nos pontos de contato que a pessoa vê primeiro, com checagem de conformidade em cada
              peça.
            </p>
            <p>Quarenta e cinco dias do briefing ao ar. Começa com quinze minutos de conversa.</p>
          </div>
          <ScheduleLink className="mbtn mbtn--secondary hub2-hero__cta">
            <MButtonInner>Agendar 15 minutos</MButtonInner>
          </ScheduleLink>
        </section>

        <section className="hub2-links" aria-labelledby="hub-links">
          <h2 id="hub-links" className="sr-only">
            Links
          </h2>
          <Eyebrow>Por onde começar</Eyebrow>
          <HubLinks />
        </section>

        <HubMedia />

        <div className="hub hub2-embeds">
          <HubSocial />
          <EbookModal />
        </div>

        {/* Bloco de fechamento = HubBio (bio aprovada). */}
        <section className="hub2-bio" aria-labelledby="hub-bio">
          <div className="hub2-bio__media">
            <Image
              src="/eu.jpg"
              alt="Felipe Silva — estrategista de marca"
              fill
              sizes="(max-width: 767px) 100vw, 40vw"
              className="hub2-bio__img"
            />
          </div>
          <div className="hub2-bio__content">
            <Eyebrow>Quem faz</Eyebrow>
            <h2 id="hub-bio" className="hub2-bio__title">
              Eu sou o Felipe. Construo marca há sete anos e hoje atendo exclusivamente psicólogos.
            </h2>
            <p>
              Cheguei nesse mercado por um motivo pessoal: minha mulher está se formando em psicologia, e eu quis
              resolver pra ela a parte que a faculdade não ensina, que é como o paciente chega.
            </p>
            <p>
              Estudei o nicho a fundo — as regras de publicidade do Conselho, as dinâmicas de captação, o
              comportamento de quem procura terapia pela primeira vez — e entendi uma coisa que mudou meu trabalho:
              com o atendimento online, a sala perdeu o endereço, e a escolha do paciente passou a acontecer{" "}
              <strong className="mh-red">antes da primeira sessão</strong>. Ela acontece no perfil, no tom de voz, na
              clareza sobre quem aquela profissional atende.
            </p>
            <p>
              É exatamente aí que eu atuo: na percepção que define o preço que você consegue cobrar, o tipo de
              paciente que agenda e a indicação que chega depois.
            </p>
            <Link href="/metodologia" className="hub2-bio__link">
              Conhecer o método PSIQUE →
            </Link>
          </div>
        </section>
      </main>
      <InstFooter />
      <SmoothScroll />
      <UiSound />
      <div className="mgrain" aria-hidden="true" />
    </div>
  );
}
