import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA =
  "https://site.cfp.org.br/documentos/nota-tecnica-sobre-uso-profissional-das-redes-sociais-publicidade-e-cuidados-eticos";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "conteudo-para-psicologo-infantil",
  title: "Conteúdo para psicólogo infantil: ideias de posts para falar com os pais",
  description:
    "Ideias de conteúdo para psicólogo infantil escritas para os pais, e o que o Código de Ética veta: imagem de criança atendida, relato de caso e promessa.",
  keyword: "conteúdo para psicólogo infantil",
  tags: ["presenca-digital", "neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-11",
  summary:
    "O conteúdo de um psicólogo infantil é lido pelos pais, então deve responder às dúvidas deles: quando procurar ajuda, como funciona o atendimento, como é a orientação parental. Pela Nota Técnica nº 01/2022 do CFP e pelo artigo 20 do Código de Ética, ficam de fora imagem de criança atendida, relato de caso, promessa de resultado e conteúdo sensacionalista.",
  faq: [
    {
      q: "Psicólogo infantil pode postar foto de criança no Instagram?",
      a: "Não de criança atendida, nem de sessão ou material de atendimento: isso expõe o sigilo e a criança. Prefira o espaço do consultório, objetos, ilustrações próprias e a sua própria imagem."
    },
    {
      q: "Sobre o que um psicólogo infantil deve postar?",
      a: "Sobre o que os pais perguntam: sinais que merecem atenção, como é o primeiro encontro, o papel da família no processo, a relação com a escola. Conteúdo informativo, sem diagnóstico a distância."
    },
    {
      q: "Posso contar um caso de atendimento se mudar o nome?",
      a: "Não é recomendado. Mesmo com nome trocado, detalhes podem identificar a criança e a família, e o sigilo é dever do psicólogo pelo Código de Ética."
    },
    {
      q: "Com que frequência postar?",
      a: "Com a frequência que você consegue manter com qualidade. Um post útil por semana, com o mesmo tom e a mesma identidade, vale mais que posts diários sem direção."
    }
  ],
  body: (
    <>
      <p>
        Quem lê o conteúdo de um psicólogo infantil quase nunca é a criança: é a
        mãe no intervalo do trabalho, o pai que recebeu um bilhete da escola, a
        avó que quer entender o diagnóstico do neto. Escrever para esse adulto
        muda a escolha de temas, o tom e até as imagens. Abaixo, ideias
        organizadas por objetivo e as regras que valem para todas elas.
      </p>

      <section>
        <h2>As regras antes das ideias</h2>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica nº 01/2022 do CFP
          </a>{" "}
          trata do uso profissional das redes sociais, e o{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          vale para todo conteúdo que divulga o seu trabalho. Para quem atende
          crianças, os pontos de maior atenção:
        </p>
        <ul>
          <li>nada de imagem de criança atendida, de sessão ou de material produzido em atendimento;</li>
          <li>nada de relato de caso, mesmo com nome trocado;</li>
          <li>nada de diagnóstico a distância (“se seu filho faz isso, ele é autista”);</li>
          <li>nada de promessa de resultado nem de prazo;</li>
          <li>nome, psicólogo(a) e CRP visíveis no perfil.</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          traz exemplos práticos do que pode e do que não pode nas redes.
        </p>
      </section>

      <section>
        <h2>Ideias para responder “quando procurar ajuda?”</h2>
        <ol>
          <li>Diferença entre fase do desenvolvimento e sinal que merece avaliação, com cuidado para não diagnosticar.</li>
          <li>O que fazer quando a escola sugere procurar um psicólogo.</li>
          <li>Como conversar com a criança sobre ir ao psicólogo.</li>
          <li>Quem faz o quê: psicólogo, neuropsicólogo, psiquiatra infantil, neuropediatra.</li>
          <li>Perguntas para levar ao primeiro encontro.</li>
        </ol>
      </section>

      <section>
        <h2>Ideias para explicar como você trabalha</h2>
        <ol start={6}>
          <li>Como é o primeiro encontro com os responsáveis.</li>
          <li>Quanto tempo dura uma sessão e por que existe esse formato.</li>
          <li>O que é orientação parental e quando ela entra.</li>
          <li>Como funciona o contato com a escola, com autorização da família.</li>
          <li>Um tour pelo consultório: a sala, os brinquedos, a acessibilidade, sem criança na cena.</li>
          <li>Presencial ou online: o que muda no atendimento infantil.</li>
        </ol>
      </section>

      <section>
        <h2>Ideias para famílias de crianças autistas e neurodivergentes</h2>
        <ol start={12}>
          <li>O que muda (e o que não muda) depois do diagnóstico de autismo.</li>
          <li>Como explicar o diagnóstico para irmãos e avós.</li>
          <li>Direitos previstos em lei, com link para a fonte oficial.</li>
          <li>Rotina, previsibilidade e transições: dicas gerais para casa.</li>
          <li>Cuidar de quem cuida: o cansaço dos pais.</li>
          <li>Palavras e símbolos: como você fala sobre autismo e por quê.</li>
        </ol>
        <p>
          O último tema é tão importante que ganhou um texto próprio:{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa no consultório
          </Link>
          . A escolha de cores e símbolos está em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Ideias para mostrar quem você é</h2>
        <ol start={18}>
          <li>Por que você escolheu atender crianças e famílias.</li>
          <li>Sua formação, com os títulos que você realmente tem.</li>
          <li>Livros e materiais que você indica para os pais, com crédito.</li>
        </ol>
      </section>

      <section>
        <h2>Formato: o que funciona com pais sem tempo</h2>
        <ul>
          <li>
            <strong>Carrossel</strong> com uma pergunta na capa e a resposta em
            poucos slides.
          </li>
          <li>
            <strong>Vídeo curto</strong> com você falando, legendado, porque muita
            gente assiste sem som.
          </li>
          <li>
            <strong>Destaques</strong> fixos para “como funciona”, “primeiro
            encontro” e “onde fica”.
          </li>
          <li>
            <strong>Texto no blog</strong> para os temas que pedem mais espaço, o
            que ainda ajuda a ser encontrado no Google.
          </li>
        </ul>
        <p>
          Seja qual for o formato, use a mesma identidade visual do site e do
          perfil. Exemplos em{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>{" "}
          e em{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Imagens sem expor ninguém</h2>
        <ul>
          <li>Você, no consultório ou em fundo neutro.</li>
          <li>Objetos: brinquedos, livros, a mesa, a porta de entrada.</li>
          <li>Ilustrações e tipografia da sua identidade visual.</li>
          <li>Banco de imagem com licença comercial, sem cena de sessão.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Com o posicionamento
          definido, decidir o que postar fica mais simples. Se quiser conversar
          sobre a sua marca, o primeiro passo é uma conversa de 15 minutos.
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
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica nº 01/2022 — Uso Profissional das Redes Sociais: Publicidade e Cuidados Éticos
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
        </ul>
      </section>
    </>
  )
};
