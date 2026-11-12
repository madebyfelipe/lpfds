import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { Depoimentos } from "@/components/institucional/Depoimentos";
import { InstContato } from "@/components/institucional/InstContato";
import { MetodoFoco } from "@/components/institucional/MetodoFoco";
import {
  agenda,
  deliverables,
  heroStrip,
  methodIntro,
  positioning
} from "@/lib/institucional";

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
            <p className="inst-kicker inst-kicker--inverse inst-kicker--tight">
              — O estúdio
            </p>
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

      <div className="inst-strip" tabIndex={0} role="group" aria-label="Fotos de Felipe">
        {heroStrip.map((foto) => (
          <div key={foto.src} className="inst-strip__cell">
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(max-width: 900px) 50vw, 25vw"
              quality={90}
              className="inst-strip__img"
            />
          </div>
        ))}
      </div>

      {/* id="processo": o card "Como trabalho" do /hub aponta para /#processo.
          Teaser gráfico do método PSIQUE (diagrama estratégia → identidade →
          comunicação); a versão completa vive em /metodologia. */}
      <section id="processo" className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— O método</p>
          <p className="inst-method__intro">{methodIntro}</p>
          <MetodoFoco
            titulo="h2"
            itens={positioning.map((a) => ({
              chave: a.letter,
              titulo: a.title,
              texto: a.copy
            }))}
          />
          <Link href="/metodologia" className="inst-method__more">
            Ver o método completo →
          </Link>
        </div>
      </section>

      {/* id="servicos": âncora de Entregas, usada por links externos e pelo /hub. */}
      <section id="servicos" className="inst-section--rule">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--lg">— Entregas</p>
          <div className="inst-deliverables">
            {deliverables.map((item) => (
              <div key={item} className="inst-deliverable">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Depoimentos />

      <section className="inst-agenda">
        <div className="inst-section" style={{ paddingBlock: "96px" }}>
          <p className="inst-kicker inst-kicker--tight">— Agenda</p>
          <p className="inst-agenda__line">
            {agenda.numProjetos} projetos por trimestre.{" "}
            <span className="inst-agenda__accent">Consulte a disponibilidade</span>{" "}
            para a próxima imersão.
          </p>
        </div>
      </section>

      <InstContato />
    </main>
  );
}
