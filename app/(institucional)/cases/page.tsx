import type { Metadata } from "next";
import { alternatesDe } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";
import { OG_IMAGE, SITE_URL } from "@/lib/site";

// Página de cases. Regra (pedido do Felipe, nov/2026): o processo criativo
// pode ser narrativa do estúdio, mas NADA de depoimento, métrica, resultado ou
// cliente real inventado. O exemplo de site é ilustrativo e rotulado como
// fictício. Case real só entra com autorização escrita da cliente.

const title = "Cases: site para psicóloga e o processo criativo | Made by Felipe";
const description =
  "Como a Made by Felipe cria o site profissional de uma psicóloga: descoberta e pesquisa, estratégia de marca, design, desenvolvimento, entrega e suporte. Exemplo ilustrativo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: alternatesDe("/cases", "pt"),
  openGraph: {
    title,
    description,
    url: "/cases",
    siteName: "Made by Felipe",
    images: [OG_IMAGE],
    locale: "pt_BR",
    type: "website"
  }
};

const etapas = [
  {
    num: "01",
    title: "Descoberta e pesquisa",
    copy: "Entrevista e imersão para entender a prática real do consultório, seguidas da pesquisa do nicho, do público, dos concorrentes da região e das palavras-chave que as pessoas usam para buscar atendimento."
  },
  {
    num: "02",
    title: "Estratégia de marca",
    copy: "As seis áreas do método PSIQUE viram posicionamento: para quem o consultório existe, o que o distingue e como ele fala. É aprovado antes de qualquer arte."
  },
  {
    num: "03",
    title: "Design",
    copy: "Identidade visual e verbal aplicadas ao site: estrutura guiada pelas perguntas do público, textos dentro do artigo 20 do Código de Ética, contraste para leitura e imagens que não expõem pacientes."
  },
  {
    num: "04",
    title: "Desenvolvimento",
    copy: "O site ganha forma no computador e no celular, com SEO técnico desde a primeira versão: títulos e descrições únicos, dados estruturados, imagens com texto alternativo e sitemap."
  },
  {
    num: "05",
    title: "“Seu novo site está aqui”",
    copy: "A entrega é um momento, não um link solto num e-mail: apresentamos o site página por página, mostramos o que cada decisão resolve e passamos o guia de uso da marca."
  },
  {
    num: "06",
    title: "Suporte",
    copy: "Depois do ar, acompanhamos os primeiros ajustes e orientamos como manter o site e a marca consistentes nos outros canais."
  }
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: title,
  description,
  url: `${SITE_URL}/cases`,
  inLanguage: "pt-BR",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  about: { "@id": `${SITE_URL}/#business` }
};

export default function CasesPage() {
  return (
    <main id="conteudo">
      <script
        type="application/ld+json"
        // Conteúdo estático do repositório; JSON.stringify escapa as aspas.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="inst-hero">
        <p className="inst-kicker inst-kicker--tight">Cases</p>
        <h1 className="inst-hero__title">
          O site de uma psicóloga, <span className="inst-hero__accent">do zero ao ar</span>.
        </h1>
        <p className="inst-hero__lead">
          O que entregamos e o processo criativo por trás: pesquisa antes do
          design, marca antes do layout, e uma entrega pensada para ser um
          momento.
        </p>
      </header>

      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">O site entregue</p>
        <div className="inst-case">
          <figure className="inst-case__figure">
            <Image
              src="/cases/exemplo-site-para-psicologa-dados-ficticios.jpg"
              alt="Exemplo de site para psicóloga no computador e no celular, com título acolhedor, menu com atuação e abordagem e botão de agendar"
              width={960}
              height={880}
              sizes="(max-width: 900px) 100vw, 560px"
              className="inst-case__img"
            />
            <figcaption className="inst-blog__caption">
              Exemplo com dados fictícios. Não representa uma cliente real.
            </figcaption>
          </figure>
          <div className="inst-case__copy">
            <h2 className="inst-case__title">Página profissional de consultório</h2>
            <p>
              Uma página por consultório, construída a partir do posicionamento
              e da identidade da marca. O exemplo ao lado mostra o tipo de
              entrega:
            </p>
            <ul className="inst-case__list">
              <li>Título que diz para quem é o atendimento</li>
              <li>Menu com atuação, abordagem, sobre e dúvidas</li>
              <li>Nome completo e CRP visíveis</li>
              <li>Botão de agendamento e contato direto</li>
              <li>Versão para celular desenhada junto, não adaptada depois</li>
            </ul>
            <p className="inst-case__note">
              Cases de clientes reais entram aqui somente com autorização por
              escrito de cada profissional.
            </p>
          </div>
        </div>
      </section>

      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">O processo criativo</p>
          <p className="inst-method__intro">
            Seis etapas, da primeira conversa ao suporte depois do ar.
          </p>
          <ol className="inst-proc__rows inst-case__steps">
            {etapas.map((e) => (
              <li key={e.num} className="inst-proc__row">
                <span className="inst-proc__num">{e.num}</span>
                <h3 className="inst-proc__step">{e.title}</h3>
                <p className="inst-proc__copy">{e.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="inst-section">
        <p className="inst-kicker inst-kicker--tight">Leia também</p>
        <p className="inst-contact__line">
          Como pesquisamos nicho, público, concorrentes e palavras-chave antes do
          design:{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>
          . Os projetos de marca do estúdio estão no{" "}
          <Link href="/projetos" className="inst-link">
            portfólio
          </Link>
          . O método completo está em{" "}
          <Link href="/metodologia" className="inst-link">
            /metodologia
          </Link>{" "}
          e os demais artigos no{" "}
          <Link href="/blog" className="inst-link">
            blog
          </Link>
          .
        </p>
        <ScheduleLink className="inst-hero__cta">Conversar por 15 minutos →</ScheduleLink>
      </section>
    </main>
  );
}
