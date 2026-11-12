import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const SEO = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";
const WCAG = "https://www.w3.org/TR/WCAG21/#contrast-minimum";

export const post: Post = {
  slug: "site-para-clinica-de-psicologia",
  title: "Site para clínica de psicologia: estrutura, equipe e páginas que convertem",
  description:
    "Como estruturar o site de uma clínica de psicologia: páginas por público, equipe com CRP, FAQ, LGPD e SEO local, dentro do Código de Ética.",
  keyword: "site para clínica de psicologia",
  tags: ["presenca-digital"],
  publishedAt: "2026-11-12",
  summary:
    "O site de uma clínica de psicologia precisa mostrar com clareza para quem é cada atendimento, quem são os profissionais (com nome completo e CRP de cada um), como agendar e onde fica. Uma página por público ajuda no Google e na decisão da família. Todo conteúdo segue o artigo 20 do Código de Ética, e formulários e analytics exigem atenção à LGPD.",
  faq: [
    {
      q: "Uma clínica precisa de um site só ou de um por psicólogo?",
      a: "Um site da clínica, com uma página para cada profissional, costuma funcionar melhor: concentra a autoridade do domínio e deixa clara a equipe. Cada profissional, porém, deve ter o próprio nome completo e CRP na divulgação."
    },
    {
      q: "Quais páginas uma clínica de psicologia deve ter?",
      a: "Início, páginas por público (crianças, adolescentes, adultos, famílias), equipe, como funciona o primeiro contato, perguntas frequentes, contato com mapa e as páginas legais: privacidade e cookies."
    },
    {
      q: "Posso colocar os preços no site?",
      a: "Evite preço como chamariz: o artigo 20 veda o uso do preço como forma de propaganda. Informe os valores na conversa de agendamento, quando a pessoa perguntar."
    },
    {
      q: "O formulário do site precisa de aviso de privacidade?",
      a: "Sim. A LGPD exige informar a finalidade do uso dos dados e, para dados de saúde, que são sensíveis, ter ainda mais cuidado. Peça só o necessário no formulário (nome e contato) e não colete queixa clínica."
    }
  ],
  body: (
    <>
      <p>
        O site de uma clínica tem um trabalho que o de um consultório individual
        não tem: apresentar uma equipe, não uma pessoa. A família chega
        perguntando “quem atende o meu caso?” e “como funciona aqui?”. Quando o
        site responde rápido, o contato acontece. Quando ele só diz “somos uma
        clínica multidisciplinar”, a pessoa volta para a busca.
      </p>

      <section>
        <h2>Páginas que a clínica precisa ter</h2>
        <ol>
          <li>
            <strong>Início</strong>: para quem é a clínica, onde fica e um
            caminho claro para agendar.
          </li>
          <li>
            <strong>Uma página por público ou atendimento</strong>: crianças,
            adolescentes, adultos, orientação a famílias, avaliação
            neuropsicológica.
          </li>
          <li>
            <strong>Equipe</strong>: foto, nome completo, psicólogo(a) e CRP de
            cada profissional, com o público que atende.
          </li>
          <li>
            <strong>Como funciona</strong>: o primeiro contato, o primeiro
            encontro, o formato (presencial ou online).
          </li>
          <li>
            <strong>Perguntas frequentes</strong>: as dúvidas que a recepção já
            responde todos os dias.
          </li>
          <li>
            <strong>Contato e localização</strong>: endereço, mapa, horários,
            acessibilidade.
          </li>
          <li>
            <strong>Privacidade e cookies</strong>.
          </li>
        </ol>
      </section>

      <section>
        <h2>Cada profissional, com nome e CRP</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          vale para cada psicólogo que divulga o serviço. Em um site de clínica,
          isso significa que a página da equipe traz nome completo e CRP de cada
          um, e que títulos e qualificações só aparecem se forem reais. O nome
          da clínica pode ser o destaque, mas não substitui essa identificação.
          Veja também{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            nome fantasia e CNPJ
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>SEO local e por público</h2>
        <p>
          Uma página por público permite aparecer em buscas específicas (“psicólogo
          infantil em Sorocaba”, “avaliação neuropsicológica adulto”). O{" "}
          <a href={SEO} {...ext}>
            guia de SEO para iniciantes do Google
          </a>{" "}
          reforça o básico: títulos e descrições claros, conteúdo útil, links
          internos e site rápido. Complete com o{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            perfil da clínica no Google
          </Link>
          , com os mesmos nome, endereço e telefone do site.
        </p>
      </section>

      <section>
        <h2>LGPD: formulário e analytics</h2>
        <p>
          Dados referentes à saúde são sensíveis pela{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados
          </a>
          . Para o site da clínica:
        </p>
        <ul>
          <li>o formulário pede só nome e contato; a queixa fica para a sessão;</li>
          <li>aviso de privacidade em linguagem simples, com a finalidade do uso dos dados;</li>
          <li>consentimento claro para cookies de medição e anúncio, com recusa tão fácil quanto aceite;</li>
          <li>nenhum depoimento de paciente (veja <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">depoimento de paciente</Link>).</li>
        </ul>
      </section>

      <section>
        <h2>Design e leitura</h2>
        <ul>
          <li>Contraste mínimo de 4,5:1 para texto, como pede a <a href={WCAG} {...ext}>WCAG 2.1</a>.</li>
          <li>Texto escaneável, com títulos e listas curtas.</li>
          <li>Botão de agendamento sempre visível no celular.</li>
          <li>Fotos da equipe e do espaço, sem pacientes nem sessões.</li>
        </ul>
        <p>
          A base do projeto está em{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site para psicólogo
          </Link>{" "}
          e em{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. O site sai da mesma
          identidade que o resto da comunicação. Se quiser conversar sobre a sua
          marca, o primeiro passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={SEO} {...ext}>
              Guia de otimização para mecanismos de pesquisa (SEO) para iniciantes
            </a>
            .
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              WCAG 2.1, critério 1.4.3
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
