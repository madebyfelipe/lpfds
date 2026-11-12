import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "como-escolher-nicho-na-psicologia",
  title: "Como escolher um nicho na psicologia sem engessar o consultório",
  description:
    "Como escolher um nicho na psicologia: cruze formação, interesse e demanda, teste com a agenda e comunique o foco sem prometer resultado nem fechar portas.",
  keyword: "nicho na psicologia",
  tags: ["posicionamento"],
  publishedAt: "2026-11-12",
  summary:
    "Escolher um nicho na psicologia é definir para quem você comunica primeiro, e não deixar de atender os outros. Cruze o que você estuda e gosta de fazer, quem já procura você e o que a sua cidade precisa, teste a escolha por alguns meses e comunique só as qualificações que você tem, como pede o artigo 20 do Código de Ética.",
  faq: [
    {
      q: "Nicho é a mesma coisa que especialidade?",
      a: "Não. Especialidade é uma qualificação reconhecida (como uma especialização concluída). Nicho é o recorte de público e de situação para o qual você comunica. Você pode ter um nicho sem ter título de especialista, desde que não se apresente como tal."
    },
    {
      q: "Escolher um nicho significa recusar outros pacientes?",
      a: "Não. O nicho define o foco da comunicação, não o limite do atendimento. Você continua atendendo quem procura e se sente apto a atender, dentro da sua formação."
    },
    {
      q: "Posso me apresentar como “especialista em autismo”?",
      a: "Só se tiver a qualificação correspondente. O artigo 20 do Código de Ética permite divulgar apenas títulos e qualificações que você possui. Sem eles, diga com o que trabalha, por exemplo: “atendo crianças e orientação a famílias”."
    },
    {
      q: "E se eu escolher errado?",
      a: "Dá para ajustar. Trate o primeiro nicho como hipótese e revise depois de alguns meses, com base em quem procurou você, em que pontos a conversa fluiu e o que você gostou de atender."
    }
  ],
  cover: {
    src: "/blog/como-escolher-nicho-na-psicologia/como-escolher-nicho-na-psicologia-bussola-e-mapa.jpg",
    alt: "Bússola sobre um mapa antigo ao lado de uma lupa, símbolo de escolha de caminho",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        “Atendo todo mundo” parece seguro e é o jeito mais rápido de ficar
        invisível. Quem procura terapia procura alguém para uma situação, e uma
        comunicação ampla demais não ajuda a pessoa a se reconhecer. Mas
        “nicho” assusta: parece abrir mão de pacientes. Este texto mostra como
        escolher um recorte sem engessar o consultório.
      </p>

      <section>
        <h2>Nicho é onde a comunicação começa</h2>
        <p>
          Um nicho não limita quem você atende; decide a quem você fala primeiro.
          “Orientação a famílias de crianças autistas” é um recorte; a agenda
          continua aberta a quem chega por outro caminho. Esse é o centro do{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Três perguntas para cruzar</h2>
        <ol>
          <li>
            <strong>O que você sabe e quer aprofundar?</strong> Formação,
            supervisão, leituras e os atendimentos de que você mais gosta.
          </li>
          <li>
            <strong>Quem já procura você?</strong> Olhe os últimos pacientes e
            indicações: há um padrão de idade, queixa ou origem?
          </li>
          <li>
            <strong>O que falta na sua cidade?</strong> Fale com colegas, escolas
            e outros profissionais da rede para saber que demanda fica sem
            resposta.
          </li>
        </ol>
        <p>
          O nicho que aparece nas três perguntas ao mesmo tempo é o melhor
          candidato.
        </p>
      </section>

      <section>
        <h2>Formação e o artigo 20</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          permite divulgar apenas títulos e qualificações que você possui e
          práticas reconhecidas pela profissão. Então:
        </p>
        <ul>
          <li>sem especialização concluída, não escreva “especialista em”;</li>
          <li>curso livre não é título de especialização;</li>
          <li>descreva o público e o tipo de atendimento (“atendo crianças e adolescentes, com orientação aos pais”) em vez de se rotular.</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          dá exemplos de como descrever o trabalho dentro dessas regras.
        </p>
      </section>

      <section>
        <h2>Teste antes de apostar tudo</h2>
        <ul>
          <li>Escolha o recorte e use-o por três a seis meses na bio, no perfil do Google e no site.</li>
          <li>Anote quem procurou, como encontrou você e se a conversa fluiu.</li>
          <li>Ajuste: afunile, amplie ou troque, sem trocar de identidade visual a cada mudança.</li>
        </ul>
        <p>
          A marca aguenta ajustes de recorte quando o nome, o logo e o tom de
          voz não dependem de um tema único. Veja{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Exemplos de recorte (ilustrativos)</h2>
        <ul>
          <li>Orientação a pais de crianças autistas e neurodivergentes.</li>
          <li>Adolescentes e a transição para a vida adulta.</li>
          <li>Adultos com diagnóstico tardio de autismo ou TDAH.</li>
          <li>Casais em fase de chegada de filhos.</li>
        </ul>
        <p>
          São exemplos para ilustrar o formato do recorte, não uma lista de
          nichos “que dão certo”.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A escolha do recorte
          é a primeira etapa do trabalho. Se quiser conversar sobre a sua marca,
          o primeiro passo é uma conversa de 15 minutos.
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
        </ul>
      </section>
    </>
  )
};
