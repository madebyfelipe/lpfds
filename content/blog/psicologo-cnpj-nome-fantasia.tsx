import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";

export const post: Post = {
  slug: "psicologo-cnpj-nome-fantasia",
  title: "Psicólogo com CNPJ e nome fantasia: o que o artigo 20 exige na divulgação",
  description:
    "Psicólogo pode usar nome fantasia? Veja como nome completo, CRP e nome do consultório convivem na divulgação, e quando falar com o CRP e o contador.",
  keyword: "psicólogo nome fantasia",
  tags: ["divulgacao-etica", "posicionamento"],
  publishedAt: "2026-11-12",
  summary:
    "O nome fantasia do consultório pode aparecer na divulgação, mas não substitui as informações que o artigo 20 do Código de Ética exige: nome completo do psicólogo, a palavra psicólogo(a) e o número do CRP. Já a abertura de CNPJ é uma decisão fiscal e de registro, que deve ser conferida com um contador e com o seu CRP.",
  faq: [
    {
      q: "Psicólogo pode divulgar só o nome fantasia do consultório?",
      a: "Não. O artigo 20 pede que, ao divulgar os serviços, o psicólogo informe o nome completo, o CRP e o número de registro. O nome fantasia pode acompanhar essas informações, não as substituir."
    },
    {
      q: "Preciso de CNPJ para atender como psicólogo?",
      a: "Depende da forma como você atua e de questões fiscais, que variam de caso para caso. Converse com um contador e consulte o seu CRP sobre as exigências de registro, inclusive para pessoa jurídica."
    },
    {
      q: "Posso registrar o nome do consultório como marca?",
      a: "Pode. O registro de marca é feito no INPI e protege o nome contra uso por terceiros no segmento. Ele é independente do CNPJ e do nome fantasia."
    },
    {
      q: "O nome do consultório pode prometer algo, como “Cura” ou “Paz”?",
      a: "Evite. Nomes que sugerem resultado garantido ou superioridade esbarram na vedação de previsão taxativa de resultados e de sensacionalismo."
    }
  ],
  body: (
    <>
      <p>
        Na hora de abrir o consultório, três ideias se misturam: o seu nome
        profissional, o CNPJ e o nome fantasia. Elas respondem a perguntas
        diferentes, e confundi-las gera divulgação fora do padrão ou retrabalho
        na hora de registrar. Este texto separa cada uma.
      </p>

      <section>
        <h2>Três coisas diferentes</h2>
        <ul>
          <li>
            <strong>Nome profissional</strong>: o seu nome completo e o CRP, que
            identificam quem atende.
          </li>
          <li>
            <strong>CNPJ e razão social</strong>: a identificação fiscal da
            empresa, se você optar por atuar como pessoa jurídica.
          </li>
          <li>
            <strong>Nome fantasia</strong>: o nome pelo qual o consultório é
            conhecido, como “Espaço Fulano” ou “Consultório Tal”.
          </li>
        </ul>
      </section>

      <section>
        <h2>O que o artigo 20 exige na divulgação</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética Profissional do Psicólogo
          </a>{" "}
          determina que, ao divulgar os serviços por qualquer meio, o psicólogo
          informe o nome completo, o CRP e o número de registro. Na prática, o
          nome fantasia pode ser o destaque visual do logo, desde que o seu nome
          completo, psicólogo(a) e o CRP apareçam na peça: no rodapé do site, na
          bio do Instagram, no cartão. Veja o passo a passo em{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita para psicólogo
          </Link>
          .
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          traz exemplos de como exibir essas informações sem poluir a peça.
        </p>
      </section>

      <section>
        <h2>CNPJ: decisão fiscal, não de marca</h2>
        <p>
          Abrir ou não um CNPJ depende de faturamento, tributação e do modo como
          você atende (consultório próprio, clínica, plataforma). Não há uma
          resposta única, e o assunto muda com a legislação. O caminho seguro é
          conversar com um contador e consultar o seu Conselho Regional de
          Psicologia sobre o que ele exige para pessoa jurídica. Este blog não
          substitui essa orientação.
        </p>
      </section>

      <section>
        <h2>Como escolher o nome fantasia</h2>
        <ul>
          <li>Que dê para escrever, falar e lembrar sem explicar.</li>
          <li>Que não prometa resultado nem sugira superioridade (“Cura”, “Referência”, “O melhor”).</li>
          <li>Que combine com o público: o nome de um consultório infantil e o de um de terapia de casal pedem tons diferentes.</li>
          <li>Que esteja livre: busque o nome no Google, nas redes e na base do INPI.</li>
        </ul>
        <p>
          Mais critérios em{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Proteger o nome: registro de marca</h2>
        <p>
          O nome fantasia e o CNPJ não garantem exclusividade. Quem protege uma
          marca é o registro no{" "}
          <a href={INPI} {...ext}>
            INPI
          </a>
          , que é um processo separado e tem custos e prazos próprios. Vale
          considerar quando o nome já tem reconhecimento ou quando você pretende
          crescer para uma clínica.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Questões fiscais e de
          registro ficam com contador e CRP; o estúdio cuida de como o nome
          aparece e se sustenta na divulgação. Se quiser conversar sobre a sua
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
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            INPI.{" "}
            <a href={INPI} {...ext}>
              Serviços de marcas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
