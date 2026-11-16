import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LEI_TEA = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "marca-clinica-multidisciplinar-autismo",
  title: "Marketing para clínica multidisciplinar de autismo: uma marca, várias profissões",
  description:
    "Como comunicar uma clínica multidisciplinar de autismo: uma marca única, cada profissão com seu código de ética, equipe identificada e linguagem respeitosa.",
  keyword: "marketing para clínica multidisciplinar autismo",
  tags: ["neurodivergencia", "posicionamento"],
  publishedAt: "2026-11-12",
  summary:
    "A comunicação de uma clínica multidisciplinar de autismo precisa de uma marca única e de regras que respeitem cada profissão: psicologia, fonoaudiologia, terapia ocupacional e outras têm conselhos e códigos próprios. Identifique cada profissional com nome e registro, explique como a equipe trabalha em conjunto, use linguagem respeitosa com a comunidade autista e evite promessa de resultado.",
  faq: [
    {
      q: "Uma clínica multidisciplinar segue qual código de ética na divulgação?",
      a: "Cada profissional segue o código do seu conselho. A psicóloga segue o Código de Ética do Psicólogo, incluindo o artigo 20; as outras profissões seguem as regras dos respectivos conselhos. A peça da clínica deve respeitar todas ao mesmo tempo."
    },
    {
      q: "Como explicar o trabalho em equipe sem prometer resultado?",
      a: "Descreva o processo: como é a avaliação, quem participa, como as profissões conversam e como a família é ouvida. Evite prazos e metas (“fala em 3 meses”) e comparações com outras clínicas."
    },
    {
      q: "Posso usar fotos de crianças em terapia no site da clínica?",
      a: "Não. Pelo sigilo e pelo artigo 20, evite imagens de crianças atendidas, de sessões e de material de atendimento. Mostre o espaço vazio, a equipe e a fachada."
    },
    {
      q: "A clínica pode usar a peça de quebra-cabeça ou a cor azul?",
      a: "Pode, mas são símbolos contestados por parte da comunidade autista. Para uma marca nova, pense em elementos próprios, que não dependam de nenhum símbolo do tema."
    }
  ],
  cover: {
    src: "/blog/marca-clinica-multidisciplinar-autismo/marca-clinica-multidisciplinar-autismo-espaco-claro-com-plantas.jpg",
    alt: "Espaço amplo e iluminado com plantas, um banco de madeira e luz natural",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Uma clínica multidisciplinar de autismo comunica uma promessa difícil de
        explicar em uma frase: várias profissões trabalhando em conjunto, cada
        uma com a sua formação, a sua regra de divulgação e a sua forma de falar
        com a família. Quando a comunicação sai genérica, a família não entende
        quem faz o quê. Quando sai exagerada, esbarra nas regras de cada
        conselho.
      </p>

      <section>
        <h2>Uma marca, várias profissões</h2>
        <p>
          A marca da clínica é o que une as áreas. O{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento
          </Link>{" "}
          responde: para quem é a clínica, qual é o jeito de trabalhar e o que a
          família encontra de diferente. A identidade visual e verbal aplica essa
          resposta em site, redes, papelaria e fachada. O conceito se aplica
          também a clínicas; veja{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Cada profissional, com seu registro</h2>
        <p>
          Na divulgação, cada profissional é identificado pelo nome completo e
          pelo registro no respectivo conselho. Para psicólogos, o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          exige nome completo, psicólogo(a) e CRP; as outras profissões seguem
          as normas dos seus conselhos. A página da equipe do site é o lugar
          natural para isso, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          ajuda a conferir os detalhes do lado da psicologia.
        </p>
        <p>
          Estrutura do site: veja{" "}
          <Link href="/blog/site-para-clinica-de-psicologia" className="inst-link">
            site para clínica de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Explicar o trabalho em conjunto</h2>
        <ul>
          <li>Como é a primeira conversa e quem participa da avaliação.</li>
          <li>Como as profissões trocam informações e como a família recebe o retorno.</li>
          <li>Como a escola entra, com autorização da família.</li>
          <li>O que é feito na clínica e o que é orientação para a casa.</li>
        </ul>
        <p>
          Descreva o processo, não o resultado. Frases como “seu filho vai
          falar em poucos meses” violam a vedação de previsão taxativa de
          resultados.
        </p>
      </section>

      <section>
        <h2>Linguagem com a comunidade autista</h2>
        <p>
          A forma de falar de autismo diz muito sobre a clínica. Evite “sofre
          de”, “portador” e “cura”, e escolha uma forma de se referir à pessoa
          autista de modo consistente. A{" "}
          <a href={LEI_TEA} {...ext}>
            Lei nº 12.764/2012
          </a>{" "}
          é a referência para falar de direitos. O passo a passo da linguagem
          está em{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          , e o cuidado com símbolos em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Imagens e sigilo</h2>
        <ul>
          <li>Sem criança atendida, sessão ou material produzido em atendimento.</li>
          <li>Equipe, fachada e espaço vazio são as imagens mais seguras.</li>
          <li>Depoimento de família não é recomendado em divulgação de psicologia.</li>
        </ul>
      </section>

      <section>
        <h2>Erros comuns na marca de clínicas multidisciplinares</h2>
        <ul>
          <li><strong>Prometer “tratamento completo do autismo”</strong> ou falar em “recuperação”. Além de esbarrar no artigo 20, a linguagem soa desrespeitosa para muitas famílias e pessoas autistas.</li>
          <li><strong>Misturar as profissões</strong> numa lista única de “terapias”, sem dizer quem faz o quê. A família não entende o percurso, e cada profissional precisa aparecer com o próprio registro.</li>
          <li><strong>Usar a peça de quebra-cabeça</strong> como símbolo da clínica — um ícone contestado por parte da comunidade autista.</li>
          <li><strong>Fotos de crianças em atendimento</strong>, mesmo com autorização, que expõem quem está em acompanhamento.</li>
          <li><strong>Um tom diferente em cada canal</strong>: o Instagram fala de um jeito, o site de outro, a recepção de um terceiro.</li>
        </ul>
        <p>
          Esses erros costumam vir de decisões tomadas sem um posicionamento comum. Quando a equipe define junta para quem a clínica existe e como ela fala, a marca fica coerente em todos os pontos de contato. O texto sobre <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">marca para psicólogo que atende autismo</Link> detalha a linguagem.
        </p>
      </section>

      <section>
        <h2>Como explicar o percurso da família</h2>
        <p>
          Famílias que chegam a uma clínica multidisciplinar costumam ter a mesma dúvida: por onde começar. Uma marca clara responde isso antes da primeira ligação. Um exemplo ilustrativo de como apresentar o percurso:
        </p>
        <ul>
          <li><strong>Primeiro contato</strong> — a recepção escuta a demanda e explica as possibilidades, sem fazer triagem clínica por mensagem.</li>
          <li><strong>Acolhimento</strong> — uma conversa inicial com um profissional define quem acompanha a família.</li>
          <li><strong>Plano de acompanhamento</strong> — cada área envolvida explica o seu papel, com o profissional responsável identificado.</li>
          <li><strong>Conversa com a escola e a família</strong> — quando faz parte do trabalho, aparece como etapa, não como promessa.</li>
        </ul>
        <p>
          Descrever o percurso não promete resultado: mostra como a clínica trabalha. É o tipo de informação que o artigo 20 permite e que a família procura.
        </p>
      </section>

      <section>
        <h2>Checklist da marca</h2>
        <ul>
          <li>Cada profissão e cada profissional aparecem com o próprio registro?</li>
          <li>A clínica tem um símbolo próprio, sem quebra-cabeça nem clichês?</li>
          <li>A linguagem sobre autismo foi escolhida pela equipe e é igual em todos os canais?</li>
          <li>O percurso da família está explicado em poucas etapas?</li>
          <li>Nenhuma peça promete cura, recuperação ou resultado garantido?</li>
          <li>Nenhuma imagem mostra criança atendida ou material de sessão?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios e clínicas de
          psicologia a partir de dois encontros de imersão: posicionamento, identidade visual e
          verbal, entregues em até 30 dias, dentro do artigo 20 do Código de Ética. Para
          clínicas com outras profissões, cada uma continua obedecendo ao
          próprio conselho. Se quiser conversar sobre a sua marca, o primeiro
          passo é uma conversa de 15 minutos.
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
            , edição de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_TEA} {...ext}>
              Lei nº 12.764/2012
            </a>{" "}
            — Política Nacional de Proteção dos Direitos da Pessoa com Transtorno
            do Espectro Autista.
          </li>
        </ul>
      </section>
    </>
  )
};
