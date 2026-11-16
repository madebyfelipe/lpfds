import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES31 = "https://ses.sp.bvs.br/wp-content/uploads/2022/12/U_RS-CFP-31_151222.pdf";
const RES06 = "https://site.cfp.org.br/wp-content/uploads/2019/09/Resolu%C3%A7%C3%A3o-CFP-n-06-2019-comentada.pdf";
const SATEPSI = "https://satepsi.cfp.org.br/";
const LEI_CIPTEA = "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13977.htm";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "divulgar-avaliacao-autismo-adulto",
  title: "Avaliação de autismo em adultos: como a psicóloga apresenta o serviço sem sensacionalismo",
  description:
    "Como divulgar avaliação de autismo em adultos: etapas, o que o laudo entrega, testes online, linguagem e o que o Código de Ética e o CFP não permitem.",
  keyword: "avaliação de autismo em adultos psicólogo",
  tags: ["neurodivergencia", "presenca-digital"],
  publishedAt: "2026-11-15",
  summary:
    "Para divulgar avaliação de autismo em adultos, explique as etapas, o que a avaliação entrega e quais são os limites dela, com nome completo e CRP e sem prometer diagnóstico. O Código de Ética proíbe previsão taxativa de resultado e divulgação sensacionalista, e a Resolução CFP nº 31/2022 exige testes com parecer favorável no SATEPSI. Quiz “descubra se você é autista” como isca não cabe.",
  faq: [
    {
      q: "Psicólogo pode dar diagnóstico de autismo em adulto?",
      a: "A psicóloga pode realizar avaliação psicológica e registrar a conclusão em laudo psicológico, seguindo a Resolução CFP nº 6/2019. Em muitos contextos, como a emissão da Carteira de Identificação da Pessoa com TEA, a lei pede relatório médico com o código da CID, por isso é comum a avaliação psicológica ou neuropsicológica compor o processo com um médico. Diga no site exatamente o que o seu serviço entrega."
    },
    {
      q: "Posso colocar um teste de autismo online no meu site?",
      a: "Não é recomendável oferecer um teste de autismo como isca. O art. 18 do Código de Ética proíbe divulgar a leigos instrumentos e técnicas psicológicas que facilitem o exercício ilegal da profissão, e um questionário de triagem solto pode gerar falsa certeza nos dois sentidos. Se quiser falar de sinais, escreva um texto informativo e convide para a conversa inicial."
    },
    {
      q: "Quanto tempo demora uma avaliação de autismo em adulto?",
      a: "Depende do caso e do protocolo de cada profissional. No site, descreva o número aproximado de encontros e o prazo usual da devolutiva no seu consultório, deixando claro que podem mudar conforme a avaliação. Não use prazo curto como argumento de venda."
    },
    {
      q: "Posso divulgar que também sou autista?",
      a: "Pode, se for uma escolha sua e não virar argumento de venda. A Nota Técnica CFP nº 1/2022 pede cuidado com as fronteiras entre o pessoal e o profissional nas redes. Contar a própria trajetória pode aproximar, mas não substitui a formação nem deve sugerir que só quem é autista avalia bem."
    },
    {
      q: "Como falar de camuflagem e diagnóstico tardio sem sensacionalismo?",
      a: "Descreva o tema com informação: muitas pessoas chegam à vida adulta sem avaliação, às vezes depois de anos tratando ansiedade ou depressão. Evite manchetes como “você pode ser autista e não sabe” e listas de sinais que convidam ao autodiagnóstico."
    }
  ],
  cover: {
    src: "/blog/divulgar-avaliacao-autismo-adulto/divulgar-avaliacao-autismo-adulto-caderno-cafe.jpg",
    alt: "Caderno em branco, caneta e xícara de café sobre mesa de madeira clara com ramos verdes",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Cada vez mais adultos procuram avaliação de autismo. Alguns chegam
        depois do diagnóstico de um filho, outros depois de anos tratando
        ansiedade sem entender por que certas coisas pesam tanto. Para a
        psicóloga ou neuropsicóloga que faz essa avaliação, a dúvida é como
        apresentar o serviço sem virar mais um perfil de “10 sinais de que
        você é autista”.
      </p>
      <p>
        A resposta curta: diga para quem é a avaliação, como ela acontece, o
        que entrega e o que não entrega, com nome completo e CRP. Não prometa
        diagnóstico, não use teste online como isca e não trate a busca da
        pessoa como drama. A seguir estão as normas, sete decisões para a
        página e as redes, uma tabela de pode e evitar e um checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          exige nome completo e número do CRP em toda
          divulgação, e proíbe previsão taxativa de resultado e divulgação
          sensacionalista. O art. 18 proíbe divulgar ou ceder a leigos
          instrumentos e técnicas psicológicas que permitam ou facilitem o
          exercício ilegal da profissão, o que pesa quando se fala de testes.
        </p>
        <p>
          A{" "}
          <a href={RES31} {...ext}>
            Resolução CFP nº 31/2022
          </a>{" "}
          define as diretrizes da avaliação psicológica e pede que os testes
          usados tenham parecer favorável no{" "}
          <a href={SATEPSI} {...ext}>
            SATEPSI
          </a>
          . A{" "}
          <a href={RES06} {...ext}>
            Resolução CFP nº 6/2019
          </a>{" "}
          regula os documentos, como laudo e relatório. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          lembra que a psicóloga “não poderá prever ou garantir resultados”, e
          a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica esses limites às redes sociais.
        </p>
        <p>
          Do lado da pessoa avaliada, a{" "}
          <a href={LEI_CIPTEA} {...ext}>
            Lei nº 13.977/2020
          </a>{" "}
          criou a Carteira de Identificação da Pessoa com TEA (Ciptea), emitida
          mediante relatório médico com o código da CID. Esse detalhe muda o
          que você pode dizer que a sua avaliação “serve para”.
        </p>
      </section>

      <section>
        <h2>1. Saiba quem está do outro lado da tela</h2>
        <p>
          O adulto que procura avaliação de autismo quase sempre já leu muito
          sobre o assunto. Ele não precisa de uma explicação básica do que é o
          espectro; precisa saber se você entende casos como o dele e como o
          processo funciona.
        </p>
        <ul>
          <li>
            <strong>Quem chegou pelo filho:</strong> pais que reconheceram em
            si traços que viram na avaliação da criança.
          </li>
          <li>
            <strong>Quem chegou pelo sofrimento:</strong> anos de tratamento
            para ansiedade, depressão ou esgotamento sem que algo encaixasse.
          </li>
          <li>
            <strong>Quem chegou por leitura:</strong> pessoas que se
            reconheceram em relatos e querem uma avaliação séria, não uma
            confirmação.
          </li>
          <li>
            <strong>Quem precisa de documento:</strong> para trabalho, estudo
            ou direitos, e quer saber o que o seu serviço entrega.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício de abertura de página:</em> “Avaliação de
          autismo para adultos que chegaram até aqui por caminhos diferentes:
          pelo diagnóstico de um filho, por anos de cansaço sem explicação ou
          por se reconhecer em outras pessoas.”
        </p>
        <p>
          O erro comum é escrever para quem nunca ouviu falar de autismo. O
          leitor sente que o texto não é para ele. O guia de{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher o nicho
          </Link>{" "}
          ajuda a definir esse público com precisão.
        </p>
      </section>

      <section>
        <h2>2. Descreva o processo em etapas</h2>
        <p>
          A pergunta mais frequente é “como funciona?”. Responder em etapas
          tira a ansiedade de quem está decidindo e mostra que existe método.
        </p>
        <ol>
          <li><strong>Conversa inicial:</strong> o que trouxe a pessoa e o que ela espera da avaliação.</li>
          <li><strong>Entrevistas:</strong> história de vida, infância, escola, trabalho, relações.</li>
          <li><strong>Informantes:</strong> se possível, conversa com familiares que conheceram a pessoa na infância.</li>
          <li><strong>Instrumentos:</strong> testes e escalas com parecer favorável no SATEPSI, quando indicados.</li>
          <li><strong>Devolutiva:</strong> encontro para explicar o que foi encontrado e os próximos passos.</li>
          <li><strong>Documento:</strong> laudo ou relatório, conforme a Resolução CFP nº 6/2019.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Em geral, a avaliação leva de quatro a
          seis encontros, e a devolutiva acontece em até três semanas depois do
          último. O número de encontros pode mudar conforme o que surgir no
          processo.” Use só os números reais do seu consultório.
        </p>
        <p>
          Evite o roteiro vago (“avaliação completa e personalizada”). Ele não
          responde nada. A estrutura de página do post sobre{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            avaliação neuropsicológica infantil no site
          </Link>{" "}
          serve de base, com os ajustes para adultos que estão aqui.
        </p>
      </section>

      <section>
        <h2>3. Diga o que a avaliação entrega e o que não entrega</h2>
        <p>
          Transparência sobre o resultado é o ponto que mais protege a
          psicóloga e a pessoa avaliada. A avaliação pode concluir que há
          indicadores compatíveis com o espectro, que não há, ou que outra
          hipótese explica melhor o quadro.
        </p>
        <ul>
          <li>Explique que o resultado não é definido antes do processo.</li>
          <li>Diga qual documento a pessoa recebe (laudo, relatório) e o que ele contém.</li>
          <li>
            Se a pessoa precisa da Ciptea, explique que a lei pede relatório
            médico e como a sua avaliação se encaixa nesse caminho.
          </li>
          <li>Se você trabalha com psiquiatras ou neurologistas, diga como é essa parceria.</li>
        </ul>
        <p>
          <em>Exemplo fictício:</em> “Ao final, você recebe um laudo
          psicológico com a conclusão da avaliação. A avaliação pode ou não
          confirmar a hipótese de autismo. Para a Carteira de Identificação da
          Pessoa com TEA, a lei pede relatório médico; quando for o caso,
          indicamos esse encaminhamento.”
        </p>
        <p>
          O erro comum é a frase “saia com seu laudo de autismo”. Ela promete
          um resultado antes da avaliação e fere o art. 20. Também evite
          sugerir que o documento “garante direitos”: ele é parte de um
          processo que não depende só de você.
        </p>
      </section>

      <section>
        <h2>4. Testes online e listas de sinais: o que não fazer</h2>
        <p>
          O atalho mais usado para captar adultos é o quiz “descubra se você é
          autista”. Ele dá cliques, mas cria problemas éticos e clínicos.
        </p>
        <ol>
          <li>
            Não publique itens de testes psicológicos; o art.
            18 do Código veda divulgar instrumentos que facilitem o uso por
            leigos.
          </li>
          <li>
            Não use questionário de triagem como isca para capturar e-mail ou
            WhatsApp.
          </li>
          <li>
            Não publique listas de sinais que convidam ao autodiagnóstico
            (“se você se identificou com 5 itens…”).
          </li>
          <li>
            Prefira textos que expliquem o que a avaliação investiga e por que
            o histórico de vida importa.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> troque “Faça o teste e descubra” por
          “Por que a avaliação de autismo em adultos olha para a infância”.
          O segundo informa, não vende certeza.
        </p>
        <p>
          O erro comum é achar que um teste gratuito é só “conteúdo”. Além da
          questão do art. 18, ele mexe com quem está fragilizado e pode
          afastar quem realmente precisa avaliar. Se a ideia é captar
          contatos, uma{" "}
          <Link href="/blog/newsletter-para-psicologo" className="inst-link">
            newsletter com consentimento
          </Link>{" "}
          é um caminho mais seguro.
        </p>
      </section>

      <section>
        <h2>5. Linguagem sem drama e sem patologizar</h2>
        <p>
          O tom da divulgação diz muito sobre como a avaliação vai ser. Adultos
          autistas costumam ser sensíveis a textos que tratam o autismo como
          tragédia, e também a textos que o tratam como moda.
        </p>
        <ul>
          <li>Use “pessoa autista” ou “adulto autista”, como a comunidade costuma preferir.</li>
          <li>Evite “portador”, “sofre de autismo” e qualquer ideia de cura.</li>
          <li>Fale de camuflagem e diagnóstico tardio como informação, não como manchete.</li>
          <li>Não romantize (“o autismo é um superpoder”) nem dramatize (“uma vida perdida”).</li>
        </ul>
        <p>
          <em>Exemplo fictício de parágrafo:</em> “Muitas pessoas chegam à
          vida adulta sem avaliação, às vezes depois de anos aprendendo a
          disfarçar o que sentem em situações sociais. A avaliação é uma forma
          de entender essa história com mais clareza.”
        </p>
        <p>
          O erro comum é o título sensacionalista, como “Você pode ser autista e
          não sabe”. Ele explora a insegurança do leitor, o que o art. 20
          desaconselha. Veja o guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          para revisar o texto todo.
        </p>
      </section>

      <section>
        <h2>6. Monte uma página que o Google e a pessoa entendam</h2>
        <p>
          Quem procura avaliação de autismo em adultos pesquisa com calma e
          compara. Uma página própria para o serviço, separada da avaliação
          infantil, responde melhor a essa busca e a quem chega por ela.
        </p>
        <ol>
          <li>Título com o serviço e a cidade, ou “online” se for o caso.</li>
          <li>Abertura que diga para quem é e como começa.</li>
          <li>As etapas, o documento entregue e os limites.</li>
          <li>Quem conduz: nome completo, CRP, formação em avaliação.</li>
          <li>Formato (presencial, online, misto) e como agendar a conversa inicial.</li>
          <li>Perguntas frequentes reais: duração, documento, Ciptea, sigilo.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de título:</em> “Avaliação de autismo em
          adultos em Belo Horizonte e online · Marta Reis, neuropsicóloga”.
        </p>
        <p>
          O erro comum é esconder o serviço dentro de uma página genérica de
          “avaliação psicológica”. A pessoa não acha, e o Google também não.
          O guia de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          mostra como estruturar títulos e páginas, e o de{" "}
          <Link href="/blog/marca-para-neuropsicologa" className="inst-link">
            marca para neuropsicóloga
          </Link>{" "}
          trata da identidade de quem faz avaliação.
        </p>
      </section>

      <section>
        <h2>7. Redes sociais, relato pessoal e sigilo</h2>
        <p>
          Nas redes, o conteúdo sobre autismo adulto atrai muita gente. A
          psicóloga pode participar desse espaço informando, sem transformar o
          perfil em vitrine de diagnósticos.
        </p>
        <ul>
          <li>Explique conceitos e o processo de avaliação em linguagem simples.</li>
          <li>Nunca conte casos, mesmo “mudando detalhes”: em nichos pequenos, as pessoas se reconhecem.</li>
          <li>Não responda “parece que você é autista” em comentários ou direct.</li>
          <li>
            Se você for autista e quiser contar, conte como escolha pessoal, sem
            usar isso como prova de competência.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício de resposta a comentário:</em> “Obrigada por
          contar um pouco da sua história. Só uma avaliação consegue olhar para
          isso com cuidado. Se quiser, as informações sobre como funciona estão
          no link do perfil.”
        </p>
        <p>
          O erro comum é o post “recebi hoje uma paciente de 42 anos que…”.
          Mesmo sem nome, ele expõe a pessoa e fere o sigilo (art. 9º). Para
          respostas-modelo, veja{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            como responder comentários e direct
          </Link>
          . Dados de quem preenche formulário no site seguem a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>
          , com finalidade clara e consentimento.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação de avaliação de autismo em adultos</h2>
        <div className="inst-blog__table" role="region" aria-label="Divulgação de avaliação de autismo em adultos: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Divulgação de avaliação de autismo em adultos: o que pode e o que evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Resultado</td>
                <td>Explicar que a avaliação pode ou não confirmar a hipótese</td>
                <td>“Saia com seu laudo de autismo”</td>
              </tr>
              <tr>
                <td>Testes</td>
                <td>Dizer que usa instrumentos com parecer favorável no SATEPSI</td>
                <td>Quiz online ou itens de teste publicados</td>
              </tr>
              <tr>
                <td>Documento</td>
                <td>Descrever o laudo e a relação com o relatório médico</td>
                <td>Sugerir que o laudo garante direitos</td>
              </tr>
              <tr>
                <td>Tom</td>
                <td>Informar sobre camuflagem e diagnóstico tardio</td>
                <td>“Você pode ser autista e não sabe”</td>
              </tr>
              <tr>
                <td>Prazo</td>
                <td>Informar o número usual de encontros e da devolutiva</td>
                <td>“Diagnóstico em uma semana” como chamariz</td>
              </tr>
              <tr>
                <td>Redes</td>
                <td>Explicar conceitos e o processo</td>
                <td>Contar casos ou sugerir diagnóstico em comentário</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já faz avaliação: alinhe o encaminhamento</h2>
        <p>
          Quem já atende adultos sabe que boa parte da procura chega por
          indicação de psiquiatras, terapeutas e de outros pacientes. Vale
          tornar esse caminho claro para os dois lados.
        </p>
        <p>
          Prepare uma página curta para profissionais, explicando o que a sua
          avaliação inclui, o que o documento traz e como o profissional que
          encaminhou recebe a devolutiva, sempre com o consentimento da pessoa
          avaliada. Combine com médicos parceiros como fica o relatório médico
          quando a pessoa precisa da Ciptea. E revise a cada semestre se o
          prazo informado no site ainda é o real; fila maior que a anunciada é
          a reclamação mais comum nesse serviço. O post sobre{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria com pediatras
          </Link>{" "}
          traz um roteiro de conversa que se adapta a psiquiatras.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Se você atende crianças autistas, a avaliação de adultos pode chegar
          sem ser anunciada: é a mãe ou o pai que, no meio da avaliação do
          filho, se reconhece em vários pontos. Esse momento pede cuidado
          redobrado.
        </p>
        <ul>
          <li>
            <strong>Não ofereça avaliação ao responsável no meio do processo da
            criança.</strong> Se ele perguntar, explique como funciona e, se
            for o caso, indique outra profissional para evitar conflito de
            papéis.
          </li>
          <li>
            <strong>Tenha um texto pronto</strong> no site para pais que querem
            entender a própria história, com a mesma linguagem cuidadosa.
          </li>
          <li>
            <strong>Mostre que a família inteira é bem-vinda,</strong> sem
            transformar isso em pacote ou desconto familiar, que esbarra no
            art. 20.
          </li>
        </ul>
        <p>
          Para comunicar o atendimento infantil, o guia de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          complementa este.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Prometer laudo ou diagnóstico antes da avaliação.</li>
          <li>Usar quiz de autismo como isca para captar contatos.</li>
          <li>Publicar listas de sinais que levam ao autodiagnóstico.</li>
          <li>Contar casos de pacientes nas redes, mesmo sem nome.</li>
          <li>Esconder o serviço numa página genérica de avaliação.</li>
          <li>Informar prazo que o consultório não cumpre.</li>
          <li>Títulos que exploram a insegurança do leitor.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da divulgação</h2>
        <ul>
          <li>Toda peça tem nome completo, psicóloga e CRP.</li>
          <li>A página descreve as etapas, o documento e os limites.</li>
          <li>Está claro que a avaliação pode ou não confirmar a hipótese.</li>
          <li>A relação com o relatório médico e a Ciptea está explicada.</li>
          <li>Nenhum teste, quiz ou item de instrumento publicado.</li>
          <li>Linguagem revisada: sem “portador”, “sofre de” ou cura.</li>
          <li>Prazos e número de encontros conferidos com a agenda real.</li>
          <li>Formulário do site com finalidade clara e consentimento.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem
          o posicionamento, a forma de apresentar cada serviço, a identidade
          visual e o site, revisados pelo art. 20. Tudo é apresentado em até
          30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a avaliação de adultos ainda não tem uma página que explique o
          processo, marque uma conversa de 15 minutos.
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
            , arts. 9º, 18 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES31} {...ext}>
              Resolução CFP nº 31/2022
            </a>{" "}
            — diretrizes para a avaliação psicológica e SATEPSI (cópia do
            Diário Oficial no portal BVS da Secretaria da Saúde de SP).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06} {...ext}>
              Resolução CFP nº 6/2019 comentada
            </a>{" "}
            — documentos escritos produzidos pela psicóloga.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={SATEPSI} {...ext}>
              Sistema de Avaliação de Testes Psicológicos (SATEPSI)
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_CIPTEA} {...ext}>
              Lei nº 13.977/2020 (Lei Romeo Mion) — Carteira de Identificação
              da Pessoa com Transtorno do Espectro Autista
            </a>
            .
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
