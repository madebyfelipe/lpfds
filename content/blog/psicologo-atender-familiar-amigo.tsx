import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES13 = "https://abmes.org.br/public/arquivos/legislacoes/Resolucao-CFP-013-2022-06-15.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "psicologo-atender-familiar-amigo",
  title: "Psicólogo pode atender familiar ou amigo? O que dizem o Código de Ética e a Res. CFP 13/2022",
  description:
    "Psicólogo pode atender familiar, amigo ou conhecido? O que dizem o Código de Ética e a Res. CFP 13/2022, como recusar com cuidado e como indicar um colega.",
  keyword: "psicólogo pode atender familiar",
  tags: ["divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "Não há uma regra que proíba, com essas palavras, a psicóloga de atender um parente ou amigo, mas o Código de Ética veda manter com a pessoa atendida, ou com familiar e terceiro ligados a ela, relação que possa interferir negativamente nos objetivos do serviço (art. 2º, j). A Resolução CFP nº 13/2022 repete esse compromisso para a psicoterapia e inclui os conhecidos. Com familiares e amigos próximos, esse risco quase sempre existe, por isso o caminho comum é recusar com cuidado e indicar um colega de confiança.",
  faq: [
    {
      q: "É antiético atender um amigo na terapia?",
      a: "O Código de Ética não usa a palavra “amigo”, mas veda estabelecer com a pessoa atendida relação que possa interferir negativamente nos objetivos do serviço (art. 2º, j), e a Resolução CFP nº 13/2022 pede que a psicoterapeuta não estabeleça com a pessoa atendida, família ou conhecidos vínculo que possa causar prejuízo ao trabalho. Uma amizade próxima é, por definição, um vínculo anterior forte. Por isso a recomendação usual é indicar outra profissional."
    },
    {
      q: "Psicólogo pode atender parente distante ou conhecido?",
      a: "A pergunta que decide é se a relação pode interferir no atendimento. Um conhecido de vista, com quem você não convive, pode não trazer esse risco; um primo que frequenta as mesmas festas de família, sim. Na dúvida, discuta em supervisão e, se ainda restar dúvida, consulte a comissão de orientação do seu Conselho Regional."
    },
    {
      q: "Posso atender o filho de uma amiga?",
      a: "O vínculo continua lá: a mãe é sua amiga e participa do processo da criança, porque o atendimento de criança pede autorização e participação dos responsáveis (Código de Ética, art. 8º; Resolução CFP nº 13/2022, art. 12). A amizade pode atrapalhar conversas difíceis, a devolutiva e o sigilo. Indicar uma colega costuma proteger a criança, a família e a amizade."
    },
    {
      q: "Psicólogo pode fazer laudo ou perícia de alguém conhecido?",
      a: "Não. O art. 2º, k, do Código de Ética veda ser perito, avaliador ou parecerista quando vínculos pessoais ou profissionais, atuais ou anteriores, possam afetar a qualidade do trabalho. A Resolução CFP nº 13/2022 (art. 6º) também veda atuar como perito ou assistente técnico de pessoa atendida ou de familiar ou terceiro vinculado a ela."
    }
  ],
  cover: {
    src: "/blog/psicologo-atender-familiar-amigo/psicologo-atender-familiar-amigo-duas-xicaras-de-cha.jpg",
    alt: "Duas xícaras brancas de chá lado a lado sobre uma mesa de madeira cinza",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mensagem vem no privado do Instagram: “Amiga, estou passando por
        uma fase difícil e confio em você. Você me atende?” Ou é a tia, no
        almoço de domingo, perguntando se você pode “conversar” com o primo
        adolescente. O pedido nasce da confiança, e por isso a recusa parece
        tão desconfortável.
      </p>
      <p>
        A resposta curta: o Código de Ética não proíbe, com essas palavras, o
        atendimento de familiares ou amigos. Ele veda manter com a pessoa
        atendida, ou com familiar e terceiro ligados a ela, relação que possa
        interferir negativamente nos objetivos do serviço. Com parentes e
        amigos próximos, essa interferência é quase certa. Então, na prática,
        o caminho é recusar com cuidado e indicar alguém de confiança. Abaixo
        estão as normas, os casos de fronteira e textos de exemplo.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Três trechos respondem à pergunta. O primeiro é o art. 2º, j, do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          , que veda à psicóloga “estabelecer com a pessoa atendida, familiar
          ou terceiro, que tenha vínculo com o atendido, relação que possa
          interferir negativamente nos objetivos do serviço prestado”.
        </p>
        <p>
          O segundo é a{" "}
          <a href={RES13} {...ext}>
            Resolução CFP nº 13/2022
          </a>
          , que regulamenta a psicoterapia. Entre os princípios do art. 2º
          está o “compromisso ético de não estabelecer, com a pessoa atendida,
          família, casais e demais grupos e conhecidos, vínculo que possa
          interferir negativamente e causar prejuízo aos objetivos do serviço
          prestado”. Os conhecidos aparecem com todas as letras.
        </p>
        <p>
          O terceiro trata de avaliação e perícia. O art. 2º, k, do Código
          veda ser perito, avaliador ou parecerista quando vínculos pessoais
          ou profissionais, atuais ou anteriores, possam afetar a qualidade do
          trabalho. O art. 6º da Resolução CFP nº 13/2022 veda atuar como
          perito ou assistente técnico de pessoa atendida, ou de familiar ou
          terceiro ligado a ela.
        </p>
        <p>
          Soma-se a isso o art. 1º, c, que pede serviços de qualidade, e o
          art. 9º, sobre sigilo. Nenhum deles diz “é proibido atender a sua
          prima”. Todos apontam para a mesma pergunta: esse vínculo pode
          prejudicar o trabalho?
        </p>
      </section>

      <section>
        <h2>Por que o vínculo anterior atrapalha</h2>
        <p>
          O vínculo prévio muda o que a pessoa consegue contar e o que você
          consegue ouvir, por mais preparada que você seja.
        </p>
        <ul>
          <li>
            <strong>O que a pessoa não diz.</strong> Falar de conflitos com a
            família fica difícil quando a terapeuta é da família ou senta à
            mesma mesa no Natal.
          </li>
          <li>
            <strong>O que você não consegue fazer.</strong> Confrontar, apontar
            padrões, sustentar silêncios: tudo pesa diferente quando há uma
            amizade em jogo.
          </li>
          <li>
            <strong>Sigilo na prática.</strong> Você vai ouvir sobre pessoas
            que conhece e encontrá-las depois. Guardar o que foi dito fica
            mais trabalhoso, para você e para quem foi atendido.
          </li>
        </ul>
      </section>

      <section>
        <h2>Casos de fronteira: conhecido, cidade pequena, filho de amiga</h2>
        <p>
          Nem todo vínculo é igual. A pergunta das normas é se a relação pode
          interferir negativamente, e a resposta muda com a proximidade.
        </p>
        <h3>Conhecido de vista</h3>
        <p>
          Alguém da academia, um vizinho com quem você só troca bom-dia. Pode
          não haver interferência; combine no primeiro encontro como agir se
          vocês se cruzarem.
        </p>
        <h3>Cidade pequena</h3>
        <p>
          Em cidades pequenas, às vezes você é a única psicóloga da região.
          Sem alternativa real, a supervisão ajuda a decidir, e o atendimento
          online por uma colega de outra cidade, regulamentado pela Resolução
          CFP nº 9/2024, pode ser uma saída.
        </p>
        <h3>Filho de amiga</h3>
        <p>
          A criança não é sua amiga, mas a mãe é, e ela participa do processo:
          o atendimento de criança pede autorização de ao menos um
          responsável (Código, art. 8º) e a Resolução CFP nº 13/2022 pede que
          a psicóloga proponha a participação dos responsáveis (art. 12). A
          devolutiva difícil, a orientação que contraria a mãe, tudo passa
          pela amizade.
        </p>
        <p>
          <strong>Erro comum:</strong> decidir no impulso, para não desagradar.
          Na dúvida, leve o caso à supervisão ou ao seu Conselho Regional.
        </p>
      </section>

      <section>
        <h2>Como recusar sem ferir a relação</h2>
        <p>
          A recusa funciona melhor quando explica o motivo como cuidado, não
          como regra fria, e já traz uma indicação concreta.
        </p>
        <ol>
          <li>Agradeça a confiança.</li>
          <li>Explique em uma frase por que o vínculo atrapalharia o trabalho.</li>
          <li>Indique um ou dois nomes de colegas, com contato.</li>
          <li>Ofereça ajuda para encontrar alguém, se ela quiser.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de mensagem:</em> “Fico feliz que você
          confie em mim para isso. Justamente porque a gente é próxima, eu não
          seria a melhor pessoa para te atender: nossa amizade ia pesar no que
          você consegue me contar e no que eu consigo te dizer. Posso te
          indicar duas colegas em quem confio muito. Quer que eu te passe o
          contato delas?”
        </p>
        <p>
          O art. 1º, k, do Código pede que a psicóloga sugira serviços de
          outros psicólogos quando não puder seguir com o trabalho. Se você ainda não
          tem essa rede, o guia sobre{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parcerias com outros profissionais
          </Link>{" "}
          mostra como combinar indicações.
        </p>
      </section>

      <section>
        <h2>Como deixar isso claro no site e nas redes</h2>
        <p>
          Uma resposta pronta nas perguntas frequentes do site poupa conversas
          desconfortáveis e mostra, sem alarde, como você trabalha.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> “Você atende amigos ou parentes? Não.
          Vínculos pessoais atrapalham o trabalho terapêutico, e o Código de
          Ética pede cuidado com isso. Se for o seu caso, indico colegas de
          confiança.”
        </p>
        <p>
          A frase informa e orienta, como pede a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>
          , sem expor ninguém. O guia de{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>{" "}
          traz outras perguntas que valem resposta pronta, e o de{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            como responder comentários e mensagens no direct
          </Link>{" "}
          ajuda quando o pedido chega pelo Instagram.
        </p>
      </section>

      <section>
        <h2>Pode e evitar com familiares e amigos</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar quando um familiar ou amigo pede atendimento"
            tabIndex={0}
          >
            <caption>Pedido de atendimento de familiar ou amigo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Situação</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amigo próximo pede terapia</td>
                <td>Recusar com cuidado e indicar colegas</td>
                <td>Aceitar “só por um tempo”</td>
              </tr>
              <tr>
                <td>Parente pede ajuda para o filho</td>
                <td>Indicar psicóloga infantil de confiança</td>
                <td>Atender a criança da família</td>
              </tr>
              <tr>
                <td>Laudo para conhecido</td>
                <td>Encaminhar a outra profissional</td>
                <td>Avaliar ou periciar alguém com quem tem vínculo</td>
              </tr>
              <tr>
                <td>Conhecido de vista</td>
                <td>Avaliar em supervisão e combinar o sigilo</td>
                <td>Decidir no impulso, sem conversar</td>
              </tr>
              <tr>
                <td>Site e redes</td>
                <td>Pergunta frequente explicando a regra</td>
                <td>Contar o pedido de um amigo como exemplo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Em grupos de mães, escolas e associações, a psicóloga que atende
          crianças neurodivergentes acaba conhecendo muita gente, e os pedidos
          chegam por amizade: a mãe do colega do seu filho, a professora da
          escola, a vizinha que acabou de receber um diagnóstico em casa.
        </p>
        <ul>
          <li>
            Tenha uma lista de colegas que atendem crianças autistas e
            neurodivergentes, combinada com elas antes.
          </li>
          <li>
            Se você participa de grupos de famílias, deixe claro que ali você
            está como mãe, vizinha ou participante.
          </li>
          <li>
            Em avaliação, o cuidado é maior: o art. 2º, k, veda avaliar quando
            o vínculo pode afetar o trabalho, e o laudo pesa em decisões da
            escola e do plano de saúde.
          </li>
        </ul>
        <p>
          O guia sobre{" "}
          <Link href="/blog/psicologo-grupos-de-maes" className="inst-link">
            divulgação em grupos de WhatsApp de mães
          </Link>{" "}
          traz outras situações em que o papel pessoal e o profissional se
          misturam.
        </p>
      </section>

      <section>
        <h2>Checklist</h2>
        <ul>
          <li>Pergunta-chave: esse vínculo pode interferir no trabalho?</li>
          <li>Familiares e amigos próximos: recusar e indicar.</li>
          <li>Avaliação e perícia de conhecidos: não fazer.</li>
          <li>Casos de fronteira: supervisão e, se preciso, o CRP.</li>
          <li>Lista de colegas para indicação, combinada antes.</li>
          <li>Pergunta frequente no site explicando a regra.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com as
          respostas que as pessoas procuram antes de marcar, e cada texto
          revisado pelo art. 20. Tudo é apresentado em até 30 dias, com o site
          incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer que o seu site explique o seu trabalho por você,
          marque uma conversa de 15 minutos.
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
            , arts. 1º (c, k), 2º (j, k), 8º e 9º.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022 — diretrizes e deveres para o exercício
              da psicoterapia
            </a>{" "}
            (DOU de 21/06/2022, cópia da ABMES), arts. 2º, III, 6º e 12.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024 — psicologia mediada por tecnologias
              digitais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
