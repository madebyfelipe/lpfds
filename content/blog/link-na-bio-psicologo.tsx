import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const LINK_PURPOSE = "https://www.w3.org/TR/WCAG21/#link-purpose-in-context";
const UTIL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";

export const post: Post = {
  slug: "link-na-bio-psicologo",
  title: "Link na bio para psicólogo: WhatsApp, site ou página de links? Como escolher e montar",
  description:
    "Link na bio para psicólogo: quando usar WhatsApp, site ou página de links, o que colocar em cada botão, art. 20, LGPD e erros que fazem a pessoa desistir.",
  keyword: "link na bio para psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-17",
  summary:
    "O link na bio do psicólogo deve levar a pessoa ao próximo passo com o menor número de cliques: o WhatsApp do consultório quando o perfil é a principal porta de entrada, o site quando ele já explica o atendimento, ou uma página de links curta quando há dois ou três destinos de verdade. Em qualquer caso, a página precisa mostrar nome completo, a palavra psicóloga(o) e o CRP, sem preço como chamariz nem promessa de resultado. Abaixo há um roteiro para escolher, montar e revisar o link.",
  faq: [
    {
      q: "Psicólogo deve usar Linktree ou site na bio?",
      a: "Depende de quantos destinos você tem. Se o único próximo passo é conversar com você, o link direto para o WhatsApp ou para a página de contato do site resolve com menos cliques. Uma página de links faz sentido quando há dois ou três destinos reais, como agendamento, página de um serviço e um texto para pais. Quem já tem site pode criar essa página dentro dele, no próprio domínio."
    },
    {
      q: "O que colocar na página de links do psicólogo?",
      a: "Nome completo, a palavra psicóloga(o), o CRP, uma frase sobre quem você atende e de dois a quatro botões com textos que dizem para onde levam, como “Falar no WhatsApp” ou “Como funciona a primeira consulta”. Deixe de fora preço como chamariz, desconto, promessa de resultado e depoimento de paciente."
    },
    {
      q: "Posso colocar o link do WhatsApp direto na bio?",
      a: "Pode, e para muitos consultórios é o caminho mais curto. Use o WhatsApp Business com o nome profissional, uma mensagem de saudação que explique como funciona o primeiro contato e um aviso para a pessoa não enviar detalhes clínicos por mensagem. Se você usa mensagem pré-preenchida no link, escreva algo neutro, sem sintomas."
    },
    {
      q: "Página de links gratuita tem algum problema para psicólogo?",
      a: "Ela funciona, mas o endereço fica com o nome da plataforma, a aparência é limitada e a ferramenta pode instalar medição de visitantes que você não controla. Confira o que a plataforma coleta, porque isso precisa estar descrito na sua política de privacidade. Quando o site já existe, uma página de links no seu domínio evita esses pontos."
    },
    {
      q: "Quantos links colocar na bio do Instagram?",
      a: "Poucos. Cada botão a mais divide a atenção de quem chegou com uma dúvida simples: como falar com você. Na maioria dos consultórios, um destino principal e no máximo três secundários bastam."
    }
  ],
  cover: {
    src: "/blog/link-na-bio-psicologo/link-na-bio-psicologo-celular-caderno-e-notebook.jpg",
    alt: "Celular com a tela apagada sobre um caderno quadriculado, ao lado de um lápis, com notebook, xícara e planta ao fundo numa mesa branca",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A pessoa viu um carrossel seu, achou que fazia sentido e tocou no link
        da bio. Caiu numa página com onze botões: curso, e-book, podcast,
        três redes sociais, um texto de 2021 e, lá embaixo, “contato”. Ou caiu
        no site, na home, e precisou rolar até o rodapé para achar o WhatsApp.
        Em algum desses passos ela desistiu, e você nunca vai saber.
      </p>
      <p>
        A resposta curta: o link na bio para psicólogo existe para levar a
        pessoa ao próximo passo com o menor esforço possível. Se o próximo passo
        é conversar com você, o link direto para o WhatsApp ou para a página de
        contato resolve. Se você tem dois ou três destinos de verdade, uma
        página de links curta, de preferência no seu domínio, organiza a
        escolha. E qualquer que seja o formato, a página segue o artigo 20 do
        Código de Ética. A bio em si, as cinco linhas acima do link, está no
        guia de{" "}
        <Link href="/blog/bio-instagram-psicologo-exemplos" className="inst-link">
          bio do Instagram para psicólogo com exemplos
        </Link>
        . Aqui o assunto é o que acontece depois do toque.
      </p>

      <section>
        <h2>O que dizem as normas sobre o link e a página de destino</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          não fala de link na bio, mas o artigo 20 vale para toda promoção
          pública dos serviços, e a página que abre depois do toque é promoção
          pública. Ele pede nome completo, a palavra psicólogo e o número do
          CRP, e proíbe preço como forma de propaganda, previsão taxativa de
          resultados, autopromoção em detrimento de colegas e divulgação
          sensacionalista.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 01/2022
          </a>
          , sobre o uso profissional das redes sociais, aplica a elas os
          mesmos critérios do Código para a divulgação profissional, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade profissional do CRP-MG (2026)
          </a>{" "}
          traz exemplos práticos. Na prática: se a página de links mostra um botão “Agende
          com 20% de desconto”, o problema é o mesmo que estaria num anúncio.
        </p>
        <p>
          Há também a{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados
          </a>
          . Páginas de links, formulários e encurtadores costumam medir
          visitas e, às vezes, instalar pixels de anúncio. Quem procura uma
          psicóloga pode estar compartilhando, só por clicar, um indício de
          que precisa de atendimento. Por isso a ferramenta escolhida entra na
          sua política de privacidade, e a página pede só o necessário.
        </p>
      </section>

      <section>
        <h2>1. Decida qual é o próximo passo de quem chega pelo perfil</h2>
        <p>
          Antes de escolher ferramenta, escolha o destino. Quem toca no link
          da bio de uma psicóloga quase sempre quer uma de três coisas: falar
          com ela, entender como o atendimento funciona ou ler mais sobre um
          tema que viu no perfil.
        </p>
        <ol>
          <li>
            <strong>Liste o que as pessoas perguntam no direct.</strong> Se a
            maioria das mensagens é “você atende online?” ou “como funciona a
            primeira consulta?”, o destino principal é uma página que responde
            isso, ou o WhatsApp com uma saudação que já responde.
          </li>
          <li>
            <strong>Escolha um destino principal.</strong> É ele que fica no
            topo, com o texto mais claro.
          </li>
          <li>
            <strong>Aceite no máximo três destinos secundários.</strong> Cada
            um precisa existir por um motivo que você consegue dizer em uma
            frase.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia que atende
          adolescentes percebeu que metade das mensagens vinha de mães
          perguntando se ela conversa com os pais. Ela trocou o link do
          WhatsApp por uma página de links com dois botões: “Falar no
          WhatsApp” e “Como funciona o atendimento de adolescentes”, que leva
          ao trecho do site que explica o encontro com os responsáveis.
        </p>
        <p>
          <strong>Erro comum:</strong> pôr na bio tudo o que você já produziu.
          Curso, e-book, podcast e entrevista podem ter seu lugar, mas não
          competem com o contato no topo. Se você nem sabe ainda quem é o seu
          público principal, o guia de{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          vem antes desta decisão.
        </p>
      </section>

      <section>
        <h2>2. Compare as três opções: WhatsApp, site e página de links</h2>
        <p>
          Cada formato resolve um cenário. Nenhum é certo para todo mundo, e
          vale trocar quando o consultório muda.
        </p>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="Comparação entre WhatsApp, site e página de links como link na bio do psicólogo"
            tabIndex={0}
          >
            <caption>Link na bio do psicólogo: quando usar cada opção</caption>
            <thead>
              <tr>
                <th scope="col">Opção</th>
                <th scope="col">Funciona bem quando</th>
                <th scope="col">Cuidado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>WhatsApp direto</td>
                <td>O contato é o único próximo passo e você responde rápido</td>
                <td>A pessoa chega sem contexto; a saudação precisa explicar o primeiro contato</td>
              </tr>
              <tr>
                <td>Site (página específica)</td>
                <td>O site já explica atendimento, formato e contato</td>
                <td>Mandar para a home e obrigar a pessoa a procurar</td>
              </tr>
              <tr>
                <td>Página de links no seu domínio</td>
                <td>Há dois a quatro destinos reais e você quer controlar visual e dados</td>
                <td>Virar depósito de botões</td>
              </tr>
              <tr>
                <td>Página de links de uma plataforma</td>
                <td>Você ainda não tem site e precisa de algo hoje</td>
                <td>Endereço com o nome da plataforma e medição que você não controla</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício com duas
          psicólogas, uma para adultos e uma para crianças, usava o WhatsApp
          direto. As mensagens chegavam misturadas. Uma página de links com
          um botão para cada profissional, cada um levando ao WhatsApp certo,
          resolveu sem nenhuma ferramenta nova.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher pela ferramenta da moda. A
          pergunta é quantos destinos você tem. Se a resposta é um, a página
          de links só acrescenta um clique.
        </p>
      </section>

      <section>
        <h2>3. Se o link for o WhatsApp, prepare a chegada</h2>
        <p>
          O link direto para o WhatsApp é curto e funciona, desde que a
          conversa comece bem. A pessoa saiu do Instagram sem saber se você
          atende online, se tem horário ou se aceita o plano dela.
        </p>
        <ol>
          <li>
            <strong>Use uma conta comercial</strong> com nome profissional,
            CRP na descrição e horário de resposta. O passo a passo está no
            guia de{" "}
            <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
              WhatsApp Business para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Escreva uma saudação que oriente:</strong> quem você
            atende, em que formato, quando responde e o que acontece no
            primeiro contato.
          </li>
          <li>
            <strong>Peça que a pessoa não descreva o caso por mensagem.</strong>{" "}
            Detalhes clínicos ficam para a conversa ou para a primeira
            consulta.
          </li>
          <li>
            <strong>Se usar mensagem pré-preenchida no link</strong>, deixe
            neutra: “Olá, vim pelo Instagram e gostaria de informações sobre
            o atendimento.” Nunca um sintoma no texto.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de saudação:</em> “Olá! Aqui é a Ana
          Ribeiro, psicóloga, CRP 00/00000 (dados fictícios). Atendo adultos,
          presencial em Campinas e online. Respondo de segunda a sexta, das 9h
          às 18h. Se quiser, conte só o seu nome e o melhor horário para
          conversarmos; o resto a gente vê com calma.”
        </p>
        <p>
          <strong>Erro comum:</strong> deixar o WhatsApp pessoal no link. A
          conversa se mistura com família e grupos, e a resposta atrasa.
          Quando o volume de perguntas repetidas cresce, uma página de site
          que responde a elas antes do contato alivia o celular.
        </p>
      </section>

      <section>
        <h2>4. Se o link for o site, aponte para a página certa</h2>
        <p>
          Mandar para o site é a opção mais completa, mas só quando o link
          aponta para a página que responde à dúvida de quem chega. A home
          raramente é essa página.
        </p>
        <ul>
          <li>
            <strong>Página de contato ou de primeira consulta</strong>, se a
            maioria quer falar com você.
          </li>
          <li>
            <strong>Página de um serviço</strong>, se o perfil divulga um
            serviço específico, como avaliação ou orientação de pais. O guia
            de{" "}
            <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
              página de serviços do psicólogo
            </Link>{" "}
            mostra a estrutura.
          </li>
          <li>
            <strong>Uma página de links dentro do site</strong>, se há mais de
            um destino. Ela fica no seu domínio, com seu visual, e você decide
            o que é medido.
          </li>
        </ul>
        <p>
          A página que recebe gente do celular precisa abrir rápido e mostrar
          o botão de contato sem rolagem. Quem chega do Instagram está com o
          polegar pronto; se precisar dar zoom ou esperar, volta ao feed.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> uma neuropsicóloga fictícia trocou o
          link da home pelo da página “Avaliação neuropsicológica infantil:
          como funciona”. A página tem as etapas, o que a família traz na
          primeira conversa e um botão de WhatsApp no topo e no fim.
        </p>
        <p>
          <strong>Erro comum:</strong> link para uma página que exige
          cadastro antes de mostrar qualquer informação. Se você ainda não
          tem site, ou o atual não tem essas páginas, o guia de{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>{" "}
          ajuda a decidir o que construir.
        </p>
      </section>

      <section>
        <h2>5. Se for uma página de links, monte em cinco blocos</h2>
        <p>
          A página de links funciona como um cartão de visita com botões. Ela
          tem pouco espaço, então cada linha precisa trabalhar.
        </p>
        <ol>
          <li>
            <strong>Identificação:</strong> foto profissional ou marca, nome
            completo, “Psicóloga” e CRP com número.
          </li>
          <li>
            <strong>Uma frase sobre quem você atende:</strong> “Atendo
            crianças, adolescentes e suas famílias, presencial em Sorocaba e
            online.” Sem “a melhor”, sem “transforme sua vida”.
          </li>
          <li>
            <strong>Botão principal:</strong> o contato, com o texto da ação
            (“Falar no WhatsApp”).
          </li>
          <li>
            <strong>Dois ou três botões secundários:</strong> “Como funciona a
            primeira consulta”, “Textos para pais”, “Site do consultório”.
          </li>
          <li>
            <strong>Rodapé:</strong> link para a política de privacidade e,
            se houver, o endereço do consultório.
          </li>
        </ol>
        <p>
          O texto de cada botão precisa dizer para onde ele leva. A diretriz
          de acessibilidade{" "}
          <a href={LINK_PURPOSE} {...ext}>
            WCAG 2.1, critério 2.4.4 (finalidade do link)
          </a>{" "}
          pede exatamente isso: o propósito do link compreensível pelo texto.
          “Clique aqui” e “Saiba mais” repetidos falham para quem usa leitor
          de tela e confundem todo mundo.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> “Falar no WhatsApp” · “Primeira
          consulta: o que esperar” · “Atendimento online: como funciona” ·
          “Política de privacidade”.
        </p>
        <p>
          <strong>Erro comum:</strong> botões com emoji no lugar do texto.
          Leitores de tela leem o nome do emoji, e a pessoa não sabe o que vai
          abrir. O guia de{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          traz outros cuidados que valem aqui.
        </p>
      </section>

      <section>
        <h2>6. Escolha a ferramenta pensando em endereço, visual e dados</h2>
        <p>
          Plataformas de página de links são rápidas de montar e várias têm
          plano gratuito. Antes de escolher, compare três pontos que pesam
          mais para uma psicóloga do que para uma loja.
        </p>
        <ul>
          <li>
            <strong>Endereço.</strong> Na maioria das plataformas, o link fica
            com o nome delas na frente. Com domínio próprio, o endereço é seu e
            continua seu se você trocar de ferramenta. O guia de{" "}
            <Link href="/blog/dominio-site-psicologo" className="inst-link">
              domínio para site de psicólogo
            </Link>{" "}
            explica como registrar.
          </li>
          <li>
            <strong>Visual.</strong> Fontes e cores da sua marca, sem a marca
            da plataforma em destaque. Uma página de links com outra cara
            parece de outra pessoa.
          </li>
          <li>
            <strong>Dados.</strong> Leia o que a ferramenta mede e se ela
            instala pixels de anúncio. O que for coletado precisa aparecer na
            sua política de privacidade, como mostra o guia de{" "}
            <Link href="/blog/politica-de-privacidade-psicologo" className="inst-link">
              política de privacidade para site de psicólogo
            </Link>
            .
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia usava uma
          página gratuita que exibia anúncios de outros serviços de terapia
          no rodapé. Ela migrou para uma página simples no próprio site, com
          os mesmos quatro botões, e o problema sumiu.
        </p>
        <p>
          <strong>Erro comum:</strong> ativar todos os recursos “grátis” de
          captação, como pop-up de e-mail ou contagem regressiva. Eles empurram
          a página para o tom de oferta, que esbarra no artigo 20.
        </p>
      </section>

      <section>
        <h2>7. Meça sem expor ninguém e revise a cada trimestre</h2>
        <p>
          Saber qual botão é usado ajuda a manter a página curta. A medição
          certa conta cliques por botão, não pessoas.
        </p>
        <ol>
          <li>
            <strong>Prefira números agregados:</strong> quantos toques em cada
            botão por mês. Isso basta para decidir o que sai.
          </li>
          <li>
            <strong>Evite pixels de redes sociais</strong> na página de links
            de um serviço de saúde mental, a menos que você tenha consentimento
            e saiba explicar para que servem.
          </li>
          <li>
            <strong>A cada três meses, revise:</strong> botão que ninguém usa
            sai; texto antigo é atualizado; links quebrados são corrigidos.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> numa revisão trimestral, um
          consultório fictício viu que o botão do podcast quase não recebia
          toques, enquanto “Atendimento online” era o segundo mais usado. O
          podcast saiu da página e o texto sobre atendimento online ganhou
          uma página própria no site.
        </p>
        <p>
          <strong>Erro comum:</strong> esquecer a página por um ano. Link para
          evento passado ou texto que fala de uma regra antiga passa a
          impressão de consultório abandonado. Para quem escreve textos para
          o site, as orientações do Google sobre{" "}
          <a href={UTIL} {...ext}>
            conteúdo útil e confiável
          </a>{" "}
          ajudam a decidir o que manter.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no link na bio do psicólogo</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no link na bio do psicólogo"
            tabIndex={0}
          >
            <caption>Link na bio para psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome completo, psicóloga(o) e CRP no topo</td>
                <td>Só apelido ou @, sem CRP</td>
              </tr>
              <tr>
                <td>Frase de apresentação</td>
                <td>Quem você atende e em que formato</td>
                <td>“Transforme sua vida em 8 sessões”</td>
              </tr>
              <tr>
                <td>Botões</td>
                <td>Texto que diz para onde leva</td>
                <td>“Clique aqui” repetido ou só emoji</td>
              </tr>
              <tr>
                <td>Oferta</td>
                <td>Explicar como funciona a primeira consulta</td>
                <td>Desconto, “primeira sessão grátis”, contagem regressiva</td>
              </tr>
              <tr>
                <td>Prova</td>
                <td>Formação e abordagem, com dados verificáveis</td>
                <td>Depoimento de paciente ou print de mensagem</td>
              </tr>
              <tr>
                <td>Dados</td>
                <td>Contagem de cliques por botão</td>
                <td>Pixel de anúncio sem consentimento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem a página: link por campanha e por tema</h2>
        <p>
          Quando a página de links já funciona, dá para refiná-la sem
          aumentar o número de botões. Uma saída é trocar o botão secundário
          conforme o conteúdo do mês: se você publicou uma série sobre
          adolescência e telas, o segundo botão leva ao texto do blog sobre o
          tema durante essas semanas e depois volta ao padrão.
        </p>
        <p>
          Outra é usar parâmetros de campanha (UTM) nos links que saem do
          Instagram para o site. Eles mostram, na ferramenta de análise do
          site, quantas visitas vieram da bio, sem identificar ninguém. O
          guia de{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>{" "}
          ajuda a alinhar o perfil inteiro a essa página.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas costumam chegar ao perfil com perguntas
          bem concretas: você atende a idade do meu filho? Faz avaliação ou só
          acompanhamento? Conversa com a escola? Atende pelo plano? Uma página
          de links que responde a isso economiza mensagens dos dois lados.
        </p>
        <p>
          Um bom arranjo tem o botão de contato no topo e, logo abaixo, um
          botão “Para pais: como funciona o atendimento”, que leva a uma
          página do site com faixa etária atendida, etapas do primeiro
          contato, o que trazer na primeira conversa e como é a relação com a
          escola. Escreva em linguagem de família e com respeito, sem prometer
          prazos ou resultados, e sem foto de criança.
        </p>
        <p>
          A saudação do WhatsApp merece o mesmo cuidado. Pais tendem a mandar
          o histórico inteiro na primeira mensagem, às vezes com laudos
          anexados. Um aviso acolhedor resolve: “Essas informações são
          importantes e vamos conversar sobre elas com calma; por aqui, me
          conte só a idade da criança e o melhor horário para falarmos.” O
          guia de{" "}
          <Link href="/blog/marketing-psicologa-infantil" className="inst-link">
            marketing para psicóloga infantil
          </Link>{" "}
          trata do restante da comunicação com famílias.
        </p>
      </section>

      <section>
        <h2>Erros comuns no link na bio do psicólogo</h2>
        <ul>
          <li>Página de links com mais de cinco botões e o contato no fim.</li>
          <li>Link para a home do site, obrigando a pessoa a procurar o contato.</li>
          <li>WhatsApp pessoal no lugar de uma conta profissional.</li>
          <li>Botões com texto vago (“clique aqui”, “saiba mais”) ou só emoji.</li>
          <li>Nome completo e CRP ausentes da página de destino.</li>
          <li>Desconto, gratuidade ou contagem regressiva como chamariz.</li>
          <li>Ferramenta que instala medição ou anúncios que você não conhece.</li>
          <li>Links quebrados ou de eventos que já passaram.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do link na bio</h2>
        <ul>
          <li>Um destino principal escolhido pelo que as pessoas perguntam.</li>
          <li>No máximo três destinos secundários, cada um com motivo claro.</li>
          <li>Nome completo, psicóloga(o) e CRP visíveis na página de destino.</li>
          <li>Botões com texto que diz para onde levam.</li>
          <li>Saudação do WhatsApp que orienta e pede para não enviar detalhes clínicos.</li>
          <li>Página que abre rápido no celular, com contato sem rolagem.</li>
          <li>Ferramenta e dados coletados descritos na política de privacidade.</li>
          <li>Revisão a cada três meses.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com as
          páginas que o link da bio precisa apontar e cada texto revisado pelo
          art. 20. Tudo é apresentado em até 30 dias, com o site incluso. Veja
          a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu link na bio leva a uma página que você não escolheria
          hoje, marque uma conversa de 15 minutos.
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
              Nota Técnica CFP nº 01/2022 — uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 6º e 11.
          </li>
          <li>
            W3C.{" "}
            <a href={LINK_PURPOSE} {...ext}>
              WCAG 2.1, critério de sucesso 2.4.4 — Finalidade do link (em contexto)
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
        </ul>
      </section>
    </>
  )
};
