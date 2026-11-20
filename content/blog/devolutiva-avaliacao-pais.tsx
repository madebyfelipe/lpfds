import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES06 = "https://site.cfp.org.br/wp-content/uploads/2019/09/Resolu%C3%A7%C3%A3o-CFP-n-06-2019-comentada.pdf";
const RES31 = "https://www.normasbrasil.com.br/norma/resolucao-31-2022_473938.html";
const RES31_NOTICIA = "https://site.cfp.org.br/nova-resolucao-do-cfp-destaca-diretrizes-para-a-avaliacao-psicologica/";
const RES13 = "https://abmes.org.br/public/arquivos/legislacoes/Resolucao-CFP-013-2022-06-15.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "devolutiva-avaliacao-pais",
  title: "Devolutiva para os pais: como apresentar o resultado da avaliação psicológica infantil em 7 passos",
  description:
    "Devolutiva da avaliação psicológica para os pais: o que diz a Res. CFP 6/2019, roteiro em 7 passos, linguagem, entrega do laudo e o momento com a criança.",
  keyword: "devolutiva para os pais",
  tags: ["neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "A devolutiva para os pais é a entrevista em que a psicóloga explica o que a avaliação encontrou, o que isso significa no dia a dia da criança e quais são os próximos passos. Pela Resolução CFP nº 6/2019, a entrega de laudo ou relatório exige ao menos uma entrevista devolutiva com os responsáveis, e o documento é entregue nela, com protocolo assinado. Uma boa devolutiva começa pelas perguntas da família, traduz os resultados sem jargão, comunica o essencial, reserva tempo para a reação dos pais e termina com encaminhamentos claros.",
  faq: [
    {
      q: "A devolutiva da avaliação psicológica é obrigatória?",
      a: "Sim, quando há laudo ou relatório. O art. 18 da Resolução CFP nº 6/2019 diz que, para a entrega do relatório e do laudo psicológico, é dever da psicóloga realizar ao menos uma entrevista devolutiva à pessoa atendida ou aos responsáveis legais. Se ela não puder acontecer, a psicóloga deve explicitar as razões. Para os demais documentos, a devolutiva é recomendada quando solicitada."
    },
    {
      q: "O laudo pode ser enviado por e-mail aos pais sem devolutiva?",
      a: "Não é o caminho previsto. O art. 16 da Resolução CFP nº 6/2019 diz que os documentos são entregues diretamente ao beneficiário, ao responsável legal ou ao solicitante, em entrevista devolutiva, com protocolo de entrega assinado. A devolutiva pode ser online, se o atendimento seguir a Resolução CFP nº 9/2024, mas o documento é entregue nela, e não no lugar dela."
    },
    {
      q: "A criança participa da devolutiva?",
      a: "Pode participar, de forma adequada à idade. A devolutiva principal costuma ser com os responsáveis, e muitas psicólogas fazem também um momento com a criança, em linguagem acessível e lúdica. A decisão é técnica e depende da idade, do que foi avaliado e do que a família combinou com você."
    },
    {
      q: "Quanto tempo dura a devolutiva para os pais?",
      a: "Não há duração fixada em norma. Na prática, a devolutiva costuma ocupar um encontro inteiro, às vezes mais de um, porque inclui explicação dos resultados, perguntas e a reação da família. Se o resultado for difícil de receber, vale combinar um segundo encontro para tirar dúvidas depois que os pais tiverem lido o documento."
    },
    {
      q: "Posso mostrar os testes aplicados aos pais na devolutiva?",
      a: "Você explica o que foi feito e o que os resultados indicam, mas não entrega o material dos testes. O uso de testes psicológicos é privativo da psicóloga (Resolução CFP nº 31/2022, art. 8º), e o Código de Ética pede zelo com a guarda e a divulgação do material privativo (art. 1º, i)."
    }
  ],
  cover: {
    src: "/blog/devolutiva-avaliacao-pais/devolutiva-avaliacao-pais-cadeira-e-planta.jpg",
    alt: "Cadeira com assento azul ao lado de uma planta em vaso, em uma sala clara e vazia",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A avaliação terminou. Você tem os resultados, o raciocínio clínico e
        o laudo quase pronto. Do outro lado, dois pais que dormiram mal na
        noite anterior vão entrar na sala querendo saber, em uma frase, o que
        o filho tem. E você sabe que a resposta honesta precisa de mais do que
        uma frase.
      </p>
      <p>
        A resposta curta: a devolutiva para os pais é uma conversa com roteiro.
        Você começa pelas perguntas que trouxeram a família, mostra o que a
        avaliação encontrou em linguagem do dia a dia, explica o que isso muda
        em casa e na escola, dá tempo para a reação e termina com próximos
        passos claros. A Resolução CFP nº 6/2019 torna essa entrevista
        obrigatória na entrega de laudo e relatório, e o documento é entregue
        nela. Este guia traz o roteiro em sete passos, exemplos de frases e o
        que cuidar quando a avaliação envolve autismo, TDAH ou outras
        neurodivergências.
      </p>

      <section>
        <h2>O que dizem as normas sobre a devolutiva</h2>
        <p>
          A{" "}
          <a href={RES06} {...ext}>
            Resolução CFP nº 6/2019
          </a>
          , sobre documentos escritos, tem uma seção só para a entrevista
          devolutiva. O art. 18 diz que, para a entrega do relatório e do
          laudo psicológico, “é dever da(o) psicóloga(o) realizar ao menos uma
          entrevista devolutiva à pessoa, grupo, instituição atendida ou
          responsáveis legais”. Se ela não acontecer, a psicóloga explica por
          quê. O art. 16 completa: os documentos são entregues diretamente ao
          beneficiário, ao responsável legal ou ao solicitante, em entrevista
          devolutiva, com protocolo de entrega assinado.
        </p>
        <p>
          A{" "}
          <a href={RES31} {...ext}>
            Resolução CFP nº 31/2022
          </a>{" "}
          (
          <a href={RES31_NOTICIA} {...ext}>
            notícia do CFP
          </a>
          ) define a avaliação psicológica como um processo estruturado de
          investigação, com métodos, técnicas e instrumentos, “com o objetivo
          de prover informações à tomada de decisão” (art. 1º). A devolutiva é
          onde essas informações chegam a quem decide: os pais.
        </p>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          dá o tom da conversa. O art. 1º, g, pede informar os resultados a
          quem de direito, “transmitindo somente o que for necessário para a
          tomada de decisões”. O art. 1º, h, pede orientar sobre os
          encaminhamentos apropriados. E o art. 13 diz que, no atendimento à
          criança, se comunica aos responsáveis “o estritamente essencial para
          se promoverem medidas em seu benefício”.
        </p>
      </section>

      <section>
        <h2>1. Prepare a devolutiva a partir da pergunta da família</h2>
        <p>
          A devolutiva começa antes da sala: na pergunta que trouxe a família
          até você. Releia a queixa inicial, o pedido da escola ou do médico e
          as preocupações que os pais disseram na anamnese. A conversa vai
          responder a isso, nessa ordem.
        </p>
        <ol>
          <li>Escreva as duas ou três perguntas principais da família.</li>
          <li>Para cada uma, anote a resposta da avaliação em uma frase.</li>
          <li>
            Liste os exemplos do dia a dia que ilustram cada resultado,
            observados por você ou contados pelos pais.
          </li>
          <li>Separe os encaminhamentos: quem, para quê e com que urgência.</li>
          <li>
            Decida o que fica de fora, pelo critério do essencial (Código, art.
            13).
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> a pergunta da família fictícia era
          “por que ele não consegue terminar as tarefas da escola?”. A
          devolutiva se organiza em torno dela: o que a avaliação mostrou sobre
          atenção, sobre organização e sobre o ambiente da sala, e o que pode
          mudar em cada lugar.
        </p>
        <p>
          <strong>Erro comum:</strong> organizar a devolutiva pela ordem dos
          testes aplicados. A pergunta dos pais é sobre o filho.
        </p>
      </section>

      <section>
        <h2>2. Combine o formato com antecedência</h2>
        <p>
          Os pais chegam mais tranquilos quando sabem o que vai acontecer.
          Avise, ao marcar a devolutiva, quanto tempo ela dura, quem deve vir e
          o que eles vão receber.
        </p>
        <ul>
          <li>
            <strong>Quem vem:</strong> os responsáveis que participaram da
            avaliação. Se os pais são separados, combine se a devolutiva será
            conjunta ou em dois momentos.
          </li>
          <li>
            <strong>Sem a criança, de início:</strong> a primeira parte costuma
            ser só com os adultos, para que eles possam reagir e perguntar
            livremente.
          </li>
          <li>
            <strong>Duração:</strong> reserve um encontro inteiro, sem outro
            atendimento logo em seguida.
          </li>
          <li>
            <strong>Modalidade:</strong> presencial ou online, seguindo a
            Resolução CFP nº 9/2024 no caso do online.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de mensagem:</em> “A devolutiva será na
          quinta, às 18h, e dura cerca de uma hora. É importante que vocês
          dois venham. Vou explicar os resultados, tirar dúvidas e entregar o
          laudo, que vocês assinam o recebimento. Se quiserem, depois fazemos
          um momento curto com ele.”
        </p>
        <p>
          <strong>Erro comum:</strong> encaixar a devolutiva em 30 minutos
          entre dois atendimentos. A conversa costuma levar mais tempo do que a
          explicação técnica, porque é ali que os pais processam a notícia.
        </p>
      </section>

      <section>
        <h2>3. Comece pelo que a família já conhece</h2>
        <p>
          Abra com o retrato da criança que os pais reconhecem: os pontos
          fortes, o jeito dela, o que você observou de bom nos encontros. Isso
          é o chão em que o resultado vai pousar.
        </p>
        <ol>
          <li>Retome a pergunta que trouxe a família.</li>
          <li>Descreva o que você viu da criança, com exemplos concretos.</li>
          <li>Pergunte o que os pais esperam ouvir hoje e o que mais os preocupa.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de frase:</em> “Vocês me procuraram porque
          a escola falou em dificuldade de atenção. Antes dos resultados, quero
          contar o que eu vi nesses encontros: ele é curioso, persistente nos
          jogos de que gosta e muito atento a detalhes visuais.”
        </p>
        <p>
          <strong>Erro comum:</strong> abrir com a conclusão diagnóstica
          antes de qualquer contexto. Depois da palavra que os pais temiam,
          muitos deixam de ouvir o resto da conversa.
        </p>
      </section>

      <section>
        <h2>4. Traduza os resultados para a vida da criança</h2>
        <p>
          Cada resultado precisa chegar aos pais como algo que eles reconhecem
          em casa. Número, percentil e nome de teste servem para o laudo; na
          conversa, o que importa é o que aquilo quer dizer.
        </p>
        <ul>
          <li>
            <strong>Do técnico ao concreto:</strong> “memória de trabalho mais
            baixa” vira “ele tem dificuldade de guardar três instruções
            seguidas, como pegue a mochila, calce o tênis e venha para a
            porta”.
          </li>
          <li>
            <strong>Uma ideia por vez:</strong> apresente um resultado, dê um
            exemplo, pergunte se faz sentido, siga para o próximo.
          </li>
          <li>
            <strong>Recursos visuais:</strong> um desenho simples ou um quadro
            de pontos fortes e desafios ajuda muitos pais.
          </li>
          <li>
            <strong>Sem previsões taxativas:</strong> fale do momento atual e
            do que pode ajudar. A Resolução CFP nº 6/2019 lembra o caráter
            dinâmico dos fenômenos psicológicos.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> mostrar gráficos e escores dos testes
          como se fossem autoexplicativos. Além de confundir, o material dos
          testes é privativo da psicóloga (Resolução CFP nº 31/2022, art. 8º;
          Código, art. 1º, i). Você explica o que foi feito e o que os
          resultados indicam, sem entregar o material.
        </p>
      </section>

      <section>
        <h2>5. Dê tempo para a reação dos pais</h2>
        <p>
          A devolutiva é também um momento emocional. Alívio, tristeza, culpa,
          raiva, discordância: tudo pode aparecer na mesma conversa, às vezes
          em cada um dos pais de um jeito.
        </p>
        <ul>
          <li>Pare depois do resultado principal e pergunte como eles estão.</li>
          <li>Acolha a reação sem pressa de passar para os encaminhamentos.</li>
          <li>
            Responda à culpa com informação, a partir do que a avaliação
            mostrou, sem minimizar o que os pais sentem.
          </li>
          <li>
            Se houver discordância, escute e explique de onde vem cada
            conclusão, sem disputar.
          </li>
          <li>Ofereça um segundo encontro para dúvidas depois da leitura do laudo.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de frase:</em> “É muita informação de uma
          vez. Não precisamos resolver tudo hoje. Vocês vão ler o laudo com
          calma, e eu reservo um horário daqui a duas semanas para as
          perguntas que surgirem.”
        </p>
        <p>
          <strong>Erro comum:</strong> preencher o silêncio com mais
          explicação técnica. Muitas vezes, o que os pais precisam naquele
          momento é de uma pausa.
        </p>
      </section>

      <section>
        <h2>6. Feche com encaminhamentos claros</h2>
        <p>
          Os pais saem da devolutiva sabendo o que fazer na semana seguinte. O
          art. 1º, h, do Código pede orientação sobre os encaminhamentos
          apropriados, e é isso que dá sentido à avaliação.
        </p>
        <ol>
          <li>
            <strong>O quê:</strong> acompanhamento psicológico, orientação
            parental, avaliação de outra área, adaptação escolar.
          </li>
          <li>
            <strong>Com quem:</strong> nomes de profissionais ou serviços,
            quando você tiver indicações.
          </li>
          <li>
            <strong>Prioridade:</strong> o que começa primeiro e o que pode
            esperar.
          </li>
          <li>
            <strong>Escola:</strong> se e como o resultado vai para a escola,
            sempre com a autorização da família.
          </li>
          <li>
            <strong>Quando reavaliar:</strong> a validade indicada no
            documento, conforme a Resolução CFP nº 6/2019.
          </li>
        </ol>
        <p>
          Se a escola precisar de um documento próprio, o guia de{" "}
          <Link href="/blog/relatorio-psicologico-escola" className="inst-link">
            relatório psicológico para a escola
          </Link>{" "}
          explica o que entra e o que fica de fora. Material de apoio para os
          pais também ajuda; o guia de{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais de crianças autistas
          </Link>{" "}
          mostra como montar um sem expor ninguém.
        </p>
      </section>

      <section>
        <h2>7. Entregue o documento com protocolo e registre</h2>
        <p>
          O laudo ou relatório é entregue na devolutiva, em mãos ou pelo meio
          combinado na sessão online, com protocolo de entrega assinado. O §
          1º do art. 16 da Resolução CFP nº 6/2019 pede que o protocolo
          comprove o recebimento e a responsabilidade de quem recebe pelo uso e
          sigilo das informações.
        </p>
        <ul>
          <li>Leia com os pais os pontos principais do documento.</li>
          <li>Explique a finalidade: para que ele serve e para que não serve.</li>
          <li>Colha a assinatura no protocolo de entrega.</li>
          <li>Registre a devolutiva no prontuário.</li>
          <li>Guarde a cópia e o material de base pelo prazo que a resolução pede.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de frase:</em> “Este laudo responde à
          pergunta da escola e do pediatra. Ele não serve, por exemplo, para
          um processo judicial; se surgir essa necessidade, conversamos.”
        </p>
        <p>
          <strong>Erro comum:</strong> mandar o PDF por e-mail antes da
          devolutiva, “para os pais irem lendo”. Os pais leem sozinhos, sem
          contexto, e chegam à conversa já assustados. O guia de{" "}
          <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
            e-mail profissional para psicólogo
          </Link>{" "}
          trata do cuidado com documentos enviados por e-mail.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na devolutiva para os pais</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na devolutiva da avaliação para os pais"
            tabIndex={0}
          >
            <caption>Devolutiva para os pais: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Momento</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Preparação</td>
                <td>Roteiro a partir da pergunta da família</td>
                <td>Seguir a ordem dos testes aplicados</td>
              </tr>
              <tr>
                <td>Abertura</td>
                <td>Retrato da criança e pontos fortes</td>
                <td>Abrir com o diagnóstico sem contexto</td>
              </tr>
              <tr>
                <td>Resultados</td>
                <td>Exemplos do dia a dia, uma ideia por vez</td>
                <td>Escores, percentis e material dos testes</td>
              </tr>
              <tr>
                <td>Futuro</td>
                <td>O que pode ajudar agora e quando reavaliar</td>
                <td>Previsões taxativas sobre a vida da criança</td>
              </tr>
              <tr>
                <td>Documento</td>
                <td>Entrega na devolutiva, com protocolo</td>
                <td>Enviar o laudo antes, sem conversa</td>
              </tr>
              <tr>
                <td>Escola</td>
                <td>Documento próprio, com autorização da família</td>
                <td>Mandar o laudo completo direto à escola</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já faz devolutivas: o momento com a criança</h2>
        <p>
          Muitas psicólogas fazem, depois da conversa com os pais, uma
          devolutiva curta para a criança. Ela tem o direito de entender, na
          medida da idade, por que passou por todos aqueles encontros. A
          Resolução CFP nº 13/2022, para a psicoterapia, fala em proteção
          integral e melhor interesse da criança (art. 12), e esse espírito
          vale aqui.
        </p>
        <ul>
          <li>Combine com os pais o que será dito e com quais palavras.</li>
          <li>Use linguagem concreta e, se ajudar, um recurso lúdico ou uma história.</li>
          <li>Comece pelos pontos fortes e fale dos desafios como coisas que dá para aprender ou adaptar.</li>
          <li>Deixe espaço para a criança perguntar.</li>
        </ul>
        <p>
          Com adolescentes, a devolutiva pode ser mais próxima da conversa com
          os adultos, e alguns preferem participar dela inteira. A decisão é
          técnica e depende do caso.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Quando a avaliação envolve autismo, TDAH, dislexia ou outra
          neurodivergência, a devolutiva costuma ser um marco para a família:
          o fim de uma longa espera e o começo de outra rotina. Alguns cuidados
          fazem diferença.
        </p>
        <ul>
          <li>
            <strong>Linguagem:</strong> fale da criança inteira, com pontos fortes e desafios. O guia de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            traz alternativas para os termos mais comuns.
          </li>
          <li>
            <strong>Diagnóstico como informação:</strong> explique o que o
            diagnóstico abre (direitos, apoios na escola, terapias) e o que ele
            não define (quem a criança é e o que ela vai ser).
          </li>
          <li>
            <strong>Direitos:</strong> pais de crianças autistas costumam
            perguntar sobre escola e plano de saúde. Oriente em linhas gerais e
            indique onde buscar a informação oficial.
          </li>
          <li>
            <strong>Dados:</strong> o laudo traz dado de saúde, que a{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>{" "}
            trata como sensível. Oriente os pais a compartilhar só o necessário
            com cada destinatário.
          </li>
          <li>
            <strong>Segundo encontro:</strong> com diagnóstico novo, ele quase
            sempre vale a pena.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>{" "}
          do seu site pode explicar a devolutiva antes da primeira consulta,
          para que a família saiba desde o início como o processo termina.
        </p>
      </section>

      <section>
        <h2>Como explicar a devolutiva no seu site</h2>
        <p>
          Famílias que procuram avaliação querem saber como ela termina. Uma
          seção curta na página do serviço responde a isso e ajuda a família a
          se preparar.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> “Ao final da avaliação, marcamos uma
          devolutiva com os responsáveis. Nela eu explico os resultados em
          linguagem do dia a dia, respondo às perguntas de vocês e entrego o
          laudo. Se for útil, fazemos depois um momento com a criança.”
        </p>
        <p>
          O texto descreve o processo sem prometer resultado, como pede o art.
          20, e mostra o cuidado com a família. Quem atende como neuropsicóloga
          encontra mais ideias no guia de{" "}
          <Link href="/blog/marca-para-neuropsicologa" className="inst-link">
            marca para neuropsicóloga
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns na devolutiva</h2>
        <ul>
          <li>Conversa organizada pela ordem dos testes.</li>
          <li>Diagnóstico anunciado logo na primeira frase.</li>
          <li>Jargão, escores e percentis sem tradução.</li>
          <li>Pressa: devolutiva espremida entre dois atendimentos.</li>
          <li>Laudo enviado antes da conversa.</li>
          <li>Encaminhamentos vagos (“procurem ajuda”).</li>
          <li>Nenhum espaço para a reação dos pais.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da devolutiva</h2>
        <ul>
          <li>Perguntas da família e respostas da avaliação em uma frase cada.</li>
          <li>Formato combinado: quem vem, duração, modalidade.</li>
          <li>Abertura com o retrato da criança.</li>
          <li>Resultados traduzidos em exemplos do dia a dia.</li>
          <li>Pausa para a reação e oferta de segundo encontro.</li>
          <li>Encaminhamentos com quem, para quê e prioridade.</li>
          <li>Documento entregue na devolutiva, com protocolo assinado.</li>
          <li>Registro no prontuário e guarda da cópia.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          páginas que explicam às famílias como a avaliação acontece do
          primeiro contato à devolutiva, e cada texto revisado pelo art. 20.
          Tudo é apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se as famílias ainda chegam sem saber como funciona a sua
          avaliação, marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06} {...ext}>
              Resolução CFP nº 6/2019 comentada — elaboração de documentos
              escritos
            </a>
            , arts. 16 a 18.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES31} {...ext}>
              Resolução CFP nº 31/2022 — diretrizes para a avaliação
              psicológica e SATEPSI
            </a>
            , arts. 1º e 8º; e{" "}
            <a href={RES31_NOTICIA} {...ext}>
              notícia do CFP sobre a resolução
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 1º (g, h, i) e 13.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022 — exercício da psicoterapia
            </a>{" "}
            (DOU de 21/06/2022, cópia da ABMES), art. 12.
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
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 5º e 11.
          </li>
        </ul>
      </section>
    </>
  )
};
