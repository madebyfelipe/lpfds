import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const GOOGLE_SEO = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";
const GOOGLE_UTIL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";
const WCAG = "https://www.w3.org/TR/WCAG21/";

export const post: Post = {
  slug: "seo-para-psicologos",
  title: "SEO para psicólogos: como o consultório aparece no Google sem ferir o Código de Ética",
  description:
    "SEO para psicólogos na prática: palavras que os pacientes buscam, páginas do site, Perfil da Empresa, conteúdo útil e o que o artigo 20 limita nos textos.",
  keyword: "seo para psicólogos",
  tags: ["presenca-digital"],
  publishedAt: "2026-11-12",
  summary:
    "SEO é o trabalho de fazer o site do consultório ser entendido e mostrado pelo Google para quem procura o seu tipo de atendimento. Para psicólogos, ele se apoia em quatro partes: saber o que as pessoas buscam, ter uma página clara para cada serviço, manter o Perfil da Empresa no Google em dia e publicar conteúdo útil. Tudo dentro do artigo 20: palavra-chave não pode virar promessa, preço como chamariz ou superlativo.",
  faq: [
    {
      q: "Quanto tempo o SEO leva para dar resultado?",
      a: "Não há prazo garantido. O Google precisa encontrar, ler e avaliar as páginas, e a concorrência muda de cidade para cidade. Desconfie de quem promete primeira posição ou data certa: nem o próprio Google faz essa promessa."
    },
    {
      q: "Psicólogo precisa de blog para aparecer no Google?",
      a: "Não é obrigatório, mas ajuda. As páginas de serviço respondem a quem já sabe o que procura; os artigos respondem a dúvidas anteriores, como “quando levar meu filho ao psicólogo”, e mostram como você pensa."
    },
    {
      q: "Posso usar “melhor psicólogo da cidade” como palavra-chave?",
      a: "Não. Superlativo sem prova é autopromoção, vedada pelo artigo 20 do Código de Ética, e ainda pode ser publicidade enganosa pelo CDC. Use o que descreve o atendimento: público, abordagem, cidade e formato."
    },
    {
      q: "SEO local é diferente de SEO do site?",
      a: "É uma parte dele. O SEO local cuida de aparecer no mapa e nas buscas com cidade ou bairro, e depende muito do Perfil da Empresa no Google: nome real, endereço, categoria e horário corretos."
    }
  ],
  cover: {
    src: "/blog/seo-para-psicologos/seo-para-psicologos-notebook-e-plantas.jpg",
    alt: "Notebook aberto sobre uma mesa de madeira cercado de plantas, com caderno e xícara de café",
    caption: "Foto: wahyu_t / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Boa parte das pessoas que procuram psicóloga começa no Google: digita o
        problema, o bairro, “psicóloga infantil perto de mim”, “avaliação de
        autismo”. Se o seu consultório não aparece nessas buscas, ele depende só
        de indicação e de redes sociais. SEO (otimização para mecanismos de
        busca) é o trabalho de mudar isso de forma contínua, sem pagar por
        clique.
      </p>

      <section>
        <h2>O que é SEO, sem jargão</h2>
        <p>
          O Google tenta mostrar, para cada busca, a página que melhor responde à
          pergunta. Para isso ele precisa conseguir ler o seu site, entender do
          que cada página trata e confiar que a informação é útil. O{" "}
          <a href={GOOGLE_SEO} {...ext}>
            guia de SEO para iniciantes do próprio Google
          </a>{" "}
          resume o trabalho em ajudar o buscador a entender o conteúdo e ajudar
          as pessoas a encontrá-lo. Não há truque: há páginas claras, rápidas e
          úteis.
        </p>
      </section>

      <section>
        <h2>O limite ético das palavras-chave</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          vale para títulos, descrições e textos do site como vale para um post.
          Isso exclui muitas palavras-chave que agências genéricas sugerem:
        </p>
        <ul>
          <li><strong>Promessa:</strong> “cura da ansiedade”, “resolver o TDAH”.</li>
          <li><strong>Preço como chamariz:</strong> “psicólogo barato”, “primeira sessão grátis”.</li>
          <li><strong>Superlativo:</strong> “melhor psicólogo”, “psicóloga número 1”.</li>
        </ul>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          lembra que a responsabilidade pelo conteúdo é da psicóloga mesmo
          quando uma agência ou profissional de marketing escreve. O que você
          pode destacar, segundo a mesma nota: formação, público que atende,
          abordagem e metodologia de trabalho. São exatamente as palavras que
          descrevem bem uma página.
        </p>
      </section>

      <section>
        <h2>Passo 1: descubra o que as pessoas buscam</h2>
        <ul>
          <li>Comece pelas perguntas que você mais ouve no primeiro contato.</li>
          <li>Digite o tema no Google e anote as sugestões do autocompletar e o bloco “As pessoas também perguntam”.</li>
          <li>Combine serviço, público e lugar: “psicóloga infantil em Sorocaba”, “orientação de pais online”.</li>
          <li>Separe buscas de quem quer atendimento (comerciais) de buscas de quem quer entender um tema (informativas).</li>
        </ul>
        <p>
          Um alerta: “site para psicólogo” é busca de quem quer achar um
          psicólogo, não de quem quer criar um site. Ler a intenção por trás da
          busca evita escrever a página errada.
        </p>
      </section>

      <section>
        <h2>Passo 2: uma página clara para cada serviço</h2>
        <ol>
          <li>Título da página com o serviço e a cidade ou o formato.</li>
          <li>Primeiro parágrafo dizendo para quem é e como funciona o primeiro contato.</li>
          <li>Seções curtas: o que é, para quem, como é o processo, perguntas frequentes.</li>
          <li>Nome completo, “psicóloga(o)” e CRP visíveis.</li>
          <li>Um botão de contato claro, sem urgência artificial.</li>
        </ol>
        <p>
          Exemplos de estrutura em{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>{" "}
          e, para quem faz avaliação, em{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Passo 3: o básico técnico</h2>
        <ul>
          <li><strong>Título e descrição</strong> únicos em cada página, com até cerca de 160 caracteres na descrição.</li>
          <li><strong>Um H1 por página</strong>, com o assunto principal.</li>
          <li><strong>Velocidade e celular:</strong> a maior parte das buscas locais é feita no telefone.</li>
          <li><strong>Imagens com texto alternativo</strong> que descreve o que mostram, o que também é acessibilidade (<a href={WCAG} {...ext}>WCAG 2.1</a>).</li>
          <li><strong>Mapa do site</strong> enviado ao Google Search Console.</li>
          <li><strong>Dados estruturados</strong> (como perguntas frequentes) quando fizer sentido.</li>
        </ul>
      </section>

      <section>
        <h2>Passo 4: Perfil da Empresa e SEO local</h2>
        <p>
          Para buscas com cidade e “perto de mim”, o mapa costuma aparecer antes
          dos sites. Ter o Perfil da Empresa no Google com o nome real, endereço,
          categoria, horário e link para o site é a base. O passo a passo, com os
          cuidados sobre avaliações, está em{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Passo 5: conteúdo que responde a dúvidas reais</h2>
        <p>
          O Google orienta a criar{" "}
          <a href={GOOGLE_UTIL} {...ext}>
            conteúdo útil, confiável e feito para pessoas
          </a>
          , e não para buscadores. Para um consultório, isso significa artigos que
          respondem às perguntas que as famílias fazem antes de procurar ajuda,
          escritos com base na ciência psicológica, sem diagnóstico à distância e
          sem expor ninguém. Ideias em{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Repetir a palavra-chave até o texto ficar estranho.</li>
          <li>Escrever vários artigos sobre a mesma busca, que passam a disputar entre si.</li>
          <li>Site bonito, mas lento e sem texto (tudo em imagem).</li>
          <li>Nome do perfil no Google com palavras-chave (“Psicóloga Ana – Ansiedade Depressão TDAH”), o que as regras do Google não permitem.</li>
          <li>Contratar quem promete primeira posição em prazo fixo.</li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Pais pesquisam muito antes de marcar: sinais, avaliação, diferenças
          entre profissionais, direitos na escola. Isso cria muitas buscas
          informativas que um consultório pode responder bem, com páginas sobre
          como funciona a avaliação, a orientação aos pais e o contato com a
          escola. Escreva com a{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          , evite listas de “sinais” em tom de diagnóstico e lembre que quem
          busca, quase sempre, é um adulto preocupado.
        </p>
      </section>

      <section>
        <h2>Checklist de SEO do consultório</h2>
        <ul>
          <li>Lista de buscas por serviço, público e cidade.</li>
          <li>Uma página por serviço, com título e descrição próprios.</li>
          <li>Nome completo, titulação e CRP em todas as páginas.</li>
          <li>Site rápido no celular, com textos em HTML e imagens com alt.</li>
          <li>Search Console configurado e mapa do site enviado.</li>
          <li>Perfil da Empresa no Google completo e com o nome real.</li>
          <li>Artigos que respondem dúvidas reais, sem repetir a mesma busca.</li>
          <li>Nenhuma palavra-chave com promessa, preço ou superlativo.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe entrega o site do consultório com o SEO técnico pronto
          (títulos, descrições, dados estruturados, mapa do site, acessibilidade)
          e com textos que seguem o posicionamento definido nos dois encontros de
          imersão. Tudo entregue em até 30 dias, dentro do artigo 20 do Código de Ética,
          sem promessa de posição no Google. O processo está na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>
          . Para conversar sobre o seu caso, o primeiro passo é uma conversa de
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
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={GOOGLE_SEO} {...ext}>
              Guia de otimização de mecanismos de pesquisa (SEO) para iniciantes
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={GOOGLE_UTIL} {...ext}>
              Como criar conteúdo útil, confiável e que priorize as pessoas
            </a>
            .
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
