import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const META_ADS = "https://transparency.meta.com/pt-br/policies/ad-standards/";

export const post: Post = {
  slug: "impulsionar-post-psicologo",
  title: "Psicólogo pode impulsionar post no Instagram? Regras e cuidados",
  description:
    "Psicólogo pode pagar para impulsionar post no Instagram, desde que o conteúdo siga o Código de Ética. O que pode ir no anúncio, o que evitar e como segmentar.",
  keyword: "psicólogo pode impulsionar post",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-12",
  summary:
    "Pode. O Conselho de Psicologia não restringe os meios de divulgação, então anúncio pago e post impulsionado são permitidos. O que muda é a responsabilidade: o conteúdo impulsionado segue as mesmas regras do artigo 20 (nada de preço como chamariz, promessa, sensacionalismo ou depoimento) e precisa trazer nome completo, titulação e CRP. Também valem as políticas de anúncios da Meta.",
  faq: [
    {
      q: "Impulsionar post é diferente de anunciar?",
      a: "Para as normas da profissão, não. Os dois são publicidade e seguem o Código de Ética. A diferença é técnica: impulsionar parte de um post que já existe; o anúncio é criado no Gerenciador de Anúncios, com mais opções."
    },
    {
      q: "Posso impulsionar post com o valor da sessão?",
      a: "Não. O artigo 20 veda usar preço como forma de propaganda. Um post pago com valor ou desconto é exatamente isso."
    },
    {
      q: "Que tipo de post vale impulsionar?",
      a: "Posts que explicam como você trabalha, para quem é o atendimento e como é o primeiro contato, ou conteúdos educativos que respondem a dúvidas reais do seu público, com base na ciência psicológica."
    }
  ],
  cover: {
    src: "/blog/impulsionar-post-psicologo/impulsionar-post-psicologo-celular-na-mesa.jpg",
    alt: "Celular com a tela em branco sobre uma mesa branca ao lado de notebook, caderno e café",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Impulsionar um post é a forma mais simples de anúncio no Instagram: você
        escolhe uma publicação, um público e um valor, e ela aparece para mais
        gente. Para psicólogas, a dúvida é se isso é permitido. É, com
        condições.
      </p>

      <section>
        <h2>O que as normas dizem</h2>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          afirma que o Conselho de Psicologia não restringe os locais e meios de
          publicidade (internet, redes sociais, jornais e outros) e que cabe à
          psicóloga avaliar os recursos mais adequados ao serviço e ao público. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          diz o mesmo sobre a autonomia para escolher os meios e acrescenta que a
          divulgação deve seguir o Código de Ética, as resoluções do CFP sobre
          publicidade e o Código de Defesa do Consumidor.
        </p>
        <p>
          Ou seja, pagar para aparecer não é o problema. O problema seria o que
          aparece. O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20
          </a>{" "}
          vale inteiro para o post impulsionado.
        </p>
      </section>

      <section>
        <h2>O que pode e o que evitar no post pago</h2>
        <div className="inst-blog__table" role="region" aria-label="Post impulsionado de psicólogo: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Post impulsionado de psicólogo: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">No anúncio</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Como funciona o atendimento e para quem é</td><td>Sim</td></tr>
              <tr><td>Conteúdo educativo baseado na ciência psicológica</td><td>Sim</td></tr>
              <tr><td>Nome completo, “psicóloga(o)” e CRP</td><td>Deve</td></tr>
              <tr><td>Valor, desconto ou “primeira sessão grátis”</td><td>Não</td></tr>
              <tr><td>“Resultados em poucas sessões”</td><td>Não</td></tr>
              <tr><td>Depoimento ou print de paciente</td><td>Não</td></tr>
              <tr><td>Urgência (“últimas vagas”, “só hoje”)</td><td>Evitar (indução)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Cuidados práticos</h2>
        <ul>
          <li>
            <strong>Segmentação.</strong> Prefira segmentar por região e
            interesse amplo. As{" "}
            <a href={META_ADS} {...ext}>
              políticas de anúncios da Meta
            </a>{" "}
            restringem anúncios que sugerem saber condições de saúde de quem os
            vê, como “Você tem ansiedade?”.
          </li>
          <li>
            <strong>Destino.</strong> Leve a pessoa a um lugar com informação
            completa: o perfil organizado ou uma página do site.
          </li>
          <li>
            <strong>Comentários.</strong> Post pago atrai comentários de
            desconhecidos. Não responda dúvidas clínicas em público; convide para
            o contato privado.
          </li>
          <li>
            <strong>Terceiros.</strong> Se outra pessoa gerencia os anúncios, a
            responsabilidade pelo conteúdo continua sendo sua, como diz a Nota
            Técnica.
          </li>
        </ul>
        <p>
          Para anúncios no Google, veja{" "}
          <Link href="/blog/google-ads-para-psicologos" className="inst-link">
            Google Ads para psicólogos
          </Link>
          ; para o perfil que recebe o clique,{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Evite anúncios em tom de alerta (“seu filho pode ser autista”) ou listas
          de sinais impulsionadas para pais: além de beirar o diagnóstico à
          distância, esse tipo de peça gera medo e esbarra nas regras da Meta.
          Funciona melhor um post que explica com calma como é o primeiro
          contato com os pais. Ideias em{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental: como divulgar
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe prepara a marca e o perfil do consultório para receber
          quem chega por anúncio: posicionamento, identidade visual e verbal a
          partir de dois encontros de imersão, entregues em até 30 dias, dentro do artigo 20. Se quiser
          conversar sobre o seu caso, o primeiro passo é uma conversa de 15
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
            , arts. 2º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (“Formas e locais de divulgação”).
          </li>
          <li>
            Meta.{" "}
            <a href={META_ADS} {...ext}>
              Padrões de publicidade
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
