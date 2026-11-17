import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const UTIL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";

export const post: Post = {
  slug: "abordagem-terapeutica-na-marca",
  title: "Abordagem terapêutica no site e na marca: como explicar TCC, psicanálise e outras linhas sem jargão",
  description:
    "Como explicar sua abordagem terapêutica no site e nas redes: TCC, psicanálise, ACT, humanista, sistêmica, em linguagem simples, sem promessa e dentro do art. 20.",
  keyword: "como explicar abordagem terapêutica no site",
  tags: ["posicionamento", "divulgacao-etica"],
  publishedAt: "2026-11-17",
  summary:
    "Para explicar a abordagem terapêutica no site, troque a definição de manual por três respostas que a pessoa entende: como são as sessões, qual é o papel dela e o que costuma ser trabalhado. A abordagem entra na marca como parte do jeito de atender, sem disputar com outras linhas e sem prometer resultado ou prazo, como pede o art. 20 do Código de Ética. Abaixo há um roteiro em seis passos, trechos fictícios para TCC, psicanálise e outras linhas e os erros que afastam quem nunca fez terapia.",
  faq: [
    {
      q: "Preciso dizer minha abordagem no site?",
      a: "Não há obrigação, mas ajuda. Muita gente pesquisa a linha antes de marcar, e quem já fez terapia costuma ter preferência. Se você atende por uma abordagem reconhecida, dizer qual é e explicar como ela aparece nas sessões ajuda a pessoa certa a escolher você. O art. 20 só pede que sejam técnicas e práticas reconhecidas pela profissão."
    },
    {
      q: "Como explicar a TCC para quem nunca fez terapia?",
      a: "Fale do que acontece na sessão: vocês olham juntos para situações atuais, para o que a pessoa pensa e faz nelas, e combinam formas de experimentar respostas diferentes entre uma sessão e outra. Evite siglas sem explicação e não prometa número de sessões para resolver o problema."
    },
    {
      q: "Como explicar a psicanálise no site sem parecer hermético?",
      a: "Descreva a experiência: a pessoa fala livremente sobre o que vier, e o trabalho é escutar, juntos, o que se repete na história e nas relações. Diga com honestidade que o ritmo é aberto e que o processo não segue um roteiro fixo. Termos como inconsciente podem aparecer, desde que explicados em uma frase."
    },
    {
      q: "Posso dizer que minha abordagem é a mais eficaz?",
      a: "Não. Dizer que uma linha é superior às outras é autopromoção em detrimento de outros profissionais e se aproxima da previsão de resultados, ambas vedadas pelo art. 20. Você pode citar que a abordagem tem pesquisas para determinadas demandas, com a fonte, sem transformar isso em garantia."
    },
    {
      q: "Atendo com mais de uma abordagem. Como explicar?",
      a: "Diga qual é a sua base e como as outras entram, sempre a partir do que a pessoa vive na sessão. Uma lista de seis siglas lado a lado confunde; uma frase como “Minha base é a TCC, e uso recursos da ACT quando o trabalho pede aceitação de emoções difíceis” explica."
    }
  ],
  cover: {
    src: "/blog/abordagem-terapeutica-na-marca/abordagem-terapeutica-na-marca-livros-empilhados-e-oculos.jpg",
    alt: "Pilha de livros sobre uma mesa de madeira com um par de óculos redondos apoiado no topo",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A página “Sobre” do seu site diz: “Atuo na abordagem da Terapia
        Cognitivo-Comportamental, com foco na reestruturação cognitiva e no
        manejo de crenças disfuncionais.” Está correto. E quase ninguém que
        procura terapia pela primeira vez entende uma palavra. A colega que
        atende pela psicanálise tem o problema inverso: ela escreve “escuta do
        sujeito do inconsciente” e acha que explicou.
      </p>
      <p>
        A resposta curta: explicar a abordagem terapêutica no site é traduzir
        a teoria em três coisas que a pessoa consegue imaginar. Como são as
        sessões, qual é o papel dela e o que costuma ser trabalhado. A sigla e
        o nome técnico podem ficar, mas depois da explicação. E a abordagem
        entra na marca como parte do seu jeito de atender, nunca como garantia
        de resultado ou como ataque a outras linhas. Este guia traz um roteiro
        em seis passos, trechos fictícios para adaptar e um quadro do que pode
        e do que evitar. Ele complementa o guia de{" "}
        <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
          posicionamento para psicólogo
        </Link>
        , que trata de para quem você atende.
      </p>

      <section>
        <h2>O que dizem as normas sobre divulgar a abordagem</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          tem três alíneas que tocam diretamente a abordagem. A alínea “c”
          diz que a psicóloga divulgará somente qualificações, atividades e
          recursos relativos a técnicas e práticas reconhecidas ou
          regulamentadas pela profissão. A alínea “e” proíbe previsão taxativa
          de resultados. A alínea “f” proíbe autopromoção em detrimento de
          outros profissionais. E a alínea “b” pede que você cite só títulos e
          qualificações que possui.
        </p>
        <p>
          Na prática: dá para dizer qual é a sua abordagem e como ela funciona.
          Não dá para dizer que ela “resolve ansiedade em 12 sessões”, que é
          “a única com comprovação científica” ou que outras linhas “só fazem a
          pessoa falar”. Formação na abordagem entra como formação, com o nome
          do curso e da instituição; não vire “especialista” sem o título
          reconhecido pelo CFP.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 01/2022
          </a>
          , sobre publicidade nas redes sociais, lembra o Princípio
          Fundamental V do Código: contribuir para o acesso da população às
          informações e ao conhecimento da ciência psicológica. Uma boa
          explicação da abordagem faz exatamente isso. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          traz exemplos práticos de divulgação para conferir o seu texto.
        </p>
      </section>

      <section>
        <h2>1. Comece pela experiência, não pela definição</h2>
        <p>
          Quem procura terapia quer saber como vai ser. A definição de manual
          responde a outra pergunta, a de um colega. Escreva primeiro o que a
          pessoa vai viver e só depois nomeie a abordagem.
        </p>
        <ol>
          <li>
            <strong>Como é uma sessão:</strong> o que acontece nos 50 minutos,
            quem fala mais, se há atividades entre as sessões.
          </li>
          <li>
            <strong>Qual é o papel da pessoa:</strong> trazer situações da
            semana, falar livremente, experimentar algo novo, participar de
            decisões sobre o rumo.
          </li>
          <li>
            <strong>O que costuma ser trabalhado:</strong> padrões de
            pensamento, a história de vida, a relação com emoções difíceis, as
            relações familiares.
          </li>
          <li>
            <strong>Só então, o nome:</strong> “Essa forma de trabalhar se
            chama Terapia Cognitivo-Comportamental, ou TCC.”
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Nas sessões, olhamos juntas para
          situações do seu dia a dia que estão pesando. Conversamos sobre o
          que você pensa e sente nelas e testamos, entre um encontro e outro,
          formas diferentes de lidar com elas. Essa forma de trabalhar se
          chama Terapia Cognitivo-Comportamental.”
        </p>
        <p>
          <strong>Erro comum:</strong> abrir a página com a história da
          abordagem e o nome do fundador. Interessa a poucos e empurra a
          informação útil para baixo. O guia de{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            página sobre mim do psicólogo
          </Link>{" "}
          mostra onde esse texto entra no site.
        </p>
      </section>

      <section>
        <h2>2. Troque cada termo técnico por uma imagem do dia a dia</h2>
        <p>
          Jargão é qualquer palavra que a pessoa precisaria pesquisar. Ele não
          precisa sumir, mas cada termo precisa vir acompanhado de uma
          tradução em uma frase.
        </p>
        <ul>
          <li>
            <strong>“Crenças disfuncionais”</strong> vira “ideias sobre você e
            sobre o mundo que aparecem no automático e nem sempre ajudam”.
          </li>
          <li>
            <strong>“Associação livre”</strong> vira “falar sobre o que vier à
            cabeça, sem precisar organizar antes”.
          </li>
          <li>
            <strong>“Flexibilidade psicológica”</strong> vira “conseguir agir
            pelo que importa para você mesmo quando a emoção está difícil”.
          </li>
          <li>
            <strong>“Sistema familiar”</strong> vira “a forma como a família
            se organiza e como cada pessoa afeta as outras”.
          </li>
        </ul>
        <p>
          Um teste simples: leia o texto para alguém de fora da psicologia e
          peça que explique de volta. O que voltar torto precisa ser
          reescrito.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia trocou “manejo
          de contingências” por “mudanças no ambiente e na rotina que ajudam
          um comportamento a acontecer com mais ou menos frequência”. A frase
          ficou mais longa e muito mais clara.
        </p>
        <p>
          <strong>Erro comum:</strong> traduzir tudo e perder a precisão.
          “Terapia que muda seus pensamentos” é simples e errado. Prefira a
          frase um pouco mais longa e fiel. O guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a achar esse equilíbrio no texto todo.
        </p>
      </section>

      <section>
        <h2>3. Use um modelo para cada linha, com honestidade sobre o ritmo</h2>
        <p>
          Cada abordagem tem um jeito de se explicar bem. Os trechos abaixo
          são fictícios, para adaptar ao seu modo de trabalhar. Nenhum promete
          prazo ou resultado.
        </p>
        <ul>
          <li>
            <strong>TCC:</strong> “Trabalhamos com o que acontece hoje. Você
            traz situações da semana, olhamos juntas para pensamentos,
            emoções e ações, e combinamos pequenos experimentos para os dias
            entre as sessões.”
          </li>
          <li>
            <strong>Psicanálise:</strong> “Você fala sobre o que quiser, sem
            roteiro. Meu trabalho é escutar com você o que se repete na sua
            história e nas suas relações. O ritmo é aberto e o processo é
            construído no tempo de cada pessoa.”
          </li>
          <li>
            <strong>ACT (Terapia de Aceitação e Compromisso):</strong> “Em vez
            de lutar contra o que você sente, trabalhamos para que emoções
            difíceis ocupem menos espaço nas suas escolhas, e você consiga agir
            pelo que é importante para você.”
          </li>
          <li>
            <strong>Abordagem centrada na pessoa (humanista):</strong> “A
            sessão é um espaço de escuta sem julgamento, em que você conduz o
            assunto e eu acompanho, ajudando a clarear o que você sente e
            quer.”
          </li>
          <li>
            <strong>Sistêmica:</strong> “Olhamos para você dentro das relações
            em que vive, como família, casal e trabalho, e para como essas
            relações se organizam. Às vezes, outras pessoas participam de
            algumas sessões.”
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> esconder o ritmo. Se a sua linha costuma
          ter processos longos, diga com tranquilidade que o tempo varia. Se
          ela trabalha com objetivos combinados, diga isso sem virar “resolva
          em 8 sessões”. Para quem trabalha com ABA, o guia de{" "}
          <Link href="/blog/marca-psicologo-aba" className="inst-link">
            marca para psicólogo ABA
          </Link>{" "}
          trata das particularidades.
        </p>
      </section>

      <section>
        <h2>4. Conte como a abordagem aparece no seu jeito de atender</h2>
        <p>
          Duas psicólogas da mesma linha atendem de formas diferentes. O que
          diferencia você na marca é como a abordagem se combina com o seu
          público, o seu ritmo e os seus valores.
        </p>
        <ol>
          <li>
            <strong>Ligue a linha ao público:</strong> “Com adolescentes, a TCC
            ajuda a transformar o que acontece na escola e em casa em situações
            concretas para pensarmos juntos.”
          </li>
          <li>
            <strong>Diga o que você valoriza na prática:</strong> clareza,
            colaboração, escuta sem pressa, participação da família.
          </li>
          <li>
            <strong>Mostre a sua formação de forma verificável:</strong> curso,
            instituição e ano, sem adjetivos.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Atendo adultos pela psicanálise há
          oito anos (dado fictício). Gosto de começar com uma ou duas conversas
          para entender o que trouxe você até aqui e combinar, juntos, a
          frequência dos encontros. Fiz formação em psicanálise no Instituto
          Exemplo (nome fictício).”
        </p>
        <p>
          <strong>Erro comum:</strong> escrever “especialista em TCC” sem o
          título de especialista reconhecido pelo CFP. Formação e pós-graduação
          podem ser citadas pelo nome; o título é outra coisa, como explica o
          guia{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            psicólogo pode se dizer especialista
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Fale de pesquisa sem transformar em promessa</h2>
        <p>
          Algumas abordagens têm muitas pesquisas para determinadas demandas,
          e é legítimo dizer isso. O limite é o ponto em que a frase vira
          garantia para quem lê.
        </p>
        <ul>
          <li>
            <strong>Pode:</strong> “A abordagem X tem pesquisas para a demanda
            Y”, com link para a revisão ou diretriz que sustenta a frase.
          </li>
          <li>
            <strong>Evite:</strong> “A TCC é comprovada para curar a ansiedade.”
            Ninguém pode prometer isso a uma pessoa específica.
          </li>
          <li>
            <strong>Evite:</strong> “A única abordagem científica.” Além de
            imprecisa, desqualifica colegas.
          </li>
          <li>
            <strong>Pode:</strong> “Cada processo é diferente; o que fazemos
            é combinar objetivos e revisá-los juntos.”
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia tinha no site
          “eficácia comprovada em 80% dos casos”, sem fonte. Ela tirou o
          número, manteve a frase sobre como as sessões funcionam e acrescentou
          um texto de blog que explica, com fontes, o que as pesquisas dizem
          e o que elas não dizem.
        </p>
        <p>
          <strong>Erro comum:</strong> citar porcentagens soltas que circulam
          em redes sociais. Número sem fonte verificável fica fora do site. As
          orientações do Google sobre{" "}
          <a href={UTIL} {...ext}>
            conteúdo útil e confiável
          </a>{" "}
          também valorizam fonte clara.
        </p>
      </section>

      <section>
        <h2>6. Leve a explicação para todo o site e para as redes</h2>
        <p>
          A explicação da abordagem não fica só na página “Sobre”. Ela aparece
          em pedaços, em vários lugares, sempre com as mesmas palavras.
        </p>
        <ol>
          <li>
            <strong>Home:</strong> uma frase, ligada ao público.
          </li>
          <li>
            <strong>Página sobre você:</strong> a explicação completa, com
            formação.
          </li>
          <li>
            <strong>Perguntas frequentes:</strong> “Qual é a sua abordagem?” e
            “Como são as sessões?”. O guia de{" "}
            <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
              perguntas frequentes no site do psicólogo
            </Link>{" "}
            mostra como escrever.
          </li>
          <li>
            <strong>Instagram:</strong> uma série curta sobre como é uma
            sessão, sem caso de paciente.
          </li>
          <li>
            <strong>Primeira conversa:</strong> a mesma explicação, em voz.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício com três
          psicólogas de linhas diferentes criou um parágrafo-padrão para cada
          uma, revisado em conjunto, e usou os três no site, nas redes e na
          mensagem de boas-vindas.
        </p>
        <p>
          <strong>Erro comum:</strong> cada canal explicar de um jeito. Quem
          leu no site e ouviu outra coisa na primeira conversa fica com dúvida.
          O guia de{" "}
          <Link href="/blog/textos-site-psicologo" className="inst-link">
            textos para site de psicólogo
          </Link>{" "}
          ajuda a organizar essas peças.
        </p>
      </section>

      <section>
        <h2>Pode e evitar ao explicar a abordagem terapêutica</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao explicar a abordagem terapêutica no site e na marca"
            tabIndex={0}
          >
            <caption>Abordagem terapêutica na marca: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nome da linha</td>
                <td>Nome completo e sigla, depois da explicação</td>
                <td>Só a sigla, sem tradução</td>
              </tr>
              <tr>
                <td>Como funciona</td>
                <td>O que acontece na sessão e o papel da pessoa</td>
                <td>Definição de manual para colegas</td>
              </tr>
              <tr>
                <td>Resultado</td>
                <td>“Combinamos objetivos e revisamos juntos”</td>
                <td>“Resolva em 8 sessões”</td>
              </tr>
              <tr>
                <td>Pesquisa</td>
                <td>Citar estudos com fonte, sem garantia</td>
                <td>“Eficácia comprovada em 80% dos casos”</td>
              </tr>
              <tr>
                <td>Outras linhas</td>
                <td>Explicar a sua sem comparar</td>
                <td>“Diferente de outras, aqui não ficamos só falando”</td>
              </tr>
              <tr>
                <td>Formação</td>
                <td>Curso, instituição e ano</td>
                <td>“Especialista” sem título reconhecido</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já explica: um texto por demanda</h2>
        <p>
          Quem já tem a explicação básica pode dar um passo além e escrever
          como a abordagem trabalha cada demanda que você mais atende. Uma
          página “Ansiedade: como trabalho” ou “Luto: como trabalho”, na sua
          linha, responde a buscas mais específicas e mostra o raciocínio
          clínico sem expor ninguém.
        </p>
        <p>
          Cada página segue a mesma lógica: como a demanda costuma aparecer na
          vida da pessoa, como as sessões se organizam na sua abordagem, o que
          você combina no começo, quando você encaminha para outro
          profissional. E nenhum prazo ou promessa. Esse conjunto ajuda quem
          busca no Google a encontrar a página que fala da dúvida dela, como
          explica o guia de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
        <p>
          Revise essas páginas uma vez por ano. Abordagens mudam, você muda, e
          o texto antigo pode não descrever mais como você atende.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas chegam com muitas siglas na cabeça: ABA,
          TCC, Denver, Floortime, integração sensorial. Algumas são abordagens
          da psicologia, outras são modelos de intervenção, outras são de outras
          profissões. Explicar com clareza o que você faz, e o que não faz,
          ajuda a família a montar a rede de cuidado sem confusão.
        </p>
        <ul>
          <li>
            <strong>Diga a sua abordagem e o que ela significa para a família:</strong>{" "}
            com que frequência os pais participam, se há orientação para casa,
            como é a conversa com a escola.
          </li>
          <li>
            <strong>Diga o que é atribuição de outra profissão</strong> e para
            quem você encaminha. O art. 20, alínea “g”, proíbe propor
            atividades privativas de outras categorias.
          </li>
          <li>
            <strong>Fale de objetivos combinados com a família</strong>, nunca
            de “recuperar” ou “normalizar” a criança.
          </li>
        </ul>
        <p>
          A linguagem conta. Termos como “tratar o autismo” ou “corrigir
          comportamentos” afastam famílias e adultos autistas. O guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa para psicólogo
          </Link>{" "}
          traz alternativas, e o de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          mostra como isso entra na marca.
        </p>
      </section>

      <section>
        <h2>Erros comuns ao explicar a abordagem terapêutica</h2>
        <ul>
          <li>Abrir com a definição técnica ou a história da linha.</li>
          <li>Usar siglas sem explicar.</li>
          <li>Prometer número de sessões ou resultado.</li>
          <li>Comparar a sua abordagem com outras para desqualificá-las.</li>
          <li>Citar porcentagens sem fonte.</li>
          <li>Chamar formação de “especialização” sem título reconhecido.</li>
          <li>Listar cinco linhas sem dizer qual é a base.</li>
          <li>Explicar de um jeito no site e de outro nas redes.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da explicação da abordagem</h2>
        <ul>
          <li>Começa por como é a sessão e qual é o papel da pessoa.</li>
          <li>Cada termo técnico tem tradução em uma frase.</li>
          <li>O ritmo do processo é descrito com honestidade.</li>
          <li>Nenhum prazo, porcentagem ou garantia.</li>
          <li>Nenhuma comparação que desqualifica outras linhas.</li>
          <li>Formação citada com curso, instituição e ano.</li>
          <li>Mesmas palavras na home, no “Sobre”, nas perguntas frequentes e nas redes.</li>
          <li>Para famílias: participação dos pais, escola e encaminhamentos explicados.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar, e a sua
          abordagem é parte dessa conversa. Daí saem o posicionamento, o tom
          de voz, a identidade visual e o site, com a explicação da sua linha
          em palavras que o seu público entende e cada texto revisado pelo
          art. 20. Tudo é apresentado em até 30 dias, com o site incluso. Veja
          a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu site ainda fala com colegas em vez de falar com quem
          procura terapia, marque uma conversa de 15 minutos.
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
            , art. 20, alíneas “b”, “c”, “e”, “f” e “g”.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 01/2022
            </a>{" "}
            — orientações sobre publicidade profissional.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={UTIL} {...ext}>
              Como criar conteúdo útil, confiável e que priorize as pessoas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
