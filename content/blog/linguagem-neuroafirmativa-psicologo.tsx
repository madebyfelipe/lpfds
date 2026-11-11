import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LEI_TEA = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const KENNY = "https://doi.org/10.1177/1362361315588200";
const BOTTEMA = "https://doi.org/10.1089/aut.2020.0014";
const PUZZLE = "https://doi.org/10.1177/1362361317727125";

export const post: Post = {
  slug: "linguagem-neuroafirmativa-psicologo",
  title: "Linguagem neuroafirmativa: como falar de autismo no site e nas redes do consultório",
  description:
    "O que é linguagem neuroafirmativa, como escolher entre “autista” e “pessoa com autismo” e quais palavras revisar no site e no Instagram do consultório.",
  keyword: "linguagem neuroafirmativa",
  tags: ["neurodivergencia", "posicionamento"],
  publishedAt: "2026-11-11",
  summary:
    "Linguagem neuroafirmativa é falar de autismo e de outras neurodivergências como formas de funcionamento, e não como algo a corrigir. Na comunicação do consultório, isso aparece na escolha entre “autista” e “pessoa com autismo”, em evitar termos como “sofre de” e “cura”, e em símbolos e imagens. Pesquisas com a comunidade autista mostram que não há termo único preferido por todos, então coerência e escuta importam mais que uma regra fixa.",
  faq: [
    {
      q: "É mais correto dizer “autista” ou “pessoa com autismo”?",
      a: "Não há consenso. Em pesquisa com a comunidade autista do Reino Unido, “autista” foi bem aceito por muitos adultos autistas, enquanto profissionais tendiam a usar “pessoa com autismo”. No site, escolha uma forma, explique o porquê se quiser e respeite como cada família prefere ser tratada."
    },
    {
      q: "O que evitar ao falar de autismo nas redes?",
      a: "Expressões como “sofre de autismo”, “portador de autismo”, “cura”, “grau leve/grave” usados como rótulo e qualquer promessa de “tirar” características. Também evite diagnóstico a distância."
    },
    {
      q: "Linguagem neuroafirmativa significa não falar de dificuldades?",
      a: "Não. Dá para falar de desafios, de sofrimento e de apoio sem tratar a pessoa como um problema. A mudança está em descrever necessidades e contextos, não em negar que eles existem."
    },
    {
      q: "Posso usar a peça de quebra-cabeça na marca?",
      a: "Pode, mas ela é contestada por parte da comunidade autista e um estudo encontrou associações negativas com o símbolo. Para uma marca nova, costuma ser melhor escolher outro elemento."
    }
  ],
  body: (
    <>
      <p>
        Quando uma família procura um consultório depois de um diagnóstico de
        autismo, ela lê com atenção cada palavra do site e do Instagram. Uma
        frase como “ajudamos crianças que sofrem de autismo” pode afastar
        justamente quem você quer atender. Este texto explica o que é linguagem
        neuroafirmativa e como revisar a comunicação do consultório sem virar
        um manual de palavras proibidas.
      </p>

      <section>
        <h2>O que é linguagem neuroafirmativa</h2>
        <p>
          É uma forma de falar sobre autismo, TDAH e outras neurodivergências que
          trata essas condições como parte de quem a pessoa é, e não como um
          defeito a ser eliminado. Ela não nega dificuldades nem a necessidade de
          apoio; muda o foco do “consertar” para o “compreender e apoiar”.
        </p>
        <p>
          Um artigo de{" "}
          <a href={BOTTEMA} {...ext}>
            Bottema-Beutel e colegas, publicado na revista <em>Autism in Adulthood</em>
          </a>
          , reuniu sugestões para evitar linguagem capacitista ao escrever sobre
          autismo. Embora escrito para pesquisadores, ele serve de referência para
          qualquer texto público, inclusive o de um consultório.
        </p>
      </section>

      <section>
        <h2>“Autista” ou “pessoa com autismo”?</h2>
        <p>
          É a dúvida mais comum. Uma pesquisa de{" "}
          <a href={KENNY} {...ext}>
            Kenny e colegas, publicada na revista <em>Autism</em>
          </a>
          , ouviu a comunidade autista do Reino Unido (pessoas autistas,
          familiares e profissionais) e encontrou preferências diferentes entre
          os grupos: “autista” foi bem aceito por muitos adultos autistas,
          enquanto profissionais usavam mais “pessoa com autismo”. Não existe um
          termo que agrade a todos.
        </p>
        <p>Na prática, para o consultório:</p>
        <ul>
          <li>escolha uma forma principal e use de modo consistente no site e nas redes;</li>
          <li>se quiser, explique a escolha num post ou na página “sobre”;</li>
          <li>na conversa individual, use o termo que a família e a pessoa preferem.</li>
        </ul>
        <p>
          No campo legal, a{" "}
          <a href={LEI_TEA} {...ext}>
            Lei nº 12.764/2012
          </a>{" "}
          usa “pessoa com transtorno do espectro autista” e a considera pessoa com
          deficiência para todos os efeitos legais. Usar o termo da lei ao falar
          de direitos é natural; isso não obriga a usá-lo em todo o resto.
        </p>
      </section>

      <section>
        <h2>Palavras para revisar no site e no Instagram</h2>
        <ul>
          <li>
            <strong>“Sofre de autismo”</strong> → “é autista”, “tem diagnóstico
            de autismo”.
          </li>
          <li>
            <strong>“Portador de autismo”</strong> → “autista” ou “pessoa autista”.
          </li>
          <li>
            <strong>“Cura”, “tratar o autismo”</strong> → falar do que o
            atendimento oferece: apoio, desenvolvimento de habilidades,
            orientação à família.
          </li>
          <li>
            <strong>“Normal” em oposição a autista</strong> → “neurotípico”,
            quando o contraste for necessário.
          </li>
          <li>
            <strong>“Grau leve, moderado, grave” como rótulo</strong> → descrever
            o nível de suporte de que a pessoa precisa, quando fizer sentido.
          </li>
          <li>
            <strong>“Anjo azul”, “mundo próprio”</strong> → expressões que
            romantizam ou isolam; prefira descrever.
          </li>
        </ul>
      </section>

      <section>
        <h2>E as promessas?</h2>
        <p>
          Linguagem neuroafirmativa e artigo 20 apontam para o mesmo lugar. O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          veda previsão taxativa de resultados, e textos como “seu filho vai
          falar em X meses” ou “reduza os comportamentos autistas” ferem as duas
          coisas. Descreva o que você faz, para quem e como, sem prometer onde a
          criança vai chegar.
        </p>
      </section>

      <section>
        <h2>Símbolos e imagens também comunicam</h2>
        <p>
          A peça de quebra-cabeça é o símbolo mais conhecido do autismo, mas é
          contestada por parte da comunidade autista. Um{" "}
          <a href={PUZZLE} {...ext}>
            estudo publicado na revista <em>Autism</em>
          </a>{" "}
          encontrou associações negativas com peças de quebra-cabeça, inclusive em
          logos ligados ao autismo. O símbolo do infinito em arco-íris ou dourado
          é usado por muitas pessoas autistas como alternativa. Para a marca do
          consultório, um caminho mais seguro é não depender de nenhum símbolo do
          tema; veja{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como aplicar sem engessar</h2>
        <ol>
          <li>Leia o site, a bio e os destaques com uma lista das palavras acima.</li>
          <li>Defina os termos principais e anote num guia de tom de voz.</li>
          <li>Revise os posts fixados primeiro: são os mais lidos.</li>
          <li>Escute: famílias e pessoas autistas dizem como preferem ser tratadas.</li>
          <li>Revise de tempos em tempos; a linguagem da comunidade muda.</li>
        </ol>
        <p>
          Ideias de temas para colocar isso em prática estão em{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A identidade verbal
          inclui o vocabulário com que o consultório fala de autismo e
          neurodivergência. Se quiser conversar sobre a sua marca, o primeiro
          passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Kenny, L. et al.{" "}
            <a href={KENNY} {...ext}>
              Which terms should be used to describe autism? Perspectives from the
              UK autism community
            </a>
            . <em>Autism</em>.
          </li>
          <li>
            Bottema-Beutel, K. et al.{" "}
            <a href={BOTTEMA} {...ext}>
              Avoiding Ableist Language: Suggestions for Autism Researchers
            </a>
            . <em>Autism in Adulthood</em>.
          </li>
          <li>
            Gernsbacher, M. A. et al.{" "}
            <a href={PUZZLE} {...ext}>
              Do puzzle pieces and autism puzzle piece logos evoke negative
              associations?
            </a>{" "}
            <em>Autism</em>.
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_TEA} {...ext}>
              Lei nº 12.764/2012
            </a>{" "}
            — Política Nacional de Proteção dos Direitos da Pessoa com Transtorno
            do Espectro Autista.
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
        </ul>
      </section>
    </>
  )
};
