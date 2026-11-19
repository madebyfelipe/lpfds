import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const LBI = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm";
const LEI_TEA = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const CIPTEA = "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2020/lei/l13977.htm";

export const post: Post = {
  slug: "sala-de-espera-consultorio-psicologia",
  title: "Sala de espera do consultório de psicologia: sigilo, conforto e marca em 8 decisões",
  description:
    "Sala de espera do consultório de psicologia: acústica e sigilo, móveis, marca, o que deixar à mostra, acessibilidade, crianças e espera online.",
  keyword: "sala de espera consultório de psicologia",
  tags: ["identidade-visual"],
  publishedAt: "2026-11-16",
  summary:
    "A sala de espera do consultório de psicologia precisa proteger o sigilo antes de qualquer decoração: ninguém deve ouvir o que se fala na sala de atendimento, e os pacientes devem se cruzar o mínimo possível (art. 9º do Código de Ética). Depois vêm o conforto, a acessibilidade exigida pela Lei Brasileira de Inclusão e a identidade visual da marca. Material de divulgação exposto segue o art. 20: nada de preço como chamariz, promessa ou depoimento.",
  faq: [
    {
      q: "Como deve ser a sala de espera de um consultório de psicologia?",
      a: "Separada da sala de atendimento por porta e parede que não deixem o som passar, com assentos confortáveis e afastados, luz suave, água, banheiro acessível por perto e informação clara sobre como avisar que chegou. A decoração segue a identidade visual do consultório, sem excesso de estímulo."
    },
    {
      q: "Como evitar que se ouça a sessão na sala de espera?",
      a: "Comece pela porta e pelas frestas: porta sólida, vedação embaixo e nas laterais. Um aparelho de ruído branco ou música baixa na sala de espera mascara o que ainda escapa. Teste com alguém falando em tom normal na sala de atendimento enquanto você escuta da espera."
    },
    {
      q: "O que colocar na sala de espera do psicólogo?",
      a: "Cadeiras confortáveis, mesa de apoio, água e copos, cabideiro, carregador de celular, livros ou revistas neutros, um aviso de como sinalizar a chegada e, se quiser, um cartão com o QR code do site. Para quem atende crianças, um cantinho com brinquedos laváveis para irmãos e acompanhantes."
    },
    {
      q: "Pode ter câmera na sala de espera do consultório?",
      a: "Câmera na sala de espera grava pessoas que estão buscando atendimento, o que envolve dados pessoais e pode expor quem é paciente. Se houver, ela precisa de finalidade clara, aviso visível e acesso restrito às imagens, como pede a LGPD. Na sala de atendimento, não."
    },
    {
      q: "Precisa ter sala de espera no atendimento online?",
      a: "Muitas plataformas de vídeo têm uma sala de espera virtual, em que a pessoa aguarda até você admitir a entrada. Ela evita que alguém entre numa sessão em andamento. A Resolução CFP nº 9/2024 pede que a psicóloga informe quais recursos tecnológicos usa para garantir o sigilo."
    }
  ],
  cover: {
    src: "/blog/sala-de-espera-consultorio-psicologia/sala-de-espera-consultorio-psicologia-poltronas-e-planta.jpg",
    alt: "Poltronas cinza e um sofá claro em torno de uma mesa branca com planta, sala de espera iluminada e sem pessoas",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Uma paciente chega cinco minutos antes. Senta na cadeira encostada na
        porta e, sem querer, ouve trechos da sessão anterior. Na saída, cruza
        com a pessoa que estava lá dentro, de olhos vermelhos. Nenhuma das duas
        volta a ficar à vontade naquele corredor. A sala de espera costuma ser o
        último cômodo em que a psicóloga pensa, e é o primeiro que o paciente
        conhece.
      </p>
      <p>
        A resposta curta é esta: a sala de espera do consultório de psicologia
        precisa, antes de tudo, proteger o sigilo; depois, acolher com conforto
        e acessibilidade; e, por fim, mostrar a marca do consultório com
        coerência. A seguir estão o que dizem as normas, oito decisões para
        montar ou revisar a sua, uma tabela de pode e evitar, a parte para
        quem atende famílias de crianças autistas e neurodivergentes, os erros
        comuns e um checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Nenhuma norma do CFP descreve a sala de espera. Mas várias regras
          chegam até ela.
        </p>
        <ul>
          <li>
            <strong>Sigilo:</strong> o{" "}
            <a href={CODIGO} {...ext}>
              art. 9º do Código de Ética
            </a>{" "}
            diz que é dever da psicóloga respeitar o sigilo profissional, para
            proteger a intimidade das pessoas atendidas. Som que vaza e
            encontros evitáveis entre pacientes são riscos a esse dever.
          </li>
          <li>
            <strong>Divulgação:</strong> folhetos, cartazes e telas na espera
            são publicidade e seguem o art. 20: nome completo e CRP, nada de
            preço como propaganda, previsão de resultado ou sensacionalismo. A{" "}
            <a href={CARTILHA} {...ext}>
              cartilha do CRP-MG (2026)
            </a>{" "}
            detalha esses limites.
          </li>
          <li>
            <strong>Acessibilidade:</strong> a{" "}
            <a href={LBI} {...ext}>
              Lei Brasileira de Inclusão
            </a>{" "}
            (Lei nº 13.146/2015, art. 57) pede que edificações privadas de uso
            coletivo garantam acessibilidade em todas as dependências e
            serviços.
          </li>
          <li>
            <strong>Autismo:</strong> a{" "}
            <a href={LEI_TEA} {...ext}>
              Lei nº 12.764/2012
            </a>{" "}
            considera a pessoa com transtorno do espectro autista pessoa com
            deficiência para todos os efeitos legais, e a{" "}
            <a href={CIPTEA} {...ext}>
              Lei nº 13.977/2020
            </a>{" "}
            criou a Carteira de Identificação da Pessoa com TEA (Ciptea), para
            garantir atenção integral e prioridade no atendimento.
          </li>
          <li>
            <strong>Dados:</strong> câmera, lista de chegada e livro de
            visitas envolvem dados pessoais, regidos pela{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>
            .
          </li>
        </ul>
        <p>
          No atendimento online, a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          pede que a psicóloga informe os recursos usados para garantir o
          sigilo, o que inclui a sala de espera virtual da plataforma.
        </p>
      </section>

      <section>
        <h2>1. Comece pelo som: o que se fala lá dentro fica lá dentro</h2>
        <p>
          A primeira decisão da sala de espera é acústica. Se a conversa da
          sala de atendimento chega à espera, nenhuma decoração compensa.
        </p>
        <ol>
          <li>
            <strong>Teste:</strong> peça a alguém para falar em tom normal na
            sala de atendimento, com a porta fechada, enquanto você escuta da
            espera e do corredor.
          </li>
          <li>
            <strong>Porta:</strong> porta sólida, com vedação embaixo e nas
            laterais. Porta oca e fresta grande são os vazamentos mais comuns.
          </li>
          <li>
            <strong>Mascaramento:</strong> um aparelho de ruído branco junto à
            porta, do lado de fora, ou música instrumental baixa na espera.
          </li>
          <li>
            <strong>Posição das cadeiras:</strong> longe da porta da sala de
            atendimento.
          </li>
          <li>
            <strong>Materiais:</strong> tapete, cortina e estofado absorvem som;
            piso e parede nus o refletem.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia descobre, no teste, que
          a voz passa pelo vão de dois dedos embaixo da porta. Uma vedação de
          porta e um ruído branco resolvem o principal sem obra.
        </p>
        <p>
          O erro comum é confiar na música ambiente alta. Ela incomoda quem
          espera e não resolve o vazamento pela porta. Trate a origem primeiro,
          e só então mascare o que sobrar.
        </p>
      </section>

      <section>
        <h2>2. Organize a agenda e o caminho para os pacientes não se cruzarem</h2>
        <p>
          A sala de espera também protege o sigilo pelo tempo. Pacientes que se
          encontram na porta, logo depois de uma sessão difícil, perdem
          privacidade.
        </p>
        <ul>
          <li>
            <strong>Intervalo entre sessões:</strong> alguns minutos entre um
            atendimento e outro reduzem os encontros.
          </li>
          <li>
            <strong>Saída por outro caminho:</strong> se o espaço permitir, uma
            porta de saída que não passe pela espera.
          </li>
          <li>
            <strong>Aviso de chegada discreto:</strong> campainha, mensagem ou
            luz, sem precisar bater na porta durante a sessão.
          </li>
          <li>
            <strong>Nada de nome alto:</strong> chame a pessoa pelo primeiro
            nome, em tom baixo, ou só com um gesto.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: um consultório fictício troca a placa “bata na
          porta” por um aviso “Ao chegar, mande uma mensagem; eu busco você na
          espera”. A sessão em andamento não é interrompida, e a psicóloga sabe
          quem chegou.
        </p>
        <p>
          O erro comum é marcar sessões coladas para caber mais atendimentos.
          O ganho de agenda vem junto com corredores cheios e menos
          privacidade. O cuidado com a primeira impressão começa antes, no{" "}
          <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
            manual de boas-vindas do consultório
          </Link>
          , que pode explicar como avisar a chegada.
        </p>
      </section>

      <section>
        <h2>3. Escolha móveis que acolham sem amontoar</h2>
        <p>
          A espera precisa de poucos assentos, confortáveis e afastados entre
          si. Quem aguarda uma sessão de terapia raramente quer conversar com
          desconhecidos.
        </p>
        <ol>
          <li>Duas a quatro cadeiras ou poltronas, conforme o fluxo real.</li>
          <li>Assentos individuais, com espaço entre eles.</li>
          <li>Uma cadeira com braço, mais firme, para quem tem dificuldade de levantar.</li>
          <li>Mesa de apoio, cabideiro e lugar para bolsa e guarda-chuva.</li>
          <li>Água, copos e, se possível, tomada para celular.</li>
        </ol>
        <p>
          Exemplo ilustrativo: em vez de um sofá de três lugares em que dois
          desconhecidos se sentam lado a lado, a psicóloga coloca duas
          poltronas separadas por uma mesa baixa. O espaço é o mesmo, e cada
          pessoa fica no próprio canto.
        </p>
        <p>
          O erro comum é encher a sala com móveis sobrando de casa, de estilos
          diferentes. A espera passa a impressão de improviso, que a pessoa
          estende ao atendimento. Se o espaço é compartilhado com outros
          profissionais, combine um padrão; o post sobre{" "}
          <Link href="/blog/consultorio-compartilhado-divulgacao" className="inst-link">
            consultório compartilhado
          </Link>{" "}
          mostra como manter a marca de cada um.
        </p>
      </section>

      <section>
        <h2>4. Leve a identidade visual para a espera</h2>
        <p>
          A sala de espera é a primeira peça física da marca que o paciente
          vê de perto. Cores, materiais e sinalização devem conversar com o
          site, o cartão e a placa.
        </p>
        <ul>
          <li>
            <strong>Cores:</strong> as da paleta da marca, em áreas grandes e
            suaves. O post sobre{" "}
            <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
              cores para consultório de psicologia
            </Link>{" "}
            explica como escolher.
          </li>
          <li>
            <strong>Sinalização:</strong> placa da porta, aviso de chegada e
            indicação do banheiro com a mesma fonte e o mesmo estilo.
          </li>
          <li>
            <strong>Papelaria:</strong> cartões e folhetos à mão, coerentes com
            o resto; veja{" "}
            <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
              papelaria para consultório de psicologia
            </Link>
            .
          </li>
          <li>
            <strong>Iluminação:</strong> luz amarela e indireta acolhe mais que
            uma lâmpada branca no teto.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga cuja marca usa verde-musgo e areia
          pinta uma parede da espera em areia, usa uma almofada verde e
          imprime o aviso de chegada na mesma fonte do site. Três detalhes, e o
          espaço parece dela.
        </p>
        <p>
          O erro comum é decorar com frases motivacionais na parede (“Você é
          mais forte do que imagina”). Para quem chega num dia ruim, podem soar
          como cobrança, e algumas beiram a promessa. Prefira arte neutra.
        </p>
      </section>

      <section>
        <h2>5. Decida o que fica à mostra</h2>
        <p>
          Tudo o que está na espera comunica algo. Escolha poucos itens, todos
          coerentes com o atendimento e com o art. 20.
        </p>
        <ol>
          <li>
            <strong>Leitura:</strong> livros ou revistas de temas leves, sem
            manchetes sensacionalistas sobre saúde mental.
          </li>
          <li>
            <strong>Informação do consultório:</strong> um cartão com o QR code
            do site e o contato.
          </li>
          <li>
            <strong>Avisos práticos:</strong> como avisar a chegada, senha do
            Wi-Fi, onde fica o banheiro.
          </li>
          <li>
            <strong>Material de terceiros:</strong> só o que você conhece e
            endossa, como o folheto de um serviço público de apoio.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga retira da espera os folhetos de
          cursos e de clínicas que deixaram ali sem pedir e mantém só o cartão
          do consultório e o contato do CVV, 188.
        </p>
        <p>
          O erro comum é deixar à mostra material com preço promocional,
          “primeira sessão grátis” ou depoimentos. A espera é um espaço de
          divulgação como o site e segue as mesmas regras. Se você usa
          folhetos, o post sobre{" "}
          <Link href="/blog/panfleto-psicologo" className="inst-link">
            panfleto para psicólogo
          </Link>{" "}
          mostra o que pode entrar.
        </p>
      </section>

      <section>
        <h2>6. Garanta acessibilidade no caminho inteiro</h2>
        <p>
          A sala de espera acessível começa na calçada. A Lei Brasileira de
          Inclusão pede acessibilidade em todas as dependências de edificações
          de uso coletivo.
        </p>
        <ul>
          <li>Entrada sem degrau ou com rampa, e porta com largura para cadeira de rodas.</li>
          <li>Espaço livre na espera para cadeira de rodas e carrinho de bebê.</li>
          <li>Banheiro acessível no andar ou no prédio.</li>
          <li>Sinalização legível, com contraste e letras grandes.</li>
          <li>Informação no site sobre o que é acessível e o que não é.</li>
        </ul>
        <p>
          Se o prédio tem limitações, diga com honestidade no site e na
          mensagem de boas-vindas: “O consultório fica no 2º andar, com
          elevador; o banheiro do andar não é adaptado”. A pessoa decide com
          informação.
        </p>
        <p>
          Exemplo ilustrativo: uma psicóloga acrescenta à página de contato
          fotos da entrada, do elevador e da espera, com descrição em texto.
          Quem usa cadeira de rodas sabe antes o que vai encontrar.
        </p>
        <p>
          O erro comum é anunciar “consultório acessível” sem conferir o
          banheiro ou o degrau da portaria. Mostrar o espaço real, como em{" "}
          <Link href="/blog/fotos-do-consultorio-psicologia" className="inst-link">
            fotos do consultório de psicologia
          </Link>
          , evita a promessa vazia.
        </p>
      </section>

      <section>
        <h2>7. Pense em quem espera junto: crianças, pais e acompanhantes</h2>
        <p>
          Em muitos consultórios, quem passa mais tempo na espera é o
          acompanhante: a mãe durante a sessão do filho, o pai com o irmão
          menor, o cuidador de um idoso.
        </p>
        <ol>
          <li>
            <strong>Cantinho para crianças:</strong> poucos brinquedos
            laváveis, livros e papel, num canto que não bloqueie a passagem.
          </li>
          <li>
            <strong>Conforto para quem espera 50 minutos:</strong> poltrona
            boa, Wi-Fi, tomada e água.
          </li>
          <li>
            <strong>Privacidade da família:</strong> a espera não é lugar para
            a conversa de devolutiva com os pais.
          </li>
          <li>
            <strong>Higiene:</strong> brinquedos e superfícies limpos entre os
            turnos.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga infantil fictícia percebe que os
          pais ficavam de pé no corredor, ao celular, durante as sessões. Uma
          poltrona, uma tomada e a senha do Wi-Fi na parede mudam a espera.
        </p>
        <p>
          O erro comum é usar a espera para “só uma palavrinha” com os pais na
          frente de outros pacientes. Combine um horário próprio para isso. A
          sala da criança em si tem orientações em{" "}
          <Link href="/blog/decoracao-consultorio-psicologia-infantil" className="inst-link">
            decoração de consultório de psicologia infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>8. Configure a sala de espera online</h2>
        <p>
          Quem atende online também tem uma sala de espera: a da plataforma de
          vídeo. Ela protege o sigilo da sessão anterior e organiza a entrada.
        </p>
        <ul>
          <li>
            <strong>Ative a sala de espera virtual:</strong> a pessoa só entra
            quando você admite.
          </li>
          <li>
            <strong>Link por paciente ou por sessão:</strong> evite um link fixo
            para todos.
          </li>
          <li>
            <strong>Mensagem de espera:</strong> “Já vou admitir você; se
            estiver no horário, aguarde um instante”.
          </li>
          <li>
            <strong>Contrato:</strong> informe a plataforma e os recursos de
            sigilo, como pede o parágrafo único do art. 7º da Resolução CFP nº
            9/2024.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga que usava o mesmo link para todos
          viu um paciente entrar adiantado numa sessão em andamento. Depois de
          ativar a sala de espera virtual, isso não se repete.
        </p>
        <p>
          O erro comum é achar que sala de espera é coisa do presencial. No
          online, o risco de exposição é igual ou maior. Mais sobre o
          atendimento a distância em{" "}
          <Link href="/blog/psicologo-online-divulgacao" className="inst-link">
            psicólogo online: como divulgar
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar na sala de espera</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na sala de espera do consultório de psicologia"
            tabIndex={0}
          >
            <caption>Sala de espera do consultório de psicologia: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Elemento</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Som</td>
                <td>Porta vedada, ruído branco, cadeiras longe da porta</td>
                <td>Porta oca, fresta, música alta para “abafar”</td>
              </tr>
              <tr>
                <td>Agenda</td>
                <td>Intervalo entre sessões, aviso de chegada por mensagem</td>
                <td>Sessões coladas, chamar o nome completo em voz alta</td>
              </tr>
              <tr>
                <td>Paredes</td>
                <td>Arte neutra, cores da marca, sinalização clara</td>
                <td>Frases motivacionais, diplomas em excesso</td>
              </tr>
              <tr>
                <td>Material exposto</td>
                <td>Cartão com QR code, avisos práticos, serviço de apoio</td>
                <td>Preço promocional, depoimentos, folhetos de terceiros sem critério</td>
              </tr>
              <tr>
                <td>Câmera</td>
                <td>Só com finalidade, aviso visível e acesso restrito</td>
                <td>Câmera escondida ou voltada para a sala de atendimento</td>
              </tr>
              <tr>
                <td>Acessibilidade</td>
                <td>Rampa, espaço livre, informação honesta no site</td>
                <td>“Acessível” sem conferir banheiro e entrada</td>
              </tr>
              <tr>
                <td>Online</td>
                <td>Sala de espera virtual, link por sessão</td>
                <td>Link fixo e aberto para todos</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem sala de espera: faça o teste de um dia</h2>
        <p>
          Se o consultório já funciona, a melhor revisão é viver a espera como
          paciente. Chegue dez minutos antes de um horário vazio, sente em cada
          cadeira, use o banheiro, procure o aviso de chegada, tente ouvir a
          sala de atendimento com alguém falando lá dentro.
        </p>
        <p>
          Anote tudo o que incomoda: a luz que bate no rosto, a cadeira baixa,
          a tomada que não existe, o barulho da rua. Depois, pergunte a dois ou
          três pacientes de longa data, de forma aberta, o que mudariam na
          espera. A resposta costuma ser simples e barata.
        </p>
        <p>
          Revise também a coerência entre o que o site promete e o que a pessoa
          encontra. Se o site fala em “espaço calmo” e a espera tem TV ligada,
          a primeira impressão quebra a confiança. Atualize as fotos do site
          depois de cada mudança, para quem chega saber o que vai ver.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para muitas crianças autistas e neurodivergentes, a espera é a parte
          mais difícil da consulta: ambiente novo, tempo ocioso, sons e luzes
          imprevistos. Pequenos ajustes fazem diferença para a criança e para
          os pais.
        </p>
        <ul>
          <li>
            <strong>Espera curta:</strong> pontualidade e, se possível, a opção
            de aguardar no carro ou do lado de fora e receber uma mensagem
            quando for a hora.
          </li>
          <li>
            <strong>Estímulo baixo:</strong> luz indireta, sem TV, sem cheiro
            forte, sem brinquedo barulhento.
          </li>
          <li>
            <strong>Previsibilidade:</strong> fotos da espera e da sala no site
            ou enviadas antes da primeira visita.
          </li>
          <li>
            <strong>Prioridade:</strong> a Ciptea, criada pela Lei nº
            13.977/2020, existe para garantir prioridade no atendimento; muitas
            famílias valorizam quando o consultório já organiza o horário para
            que a espera seja mínima.
          </li>
          <li>
            <strong>Canto de regulação:</strong> um espaço com almofada e menos
            estímulo, onde a criança pode ficar se precisar.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia passa a mandar, na véspera
          da primeira consulta, três fotos: a entrada do prédio, a espera e a
          porta da sala. A mãe mostra as fotos à criança no caminho, e a
          chegada fica mais tranquila.
        </p>
        <p>
          Mais ajustes de espaço e de comunicação estão em{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório sensorialmente acessível para autistas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Decorar antes de testar se o som da sessão vaza.</li>
          <li>Sessões coladas que fazem os pacientes se cruzarem na porta.</li>
          <li>Sofá compartilhado entre desconhecidos.</li>
          <li>Frases motivacionais na parede.</li>
          <li>Folhetos com preço, promoção ou depoimento.</li>
          <li>Câmera sem aviso ou voltada para a sala de atendimento.</li>
          <li>Link fixo de videochamada sem sala de espera virtual.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da sala de espera</h2>
        <ul>
          <li>Teste de som feito, com porta vedada e mascaramento.</li>
          <li>Intervalo entre sessões e aviso de chegada discreto.</li>
          <li>Assentos individuais, afastados e confortáveis.</li>
          <li>Cores, sinalização e papelaria coerentes com a marca.</li>
          <li>Material exposto revisado pelo art. 20.</li>
          <li>Entrada, espera e banheiro acessíveis, ou limitações informadas.</li>
          <li>Conforto para acompanhantes e cantinho para crianças, se for o caso.</li>
          <li>Sala de espera virtual ativa no atendimento online.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, a identidade visual e o site, com cores, sinalização e
          peças que levam a marca do consultório do site até a sala de espera,
          tudo revisado pelo art. 20. Tudo é apresentado em até 30 dias, com o
          site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu consultório ainda não parece seu, marque uma conversa de 15
          minutos.
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
            , arts. 9º e 20.
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
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            — exercício profissional mediado por TDICs (art. 7º).
          </li>
          <li>
            Brasil.{" "}
            <a href={LBI} {...ext}>
              Lei nº 13.146/2015 — Lei Brasileira de Inclusão da Pessoa com
              Deficiência
            </a>
            , art. 57.
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_TEA} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={CIPTEA} {...ext}>
              Lei nº 13.977/2020 — Carteira de Identificação da Pessoa com
              Transtorno do Espectro Autista (Ciptea)
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
