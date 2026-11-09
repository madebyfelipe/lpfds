import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";

export const post: Post = {
  slug: "posicionamento-para-psicologo",
  title: "Posicionamento para psicólogo: como definir um nicho sem se limitar",
  description:
    "O que é posicionamento de marca para psicólogo, como escolher um público (por exemplo, famílias de crianças neurodivergentes) e como comunicar o nicho dentro do Código de Ética.",
  keyword: "posicionamento para psicólogo",
  tags: ["posicionamento"],
  publishedAt: "2026-11-09",
  summary:
    "Posicionamento é a decisão de para quem o consultório existe, que necessidade ele atende e o que o distingue — e é o que orienta toda a marca. Para psicólogos, escolher um foco (como crianças e adolescentes neurodivergentes e suas famílias) não impede atender outros públicos; ajuda quem procura a se reconhecer. A divulgação do nicho deve citar só títulos e qualificações que você possui.",
  faq: [
    {
      q: "Ter um nicho significa recusar outros pacientes?",
      a: "Não. Posicionamento é sobre comunicação: dizer com clareza onde você concentra formação e experiência. Você pode continuar atendendo outros públicos; o foco só deixa a mensagem mais fácil de entender."
    },
    {
      q: "Preciso de especialização para divulgar um nicho?",
      a: "Para se apresentar como especialista, sim: título acadêmico ou registro de especialista no CFP. Sem título, a cartilha do CRP-MG orienta divulgar área de atuação, experiência e tipos de serviço, sem apresentá-los como especialidade."
    },
    {
      q: "Como saber qual é o meu nicho?",
      a: "Olhe para a sua prática real: quem você atende melhor, que demandas chegam com mais frequência, onde está a sua formação e o que distingue o seu trabalho dos consultórios da sua região."
    },
    {
      q: "Posicionamento é a mesma coisa que identidade visual?",
      a: "Não. O posicionamento é a estratégia; a identidade visual e verbal é a forma que essa estratégia ganha. Sem posicionamento, escolher cores e logo vira questão de gosto."
    }
  ],
  cover: {
    src: "/blog/posicionamento-para-psicologo/posicionamento-para-psicologo-bussola.jpg",
    alt: "Bússola antiga e instrumento de navegação sobre um mapa impresso, ideia de direção e posicionamento",
    caption: "Foto: Alex Andrews / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A graduação em psicologia forma um profissional generalista, habilitado a
        atuar em qualquer área. Isso é uma força — e um problema de comunicação.
        Quando a bio diz “atendimento psicológico para crianças, adolescentes,
        adultos, casais e famílias”, quem procura não consegue saber onde você é
        mais forte. Posicionamento é a resposta para isso. Este texto explica o
        que é, como definir o seu e como comunicá-lo dentro das regras da
        profissão.
      </p>

      <section>
        <h2>O que é posicionamento</h2>
        <p>
          Posicionamento é o lugar que você quer ocupar na cabeça de quem
          procura atendimento. Ele responde a três perguntas:
        </p>
        <ul>
          <li><strong>Para quem</strong> o consultório existe?</li>
          <li><strong>Que necessidade</strong> leva essas pessoas até você?</li>
          <li><strong>O que distingue</strong> o seu trabalho dos outros que elas podem encontrar?</li>
        </ul>
        <p>
          As respostas viram um norte para tudo: bio, site, identidade visual,
          conteúdo e até a forma de conduzir a primeira conversa.
        </p>
      </section>

      <section>
        <h2>Nicho não é prisão</h2>
        <p>
          O medo mais comum é que escolher um foco faça perder pacientes. Na
          prática, posicionamento é uma decisão de comunicação, não de agenda.
          Você pode continuar atendendo outros públicos; o que muda é a
          mensagem, que passa a ser clara o bastante para quem você atende melhor
          se reconhecer de imediato.
        </p>
        <p>
          Um exemplo ilustrativo: uma psicóloga que atende crianças e
          adolescentes, com formação e experiência em neurodesenvolvimento, pode
          se posicionar para famílias de crianças autistas e neurodivergentes —
          e seguir atendendo outros casos infantis. Para os pais que pesquisam,
          essa clareza vale mais do que uma lista longa de públicos.
        </p>
      </section>

      <section>
        <h2>Como definir o seu: seis áreas para investigar</h2>
        <p>
          No estúdio, usamos o{" "}
          <Link href="/metodologia" className="inst-link">
            método PSIQUE
          </Link>
          , que investiga seis áreas antes de qualquer decisão visual:
        </p>
        <ul>
          <li><strong>Prática</strong> — como o consultório funciona de fato: carteira, agenda, valor da sessão.</li>
          <li><strong>Sujeito</strong> — quem você atende melhor e quem procura você.</li>
          <li><strong>Inquietação</strong> — a necessidade por trás da busca.</li>
          <li><strong>Qualidade</strong> — a sua proposta de valor diante do que a concorrência local já oferece.</li>
          <li><strong>Universo</strong> — cidade, cultura e os canais onde a marca vai viver.</li>
          <li><strong>Estória</strong> — origem, crenças e a personalidade que a marca vai carregar.</li>
        </ul>
        <p>
          Mesmo sem um processo formal, vale responder a essas perguntas por
          escrito. Elas costumam revelar um foco que já existe na sua prática,
          mas não aparece na comunicação.
        </p>
      </section>

      <section>
        <h2>O que o Código de Ética pede ao comunicar o nicho</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          determina que a divulgação faça referência apenas a títulos ou
          qualificações que o profissional possua. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          detalha:
        </p>
        <ul>
          <li>
            Títulos acadêmicos (especialista, mestre, doutor) e profissionais
            (registro de especialista pelo CFP) só podem ser citados por quem os
            possui.
          </li>
          <li>
            Cursos livres e formações são qualificações e não devem ser
            apresentados como especialidade.
          </li>
          <li>
            Sem títulos, o psicólogo pode divulgar área de atuação, experiência
            em determinado campo ou os tipos de serviço e públicos que atende.
          </li>
        </ul>
        <p>
          Ou seja: “Psicóloga com experiência no atendimento de crianças e
          adolescentes neurodivergentes” é uma forma honesta de comunicar um
          nicho. “Especialista em autismo”, sem o título, não é.
        </p>
      </section>

      <section>
        <h2>Diferencial sem superlativo</h2>
        <p>
          Posicionar-se não é se declarar “o melhor” nem “a referência” — o
          artigo 20 veda a autopromoção em detrimento de outros profissionais, e
          a cartilha sugere mostrar diferencial pela formação e pela
          qualificação, sem adjetivos. O diferencial aparece quando você descreve
          com precisão o que faz: para quem, como, com que formação, em que
          formato.
        </p>
      </section>

      <section>
        <h2>Do posicionamento à marca</h2>
        <p>
          Com o posicionamento definido, as próximas decisões ficam mais fáceis:
          o nome (veja{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>
          ), a{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual
          </Link>
          , a linguagem com as famílias (veja{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>
          ) e o{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            plano de divulgação
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como testar o seu posicionamento</h2>
        <p>
          Depois de escrever as respostas, faça alguns testes simples antes de
          mudar bio, site e identidade:
        </p>
        <ul>
          <li>
            <strong>A frase de uma linha.</strong> Escreva em uma frase para
            quem você atende e como. Se precisar de vírgulas demais, o foco ainda
            está largo.
          </li>
          <li>
            <strong>O teste da indicação.</strong> Pergunte a colegas que indicam
            pacientes para você como eles descrevem o seu trabalho. A resposta
            costuma mostrar o posicionamento que já existe na prática.
          </li>
          <li>
            <strong>O teste da busca.</strong> Pesquise como o seu público
            pesquisaria — por exemplo, “psicóloga infantil autismo [cidade]” — e
            veja como os consultórios que aparecem se apresentam. O que eles não
            dizem pode ser o seu espaço.
          </li>
          <li>
            <strong>O teste da formação.</strong> Confira se tudo o que a frase
            promete está sustentado por formação e experiência reais.
          </li>
        </ul>
      </section>

      <section>
        <h2>Checklist rápido</h2>
        <ul>
          <li>Consigo dizer em uma frase para quem o consultório existe?</li>
          <li>Sei qual necessidade leva essas pessoas até mim?</li>
          <li>Sei o que distingue o meu trabalho, sem usar superlativos?</li>
          <li>Cito apenas títulos e qualificações que possuo?</li>
          <li>A bio e o site comunicam esse foco com clareza?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. O posicionamento é a
          primeira etapa e é aprovado antes de qualquer arte. Se quiser conversar
          sobre o seu, o primeiro passo é uma conversa de 15 minutos.
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
            , arts. 1 e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026, seção “Títulos e qualificações”.
          </li>
        </ul>
      </section>
    </>
  )
};
