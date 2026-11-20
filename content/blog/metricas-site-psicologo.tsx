import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const COOKIES =
  "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf";
const GA_IP = "https://support.google.com/analytics/answer/2763052";
const GA_PII = "https://support.google.com/analytics/answer/6366371";
const CONSENT = "https://developers.google.com/tag-platform/security/guides/consent";
const GSC = "https://support.google.com/webmasters/answer/7576553";
const ADS_PERSONAL = "https://support.google.com/adspolicy/answer/143465";
const VERCEL = "https://vercel.com/docs/analytics/privacy-policy";

export const post: Post = {
  slug: "metricas-site-psicologo",
  title: "Métricas do site do psicólogo: 7 números para acompanhar sem expor pacientes",
  description:
    "Quais métricas do site do psicólogo acompanhar, como ler o Search Console e o Analytics e o que nunca medir, com a LGPD, o sigilo e o art. 20 em mente.",
  keyword: "métricas do site do psicólogo",
  tags: ["presenca-digital"],
  publishedAt: "2026-11-20",
  summary:
    "Para um consultório, poucas métricas bastam: buscas e cliques no Google, visitas às páginas de serviço, cliques no botão de contato e de onde vieram essas visitas. O que nunca entra na medição é qualquer dado que identifique uma pessoa ou revele a saúde dela, porque dado de saúde é sensível na LGPD e o sigilo vale também fora da sessão. Meça páginas e ações, não pessoas.",
  faq: [
    {
      q: "Quais métricas um psicólogo deve acompanhar no site?",
      a: "Comece por quatro: impressões e cliques no Google (Search Console), visitas às páginas de serviço, cliques no botão de contato ou de agendamento e a origem dessas visitas (Google, Instagram, link direto). Esses números mostram se as pessoas certas encontram o site e se ele leva à conversa. Tempo na página e número de seguidores ajudam pouco a decidir."
    },
    {
      q: "Psicólogo pode usar Google Analytics no site?",
      a: "Pode, com cuidado. O site precisa explicar a ferramenta na política de privacidade, pedir consentimento para cookies que não são necessários e nunca enviar ao Analytics nome, e-mail, telefone ou texto de formulário. A própria ajuda do Google orienta a não enviar informações pessoais identificáveis. Se você não precisa de relatórios detalhados, uma ferramenta de contagem sem cookies pode bastar."
    },
    {
      q: "O que é o Google Search Console e por que usar?",
      a: "É a ferramenta gratuita do Google que mostra por quais buscas o seu site apareceu, quantas vezes (impressões), quantas pessoas clicaram e a posição média. É o melhor termômetro do SEO do consultório e não coloca cookie nenhum no navegador da visitante, porque os dados vêm do próprio Google."
    },
    {
      q: "Quantas visitas um site de psicólogo precisa ter?",
      a: "Não existe um número de referência confiável para isso, e desconfie de quem promete um. Um site local com poucas visitas por mês pode gerar mais conversas do que um blog com milhares de leitores de outro estado. Compare o seu site com ele mesmo, mês a mês, e olhe primeiro para os cliques no contato."
    },
    {
      q: "Posso fazer remarketing para quem visitou o meu site?",
      a: "Evite. A política de publicidade personalizada do Google restringe o uso de categorias sensíveis, como saúde, para mirar anúncios, e criar um público de “quem visitou a página de ansiedade” trata justamente um dado sensível. Anúncios por palavra-chave, sem lista de visitantes, são um caminho mais seguro."
    }
  ],
  cover: {
    src: "/blog/metricas-site-psicologo/metricas-site-psicologo-notebook-e-graficos.jpg",
    alt: "Notebook aberto sobre uma mesa de madeira com relatórios de gráficos de barras e um caderno em branco",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O site está no ar há alguns meses. Às vezes chega uma mensagem pelo
        WhatsApp dizendo “te achei no Google”, às vezes passa uma semana sem
        nada. Você abre o painel da hospedagem, vê um gráfico subindo e
        descendo e não sabe se aquilo é bom, ruim ou só barulho.
      </p>
      <p>
        A resposta curta: um consultório precisa de poucas métricas, e quase
        todas dizem respeito a páginas e ações, não a pessoas. Quantas vezes o
        site aparece no Google, quantas pessoas clicam, quais páginas de
        serviço são lidas e quantas vezes alguém aperta o botão de contato.
        O resto é curiosidade. E há um limite claro: nada que identifique quem
        visitou ou revele o que essa pessoa sente entra na medição.
      </p>
      <p>
        Abaixo estão as normas que valem para a medição, os sete números que
        importam, como configurar as ferramentas sem expor ninguém e uma
        rotina de 30 minutos por mês para ler tudo isso.
      </p>

      <section>
        <h2>O que dizem as normas sobre medir o site</h2>
        <p>
          A medição do site toca em três conjuntos de regras. O primeiro é a{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          </a>
          . O art. 5º, II, chama de dado pessoal sensível o dado referente à
          saúde, e o art. 11 limita bastante as situações em que ele pode ser
          tratado. Endereço IP, identificadores de cookie e dados de formulário
          podem ser dados pessoais; ligados a uma página sobre ansiedade ou
          autismo, chegam perto de revelar algo sobre a saúde de alguém.
        </p>
        <p>
          O segundo é o{" "}
          <a href={COOKIES} {...ext}>
            Guia orientativo da ANPD sobre cookies e proteção de dados pessoais
          </a>
          , que trata de transparência, de categorias de cookies e de quando o
          consentimento é a base adequada. Em resumo: o site explica o que
          coleta e, para cookies que não são necessários para o funcionamento,
          a pessoa precisa ter escolha de verdade.
        </p>
        <p>
          O terceiro é o{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          . O art. 9º manda proteger a intimidade das pessoas a que você tem
          acesso no exercício profissional, e o art. 20 orienta a divulgação:
          nada de previsão taxativa de resultados nem de divulgação
          sensacionalista. Isso importa na hora de usar números: “meu site
          recebe 3 mil visitas” não é argumento de qualidade clínica e não deve
          virar propaganda.
        </p>
        <p>
          Nenhuma dessas normas proíbe medir. Elas pedem que você meça o
          mínimo, explique o que mede e não transforme a visita de alguém em
          um registro sobre a saúde dessa pessoa.
        </p>
      </section>

      <section>
        <h2>1. Impressões e cliques no Google</h2>
        <p>
          Este é o primeiro número a olhar: quantas vezes o site apareceu na
          busca e quantas pessoas clicaram. Ele vem do{" "}
          <a href={GSC} {...ext}>
            relatório de desempenho do Google Search Console
          </a>
          , que mostra cliques, impressões, taxa de cliques (CTR) e posição
          média por busca e por página.
        </p>
        <ol>
          <li>Cadastre o domínio no Search Console e confirme a propriedade.</li>
          <li>Envie o sitemap (o endereço costuma ser /sitemap.xml).</li>
          <li>
            Em Desempenho, filtre os últimos três meses e ordene as consultas
            por impressões.
          </li>
          <li>
            Separe as buscas de quem procura atendimento (“psicóloga infantil
            em Campinas”) das de quem só quer informação.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma psicóloga de Campinas vê
          que “avaliação de autismo infantil campinas” tem muitas impressões,
          posição média 14 e quase nenhum clique. A página existe, mas está na
          segunda página do Google. A tarefa do mês passa a ser melhorar essa
          página, não escrever mais posts.
        </p>
        <p>
          <strong>Erro comum:</strong> olhar só o total de cliques do site. O
          total mistura curiosos de outros estados com famílias da sua cidade.
          A leitura útil é por consulta e por página. Para entender como
          subir nessas buscas, veja o guia de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>2. Visitas às páginas de serviço</h2>
        <p>
          A segunda métrica é quantas pessoas leem as páginas que explicam o
          seu trabalho: psicoterapia infantil, orientação parental, avaliação.
          São elas que transformam uma visita em decisão, e é nelas que vale
          caprichar.
        </p>
        <ul>
          <li>
            Compare as páginas de serviço entre si: qual é lida e qual quase
            ninguém abre?
          </li>
          <li>
            Veja por onde as pessoas chegam a elas: pela home, por um post do
            blog ou direto do Google.
          </li>
          <li>
            Observe se a página é lida no celular. Na maioria dos sites de
            consultório, boa parte das visitas vem de telas pequenas; confira
            no seu relatório em vez de supor.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> o relatório mostra que a página
          “Orientação parental” recebe visitas quase só pelo post sobre birras,
          e que a home não tem link para ela. Um link no menu e outro na home
          resolvem um problema que nenhum anúncio resolveria.
        </p>
        <p>
          <strong>Erro comum:</strong> ter uma página única com todos os
          serviços. Assim não dá para saber qual interessa mais, e o Google
          também não sabe para qual busca mostrar o site. A{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços do psicólogo
          </Link>{" "}
          explica como separar cada atendimento.
        </p>
      </section>

      <section>
        <h2>3. Cliques no botão de contato</h2>
        <p>
          Esta é a métrica mais próxima do que importa: quantas vezes alguém
          apertou o botão de WhatsApp, o link de agendamento ou o e-mail. É
          uma ação, não uma pessoa, e pode ser contada sem guardar quem clicou.
        </p>
        <ol>
          <li>
            Defina quais botões contam como contato: WhatsApp, agenda online,
            telefone, e-mail.
          </li>
          <li>
            Configure um evento para cada clique na ferramenta que você usa
            (no Google Analytics 4, eventos de clique; em ferramentas mais
            simples, “metas” ou “eventos personalizados”).
          </li>
          <li>
            Dê nomes neutros aos eventos: “clique_whatsapp”, “clique_agenda”.
            Nunca “interesse_ansiedade” ou “mae_de_autista”.
          </li>
          <li>Compare mês a mês e por página de origem.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> o botão de WhatsApp da página
          de avaliação neuropsicológica recebe muitos cliques, mas poucas
          conversas começam. Ao testar, a psicóloga percebe que o link abria
          um número antigo. A métrica não mede sentimento, mede um caminho
          quebrado.
        </p>
        <p>
          <strong>Erro comum:</strong> enviar ao Analytics o texto da mensagem
          pré-preenchida ou o conteúdo de um formulário. A{" "}
          <a href={GA_PII} {...ext}>
            ajuda do Google Analytics
          </a>{" "}
          orienta a não enviar informações pessoais identificáveis. Para o
          botão em si, veja o guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. De onde vêm as visitas</h2>
        <p>
          A quarta métrica responde onde vale pôr energia: Google, Instagram,
          Perfil da Empresa no Google, indicação de colegas por link ou acesso
          direto. Ela aparece como “origem” ou “canal” em quase toda
          ferramenta de análise.
        </p>
        <ul>
          <li>
            <strong>Busca orgânica:</strong> pessoas que acharam você no Google
            sem anúncio. Costuma ser o canal mais estável.
          </li>
          <li>
            <strong>Redes sociais:</strong> cliques no link da bio ou em posts.
          </li>
          <li>
            <strong>Direto:</strong> quem digitou o endereço ou clicou num link
            enviado por mensagem, o que inclui muita indicação boca a boca.
          </li>
          <li>
            <strong>Referência:</strong> outros sites que linkam para o seu,
            como o de uma escola parceira.
          </li>
        </ul>
        <p>
          Para saber de onde vem cada clique do link da bio, você pode usar
          parâmetros UTM (por exemplo, ?utm_source=instagram&amp;utm_medium=bio).
          Eles identificam o canal, não a pessoa.
        </p>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma psicóloga que publicava
          cinco vezes por semana descobre que o Instagram traz poucas visitas
          ao site, enquanto o Perfil da Empresa no Google traz a maioria dos
          cliques no contato. Ela reduz os posts e passa a responder as
          perguntas do Perfil.
        </p>
        <p>
          <strong>Erro comum:</strong> pôr nome de paciente ou de grupo em UTM
          (“utm_campaign=grupo-maes-autismo-maria”). O link circula e o nome
          vai junto. Veja como organizar o link da bio no post sobre{" "}
          <Link href="/blog/link-na-bio-psicologo" className="inst-link">
            link na bio para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Buscas que trazem gente da sua região</h2>
        <p>
          Para quem atende presencialmente, a métrica que separa visita útil de
          visita curiosa é a das buscas com cidade ou bairro. Ela não aparece
          pronta: você monta olhando as consultas do Search Console e o
          desempenho do Perfil da Empresa no Google.
        </p>
        <ol>
          <li>
            No Search Console, filtre consultas que contêm o nome da cidade ou
            do bairro.
          </li>
          <li>
            No Perfil da Empresa, acompanhe pedidos de rota, cliques no site e
            ligações.
          </li>
          <li>
            Anote em uma planilha simples, uma linha por mês, sem nenhum dado
            de pessoa.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> a consulta “psicóloga infantil
          zona sul” aparece com frequência, mas o site não cita a região em
          lugar nenhum. Uma frase no rodapé e na página de contato com o
          bairro e o endereço do consultório já ajudam o Google a entender
          onde você atende.
        </p>
        <p>
          <strong>Erro comum:</strong> criar dezenas de páginas iguais trocando
          só o nome do bairro. Isso não ajuda quem lê e pode ser visto como
          conteúdo de baixa qualidade. O caminho certo está no guia do{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Velocidade e leitura no celular</h2>
        <p>
          A sexta métrica é técnica: se o site abre rápido e se dá para ler no
          celular. Uma mãe que pesquisa no intervalo do trabalho desiste de uma
          página que demora ou que obriga a dar zoom.
        </p>
        <ul>
          <li>
            No Search Console, veja o relatório de experiência na página e os
            principais indicadores da web (Core Web Vitals).
          </li>
          <li>
            Abra o site no seu celular com a internet móvel, não no Wi-Fi do
            consultório.
          </li>
          <li>
            Confira o tamanho das imagens: fotos pesadas são a causa mais comum
            de lentidão em sites pequenos.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> a foto de capa da home tinha o
          tamanho original da câmera. Depois de redimensionada e comprimida, a
          página passa a abrir sem a tela branca inicial.
        </p>
        <p>
          <strong>Erro comum:</strong> instalar vários plugins de medição,
          chat e pop-up ao mesmo tempo. Cada um pesa e cada um coleta algo. Um
          site enxuto é mais rápido e mais simples de explicar na política de
          privacidade. O post sobre{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          traz outras verificações que ajudam todo mundo.
        </p>
      </section>

      <section>
        <h2>7. Conversas que começaram pelo site</h2>
        <p>
          A última métrica não mora em ferramenta nenhuma: quantas conversas de
          primeiro contato começaram pelo site. É o número que liga a presença
          digital à agenda, e você pode anotá-lo sem guardar nada além de uma
          contagem.
        </p>
        <ol>
          <li>
            Na primeira resposta, pergunte com naturalidade: “Como você chegou
            até mim?”
          </li>
          <li>
            Marque só o canal (site, Google, indicação, Instagram) numa planilha
            de contagem, sem nome, telefone ou motivo da procura.
          </li>
          <li>
            Compare com os cliques no botão de contato do mesmo mês.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> em um mês, o site registra
          muitos cliques no WhatsApp e poucas conversas citam o site. A
          psicóloga descobre que a mensagem pré-preenchida assustava (“Quero
          agendar uma avaliação de autismo”) e troca por “Olá, vim pelo site
          e gostaria de mais informações”.
        </p>
        <p>
          <strong>Erro comum:</strong> registrar essa origem dentro do
          prontuário ou numa planilha junto com dados clínicos. Contagem de
          marketing e registro clínico ficam em lugares separados, sempre.
          A{" "}
          <Link href="/blog/politica-de-privacidade-psicologo" className="inst-link">
            política de privacidade do site
          </Link>{" "}
          deve deixar essa separação clara.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na medição do site</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao medir o site do consultório"
            tabIndex={0}
          >
            <caption>Métricas do site do psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Busca no Google</td>
                <td>Acompanhar impressões e cliques no Search Console</td>
                <td>Comprar ferramentas que prometem “1º lugar”</td>
              </tr>
              <tr>
                <td>Contato</td>
                <td>Contar cliques no botão com nome de evento neutro</td>
                <td>Enviar texto de formulário ou mensagem ao Analytics</td>
              </tr>
              <tr>
                <td>Origem</td>
                <td>UTM com o canal (instagram, bio, cartao)</td>
                <td>UTM com nome de pessoa, grupo ou diagnóstico</td>
              </tr>
              <tr>
                <td>Cookies</td>
                <td>Pedir consentimento para cookies de análise</td>
                <td>Banner que só tem o botão “Aceitar”</td>
              </tr>
              <tr>
                <td>Anúncios</td>
                <td>Anúncio por palavra-chave, sem lista de visitantes</td>
                <td>Remarketing para quem leu páginas sobre saúde</td>
              </tr>
              <tr>
                <td>Divulgação</td>
                <td>Usar os números para decidir o que melhorar</td>
                <td>Divulgar visitas ou seguidores como prova de qualidade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Como configurar as ferramentas sem expor ninguém</h2>
        <p>
          A configuração mais segura é a mais simples: Search Console para o
          Google e uma ferramenta de análise enxuta para o site. Escolha uma
          das duas rotas abaixo e explique a escolha na política de
          privacidade.
        </p>
        <h3>Rota leve: contagem sem cookies</h3>
        <p>
          Algumas ferramentas de análise contam visitas e páginas sem cookies
          e sem guardar o IP. A{" "}
          <a href={VERCEL} {...ext}>
            documentação de privacidade do Vercel Web Analytics
          </a>
          , por exemplo, descreve uma contagem que não usa cookies de terceiros
          e identifica visitas por um hash diário que é descartado. Para um
          consultório, isso costuma bastar.
        </p>
        <h3>Rota completa: Google Analytics 4 com consentimento</h3>
        <ul>
          <li>
            Ative o{" "}
            <a href={CONSENT} {...ext}>
              modo de consentimento
            </a>{" "}
            e só carregue os cookies de análise depois do “aceito”.
          </li>
          <li>
            Desligue os sinais do Google e o compartilhamento para publicidade
            nas configurações da propriedade.
          </li>
          <li>
            Saiba que, segundo a{" "}
            <a href={GA_IP} {...ext}>
              ajuda do Google
            </a>
            , o Analytics 4 não registra nem armazena endereços IP, mas os
            cookies e identificadores de dispositivo continuam sendo dados a
            explicar.
          </li>
          <li>
            Não instale o pixel de redes sociais “para o caso de um dia
            anunciar”.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> copiar o código de medição de um
          tutorial de loja virtual. Loja quer saber quem comprou o quê; o
          consultório só precisa saber qual página leva à conversa.
        </p>
      </section>

      <section>
        <h2>Para quem já mede: uma rotina de 30 minutos por mês</h2>
        <p>
          Se o básico já está montado, o ganho vem da regularidade, não de mais
          ferramentas. Reserve meia hora no começo de cada mês e siga sempre a
          mesma ordem.
        </p>
        <ol>
          <li>
            <strong>10 minutos no Search Console:</strong> as cinco consultas
            com mais impressões e as cinco páginas com mais cliques. Alguma
            página com muitas impressões e CTR baixo? O título e a descrição
            podem estar pouco claros.
          </li>
          <li>
            <strong>10 minutos na análise do site:</strong> cliques no contato
            por página e origem das visitas.
          </li>
          <li>
            <strong>5 minutos na planilha:</strong> conversas que começaram
            pelo site.
          </li>
          <li>
            <strong>5 minutos para decidir uma ação:</strong> só uma. Reescrever
            um título, criar um link interno, trocar uma foto pesada.
          </li>
        </ol>
        <p>
          Com o tempo, as páginas que trazem conversas indicam quais temas
          merecem um post novo no{" "}
          <Link href="/blog/blog-para-psicologo" className="inst-link">
            blog do consultório
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Aqui a medição pede um cuidado a mais. As páginas mais lidas de um
          site de psicologia infantil costumam tratar de autismo, TDAH,
          seletividade alimentar ou avaliação. Saber que uma pessoa
          identificável leu essas páginas é quase saber algo sobre a saúde do
          filho dela. Por isso, a regra “meça páginas, não pessoas” vale em
          dobro.
        </p>
        <ul>
          <li>
            Não crie públicos ou segmentos como “famílias de autistas” na
            ferramenta de análise ou de anúncios.
          </li>
          <li>
            Evite formulários que perguntam o diagnóstico da criança antes da
            conversa. Se precisar de informação para a triagem, peça na
            conversa, por canal adequado, e guarde no lugar certo.
          </li>
          <li>
            Use os números para melhorar a clareza das páginas: muitas visitas
            em “avaliação neuropsicológica” e poucos cliques no contato podem
            indicar que a página não explica etapas e prazos.
          </li>
          <li>
            Ao ler as consultas do Search Console, preste atenção às perguntas
            reais das famílias (“como saber se meu filho é autista”). Elas são
            pautas melhores do que qualquer ferramenta de palavras-chave.
          </li>
        </ul>
        <p>
          Lembre também que o pai ou a mãe pode estar pesquisando escondido,
          antes de conversar com o outro responsável ou com a escola. Um site
          que não rastreia além do necessário respeita esse momento. Para
          montar as páginas que essas famílias procuram, veja o guia de{" "}
          <Link href="/blog/site-psicologa-infantil" className="inst-link">
            site para psicóloga infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Medir tudo e não decidir nada.</li>
          <li>Olhar seguidores e curtidas em vez de cliques no contato.</li>
          <li>Instalar pixel de anúncio sem anunciar e sem consentimento.</li>
          <li>Mandar nome, e-mail ou texto de formulário para o Analytics.</li>
          <li>Guardar a origem do contato junto com dados clínicos.</li>
          <li>Usar números de visitas como propaganda da qualidade do trabalho.</li>
          <li>Comparar o seu site com médias de outros setores.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist das métricas do site</h2>
        <ul>
          <li>Search Console configurado, com sitemap enviado.</li>
          <li>Uma página para cada serviço, com link na home e no menu.</li>
          <li>Eventos de clique no contato com nomes neutros.</li>
          <li>UTMs só com o canal, nunca com pessoas.</li>
          <li>Cookies de análise só depois do consentimento, ou ferramenta sem cookies.</li>
          <li>Política de privacidade que cita cada ferramenta.</li>
          <li>Planilha mensal de contagem, separada de qualquer registro clínico.</li>
          <li>Uma ação de melhoria escolhida por mês.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          páginas de serviço separadas, botão de contato medido sem expor
          ninguém e cada texto revisado pelo art. 20. Tudo é apresentado em
          até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer um site que mostre o que funciona sem rastrear
          ninguém, marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 5º, II, e 11.
          </li>
          <li>
            Autoridade Nacional de Proteção de Dados.{" "}
            <a href={COOKIES} {...ext}>
              Guia orientativo: cookies e proteção de dados pessoais
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 9º e 20.
          </li>
          <li>
            Google.{" "}
            <a href={GSC} {...ext}>
              Relatório de desempenho do Search Console
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={GA_PII} {...ext}>
              Práticas recomendadas para não enviar informações pessoais
              identificáveis ao Analytics
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={GA_IP} {...ext}>
              Mascaramento de IP no Analytics
            </a>{" "}
            (nota sobre o Google Analytics 4).
          </li>
          <li>
            Google.{" "}
            <a href={CONSENT} {...ext}>
              Modo de consentimento (documentação para desenvolvedores)
            </a>
            .
          </li>
          <li>
            Google Ads.{" "}
            <a href={ADS_PERSONAL} {...ext}>
              Política de publicidade personalizada
            </a>{" "}
            (categorias sensíveis, entre elas saúde).
          </li>
          <li>
            Vercel.{" "}
            <a href={VERCEL} {...ext}>
              Web Analytics: privacidade e conformidade
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
