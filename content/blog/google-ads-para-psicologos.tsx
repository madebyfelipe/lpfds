import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ADS_POLITICAS = "https://support.google.com/adspolicy/answer/6008942?hl=pt-BR";
const ADS_SAUDE = "https://support.google.com/adspolicy/answer/176031?hl=pt-BR";
const ADS_INICIO = "https://support.google.com/google-ads/answer/6146252?hl=pt-BR";

export const post: Post = {
  slug: "google-ads-para-psicologos",
  title: "Google Ads para psicólogos: como anunciar dentro do artigo 20",
  description:
    "Google Ads para psicólogos: o que o anúncio pode dizer pelo Código de Ética, como escolher palavras-chave locais e para onde mandar o clique.",
  keyword: "google ads para psicólogos",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-11",
  summary:
    "Psicólogo pode anunciar no Google Ads, desde que o anúncio siga o artigo 20 do Código de Ética: nome, psicólogo(a) e CRP, sem preço como chamariz, sem promessa de resultado e sem sensacionalismo. O anúncio também precisa respeitar as políticas de publicidade do Google, e funciona melhor quando leva para uma página clara sobre para quem você atende.",
  faq: [
    {
      q: "Psicólogo pode fazer anúncio pago no Google?",
      a: "Pode. O Código de Ética não proíbe anúncio pago; ele regula o conteúdo. Nome, CRP, serviços reconhecidos pela profissão e nada de preço como chamariz, promessa de resultado ou sensacionalismo."
    },
    {
      q: "Posso colocar o valor da sessão no anúncio?",
      a: "Não como forma de propaganda. O artigo 20 veda usar o preço como chamariz, e isso inclui gratuidade, desconto e “valor acessível” no texto do anúncio."
    },
    {
      q: "Quanto custa anunciar no Google Ads?",
      a: "Não há um valor fixo: você define o orçamento e paga pelos cliques, que variam com a concorrência da palavra-chave e da região. Comece com um orçamento que caiba no mês e acompanhe as buscas que realmente geram contato."
    },
    {
      q: "Preciso de site para anunciar no Google Ads?",
      a: "O anúncio precisa levar para algum destino. Uma página própria, que diga para quem você atende e como agendar, costuma converter melhor que mandar direto para o Instagram."
    }
  ],
  cover: {
    src: "/blog/google-ads-para-psicologos/google-ads-para-psicologos-notebook-na-mesa.jpg",
    alt: "Notebook aberto sobre uma mesa clara com caderno, óculos e planta, espaço de trabalho",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O Google Ads coloca o seu consultório no topo da busca de quem já está
        procurando ajuda: “psicóloga infantil em Sorocaba”, “avaliação de
        autismo perto de mim”. Para psicólogos, a pergunta vem em duas partes:
        pode anunciar? E como anunciar sem gastar à toa? Este texto responde às
        duas.
      </p>

      <section>
        <h2>Pode anunciar? Sim, com as regras do artigo 20</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética Profissional do Psicólogo
          </a>{" "}
          não proíbe anúncio pago. Ele diz como divulgar, por qualquer meio:
        </p>
        <ul>
          <li>informar nome completo, CRP e número de registro;</li>
          <li>citar só títulos e qualificações que você possui;</li>
          <li>divulgar só técnicas e práticas reconhecidas pela profissão;</li>
          <li>não usar o preço como forma de propaganda;</li>
          <li>não fazer previsão taxativa de resultados;</li>
          <li>não fazer divulgação sensacionalista.</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          traz exemplos de anúncios adequados e inadequados. Vale ler antes de
          escrever o primeiro.
        </p>
      </section>

      <section>
        <h2>E as regras do próprio Google</h2>
        <p>
          Todo anúncio passa pelas{" "}
          <a href={ADS_POLITICAS} {...ext}>
            políticas de publicidade do Google Ads
          </a>
          . Há uma{" "}
          <a href={ADS_SAUDE} {...ext}>
            política específica de saúde e medicamentos
          </a>
          , que muda conforme o país e o tipo de serviço. Antes de subir a
          campanha, confira se algum termo que você pretende usar cai nessas
          restrições; um anúncio reprovado não aparece, mesmo com orçamento.
        </p>
      </section>

      <section>
        <h2>O que escrever no anúncio</h2>
        <p>Um anúncio de pesquisa tem títulos curtos e descrições. Um modelo dentro das regras:</p>
        <ul>
          <li>
            <strong>Título:</strong> “Psicóloga infantil em Sorocaba” · “Orientação
            a pais de crianças autistas” · “Presencial e online”.
          </li>
          <li>
            <strong>Descrição:</strong> “Atendimento a crianças e orientação a
            famílias. Nome Sobrenome, psicóloga, CRP 06/XXXXX (ilustrativo).
            Agende pelo WhatsApp.”
          </li>
        </ul>
        <p>O que fica de fora:</p>
        <ul>
          <li>“Primeira sessão grátis”, “valor social”, “a partir de R$…”;</li>
          <li>“Resultados em poucas sessões”, “acabe com a ansiedade”;</li>
          <li>“A melhor psicóloga da cidade”, “referência em autismo”;</li>
          <li>Diagnóstico como isca (“seu filho tem autismo? descubra agora”).</li>
        </ul>
      </section>

      <section>
        <h2>Palavras-chave: local e específica</h2>
        <p>
          Termos amplos como “psicólogo” são caros e trazem buscas de estudantes,
          concursos e curiosidade. Prefira combinações que revelam intenção e
          região:
        </p>
        <ul>
          <li>especialidade + cidade: “psicóloga infantil Sorocaba”;</li>
          <li>situação + formato: “orientação parental autismo online”;</li>
          <li>serviço + bairro, se o atendimento é presencial.</li>
        </ul>
        <p>
          Use palavras-chave negativas para cortar buscas que não viram consulta,
          como “curso”, “vaga”, “salário” e “grátis”. O{" "}
          <a href={ADS_INICIO} {...ext}>
            guia de primeiros passos do Google Ads
          </a>{" "}
          explica como configurar campanha, orçamento e segmentação por região.
        </p>
      </section>

      <section>
        <h2>Para onde mandar o clique</h2>
        <p>
          O anúncio traz a pessoa; a página decide se ela entra em contato. Uma
          boa página de destino responde em poucos segundos:
        </p>
        <ul>
          <li>quem você é, com nome, foto e CRP;</li>
          <li>para quem é o atendimento e em qual formato;</li>
          <li>onde fica o consultório, se houver presencial;</li>
          <li>como agendar, com um botão claro para o WhatsApp.</li>
        </ul>
        <p>
          Mandar o clique para o Instagram ou para a home genérica costuma
          desperdiçar orçamento. O que uma página assim precisa ter está em{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Antes de anunciar, confira a base</h2>
        <p>
          Anúncio amplifica o que já existe. Se o posicionamento é vago, o
          anúncio fica genérico e caro. Se o{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            perfil no Google
          </Link>{" "}
          está incompleto, quem pesquisa o seu nome depois do anúncio não encontra
          confirmação. Por isso a ordem costuma ser:{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento
          </Link>
          , identidade, site e perfil no Google, e só então anúncio.
        </p>
      </section>

      <section>
        <h2>Como medir sem se enganar</h2>
        <ul>
          <li>Acompanhe contatos (cliques no WhatsApp, ligações), não só cliques no anúncio.</li>
          <li>Revise os termos de pesquisa toda semana e negative o que não tem relação.</li>
          <li>Mude uma coisa por vez: texto, palavra-chave ou página.</li>
          <li>Defina antes quanto pode gastar por mês e respeite o limite.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe não gerencia campanhas: constrói a marca que vem antes
          delas. Em dois dias de imersão, definimos posicionamento, identidade
          visual e verbal e colocamos tudo no ar em 45 dias, dentro do artigo 20.
          Assim o anúncio, o site e o perfil no Google falam a mesma coisa. Se
          quiser conversar sobre a sua marca, o primeiro passo é uma conversa de
          15 minutos.
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
            Google.{" "}
            <a href={ADS_POLITICAS} {...ext}>
              Políticas de publicidade do Google Ads
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={ADS_SAUDE} {...ext}>
              Saúde e medicamentos — política do Google Ads
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={ADS_INICIO} {...ext}>
              Primeiros passos com o Google Ads
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
