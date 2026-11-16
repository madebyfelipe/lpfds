import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LEGENDAS = "https://www.w3.org/TR/WCAG21/#captions-prerecorded";
const ALTERNATIVA = "https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded";
const W3C_LEGENDAS = "https://www.w3.org/WAI/media/av/captions/";
const YT_LEGENDAS = "https://support.google.com/youtube/answer/6373554?hl=pt-BR";
const YT_PRIVACIDADE = "https://support.google.com/youtube/answer/157177?hl=pt-BR";
const GOOGLE_VIDEO = "https://developers.google.com/search/docs/appearance/video?hl=pt-br";
const AUTORAL = "https://www.planalto.gov.br/ccivil_03/leis/l9610.htm";

export const post: Post = {
  slug: "video-apresentacao-psicologo",
  title: "Vídeo de apresentação do psicólogo: roteiro, gravação e onde colocar no site em 7 passos",
  description:
    "Vídeo de apresentação do psicólogo: roteiro de 1 a 2 minutos, gravação com celular, legendas, onde colocar no site e o que o art. 20 não permite dizer.",
  keyword: "vídeo de apresentação psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-16",
  summary:
    "O vídeo de apresentação do psicólogo mostra, em um a dois minutos, quem você é, quem atende, como trabalha e como é o primeiro contato, para que a pessoa ouça a sua voz antes de escrever. Ele segue o art. 20 do Código de Ética como qualquer divulgação: nome completo e CRP, nada de promessa, preço como chamariz ou depoimento, e nenhuma imagem de atendimento. Abaixo estão 7 passos, do roteiro à página do site, com um roteiro fictício e cuidados de acessibilidade, como legendas.",
  faq: [
    {
      q: "O que falar num vídeo de apresentação de psicólogo?",
      a: "Seu nome, a palavra psicóloga e o CRP; quem você atende e em que momento da vida; como você trabalha, em linguagem simples; se atende online ou presencial; e como é o primeiro contato. Feche com um convite tranquilo para conversar, sem urgência e sem promessa de resultado."
    },
    {
      q: "Qual a duração ideal do vídeo de apresentação?",
      a: "Entre um e dois minutos costuma bastar para a página inicial ou a página sobre você. Vídeos mais longos podem existir em outras páginas, como uma explicação de como funciona a avaliação, mas a apresentação precisa caber na atenção de quem está decidindo se manda mensagem."
    },
    {
      q: "Posso gravar o vídeo de apresentação com o celular?",
      a: "Pode. Um celular recente, apoiado num tripé, com luz de janela de frente e um microfone de lapela simples resolve. O som costuma pesar mais do que a imagem: um vídeo com áudio limpo e imagem simples funciona melhor do que o contrário."
    },
    {
      q: "Psicólogo pode gravar vídeo no consultório?",
      a: "Pode gravar no espaço de atendimento vazio, sem pacientes, sem prontuários ou materiais de atendimento à vista e sem nada que identifique alguém. Evite enquadrar o divã ou a poltrona como se fosse uma sessão: a imagem mostra você e o ambiente, sem sugerir um atendimento."
    },
    {
      q: "Onde colocar o vídeo de apresentação no site?",
      a: "Na página sobre você ou na página inicial, perto do texto de apresentação e do botão de contato. Hospede no YouTube ou no Vimeo e incorpore no site, para não pesar o carregamento, e coloque legenda e uma transcrição curta logo abaixo."
    }
  ],
  cover: {
    src: "/blog/video-apresentacao-psicologo/video-apresentacao-psicologo-celular-no-tripe-e-notebook.jpg",
    alt: "Celular preso num tripé de mesa ao lado de um notebook, montado para gravar um vídeo de apresentação",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Uma mãe passou pelo seu Instagram, abriu o site, leu a página sobre
        você e ficou com o dedo parado em cima do botão do WhatsApp. Ela
        gostou do texto, mas ainda não sabe como você fala, se é calma, se
        explica as coisas de um jeito que o filho entenderia. É nesse momento
        que um vídeo curto de apresentação faz diferença: ela ouve a sua voz
        antes de escrever.
      </p>
      <p>
        A resposta curta é esta: um bom vídeo de apresentação de psicólogo tem
        de um a dois minutos, diz quem você é e quem atende, explica como você
        trabalha e como é o primeiro contato, e termina com um convite simples.
        Ele leva nome completo e CRP, legenda e nenhuma promessa. Abaixo estão
        7 passos, do roteiro à página do site, com um roteiro fictício. Se o
        texto da sua página ainda não está pronto, comece pelo guia da{" "}
        <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
          página sobre mim para psicólogo
        </Link>
        , porque o vídeo nasce dele.
      </p>

      <section>
        <h2>O que dizem as normas sobre o vídeo do psicólogo</h2>
        <p>
          O vídeo de apresentação é divulgação profissional e segue o art. 20
          do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          : nome completo e CRP, só títulos que você tem, só técnicas
          reconhecidas, nada de preço como propaganda, nada de previsão
          taxativa de resultados e nada de sensacionalismo. No vídeo, o CRP
          pode aparecer escrito na tela e dito em voz alta.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          reforçam que imagens de atendimento, de pacientes e depoimentos ficam
          fora. Na prática, o vídeo mostra você e o espaço vazio; nada de
          encenação de sessão, nem com atores.
        </p>
        <p>
          Duas regras de fora do conselho também contam. A música de fundo
          precisa de licença: a{" "}
          <a href={AUTORAL} {...ext}>
            Lei de Direitos Autorais
          </a>{" "}
          protege obras musicais, e música “sem copyright” de origem
          desconhecida é um risco. E o vídeo precisa de legenda para ser
          acessível: o critério 1.2.2 das{" "}
          <a href={LEGENDAS} {...ext}>
            diretrizes WCAG 2.1
          </a>{" "}
          pede legendas para todo áudio gravado em mídia sincronizada.
        </p>
      </section>

      <section>
        <h2>1. Defina para que serve o seu vídeo</h2>
        <p>
          O vídeo de apresentação tem um trabalho só: ajudar a pessoa que já
          está no seu site a decidir se manda mensagem. Ele não precisa
          explicar toda a sua abordagem nem ensinar nada.
        </p>
        <ol>
          <li>
            Escreva numa frase o que a pessoa deve sentir ao terminar: “ela
            entende como eu trabalho e se sente à vontade para escrever”.
          </li>
          <li>
            Liste as três dúvidas que mais aparecem antes da primeira conversa:
            como é a primeira sessão, se atende online, se os pais participam.
          </li>
          <li>
            Escolha uma delas para responder no vídeo; as outras ficam no
            texto da página e nas perguntas frequentes.
          </li>
          <li>
            Decida onde o vídeo vai morar antes de gravar: página sobre você,
            página inicial ou página de um serviço específico.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> uma psicóloga infantil decide
          que o vídeo existe para responder “como é a primeira conversa com os
          pais”. Todo o roteiro se organiza em torno disso, e o vídeo vai para
          a página sobre ela.
        </p>
        <p>
          <strong>Erro comum:</strong> tentar fazer um único vídeo para o site,
          o Instagram e o YouTube. Cada lugar pede formato e duração diferentes.
          Para conteúdo de canal, o post sobre{" "}
          <Link href="/blog/psicologo-youtube-e-lives" className="inst-link">
            vídeos no YouTube e lives
          </Link>{" "}
          trata das regras próprias.
        </p>
      </section>

      <section>
        <h2>2. Escreva um roteiro de um a dois minutos</h2>
        <p>
          Um minuto e meio falado equivale a algo entre 200 e 250 palavras.
          Escrever o roteiro inteiro, mesmo que você não vá ler palavra por
          palavra, evita voltas e garante que o essencial está lá.
        </p>
        <ol>
          <li>
            <strong>Abertura (10 segundos):</strong> nome, “psicóloga” e CRP.
          </li>
          <li>
            <strong>Quem você atende (20 segundos):</strong> o público e o
            momento de vida, com as palavras que ele usa.
          </li>
          <li>
            <strong>Como você trabalha (30 a 40 segundos):</strong> a abordagem
            em linguagem simples, sem jargão.
          </li>
          <li>
            <strong>Como é o começo (20 segundos):</strong> o que acontece na
            primeira conversa e se é online ou presencial.
          </li>
          <li>
            <strong>Convite (10 segundos):</strong> como entrar em contato, sem
            urgência.
          </li>
        </ol>
        <p>
          <strong>Roteiro de exemplo (fictício):</strong> “Oi, eu sou a Ana
          Ribeiro, psicóloga, CRP 00/00000. Atendo crianças de 4 a 12 anos e
          converso muito com os pais delas, principalmente famílias que estão
          começando a entender um diagnóstico de autismo ou de TDAH. Na
          terapia, a criança brinca, desenha e conversa sobre o que sente, no
          ritmo dela. Com os pais, eu faço encontros para pensar juntos como
          apoiar em casa e na escola. O primeiro passo é uma conversa só com
          vocês, adultos, para eu entender o que está acontecendo e explicar
          como trabalho. Pode ser aqui no consultório, em Campinas, ou online.
          Se fizer sentido, me chame no WhatsApp pelo botão aqui embaixo.”
        </p>
        <p>
          <strong>Erro comum:</strong> abrir com “você sofre com ansiedade e
          não aguenta mais?”. A pergunta dramática é um gancho de anúncio,
          soa sensacionalista e não diz nada sobre você. Comece pelo seu nome.
        </p>
      </section>

      <section>
        <h2>3. Prepare o lugar, a luz e o som</h2>
        <p>
          O que mais derruba um vídeo caseiro é o som, seguido da luz. Com uma
          janela, um microfone de lapela e um celular apoiado, dá para gravar
          um vídeo que transmite cuidado.
        </p>
        <ul>
          <li>
            <strong>Lugar:</strong> o espaço de atendimento vazio ou um canto
            neutro da casa, sem prontuários, agenda, materiais de atendimento ou
            desenhos de pacientes à vista.
          </li>
          <li>
            <strong>Luz:</strong> de frente para uma janela, nunca de costas.
            Luz de teto direta cria sombra nos olhos.
          </li>
          <li>
            <strong>Som:</strong> microfone de lapela no celular, ambiente com
            cortinas, tapete e porta fechada. Grave dez segundos de teste e
            ouça com fone.
          </li>
          <li>
            <strong>Enquadramento:</strong> celular na altura dos olhos, na
            horizontal para o site, com você do peito para cima.
          </li>
          <li>
            <strong>Roupa:</strong> a que você usa para atender, sem estampas
            miúdas que tremem na imagem.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> a psicóloga grava às dez da
          manhã, sentada de frente para a janela do consultório, com uma estante
          de livros desfocada ao fundo e o celular num tripé de mesa.
        </p>
        <p>
          <strong>Erro comum:</strong> enquadrar o divã ou a poltrona do
          paciente bem no centro, ou gravar como se a câmera fosse o paciente.
          A cena sugere uma sessão, e imagem de atendimento fica fora da
          divulgação. O guia de{" "}
          <Link href="/blog/fotos-do-consultorio-psicologia" className="inst-link">
            fotos do consultório de psicologia
          </Link>{" "}
          traz os mesmos cuidados para a imagem do espaço.
        </p>
      </section>

      <section>
        <h2>4. Grave em blocos e fale com uma pessoa só</h2>
        <p>
          Ninguém grava dois minutos perfeitos de uma vez. Gravar em blocos
          curtos, um para cada parte do roteiro, deixa a fala mais natural e a
          edição mais simples.
        </p>
        <ol>
          <li>
            Grave cada bloco do roteiro separado, duas ou três vezes.
          </li>
          <li>
            Fale com uma pessoa imaginária, a mãe ou o adulto que você quer
            atender, olhando para a lente.
          </li>
          <li>
            Use o roteiro como guia, não como texto decorado: diga as ideias
            com as suas palavras.
          </li>
          <li>
            Respire entre as frases. Pausas deixam a fala mais calma e ajudam
            na edição.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> a psicóloga grava cinco blocos,
          escolhe a melhor versão de cada um e junta no aplicativo de edição do
          celular. A gravação inteira leva uma manhã.
        </p>
        <p>
          <strong>Erro comum:</strong> ler o roteiro num teleprompter com os
          olhos correndo de um lado para o outro. A pessoa percebe a leitura e
          perde justamente o que veio buscar: o seu jeito de falar. Se for
          usar teleprompter, aumente a fonte e afaste o celular. A{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>{" "}
          segue a mesma lógica de buscar uma imagem natural.
        </p>
      </section>

      <section>
        <h2>5. Edite com sobriedade e coloque legendas</h2>
        <p>
          A edição do vídeo de apresentação é simples: cortar os erros, juntar
          os blocos, colocar o nome e o CRP na tela e adicionar legendas.
          Efeitos, transições e trilha forte tiram a atenção da sua fala.
        </p>
        <ul>
          <li>
            Nome completo, “psicóloga” e CRP escritos na tela nos primeiros
            segundos.
          </li>
          <li>
            Legendas fiéis à fala, revisadas à mão. A geração automática do{" "}
            <a href={YT_LEGENDAS} {...ext}>
              YouTube
            </a>{" "}
            ajuda como rascunho, mas erra nomes e termos técnicos.
          </li>
          <li>
            Música baixa, com licença, ou nenhuma música. Quem usa leitor de
            tela ou tem sensibilidade auditiva agradece.
          </li>
          <li>
            Cores e fontes da sua identidade visual nos textos da tela, com
            contraste suficiente para leitura.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> o vídeo final tem 1 minuto e 40
          segundos, uma faixa com nome e CRP no início, legendas em fonte
          grande na parte de baixo e nenhuma música.
        </p>
        <p>
          <strong>Erro comum:</strong> legendas com palavras piscando em cores
          diferentes, no estilo de vídeo viral. Para pessoas com sensibilidade
          visual, e para muitas pessoas autistas, o efeito cansa e atrapalha a
          leitura. O W3C reúne orientações sobre{" "}
          <a href={W3C_LEGENDAS} {...ext}>
            como fazer legendas acessíveis
          </a>
          , e o guia de{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          trata do resto da página.
        </p>
      </section>

      <section>
        <h2>6. Coloque o vídeo no lugar certo do site</h2>
        <p>
          O vídeo funciona perto do momento da decisão: ao lado do texto de
          apresentação e do botão de contato. Escondido numa aba “Vídeos”, ele
          quase não é visto.
        </p>
        <ol>
          <li>
            Hospede no YouTube (pode ser como{" "}
            <a href={YT_PRIVACIDADE} {...ext}>
              “não listado”
            </a>
            ) ou no Vimeo e
            incorpore no site. Arquivo de vídeo direto no site pesa e deixa a
            página lenta.
          </li>
          <li>
            Posicione na página sobre você ou na página inicial, logo depois do
            texto de apresentação.
          </li>
          <li>
            Use uma imagem de capa com o seu rosto e o seu nome, sem texto
            apelativo.
          </li>
          <li>
            Coloque abaixo do vídeo uma transcrição curta ou um resumo em texto,
            para quem não pode ouvir naquele momento e para o Google entender
            o conteúdo. O critério 1.2.3 das{" "}
            <a href={ALTERNATIVA} {...ext}>
              WCAG 2.1
            </a>{" "}
            aceita a transcrição como alternativa à mídia.
          </li>
          <li>
            Nunca deixe o vídeo começar sozinho com som.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> na página sobre a psicóloga, o
          vídeo aparece ao lado do primeiro parágrafo, com a transcrição num
          bloco que abre ao clicar em “Ler a transcrição” e o botão do
          WhatsApp logo abaixo.
        </p>
        <p>
          <strong>Erro comum:</strong> colocar o vídeo como fundo da página
          inicial, rodando sem parar. Além de pesar, o movimento contínuo
          incomoda quem tem sensibilidade a estímulos visuais. O Google explica
          em{" "}
          <a href={GOOGLE_VIDEO} {...ext}>
            boas práticas de vídeo
          </a>{" "}
          como facilitar que ele encontre o vídeo, e o guia de{" "}
          <Link href="/blog/landing-page-psicologo" className="inst-link">
            landing page para psicólogo
          </Link>{" "}
          mostra onde o vídeo cabe numa página de serviço.
        </p>
      </section>

      <section>
        <h2>7. Reaproveite o vídeo sem perder o cuidado</h2>
        <p>
          O mesmo material gravado pode virar outras peças, desde que cada uma
          continue com nome, CRP e legenda, e sem cortes que tirem frases de
          contexto.
        </p>
        <ul>
          <li>
            Um corte vertical de 30 a 60 segundos para o Instagram, fixado no
            perfil como apresentação.
          </li>
          <li>
            O áudio do bloco “como é o começo” como resposta padrão para quem
            pergunta no WhatsApp como funciona.
          </li>
          <li>
            Um quadro do vídeo como imagem da página sobre você, se a qualidade
            permitir.
          </li>
          <li>
            O roteiro em texto como base para atualizar a bio e a página sobre
            você, com a mesma voz.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> a psicóloga recorta a abertura e
          o bloco “quem eu atendo” num vídeo vertical de 45 segundos, com
          legenda e o CRP na tela, e fixa no topo do perfil.
        </p>
        <p>
          <strong>Erro comum:</strong> impulsionar o corte com uma chamada como
          “agende agora, últimas vagas da semana”. A urgência artificial e a
          sugestão de escassez esbarram no art. 20. Se for impulsionar, a
          chamada descreve quem você é e o que atende; o post sobre{" "}
          <Link href="/blog/impulsionar-post-psicologo" className="inst-link">
            impulsionar post sendo psicólogo
          </Link>{" "}
          explica o restante.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no vídeo de apresentação</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no vídeo de apresentação do psicólogo"
            tabIndex={0}
          >
            <caption>Vídeo de apresentação do psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte do vídeo</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Abertura</td>
                <td>Nome completo, “psicóloga” e CRP</td>
                <td>“Você não aguenta mais a ansiedade?”</td>
              </tr>
              <tr>
                <td>Fala</td>
                <td>Quem atende, como trabalha, como é o começo</td>
                <td>“Resultados em poucas sessões”, “a melhor da cidade”</td>
              </tr>
              <tr>
                <td>Cenário</td>
                <td>Espaço vazio, sem materiais de atendimento</td>
                <td>Encenação de sessão, divã em destaque, prontuários</td>
              </tr>
              <tr>
                <td>Som</td>
                <td>Voz limpa, música licenciada e baixa ou nenhuma</td>
                <td>Música famosa sem licença, trilha alta</td>
              </tr>
              <tr>
                <td>Legenda</td>
                <td>Revisada à mão, estável, com bom contraste</td>
                <td>Automática sem revisão, palavras piscando</td>
              </tr>
              <tr>
                <td>Convite</td>
                <td>“Se fizer sentido, me chame no WhatsApp”</td>
                <td>Preço, “primeira sessão grátis”, “últimas vagas”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem vídeo: um vídeo por serviço</h2>
        <p>
          Com o vídeo de apresentação pronto, o próximo passo é gravar vídeos
          curtos para cada serviço principal: como funciona a avaliação, como é
          o grupo de pais, como é o atendimento online. Cada um vai para a
          página do serviço e responde à dúvida mais comum daquela página.
        </p>
        <p>
          Para quem atende crianças, um vídeo “para a criança”, mostrando a sala
          vazia, os brinquedos e a profissional dizendo oi, ajuda famílias que
          preparam o filho antes da primeira vez. Ele não mostra nenhuma outra
          criança e não promete nada; só apresenta o lugar.
        </p>
        <p>
          Revise o vídeo de apresentação uma vez por ano, ou quando algo mudar:
          endereço, público, formato do atendimento. Um vídeo que diz “atendo
          só presencial” quando você já atende online confunde quem chega. E
          mantenha a mesma voz entre o vídeo e o texto: o guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a manter essa coerência.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para famílias de crianças autistas, o vídeo de apresentação tem uma
          função a mais: previsibilidade. Muitas crianças lidam melhor com o
          novo quando sabem antes como é o lugar e quem vão encontrar. Um vídeo
          curto mostrando a entrada, a sala, o lugar onde ela pode sentar e a
          sua voz pode ser parte da preparação que os pais fazem em casa.
        </p>
        <p>
          Pense também em quem assiste. Pais neurodivergentes e adultos
          autistas costumam preferir informação direta, sem rodeios e sem
          estímulos em excesso. Fala pausada, fundo neutro, sem música e
          legenda estável tornam o vídeo mais confortável para muita gente.
        </p>
        <p>
          Na linguagem, o cuidado é o de sempre: fale de acompanhar, entender e
          apoiar, e não de “tratar o autismo” ou “corrigir comportamentos”. Se
          você usa uma abordagem específica, diga qual é e explique em uma
          frase, sem prometer eficácia. Para a imagem do espaço, o guia de{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível e sensorial
          </Link>{" "}
          ajuda a decidir o que mostrar, e o de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          ajuda no roteiro.
        </p>
      </section>

      <section>
        <h2>Erros comuns no vídeo de apresentação</h2>
        <ul>
          <li>Abrir com uma pergunta dramática no lugar do seu nome.</li>
          <li>Passar de três minutos tentando explicar tudo.</li>
          <li>Esquecer o CRP na fala e na tela.</li>
          <li>Gravar com som de eco ou barulho de rua.</li>
          <li>Encenar uma sessão ou mostrar materiais de atendimento.</li>
          <li>Usar música famosa sem licença.</li>
          <li>Publicar sem legenda ou com legenda automática sem revisão.</li>
          <li>Deixar o vídeo começar sozinho com som no site.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do vídeo de apresentação</h2>
        <ul>
          <li>O vídeo tem um objetivo escrito numa frase.</li>
          <li>Roteiro de um a dois minutos, com nome, CRP, público, forma de trabalho e começo.</li>
          <li>Luz de frente, som testado com fone, cenário sem materiais de atendimento.</li>
          <li>Nome completo e CRP na tela nos primeiros segundos.</li>
          <li>Legendas revisadas e transcrição abaixo do vídeo.</li>
          <li>Hospedado no YouTube ou no Vimeo e incorporado perto do botão de contato.</li>
          <li>Nenhuma promessa, preço, depoimento ou urgência.</li>
          <li>Revisão marcada para daqui a um ano.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com a
          página sobre você pronta para receber o vídeo de apresentação e cada
          texto revisado pelo art. 20. Tudo é apresentado em até 30 dias, com o
          site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer que as famílias ouçam a sua voz antes de escrever,
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
            , art. 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={AUTORAL} {...ext}>
              Lei nº 9.610/1998 — Lei de Direitos Autorais
            </a>
            .
          </li>
          <li>
            W3C.{" "}
            <a href={LEGENDAS} {...ext}>
              WCAG 2.1, critério 1.2.2 — Legendas (pré-gravadas)
            </a>{" "}
            e{" "}
            <a href={ALTERNATIVA} {...ext}>
              critério 1.2.3 — Audiodescrição ou alternativa em mídia
            </a>
            .
          </li>
          <li>
            W3C Web Accessibility Initiative.{" "}
            <a href={W3C_LEGENDAS} {...ext}>
              Captions/Subtitles
            </a>
            .
          </li>
          <li>
            Ajuda do YouTube.{" "}
            <a href={YT_LEGENDAS} {...ext}>
              Usar a transcrição automática
            </a>{" "}
            e{" "}
            <a href={YT_PRIVACIDADE} {...ext}>
              Mudar as configurações de privacidade do vídeo
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={GOOGLE_VIDEO} {...ext}>
              Práticas recomendadas de SEO para vídeos
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
