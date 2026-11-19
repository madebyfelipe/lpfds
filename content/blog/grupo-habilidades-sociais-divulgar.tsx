import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const ECA = "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm";
const BERENICE = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const ABLEISMO = "https://doi.org/10.1089/aut.2020.0014";
const REVISAO = "https://periodicos.ufmg.br/index.php/contextosclinicos/article/view/62716";

export const post: Post = {
  slug: "grupo-habilidades-sociais-divulgar",
  title: "Grupo de habilidades sociais para crianças autistas: como a psicóloga apresenta e divulga em 8 passos",
  description:
    "Como divulgar um grupo de habilidades sociais para crianças autistas: objetivo, formato, triagem, página, conversa com os pais e escola, dentro do art. 20.",
  keyword: "grupo de habilidades sociais para crianças autistas",
  tags: ["neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-16",
  summary:
    "Divulgar um grupo de habilidades sociais para crianças autistas é explicar, com clareza, para quem o grupo é, o que acontece nos encontros, quem conduz, como é a entrada e como os pais acompanham. O art. 20 do Código de Ética proíbe prometer resultado, usar preço como chamariz e expor crianças, então a divulgação fala do processo e dos objetivos, nunca de “melhoras garantidas”. Abaixo há 8 passos, com exemplos fictícios de texto, uma tabela de pode e evitar e um checklist.",
  faq: [
    {
      q: "Como funciona um grupo de habilidades sociais para crianças autistas?",
      a: "Em geral, um pequeno grupo de crianças de idades próximas se encontra com regularidade, com uma ou duas profissionais, para praticar situações de convivência por meio de jogos, conversas e atividades combinadas. O formato varia conforme a abordagem da psicóloga, a idade e as necessidades das crianças, por isso a página do grupo deve explicar o formato de quem conduz, e não um modelo genérico."
    },
    {
      q: "Qual a idade para participar de um grupo de habilidades sociais?",
      a: "Não existe uma idade única. Os grupos costumam reunir crianças com idade e forma de comunicação parecidas, para que as atividades façam sentido para todas. Quem define a faixa é a psicóloga, e a divulgação deve dizer qual é e explicar que a entrada passa por uma conversa inicial."
    },
    {
      q: "Psicólogo pode divulgar fotos do grupo de crianças?",
      a: "Fotos e vídeos das crianças em atividade ficam fora da divulgação. Mesmo com autorização dos pais, a imagem expõe a criança e o atendimento, o que esbarra no sigilo (art. 9º do Código de Ética), no art. 20 e na proteção de dados de crianças da LGPD. Prefira imagens da sala vazia, dos materiais e da identidade visual."
    },
    {
      q: "Grupo de habilidades sociais substitui a terapia individual?",
      a: "Depende de cada criança, e quem avalia é a profissional que acompanha. Na divulgação, o mais honesto é dizer que o grupo é uma modalidade de atendimento com objetivos próprios, que pode acontecer junto com outros acompanhamentos, e que a indicação é feita depois da conversa inicial."
    }
  ],
  cover: {
    src: "/blog/grupo-habilidades-sociais-divulgar/grupo-habilidades-sociais-divulgar-jogos-de-madeira-no-sofa.jpg",
    alt: "Jogos educativos de madeira coloridos espalhados sobre um sofá mostarda, prontos para uma atividade em grupo",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você montou o grupo com cuidado: escolheu a faixa de idade, separou os
        jogos, preparou a sala e definiu quantas crianças cabem em cada turma.
        Falta o mais difícil, contar para as famílias que ele existe. E aí vem
        a dúvida: como divulgar um grupo de habilidades sociais para crianças
        autistas sem soar como promessa de “fazer amigos”, sem expor ninguém e
        sem cair no discurso de “consertar” o jeito da criança?
      </p>
      <p>
        A resposta curta é esta: a divulgação funciona quando explica para quem
        o grupo é, o que acontece nos encontros, quem conduz, como é a entrada e
        como os pais acompanham, em linguagem simples e respeitosa. O art. 20 do
        Código de Ética tira da mesa a promessa de resultado, o preço como
        chamariz e a foto de criança. Abaixo estão
        8 passos, do objetivo do grupo ao contato com a escola, com exemplos
        fictícios. Se você também oferece orientação para os pais, o guia de{" "}
        <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
          como divulgar a orientação parental
        </Link>{" "}
        complementa este.
      </p>

      <section>
        <h2>O que dizem as normas sobre divulgar atendimento em grupo para crianças</h2>
        <p>
          O grupo segue as mesmas regras de qualquer divulgação de psicóloga,
          com alguns cuidados a mais por envolver crianças. O art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          pede nome completo e CRP em toda peça, só títulos que você tem, nada
          de preço como propaganda, nada de previsão taxativa de resultados e
          nada de divulgação sensacionalista.
        </p>
        <p>
          Três artigos do mesmo código pesam no grupo infantil. O art. 8º exige
          a autorização de ao menos um responsável para o atendimento não
          eventual de criança. O art. 9º trata do sigilo, que no grupo inclui o
          que uma criança vive diante das outras. O art. 13 diz que aos
          responsáveis se comunica o estritamente essencial para promover
          medidas em benefício da criança, regra que também orienta a conversa
          com a escola.
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
          reforçam que imagem de atendimento e relato que identifique alguém
          ficam fora das redes. Fora do conselho, o{" "}
          <a href={ECA} {...ext}>
            Estatuto da Criança e do Adolescente
          </a>{" "}
          protege a imagem e a identidade da criança (art. 17), e a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          exige que dados de crianças sejam tratados no melhor interesse delas
          (art. 14). Na prática: nada de rosto, nome, vídeo de atividade ou
          “antes e depois” de criança alguma, nem com autorização.
        </p>
      </section>

      <section>
        <h2>1. Defina o objetivo do grupo em palavras que os pais entendem</h2>
        <p>
          Antes do cartaz, escreva em duas frases para que serve o grupo. Os
          pais precisam ler e reconhecer a situação do filho, sem jargão e sem
          promessa.
        </p>
        <ol>
          <li>
            Liste as situações que o grupo trabalha: esperar a vez, combinar uma
            brincadeira, pedir ajuda, lidar com uma regra que mudou.
          </li>
          <li>
            Troque termos técnicos por exemplos do dia a dia. “Reciprocidade
            social” vira “brincar junto, dividindo a vez de falar e de
            escolher”.
          </li>
          <li>
            Use verbos de processo: praticar, experimentar, conversar, conhecer.
            Evite verbos de resultado: superar, corrigir, eliminar.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> “Um grupo pequeno para crianças
          autistas de 7 a 10 anos praticarem, brincando, situações de
          convivência que aparecem na escola e em casa: combinar regras,
          esperar a vez e pedir ajuda. Cada criança participa do jeito dela.”
        </p>
        <p>
          <strong>Erro comum:</strong> abrir com “desenvolva as habilidades
          sociais do seu filho”. A frase promete um resultado, trata a criança
          como um problema a corrigir e não diz nada sobre o grupo. O guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa para psicólogos
          </Link>{" "}
          traz alternativas para esses termos.
        </p>
      </section>

      <section>
        <h2>2. Escolha uma abordagem que respeite o jeito de cada criança</h2>
        <p>
          A forma como você descreve o grupo mostra como você vê a criança
          autista. Famílias e adultos autistas leem com atenção se o objetivo é
          bem-estar e autonomia ou se é fazer a criança parecer “menos autista”.
        </p>
        <ul>
          <li>
            Fale de conforto e participação: a criança pratica situações que
            ela e a família consideram importantes.
          </li>
          <li>
            Deixe claro que o grupo não exige contato visual forçado nem pede
            que a criança esconda estereotipias ou interesses intensos.
          </li>
          <li>
            Mencione a autodefesa: ensinar a criança a dizer do que precisa, como
            uma pausa ou menos barulho, é tão importante quanto as regras do
            jogo.
          </li>
          <li>
            Explique a sua base teórica em uma linha, sem prometer eficácia.
            Uma revisão na revista{" "}
            <a href={REVISAO} {...ext}>
              Contextos Clínicos
            </a>{" "}
            mostra que os formatos desses grupos variam muito.
          </li>
        </ul>
        <p>
          O artigo de Bottema-Beutel e colegas sobre{" "}
          <a href={ABLEISMO} {...ext}>
            linguagem capacitista em autismo
          </a>{" "}
          é uma boa leitura antes de escrever a página. Ele sugere evitar
          termos como “déficit” e “gravidade” quando há alternativas
          descritivas.
        </p>
        <p>
          <strong>Exemplo (fictício):</strong> “No grupo, ninguém precisa olhar
          nos olhos para participar. A gente pratica jeitos de combinar a
          brincadeira que funcionam para cada criança, e cada uma aprende a
          pedir uma pausa quando precisa.”
        </p>
        <p>
          <strong>Erro comum:</strong> usar “comportamentos inadequados” como
          chamada. Para os pais, a expressão soa como julgamento do filho; para
          adultos autistas, como pedido de mascaramento. A página de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          mostra como levar esse cuidado para a identidade visual.
        </p>
      </section>

      <section>
        <h2>3. Explique o formato: quem, quantos, quando e onde</h2>
        <p>
          Os pais decidem pelo formato antes de decidir pelo conteúdo. Uma
          página que esconde horário, duração e número de crianças gera dez
          mensagens com a mesma pergunta.
        </p>
        <ol>
          <li>
            <strong>Faixa de idade e critério de agrupamento.</strong> Diga se
            o grupo junta crianças por idade, por forma de comunicação ou pelos
            dois.
          </li>
          <li>
            <strong>Número de crianças por turma.</strong> Um número fechado
            ajuda os pais a imaginar o ambiente.
          </li>
          <li>
            <strong>Frequência, duração e período.</strong> Por exemplo, um
            encontro por semana, de uma hora, ao longo de um semestre.
          </li>
          <li>
            <strong>Quem conduz.</strong> Nome completo, CRP e formação real de
            cada profissional. Se houver outra categoria, como fonoaudióloga,
            identifique o registro dela e não descreva como seu o que é
            atribuição dela (art. 20, alínea g).
          </li>
          <li>
            <strong>Local e ambiente sensorial.</strong> Luz, barulho, espaço
            para pausa. O guia de{" "}
            <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
              consultório acessível e sensorial
            </Link>{" "}
            ajuda a descrever a sala.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> “Turmas de até 5 crianças. Um
          encontro por semana, às quartas, das 17h às 18h, de março a junho.
          Conduzem a psicóloga Ana Ribeiro (CRP 00/00000) e a psicóloga Júlia
          Moraes (CRP 00/00001).”
        </p>
        <p>
          <strong>Erro comum:</strong> colocar o valor da mensalidade no cartaz
          ou anunciar “primeiro encontro grátis”. Preço é combinado na
          conversa com a família, não usado como propaganda (art. 20, alínea
          d). O post sobre{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            se o psicólogo pode divulgar preço
          </Link>{" "}
          detalha o limite.
        </p>
      </section>

      <section>
        <h2>4. Mostre como é a entrada no grupo</h2>
        <p>
          A entrada responde à pergunta que todo pai faz: “meu filho pode
          participar?”. Mostrar que há uma conversa antes passa segurança e
          evita turmas que não funcionam para ninguém.
        </p>
        <ul>
          <li>
            Descreva a conversa inicial com os responsáveis: o que você pergunta
            e quanto tempo leva.
          </li>
          <li>
            Explique se há um encontro individual com a criança antes do grupo,
            para ela conhecer a sala e a profissional.
          </li>
          <li>
            Diga que, se o grupo não for a melhor opção naquele momento, você
            explica o motivo e indica outro caminho.
          </li>
          <li>
            Informe o que os pais assinam: autorização do responsável (art. 8º
            do Código de Ética) e o combinado sobre sigilo entre as crianças.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> “Antes de entrar, conversamos com
          a família por 50 minutos e fazemos um encontro individual com a
          criança para ela conhecer a sala. Se o grupo não for o melhor caminho
          agora, a gente explica por quê e conversa sobre outras opções.”
        </p>
        <p>
          <strong>Erro comum:</strong> escrever “vagas limitadas, garanta já”.
          A urgência artificial pressiona famílias que já vivem sob pressão e
          soa como promoção. Diga quando abre a próxima turma e como entrar na
          lista: os pais decidem com calma. Para organizar esse primeiro
          contato, veja o guia de{" "}
          <Link href="/blog/agendamento-online-psicologo" className="inst-link">
            agendamento online para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Monte uma página do grupo no site</h2>
        <p>
          O Instagram avisa que o grupo existe; a página no site explica. É
          para ela que vão o link da bio, o QR code do cartaz e a resposta no
          WhatsApp.
        </p>
        <ol>
          <li>
            Título com o nome do serviço e o público: “Grupo de habilidades
            sociais para crianças autistas de 7 a 10 anos, em Campinas”.
          </li>
          <li>
            Abertura de duas frases com o objetivo do passo 1.
          </li>
          <li>
            Bloco do formato (passo 3) e bloco da entrada (passo 4).
          </li>
          <li>
            Seção “Como os pais acompanham”, com a frequência das devolutivas.
          </li>
          <li>
            Perguntas frequentes reais: idade, duração, se substitui a terapia
            individual, se a criança precisa falar.
          </li>
          <li>
            Um botão com o próximo passo, como “Conversar sobre a próxima
            turma”, e o seu nome completo com o CRP no rodapé.
          </li>
        </ol>
        <p>
          <strong>Erro comum:</strong> jogar o grupo como um item numa lista de
          serviços, sem página própria. Assim ele não aparece para quem busca
          por ele no Google, nem responde às dúvidas dos pais. O guia de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços para psicólogo
          </Link>{" "}
          mostra a estrutura, e o de{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>{" "}
          ajuda a escrever as respostas.
        </p>
      </section>

      <section>
        <h2>6. Divulgue onde as famílias já estão, com ética</h2>
        <p>
          Grupos infantis costumam encher por indicação de outras
          profissionais, da escola e de outros pais.
        </p>
        <ul>
          <li>
            <strong>Profissionais que atendem a mesma criança.</strong> Envie a
            fonoaudiólogas, terapeutas ocupacionais e pediatras um texto curto
            com o objetivo, o formato e o link da página. O guia de{" "}
            <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
              parceria com pediatras
            </Link>{" "}
            mostra como abrir essa conversa.
          </li>
          <li>
            <strong>Escolas.</strong> Uma conversa com a coordenação ou uma
            palestra para pais, sem pedir dados de alunos. Veja o passo a passo
            da{" "}
            <Link href="/blog/psicologo-palestra-para-pais" className="inst-link">
              palestra para pais na escola
            </Link>
            .
          </li>
          <li>
            <strong>Instagram.</strong> Posts sobre o que é o grupo, como é a
            sala, quem conduz e como é a entrada.
          </li>
          <li>
            <strong>Grupos de mães.</strong> Só quando alguém pede indicação, e
            sem abordar famílias no privado. O post sobre{" "}
            <Link href="/blog/psicologo-grupos-de-maes" className="inst-link">
              divulgar em grupos de mães
            </Link>{" "}
            explica o limite.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> pedir aos pais de crianças do grupo um
          depoimento para o Instagram. Depoimento de paciente ou de responsável
          fica fora da divulgação, mesmo espontâneo e com autorização.
        </p>
      </section>

      <section>
        <h2>7. Combine com os pais como será o acompanhamento</h2>
        <p>
          O que os pais mais querem saber, depois de “meu filho pode
          participar?”, é “como vou saber o que acontece lá dentro?”. Explicar
          isso na divulgação mostra cuidado e também protege o sigilo das outras
          crianças.
        </p>
        <ol>
          <li>
            Defina a frequência das devolutivas, por exemplo, uma conversa a
            cada mês ou ao fim de cada ciclo.
          </li>
          <li>
            Explique que a devolutiva fala do seu filho, nunca de outras
            crianças do grupo.
          </li>
          <li>
            Sugira, quando fizer sentido, como a família pode praticar em casa o
            que foi trabalhado.
          </li>
          <li>
            Combine o canal para avisos (faltas, mudanças de horário) e deixe
            separado do canal de assuntos clínicos.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> “A cada quatro encontros, você
          recebe uma conversa de 30 minutos sobre como seu filho está no grupo.
          Falamos só dele: o que acontece com as outras crianças fica no grupo.”
        </p>
        <p>
          <strong>Erro comum:</strong> criar um grupo de WhatsApp com todos os
          pais da turma para mandar fotos dos encontros. Além de expor as
          crianças, o grupo vira um espaço de comparação entre famílias.
          Avisos gerais vão por lista de transmissão; assuntos de cada
          criança, por conversa individual.
        </p>
      </section>

      <section>
        <h2>8. Fale com a escola sem quebrar o sigilo</h2>
        <p>
          A escola é onde muitas das situações treinadas no grupo acontecem.
          Uma conversa com a professora pode ajudar, desde que os responsáveis
          autorizem e que só o essencial seja compartilhado (art. 13 do Código
          de Ética).
        </p>
        <ul>
          <li>
            Peça autorização por escrito dos responsáveis antes de qualquer
            contato com a escola.
          </li>
          <li>
            Combine com a família o que será dito: objetivos gerais, sugestões
            práticas, como avisar a criança de mudanças na rotina.
          </li>
          <li>
            Lembre a escola do direito à educação inclusiva previsto na{" "}
            <a href={BERENICE} {...ext}>
              Lei nº 12.764/2012
            </a>
            , sem transformar a conversa em cobrança.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> com a autorização da mãe, a
          psicóloga combina com a professora avisar a criança, com
          antecedência, quando a rotina da sala muda.
        </p>
        <p>
          <strong>Erro comum:</strong> usar a conversa com a escola para
          divulgar o grupo a outras famílias da turma. O contato com a escola existe para o cuidado
          de uma criança, e misturar as duas coisas expõe a família. Se a escola quiser conhecer o
          trabalho, ofereça uma palestra aberta. O guia de{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>{" "}
          detalha esse caminho.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação do grupo</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na divulgação de grupo de habilidades sociais para crianças autistas"
            tabIndex={0}
          >
            <caption>Grupo de habilidades sociais: pode e evitar na divulgação</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objetivo</td>
                <td>“Praticar, brincando, situações de convivência”</td>
                <td>“Seu filho vai fazer amigos”, “supere a timidez”</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Descrever situações do dia a dia</td>
                <td>“Déficit”, “comportamento inadequado”, “normalizar”</td>
              </tr>
              <tr>
                <td>Formato</td>
                <td>Idade, tamanho da turma, horário, quem conduz</td>
                <td>Preço no cartaz, “primeiro encontro grátis”</td>
              </tr>
              <tr>
                <td>Imagem</td>
                <td>Sala vazia, jogos na estante, identidade visual</td>
                <td>Fotos ou vídeos das crianças, mesmo de costas</td>
              </tr>
              <tr>
                <td>Prova social</td>
                <td>Formação real de quem conduz</td>
                <td>Depoimento de pais, “turmas lotadas”</td>
              </tr>
              <tr>
                <td>Urgência</td>
                <td>Data da próxima turma e como entrar na lista</td>
                <td>“Últimas vagas”, contagem regressiva</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já conduz grupos: transforme o grupo em um programa reconhecível</h2>
        <p>
          Quando o grupo já existe há algumas turmas, vale dar a ele um nome e
          uma identidade própria, sempre ligada à sua marca. Um nome descritivo
          (“Grupo Brincar Junto”) ajuda os pais a indicarem para outros pais e
          ajuda a escola a lembrar de você.
        </p>
        <p>
          Organize o grupo em ciclos com temas, como “combinar regras” num
          semestre e “lidar com mudanças” no outro, e publique o calendário no
          site.
        </p>
        <p>
          Outro passo é um material de boas-vindas para os pais, com o que
          acontece em cada encontro. O guia de{" "}
          <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
            manual de boas-vindas do consultório
          </Link>{" "}
          serve de modelo.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Famílias de crianças autistas costumam chegar cansadas de promessas.
          Muitas já ouviram que determinada intervenção “resolveria” algo, e
          leem a sua divulgação procurando o que é real. A honestidade sobre o
          que o grupo faz, e sobre o que não faz, é o que gera confiança.
        </p>
        <p>
          Pense também na criança como leitora. Algumas vão ver o post ou a
          página com os pais. Uma linguagem que trata o autismo como algo a ser
          corrigido chega até ela. Uma linguagem que fala de conforto, de
          escolhas e de pedir o que precisa chega de outro jeito.
        </p>
        <p>
          Se o grupo também recebe crianças com TDAH ou em investigação, diga
          isso com clareza; se for exclusivo para crianças autistas, explique o
          motivo. Em ambos os casos, a entrada passa pela conversa inicial.
        </p>
        <p>
          Pais neurodivergentes também leem a sua página: frases curtas e
          horários bem visíveis ajudam. Se o grupo tiver um custo que algumas
          famílias não conseguem pagar, isso é assunto da conversa individual,
          nunca de anúncio de “valor social”.
        </p>
      </section>

      <section>
        <h2>Erros comuns ao divulgar grupo de habilidades sociais</h2>
        <ul>
          <li>Prometer que a criança vai “fazer amigos” ou “socializar melhor”.</li>
          <li>Publicar fotos, vídeos ou desenhos feitos pelas crianças no grupo.</li>
          <li>Pedir depoimento aos pais ou repostar elogios de responsáveis.</li>
          <li>Descrever o autismo como déficit a ser corrigido.</li>
          <li>Apresentar atividades de outra profissão como suas.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da divulgação do grupo</h2>
        <ul>
          <li>O objetivo cabe em duas frases, com verbos de processo.</li>
          <li>Faixa de idade, tamanho da turma, frequência e local estão claros.</li>
          <li>Cada profissional aparece com nome completo e registro.</li>
          <li>A entrada (conversa inicial e autorização) está descrita.</li>
          <li>O acompanhamento dos pais e o sigilo entre crianças estão explicados.</li>
          <li>Nenhuma imagem de criança, nem de costas, nem desfocada.</li>
          <li>Nenhum preço, gratuidade, depoimento ou promessa.</li>
          <li>A página do grupo tem perguntas frequentes e um botão de contato.</li>
          <li>A linguagem foi revisada com os termos neuroafirmativos.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com a
          página de cada serviço, como um grupo de habilidades sociais, escrita
          na linguagem das famílias e revisada pelo art. 20. Tudo é apresentado
          em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu grupo ainda não tem uma página que explique o formato,
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
            , arts. 8º, 9º, 13 e 20.
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
            <a href={ECA} {...ext}>
              Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente
            </a>
            , art. 17.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 14.
          </li>
          <li>
            Brasil.{" "}
            <a href={BERENICE} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista
            </a>
            .
          </li>
          <li>
            Bottema-Beutel, K. et al.{" "}
            <a href={ABLEISMO} {...ext}>
              Avoiding Ableist Language: Suggestions for Autism Researchers
            </a>
            . Autism in Adulthood, 2021.
          </li>
          <li>
            Revista Contextos Clínicos (UFMG).{" "}
            <a href={REVISAO} {...ext}>
              Caracterização de treinamentos de habilidades sociais em grupo
              para crianças
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
