import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES11 = "https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf";
const META_ADS = "https://transparency.meta.com/pt-br/policies/ad-standards/";

export const post: Post = {
  slug: "impulsionar-post-psicologo",
  title: "Psicólogo pode impulsionar post no Instagram? Regras e cuidados",
  description:
    "Psicólogo pode pagar para impulsionar post no Instagram, desde que o conteúdo siga o Código de Ética. O que pode ir no anúncio, o que evitar e como segmentar.",
  keyword: "psicólogo pode impulsionar post",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-21",
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
    },
    {
      q: "Posso pedir para uma agência impulsionar por mim?",
      a: "Pode. A Nota Técnica do CFP lembra que a responsabilidade pelo conteúdo continua sendo do psicólogo, então revise cada anúncio antes de ir ao ar."
    },
    {
      q: "Posso anunciar atendimento online para outras cidades?",
      a: "Pode, desde que o atendimento online siga a Resolução CFP nº 11/2018 e o anúncio respeite o artigo 20. Deixe claro que o atendimento é online e mantenha o CRP visível."
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
        <p>
          Outro cuidado: o público de pais de crianças neurodivergentes troca
          muita informação em grupos e indicações. Um post pago que leva a uma
          página clara, com quem você atende, como é a primeira conversa e o seu
          CRP, também serve para quem recebeu o seu nome de outra mãe e foi
          conferir. Material educativo que você já tem, como os do guia de{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais
          </Link>
          , costuma render bons posts para impulsionar.
        </p>
      </section>

      <section>
        <h2>Erros comuns ao impulsionar post</h2>
        <ul>
          <li>
            <strong>Impulsionar o post que “bombou” sem reler.</strong> Um post
            orgânico pode ter um tom que passa no perfil e soa como promessa
            quando aparece para desconhecidos. Releia como se fosse anúncio,
            porque ele é.
          </li>
          <li>
            <strong>Colocar valor, desconto ou sessão gratuita.</strong> É o
            caso mais claro de preço como propaganda. Veja{" "}
            <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
              psicólogo pode divulgar preço?
            </Link>
          </li>
          <li>
            <strong>Usar print de mensagem de paciente.</strong> Mesmo com o
            nome escondido, é depoimento. O assunto está em{" "}
            <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
              depoimento de paciente
            </Link>
            .
          </li>
          <li>
            <strong>Escolher o objetivo “mensagens” sem estar pronta para
            responder.</strong>{" "}
            Se o post leva ao WhatsApp, combine antes como e quando você
            responde, e o que diz no primeiro contato.
          </li>
          <li>
            <strong>Segmentar por condição de saúde.</strong> Além do risco
            com as regras da Meta, o texto acaba falando diretamente com a dor
            de quem vê, o que beira o sensacionalismo.
          </li>
          <li>
            <strong>Mandar o clique para um perfil desorganizado.</strong> Bio
            sem CRP, sem explicação de quem você atende e sem link útil faz a
            pessoa sair. Revise o{" "}
            <Link href="/blog/link-na-bio-psicologo" className="inst-link">
              link na bio
            </Link>{" "}
            antes de pagar.
          </li>
        </ul>
      </section>

      <section>
        <h2>Exemplo ilustrativo de post para impulsionar</h2>
        <p>
          <em>Exemplo fictício, com nome e registro inventados, só para mostrar
          o formato.</em>
        </p>
        <blockquote>
          <p>
            “Como funciona a primeira conversa com os pais. Antes de começar o
            atendimento de uma criança, eu converso com a família para entender
            a rotina, as dúvidas e o que levou vocês a procurar ajuda. Nesse
            encontro explico como trabalho e respondemos juntos se faz sentido
            seguir. Ana Exemplo, psicóloga, CRP 00/00000.”
          </p>
        </blockquote>
        <p>
          O que esse texto faz: explica um passo concreto, diz para quem é,
          traz nome, profissão e registro, e não tem preço, prazo, promessa ou
          urgência. Em formato de carrossel, cada etapa pode virar um slide; veja{" "}
          <Link href="/blog/carrossel-instagram-psicologo" className="inst-link">
            carrossel no Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Checklist antes de impulsionar</h2>
        <ol>
          <li>O post traz nome completo, “psicóloga(o)” e CRP, na arte ou na legenda?</li>
          <li>Não há valor, desconto, gratuidade, promessa de resultado nem urgência?</li>
          <li>Não há depoimento, print ou imagem de paciente?</li>
          <li>A segmentação é por região e interesse amplo, sem condição de saúde?</li>
          <li>O destino (perfil, site ou WhatsApp) tem informação completa?</li>
          <li>Você sabe quem vai moderar os comentários e em quanto tempo?</li>
          <li>Se outra pessoa cria o anúncio, você revisou a versão final?</li>
          <li>Você definiu um orçamento e uma data de fim antes de começar?</li>
        </ol>
        <p>
          Para saber se o anúncio trouxe visitas ao site, veja{" "}
          <Link href="/blog/metricas-site-psicologo" className="inst-link">
            métricas do site do psicólogo
          </Link>
          . E se a ideia é ter uma página só para receber quem vem do anúncio,{" "}
          <Link href="/blog/landing-page-psicologo" className="inst-link">
            landing page para psicólogo
          </Link>{" "}
          mostra o que colocar nela.
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
            Conselho Federal de Psicologia.{" "}
            <a href={RES11} {...ext}>
              Resolução CFP nº 11/2018
            </a>{" "}
            (serviços psicológicos por tecnologias da informação e comunicação).
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
