import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const ECA = "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm";
const WCAG = "https://www.w3.org/TR/WCAG21/";
const SEO_GUIA = "https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br";

export const post: Post = {
  slug: "site-psicologa-infantil",
  title: "Site para psicóloga infantil: 8 decisões para falar com os pais dentro do Código de Ética",
  description:
    "Site para psicóloga infantil: páginas que os pais procuram, texto, fotos sem criança, formulário com LGPD, acessibilidade e os limites do art. 20.",
  keyword: "site para psicóloga infantil",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-16",
  summary:
    "O site da psicóloga infantil é lido pelos pais, não pela criança: ele precisa dizer que idades e demandas você atende, como funciona a primeira conversa com a família e como é o espaço. Nome completo e CRP aparecem em todas as páginas, e nada de foto de criança, depoimento, preço como chamariz ou promessa de resultado (art. 20 do Código de Ética). Dados da criança só entram no formulário se forem necessários, com consentimento de um responsável (LGPD, art. 14).",
  faq: [
    {
      q: "O que colocar no site de psicóloga infantil?",
      a: "Nome completo, a palavra psicóloga e o CRP; as idades e as demandas que você atende; como funciona o primeiro contato e a conversa inicial com os responsáveis; como é o espaço, com fotos sem pessoas; a sua formação; perguntas frequentes dos pais; endereço ou atendimento online; e um jeito simples de entrar em contato. Preço e depoimentos ficam de fora."
    },
    {
      q: "Psicóloga infantil pode colocar foto de criança no site?",
      a: "Não é recomendado, nem de criança atendida nem de banco de imagens que pareça uma sessão. O Código de Ética veda expor quem é atendido, e o ECA protege a imagem da criança. Fotos do espaço vazio, de brinquedos e materiais neutros, da fachada e da própria psicóloga contam a mesma história sem risco."
    },
    {
      q: "Preciso de site se já tenho Instagram?",
      a: "Ajuda bastante. Os pais costumam pesquisar no Google algo como “psicóloga infantil” mais o bairro, e o site é a página que responde a essa busca com calma, com endereço, perguntas frequentes e contato. O Instagram mostra o seu jeito de falar; o site organiza a decisão."
    },
    {
      q: "Posso colocar o valor da sessão no site da psicóloga infantil?",
      a: "O Código de Ética não proíbe informar o valor, mas proíbe usá-lo como forma de propaganda (art. 20, alínea d). Por isso, a maioria das psicólogas prefere dizer que o valor é informado na conversa inicial. Desconto, pacote promocional ou “primeira sessão grátis” não podem aparecer."
    },
    {
      q: "Quantas páginas deve ter o site de uma psicóloga infantil?",
      a: "Para quem atende sozinha, de quatro a seis páginas resolvem: início, sobre você, atendimentos (ou uma página por atendimento principal), o espaço, perguntas frequentes e contato. Quem tem mais de um serviço com busca própria, como avaliação ou orientação parental, ganha com uma página para cada."
    }
  ],
  cover: {
    src: "/blog/site-psicologa-infantil/site-psicologa-infantil-brinquedos-na-estante.jpg",
    alt: "Estante branca com brinquedos de madeira coloridos, um porta-retratos e uma planta, sem pessoas",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mãe pesquisa “psicóloga infantil perto de mim” às dez da noite, com o
        filho já dormindo. Abre três sites. Um tem foto de banco com uma criança
        chorando e um adulto de jaleco. Outro só diz “atendimento humanizado” e
        um botão de WhatsApp. O terceiro explica, em poucas linhas, que idades a
        psicóloga atende, como é a primeira conversa com os pais e onde fica o
        consultório. É nesse que ela clica.
      </p>
      <p>
        O site da psicóloga infantil tem um leitor diferente do site de quem
        atende adultos: quem decide é o responsável, quase sempre cansado,
        preocupado e com pouco tempo. A resposta curta é esta: o site precisa
        responder às dúvidas desse adulto, mostrar o espaço sem mostrar
        criança e seguir o art. 20 do Código de Ética em cada linha. A seguir
        estão o que dizem as normas, oito decisões que estruturam o site, uma
        tabela de pode e evitar, a parte para quem atende famílias de crianças
        autistas e neurodivergentes, os erros comuns e um checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O site é publicidade profissional e segue o{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>
          . Ele pede nome completo, a palavra psicóloga e o número do CRP, e
          proíbe:
        </p>
        <ul>
          <li>usar o preço do serviço como forma de propaganda (alínea d);</li>
          <li>fazer previsão taxativa de resultados (alínea e);</li>
          <li>fazer autopromoção em detrimento de outros profissionais (alínea f);</li>
          <li>divulgar de forma sensacionalista (alínea h).</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          lembra que o Conselho não restringe os meios de divulgação, sites
          incluídos, e veda expor depoimentos ou material do atendimento que
          possa identificar alguém. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          trata do uso profissional das redes e da divulgação digital.
        </p>
        <p>
          Duas leis entram por causa da criança. O{" "}
          <a href={ECA} {...ext}>
            Estatuto da Criança e do Adolescente
          </a>{" "}
          (art. 17) inclui a preservação da imagem e da identidade no direito ao
          respeito. A{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          (art. 14) exige que dados de crianças sejam tratados no melhor
          interesse delas e com consentimento específico de pelo menos um dos
          pais ou responsável. Para o site, isso significa formulário enxuto e
          nenhuma imagem de criança atendida.
        </p>
      </section>

      <section>
        <h2>1. Escreva para os pais, não para a criança</h2>
        <p>
          O texto do site fala com o adulto que vai marcar a primeira conversa.
          Desenho fofo e linguagem infantilizada podem até combinar com a sala,
          mas quem lê precisa de clareza.
        </p>
        <ol>
          <li>
            <strong>Comece pela situação da família:</strong> “Seu filho anda
            mais irritado, a escola chamou para conversar e você não sabe por
            onde começar.”
          </li>
          <li>
            <strong>Diga em seguida o que você faz:</strong> psicoterapia
            infantil para crianças de 3 a 12 anos, com encontros regulares com
            os responsáveis.
          </li>
          <li>
            <strong>Use as palavras dos pais:</strong> “birra”, “não dorme”,
            “dificuldade na escola”, e não só os termos técnicos.
          </li>
          <li>
            <strong>Mostre o próximo passo:</strong> uma frase que explique
            como é a primeira conversa e um botão de contato.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia troca o título “Cuidando
          do seu pequeno com amor” por “Psicoterapia para crianças de 3 a 12
          anos em Campinas, com a família por perto”. O segundo diz quem, o quê
          e onde, e já responde à busca no Google.
        </p>
        <p>
          O erro comum é encher a home de adjetivos (“acolhedor”, “humanizado”,
          “especial”) que qualquer site usa. Os pais confiam mais em detalhes
          concretos. O post sobre{" "}
          <Link href="/blog/marketing-psicologa-infantil" className="inst-link">
            marketing para psicóloga infantil
          </Link>{" "}
          mostra onde o site entra entre os outros canais.
        </p>
      </section>

      <section>
        <h2>2. Defina as páginas antes do visual</h2>
        <p>
          Quatro a seis páginas atendem a maioria das psicólogas infantis que
          trabalham sozinhas. Defina o mapa do site antes de escolher cores ou
          modelo.
        </p>
        <ul>
          <li>
            <strong>Início:</strong> quem você atende, como trabalha, onde fica
            e o contato, tudo na primeira tela do celular.
          </li>
          <li>
            <strong>Sobre:</strong> formação, abordagem e por que trabalha com
            crianças. O modelo em blocos da{" "}
            <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
              página sobre mim para psicólogo
            </Link>{" "}
            serve aqui.
          </li>
          <li>
            <strong>Atendimentos:</strong> psicoterapia infantil, orientação de
            pais, avaliação, cada um com público e formato.
          </li>
          <li>
            <strong>O espaço:</strong> fotos da sala, da recepção e da fachada.
          </li>
          <li>
            <strong>Perguntas frequentes:</strong> as dúvidas reais dos pais.
          </li>
          <li>
            <strong>Contato:</strong> WhatsApp, e-mail, endereço com mapa e
            horário de resposta.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga que atende crianças e faz
          orientação parental cria uma página para cada serviço. Assim, o pai
          que busca “orientação para pais” cai direto na página certa, sem
          passar pela terapia da criança.
        </p>
        <p>
          O erro comum é começar pelo modelo pronto e encaixar o conteúdo
          depois. O resultado é um site bonito com páginas vazias. A ordem
          certa, pesquisa primeiro, está em{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Explique a primeira conversa e o papel da família</h2>
        <p>
          A dúvida que mais trava o contato é “como funciona?”. Responda no
          próprio site, antes que os pais precisem perguntar.
        </p>
        <ol>
          <li>
            <strong>Quem vem primeiro:</strong> conte se a primeira conversa é
            só com os responsáveis, com a criança junto ou online.
          </li>
          <li>
            <strong>Duração e frequência:</strong> quanto tempo dura cada
            encontro e com que frequência, em termos gerais.
          </li>
          <li>
            <strong>Encontros com os pais:</strong> como e quando os
            responsáveis participam.
          </li>
          <li>
            <strong>Contato com a escola e outros profissionais:</strong> só
            com autorização da família, e diga isso.
          </li>
          <li>
            <strong>Sigilo:</strong> explique, em linguagem simples, o que fica
            entre você e a criança e o que é compartilhado com os pais.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo de texto: “O primeiro encontro é só com os
          responsáveis, para eu entender a história da criança e o que preocupa
          vocês. Depois, conhecemos a criança no ritmo dela. A cada mês, temos
          uma conversa com a família.”
        </p>
        <p>
          Evite prometer prazo de melhora (“em poucas sessões”) ou falar em
          “resolver” o comportamento: isso é previsão de resultado, vedada pela
          alínea e do art. 20. O detalhamento de cada serviço segue o passo a
          passo da{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços do psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Mostre o espaço, nunca a criança</h2>
        <p>
          Os pais querem ver onde o filho vai ficar. Mostre a sala, a recepção
          e a entrada, sem nenhuma pessoa atendida na foto.
        </p>
        <ul>
          <li>Sala de atendimento vazia, com luz natural e de dia.</li>
          <li>Brinquedos, livros e materiais neutros, sem testes psicológicos.</li>
          <li>Recepção, banheiro e acesso para carrinho ou cadeira de rodas.</li>
          <li>Fachada e placa, para a família reconhecer o prédio no dia.</li>
          <li>Uma foto sua, profissional, que mostre quem vai receber a família.</li>
        </ul>
        <p>
          Imagem de banco também pede cuidado. Criança triste, adulto anotando
          numa prancheta ou cena que simule sessão passa a ideia de atendimento
          e pode soar sensacionalista. Ilustração e foto de objetos funcionam
          melhor.
        </p>
        <p>
          Exemplo ilustrativo: em vez de uma foto de banco com uma menina
          desenhando ao lado de uma terapeuta, a psicóloga publica a mesa baixa
          da sala, com lápis de cor e papel em branco, fotografada de cima.
        </p>
        <p>
          O erro comum é publicar foto de evento ou de festa no consultório em
          que aparece uma criança “de costas”. Uniforme, mochila e cabelo podem
          identificar. As dez fotos que funcionam estão em{" "}
          <Link href="/blog/fotos-do-consultorio-psicologia" className="inst-link">
            fotos do consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Responda às perguntas frequentes dos pais</h2>
        <p>
          Uma página de perguntas frequentes bem feita reduz as mensagens
          repetidas e ajuda a família a decidir. Use dúvidas reais, que já
          chegaram no seu WhatsApp.
        </p>
        <ul>
          <li>“A partir de que idade a criança pode fazer terapia?”</li>
          <li>“Como explico para o meu filho que ele vai à psicóloga?”</li>
          <li>“Os pais participam das sessões?”</li>
          <li>“Você conversa com a escola?”</li>
          <li>“Atende online? E por plano de saúde ou reembolso?”</li>
          <li>“Quanto tempo dura o acompanhamento?”</li>
        </ul>
        <p>
          Responda com honestidade, sem prazo fechado. “Depende de cada
          criança” é verdade, mas sozinho é vago. Complete com o que define a
          duração e com o fato de que vocês revisam o plano juntos.
        </p>
        <p>
          Exemplo ilustrativo de resposta: “Como explico para o meu filho? Diga
          que vai conhecer uma pessoa cujo trabalho é ajudar crianças a
          entender o que sentem, brincando e conversando. Evite apresentar a
          terapia como castigo.”
        </p>
        <p>
          O erro comum é copiar perguntas de outro site, que não refletem o seu
          trabalho. Quinze perguntas reais, com respostas modelo, estão em{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Faça um formulário enxuto e seguro</h2>
        <p>
          O contato pelo site deve pedir só o necessário para retornar. Dados
          da criança e detalhes do caso ficam para a conversa com você.
        </p>
        <ol>
          <li>
            <strong>Campos mínimos:</strong> nome do responsável, telefone ou
            e-mail e melhor horário para retorno.
          </li>
          <li>
            <strong>Idade, só se decidir o encaminhamento:</strong> se você
            atende uma faixa etária específica, peça a faixa (“3 a 6 anos”), e
            não a data de nascimento.
          </li>
          <li>
            <strong>Sem campo livre sobre o caso:</strong> “conte o que está
            acontecendo” convida o pai a escrever diagnóstico e nome da escola
            num formulário que talvez não seja seguro.
          </li>
          <li>
            <strong>Aviso de privacidade:</strong> uma frase dizendo para que
            os dados servem, por quanto tempo ficam guardados e com link para a
            política.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: “Seus dados servem só para eu retornar o
          contato. Não escreva aqui informações sobre a saúde da criança; vamos
          conversar sobre isso por telefone ou na primeira consulta.”
        </p>
        <p>
          O erro comum é usar um formulário gratuito que manda tudo para uma
          planilha aberta. A LGPD trata dado de saúde como sensível. Se você
          prefere agenda automática, o post sobre{" "}
          <Link href="/blog/agendamento-online-psicologo" className="inst-link">
            agendamento online para psicólogo
          </Link>{" "}
          traz os cuidados de cada ferramenta.
        </p>
      </section>

      <section>
        <h2>7. Garanta leitura fácil e acessibilidade</h2>
        <p>
          Pais leem o site no celular, às pressas, e muitos têm deficiência
          visual, dislexia ou são neurodivergentes. Acessibilidade aqui é parte
          do atendimento.
        </p>
        <ul>
          <li>Contraste suficiente entre texto e fundo, também nos botões.</li>
          <li>Fonte de no mínimo 16 px e parágrafos curtos.</li>
          <li>Texto alternativo que descreva cada foto do espaço.</li>
          <li>Botão de WhatsApp com nome claro, não só um ícone.</li>
          <li>Nada de música automática nem animação que pisca.</li>
        </ul>
        <p>
          A referência técnica é a{" "}
          <a href={WCAG} {...ext}>
            WCAG 2.1
          </a>
          , do W3C. Não é preciso decorar a norma: os ajustes que mais pesam
          para famílias neurodivergentes estão em{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>
          .
        </p>
        <p>
          Exemplo ilustrativo: uma psicóloga troca o fundo bege com texto cinza
          claro por fundo claro com texto escuro e descobre que os pais passam a
          ler a página de perguntas até o fim.
        </p>
        <p>
          O erro comum é escolher cores pastéis demais por serem “infantis”. A
          paleta pode ser suave nas áreas grandes e firme no texto. Mais em{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>8. Seja encontrada no Google pelos pais da sua região</h2>
        <p>
          Os pais pesquisam pelo problema e pelo bairro. O site precisa ter
          essas palavras nos títulos e no texto, e estar ligado ao seu Perfil
          da Empresa no Google.
        </p>
        <ol>
          <li>
            <strong>Título de cada página com serviço e cidade:</strong>
            “Psicóloga infantil em Campinas, Cambuí”.
          </li>
          <li>
            <strong>Uma página por serviço com busca própria:</strong> avaliação,
            orientação parental, terapia infantil online.
          </li>
          <li>
            <strong>Endereço igual em todo lugar:</strong> site, Google e
            redes, com o mesmo nome e telefone.
          </li>
          <li>
            <strong>Conteúdo útil:</strong> textos que respondem dúvidas dos
            pais, como pede o{" "}
            <a href={SEO_GUIA} {...ext}>
              guia de SEO do Google
            </a>
            .
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: a página “Orientação para pais de crianças com
          dificuldade escolar”, com cidade no título e perguntas frequentes no
          fim, começa a aparecer para buscas que a home genérica não alcançava.
        </p>
        <p>
          O erro comum é repetir “psicóloga infantil” vinte vezes no texto. O
          Google entende sinônimos, e os pais cansam de ler a mesma expressão.
          O caminho completo está em{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          e no{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Perfil da Empresa no Google
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar no site da psicóloga infantil</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no site da psicóloga infantil"
            tabIndex={0}
          >
            <caption>Site para psicóloga infantil: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Elemento</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome completo, psicóloga e CRP em todas as páginas</td>
                <td>Só apelido ou nome fantasia</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Sala vazia, brinquedos, fachada, sua foto</td>
                <td>Criança atendida, cena de sessão, material de teste</td>
              </tr>
              <tr>
                <td>Texto</td>
                <td>Idades, demandas e como a família participa</td>
                <td>“Resolvo a birra”, prazo de melhora, “a melhor da cidade”</td>
              </tr>
              <tr>
                <td>Prova</td>
                <td>Formação, abordagem e perguntas frequentes</td>
                <td>Depoimento de pais, prints de conversa, antes e depois</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>“Informado na conversa inicial”</td>
                <td>Preço em destaque, pacote promocional, sessão grátis</td>
              </tr>
              <tr>
                <td>Formulário</td>
                <td>Nome do responsável, contato e horário</td>
                <td>Nome, diagnóstico ou escola da criança</td>
              </tr>
              <tr>
                <td>Diagnósticos</td>
                <td>Nomear as demandas que você atende</td>
                <td>Listas de “sinais” para os pais se autodiagnosticarem</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem site: revise com os olhos de um pai</h2>
        <p>
          Se o site já existe, o ganho está em revisar com quem chega. Peça a
          duas pessoas de fora, que tenham filhos, para encontrar três coisas
          no celular: que idade você atende, como é a primeira conversa e como
          marcar. Cronometre. O que demorar mais de um minuto precisa subir na
          página.
        </p>
        <p>
          Depois, olhe os números do Google Search Console: que buscas trazem
          visitas e que páginas recebem cliques. Se a página de orientação
          parental quase não aparece, talvez falte o termo que os pais usam no
          título. Se a página de contato tem visitas e poucas mensagens, talvez
          o formulário peça demais.
        </p>
        <p>
          Revise também a coerência com a marca. Cores, fonte e tom precisam
          ser os mesmos do Instagram, do cartão e da placa. Quando cada canal
          parece de uma profissional diferente, a família desconfia. Uma revisão
          por ano, com fotos atualizadas e perguntas frequentes novas, mantém o
          site vivo sem refazer tudo.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas e neurodivergentes chegam ao site com
          perguntas mais específicas e, muitas vezes, depois de experiências
          ruins. Eles procuram sinais de que você entende a rotina da família,
          e não promessas.
        </p>
        <ul>
          <li>
            <strong>Diga como prepara a primeira visita:</strong> fotos da
            entrada e da sala, horário mais calmo, possibilidade de visitar o
            espaço antes.
          </li>
          <li>
            <strong>Descreva o ambiente sensorial:</strong> luz, barulho,
            sala de espera. Isso ajuda a família a antecipar.
          </li>
          <li>
            <strong>Use linguagem neuroafirmativa:</strong> fale de apoio e de
            necessidades, sem “cura”, sem “tirar a criança do espectro”. O post
            sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            traz exemplos.
          </li>
          <li>
            <strong>Explique avaliação e acompanhamento separados:</strong> se
            você faz avaliação, ela merece página própria, como em{" "}
            <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
              avaliação neuropsicológica infantil no site
            </Link>
            .
          </li>
          <li>
            <strong>Fale do trabalho em rede:</strong> escola, fonoaudiologia,
            terapia ocupacional, sempre com autorização da família.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga inclui na página do espaço a frase
          “Se ajudar, posso enviar antes um vídeo curto do caminho da recepção
          até a sala”. Para muitas famílias, isso diz mais que qualquer
          adjetivo.
        </p>
        <p>
          Cuidado com listas de “sinais de autismo” para os pais conferirem em
          casa. Elas atraem visitas, mas incentivam autodiagnóstico e podem
          soar sensacionalistas. Prefira explicar quando vale procurar uma
          avaliação e como ela funciona.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Foto de banco com criança em cena de terapia.</li>
          <li>Home cheia de adjetivos e sem dizer idade, cidade e serviço.</li>
          <li>Depoimentos de pais, mesmo anônimos ou autorizados.</li>
          <li>CRP só no rodapé de uma página.</li>
          <li>Formulário que pede nome, diagnóstico e escola da criança.</li>
          <li>Promessa de prazo ou de “resolver” comportamentos.</li>
          <li>Site lento e difícil de ler no celular.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do site da psicóloga infantil</h2>
        <ul>
          <li>Nome completo, psicóloga e CRP visíveis em todas as páginas.</li>
          <li>Idades, demandas e cidade ou atendimento online na primeira tela.</li>
          <li>Primeira conversa e papel da família explicados.</li>
          <li>Fotos do espaço sem pessoas atendidas e com texto alternativo.</li>
          <li>Perguntas frequentes reais dos pais.</li>
          <li>Formulário só com dados de contato e aviso de privacidade.</li>
          <li>Sem preço como chamariz, depoimento ou promessa.</li>
          <li>Contraste, fonte legível e botão de contato com nome.</li>
          <li>Título de cada página com serviço e cidade.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, que famílias atende e aonde quer chegar.
          Daí saem o posicionamento, a identidade visual e o site, com textos
          escritos para os pais e revisados pelo art. 20. Tudo é apresentado
          em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu site ainda não responde às perguntas que os pais fazem,
          marque uma conversa de 15 minutos.
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
            , art. 9º e art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Brasil.{" "}
            <a href={ECA} {...ext}>
              Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente
            </a>
            , art. 17.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 11 e 14.
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={SEO_GUIA} {...ext}>
              Guia de otimização de mecanismos de pesquisa (SEO) para iniciantes
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
