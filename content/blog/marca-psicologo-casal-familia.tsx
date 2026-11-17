import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ESPECIALISTA = "https://site.cfp.org.br/servicos/titulo-de-especialista/";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";

export const post: Post = {
  slug: "marca-psicologo-casal-familia",
  title: "Marca para psicólogo de casal e família: posicionamento, nome, visual e site em 7 passos",
  description:
    "Marca para psicólogo de casal e família: público, texto para duas pessoas, nome e visual neutros e site, sem prometer salvar a relação (art. 20).",
  keyword: "marca para psicólogo de casal e família",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-17",
  summary:
    "A marca de quem atende casais e famílias precisa falar com mais de uma pessoa ao mesmo tempo, e muitas vezes com pessoas que discordam entre si. Por isso ela funciona melhor quando é neutra entre as partes, explica como o atendimento conjunto acontece e não promete salvar relação nenhuma. Abaixo há 7 passos, do posicionamento ao site, com exemplos fictícios e os limites do art. 20 do Código de Ética.",
  faq: [
    {
      q: "Psicólogo pode se dizer especialista em terapia de casal?",
      a: "Só se tiver o título de especialista concedido pelo CFP na área correspondente. O art. 20, alínea b, do Código de Ética permite citar apenas títulos e qualificações que você possui. Sem o título, descreva a formação real (por exemplo, o curso de formação em terapia familiar que você fez) e diga que atende casais e famílias."
    },
    {
      q: "Como divulgar terapia de casal sem prometer salvar o relacionamento?",
      a: "Fale do processo, não do desfecho. Explique que a terapia ajuda o casal a entender o que está acontecendo e a conversar sobre decisões, inclusive a de seguir junto ou não. Frases como “salve seu casamento” ou “reconquiste seu parceiro” são previsão de resultado, vetada pelo art. 20, alínea e."
    },
    {
      q: "Que cores usar na marca de terapia de casal e família?",
      a: "Não existe cor certa por especialidade. O que importa é que a paleta seja legível, combine com o tom de voz e não pareça puxar para um dos lados, como tons associados só a romance. Neutros quentes com uma cor de destaque costumam funcionar bem, mas a escolha vem do posicionamento."
    },
    {
      q: "Terapia de casal online pode ser divulgada?",
      a: "Pode. O atendimento por tecnologias digitais é regulado pela Resolução CFP nº 9/2024. Na divulgação, explique como funciona a sessão com duas ou mais pessoas na chamada, que recursos você usa para proteger o sigilo e o que acontece se cada parceiro estiver num lugar diferente."
    }
  ],
  cover: {
    src: "/blog/marca-psicologo-casal-familia/marca-psicologo-casal-familia-poltronas-e-sofa-em-sala-clara.jpg",
    alt: "Duas poltronas cinza lado a lado e um sofá claro com almofadas em uma sala iluminada, com uma planta sobre a mesa de centro",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Uma mensagem chega no WhatsApp: “Oi, queria marcar terapia de casal,
        mas meu marido ainda não sabe se quer ir”. Outra pessoa pergunta se
        você atende “a família toda ou só a mãe”. A terceira quer saber se você
        vai “dizer quem está certo”. Quem atende casais e famílias conhece essas
        conversas, e muitas vezes a marca do consultório não ajuda a
        respondê-las antes do primeiro contato.
      </p>
      <p>
        A resposta curta é esta: a marca para psicólogo de casal e família
        precisa ser clara para mais de uma pessoa ao mesmo tempo. Ela mostra
        para quem é o atendimento, como funciona a sessão conjunta e o que
        acontece quando um dos lados ainda hesita, com um tom que não toma
        partido e sem prometer salvar a relação. Este guia percorre 7 passos:
        público, mensagem, nome, visual, site, conteúdo e indicações. Se você
        está começando a pensar em posicionamento, o guia de{" "}
        <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
          posicionamento para psicólogo
        </Link>{" "}
        dá a base.
      </p>

      <section>
        <h2>O que dizem as normas sobre a divulgação de terapia de casal e família</h2>
        <p>
          O art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          vale igual para quem atende uma pessoa ou um sistema familiar: nome
          completo e CRP em toda peça (alínea a), só títulos que você possui
          (b), só práticas reconhecidas pela profissão (c), nada de preço como
          propaganda (d), nada de previsão taxativa de resultado (e), nada de
          autopromoção contra colegas (f) e nada de sensacionalismo (h).
        </p>
        <p>
          Dois pontos pesam mais nesse nicho. O primeiro é a alínea e: a busca
          por terapia de casal costuma vir com a esperança de “salvar” a
          relação, e é tentador escrever para essa esperança. O segundo é o
          sigilo (art. 9º), que fica mais complexo quando há várias pessoas na
          sala. Para crianças e adolescentes atendidos com a família, o art. 8º
          pede autorização de ao menos um responsável.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica essas regras às redes sociais, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          traz exemplos práticos do que cabe e do que não cabe. Título de
          especialista em psicologia clínica ou em outra área só aparece se foi
          concedido, conforme as regras do{" "}
          <a href={ESPECIALISTA} {...ext}>
            registro de especialista do CFP
          </a>
          .
        </p>
      </section>

      <section>
        <h2>1. Defina quem você atende dentro de “casal e família”</h2>
        <p>
          “Casal e família” cobre públicos muito diferentes. A marca fica mais
          clara quando você diz quais deles atende e em que momento da vida.
        </p>
        <ol>
          <li>
            <strong>Liste os formatos.</strong> Casais, famílias com filhos
            pequenos, famílias com adolescentes, pais separados que dividem a
            guarda, famílias recompostas.
          </li>
          <li>
            <strong>Marque os momentos.</strong> Chegada de um filho, um
            diagnóstico na família, mudança de cidade, separação, cuidado de um
            familiar idoso.
          </li>
          <li>
            <strong>Escolha um foco para a comunicação.</strong> Você pode
            atender todos, mas a mensagem principal fala com um ou dois.
          </li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: uma psicóloga em Belo Horizonte percebe que
          a maioria das famílias que procura por ela tem um filho que recebeu
          diagnóstico recente. Ela mantém o atendimento a casais, mas a home do
          site passa a falar primeiro com essas famílias.
        </p>
        <p>
          <strong>Erro comum</strong>: listar “atendo casais, famílias,
          crianças, adolescentes, adultos e idosos”. Quem lê não se reconhece em
          nenhum. O post sobre{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher nicho na psicologia
          </Link>{" "}
          ajuda a fazer o recorte sem fechar portas.
        </p>
      </section>

      <section>
        <h2>2. Escreva para duas pessoas ao mesmo tempo</h2>
        <p>
          Na terapia de casal, quem pesquisa e manda a mensagem raramente é a
          única pessoa que decide. A outra parte vai ler o site depois, às vezes
          desconfiada. O texto precisa acolher as duas.
        </p>
        <ul>
          <li>
            Use “vocês” e “o casal”, e evite textos que pareçam escritos para
            quem se sente prejudicado.
          </li>
          <li>
            Responda à dúvida de quem hesita: “e se só um de nós quiser vir?”.
          </li>
          <li>
            Diga que a terapia não serve para decidir quem tem razão.
          </li>
          <li>
            Explique que separar ou continuar é decisão do casal, e que a
            terapia acompanha as duas possibilidades.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “É comum que um dos dois chegue com mais
          vontade do que o outro. Na primeira conversa, cada um pode dizer o que
          espera, e combinamos juntos se faz sentido seguir.”
        </p>
        <p>
          <strong>Erro comum</strong>: posts do tipo “5 sinais de que seu
          parceiro não te valoriza”. Eles atraem cliques de uma das partes e
          afastam a outra, que vai ler o perfil antes da primeira sessão. O guia
          de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a achar o registro certo.
        </p>
      </section>

      <section>
        <h2>3. Explique como funciona a sessão conjunta</h2>
        <p>
          A maioria das pessoas nunca fez terapia em dupla ou em família e não
          sabe o que esperar. Uma explicação simples reduz o medo do primeiro
          encontro e filtra expectativas.
        </p>
        <ol>
          <li>Quem participa da primeira sessão e quem pode entrar depois.</li>
          <li>Se há encontros individuais além dos conjuntos e como isso é combinado.</li>
          <li>Como você trata o que alguém conta em particular (sigilo entre as partes).</li>
          <li>Duração, frequência e formato (presencial ou online).</li>
          <li>O que acontece se o casal decidir se separar durante o processo.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: um bloco “Como é a primeira sessão” com
          quatro frases curtas e um quadro “Combinados sobre sigilo”, que diz
          que o que é falado em encontro individual só é levado ao conjunto com
          acordo de quem falou.
        </p>
        <p>
          <strong>Erro comum</strong>: deixar a explicação só para a conversa no
          WhatsApp. A pessoa que hesita não vai mandar mensagem, mas vai ler o
          site. O guia de{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>{" "}
          mostra como organizar essas respostas.
        </p>
      </section>

      <section>
        <h2>4. Escolha um nome que não pareça tomar partido</h2>
        <p>
          O nome do consultório é lido pelas duas partes e às vezes pelos
          filhos. Nomes que falam de “reconquista”, “amor eterno” ou
          “resgate” sugerem um resultado e soam como lado.
        </p>
        <ul>
          <li>
            Seu nome completo continua sendo a base, porque o art. 20 o exige em
            toda divulgação.
          </li>
          <li>
            Se quiser um nome fantasia, prefira palavras sobre conversa,
            vínculo, casa ou percurso, sem promessa.
          </li>
          <li>
            Confira se o nome está livre como marca e como domínio antes de
            imprimir qualquer coisa.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: entre “Reconecta Casais” e “Ana Prado ·
          Psicologia de Casal e Família”, a segunda é mais clara, não promete e
          funciona para quem chega já separado.
        </p>
        <p>
          <strong>Erro comum</strong>: usar no nome um termo de abordagem que o
          público não conhece. “Sistêmica” pode estar no texto do site; no nome,
          confunde. O guia de{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>{" "}
          tem um roteiro de teste.
        </p>
      </section>

      <section>
        <h2>5. Monte uma identidade visual neutra e acolhedora</h2>
        <p>
          A identidade visual de quem atende casais e famílias deve parecer um
          espaço seguro para todos que entram, sem estética de casamento nem de
          consultório infantil.
        </p>
        <ul>
          <li>
            <strong>Símbolos.</strong> Evite corações, alianças, dois rostos de
            perfil e árvores genealógicas. Formas abstratas, linhas que se
            cruzam ou só a tipografia funcionam melhor.
          </li>
          <li>
            <strong>Cores.</strong> Uma base neutra, com uma cor de destaque
            que tenha contraste suficiente para leitura.
          </li>
          <li>
            <strong>Fotos.</strong> Você, o consultório vazio, objetos. Nada de
            casal se abraçando em banco de imagem nem família de comercial.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: um logotipo só tipográfico, com o nome da
          psicóloga e a linha “Psicologia de Casal e Família”, em cinza-escuro
          com um detalhe terracota, aplicado no site, no cartão e na placa.
        </p>
        <p>
          <strong>Erro comum</strong>: escolher um símbolo que conta uma
          história de final feliz. Para quem chega no meio de uma separação,
          ele soa como cobrança. Veja mais no guia de{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Organize o site pelas perguntas de cada formato</h2>
        <p>
          O site de quem atende casais e famílias funciona melhor com uma
          página para cada formato, porque as dúvidas mudam muito entre eles.
        </p>
        <ol>
          <li><strong>Home</strong>: para quem é, como começa, botão de contato.</li>
          <li><strong>Terapia de casal</strong>: primeira sessão, sigilo, “e se um não quiser”.</li>
          <li><strong>Terapia familiar</strong>: quem participa, filhos pequenos, adolescentes.</li>
          <li><strong>Sobre</strong>: formação real, abordagem em linguagem simples, CRP.</li>
          <li><strong>Atendimento online</strong>: se houver, como funciona com duas ou mais pessoas na chamada.</li>
        </ol>
        <p>
          Para o online, a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          pede que o contrato informe os recursos tecnológicos usados e como
          eles protegem o sigilo (art. 7º). Isso pode virar um parágrafo da
          página.
        </p>
        <p>
          <em>Exemplo fictício</em>: na página de terapia de casal, um bloco
          “Quando um dos dois ainda não decidiu” com três frases e um botão
          “Mandar mensagem para combinar a primeira conversa”.
        </p>
        <p>
          <strong>Erro comum</strong>: uma página única “Serviços” com tudo
          misturado. O guia de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços para psicólogo
          </Link>{" "}
          mostra como separar.
        </p>
      </section>

      <section>
        <h2>7. Produza conteúdo e cuide das indicações sem expor ninguém</h2>
        <p>
          Conteúdo para casais e famílias atrai muita gente, mas também muitos
          comentários pessoais. Planeje temas que informam sem virar consultório
          aberto nos comentários.
        </p>
        <ul>
          <li>
            Temas que funcionam: como é a primeira sessão, quando procurar
            terapia de casal, como falar com os filhos sobre uma mudança na
            família, diferença entre terapia de casal e mediação.
          </li>
          <li>
            Responda dúvidas gerais em público e convide para conversa privada
            quando o comentário traz detalhes pessoais.
          </li>
          <li>
            Nunca use histórias de casais atendidos, nem “inspiradas em casos
            reais”.
          </li>
          <li>
            Para indicações de advogados de família e mediadores, ofereça
            informação sobre o seu trabalho, nunca comissão (art. 2º, alínea p).
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: um carrossel “O que acontece na primeira
          sessão de terapia de casal”, com seis telas e o CRP na última, levando
          para a página do site.
        </p>
        <p>
          <strong>Erro comum</strong>: responder nos comentários a uma pessoa
          que conta a briga da véspera. O post sobre{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            como responder comentários e direct
          </Link>{" "}
          traz modelos.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na marca de psicólogo de casal e família</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na marca de psicólogo de casal e família"
            tabIndex={0}
          >
            <caption>Marca para psicólogo de casal e família: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte da marca</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mensagem</td>
                <td>“Um espaço para o casal conversar sobre o que está difícil”</td>
                <td>“Salve seu casamento” ou “reconquiste seu amor”</td>
              </tr>
              <tr>
                <td>Título</td>
                <td>Formação real em terapia familiar, com nome do curso</td>
                <td>“Especialista em casais” sem título concedido pelo CFP</td>
              </tr>
              <tr>
                <td>Nome</td>
                <td>Seu nome + “Psicologia de Casal e Família”</td>
                <td>Nomes de resgate, reconquista ou final feliz</td>
              </tr>
              <tr>
                <td>Visual</td>
                <td>Tipografia, formas abstratas, consultório vazio</td>
                <td>Corações, alianças, casal de banco de imagem</td>
              </tr>
              <tr>
                <td>Conteúdo</td>
                <td>Como funciona a terapia, quando procurar</td>
                <td>Listas que culpam um dos parceiros, casos “reais”</td>
              </tr>
              <tr>
                <td>Indicações</td>
                <td>Material informativo para advogados e mediadores</td>
                <td>Comissão ou porcentagem por encaminhamento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem marca: ajustes que fazem diferença</h2>
        <p>
          Se a marca já existe e funciona, três ajustes costumam render mais do
          que um redesenho completo.
        </p>
        <ul>
          <li>
            <strong>Revisar o texto pelo olhar de quem hesita.</strong> Peça a
            alguém de confiança para ler o site como “a parte que não queria
            vir” e anote o que soa como lado.
          </li>
          <li>
            <strong>Separar casal e família em páginas próprias.</strong> Isso
            ajuda a pessoa e ajuda o Google a entender cada busca.
          </li>
          <li>
            <strong>Atualizar a parte online.</strong> Muitos sites ainda citam
            o cadastro e-Psi, que deixou de existir com a Resolução CFP nº
            9/2024.
          </li>
        </ul>
        <p>
          Se os ajustes não bastam e a marca não representa mais o seu trabalho,
          o guia de{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding de consultório de psicologia
          </Link>{" "}
          mostra quando vale recomeçar.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Um diagnóstico de autismo ou TDAH costuma mexer com o casal e com a
          família inteira: divisão de tarefas, rotina de terapias, conversa com
          avós, irmãos que se sentem de lado. Se você atende esse momento, a
          marca pode dizer isso com clareza.
        </p>
        <ul>
          <li>
            Fale do apoio ao casal e à família, sem colocar a criança como
            “causa” do problema.
          </li>
          <li>
            Explique como você se articula com a equipe que atende a criança,
            com autorização dos responsáveis.
          </li>
          <li>
            Use linguagem respeitosa sobre neurodivergência, que as famílias e
            adultos autistas vão ler.
          </li>
          <li>
            Mostre que irmãos e avós também podem participar quando faz
            sentido.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Atendo casais e famílias que estão se
          reorganizando depois do diagnóstico de um filho. A ideia é ter um
          espaço para conversar sobre a rotina, as decisões e o cansaço, junto
          com o trabalho da equipe que acompanha a criança.”
        </p>
        <p>
          O guia de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogos que atendem autismo e neurodivergência
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          aprofundam esse ponto.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Prometer salvar, curar ou “reconectar” o relacionamento.</li>
          <li>Dizer-se especialista sem título concedido pelo CFP.</li>
          <li>Texto que parece escrito só para uma das partes.</li>
          <li>Símbolos de romance que afastam quem está se separando.</li>
          <li>Histórias de casais atendidos, mesmo com nomes trocados.</li>
          <li>Uma página única misturando casal, família e individual.</li>
          <li>Esquecer o CRP no perfil, no cartão ou no rodapé do site.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da marca de casal e família</h2>
        <ul>
          <li>Público e momentos de vida definidos, com um foco na mensagem.</li>
          <li>Texto escrito para “vocês”, com resposta para quem hesita.</li>
          <li>Explicação da sessão conjunta e dos combinados de sigilo.</li>
          <li>Nome sem promessa e livre como marca e domínio.</li>
          <li>Visual neutro, sem símbolos de romance.</li>
          <li>Páginas separadas para casal e para família.</li>
          <li>Parte online atualizada para a Resolução CFP nº 9/2024.</li>
          <li>Nome completo e CRP em todas as peças.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz que fala com as duas partes, a identidade
          visual e o site, com páginas para casal e família revisadas pelo art.
          20. Tudo é apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua marca ainda parece falar com só um lado do casal, marque
          uma conversa de 15 minutos.
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
            , arts. 2º, 8º, 9º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            — exercício profissional mediado por tecnologias digitais, art. 7º.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={ESPECIALISTA} {...ext}>
              Título de especialista
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>{" "}
            (cartilha, abril de 2026).
          </li>
        </ul>
      </section>
    </>
  )
};
