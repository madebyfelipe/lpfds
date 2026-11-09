import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScheduleLink } from "@/components/ScheduleLink";

// RASCUNHO — case real, aguardando aprovação do conteúdo pelo Felipe.
// Base: o contrato com a cliente prevê uso para publicidade (informado pelo
// Felipe em 09/11/2026). Conteúdo tirado só da proposta/entrega do site
// (rozeli.madebyfelipe.com.br): nada de métrica, resultado ou depoimento.
// Preço fica fora (regra do site). noindex + fora do sitemap + sem link até
// a aprovação; ao aprovar: tirar o `robots`, linkar em /cases e pôr no sitemap.

export const metadata: Metadata = {
  title: "Case: site da psicóloga Rozeli Maria Machado | Made by Felipe",
  description:
    "Site institucional de psicologia para Rozeli Maria Machado: página única com áreas de atuação, abordagem, sobre e dúvidas, pensada primeiro para o celular.",
  alternates: { canonical: "/cases/rozeli-maria-machado" },
  robots: { index: false, follow: false }
};

const entregas = [
  "Página única com início, áreas de atuação, abordagem, sobre, modalidades e dúvidas",
  "Layout responsivo, pensado primeiro para quem abre no celular",
  "Botões de contato apontando para o WhatsApp, com mensagem já preparada",
  "Textos sobre TCC, infância, adolescência e vida adulta, revisados para a prática clínica",
  "Avisos de segurança (CVV e SAMU), registro profissional e política de privacidade",
  "Publicado no endereço próprio, com o domínio configurado"
];

const capturas = [
  { src: "/cases/rozeli/site-psicologa-rozeli-abertura.jpg", alt: "Abertura do site no celular: título “Um espaço para compreender você e respeitar a sua história”, botão de agendar e selo com TCC e CRP", label: "Abertura" },
  { src: "/cases/rozeli/site-psicologa-rozeli-areas-de-atuacao.jpg", alt: "Seção de áreas de atuação do site no celular", label: "Áreas de atuação" },
  { src: "/cases/rozeli/site-psicologa-rozeli-sobre-e-contato.jpg", alt: "Seção sobre a psicóloga e contato do site no celular", label: "Sobre e contato" }
];

export default function CaseRozeliPage() {
  return (
    <main id="conteudo">
      <header className="inst-hero">
        <p className="inst-kicker inst-kicker--tight">— Case · Site institucional · Psicologia</p>
        <h1 className="inst-hero__title">
          Um site que recebe <span className="inst-hero__accent">com calma e cuidado</span>.
        </h1>
        <p className="inst-hero__lead">
          O site da psicóloga Rozeli Maria Machado: uma página completa, escrita e
          desenhada para o consultório dela — sem excesso, sem ruído.
        </p>
        <p className="inst-hero__note">
          Psicoterapia para crianças, adolescentes e adultos, presencial e online.{" "}
          <a href="https://rozeli.madebyfelipe.com.br" target="_blank" rel="noopener noreferrer" className="inst-link">
            Ver o site publicado ↗
          </a>
        </p>
      </header>

      <section className="inst-section inst-section--rule">
        <p className="inst-kicker">— Como ficou no celular</p>
        <div className="inst-case__shots" tabIndex={0} role="region" aria-label="Capturas do site no celular">
          {capturas.map((c) => (
            <figure key={c.src} className="inst-case__figure">
              <Image src={c.src} alt={c.alt} width={780} height={1688} sizes="(max-width: 900px) 80vw, 360px" className="inst-case__img" />
              <figcaption className="inst-blog__caption">{c.label}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="inst-dark">
        <div className="inst-section">
          <p className="inst-kicker inst-kicker--inverse">— O que foi feito</p>
          <ol className="inst-proc__rows inst-case__steps">
            {entregas.map((e, i) => (
              <li key={e} className="inst-proc__row">
                <span className="inst-proc__num">{String(i + 1).padStart(2, "0")}</span>
                <p className="inst-proc__copy" style={{ gridColumn: "2 / -1" }}>{e}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="inst-section">
        <p className="inst-kicker inst-kicker--tight">— Processo</p>
        <p className="inst-contact__line">
          Veja as etapas do nosso processo criativo em{" "}
          <Link href="/cases" className="inst-link">cases</Link> e como pesquisamos
          antes de desenhar em{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>
          .
        </p>
        <ScheduleLink className="inst-hero__cta">Conversar por 15 minutos →</ScheduleLink>
      </section>
    </main>
  );
}
