import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const UTIL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";
const STARTER = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";
const TITULO = "https://developers.google.com/search/docs/appearance/title-link?hl=pt-br";
const BERENICE = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const AUTORAL = "https://www.planalto.gov.br/ccivil_03/leis/l9610.htm";

export const post: Post = {
  slug: "blog-para-psicologo",
  title: "Blog para psicólogo: como escolher temas, escrever e publicar posts que as famílias encontram",
  description:
    "Blog para psicólogo: como escolher temas pelas buscas reais, estruturar cada post, escrever para leigos, citar fontes e manter a frequência, dentro do art. 20.",
  keyword: "blog para psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-16",
  summary:
    "Um blog para psicólogo funciona quando cada post responde a uma dúvida real que as pessoas digitam no Google, em linguagem leiga, com a resposta logo no começo e fontes confiáveis no fim. O blog fica dentro do seu site, assinado com nome completo e CRP, e segue o art. 20 do Código de Ética: nada de promessa de resultado, preço como chamariz, depoimento ou caso que identifique alguém. Abaixo há um método em 8 passos, da escolha do tema à divulgação, com exemplos fictícios.",
  faq: [
    {
      q: "Vale a pena psicólogo ter blog?",
      a: "Vale quando você consegue manter uma frequência possível e escrever sobre as dúvidas do público que quer atender. O blog dá ao Google páginas que respondem a buscas específicas e dá à família que chega pelo Instagram um lugar para conhecer seu jeito de pensar com calma. Sem constância e sem foco, ele vira uma lista de posts esquecidos."
    },
    {
      q: "Sobre o que um psicólogo pode escrever no blog?",
      a: "Sobre dúvidas reais do seu público: quando procurar ajuda, como funciona o atendimento, diferenças entre profissionais, temas do desenvolvimento ou da vida adulta explicados com fonte. O limite é o Código de Ética: nada de casos que identifiquem pacientes, promessa de resultado, diagnóstico pelo texto ou técnica não reconhecida pela profissão."
    },
    {
      q: "Qual o tamanho ideal de um post de blog de psicologia?",
      a: "O tamanho que responde à dúvida por inteiro, sem enrolação. Uma pergunta pontual cabe em algumas centenas de palavras; um guia sobre um tema amplo pode passar de duas mil. O que importa é a resposta aparecer cedo e cada parágrafo acrescentar algo útil."
    },
    {
      q: "Blog ou Instagram: qual é melhor para psicólogo?",
      a: "Os dois fazem trabalhos diferentes e se completam. O Instagram alcança quem ainda não conhece você; o blog responde a quem já tem uma dúvida e a digitou no Google, e fica disponível por anos. Um post do blog pode virar carrossel, e o carrossel pode levar para o post."
    },
    {
      q: "Psicólogo pode usar inteligência artificial para escrever o blog?",
      a: "Pode usar como apoio, mas a responsabilidade pelo conteúdo é sua. Revise cada afirmação, confira as fontes, tire generalidades e acrescente o que só você sabe sobre o seu público. O Google orienta que o conteúdo seja feito para pessoas, com experiência e informação próprias."
    }
  ],
  cover: {
    src: "/blog/blog-para-psicologo/blog-para-psicologo-notebook-caderno-e-plantas.jpg",
    alt: "Notebook aberto sobre mesa de madeira com caderno, café e vasos de plantas, pronto para escrever um post de blog",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você já ouviu que psicólogo precisa ter blog para aparecer no Google.
        Criou a aba no site, escreveu dois textos sobre ansiedade num domingo
        e, três meses depois, o blog continua com os mesmos dois posts. Ninguém
        comentou, nenhuma família disse que chegou por ele, e a sensação é de
        que escrever foi tempo perdido.
      </p>
      <p>
        A resposta curta é esta: um blog para psicólogo dá resultado quando
        cada post responde a uma dúvida que o seu público digita no Google,
        com a resposta logo no começo, linguagem leiga e fonte confiável, num
        ritmo que você consegue manter. Foco no público e constância contam
        mais do que o volume de posts. Este guia mostra um
        método em 8 passos, da escolha do tema à divulgação. Ele complementa o
        guia de{" "}
        <Link href="/blog/seo-para-psicologos" className="inst-link">
          SEO para psicólogos
        </Link>
        , que trata do site inteiro.
      </p>

      <section>
        <h2>O que dizem as normas sobre o blog do psicólogo</h2>
        <p>
          Todo post do blog é divulgação profissional e segue o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>
          : nome completo e CRP visíveis, só títulos que você tem, só técnicas
          reconhecidas pela profissão, nada de preço como propaganda, nada de
          previsão taxativa de resultados e nada de sensacionalismo. O art. 9º,
          do sigilo, vale para qualquer história que você pense em contar.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          trata das redes sociais, mas os princípios valem para o blog:
          conteúdo informativo, sem expor pacientes e sem transformar o texto
          em atendimento. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          traz exemplos do que cabe e do que não cabe na divulgação.
        </p>
        <p>
          Duas regras de fora do conselho também pesam. A{" "}
          <a href={AUTORAL} {...ext}>
            Lei de Direitos Autorais
          </a>{" "}
          protege textos e imagens de terceiros: copiar artigo de outro site,
          mesmo citando, não é permitido além de trechos curtos para citação. E
          o Google, nas orientações de{" "}
          <a href={UTIL} {...ext}>
            conteúdo útil e confiável
          </a>
          , pede textos feitos para pessoas, com experiência e informação
          próprias. Para temas de saúde, ele dá ainda mais peso à confiança.
        </p>
      </section>

      <section>
        <h2>1. Escolha temas pelas dúvidas que o seu público digita</h2>
        <p>
          O tema certo é a pergunta que a família ou o adulto que você quer
          atender digita no Google. Escrever sobre o que interessa a você, sem
          conferir se alguém procura, é a principal razão de blogs sem leitores.
        </p>
        <ol>
          <li>
            Liste as perguntas que você mais ouve na primeira conversa e no
            WhatsApp.
          </li>
          <li>
            Digite cada uma no Google e anote as sugestões do autocompletar,
            a caixa “As pessoas também perguntam” e as buscas relacionadas no
            fim da página.
          </li>
          <li>
            Veja o que já aparece no topo. Se só há portais grandes, procure um
            ângulo mais específico, como a cidade ou um público particular.
          </li>
          <li>
            Monte uma lista de 20 temas e ordene pelo que mais aparece nas
            conversas com quem você quer atender.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> uma psicóloga infantil ouve toda
          semana “como explicar para meu filho que ele vai começar terapia?”. Ela
          digita a frase no Google, encontra variações como “como falar com a
          criança sobre psicólogo” e escreve um post com a resposta e um roteiro
          por idade.
        </p>
        <p>
          <strong>Erro comum:</strong> escrever sobre temas amplos como
          “ansiedade” ou “autoestima”, que competem com sites de saúde enormes.
          Para quem atende crianças, o guia de{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          traz ideias de temas pensados para os pais.
        </p>
      </section>

      <section>
        <h2>2. Defina uma pergunta principal por post</h2>
        <p>
          Cada post responde a uma pergunta. Quando um texto tenta responder a
          cinco, ele não aparece bem para nenhuma delas e o leitor desiste no
          meio.
        </p>
        <ul>
          <li>
            Escreva a pergunta principal no topo do rascunho, antes de qualquer
            outra coisa.
          </li>
          <li>
            Use as variações da mesma pergunta como subtítulos ou perguntas
            frequentes no fim.
          </li>
          <li>
            Se uma variação pede uma resposta muito diferente, ela vira outro
            post, com link entre os dois.
          </li>
          <li>
            Antes de escrever, confira se você já tem um post que responde à
            mesma pergunta. Dois posts disputando a mesma busca atrapalham um ao
            outro.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> “Quanto tempo dura a avaliação
          neuropsicológica infantil?” vira um post. “O que acontece em cada
          sessão da avaliação?” vira outro, com links entre os dois e para a
          página do serviço.
        </p>
        <p>
          <strong>Erro comum:</strong> títulos genéricos como “Reflexões sobre
          a infância”. O título precisa ter as palavras que a pessoa digitou;
          o Google explica isso no guia sobre{" "}
          <a href={TITULO} {...ext}>
            links de título
          </a>
          . Para a pergunta principal, o mais simples é colocá-la, quase
          literal, no título do post.
        </p>
      </section>

      <section>
        <h2>3. Monte o esboço antes de escrever</h2>
        <p>
          O esboço evita o texto que dá voltas. Com os subtítulos definidos, você
          escreve uma seção por vez, e cada uma tem uma função clara.
        </p>
        <ol>
          <li>
            <strong>Abertura:</strong> a situação do leitor em duas ou três
            frases e a resposta curta logo em seguida.
          </li>
          <li>
            <strong>Contexto:</strong> o que a pessoa precisa saber para
            entender a resposta, como o que dizem as normas ou como funciona o
            atendimento.
          </li>
          <li>
            <strong>Desenvolvimento:</strong> de três a oito seções, cada uma
            abrindo com a resposta e seguindo com exemplo e passos práticos.
          </li>
          <li>
            <strong>Fechamento:</strong> um resumo prático, como um checklist,
            e o próximo passo para quem quer conversar com você.
          </li>
          <li>
            <strong>Fontes:</strong> a lista das referências usadas, com link.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> para “quando levar a criança ao
          psicólogo”, o esboço tem abertura, “o que é esperado em cada idade”,
          “sinais que pedem uma conversa com um profissional”, “como é a
          primeira consulta”, “como falar com a criança” e checklist.
        </p>
        <p>
          <strong>Erro comum:</strong> começar com três parágrafos sobre a
          história do tema antes de chegar à resposta. Quem chega pelo Google
          lê o começo e decide em segundos se fica. A resposta vem primeiro; o
          contexto, depois.
        </p>
      </section>

      <section>
        <h2>4. Escreva para leigos, com a resposta primeiro</h2>
        <p>
          O leitor do blog não é colega de profissão. É a mãe que lê no celular
          enquanto espera o filho na natação. Frases curtas, palavras do dia a
          dia e termos técnicos explicados na primeira vez em que aparecem.
        </p>
        <ul>
          <li>Parágrafos de duas a quatro frases.</li>
          <li>
            Um termo técnico por vez, com explicação: “regulação emocional, o
            jeito como a criança lida com o que sente”.
          </li>
          <li>
            Exemplos do cotidiano, sempre fictícios e anunciados como tal.
          </li>
          <li>
            Verbos de processo (entender, acompanhar, cuidar) no lugar de
            promessas (resolver, curar, superar).
          </li>
          <li>
            Uma voz consistente com a sua marca. O guia de{" "}
            <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
              tom de voz para psicólogo
            </Link>{" "}
            ajuda a definir.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> em vez de “a psicoterapia
          infantil promove o desenvolvimento de recursos psíquicos”, o post
          diz: “na terapia, a criança encontra jeitos de falar e brincar sobre o
          que sente, e os pais recebem orientação para apoiar em casa”.
        </p>
        <p>
          <strong>Erro comum:</strong> contar “o caso de uma paciente” para
          ilustrar o tema, mesmo trocando o nome. Detalhes como idade, profissão
          ou cidade podem identificar a pessoa, e o sigilo vale para o texto
          público. Use exemplos inventados e diga que são fictícios.
        </p>
      </section>

      <section>
        <h2>5. Cite fontes e não invente números</h2>
        <p>
          Em saúde mental, a confiança do leitor depende de você mostrar de
          onde vem cada informação. Uma lista de fontes no fim do post, com
          links, é o jeito mais simples de fazer isso.
        </p>
        <ol>
          <li>
            Prefira fontes primárias: CFP, conselhos regionais, leis, órgãos
            públicos de saúde e estudos com DOI.
          </li>
          <li>
            Abra cada link antes de publicar e confira se ele diz o que você
            escreveu.
          </li>
          <li>
            Se não encontrar a fonte de um número, tire o número. Um texto
            qualitativo honesto vale mais do que uma estatística sem origem.
          </li>
          <li>
            Cite a data das normas e diga quando uma regra foi substituída.
            Por exemplo, a Resolução CFP nº 9/2024 revogou a 11/2018 sobre
            atendimento online.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> um post sobre atendimento online
          para crianças cita a Resolução CFP nº 9/2024 com link, explica o que
          ela pede e termina com a seção “Fontes” listando a resolução e a
          notícia do conselho regional.
        </p>
        <p>
          <strong>Erro comum:</strong> repetir números que circulam em posts de
          redes sociais, como “X% das mães têm…”, sem saber de onde vieram.
          Número sem fonte é exatamente o tipo de informação que tira a
          credibilidade de um texto de saúde e pode configurar divulgação
          sensacionalista.
        </p>
      </section>

      <section>
        <h2>6. Ligue cada post ao seu site e aos seus serviços</h2>
        <p>
          O blog só gera conversas quando o leitor encontra o caminho para
          você. Cada post leva a outras páginas do site, com links que dizem
          para onde vão.
        </p>
        <ul>
          <li>
            Link para a página do serviço relacionado ao tema, como “avaliação
            neuropsicológica infantil”.
          </li>
          <li>
            Links para dois ou três posts que aprofundam pontos citados no
            texto.
          </li>
          <li>
            Um bloco de autoria no fim: nome completo, CRP, formação real, uma
            frase sobre quem você atende e link para a{" "}
            <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
              página sobre mim
            </Link>
            .
          </li>
          <li>
            Um convite simples para o próximo passo, como “Se quiser conversar
            sobre o seu caso, me chame no WhatsApp”, sem urgência artificial.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> o post “Como explicar à criança
          que ela vai ao psicólogo” termina com o bloco de autoria, um link
          para a página “Psicoterapia infantil” e outro para o post “Como é a
          primeira consulta com a psicóloga infantil”.
        </p>
        <p>
          <strong>Erro comum:</strong> hospedar o blog numa plataforma separada
          do site, como um perfil em rede de blogs. O trabalho de cada post
          deixa de somar para o seu domínio. O guia de{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site profissional para psicólogo
          </Link>{" "}
          mostra a estrutura que recebe o blog.
        </p>
      </section>

      <section>
        <h2>7. Encontre uma frequência que você mantém</h2>
        <p>
          A frequência ideal é a que você mantém por um ano. Um post bom a cada
          quinze dias, durante doze meses, constrói mais do que dez posts num
          mês e nenhum depois.
        </p>
        <ol>
          <li>
            Reserve um horário fixo na agenda para escrever, como uma manhã a
            cada duas semanas.
          </li>
          <li>
            Escreva em lotes: dois ou três esboços numa sessão e o texto final
            em outra.
          </li>
          <li>
            Mantenha uma planilha com tema, pergunta principal, data de
            publicação e links internos.
          </li>
          <li>
            Revise posts antigos uma vez por ano: normas mudam, links quebram e
            você aprende coisas novas.
          </li>
        </ol>
        <p>
          <strong>Exemplo (fictício):</strong> uma psicóloga publica um post a
          cada duas semanas, sempre na segunda-feira, e usa a sexta anterior
          para revisar. Em um ano, tem 26 posts sobre as dúvidas mais comuns
          das famílias que atende.
        </p>
        <p>
          <strong>Erro comum:</strong> usar inteligência artificial para
          publicar vários posts por semana sem revisar. O texto fica genérico,
          pode trazer informação errada e soa igual ao de qualquer outro site.
          O guia sobre{" "}
          <Link href="/blog/psicologo-inteligencia-artificial-divulgacao" className="inst-link">
            inteligência artificial na divulgação do psicólogo
          </Link>{" "}
          mostra como usar a ferramenta sem perder a sua voz.
        </p>
      </section>

      <section>
        <h2>8. Divulgue cada post depois de publicar</h2>
        <p>
          Publicar é metade do trabalho. Cada post pode virar conteúdo para
          outros canais e chegar a quem ainda não procurou no Google.
        </p>
        <ul>
          <li>
            Transforme os subtítulos do post num carrossel para o Instagram,
            com o link na bio ou nos stories.
          </li>
          <li>
            Envie o post para a sua lista de e-mail, se você tem uma com
            consentimento. O guia de{" "}
            <Link href="/blog/newsletter-para-psicologo" className="inst-link">
              newsletter para psicólogo
            </Link>{" "}
            mostra como montar.
          </li>
          <li>
            Use o link do post para responder dúvidas recorrentes no WhatsApp,
            sem transformar a resposta em atendimento.
          </li>
          <li>
            Compartilhe com profissionais parceiros quando o tema interessar
            aos pacientes deles.
          </li>
        </ul>
        <p>
          <strong>Exemplo (fictício):</strong> o post “Como é a primeira
          consulta com a psicóloga infantil” vira um carrossel de seis telas,
          um e-mail para a lista e a resposta padrão para quem pergunta “como
          funciona?” no WhatsApp.
        </p>
        <p>
          <strong>Erro comum:</strong> pagar impulsionamento do post com
          chamadas como “descubra se seu filho tem TDAH”. Além de prometer um
          diagnóstico que o texto não dá, a frase é sensacionalista. Se for
          impulsionar, a chamada descreve o conteúdo com sobriedade.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no blog do psicólogo</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no blog de psicólogo"
            tabIndex={0}
          >
            <caption>Blog para psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte do post</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título</td>
                <td>A pergunta que a pessoa digita</td>
                <td>“Descubra o segredo para nunca mais sofrer”</td>
              </tr>
              <tr>
                <td>Exemplos</td>
                <td>Situações fictícias, anunciadas como tal</td>
                <td>“O caso da minha paciente”, mesmo com nome trocado</td>
              </tr>
              <tr>
                <td>Dados</td>
                <td>Números com fonte primária e link</td>
                <td>Estatísticas copiadas de posts sem origem</td>
              </tr>
              <tr>
                <td>Promessa</td>
                <td>Explicar como funciona o atendimento</td>
                <td>“Resultados em poucas sessões”</td>
              </tr>
              <tr>
                <td>Texto</td>
                <td>Escrito por você, com apoio revisado</td>
                <td>Copiado de outro site ou publicado sem revisão</td>
              </tr>
              <tr>
                <td>Chamada final</td>
                <td>Convite simples para conversar</td>
                <td>Preço, desconto, “vagas acabando”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem blog: revise o que já existe antes de escrever mais</h2>
        <p>
          Se você já tem dez ou vinte posts, o melhor retorno costuma estar em
          melhorar os existentes. Abra o Google Search Console, que é gratuito,
          e veja quais posts aparecem nas buscas e com quais palavras. Um post
          que aparece muito e recebe poucos cliques geralmente precisa de um
          título e de uma descrição mais claros.
        </p>
        <p>
          Procure também posts que disputam a mesma pergunta. Junte os dois
          num texto mais completo e redirecione o endereço antigo para o novo,
          para não perder quem chega por ele. O{" "}
          <a href={STARTER} {...ext}>
            guia de introdução ao SEO do Google
          </a>{" "}
          explica o redirecionamento.
        </p>
        <p>
          Por fim, revise a parte normativa dos posts antigos. Se algum ainda
          cita a Resolução CFP nº 11/2018 ou o e-Psi como vigentes, atualize
          para a Resolução nº 9/2024 e coloque a data de revisão no post. O
          guia de{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>{" "}
          ajuda a transformar dúvidas em seções dos posts revisados.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          As famílias de crianças autistas e neurodivergentes pesquisam muito,
          e cedo. Antes do diagnóstico, buscam sinais; logo depois, buscam
          direitos, terapias e como explicar o diagnóstico à criança. Um blog
          que responde a essas perguntas com fonte e respeito encontra um
          público que lê até o fim.
        </p>
        <p>
          Alguns temas que costumam aparecer nas buscas desse público: como
          funciona a avaliação, o que esperar da primeira consulta, como
          preparar a criança para mudanças, direitos previstos na{" "}
          <a href={BERENICE} {...ext}>
            Lei nº 12.764/2012
          </a>
          , como conversar com a escola. Cada um rende um post
          próprio, com link para a página do serviço correspondente.
        </p>
        <p>
          A linguagem pesa ainda mais aqui. Termos como “sofre de autismo” ou
          “portador” aparecem em muitos sites e afastam famílias e adultos
          autistas. Prefira “criança autista” ou “criança no espectro” conforme
          o uso da comunidade, e explique por que escolheu. O guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          tem uma lista de trocas. E cuidado com promessas embutidas em
          títulos, como “como acabar com as crises”, que falam do autismo como
          algo a eliminar.
        </p>
      </section>

      <section>
        <h2>Erros comuns no blog do psicólogo</h2>
        <ul>
          <li>Escolher temas sem conferir se alguém procura por eles.</li>
          <li>Responder a várias perguntas num mesmo post.</li>
          <li>Começar com contexto longo e deixar a resposta para o fim.</li>
          <li>Contar casos de pacientes, mesmo com nome trocado.</li>
          <li>Citar números sem fonte.</li>
          <li>Publicar texto de inteligência artificial sem revisar.</li>
          <li>Hospedar o blog fora do próprio site.</li>
          <li>Parar de publicar depois de dois meses.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist de cada post do blog</h2>
        <ul>
          <li>Uma pergunta principal, com as palavras que o público usa no título.</li>
          <li>A resposta curta aparece nas primeiras linhas.</li>
          <li>Linguagem leiga, parágrafos curtos, termos técnicos explicados.</li>
          <li>Exemplos fictícios, anunciados como tal.</li>
          <li>Fontes conferidas, com link, no fim do post.</li>
          <li>Links para a página do serviço e para outros posts.</li>
          <li>Bloco de autoria com nome completo e CRP.</li>
          <li>Nenhuma promessa, preço, depoimento ou caso identificável.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com a
          estrutura pronta para receber um blog e os temas organizados pelas
          dúvidas do seu público, tudo revisado pelo art. 20. Tudo é
          apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu blog parou nos dois primeiros posts, marque uma conversa de
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
            , arts. 9º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={AUTORAL} {...ext}>
              Lei nº 9.610/1998 — Lei de Direitos Autorais
            </a>
            , art. 46 (citação).
          </li>
          <li>
            Brasil.{" "}
            <a href={BERENICE} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da
              Pessoa com Transtorno do Espectro Autista
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={UTIL} {...ext}>
              Como criar conteúdo útil, confiável e que priorize as pessoas
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={STARTER} {...ext}>
              Guia de otimização de mecanismos de pesquisa (SEO) para iniciantes
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={TITULO} {...ext}>
              Links de título nos resultados da Pesquisa
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
