import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const WCAG_TEXTO = "https://www.w3.org/TR/WCAG21/#non-text-content";
const WCAG_CONTRASTE = "https://www.w3.org/TR/WCAG21/#contrast-minimum";
const MANUAL_ANTICAP = "https://site.cfp.org.br/wp-content/uploads/2025/10/Manual_Anticapacitista_web.pdf";

export const post: Post = {
  slug: "carrossel-instagram-psicologo",
  title: "Carrossel no Instagram para psicólogo: estrutura de 7 lâminas, temas e o que o art. 20 não permite",
  description:
    "Como a psicóloga monta um carrossel no Instagram: capa, estrutura de lâminas, legenda, acessibilidade, ideias de temas e os limites do Código de Ética.",
  keyword: "carrossel instagram psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-14",
  summary:
    "O carrossel é um formato do Instagram que acomoda bem conteúdo educativo de psicologia, porque permite explicar um tema em partes. Uma estrutura que funciona: capa com uma pergunta, contexto, três a cinco lâminas de conteúdo, uma lâmina de cuidado e o fechamento com nome e CRP. O limite está no art. 20 do Código de Ética e na Nota Técnica CFP 1/2022: nada de promessa, sensacionalismo, caso identificável ou teste psicológico nas imagens.",
  faq: [
    {
      q: "O que postar em carrossel sendo psicóloga?",
      a: "Conteúdo educativo que responde a dúvidas reais do seu público: como funciona a terapia, sinais de quando buscar ajuda, mitos sobre um tema, passo a passo de atitudes gerais para a família. Evite autodiagnóstico em lista, casos clínicos e qualquer promessa de resultado."
    },
    {
      q: "Quantas lâminas deve ter um carrossel de psicólogo?",
      a: "O suficiente para explicar um tema sem repetir. Para a maioria dos assuntos, de seis a oito lâminas resolvem: capa, contexto, três a cinco de conteúdo e um fechamento. Se o tema pedir mais, divida em dois carrosséis."
    },
    {
      q: "Carrossel com lista de sintomas é permitido?",
      a: "Listas do tipo “10 sinais de que você tem ansiedade” incentivam o autodiagnóstico e podem ser sensacionalistas, o que o art. 20, alínea h, veda. Prefira explicar o tema e dizer quando procurar avaliação, deixando claro que só uma avaliação profissional permite uma conclusão."
    },
    {
      q: "Posso usar modelos prontos do Canva no carrossel?",
      a: "Pode, desde que a licença permita uso comercial e que você adapte o modelo à sua identidade visual. Modelos muito usados deixam o perfil parecido com o de muitos outros. Um modelo próprio, feito com as cores e fontes da sua marca, dá reconhecimento ao longo do tempo."
    },
    {
      q: "O nome e o CRP precisam aparecer no carrossel?",
      a: "O art. 20, alínea a, pede nome completo e CRP em toda divulgação. No Instagram, isso costuma ficar no perfil, mas vale incluir na última lâmina, porque o carrossel é compartilhado e salvo fora do seu perfil."
    }
  ],
  cover: {
    src: "/blog/carrossel-instagram-psicologo/carrossel-instagram-psicologo-caderno-canetas-design.jpg",
    alt: "Caderno aberto com lápis sobre mesa de madeira, ao lado de canetas coloridas e uma suculenta",
    caption: "Foto: d3images / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você tem um tema que quer explicar, como o que fazer quando a criança
        não quer ir à escola, e um post único não dá conta. Um Reels exige
        câmera, roteiro e edição. O carrossel parece o meio-termo certo, mas
        a primeira tentativa vira uma sequência de lâminas cheias de texto, com
        capa que ninguém para para ler, ou uma lista de sintomas que parece
        teste de revista.
      </p>
      <p>
        A resposta curta: o carrossel funciona quando cada lâmina tem uma ideia,
        a capa faz uma pergunta que o seu público já se faz, e o fechamento traz
        nome, CRP e um convite sem pressão. O conteúdo é educativo, e não
        diagnóstico ou promessa. Abaixo estão as normas, uma estrutura de sete
        lâminas, como escrever cada parte, ideias de temas, a tabela do que pode
        e do que evitar e uma parte para quem fala com famílias de crianças
        autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O carrossel é publicidade profissional, e o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          vale por inteiro: nome completo e CRP, só títulos que você possui, só
          técnicas reconhecidas, nada de preço como propaganda, nada de previsão
          taxativa de resultados e nada de divulgação sensacionalista. O art. 18
          veda divulgar a leigos instrumentos e técnicas privativas, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          é explícita: imagens de testes psicológicos não podem aparecer em
          material de publicidade.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          lembra que as publicações devem ter “conteúdo coeso com a ciência
          psicológica”, que o que se publica fica registrado e pode ter alcance
          indeterminado, e que a psicóloga responde pelo conteúdo mesmo quando
          uma agência ou designer o produz. Ela também veda usar diagnóstico,
          análise de caso ou orientação que identifique a pessoa atendida. Na
          prática: carrossel é para explicar temas, nunca casos.
        </p>
      </section>

      <section>
        <h2>A estrutura de sete lâminas</h2>
        <p>
          Uma estrutura fixa poupa tempo e dá ao seu perfil um ritmo que o
          público reconhece. Esta funciona para a maioria dos temas educativos.
        </p>
        <ol>
          <li><strong>Capa:</strong> uma pergunta ou afirmação curta que o seu público já se faz.</li>
          <li><strong>Contexto:</strong> por que o tema importa, em duas ou três frases.</li>
          <li><strong>Conteúdo 1:</strong> a primeira ideia principal.</li>
          <li><strong>Conteúdo 2:</strong> a segunda ideia.</li>
          <li><strong>Conteúdo 3:</strong> a terceira ideia ou um exemplo fictício.</li>
          <li><strong>Cuidado:</strong> quando procurar avaliação, sem indicar a si mesma como única saída.</li>
          <li><strong>Fechamento:</strong> resumo em uma frase, nome completo, psicóloga, CRP e convite para salvar ou compartilhar.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> capa “Seu filho não quer ir à
          escola?”; contexto sobre como a recusa pode ter muitas causas; três
          lâminas com o que observar, como conversar e como falar com a escola;
          lâmina de cuidado com “se a recusa durar semanas ou vier com sofrimento
          intenso, procure avaliação”; fechamento com a assinatura.
        </p>
        <p>
          <strong>Erro comum:</strong> começar pelo seu nome e pela sua formação.
          A capa é para o tema; você aparece no fim. O post sobre{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>{" "}
          mostra como o carrossel se encaixa no perfil inteiro.
        </p>
      </section>

      <section>
        <h2>A capa: uma pergunta que o seu público já faz</h2>
        <p>
          A capa decide se a pessoa desliza para a próxima lâmina. Ela funciona
          quando nomeia, com as palavras do público, uma dúvida que ele já tem.
        </p>
        <ul>
          <li>Use as perguntas que chegam no primeiro contato, nos comentários e na caixinha.</li>
          <li>Prefira perguntas e frases curtas, legíveis no tamanho de miniatura.</li>
          <li>Uma ideia por capa, sem subtítulo longo.</li>
          <li>Contraste alto entre texto e fundo.</li>
        </ul>
        <p>
          O limite é o sensacionalismo do art. 20, alínea h. “Seu filho pode
          estar em perigo e você não sabe” assusta para chamar atenção. “Quando a
          birra merece atenção?” informa e também faz parar.
        </p>
        <p>
          <strong>Erro comum:</strong> capas com promessa (“acabe com a ansiedade
          em 5 passos”). Além de ferir o art. 20, alínea e, criam uma expectativa
          que o conteúdo não cumpre. O post sobre{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a encontrar frases que soam como você.
        </p>
      </section>

      <section>
        <h2>As lâminas de conteúdo: uma ideia por vez</h2>
        <p>
          Cada lâmina carrega uma ideia, em poucas linhas. Se precisar de mais
          texto, é sinal de que a ideia deve virar duas lâminas ou ir para a
          legenda.
        </p>
        <ol>
          <li>Um título curto no alto da lâmina.</li>
          <li>Duas a quatro linhas de explicação.</li>
          <li>Um elemento visual simples, quando ajudar: ícone, seta, número.</li>
          <li>Linguagem de casa: “quando a criança chora na porta da escola”, e não “recusa escolar com componente ansioso”.</li>
        </ol>
        <p>
          A Nota Técnica pede conteúdo coeso com a ciência psicológica. Se você
          cita um dado, cite a fonte na legenda; se não tem a fonte, escreva de
          forma qualitativa. Não use número que você não consegue comprovar.
        </p>
        <p>
          <strong>Exemplo ilustrativo:</strong> lâmina “Como conversar”, com três
          linhas: “Pergunte sobre o dia sem começar pela escola. Escute antes de
          resolver. Combine um pequeno passo para amanhã.”
        </p>
        <p>
          <strong>Erro comum:</strong> textos de parágrafo inteiro em fonte
          pequena. No celular, ninguém lê, e quem tem baixa visão não consegue.
        </p>
      </section>

      <section>
        <h2>A lâmina de cuidado e o fechamento</h2>
        <p>
          As duas últimas lâminas fazem o carrossel ser responsável. A de
          cuidado diz quando procurar ajuda; o fechamento identifica você e
          convida sem pressionar.
        </p>
        <ul>
          <li><strong>Cuidado:</strong> “Se isso dura semanas ou atrapalha a rotina, procure uma avaliação com um profissional de saúde mental.” Em temas de risco, inclua os serviços de urgência.</li>
          <li><strong>Fechamento:</strong> resumo em uma frase, nome completo, psicóloga, CRP, e um convite como “salve para reler” ou “mande para quem precisa ler isso”.</li>
          <li><strong>Sem pressão:</strong> nada de “agende agora, últimas vagas”, o que esbarra no art. 2º, alínea i, que veda induzir alguém a recorrer aos seus serviços.</li>
        </ul>
        <p>
          <strong>Erro comum:</strong> esquecer o CRP porque “já está no perfil”.
          O carrossel é salvo, compartilhado e printado longe dele. O post sobre{" "}
          <Link href="/blog/bio-instagram-psicologo-exemplos" className="inst-link">
            bio de psicólogo no Instagram
          </Link>{" "}
          trata do que vai no perfil, e a lâmina final completa a identificação.
        </p>
      </section>

      <section>
        <h2>A legenda: o que não coube nas lâminas</h2>
        <p>
          A legenda aprofunda, cita fontes e leva o leitor para o próximo passo.
          Ela também é lida por quem usa leitor de tela e por quem busca no
          Instagram.
        </p>
        <ol>
          <li>Repita a pergunta da capa na primeira linha, com as palavras que o público usaria numa busca.</li>
          <li>Resuma as ideias principais em poucas linhas, para quem não consegue ver as imagens.</li>
          <li>Cite a fonte quando houver dado ou orientação técnica.</li>
          <li>Convide para salvar, compartilhar ou ler mais no seu site.</li>
          <li>Use poucas hashtags, ligadas ao tema.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Seu filho não quer ir à escola? A
          recusa escolar pode ter muitas causas. Neste carrossel: o que observar,
          como conversar e como falar com a escola. Texto completo no blog, link
          na bio.”
        </p>
        <p>
          <strong>Erro comum:</strong> legenda só com emojis e hashtags. Ela
          deixa de fora quem não vê as imagens. O post sobre{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          traz mais ideias de pauta que funcionam bem em legenda e carrossel.
        </p>
      </section>

      <section>
        <h2>Design: a sua marca em todas as lâminas</h2>
        <p>
          O carrossel é a peça em que a identidade visual mais aparece no feed.
          Um modelo próprio, com as cores e as fontes da marca, faz o público
          reconhecer seu conteúdo antes de ler o nome.
        </p>
        <ul>
          <li>Crie dois ou três modelos de lâmina (capa, conteúdo, fechamento) e reutilize sempre.</li>
          <li>Use as cores da marca com contraste suficiente para leitura; a{" "}
            <a href={WCAG_CONTRASTE} {...ext}>
              WCAG 2.1
            </a>{" "}
            recomenda contraste mínimo de 4,5:1 para texto comum.
          </li>
          <li>Tipografia legível, em tamanho que funcione no celular.</li>
          <li>Imagens sem crianças atendidas, sessões, divã ou testes. Prefira ilustrações, objetos e fotos suas.</li>
          <li>Se usar banco de imagens ou música, confira a licença, como explica o post sobre{" "}
            <Link href="/blog/psicologo-direito-autoral-redes" className="inst-link">
              direito autoral nas redes
            </Link>
            .
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> cada carrossel com um estilo diferente,
          tirado de um modelo pronto. O perfil vira uma colagem. O post sobre{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
            manual de marca
          </Link>{" "}
          mostram como definir essas regras uma vez.
        </p>
      </section>

      <section>
        <h2>Ideias de temas para carrossel</h2>
        <p>
          Temas que respeitam o art. 20 e respondem a dúvidas comuns. Use como
          ponto de partida e adapte ao seu público:
        </p>
        <ul>
          <li>Como funciona a primeira sessão de terapia infantil.</li>
          <li>O que a família pode esperar da psicoterapia, e o que ela não é.</li>
          <li>Mitos sobre ir à psicóloga.</li>
          <li>Quando a birra merece atenção.</li>
          <li>Como conversar com a criança sobre uma mudança (casa, escola, separação).</li>
          <li>Diferença entre psicóloga, psiquiatra e neuropsicóloga.</li>
          <li>O que é avaliação psicológica e como ela acontece.</li>
          <li>Como preparar a criança para a primeira consulta.</li>
          <li>Sinais de sobrecarga em pais e cuidadores.</li>
          <li>Glossário do seu campo, com termos explicados em linguagem simples.</li>
        </ul>
        <p>
          Cada tema pode virar também um texto no seu blog. O carrossel resume, o
          texto aprofunda, e os dois se ajudam: um leva ao outro, como explica o
          post sobre{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar no carrossel</h2>
        <div className="inst-blog__table" role="region" aria-label="Carrossel no Instagram: o que a psicóloga pode e o que deve evitar" tabIndex={0}>
          <table>
            <caption>Carrossel no Instagram: o que a psicóloga pode e o que deve evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Explicar um tema com base na ciência psicológica</td><td>Sim (Nota Técnica CFP 1/2022)</td></tr>
              <tr><td>“10 sinais de que você tem ansiedade”</td><td>Evitar (autodiagnóstico; art. 20, h)</td></tr>
              <tr><td>Exemplo fictício, anunciado como tal</td><td>Sim</td></tr>
              <tr><td>Caso de paciente “sem nome”</td><td>Não (art. 9º; Nota Técnica)</td></tr>
              <tr><td>Imagem de teste psicológico</td><td>Não (art. 18; cartilha CRP-MG)</td></tr>
              <tr><td>“Acabe com a ansiedade em 5 passos”</td><td>Não (art. 20, e)</td></tr>
              <tr><td>Nome completo, psicóloga e CRP na última lâmina</td><td>Sim (art. 20, a)</td></tr>
              <tr><td>“Primeira sessão grátis para quem salvar”</td><td>Não (art. 20, d; Nota Técnica)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já faz carrosséis: acessibilidade e reaproveitamento</h2>
        <p>
          Quem já publica com frequência ganha mais cuidando de dois pontos:
          tornar o carrossel acessível e transformá-lo em outros formatos.
        </p>
        <ul>
          <li><strong>Texto alternativo:</strong> o Instagram oferece um campo de texto alternativo para as imagens. Descreva o texto de cada lâmina, como pede o critério de{" "}
            <a href={WCAG_TEXTO} {...ext}>
              conteúdo não textual da WCAG
            </a>
            .
          </li>
          <li><strong>Sem informação só na cor:</strong> “os itens em verde” não funciona para todos; use também palavras ou ícones.</li>
          <li><strong>Reaproveitamento:</strong> o carrossel vira roteiro de Reels, texto de newsletter ou seção de um post no blog.</li>
          <li><strong>Série:</strong> temas grandes divididos em partes, com a mesma capa numerada.</li>
          <li><strong>Leitura dos dados:</strong> veja quais carrosséis são mais salvos e compartilhados; eles indicam os temas que o público quer aprofundar.</li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/newsletter-para-psicologo" className="inst-link">
            newsletter para psicólogo
          </Link>{" "}
          mostra como levar o mesmo conteúdo para o e-mail.
        </p>
      </section>

      <section>
        <h2>Para quem fala com famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Um carrossel sobre autismo pode ser compartilhado em grupos de pais e
          lido fora de contexto, e por isso pede cuidado redobrado com a
          linguagem e com a promessa.
        </p>
        <ul>
          <li><strong>Nada de “sinais de autismo” em lista para autodiagnóstico.</strong> Explique o caminho da avaliação e quem pode fazê-la.</li>
          <li><strong>Linguagem neuroafirmativa:</strong> sem “sofre de autismo”, “portador” ou “superar”. O{" "}
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista do CFP
            </a>{" "}
            ajuda a revisar.
          </li>
          <li><strong>Temas úteis para os pais:</strong> como preparar a criança para uma mudança de rotina, como falar com a escola, como cuidar de quem cuida.</li>
          <li><strong>Visual sem clichês:</strong> muitos autistas rejeitam o quebra-cabeça como símbolo. Prefira a identidade da sua marca.</li>
          <li><strong>Sem fotos de crianças,</strong> nem de banco de imagem, para ilustrar o tema.</li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais de crianças autistas
          </Link>{" "}
          aprofundam esses cuidados.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Capa com promessa ou com medo.</li>
          <li>Lâminas com parágrafos inteiros em fonte pequena.</li>
          <li>Lista de sintomas que incentiva autodiagnóstico.</li>
          <li>Caso de paciente “disfarçado”.</li>
          <li>Imagem de teste psicológico ou de sessão.</li>
          <li>Nenhuma identificação com nome e CRP.</li>
          <li>Um estilo visual diferente a cada post.</li>
          <li>Legenda sem descrição para quem não vê as imagens.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do carrossel</h2>
        <ul>
          <li>A capa traz uma pergunta real do público, sem promessa nem medo.</li>
          <li>Uma ideia por lâmina, em poucas linhas.</li>
          <li>Lâmina de cuidado dizendo quando procurar avaliação.</li>
          <li>Fechamento com nome completo, psicóloga e CRP.</li>
          <li>Fontes citadas na legenda quando há dado.</li>
          <li>Contraste suficiente e texto alternativo preenchido.</li>
          <li>Nenhum caso, teste, foto de criança ou preço.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros define o posicionamento, o
          tom de voz e a identidade visual do consultório, e os modelos de
          carrossel saem dessa base, prontos para usar. Tudo é apresentado em até 30 dias, com cada peça revisada pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se cada carrossel seu sai de um modelo diferente, marque uma conversa
          de 15 minutos.
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
            , arts. 2º (alínea i), 9º, 18 e 20.
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
            , edição de 2026 (instrumentos e técnicas privativas).
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG_TEXTO} {...ext}>
              WCAG 2.1, critério 1.1.1 — Conteúdo não textual
            </a>{" "}
            e{" "}
            <a href={WCAG_CONTRASTE} {...ext}>
              critério 1.4.3 — Contraste mínimo
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista
            </a>
            , 2025.
          </li>
        </ul>
      </section>
    </>
  )
};
