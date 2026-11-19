import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA_AT = "https://transparencia.cfp.org.br/legislacao/nota-tecnica-cfp-no-44-2025/";
const NOTA_AT_NOTICIA =
  "https://site.cfp.org.br/cfp-publica-nota-tecnica-sobre-a-atuacao-da-psicologia-no-acompanhamento-terapeutico/";
const BERENICE = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const LBI = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "acompanhante-terapeutico-divulgar",
  title: "Acompanhante terapêutico para autismo: como a psicóloga divulga o AT com ética",
  description:
    "Acompanhante terapêutico para autismo: como a psicóloga explica o AT, separa do apoio escolar, monta a página do serviço e divulga dentro do art. 20.",
  keyword: "acompanhante terapêutico para autismo",
  tags: ["neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-17",
  summary:
    "A psicóloga que atua como acompanhante terapêutico (AT) de pessoas autistas divulga melhor quando explica o que o AT faz, onde acontece (casa, escola, rua), como se articula com a equipe e com a família, e o que ele não é, como o profissional de apoio escolar. O CFP publicou em 2025 a Nota Técnica nº 44, que descreve a prática; a divulgação segue o art. 20 do Código de Ética, sem promessa de resultado, preço como chamariz ou imagem que exponha a pessoa acompanhada. Abaixo há um passo a passo com exemplos fictícios.",
  faq: [
    {
      q: "Psicólogo pode trabalhar como acompanhante terapêutico?",
      a: "Pode. A Nota Técnica CFP nº 44/2025 trata justamente da prática da Psicologia no acompanhamento terapêutico e descreve o AT como uma função exercida por diferentes profissionais de saúde, entre eles psicólogas e psicólogos. Quando a psicóloga atua como AT, vale o Código de Ética inteiro, inclusive o art. 20 na divulgação."
    },
    {
      q: "Qual a diferença entre acompanhante terapêutico e profissional de apoio escolar?",
      a: "O profissional de apoio escolar, previsto na Lei Brasileira de Inclusão, apoia a criança na escola em atividades como alimentação, higiene, locomoção e participação nas atividades escolares. O acompanhante terapêutico é uma intervenção clínica, feita por profissional de saúde, que pode acontecer na escola, em casa ou em outros espaços, ligada a um projeto terapêutico. Explicar essa diferença no site evita expectativas erradas da família e da escola."
    },
    {
      q: "Onde acontece o acompanhamento terapêutico?",
      a: "Nos espaços da vida cotidiana da pessoa: casa, escola, rua, transporte, serviços de saúde e de cultura. A Nota Técnica do CFP descreve o AT como uma clínica que acontece fora do consultório, no contexto real de vida, e por isso a divulgação deve mostrar como a psicóloga cuida do sigilo nesses espaços."
    },
    {
      q: "O plano de saúde cobre acompanhante terapêutico para autismo?",
      a: "Depende do contrato, da indicação e das decisões mais recentes sobre o tema, que mudam com frequência. Na divulgação, evite prometer cobertura. Explique como funciona o seu atendimento particular, se você emite recibo para reembolso e oriente a família a consultar a operadora."
    },
    {
      q: "Posso postar fotos do meu trabalho como AT nas redes?",
      a: "Não com a pessoa acompanhada. Fotos de criança atendida, da escola dela ou de situações do acompanhamento expõem quem você atende e ferem o sigilo e o art. 20. Prefira imagens suas, de objetos, de espaços sem pessoas e textos que expliquem o trabalho."
    }
  ],
  cover: {
    src: "/blog/acompanhante-terapeutico-divulgar/acompanhante-terapeutico-divulgar-calcada-arborizada-em-parque-da-cidade.jpg",
    alt: "Calçada larga e arborizada de um parque urbano ao entardecer, com prédios ao fundo e nenhuma pessoa, lembrando os lugares do dia a dia onde acontece o acompanhamento terapêutico",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você trabalha como acompanhante terapêutico de crianças autistas. Passa
        a semana entre a casa de uma família, o pátio de uma escola e a praça
        onde treina, com outro menino, o caminho até a padaria. Quando alguém
        pergunta o que você faz, a resposta sai longa, e a família que chega
        pelo Instagram costuma achar que você é a “AT da escola”, paga pela
        prefeitura, ou uma babá com formação.
      </p>
      <p>
        A resposta curta é esta: a divulgação do acompanhante terapêutico para
        autismo funciona quando explica, em linguagem simples, o que o AT faz,
        onde acontece, como se liga à equipe e à família e o que ele não é.
        Desde dezembro de 2025, você tem um documento oficial para se apoiar, a
        Nota Técnica CFP nº 44/2025. Este guia mostra como usar essa base para
        montar a página do serviço, escolher as palavras, falar com escolas e
        terapeutas e aparecer no Google, sempre dentro do art. 20. Se você
        atende em consultório e quer ver a marca inteira para esse público,
        leia também o guia de{" "}
        <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
          marca para psicólogos que atendem autismo e neurodivergência
        </Link>
        .
      </p>

      <section>
        <h2>O que dizem as normas sobre o acompanhamento terapêutico</h2>
        <p>
          O CFP publicou a{" "}
          <a href={NOTA_AT} {...ext}>
            Nota Técnica nº 44/2025
          </a>
          , sobre a prática da Psicologia no acompanhamento terapêutico. Segundo
          a{" "}
          <a href={NOTA_AT_NOTICIA} {...ext}>
            notícia do próprio Conselho
          </a>
          , o documento define o AT como um dispositivo clínico-político, uma
          “clínica sem muros” que acontece na casa, na escola, na rua, no
          transporte e em serviços de saúde e de cultura. Ele não se limita a
          uma abordagem teórica e não é uma profissão isolada: é uma função
          exercida por diferentes profissionais de saúde, entre eles psicólogas.
        </p>
        <p>
          A nota pede atuação alinhada ao Código de Ética, ao SUS e ao cuidado
          em liberdade, com supervisão, trabalho em rede com a equipe e a
          família e respeito à autonomia da pessoa acompanhada. Entre os
          desafios, cita os limites do vínculo (para não virar amizade) e o
          cuidado com sigilo, consentimento e segurança no dia a dia.
        </p>
        <p>
          Na divulgação, vale o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          : nome completo e CRP em toda peça, só títulos que você tem, nada de
          preço como propaganda, nada de previsão taxativa de resultado, nada de
          autopromoção contra colegas e nada de sensacionalismo. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica as mesmas regras às redes sociais. Para crianças, o art. 8º
          exige autorização de ao menos um responsável, e o art. 13 diz que aos
          responsáveis se comunica o estritamente essencial.
        </p>
      </section>

      <section>
        <h2>1. Explique o que o AT faz antes de dizer como você trabalha</h2>
        <p>
          A primeira tarefa da sua comunicação é responder “o que é isso?”. A
          maioria das famílias ouviu o termo na escola ou num laudo, sem
          explicação. Comece pelo que a pessoa vive, não pela teoria.
        </p>
        <ol>
          <li>
            <strong>Uma frase de definição.</strong> “O acompanhante terapêutico
            é a profissional de saúde que acompanha a pessoa nos lugares da vida
            dela, como casa, escola e rua, dentro de um plano combinado com a
            família e a equipe.”
          </li>
          <li>
            <strong>Três exemplos de situação.</strong> Ir ao mercado, a
            chegada na escola, um passeio no parque, sempre sem identificar
            ninguém.
          </li>
          <li>
            <strong>O que muda para a família.</strong> Descreva o processo, não
            o resultado: encontros combinados, conversas regulares, registro do
            que foi trabalhado.
          </li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: “Acompanho crianças e adolescentes autistas
          em casa, na escola e em lugares da cidade, como a padaria ou a
          pracinha. Antes de começar, conversamos com a família e com os outros
          profissionais para combinar o que faz sentido trabalhar.”
        </p>
        <p>
          <strong>Erro comum</strong>: abrir com a história do AT na Argentina
          ou com o vocabulário da sua abordagem. Isso interessa a colegas, não à
          mãe que leu “AT” no relatório da escola. Guarde a parte teórica para
          um post do blog. O guia de{" "}
          <Link href="/blog/textos-site-psicologo" className="inst-link">
            textos para site de psicólogo
          </Link>{" "}
          mostra como escrever para leigos sem simplificar demais.
        </p>
      </section>

      <section>
        <h2>2. Diga com clareza o que o AT não é</h2>
        <p>
          Boa parte das dúvidas vem da confusão com outros papéis. Uma seção
          curta “o que o AT não é” evita contatos desalinhados e protege você de
          expectativas que não pode cumprir.
        </p>
        <h3>Profissional de apoio escolar</h3>
        <p>
          A{" "}
          <a href={LBI} {...ext}>
            Lei Brasileira de Inclusão
          </a>{" "}
          (art. 3º, XIII) define o profissional de apoio escolar como quem
          apoia o estudante com deficiência em alimentação, higiene, locomoção e
          atividades escolares. A{" "}
          <a href={BERENICE} {...ext}>
            Lei 12.764/2012
          </a>{" "}
          (art. 3º, parágrafo único) garante acompanhante especializado ao aluno
          autista nas classes comuns, em caso de comprovada necessidade. Esse
          apoio é uma obrigação da escola. O AT clínico funciona como uma
          intervenção de saúde ligada a um projeto terapêutico.
        </p>
        <h3>Babá, cuidadora ou professora particular</h3>
        <p>
          Diga que o seu trabalho tem objetivos combinados, supervisão e
          articulação com a equipe. Sem tom de desdém: as outras funções são
          importantes, só são diferentes.
        </p>
        <p>
          <em>Exemplo fictício</em>: “O acompanhamento terapêutico não
          substitui o profissional de apoio que a escola deve oferecer. Quando o
          AT acontece na escola, ele é combinado com a família, a coordenação e
          a equipe que acompanha a criança.”
        </p>
        <p>
          <strong>Erro comum</strong>: aceitar ser apresentada como “a AT que a
          escola não quis pagar”. Isso confunde direito com serviço e coloca
          você num conflito entre família e escola. Para entrar na escola com
          papel claro, veja o guia de{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Monte a página do serviço de acompanhamento terapêutico</h2>
        <p>
          A página do AT é o lugar para onde todo post, cartão e indicação deve
          levar. Ela responde às perguntas da família na ordem em que surgem.
        </p>
        <ol>
          <li>
            <strong>Para quem é.</strong> Faixa etária, se atende só autismo ou
            outras condições, região onde se desloca.
          </li>
          <li>
            <strong>Onde acontece.</strong> Casa, escola, espaços da cidade, e
            como você combina isso com cada lugar.
          </li>
          <li>
            <strong>Como começa.</strong> Primeira conversa com os
            responsáveis, contato com a equipe, autorização por escrito.
          </li>
          <li>
            <strong>Como é o acompanhamento.</strong> Frequência combinada,
            supervisão, devolutivas à família.
          </li>
          <li>
            <strong>Sigilo.</strong> Como você se apresenta em público, o que
            compartilha com a escola e o que não compartilha.
          </li>
          <li>
            <strong>Identificação.</strong> Nome completo, CRP, formação real e
            o botão de contato.
          </li>
        </ol>
        <p>
          O valor não precisa estar na página. Se quiser informar, faça isso de
          forma neutra, sem destaque nem desconto, como explica o post sobre{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo divulgar preço
          </Link>
          .
        </p>
        <p>
          <em>Exemplo fictício</em>: uma psicóloga em Campinas cria a página
          “Acompanhamento terapêutico” com seis blocos curtos e um quadro “o
          que acontece na primeira conversa”. As mensagens que recebe passam a
          citar a escola e a idade da criança logo na primeira linha.
        </p>
        <p>
          <strong>Erro comum</strong>: esconder o AT dentro de uma lista de
          serviços genérica. Quem busca acompanhante terapêutico quer uma página
          só sobre isso. O guia de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços para psicólogo
          </Link>{" "}
          mostra a estrutura.
        </p>
      </section>

      <section>
        <h2>4. Mostre o trabalho em rede com a equipe e a família</h2>
        <p>
          A Nota Técnica do CFP coloca a atuação em rede no centro do AT. Na
          divulgação, isso vira um argumento de confiança: a família entende
          que você não vai trabalhar isolada.
        </p>
        <ul>
          <li>
            Explique que o acompanhamento segue um plano combinado com os
            profissionais que já atendem a pessoa.
          </li>
          <li>
            Diga com que frequência você conversa com a família e em que
            formato (encontro, chamada, relatório breve).
          </li>
          <li>
            Mostre que o que se compartilha com escola e equipe é só o
            necessário, como pedem os arts. 6º e 12 do Código de Ética.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Antes de começar, peço autorização para
          conversar com a fonoaudióloga e a terapeuta ocupacional da criança.
          Assim, o que treinamos na rua conversa com o que acontece nas outras
          terapias.”
        </p>
        <p>
          <strong>Erro comum</strong>: listar nomes de clínicas parceiras ou de
          escolas onde você atua. Isso pode identificar crianças e soa como uso
          da marca alheia. Fale do modo de trabalhar, não de quem. Se você faz
          parte de uma equipe, o guia de{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            marketing para clínica multidisciplinar de autismo
          </Link>{" "}
          ajuda a apresentar o trabalho conjunto.
        </p>
      </section>

      <section>
        <h2>5. Escolha palavras que respeitem a pessoa acompanhada</h2>
        <p>
          A forma como você fala de autismo na divulgação é lida pelas famílias
          e também por adultos autistas. Linguagem respeitosa é parte da
          confiança, não um detalhe.
        </p>
        <ul>
          <li>
            Fale de apoio, autonomia e participação, como a própria Nota
            Técnica faz, e não de “corrigir” ou “normalizar” comportamentos.
          </li>
          <li>
            Evite tratar a criança como problema a ser contido em público.
          </li>
          <li>
            Pergunte à família como ela prefere se referir ao filho e use isso
            nas conversas, não no marketing.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: em vez de “AT para crianças com
          comportamento difícil”, escreva “acompanho crianças autistas em
          situações do dia a dia que pedem mais apoio, como a chegada na escola
          ou um passeio”.
        </p>
        <p>
          <strong>Erro comum</strong>: usar termos que a comunidade autista
          rejeita só porque aparecem nas buscas. Você pode escrever para o
          Google sem ofender quem lê. O guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          traz alternativas.
        </p>
      </section>

      <section>
        <h2>6. Cuide do sigilo em público e nas redes</h2>
        <p>
          O AT acontece em lugares onde outras pessoas veem você e a criança
          juntas. Isso torna o sigilo mais delicado e é o ponto em que a
          divulgação mais erra.
        </p>
        <ol>
          <li>
            Nunca poste fotos, vídeos ou relatos de situações do acompanhamento,
            mesmo sem rosto. A escola, o uniforme ou a praça podem identificar a
            criança.
          </li>
          <li>
            Não conte “histórias de sucesso”, nem com nomes trocados. Além de
            identificar, elas viram promessa de resultado.
          </li>
          <li>
            Explique na página como você se apresenta em público, se a família
            preferir discrição.
          </li>
          <li>
            Trate mensagens e relatórios como dados sensíveis, conforme a{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>
            .
          </li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: em vez de um vídeo da criança na fila do
          mercado, um carrossel com ilustrações: “5 coisas que combinamos com a
          família antes do primeiro passeio”.
        </p>
        <p>
          <strong>Erro comum</strong>: pedir à família um depoimento para o
          Instagram. Depoimento de quem você atende fere o art. 20, mesmo que a
          família ofereça. O post sobre{" "}
          <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
            depoimento de paciente
          </Link>{" "}
          explica o porquê.
        </p>
      </section>

      <section>
        <h2>7. Apareça onde as famílias procuram um AT</h2>
        <p>
          Quem procura acompanhante terapêutico costuma buscar no Google com a
          cidade, perguntar em grupos de mães e pedir indicação à equipe que já
          atende a criança. Esteja nos três lugares com a mesma mensagem.
        </p>
        <ul>
          <li>
            <strong>Google.</strong> Página do serviço com o termo
            “acompanhante terapêutico” e a região no título, e um perfil de
            empresa no Google com a área de atendimento. Veja o guia de{" "}
            <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
              Google Meu Negócio para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Equipe.</strong> Um material curto para fonoaudiólogas,
            terapeutas ocupacionais e médicos, explicando quando o AT pode
            ajudar e como você se articula com eles.
          </li>
          <li>
            <strong>Grupos de famílias.</strong> Só responda quando pedirem
            indicação ou quando o tema for o AT, com informação, não com
            anúncio.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: uma psicóloga prepara uma página em PDF
          “Acompanhamento terapêutico: quando faz sentido” e entrega às
          terapeutas com quem já conversa sobre casos em comum, com autorização
          das famílias.
        </p>
        <p>
          <strong>Erro comum</strong>: oferecer comissão a quem indicar. O art.
          2º, alínea p, proíbe receber ou pagar porcentagem por encaminhamento.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação do acompanhante terapêutico</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na divulgação do acompanhante terapêutico"
            tabIndex={0}
          >
            <caption>Acompanhante terapêutico para autismo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>O que é o AT</td>
                <td>Definição simples e exemplos de situações sem identificar ninguém</td>
                <td>Teoria e jargão logo na primeira frase</td>
              </tr>
              <tr>
                <td>Resultado</td>
                <td>Descrever o processo e os combinados</td>
                <td>“Seu filho vai conseguir ir sozinho à escola”</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Você, objetos, espaços vazios, ilustrações</td>
                <td>Criança acompanhada, escola, uniforme, cenas do AT</td>
              </tr>
              <tr>
                <td>Escola</td>
                <td>Explicar a diferença para o profissional de apoio escolar</td>
                <td>Vender o AT como substituto do que a escola deve oferecer</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>Informar de forma neutra, se quiser</td>
                <td>Pacote com desconto ou “valor acessível” em destaque</td>
              </tr>
              <tr>
                <td>Indicações</td>
                <td>Material informativo para a equipe</td>
                <td>Comissão por encaminhamento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já divulga: conteúdo que mostra o seu jeito de trabalhar</h2>
        <p>
          Se a página e o perfil já estão claros, o próximo passo é conteúdo
          que responda às dúvidas recorrentes das famílias. O AT gera muitas
          perguntas práticas, e cada uma pode virar um post do blog ou um
          carrossel.
        </p>
        <ul>
          <li>“Como é o primeiro encontro do acompanhamento terapêutico?”</li>
          <li>“O que a família combina com a AT antes de um passeio?”</li>
          <li>“AT na escola: quem decide e como se conversa com a coordenação?”</li>
          <li>“Quanto tempo dura o acompanhamento terapêutico?” (responda que depende do plano, sem prazo fixo)</li>
        </ul>
        <p>
          Cite a Nota Técnica do CFP quando falar do que é o AT e date os
          posts, porque o tema muda. Um post por mês, bem respondido, rende mais
          do que vídeos diários sem foco. O guia de{" "}
          <Link href="/blog/blog-para-psicologo" className="inst-link">
            blog para psicólogo
          </Link>{" "}
          mostra como escolher os temas pelas buscas reais.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          No AT, a família é parte do trabalho, não só a contratante. Ela
          convive com você em casa, ouve a vizinha comentar e precisa explicar
          à escola quem você é. A divulgação pode tirar parte desse peso.
        </p>
        <ul>
          <li>
            Ofereça um texto curto que a família pode enviar à escola,
            explicando o que é o acompanhamento e quem é a responsável, sem
            dados clínicos.
          </li>
          <li>
            Explique como você lida com crises em espaço público e o que
            combina antes com os responsáveis, sem dramatizar.
          </li>
          <li>
            Diga o que você compartilha com os pais e o que fica entre você e a
            criança ou adolescente, conforme o art. 13 do Código.
          </li>
          <li>
            Fale também com irmãos e avós quando o acompanhamento acontece em
            casa: um parágrafo sobre “quem mais participa” ajuda.
          </li>
        </ul>
        <p>
          Para conversar com esses pais fora do acompanhamento, sem vender
          serviço em cada encontro, veja o guia de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental
          </Link>
          . E, se você atende a partir de uma abordagem específica, o post sobre{" "}
          <Link href="/blog/marca-psicologo-aba" className="inst-link">
            marca para psicólogo ABA
          </Link>{" "}
          ajuda a explicá-la sem promessa.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Usar “AT” sem explicar a sigla em nenhum lugar.</li>
          <li>Postar a criança acompanhada, mesmo de costas.</li>
          <li>Prometer autonomia, inclusão ou “progresso” em prazo definido.</li>
          <li>Apresentar o AT como substituto do apoio escolar garantido em lei.</li>
          <li>Esquecer o CRP na bio, no cartão ou na página.</li>
          <li>Citar a Nota Técnica sem link ou com número errado.</li>
          <li>Oferecer comissão a terapeutas ou escolas que indicam.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da divulgação do AT</h2>
        <ul>
          <li>Definição do AT em uma frase, na abertura da página.</li>
          <li>Seção “o que o AT não é”, com a diferença para o apoio escolar.</li>
          <li>Página própria do serviço, com região de atendimento.</li>
          <li>Trabalho em rede explicado sem citar escolas ou clínicas.</li>
          <li>Sigilo em público descrito para a família.</li>
          <li>Nenhuma imagem de criança, escola ou cena do acompanhamento.</li>
          <li>Nome completo e CRP em todas as peças.</li>
          <li>Nota Técnica CFP nº 44/2025 citada com link nos textos sobre o AT.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com a
          página do acompanhamento terapêutico escrita para as famílias e
          revisada pelo art. 20. Tudo é apresentado em até 30 dias, com o site
          incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se as famílias ainda confundem o seu trabalho com o apoio escolar,
          marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA_AT} {...ext}>
              Nota Técnica CFP nº 44/2025
            </a>{" "}
            — a prática profissional da Psicologia no acompanhamento
            terapêutico. Resumo na{" "}
            <a href={NOTA_AT_NOTICIA} {...ext}>
              notícia do CFP de 19/12/2025
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 2º, 6º, 8º, 9º, 12, 13 e 20.
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
            </a>{" "}
            (cartilha, abril de 2026).
          </li>
          <li>
            Brasil.{" "}
            <a href={BERENICE} {...ext}>
              Lei nº 12.764/2012
            </a>{" "}
            (Política Nacional de Proteção dos Direitos da Pessoa com Transtorno
            do Espectro Autista), art. 3º, parágrafo único.
          </li>
          <li>
            Brasil.{" "}
            <a href={LBI} {...ext}>
              Lei nº 13.146/2015
            </a>{" "}
            (Lei Brasileira de Inclusão), art. 3º, XIII.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018
            </a>{" "}
            (Lei Geral de Proteção de Dados).
          </li>
        </ul>
      </section>
    </>
  )
};
