import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const GOOGLE_SEO = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";

export const post: Post = {
  slug: "criacao-de-site-para-psicologos",
  title: "Criação de site para psicólogos: a pesquisa que vem antes do design",
  description:
    "Como pesquisamos nicho, público, concorrentes e palavras-chave antes de desenhar o site profissional de uma psicóloga — e por que isso muda o resultado.",
  keyword: "criação de site para psicólogos",
  tags: ["presenca-digital", "posicionamento"],
  publishedAt: "2026-11-09",
  summary:
    "Um site profissional para psicólogo começa pela pesquisa, não pelo layout: entender o nicho e o público, olhar como os consultórios da região se apresentam e descobrir com que palavras as pessoas buscam atendimento. Com isso, a estrutura, os textos e o SEO do site nascem prontos para quem você quer atender — e dentro do artigo 20 do Código de Ética.",
  faq: [
    { q: "Quanto custa criar um site para psicólogo?", a: "Varia muito: há construtores com mensalidade, profissionais autônomos e estúdios que fazem o site dentro de um projeto de marca. Compare o que está incluído — pesquisa, textos, SEO, domínio, hospedagem e suporte —, não só o valor final." },
    { q: "Como fazer um site para psicólogo?", a: "Comece pela pesquisa (público, concorrentes e palavras-chave), defina a estrutura a partir das perguntas do seu público, escreva textos dentro do artigo 20 com nome e CRP visíveis, e cuide do SEO técnico: título, descrição, dados estruturados e sitemap." },
    {
      q: "Quanto tempo leva a criação de um site para psicólogo?",
      a: "Depende do escopo de cada estúdio. Na Made by Felipe, o site faz parte do projeto de marca: dois encontros de imersão e tudo apresentado em até 30 dias, com o site entre as entregas."
    },
    {
      q: "Preciso saber de SEO para ter um site que aparece no Google?",
      a: "Não. A pesquisa de palavras-chave e os cuidados técnicos (título, descrição, estrutura de títulos, dados estruturados, sitemap) ficam com quem desenvolve o site. A você cabe contar como trabalha e para quem — é disso que o conteúdo é feito."
    },
    {
      q: "Site com template pronto não resolve?",
      a: "Resolve a existência de um endereço, mas não o posicionamento. Um template não sabe para quem você atende nem com que palavras essas pessoas procuram. Por isso a pesquisa vem antes da escolha visual."
    },
    {
      q: "O site garante que vou aparecer em primeiro no Google?",
      a: "Não. Ninguém pode garantir posição no Google. O que a pesquisa e o SEO bem feito fazem é aumentar a chance de o site ser encontrado pelas buscas certas — e de quem chega entender rápido o seu trabalho."
    }
  ],
  cover: {
    src: "/blog/criacao-de-site-para-psicologos/criacao-de-site-para-psicologos-wireframe.jpg",
    alt: "Caderno aberto com o esboço a lápis de um site, com blocos de texto e imagem, sobre uma mesa de madeira",
    caption: "Foto: FOCA Stock / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Quando uma psicóloga decide ter um site, a primeira conversa costuma ser
        sobre aparência: cores, fotos, um modelo que ela viu e gostou. É
        compreensível — mas é começar pelo fim. Um site profissional que
        funciona nasce de perguntas que vêm antes do design: para quem é, o que
        essas pessoas procuram, como os outros consultórios se apresentam e com
        que palavras alguém digita a própria necessidade no Google.
      </p>
      <p>
        Este texto mostra o método de pesquisa que usamos antes de desenhar o
        site de uma psicóloga. Ele serve tanto para quem vai contratar a criação
        do site quanto para quem quer entender o que perguntar a quem vai fazer.
      </p>

      <section>
        <h2>Por que pesquisar antes de desenhar</h2>
        <p>
          O site é a versão mais completa da marca de um consultório. É onde a
          pessoa indicada confere quem você é, e onde quem ainda não conhece
          você chega por uma busca. Se ele é desenhado sem saber para quem
          fala, vira uma vitrine bonita e genérica — parecida com dezenas de
          outras.
        </p>
        <p>
          A pesquisa transforma decisões de gosto em decisões com critério: que
          seções o site precisa ter, em que ordem, com que tom, que perguntas
          ele responde e que termos ele usa. É a mesma lógica do{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento
          </Link>
          , aplicada a uma página.
        </p>
      </section>

      <section>
        <h2>Etapa 1: o nicho e a prática real</h2>
        <p>
          Começamos pela prática do consultório como ela é, não como seria no
          ideal: quem a psicóloga atende melhor, que demandas chegam com mais
          frequência, em que formato (presencial, online, os dois), em que
          cidade, e onde estão a formação e a experiência dela.
        </p>
        <p>
          Esse levantamento acontece nos dois encontros de imersão do{" "}
          <Link href="/metodologia" className="inst-link">
            método PSIQUE
          </Link>
          . O resultado é uma frase de foco — por exemplo, “atendimento de
          crianças e adolescentes, com orientação aos pais, presencial em
          [cidade] e online” — que orienta todo o resto. Um cuidado desde já: o
          site só pode citar títulos e qualificações que a profissional possui,
          como pede o artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          .
        </p>
      </section>

      <section>
        <h2>Etapa 2: o público e o que ele precisa saber</h2>
        <p>
          Depois, olhamos para quem vai visitar o site. Em consultórios infantis,
          por exemplo, quem pesquisa é quase sempre o responsável — muitas vezes
          uma família que acabou de receber uma orientação da escola ou um laudo
          e que chega com pressa e com muitas dúvidas. Falamos sobre esse público
          em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>
          .
        </p>
        <p>Para cada público, listamos as perguntas que ele traz antes do primeiro contato:</p>
        <ul>
          <li>Ela atende a faixa etária e a demanda que eu tenho?</li>
          <li>Como funciona o atendimento — formato, frequência, duração?</li>
          <li>Qual é a formação dela?</li>
          <li>Como é o primeiro contato e o que acontece depois?</li>
        </ul>
        <p>
          Essas perguntas viram a estrutura do site. Cada uma precisa ter
          resposta fácil de encontrar — idealmente sem rolar muito.
        </p>
      </section>

      <section>
        <h2>Etapa 3: como os concorrentes se apresentam</h2>
        <p>
          Em seguida, pesquisamos os consultórios que aparecem para as mesmas
          buscas na região e no nicho: sites, perfis no Google e no Instagram. A
          intenção não é copiar nem se comparar publicamente — o artigo 20 veda
          a autopromoção em detrimento de outros profissionais —, e sim entender
          o cenário:
        </p>
        <ul>
          <li>Que informações todos dão, e quais quase ninguém dá?</li>
          <li>Que linguagem é comum (e que clichês visuais se repetem)?</li>
          <li>Que dúvidas do público ficam sem resposta?</li>
        </ul>
        <p>
          O que ninguém explica bem costuma ser exatamente o espaço que o novo
          site pode ocupar — com clareza, não com superlativos.
        </p>
      </section>

      <section>
        <h2>Etapa 4: as palavras-chave</h2>
        <p>
          A última camada da pesquisa é a linguagem de busca: como as pessoas
          escrevem a própria necessidade no Google. Raramente é o termo técnico
          que a profissional usaria. Para encontrar essas palavras, combinamos:
        </p>
        <ul>
          <li>
            <strong>Autocompletar do Google</strong> — as sugestões que aparecem
            enquanto se digita mostram combinações que as pessoas realmente
            buscam.
          </li>
          <li>
            <strong>Perguntas reais</strong> — as dúvidas que chegam no WhatsApp
            e no direct da psicóloga são as melhores palavras-chave de cauda
            longa.
          </li>
          <li>
            <strong>Busca local</strong> — termos com a cidade ou o bairro, para
            quem atende presencialmente.
          </li>
          <li>
            <strong>Dados do Search Console</strong> — quando o site já existe,
            mostram as buscas que levaram alguém até ele.
          </li>
        </ul>
        <p>
          Escolhemos uma palavra-chave principal para cada página e algumas
          secundárias, sem repetir o mesmo termo em duas páginas — senão elas
          competem entre si.
        </p>
      </section>

      <section>
        <h2>Como a pesquisa vira o site</h2>
        <p>Com as quatro etapas, as decisões de design e de texto deixam de ser chute:</p>
        <ul>
          <li>
            <strong>Estrutura</strong> — as seções seguem as perguntas do
            público, na ordem em que elas aparecem.
          </li>
          <li>
            <strong>Texto</strong> — descreve o que a psicóloga faz, para quem e
            como, sem preço como chamariz, sem promessa de resultado e com nome
            completo e CRP visíveis.
          </li>
          <li>
            <strong>Visual</strong> — segue a identidade da marca, com contraste
            suficiente para leitura e imagens que não expõem pacientes nem
            sessões.
          </li>
          <li>
            <strong>SEO técnico</strong> — título e descrição únicos por página,
            hierarquia de títulos coerente, endereço (URL) com a palavra-chave,
            dados estruturados, imagens com texto alternativo, sitemap e um único
            domínio canônico, seguindo o{" "}
            <a href={GOOGLE_SEO} {...ext}>
              guia de SEO do Google
            </a>
            .
          </li>
        </ul>
        <figure className="inst-blog__cover">
          <Image
            src="/cases/exemplo-site-para-psicologa-dados-ficticios.jpg"
            alt="Exemplo de site para psicóloga no computador e no celular, com título acolhedor, menu com atuação e abordagem e botão de agendar"
            width={960}
            height={880}
            sizes="(max-width: 900px) 100vw, 680px"
            className="inst-case__img"
          />
          <figcaption className="inst-blog__caption">
            Exemplo ilustrativo com dados fictícios — não representa uma cliente
            real. Veja o processo completo na{" "}
            <Link href="/cases" className="inst-link">
              página de cases
            </Link>
            .
          </figcaption>
        </figure>
      </section>

      <section>
        <h2>O que o site precisa ter no fim</h2>
        <p>
          O resultado da pesquisa aparece em um site enxuto, com página
          inicial clara, “Sobre” com formação e CRP, explicação do atendimento,
          contato direto e páginas legais quando há coleta de dados. A lista
          completa — e o que o Código de Ética não permite — está em{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site para psicólogo: o que precisa ter
          </Link>
          . Para quem atende presencialmente, o{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Perfil da Empresa no Google
          </Link>{" "}
          completa a presença local.
        </p>
      </section>

      <section>
        <h2>O que perguntar a quem vai criar o seu site</h2>
        <ul>
          <li>Que pesquisa vocês fazem antes do layout — nicho, público, concorrentes, palavras-chave?</li>
          <li>Como o site trata as regras do artigo 20 e as orientações do CRP?</li>
          <li>Quem cuida do SEO técnico (título, descrição, dados estruturados, sitemap)?</li>
          <li>O site fica no meu domínio e os arquivos ficam comigo?</li>
          <li>Como funciona o suporte depois da entrega?</li>
        </ul>
        <p>
          A cartilha de publicidade do{" "}
          <a href={CARTILHA} {...ext}>
            CRP-MG
          </a>{" "}
          é um bom material para levar a essa conversa.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, o site faz parte do projeto de marca do consultório:
          dois encontros de imersão, posicionamento, identidade visual e verbal, entregues em
          até 30 dias, dentro do artigo 20 do Código de Ética. O passo a passo do
          processo criativo está na{" "}
          <Link href="/cases" className="inst-link">
            página de cases
          </Link>
          . Se quiser conversar sobre o site do seu consultório, o primeiro passo
          é uma conversa de 15 minutos.
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
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Google Search Central.{" "}
            <a href={GOOGLE_SEO} {...ext}>
              Guia de otimização de mecanismos de pesquisa (SEO) para iniciantes
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
