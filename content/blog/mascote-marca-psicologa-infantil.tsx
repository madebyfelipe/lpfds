import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";
const LDA = "https://www.planalto.gov.br/ccivil_03/leis/l9610.htm";
const PUZZLE = "https://doi.org/10.1177/1362361317727125";

export const post: Post = {
  slug: "mascote-marca-psicologa-infantil",
  title: "Mascote na marca de psicóloga infantil: pode? Quando ajuda e quando atrapalha",
  description:
    "Psicóloga infantil pode ter mascote na marca? O que o Código de Ética permite, quando ajuda, riscos, direito autoral, INPI e cuidados com autismo.",
  keyword: "mascote para psicóloga infantil",
  tags: ["identidade-visual", "neurodivergencia"],
  publishedAt: "2026-11-15",
  summary:
    "Pode. O Código de Ética não proíbe mascote nem personagem na marca; o que ele exige vale para qualquer peça: nome completo e CRP, sem promessa, sem sensacionalismo e sem expor pacientes (art. 20). O mascote funciona quando ajuda a criança a se sentir em casa no consultório e não substitui a sua identificação nem fala com os pais como se fossem crianças.",
  faq: [
    {
      q: "Psicóloga infantil pode usar mascote na marca?",
      a: "Pode. Nem o Código de Ética nem a cartilha de publicidade do CRP-MG proíbem personagem ou mascote. As regras do art. 20 continuam valendo: nome completo e CRP na divulgação, nada de promessa de resultado, sensacionalismo ou exposição de pacientes, inclusive em desenhos feitos por crianças atendidas."
    },
    {
      q: "O mascote pode substituir o logo da psicóloga?",
      a: "Não é recomendado. Quem decide pelo atendimento são os pais, que procuram uma profissional séria. O ideal é ter o logo como assinatura principal, com nome e CRP, e o mascote como elemento de apoio em peças para crianças, como a sala de espera ou materiais do consultório."
    },
    {
      q: "Posso criar o mascote com inteligência artificial?",
      a: "Dá para usar IA para esboçar ideias, mas, para uma peça que vai ser a cara do consultório, o mais seguro é contratar uma ilustradora com contrato que transfira os direitos por escrito, como pede a Lei de Direitos Autorais. Assim você pode registrar a marca e usar o personagem sem dúvida sobre autoria."
    },
    {
      q: "Mascote infantiliza a marca para quem atende autismo?",
      a: "Pode infantilizar, se o personagem for muito chamativo ou tratar a criança como alguém a ser consertado. Muitos pais também são neurodivergentes e preferem visual calmo. Evite peça de quebra-cabeça e cores muito saturadas, e use o mascote com moderação."
    }
  ],
  cover: {
    src: "/blog/mascote-marca-psicologa-infantil/mascote-psicologa-infantil-lapis-de-cor.jpg",
    alt: "Caderno de desenho aberto entre lápis de cor, pincéis e fitas coloridas sobre mesa clara",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muita psicóloga infantil já pensou num mascote: um bichinho que recebe a
        criança na porta, aparece nos materiais e deixa o consultório menos
        assustador. A dúvida vem logo depois: pode? Não vai parecer infantil
        demais para os pais? E se a criança desenhar o personagem, dá para
        postar?
      </p>
      <p>
        Resposta curta: pode. As normas do CFP não falam de mascote, e as regras
        do art. 20 valem para ele como para qualquer peça. O que decide se ele
        ajuda ou atrapalha é o uso: apoio para a criança, sem tomar o lugar da
        sua identificação profissional diante dos pais. A seguir estão o que
        dizem as normas, quando o mascote faz sentido, os riscos, os cuidados de
        autoria e registro e a parte para quem atende crianças neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          não trata de mascote nem de personagem. O art. 20 define o que toda
          divulgação precisa ter e evitar: nome completo e CRP (alínea a), nada de
          previsão taxativa de resultado (alínea e) e nada de sensacionalismo
          (alínea h).
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          acrescenta um ponto que importa aqui: é vedada a exposição de “dados,
          imagens, desenhos, mensagens e qualquer material decorrente de serviços
          psicológicos” que possa levar à identificação de quem foi atendido, e
          ela pede reflexão ética mesmo quando o material não identifica a pessoa
          e há autorização. Ou seja: o mascote pode existir; o desenho do mascote
          feito por uma criança na sessão não vai para o Instagram.
        </p>
      </section>

      <section>
        <h2>Quando o mascote ajuda</h2>
        <p>
          O mascote ajuda quando conversa com a criança dentro do consultório e
          nos materiais que ela recebe. É lá que ele cria familiaridade.
        </p>
        <ul>
          <li>
            <strong>Sala de espera e sinalização:</strong> o personagem indica o
            banheiro, a sala, o cantinho dos livros.
          </li>
          <li>
            <strong>Materiais para a criança:</strong> uma história curta sobre
            como é ir à psicóloga, um adesivo, um cartão de boas-vindas.
          </li>
          <li>
            <strong>Antecipação:</strong> uma página do site, para os pais
            mostrarem à criança antes da primeira visita, com o personagem
            apresentando o espaço.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia criou uma coruja que
          aparece num livrinho de quatro páginas, “Meu primeiro dia na
          psicóloga”, enviado aos pais por PDF. A criança chega conhecendo a sala.
          No site e no Instagram, a assinatura continua sendo o logo, com nome e
          CRP.
        </p>
        <p>
          Esse uso combina com a ideia de um espaço pensado para a infância, como
          no guia de{" "}
          <Link href="/blog/decoracao-consultorio-psicologia-infantil" className="inst-link">
            decoração de consultório de psicologia infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Quando o mascote atrapalha</h2>
        <p>
          O mascote atrapalha quando toma o lugar da profissional. Os pais,
          que decidem e pagam, procuram alguém sério e preparado; um personagem
          de desenho como cara principal pode passar a impressão contrária.
        </p>
        <ol>
          <li>
            <strong>Mascote como logo:</strong> o personagem no lugar do nome,
            sem CRP visível, fere a alínea a do art. 20 e confunde.
          </li>
          <li>
            <strong>Mascote falando com os pais:</strong> posts em que o
            bichinho “explica” temas sérios aos adultos soam infantis.
          </li>
          <li>
            <strong>Mascote prometendo:</strong> “com a Lulu, seu filho vai
            superar a timidez” é previsão de resultado.
          </li>
          <li>
            <strong>Clichê visual:</strong> cérebro sorridente, quebra-cabeça,
            arco-íris genérico. O personagem vira mais um entre muitos.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: um consultório fictício usava um polvo colorido
          como logo e foto de perfil. As mães perguntavam no WhatsApp se ali era
          um espaço de recreação. Quando o logo voltou a ser o nome da
          psicóloga e o polvo foi para a sala de espera, a dúvida sumiu.
        </p>
        <p>
          O guia de{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>{" "}
          mostra como falar com os pais sem cair no clichê.
        </p>
      </section>

      <section>
        <h2>Como criar um mascote que faça sentido</h2>
        <p>
          O personagem sai do mesmo lugar do resto da marca: do seu
          posicionamento, do seu jeito de trabalhar e do público que você atende.
        </p>
        <ol>
          <li>
            <strong>Comece pela função:</strong> onde ele vai aparecer e o que
            vai fazer (receber, explicar a rotina, acompanhar materiais).
          </li>
          <li>
            <strong>Escolha um traço com sentido:</strong> um animal ou objeto
            ligado a calma, curiosidade ou cuidado, que tenha a ver com a sua
            forma de atender.
          </li>
          <li>
            <strong>Use as cores da marca:</strong> o mascote é parte da{" "}
            <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
              identidade visual
            </Link>
            , com a mesma paleta e o mesmo estilo de traço.
          </li>
          <li>
            <strong>Teste com quem decide:</strong> mostre a pais do seu público
            (que não sejam pacientes) e pergunte o que eles entendem.
          </li>
          <li>
            <strong>Registre as regras:</strong> no{" "}
            <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
              manual de marca
            </Link>
            , onde o mascote entra e onde não entra.
          </li>
        </ol>
        <p>
          O erro comum é criar o personagem primeiro e depois tentar encaixar no
          consultório. Sem função clara, ele acaba aparecendo em tudo, e perde a
          graça.
        </p>
      </section>

      <section>
        <h2>Autoria, direito autoral e registro no INPI</h2>
        <p>
          O mascote é uma obra de ilustração. Para usá-lo com segurança, você
          precisa ter os direitos por escrito e, se quiser proteção como marca,
          registrá-lo.
        </p>
        <ul>
          <li>
            <strong>Contrato com a ilustradora:</strong> a{" "}
            <a href={LDA} {...ext}>
              Lei de Direitos Autorais (Lei nº 9.610/1998)
            </a>{" "}
            diz, no art. 50, que a cessão de direitos de autor se faz sempre por
            escrito. Combine cessão ou licença, os usos e se você pode adaptar o
            personagem.
          </li>
          <li>
            <strong>Banco de imagem e modelos prontos:</strong> o mesmo
            personagem pode estar na marca de outra pessoa, e a licença costuma
            limitar o uso como marca.
          </li>
          <li>
            <strong>Inteligência artificial:</strong> serve para esboçar ideias.
            Para a versão final, prefira um traço autoral com contrato.
          </li>
          <li>
            <strong>Registro:</strong> o{" "}
            <a href={INPI} {...ext}>
              INPI
            </a>{" "}
            registra marcas figurativas e mistas. Pesquise antes se não há
            personagem parecido registrado na mesma área.
          </li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/psicologo-direito-autoral-redes" className="inst-link">
            direito autoral nas redes
          </Link>{" "}
          aprofunda os cuidados com imagens de terceiros.
        </p>
      </section>

      <section>
        <h2>Mascote na marca: pode e evitar</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no uso de mascote na marca de psicóloga infantil"
            tabIndex={0}
          >
            <caption>Mascote na marca de psicóloga infantil: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Uso</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Assinatura</td>
                <td>Logo com nome e CRP; mascote como apoio</td>
                <td>Mascote no lugar do nome e do CRP</td>
              </tr>
              <tr>
                <td>Consultório</td>
                <td>Sala de espera, sinalização, materiais da criança</td>
                <td>Personagem em todas as superfícies</td>
              </tr>
              <tr>
                <td>Redes</td>
                <td>Aparição pontual em conteúdo para famílias</td>
                <td>Mascote prometendo resultado</td>
              </tr>
              <tr>
                <td>Desenhos</td>
                <td>Ilustrações da profissional contratada</td>
                <td>Desenho do mascote feito por criança atendida</td>
              </tr>
              <tr>
                <td>Símbolos</td>
                <td>Traço próprio ligado ao seu trabalho</td>
                <td>Quebra-cabeça, cérebro sorridente</td>
              </tr>
              <tr>
                <td>Autoria</td>
                <td>Contrato escrito com a ilustradora</td>
                <td>Personagem de banco de imagem como marca</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para crianças autistas e neurodivergentes, um personagem pode ser uma
          boa ferramenta de antecipação: ele mostra o espaço e a rotina antes da
          visita, o que reduz o desconhecido. Mas o visual precisa ser calmo e
          previsível.
        </p>
        <ul>
          <li>
            <strong>Sem quebra-cabeça:</strong> um{" "}
            <a href={PUZZLE} {...ext}>
              estudo publicado na revista Autism
            </a>{" "}
            encontrou associações negativas com a peça de quebra-cabeça, e parte
            da comunidade autista rejeita o símbolo.
          </li>
          <li>
            <strong>Visual tranquilo:</strong> poucas cores, traço simples, sem
            expressões exageradas.
          </li>
          <li>
            <strong>Consistência:</strong> o mesmo personagem, do mesmo jeito,
            no site, no material e na sala.
          </li>
          <li>
            <strong>Pais adultos:</strong> muitos pais também são
            neurodivergentes; fale com eles com o logo e com texto claro, sem o
            mascote.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais
          </Link>{" "}
          mostram como manter tudo coerente.
        </p>
      </section>

      <section>
        <h2>Checklist do mascote</h2>
        <ul>
          <li>O mascote tem função clara e lugares definidos.</li>
          <li>O logo com nome completo e CRP continua sendo a assinatura.</li>
          <li>Cores e traço seguem a identidade visual.</li>
          <li>Nada de promessa, quebra-cabeça ou clichê.</li>
          <li>Desenhos de crianças atendidas nunca vão para a divulgação.</li>
          <li>Contrato escrito com a ilustradora.</li>
          <li>Pesquisa no INPI antes de registrar.</li>
          <li>Regras de uso no manual de marca.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, a identidade visual, com ou sem elementos de apoio para
          as crianças, e o site, revisados pelo art. 20. Tudo é apresentado em
          até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você está em dúvida entre um mascote e uma marca mais sóbria,
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
            , art. 20 (alíneas a, e, h).
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026 (sigilo).
          </li>
          <li>
            Brasil.{" "}
            <a href={LDA} {...ext}>
              Lei nº 9.610/1998 — Lei de Direitos Autorais
            </a>
            , art. 50.
          </li>
          <li>
            Instituto Nacional da Propriedade Industrial.{" "}
            <a href={INPI} {...ext}>
              Marcas
            </a>
            .
          </li>
          <li>
            Gernsbacher, M. A.; Raimond, A. R.; Stevenson, J. L.; Boston, J. S.;
            Harp, B.{" "}
            <a href={PUZZLE} {...ext}>
              Do puzzle pieces and autism puzzle piece logos evoke negative
              associations?
            </a>{" "}
            Autism, 2018.
          </li>
        </ul>
      </section>
    </>
  )
};
