import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const GOOGLE_FOTOS = "https://support.google.com/business/answer/6103862?hl=pt-BR";
const CODIGO_CIVIL = "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm";

export const post: Post = {
  slug: "fotos-do-consultorio-psicologia",
  title: "Fotos do consultório de psicologia: 10 imagens para o site e o Google sem expor ninguém",
  description:
    "Quais fotos do consultório de psicologia fazer para o site e o Google, como preparar a sala, luz e enquadramento, e o que o Código de Ética pede evitar.",
  keyword: "fotos do consultório de psicologia",
  tags: ["identidade-visual", "presenca-digital"],
  publishedAt: "2026-11-15",
  summary:
    "Fotos do consultório ajudam o paciente a reconhecer o lugar, chegar sem se perder e imaginar a primeira sessão. Faça um conjunto de cerca de dez imagens (fachada, entrada, recepção, sala, detalhes e você no espaço), com luz natural, sem pacientes e sem nenhum material de atendimento à vista. O Google pede que as fotos do Perfil da Empresa representem a realidade, e o sigilo do art. 9º do Código de Ética vale também para o que aparece no fundo.",
  faq: [
    {
      q: "Posso postar foto do meu consultório nas redes sociais?",
      a: "Pode. Fotos do espaço, sem pacientes e sem material de atendimento à vista, são uma forma simples de mostrar onde você atende. Confira o fundo antes de publicar: agenda, prontuário, desenho de criança ou nome escrito num quadro podem identificar alguém."
    },
    {
      q: "Que fotos colocar no Google Meu Negócio do consultório?",
      a: "Fachada e entrada (para a pessoa reconhecer o lugar ao chegar), recepção, sala de atendimento e uma foto sua. O Google aceita JPG ou PNG de 10 KB a 5 MB, recomenda 720 por 720 pixels e pede imagens nítidas, bem iluminadas e que representem a realidade."
    },
    {
      q: "Preciso contratar fotógrafo para as fotos do consultório?",
      a: "Não é obrigatório. Um celular recente, luz natural e o espaço arrumado já resolvem fotos para o Google e as redes. Um fotógrafo faz diferença no site e quando você quer um conjunto coerente com a identidade visual, junto com retratos seus."
    },
    {
      q: "Atendo em consultório compartilhado. Posso usar fotos do espaço?",
      a: "Pode, com autorização de quem administra o espaço e sem expor colegas. Prefira fotos da sala que você usa e da entrada, e deixe claro no site que o atendimento acontece naquele endereço, sem sugerir que o espaço é só seu."
    }
  ],
  cover: {
    src: "/blog/fotos-do-consultorio-psicologia/fotos-do-consultorio-psicologia-poltronas-planta.jpg",
    alt: "Sala clara com duas poltronas cinza, sofá bege e vaso de planta junto à janela",
    caption: "Foto: mrsiraphol / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Antes da primeira sessão, quase todo paciente procura o endereço no
        Google e olha as fotos. Famílias que vão levar uma criança olham com
        ainda mais atenção. Se não há foto, ou se a única imagem é uma fachada
        borrada enviada por alguém, a pessoa chega com mais dúvida do que
        precisava.
      </p>
      <p>
        A resposta curta: faça um conjunto de cerca de dez fotos do
        consultório, da rua até a sala, com luz natural, sem pacientes e sem
        nada que identifique alguém. Use no site, no Perfil da Empresa no Google
        e nas redes. Abaixo estão as normas, a lista de fotos, como preparar o
        espaço, luz e enquadramento, o que muda em cada canal, uma tabela de
        pode e evitar e um checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          não proíbe fotos do consultório. O que pesa é o art. 9º, que manda
          proteger a intimidade das pessoas atendidas, e o art. 20, que veda
          divulgação sensacionalista e pede nome completo e CRP em toda peça de
          divulgação. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          diz que o Conselho não restringe os meios de divulgação, e a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          pede cuidado com o que se expõe nas redes.
        </p>
        <p>
          O Google tem regras próprias. A{" "}
          <a href={GOOGLE_FOTOS} {...ext}>
            ajuda do Perfil da Empresa
          </a>{" "}
          pede fotos em JPG ou PNG, de 10 KB a 5 MB, recomenda 720 por 720
          pixels e diz que a imagem precisa estar nítida, com boa iluminação, sem
          filtros em excesso, e “deve representar a realidade”. Se aparecer
          outra pessoa na foto, como uma colega ou a recepcionista, vale o
          direito à imagem do art. 20 do{" "}
          <a href={CODIGO_CIVIL} {...ext}>
            Código Civil
          </a>
          : peça autorização.
        </p>
      </section>

      <section>
        <h2>1. As dez fotos que contam o caminho até a sala</h2>
        <p>
          Pense nas fotos como o trajeto que o paciente faz. Cada imagem
          responde a uma pergunta: é aqui? por onde entro? onde espero? como é a
          sala? quem vai me atender?
        </p>
        <ol>
          <li><strong>Fachada</strong> vista da calçada, com o número visível.</li>
          <li><strong>Entrada</strong> do prédio ou da casa, com a portaria ou o interfone.</li>
          <li><strong>Acesso</strong>: elevador, rampa ou escada, se houver.</li>
          <li><strong>Porta do consultório</strong> ou placa, com o seu nome.</li>
          <li><strong>Recepção ou sala de espera</strong>, vazia.</li>
          <li><strong>Sala de atendimento</strong> em plano aberto.</li>
          <li><strong>Sala</strong> de outro ângulo, mostrando a luz.</li>
          <li><strong>Detalhe</strong>: estante, planta, poltrona, materiais neutros.</li>
          <li><strong>Você no espaço</strong>, sentada ou de pé, sem paciente.</li>
          <li><strong>Banheiro ou área acessível</strong>, se for um diferencial para o seu público.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga que atende num prédio
          comercial publica a fachada, a portaria, o corredor com a placa da
          sala 304, a sala de espera e a sala de atendimento. O paciente chega
          sabendo onde ir.
        </p>
        <p>
          O erro comum é ter só fotos “bonitas” de detalhes, como uma xícara e
          um livro, sem nenhuma foto que ajude a chegar. O post sobre{" "}
          <Link href="/blog/placa-consultorio-psicologia" className="inst-link">
            placa para consultório de psicologia
          </Link>{" "}
          ajuda a deixar a porta reconhecível nas fotos.
        </p>
      </section>

      <section>
        <h2>2. Prepare o espaço antes de fotografar</h2>
        <p>
          A preparação leva mais tempo que a foto e é onde mora o risco ético.
          Um prontuário aberto ou um desenho de criança na parede podem
          identificar um paciente, mesmo sem nome.
        </p>
        <ul>
          <li>Guarde prontuários, agendas, fichas e qualquer papel com nome.</li>
          <li>Tire desenhos, cartas e produções de pacientes das paredes e da mesa.</li>
          <li>Desligue ou vire telas de computador e celular.</li>
          <li>Esconda testes psicológicos e materiais de avaliação.</li>
          <li>Arrume cabos, caixas e objetos pessoais que poluem a imagem.</li>
          <li>Deixe à vista o que comunica o seu jeito de atender: livros, plantas, almofadas.</li>
        </ul>
        <p>
          <em>Exemplo fictício:</em> antes de fotografar a sala de atendimento
          infantil, a psicóloga retira o mural com desenhos das crianças e
          deixa só a estante com jogos e livros organizados por cor.
        </p>
        <p>
          O erro comum é fotografar “no intervalo”, com a sala do jeito que
          estava. Revise cada foto ampliada antes de publicar. Para pensar o
          espaço como parte da marca, veja o guia de{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Luz e enquadramento com o celular</h2>
        <p>
          Boa parte das fotos de consultório pode ser feita com um celular
          recente. O que muda o resultado é a luz e a altura da câmera, não o
          aparelho.
        </p>
        <ol>
          <li>Fotografe de dia, com janelas abertas e luzes amarelas apagadas, para evitar mistura de cores.</li>
          <li>Segure o celular na altura do peito e mantenha as linhas verticais retas.</li>
          <li>Fique num canto da sala para mostrar o máximo do espaço.</li>
          <li>Faça versões na horizontal (site, Google) e na vertical (stories).</li>
          <li>Evite a lente grande angular extrema, que distorce móveis.</li>
          <li>Não use filtros fortes; ajuste só brilho e reto.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> às 10h, com a persiana aberta, a sala
          fotografada do canto da porta mostra a poltrona, a janela e a estante
          numa só imagem, sem sombra dura.
        </p>
        <p>
          O erro comum é fotografar à noite com a luz do teto. A sala fica
          amarelada e com sombras, o oposto do acolhimento que você quer passar.
          O Google também pede imagens nítidas e sem filtros em excesso.
        </p>
      </section>

      <section>
        <h2>4. Celular ou fotógrafo: quando vale contratar</h2>
        <p>
          Para o Google e o dia a dia das redes, o celular resolve. Um
          fotógrafo faz diferença quando as fotos vão para o site, para a
          identidade visual e para os retratos, que pedem luz e direção melhores.
        </p>
        <ul>
          <li><strong>Celular:</strong> fotos do Google, atualizações, stories, mudanças no espaço.</li>
          <li><strong>Fotógrafo:</strong> abertura do site, página “sobre mim”, retratos, material impresso.</li>
          <li><strong>Mesma sessão:</strong> peça ao fotógrafo os retratos e o espaço no mesmo dia, com a mesma luz.</li>
        </ul>
        <p>
          <em>Exemplo fictício de briefing:</em> “Preciso de 10 fotos do espaço
          (lista anexa) e 15 retratos meus no consultório, sem pacientes, com
          luz natural. Fotos horizontais para o site e algumas verticais.”
        </p>
        <p>
          O erro comum é contratar fotógrafo só para retrato e esquecer o
          espaço, ou o contrário. Combine o direito de uso das imagens no
          contrato. O guia de{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>{" "}
          cobre a parte dos retratos.
        </p>
      </section>

      <section>
        <h2>5. Fotos para o Perfil da Empresa no Google</h2>
        <p>
          No Google, as fotos ajudam a pessoa a reconhecer o lugar e a decidir.
          O próprio Google lembra que a foto de capa nem sempre aparece como a
          primeira e que imagens de baixa qualidade podem ser trocadas por fotos
          enviadas por usuários.
        </p>
        <ol>
          <li>Suba fachada e entrada primeiro: são as que mais ajudam a chegar.</li>
          <li>Adicione recepção, sala e uma foto sua.</li>
          <li>Use JPG ou PNG, entre 10 KB e 5 MB, de preferência com 720 por 720 pixels ou mais.</li>
          <li>Escolha uma foto de capa que mostre o espaço, não um logo esticado.</li>
          <li>Confira periodicamente as fotos enviadas por terceiros e peça remoção se expuserem alguém.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> perfil com seis fotos, fachada,
          portaria, corredor, sala de espera, sala de atendimento e retrato da
          psicóloga, todas na mesma luz de manhã.
        </p>
        <p>
          O erro comum é usar arte com texto (“agende já!”) no lugar de foto.
          Além de não mostrar o lugar, foge do que o Google pede. O guia de{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          trata do resto do perfil.
        </p>
      </section>

      <section>
        <h2>6. Fotos no site: peso, nome do arquivo e texto alternativo</h2>
        <p>
          No site, a foto precisa carregar rápido e ser entendida por quem usa
          leitor de tela. Três cuidados resolvem quase tudo.
        </p>
        <ul>
          <li>
            <strong>Peso:</strong> exporte em JPG com boa compressão; fotos de
            vários megas deixam a página lenta no celular.
          </li>
          <li>
            <strong>Nome do arquivo:</strong> descritivo e sem acento, como
            “consultorio-psicologia-sala-atendimento.jpg”, não “IMG_4021.jpg”.
          </li>
          <li>
            <strong>Texto alternativo:</strong> uma frase que descreve a foto,
            como “Sala de atendimento com poltrona cinza e estante de livros”.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> na página “Como chegar”, uma sequência
          de quatro fotos (fachada, portaria, corredor, sala) com legendas
          curtas, ao lado do mapa.
        </p>
        <p>
          O erro comum é deixar o texto alternativo vazio ou cheio de
          palavras-chave. Ele existe para pessoas, não para o Google. O guia de{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          explica como escrever.
        </p>
      </section>

      <section>
        <h2>7. Consultório compartilhado ou sublocado</h2>
        <p>
          Quem atende em espaço compartilhado também pode e deve ter fotos, com
          dois cuidados: autorização de quem administra o lugar e respeito a
          quem trabalha ali.
        </p>
        <ol>
          <li>Peça autorização para fotografar e publicar.</li>
          <li>Fotografe a sala que você usa e as áreas comuns vazias.</li>
          <li>Não fotografe colegas sem autorização por escrito.</li>
          <li>Não sugira que o espaço é só seu nem use o logo do espaço como se fosse a sua marca.</li>
        </ol>
        <p>
          <em>Exemplo fictício de legenda:</em> “Atendo às terças e quintas no
          Espaço Ateliê, sala 2, na Rua das Flores, 120.”
        </p>
        <p>
          O erro comum é usar fotos do site do espaço sem pedir, o que pode
          esbarrar em direito autoral. O post sobre{" "}
          <Link href="/blog/consultorio-compartilhado-divulgacao" className="inst-link">
            divulgar consultório compartilhado
          </Link>{" "}
          aprofunda a marca nesse formato, e o de{" "}
          <Link href="/blog/psicologo-direito-autoral-redes" className="inst-link">
            direito autoral nas redes
          </Link>{" "}
          trata do uso de imagens de terceiros.
        </p>
      </section>

      <section>
        <h2>Pode e evitar nas fotos do consultório</h2>
        <div className="inst-blog__table" role="region" aria-label="Fotos do consultório de psicologia: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Fotos do consultório de psicologia: o que pode e o que evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pessoas</td>
                <td>Você no espaço; colegas com autorização</td>
                <td>Pacientes, mesmo de costas ou borrados</td>
              </tr>
              <tr>
                <td>Fundo</td>
                <td>Livros, plantas, materiais neutros</td>
                <td>Prontuário, agenda, desenho de paciente</td>
              </tr>
              <tr>
                <td>Edição</td>
                <td>Ajustar brilho e endireitar</td>
                <td>Filtros fortes que mudam o espaço</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Fachada, entrada, sala e retrato</td>
                <td>Arte com texto no lugar de foto</td>
              </tr>
              <tr>
                <td>Site</td>
                <td>Arquivo leve, nome descritivo e texto alternativo</td>
                <td>“IMG_4021.jpg” sem descrição</td>
              </tr>
              <tr>
                <td>Espaço compartilhado</td>
                <td>Sala que você usa, com autorização</td>
                <td>Fotos do site do espaço sem pedir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem fotos: um tour e uma revisão por ano</h2>
        <p>
          Se as fotos básicas já existem, o próximo passo é um pequeno vídeo de
          caminho, de 30 a 60 segundos, da calçada até a sala, sem ninguém no
          quadro e sem música alta. Ele pode ir para o site, para os destaques do
          Instagram e para o Google.
        </p>
        <p>
          Revise as fotos uma vez por ano ou sempre que o espaço mudar: móveis
          novos, pintura, mudança de sala. Foto que não corresponde ao lugar
          frustra quem chega e contraria o que o Google pede. Aproveite a
          revisão para alinhar as imagens à identidade visual: tons parecidos
          entre site, redes e{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria do consultório
          </Link>{" "}
          fazem a marca parecer uma coisa só.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para muitas crianças autistas, saber antes como é o lugar diminui a
          ansiedade da primeira visita. Fotos do caminho podem virar uma
          ferramenta para as famílias, além de divulgação.
        </p>
        <ul>
          <li>
            <strong>Monte uma sequência de antecipação:</strong> fachada,
            portaria, corredor, sala de espera, sala de atendimento, banheiro.
            A família pode mostrar à criança antes de ir.
          </li>
          <li>
            <strong>Mostre o espaço sensorial como ele é:</strong> luz,
            barulho, cantos mais calmos. Se a sala tem luz regulável ou um canto
            de descanso, fotografe.
          </li>
          <li>
            <strong>Ofereça em PDF</strong> ou numa página do site, com
            legendas curtas e diretas.
          </li>
          <li>
            <strong>Nunca use fotos de crianças atendidas</strong>, nem para
            “mostrar como é”.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>{" "}
          ajuda a preparar o espaço que vai aparecer nessas fotos, e o de{" "}
          <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
            manual de boas-vindas
          </Link>{" "}
          mostra onde encaixar a sequência.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Nenhuma foto de fachada ou entrada, só detalhes decorativos.</li>
          <li>Prontuário, agenda ou desenho de paciente no fundo.</li>
          <li>Fotos à noite, amareladas, com filtro forte.</li>
          <li>Arte com texto no lugar de foto no Google.</li>
          <li>Foto de banco de um consultório que não é o seu.</li>
          <li>Colegas na foto sem autorização.</li>
          <li>Fotos antigas de um espaço que já mudou.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de publicar</h2>
        <ul>
          <li>Tenho fachada, entrada, acesso, porta, espera, sala, detalhe e retrato.</li>
          <li>Ampliei cada foto e conferi que nada identifica um paciente.</li>
          <li>Fotografei de dia, com luz natural e linhas retas.</li>
          <li>Tenho versões horizontais e verticais.</li>
          <li>As fotos do Google seguem o formato e o tamanho pedidos.</li>
          <li>No site, os arquivos são leves, com nome descritivo e texto alternativo.</li>
          <li>Pessoas que aparecem autorizaram o uso da imagem.</li>
          <li>Marquei na agenda a revisão anual das fotos.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem
          o posicionamento, a identidade visual, a direção das imagens e o site,
          revisados pelo art. 20. Tudo é apresentado em até 30 dias, com o site
          incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu consultório é acolhedor mas as fotos não mostram isso,
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
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={GOOGLE_FOTOS} {...ext}>
              Gerenciar fotos e vídeos do Perfil da Empresa
            </a>{" "}
            (formato, tamanho e qualidade das fotos).
          </li>
          <li>
            Brasil.{" "}
            <a href={CODIGO_CIVIL} {...ext}>
              Lei nº 10.406/2002 — Código Civil
            </a>
            , art. 20 (direito à imagem).
          </li>
        </ul>
      </section>
    </>
  )
};
