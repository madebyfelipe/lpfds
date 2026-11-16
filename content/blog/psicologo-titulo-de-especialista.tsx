import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ESPECIALISTA = "https://site.cfp.org.br/servicos/titulo-de-especialista/";
const RES23 =
  "https://site.cfp.org.br/conselho-federal-publica-novas-regras-para-obtencao-de-registro-de-especialista-em-psicologia/";

export const post: Post = {
  slug: "psicologo-titulo-de-especialista",
  title: "Psicólogo pode se dizer especialista? Título de especialista e divulgação",
  description:
    "Quando o psicólogo pode usar “especialista” na divulgação: pós-graduação, registro de especialista do CFP (Resolução 23/2022), cursos livres e como escrever.",
  keyword: "psicólogo pode se dizer especialista",
  tags: ["divulgacao-etica", "posicionamento"],
  publishedAt: "2026-11-12",
  summary:
    "Só com o título. O Código de Ética pede que a divulgação cite apenas títulos e qualificações que a psicóloga possui. Há dois caminhos para “especialista”: o título acadêmico de uma especialização (pós lato sensu) e o registro de especialista concedido pelo Conselho, regulado pela Resolução CFP nº 23/2022. Curso livre e formação são qualificações, e devem ser chamados assim.",
  faq: [
    {
      q: "Fiz pós-graduação em neuropsicologia. Posso dizer que sou especialista?",
      a: "Você pode citar o título acadêmico que tem, como “especialista em Neuropsicologia (pós-graduação)”. O registro de especialista do Conselho é outra coisa, concedido pelo CRP com requisitos próprios. Deixe claro qual dos dois você tem."
    },
    {
      q: "O registro de especialista do CFP é obrigatório?",
      a: "Não. Segundo o CFP, o registro não é condição obrigatória para o exercício profissional; ele atesta o reconhecimento da atuação numa especialidade."
    },
    {
      q: "Posso dizer “especialista em autismo”?",
      a: "Autismo não está entre as 13 especialidades reconhecidas pela Resolução CFP nº 23/2022. Se você tem uma pós com esse nome, cite o curso como ele é. Se não tem, diga que atende crianças autistas e quais formações fez, sem usar a palavra especialista."
    }
  ],
  cover: {
    src: "/blog/psicologo-titulo-de-especialista/psicologo-titulo-de-especialista-diploma-e-livros.jpg",
    alt: "Diploma enrolado com selo de cera vermelho ao lado de livros e um vaso de planta",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        “Especialista” é uma das palavras mais usadas em bio de psicóloga, e uma
        das que mais geram dúvida. A palavra transmite confiança, e é justamente
        por isso que as normas cuidam dela: o público leigo não sabe distinguir
        um curso de fim de semana de uma pós-graduação ou de um registro no
        Conselho.
      </p>

      <section>
        <h2>A regra do Código de Ética</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20, alínea b, do Código de Ética
          </a>{" "}
          pede que a divulgação faça referência apenas a títulos e qualificações
          que a psicóloga possua. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          repete: divulgar somente os títulos que possui. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          detalha que títulos acadêmicos são especialista, mestre e doutor;
          títulos profissionais são o registro de especialista pelo Conselho; e
          cursos livres e formações são qualificações, que não podem ser
          apresentadas como se fossem especialidade. Ela também lembra que “Dr.”
          ou “Dra.” é para quem tem doutorado.
        </p>
      </section>

      <section>
        <h2>Os dois tipos de “especialista”</h2>
        <ul>
          <li>
            <strong>Título acadêmico:</strong> conclusão de uma especialização
            (pós-graduação lato sensu) em instituição credenciada.
          </li>
          <li>
            <strong>Registro de especialista no Conselho:</strong> regulado pela{" "}
            <a href={RES23} {...ext}>
              Resolução CFP nº 23/2022
            </a>
            . Exige, entre outros requisitos, dois anos de inscrição no CRP e
            dois anos de exercício na área, além de especialização credenciada
            ou aprovação em concurso de especialista do CFP. O pedido é feito ao
            CRP, e cada profissional pode registrar até duas especialidades. A
            página de{" "}
            <a href={ESPECIALISTA} {...ext}>
              registro de especialista do CFP
            </a>{" "}
            explica que o registro não é obrigatório para atuar.
          </li>
        </ul>
        <p>
          A resolução reconhece 13 especialidades, entre elas Psicologia
          Clínica, Psicologia Escolar e Educacional, Neuropsicologia,
          Psicopedagogia, Psicomotricidade, Avaliação Psicológica e Psicologia
          em Saúde.
        </p>
      </section>

      <section>
        <h2>Como escrever na bio e no site</h2>
        <div className="inst-blog__table" role="region" aria-label="Como citar títulos e formações na divulgação" tabIndex={0}>
          <table>
            <caption>Como citar títulos e formações na divulgação</caption>
            <thead><tr><th scope="col">Você tem</th><th scope="col">Como escrever</th></tr></thead>
            <tbody>
              <tr><td>Registro de especialista no CRP</td><td>“Especialista em Neuropsicologia (registro CRP)”</td></tr>
              <tr><td>Pós-graduação lato sensu</td><td>“Pós-graduação em Neuropsicologia”</td></tr>
              <tr><td>Curso livre ou formação</td><td>“Formação em [nome do curso]”</td></tr>
              <tr><td>Experiência com um público</td><td>“Atendo crianças autistas e oriento famílias”</td></tr>
              <tr><td>Nenhum título na área</td><td>Não use “especialista”</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A forma mais forte de se apresentar, muitas vezes, nem é o título: é
          dizer com clareza para quem você atende e como. Mais em{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          e em{" "}
          <Link href="/blog/bio-instagram-psicologo-exemplos" className="inst-link">
            bio de psicólogo no Instagram
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>“Especialista em ansiedade” ou “em autismo” sem título correspondente.</li>
          <li>Chamar curso de 20 horas de especialização.</li>
          <li>Usar “neuropsicóloga” sem pós ou registro em Neuropsicologia.</li>
          <li>“Dra.” por cortesia, sem doutorado.</li>
          <li>Somar títulos de forma confusa, como se fossem todos do mesmo tipo.</li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Famílias de crianças autistas costumam pesquisar a formação de quem vai
          atender o filho, e muitas já foram enganadas por títulos vagos. Seja
          específica: cite os cursos pelo nome, diga há quanto tempo atende esse
          público e explique como trabalha. Se você faz avaliação, deixe claro o
          que tem de formação para isso, como na{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a forma de apresentar formação e títulos é revisada
          junto com o posicionamento, nos dois encontros de imersão, com a marca entregue em
          até 30 dias e dentro do artigo 20. Se quiser conversar sobre como se
          apresentar, o primeiro passo é uma conversa de 15 minutos.
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
            , art. 20, alínea b.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES23} {...ext}>
              Resolução CFP nº 23/2022 — novas regras para o registro de especialista
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={ESPECIALISTA} {...ext}>
              Registro de especialista
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (“Títulos e qualificações”).
          </li>
        </ul>
      </section>
    </>
  )
};
