import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const WCAG = "https://www.w3.org/TR/WCAG21/#contrast-minimum";

export const post: Post = {
  slug: "cores-para-consultorio-de-psicologia",
  title: "Cores para consultório de psicologia: como escolher a paleta da marca",
  description:
    "Como escolher as cores do consultório de psicologia: paleta enxuta, contraste legível, coerência entre site, redes e sala, e cuidado com o público sensível.",
  keyword: "cores para consultório de psicologia",
  tags: ["identidade-visual", "neurodivergencia"],
  publishedAt: "2026-11-12",
  summary:
    "A paleta de um consultório de psicologia funciona melhor com poucas cores, usadas sempre do mesmo jeito no logo, no site, nas redes e na sala. Não existe uma cor “certa” para psicólogos: o que importa é o contraste de leitura (mínimo de 4,5:1 para texto, segundo a WCAG 2.1), a coerência entre os pontos de contato e a atenção ao público, especialmente famílias de crianças com sensibilidade sensorial.",
  faq: [
    {
      q: "Qual é a melhor cor para um consultório de psicologia?",
      a: "Não há uma cor correta para toda a profissão. Azuis e verdes são comuns, mas escolher o que todo mundo usa dilui a sua marca. Defina antes o posicionamento e escolha cores que o traduzam e que você consiga usar com consistência."
    },
    {
      q: "Quantas cores devo usar na identidade visual?",
      a: "Uma paleta enxuta costuma bastar: uma ou duas cores principais, uma de apoio e neutros para fundo e texto. Poucas cores facilitam a aplicação em site, redes e materiais impressos."
    },
    {
      q: "Como evitar cores que incomodem crianças autistas?",
      a: "Algumas pessoas têm sensibilidade a cores muito saturadas, a contrastes fortes e a ambientes com muitos estímulos. Prefira tons mais calmos no espaço físico, evite excesso de elementos e converse com as famílias sobre o que funciona para cada criança."
    },
    {
      q: "As cores da marca precisam seguir alguma regra do Código de Ética?",
      a: "O Código de Ética não define cores. As regras valem para o conteúdo da divulgação: nome, CRP, sem promessa de resultado e sem sensacionalismo. A escolha visual é livre, desde que a peça cumpra essas regras."
    }
  ],
  cover: {
    src: "/blog/cores-para-consultorio-de-psicologia/cores-para-consultorio-de-psicologia-amostras-de-cores.jpg",
    alt: "Amostras de cores, roda cromática e tintas sobre uma superfície rosa",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Escolher as cores do consultório costuma parecer a parte fácil e vira a
        mais adiada: entre um azul-calmante e um verde-acolhedor, a decisão sai
        por gosto e a paleta nunca é aplicada do mesmo jeito duas vezes. Este
        texto organiza a escolha em critérios que você consegue defender e
        repetir.
      </p>

      <section>
        <h2>Não existe cor certa para psicólogos</h2>
        <p>
          A ideia de que cada cor “passa” uma emoção específica é popular, mas o
          efeito depende de cultura, contexto e combinação. Em vez de procurar a
          cor certa, escolha a que traduz o seu{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento
          </Link>
          : para quem você atende, com que tom você fala e como quer que o
          consultório seja lembrado.
        </p>
        <p>
          Se todos os consultórios da sua cidade usam azul claro e folhas, um
          verde mais fechado ou um terroso já ajuda a ser reconhecido. O erro
          comum é seguir a paleta da concorrência por segurança.
        </p>
      </section>

      <section>
        <h2>Monte uma paleta enxuta</h2>
        <ol>
          <li>
            <strong>Cor principal</strong>: a que aparece no logo e nos botões.
          </li>
          <li>
            <strong>Cor de apoio</strong>: para destaques, ícones e detalhes.
          </li>
          <li>
            <strong>Neutros</strong>: um tom claro de fundo e um escuro de texto,
            que sustentam o resto.
          </li>
        </ol>
        <p>
          Anote o código de cada cor (HEX para telas) e use sempre o mesmo. É
          isso que mantém o{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            sistema de identidade visual
          </Link>{" "}
          consistente em tudo.
        </p>
      </section>

      <section>
        <h2>Contraste: a cor precisa ser legível</h2>
        <p>
          Uma paleta bonita que não se lê não serve. A{" "}
          <a href={WCAG} {...ext}>
            WCAG 2.1, critério 1.4.3
          </a>{" "}
          pede contraste mínimo de 4,5:1 entre texto e fundo, e 3:1 para texto
          grande. Cores pastel claras com letra clara falham nesse teste com
          frequência. Teste a combinação antes de aprovar, em celular e em tela
          grande.
        </p>
      </section>

      <section>
        <h2>Da tela à sala</h2>
        <p>
          As cores do logo, do site e do Instagram devem aparecer também no
          espaço físico, em doses pequenas: uma parede, uma almofada, a
          papelaria, o{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita
          </Link>
          . Quando alguém conhece o consultório pelo Instagram e se reconhece na
          sala, a confiança construída online continua.
        </p>
      </section>

      <section>
        <h2>Atenção para o público sensível</h2>
        <p>
          Se o consultório atende crianças, em especial autistas e
          neurodivergentes, pense também na experiência sensorial: cores muito
          saturadas, contraste agressivo e excesso de estampa podem sobrecarregar
          algumas pessoas. Tons mais calmos, superfícies limpas e iluminação
          suave tendem a ser uma escolha segura, mas a resposta varia de criança
          para criança, e a conversa com a família diz mais que qualquer regra.
          Veja também{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>O que o Código de Ética tem a ver com isso</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20
          </a>{" "}
          não escolhe cores, mas vale para o que as peças dizem: nome completo,
          psicólogo(a) e CRP visíveis (e legíveis, o que volta ao contraste),
          sem promessa de resultado e sem sensacionalismo.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia a partir
          de dois encontros de imersão: posicionamento, identidade visual e verbal, entregues em até
          30 dias, dentro do artigo 20 do Código de Ética. A paleta sai do
          posicionamento, não do gosto do momento. Se quiser conversar sobre a
          sua marca, o primeiro passo é uma conversa de 15 minutos.
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
            W3C.{" "}
            <a href={WCAG} {...ext}>
              WCAG 2.1, critério 1.4.3 (contraste mínimo)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
