import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "parceria-psicologo-escola",
  title: "Parceria entre psicólogo e escola: como se aproximar sem ferir o sigilo",
  description:
    "Como o psicólogo infantil pode se aproximar de escolas: apresentação do trabalho, troca com autorização da família, sigilo e o que evitar na divulgação.",
  keyword: "parceria psicólogo escola",
  tags: ["posicionamento", "neurodivergencia"],
  publishedAt: "2026-11-12",
  summary:
    "A aproximação entre psicólogo e escola funciona quando o profissional se apresenta de forma clara, oferece conteúdo útil à equipe e combina com a família o que pode ser compartilhado. O sigilo (art. 9º do Código de Ética) e a LGPD limitam a troca de informações sobre a criança, e o artigo 20 limita o que a apresentação pode prometer: nada de preço, resultado garantido ou comparação com outros profissionais.",
  faq: [
    {
      q: "Posso conversar com a escola sobre uma criança que atendo?",
      a: "Só com a autorização da família e compartilhando o necessário, com finalidade clara. O sigilo é dever do psicólogo, e a troca com a escola deve respeitar o que a família concordou."
    },
    {
      q: "Como apresentar meu trabalho para a escola?",
      a: "Com um material curto: quem é você, com nome completo e CRP, para quem atende, como funciona o primeiro contato e como a escola pode falar com a família sobre procurar ajuda. Evite preço, promessa e comparação."
    },
    {
      q: "Posso pagar ou receber algo por indicação?",
      a: "Antes de combinar qualquer coisa do tipo, confira as regras do seu CRP e do Código de Ética. O caminho mais seguro é uma relação baseada em informação e confiança, sem vantagem financeira por encaminhamento."
    },
    {
      q: "A escola pode me pedir um relatório sobre o aluno?",
      a: "Pode pedir, e o psicólogo decide o que cabe informar, com autorização da família e dentro dos limites do sigilo. Vale conversar com o CRP em caso de dúvida sobre o formato do documento."
    }
  ],
  body: (
    <>
      <p>
        Para quem atende crianças, a escola é parte do caminho: muitas famílias
        chegam ao consultório depois de um recado da coordenação, e muitas
        crianças precisam que professores entendam o que o atendimento propõe.
        Uma relação cuidadosa com a escola ajuda a criança e também faz o
        trabalho ser conhecido. O cuidado está em como se aproximar.
      </p>

      <section>
        <h2>Antes de tudo: sigilo e autorização</h2>
        <p>
          O sigilo é dever do psicólogo, previsto no{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          , e a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          trata dados de saúde como sensíveis. Na prática, conversar com a escola
          sobre uma criança atendida exige:
        </p>
        <ul>
          <li>autorização da família, de preferência por escrito;</li>
          <li>compartilhar só o necessário, com finalidade clara;</li>
          <li>combinar com a família quem será o interlocutor na escola;</li>
          <li>registrar o que foi combinado.</li>
        </ul>
      </section>

      <section>
        <h2>Como se apresentar à escola</h2>
        <ol>
          <li>
            <strong>Quem você é</strong>: nome completo, psicólogo(a), CRP, e o
            público que atende.
          </li>
          <li>
            <strong>O que você faz</strong>: tipo de atendimento, orientação aos
            pais, formato presencial ou online.
          </li>
          <li>
            <strong>Como é o primeiro contato</strong>: para a coordenação poder
            orientar a família.
          </li>
          <li>
            <strong>Como a escola pode falar com a família</strong> sobre procurar
            ajuda, sem diagnosticar.
          </li>
        </ol>
        <p>
          Uma folha ou uma página do site, com a identidade do consultório, basta.
          Evite preço, “primeira sessão grátis”, promessa e comparação com
          outros profissionais, como pede o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20
          </a>{" "}
          e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>
          . Detalhes do cartão em{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Ofereça conteúdo, não propaganda</h2>
        <ul>
          <li>Uma conversa com a equipe sobre temas gerais (rotina, transição, autismo e inclusão), sem falar de crianças.</li>
          <li>Um material para pais sobre quando procurar ajuda.</li>
          <li>Uma lista de leitura e de serviços públicos de apoio.</li>
        </ul>
        <p>
          Ideias de tema estão em{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          e em{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Quando a criança é autista ou neurodivergente</h2>
        <p>
          A escola costuma ser o lugar onde as dificuldades aparecem primeiro, e
          também onde um bom acordo ajuda mais. Com autorização da família, vale
          combinar o que a escola precisa saber para apoiar a criança e como
          será a comunicação. Fale da criança pelo que ela precisa, sem
          rotular, com a{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Cuidado com vantagens</h2>
        <p>
          Antes de combinar qualquer vantagem em troca de indicação, confira com
          o seu CRP. O caminho mais seguro e sustentável é uma relação baseada
          em informação, confiança e bom atendimento, e é isso que uma escola
          valoriza.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. O material que você
          leva à escola sai da mesma identidade do site e do Instagram. Se
          quiser conversar sobre a sua marca, o primeiro passo é uma conversa de
          15 minutos.
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
            , arts. 9º e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
