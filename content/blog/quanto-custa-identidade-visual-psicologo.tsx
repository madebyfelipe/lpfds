import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";

export const post: Post = {
  slug: "quanto-custa-identidade-visual-psicologo",
  title: "Quanto custa identidade visual para psicólogo: o que muda o investimento",
  description:
    "O que faz o valor de uma identidade visual para psicólogo subir ou descer: escopo, estratégia, peças, site e prazos. Como comparar propostas sem cair em preço.",
  keyword: "quanto custa identidade visual para psicólogo",
  tags: ["identidade-visual"],
  publishedAt: "2026-11-12",
  summary:
    "Não existe um valor único: o investimento numa identidade visual para psicólogo depende do escopo (só logo ou marca completa), de haver estratégia antes do desenho, de quantas peças e aplicações entram, de incluir site e textos, e de quem faz. Para comparar propostas, compare o que cada uma entrega, e não só o número. Este artigo não traz faixas de preço: elas variam demais por região e profissional para serem úteis.",
  faq: [
    {
      q: "Quanto custa um logo para psicólogo?",
      a: "Varia de modelos prontos a projetos feitos do zero. A diferença está no que vem junto: pesquisa e posicionamento, versões do logo, arquivos para impressão e digital, manual de uso. Um logo sozinho resolve pouco se o resto da comunicação não acompanha."
    },
    {
      q: "Vale a pena fazer identidade visual no começo da carreira?",
      a: "Vale ter uma base coerente: nome completo, CRP, uma paleta e uma fonte usadas sempre do mesmo jeito. Um projeto completo faz mais sentido quando você já sabe para quem atende, porque a marca nasce do posicionamento."
    },
    {
      q: "O que deve estar incluído numa proposta de identidade visual?",
      a: "Etapa de estratégia ou briefing, logo e variações, paleta, tipografia, aplicações (cartão, Instagram, papelaria, placa), manual de uso, arquivos finais, número de rodadas de ajuste, prazo e quem detém os direitos de uso."
    },
    {
      q: "Por que o estúdio não mostra preço no site?",
      a: "Porque o escopo muda de consultório para consultório, e um número solto mais confunde do que ajuda. O valor é apresentado depois de entender o caso, na conversa."
    }
  ],
  cover: {
    src: "/blog/quanto-custa-identidade-visual-psicologo/quanto-custa-identidade-visual-psicologo-amostras-de-cores.jpg",
    alt: "Mãos folheando um leque de amostras de cores em tons de rosa e vermelho sobre uma mesa branca",
    caption: "Foto: yanalya / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        “Quanto custa?” é a primeira pergunta de muita psicóloga que decide
        cuidar da marca. É uma pergunta justa, e a resposta honesta é que o
        valor depende do que está sendo comprado. Um arquivo de logo e uma marca
        completa, com estratégia, textos e site, são serviços diferentes que
        usam o mesmo nome.
      </p>
      <p>
        Este artigo não traz tabela de preços. Os valores variam muito por
        região, por experiência de quem faz e pelo escopo, e qualquer faixa
        publicada aqui seria inventada ou envelheceria rápido. O que dá para
        fazer é mostrar o que faz o investimento subir ou descer, para você
        comparar propostas com critério.
      </p>

      <section>
        <h2>Primeiro: o que você está comprando?</h2>
        <p>
          “Identidade visual” pode significar coisas muito diferentes. Em geral,
          as propostas se encaixam em um destes níveis:
        </p>
        <ol>
          <li>
            <strong>Logo.</strong> Um símbolo ou assinatura com o seu nome, às
            vezes com uma paleta. Resolve a falta de um logo, não a falta de
            uma marca.
          </li>
          <li>
            <strong>Identidade visual.</strong> Logo e variações, paleta,
            tipografia, elementos gráficos e um manual de uso, com aplicações
            como cartão e posts.
          </li>
          <li>
            <strong>Marca completa.</strong> Posicionamento antes do desenho,
            identidade visual, identidade verbal (tom de voz e textos de base),
            e às vezes site e perfis prontos.
          </li>
        </ol>
        <p>
          A diferença entre os níveis é explicada em{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>{" "}
          e em{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>O que faz o investimento subir ou descer</h2>
        <div className="inst-blog__table" role="region" aria-label="Fatores que mudam o investimento numa identidade visual" tabIndex={0}>
          <table>
            <caption>Fatores que mudam o investimento numa identidade visual</caption>
            <thead><tr><th scope="col">Fator</th><th scope="col">Pesa menos quando</th><th scope="col">Pesa mais quando</th></tr></thead>
            <tbody>
              <tr><td>Estratégia</td><td>Você já tem posicionamento claro</td><td>É preciso investigar público, concorrência e proposta</td></tr>
              <tr><td>Nome</td><td>Você usa o seu nome</td><td>Precisa criar nome de clínica e pesquisar registro</td></tr>
              <tr><td>Peças e aplicações</td><td>Logo e cartão</td><td>Papelaria, placa, sinalização, modelos de posts e apresentações</td></tr>
              <tr><td>Textos</td><td>Você escreve</td><td>Tom de voz, bio, página “sobre” e mensagens prontas</td></tr>
              <tr><td>Site</td><td>Fora do escopo</td><td>Site sob medida, com SEO técnico e textos</td></tr>
              <tr><td>Estrutura</td><td>Consultório individual</td><td>Clínica com várias profissionais e serviços</td></tr>
              <tr><td>Prazo</td><td>Flexível</td><td>Urgente, com data de inauguração</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Como comparar duas propostas</h2>
        <ul>
          <li>
            <strong>Liste as entregas lado a lado.</strong> Se uma inclui
            estratégia, manual e aplicações e a outra só o logo, os números não
            são comparáveis.
          </li>
          <li>
            <strong>Pergunte o processo.</strong> Quantas reuniões, quantas
            rodadas de ajuste, o que acontece se você não gostar da primeira
            proposta.
          </li>
          <li>
            <strong>Confira os arquivos finais.</strong> Vetor, versões para
            fundo claro e escuro, formatos para impressão e digital.
          </li>
          <li>
            <strong>Confira os direitos.</strong> A marca precisa ser sua para
            usar onde quiser, sem pagar de novo por cada uso.
          </li>
          <li>
            <strong>Pergunte sobre o Código de Ética.</strong> Quem faz a marca
            deve saber que a divulgação precisa trazer nome completo, titulação
            e CRP, como pede a{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>
            , e que slogan com promessa fere o{" "}
            <a href={CODIGO} {...ext}>
              artigo 20
            </a>
            . A responsabilidade pela divulgação continua sendo sua, mesmo
            quando outra pessoa cria.
          </li>
          <li>
            <strong>Veja trabalhos anteriores do mesmo tipo.</strong> Marca para
            consultório tem exigências que marca de loja não tem.
          </li>
        </ul>
      </section>

      <section>
        <h2>O custo de não ter</h2>
        <p>
          Também conta o que você gasta sem uma marca organizada: horas
          refazendo posts no aplicativo, cartões reimpressos, um site que ninguém
          quer mandar para a escola, e a explicação repetida, mensagem por
          mensagem, de para quem é o seu atendimento. Esse custo não aparece numa
          proposta, mas aparece na rotina. Ele não justifica qualquer valor;
          serve para colocar a decisão em perspectiva.
        </p>
      </section>

      <section>
        <h2>Erros comuns na hora de contratar</h2>
        <ul>
          <li>Escolher só pelo menor número, sem ver o que está incluído.</li>
          <li>Pular a estratégia e pedir “um logo bonito”.</li>
          <li>Contratar logo, depois site, depois posts, com três pessoas e três estilos.</li>
          <li>Não registrar nem pesquisar o nome no <a href={INPI} {...ext}>INPI</a> quando há nome fantasia.</li>
          <li>Aceitar entrega sem manual e sem arquivos editáveis.</li>
        </ul>
      </section>

      <section>
        <h2>Exemplo ilustrativo de escopo</h2>
        <p>
          Uma psicóloga fictícia atende crianças autistas e orienta as famílias,
          com consultório próprio e atendimento online. Um escopo coerente para
          ela incluiria: definição de público e proposta, nome (o próprio, sem
          nome fantasia), logo com versões, paleta com contraste suficiente,
          tipografia legível, cartão, modelos de posts, bio, mensagem do WhatsApp
          e uma página explicando o primeiro contato com os pais. Sem estratégia,
          o mesmo projeto vira só a parte visual, e a explicação de “para quem
          eu atendo” continua faltando.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Aqui alguns itens deixam de ser opcionais: contraste e legibilidade
          (muitos pais leem no celular, cansados), uma paleta sem excesso de
          estímulo, imagens que não expõem crianças e uma linguagem respeitosa
          sobre autismo. Vale perguntar a quem vai fazer a marca se esses pontos
          entram no escopo. Mais em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>{" "}
          e em{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Checklist antes de pedir orçamento</h2>
        <ul>
          <li>Escreva para quem você atende e em que formato.</li>
          <li>Decida se vai usar o seu nome ou um nome de consultório.</li>
          <li>Liste onde a marca vai aparecer (Instagram, site, placa, papelaria).</li>
          <li>Separe referências de marcas que você acha coerentes, e diga por quê.</li>
          <li>Defina prazo e o que precisa estar pronto primeiro.</li>
          <li>Peça propostas com entregas, processo, prazo e direitos por escrito.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe faz a marca completa de consultórios de psicologia:
          dois encontros de imersão para posicionamento, identidade visual e verbal,
          com tudo entregue em até 30 dias e dentro do artigo 20 do Código de Ética. As
          etapas estão na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e um exemplo de entrega em{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . O valor é apresentado depois de entender o seu caso, e o primeiro
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
            Instituto Nacional da Propriedade Industrial.{" "}
            <a href={INPI} {...ext}>
              Marcas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
