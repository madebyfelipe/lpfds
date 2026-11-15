import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const FAQ_CHANGE = "https://developers.google.com/search/blog/2023/08/howto-faq-changes";
const FAQ_DOC = "https://developers.google.com/search/docs/appearance/structured-data/faqpage";
const HELPFUL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";

export const post: Post = {
  slug: "perguntas-frequentes-site-psicologo",
  title: "Perguntas frequentes no site do psicólogo: 15 perguntas que as famílias fazem e como responder",
  description:
    "Perguntas frequentes no site do psicólogo: quais incluir, como responder valor, sigilo e duração pelo art. 20, onde colocar e o que esperar do Google.",
  keyword: "perguntas frequentes site psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-15",
  summary:
    "Uma boa página de perguntas frequentes responde, antes do primeiro contato, às dúvidas que fazem a pessoa hesitar: como funciona a primeira consulta, se atende online, como é o sigilo, se emite recibo para reembolso e quanto tempo dura. As respostas seguem o art. 20 do Código de Ética: sem preço como propaganda, sem prometer resultado e sem prazo taxativo. Escreva com as perguntas reais que você recebe no WhatsApp.",
  faq: [
    {
      q: "Quais perguntas colocar no FAQ do site de psicólogo?",
      a: "As que você mais recebe no primeiro contato: como funciona a primeira consulta, se atende online, se atende convênio ou emite recibo para reembolso, como é o sigilo, quanto dura cada sessão e o acompanhamento, e, no atendimento infantil, como os pais participam. Comece pelas mensagens do seu WhatsApp dos últimos meses."
    },
    {
      q: "Posso responder o valor da sessão no FAQ?",
      a: "A cartilha do CRP-MG explica que a publicidade não pode ter foco ou destaque no valor e orienta informar valor e condições de forma reservada, diretamente à pessoa. Uma resposta segura é dizer que o valor e as formas de pagamento são informados na conversa inicial. A exceção citada pela cartilha é o serviço vendido só online, numa plataforma, em que o valor aparece, ainda sem destaque."
    },
    {
      q: "O FAQ com dados estruturados aparece com destaque no Google?",
      a: "Desde agosto de 2023, o Google mostra o resultado em formato de perguntas frequentes só para sites governamentais e de saúde muito conhecidos e com autoridade. Para um consultório, a marcação raramente vai gerar esse destaque. A página continua valendo pelo que faz para quem a lê: tirar dúvidas e facilitar o contato."
    },
    {
      q: "Onde colocar as perguntas frequentes no site?",
      a: "Em dois lugares: uma página própria com todas as perguntas, ligada no menu ou no rodapé, e três a cinco perguntas específicas no fim de cada página de serviço. Assim, quem lê sobre avaliação vê as dúvidas da avaliação, e quem quer tudo encontra a página completa."
    }
  ],
  cover: {
    src: "/blog/perguntas-frequentes-site-psicologo/perguntas-frequentes-site-psicologo-interrogacao.jpg",
    alt: "Bloco de notas com ponto de interrogação desenhado em lascas de lápis sobre fundo azul, com café e papéis amassados",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Toda semana chegam as mesmas perguntas no WhatsApp: “atende online?”,
        “como é a primeira consulta?”, “os pais participam?”, “dá recibo para o
        plano?”. Cada uma tem resposta simples, mas, enquanto ela não vem, a
        pessoa espera, ou desiste e procura outra psicóloga cujo site já
        respondia.
      </p>
      <p>
        Uma página de perguntas frequentes resolve boa parte disso. Ela
        responde às dúvidas que fazem a família hesitar, antes do primeiro
        contato, e deixa o WhatsApp para o que importa. A seguir estão o que
        dizem as normas, como escolher as perguntas, quinze perguntas reais com
        o jeito de responder, onde colocar a página, o que esperar do Google, a
        tabela de pode e evitar e a parte para quem atende famílias de crianças
        neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A página de perguntas frequentes é publicidade profissional como
          qualquer outra do site. Vale o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          : nome completo e CRP visíveis (alínea a), só técnicas reconhecidas
          (alínea c), sem preço como propaganda (alínea d), sem previsão
          taxativa de resultado (alínea e) e sem sensacionalismo (alínea h).
        </p>
        <p>
          Três outros artigos aparecem nas respostas mais comuns. O art. 9º
          protege o sigilo, e o art. 10 explica que a quebra só é possível em
          situações de conflito com os princípios do Código, buscando o menor
          prejuízo. O art. 8º pede autorização de ao menos um responsável para o
          atendimento não eventual de criança ou adolescente, e o art. 13 diz que
          aos responsáveis se comunica “o estritamente essencial para se
          promoverem medidas em seu benefício”.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          orienta que valores e condições sejam informados diretamente à pessoa,
          de forma reservada. Para quem atende online, a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          regulamenta a prática mediada por tecnologias e revogou a Resolução
          11/2018.
        </p>
      </section>

      <section>
        <h2>1. Tire as perguntas do seu WhatsApp</h2>
        <p>
          As melhores perguntas são as que as pessoas já fazem. Antes de
          escrever, leia as mensagens de primeiro contato dos últimos meses e
          anote cada dúvida com as palavras de quem perguntou.
        </p>
        <ol>
          <li>
            <strong>Liste:</strong> copie as perguntas sem nome nem detalhe do
            caso. Só a dúvida.
          </li>
          <li>
            <strong>Agrupe:</strong> primeira consulta, formato, sigilo, valores
            e pagamento, duração, crianças e família.
          </li>
          <li>
            <strong>Conte:</strong> as que aparecem mais vão para o topo.
          </li>
          <li>
            <strong>Complete:</strong> pesquise no Google o seu atendimento e
            veja o quadro “As pessoas também perguntam”.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia relê três meses de
          WhatsApp e percebe que “a criança precisa ir na primeira consulta?”
          aparece em quase todo primeiro contato de pais. A pergunta, que nem
          estava na lista dela, vira a segunda do FAQ.
        </p>
        <p>
          O erro comum é escrever as perguntas que você gostaria de responder
          (“qual a minha abordagem?”) no lugar das que as pessoas fazem. Para
          entender quem é esse público, o guia de{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          ajuda.
        </p>
      </section>

      <section>
        <h2>2. Primeira consulta e formato: as dúvidas que mais seguram o contato</h2>
        <p>
          Quem nunca fez terapia não sabe o que esperar, e o desconhecido segura
          o contato. Responda com o passo a passo concreto.
        </p>
        <ul>
          <li>
            <strong>“Como é a primeira consulta?”</strong> Quem participa, quanto
            tempo dura, o que se conversa. “Na primeira conversa, entendo o que
            trouxe você e explico como trabalho. Ao fim, combinamos juntos se e
            como seguir.”
          </li>
          <li>
            <strong>“Atende online?”</strong> Se sim, por qual plataforma, e que
            o atendimento segue a Resolução CFP nº 9/2024. Se você atende
            pessoas de outras cidades, diga.
          </li>
          <li>
            <strong>“Onde fica o consultório?”</strong> Endereço, referência,
            estacionamento, acessibilidade.
          </li>
          <li>
            <strong>“Como marco?”</strong> O canal e o tempo de resposta.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo de resposta: “Atendo presencialmente em Sorocaba e
          online, por videochamada, para todo o Brasil. O atendimento online
          segue as mesmas regras de sigilo do presencial e a Resolução CFP nº
          9/2024.”
        </p>
        <p>
          O erro comum é responder “depende” sem dizer do quê. Se depende, conte
          as duas ou três situações. O post sobre{" "}
          <Link href="/blog/psicologo-online-divulgacao" className="inst-link">
            como divulgar atendimento online
          </Link>{" "}
          aprofunda a parte do formato.
        </p>
      </section>

      <section>
        <h2>3. Valor, convênio e recibo: como responder sem pôr preço em destaque</h2>
        <p>
          A pergunta sobre valor é a mais frequente e a mais delicada. A saída é
          responder de forma honesta sobre como o valor é informado, sem
          transformá-lo em argumento.
        </p>
        <ol>
          <li>
            <strong>“Qual o valor da sessão?”</strong> “O valor e as formas de
            pagamento são informados na conversa inicial, antes de começarmos.”
            Isso segue o art. 4º do Código, que pede o valor combinado antes do
            início do trabalho.
          </li>
          <li>
            <strong>“Atende convênio?”</strong> Se sim, quais. Se não, diga e
            explique o reembolso.
          </li>
          <li>
            <strong>“Emite recibo para reembolso?”</strong> “Sim, o recibo é
            emitido pelo Receita Saúde na data de cada pagamento.”
          </li>
          <li>
            <strong>“Tem valor social?”</strong> A cartilha do CRP-MG desaconselha
            divulgar preço reduzido de forma individual. Se você faz parte de um
            projeto social ou clínica-escola, indique o projeto.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia trocou “Sessão R$ 200, 1ª
          com 50% off” por “O valor é informado na conversa inicial. Não atendo
          convênio, mas emito recibo para reembolso”. A pergunta parou de chegar
          sozinha e passou a vir junto com o pedido de horário.
        </p>
        <p>
          O erro comum é pular a pergunta. Ela vai chegar no WhatsApp de
          qualquer jeito. Os posts{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>{" "}
          e{" "}
          <Link href="/blog/recibo-psicologo" className="inst-link">
            recibo de psicólogo no Receita Saúde
          </Link>{" "}
          detalham as duas partes.
        </p>
      </section>

      <section>
        <h2>4. Sigilo e duração: respostas que não prometem o que não dá</h2>
        <p>
          Duas perguntas pedem cuidado com a promessa: “o que eu falar fica entre
          nós?” e “quanto tempo vai durar?”. A resposta honesta é a que acalma.
        </p>
        <ul>
          <li>
            <strong>Sigilo:</strong> explique que é dever da psicóloga (art. 9º)
            e que há exceções previstas no Código, sem entrar em detalhes que
            assustem. “O que é conversado é sigiloso. As exceções são raras e
            previstas no Código de Ética, e eu explico na primeira consulta.”
          </li>
          <li>
            <strong>Duração da sessão:</strong> dado objetivo, como “50 minutos”.
          </li>
          <li>
            <strong>Duração do acompanhamento:</strong> diga do que depende, sem
            número fechado. “Varia com o que trouxe você e é revisto
            periodicamente, juntos.”
          </li>
          <li>
            <strong>Frequência:</strong> o habitual (semanal, quinzenal) e que ela
            pode mudar.
          </li>
        </ul>
        <p>
          Exemplo de resposta que não cabe: “Em 10 sessões você vai se sentir
          outra pessoa.” É previsão taxativa de resultado (alínea e do art. 20).
          Exemplo que cabe: “Algumas pessoas vêm por um período curto, outras por
          mais tempo; revemos isso juntos de tempos em tempos.”
        </p>
        <p>
          O erro comum é escrever “sigilo absoluto”. O Código prevê exceções, e
          prometer o absoluto cria uma expectativa que você não pode cumprir. O
          guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz
          </Link>{" "}
          ajuda a escrever com calma e clareza.
        </p>
      </section>

      <section>
        <h2>5. Quinze perguntas para começar a sua página</h2>
        <p>
          Esta lista reúne as dúvidas mais comuns de primeiro contato. Escolha as
          que fazem sentido para o seu atendimento e responda com as suas
          palavras.
        </p>
        <ol>
          <li>Como é a primeira consulta?</li>
          <li>Atende online? Por qual plataforma?</li>
          <li>Onde fica o consultório? Tem acessibilidade?</li>
          <li>Quanto dura cada sessão?</li>
          <li>Com que frequência são as sessões?</li>
          <li>Quanto tempo dura o acompanhamento?</li>
          <li>Como funciona o sigilo?</li>
          <li>Atende convênio?</li>
          <li>Emite recibo para reembolso?</li>
          <li>Como é informado o valor?</li>
          <li>Qual a sua abordagem, em palavras simples?</li>
          <li>Atende crianças? A partir de que idade?</li>
          <li>Os pais participam do atendimento da criança?</li>
          <li>O que acontece se eu precisar remarcar?</li>
          <li>Como faço para marcar?</li>
        </ol>
        <p>
          Exemplo ilustrativo: um consultório fictício que atende só adultos
          tira as perguntas 12 e 13 e acrescenta “Atende casais?”, que é a
          dúvida que mais recebe. A lista é só um ponto de partida.
        </p>
        <p>
          O erro comum é publicar as quinze de uma vez, com respostas genéricas.
          Oito perguntas bem respondidas valem mais. A página de{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            sobre mim
          </Link>{" "}
          pode responder à pergunta da abordagem com mais espaço.
        </p>
      </section>

      <section>
        <h2>6. Onde colocar as perguntas no site</h2>
        <p>
          O melhor arranjo combina uma página completa com perguntas curtas nas
          páginas de serviço. Cada pessoa encontra a dúvida perto de onde está.
        </p>
        <ul>
          <li>
            <strong>Página própria:</strong> todas as perguntas, agrupadas por
            tema, com link no menu ou no rodapé (“Dúvidas frequentes”).
          </li>
          <li>
            <strong>Páginas de serviço:</strong> três a cinco perguntas
            específicas no fim (avaliação, orientação parental, adolescentes).
          </li>
          <li>
            <strong>Home:</strong> no máximo três perguntas e um link para a
            página completa.
          </li>
          <li>
            <strong>Landing pages:</strong> as dúvidas daquele atendimento, antes
            do botão de contato.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: no site fictício de uma neuropsicóloga, a página
          de avaliação termina com “Quanto tempo leva a avaliação?”, “A escola
          recebe o laudo?” e “Preciso de pedido médico?”, enquanto a página de
          dúvidas reúne essas e as gerais.
        </p>
        <p>
          O erro comum é esconder as perguntas num pop-up ou num arquivo PDF.
          Quem procura não acha, e o Google não lê bem. Os guias de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços
          </Link>{" "}
          e de{" "}
          <Link href="/blog/landing-page-psicologo" className="inst-link">
            landing page para psicólogo
          </Link>{" "}
          mostram onde as perguntas entram em cada página.
        </p>
      </section>

      <section>
        <h2>7. Formato e acessibilidade: fácil de ler e de usar</h2>
        <p>
          Uma página de perguntas é lida aos pedaços: a pessoa procura a dela e
          lê só aquela. O formato precisa ajudar nisso, inclusive para quem usa
          leitor de tela ou navega pelo teclado.
        </p>
        <ol>
          <li>
            <strong>Pergunta como título:</strong> cada pergunta é um título (por
            exemplo, um h3), e a resposta vem logo abaixo.
          </li>
          <li>
            <strong>Resposta primeiro:</strong> a primeira frase responde; o
            detalhe vem depois.
          </li>
          <li>
            <strong>Sanfona, se usar, acessível:</strong> o elemento HTML de
            detalhes (details e summary) abre com teclado e funciona sem
            JavaScript.
          </li>
          <li>
            <strong>Tamanho:</strong> respostas de duas a cinco frases. Se
            precisa de mais, vire uma página ou post e faça o link.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma página fictícia trocou um acordeão que só
          abria com o mouse por perguntas em títulos com a resposta visível. A
          página ficou mais longa, e mais fácil de ler no celular e com leitor de
          tela.
        </p>
        <p>
          O erro comum é resposta em bloco único de dez linhas. O guia de{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          cobre títulos, contraste e navegação por teclado.
        </p>
      </section>

      <section>
        <h2>8. O que esperar do Google</h2>
        <p>
          A página ajuda o Google a entender o seu atendimento, mas não espere o
          destaque com perguntas abertas no resultado. Desde agosto de 2023, o
          Google{" "}
          <a href={FAQ_CHANGE} {...ext}>
            mostra esse formato só para sites governamentais e de saúde
          </a>{" "}
          muito conhecidos e com autoridade.
        </p>
        <ul>
          <li>
            <strong>Dados estruturados:</strong> a marcação{" "}
            <a href={FAQ_DOC} {...ext}>
              FAQPage
            </a>{" "}
            pode ser usada, sem expectativa de destaque. Ela só vale se as
            perguntas e respostas estiverem visíveis na página.
          </li>
          <li>
            <strong>Conteúdo útil:</strong> o Google pede{" "}
            <a href={HELPFUL} {...ext}>
              conteúdo feito para pessoas
            </a>
            . Perguntas reais, respondidas com cuidado, cumprem isso.
          </li>
          <li>
            <strong>Palavras do público:</strong> “psicóloga infantil atende
            online?” é como a pessoa busca; use essas palavras.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia escreve a resposta “Atendo
          crianças a partir de 4 anos, presencialmente em Campinas”. A frase
          responde à família e, ao mesmo tempo, diz ao Google quem, onde e para
          quem.
        </p>
        <p>
          O erro comum é encher a página de perguntas forçadas só para repetir
          palavras-chave. O guia de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          explica o que de fato ajuda.
        </p>
      </section>

      <section>
        <h2>Perguntas frequentes no site: pode e evitar</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar nas perguntas frequentes do site do psicólogo"
            tabIndex={0}
          >
            <caption>Perguntas frequentes no site do psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Pergunta</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Valor</td>
                <td>“Informado na conversa inicial, antes de começar”</td>
                <td>Preço em destaque, desconto, “primeira sessão grátis”</td>
              </tr>
              <tr>
                <td>Duração</td>
                <td>Do que depende e que é revista junto</td>
                <td>“Em 10 sessões você resolve”</td>
              </tr>
              <tr>
                <td>Sigilo</td>
                <td>Dever da psicóloga, com exceções previstas no Código</td>
                <td>“Sigilo absoluto”</td>
              </tr>
              <tr>
                <td>Abordagem</td>
                <td>Uma frase simples e link para a página sobre</td>
                <td>Técnica não reconhecida pela profissão</td>
              </tr>
              <tr>
                <td>Resultados</td>
                <td>Como o trabalho acontece</td>
                <td>Depoimento de paciente ou “casos de sucesso”</td>
              </tr>
              <tr>
                <td>Crianças</td>
                <td>Como os pais participam e o que é compartilhado</td>
                <td>Detalhes de casos, mesmo sem nome</td>
              </tr>
              <tr>
                <td>Online</td>
                <td>Plataforma e menção à Resolução CFP nº 9/2024</td>
                <td>Citar a Resolução 11/2018 ou o e-Psi como vigentes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem a página: revise a cada seis meses</h2>
        <p>
          Página de dúvidas envelhece rápido: muda o horário, a plataforma, a
          política de remarcação, entra um atendimento novo. Marque na agenda uma
          revisão a cada seis meses e confira cada resposta com o que você faz
          hoje.
        </p>
        <p>
          Use também o WhatsApp como termômetro. Se uma pergunta que já está no
          FAQ continua chegando, a resposta está escondida ou confusa: mude o
          lugar ou a frase. Se aparece uma pergunta nova várias vezes, ela entra
          na página. E se alguma resposta ficou longa demais, ela pode virar um
          post do blog, com link a partir do FAQ, como o{" "}
          <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
            manual de boas-vindas
          </Link>{" "}
          faz com os combinados do consultório.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas e neurodivergentes chegam com perguntas
          específicas e, muitas vezes, depois de experiências ruins. Um FAQ que
          responde a elas com clareza mostra, antes de qualquer conversa, que
          você conhece a rotina dessas famílias.
        </p>
        <ul>
          <li>
            <strong>“A criança precisa ir no primeiro encontro?”</strong> Diga
            como é: só os pais, a criança junto ou depende.
          </li>
          <li>
            <strong>“Você conversa com a escola e com outros
            profissionais?”</strong> Explique como e com autorização da família.
          </li>
          <li>
            <strong>“O que os pais ficam sabendo?”</strong> O art. 13 do Código:
            o estritamente essencial para medidas em benefício da criança, e como
            você combina isso com ela e com a família.
          </li>
          <li>
            <strong>“Atende criança sem diagnóstico fechado?”</strong> Seja
            claro sobre o que você faz e o que não faz.
          </li>
          <li>
            <strong>“O consultório é adaptado?”</strong> Luz, ruído, sala de
            espera, previsibilidade.
          </li>
        </ul>
        <p>
          Use{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          em todas as respostas e, se o consultório tem adaptações, o post sobre{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>{" "}
          ajuda a descrevê-las.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Inventar perguntas em vez de usar as que chegam.</li>
          <li>Pular a pergunta sobre valor ou pôr o preço em destaque.</li>
          <li>Prometer duração ou resultado.</li>
          <li>Escrever “sigilo absoluto”.</li>
          <li>Respostas longas, em bloco único.</li>
          <li>Esconder a página ou usar acordeão que não abre pelo teclado.</li>
          <li>Citar a Resolução 11/2018 como vigente.</li>
          <li>Deixar a página meses sem revisar.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da página de perguntas frequentes</h2>
        <ul>
          <li>Perguntas tiradas do WhatsApp e da busca, com as palavras do público.</li>
          <li>Agrupadas por tema, as mais comuns no topo.</li>
          <li>Cada resposta abre com a resposta, em duas a cinco frases.</li>
          <li>Valor informado de forma reservada, sem destaque.</li>
          <li>Nada de promessa de resultado ou prazo fechado.</li>
          <li>Sigilo explicado com as exceções do Código.</li>
          <li>Perguntas específicas em cada página de serviço.</li>
          <li>Pergunta como título e acessível pelo teclado.</li>
          <li>Nome completo e CRP visíveis no site.</li>
          <li>Revisão marcada a cada seis meses.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, a identidade visual e o site, com as páginas de
          serviço e as perguntas frequentes escritas a partir das dúvidas reais
          do seu público, revisadas pelo art. 20. Tudo é apresentado em até 30
          dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu WhatsApp responde todo dia as mesmas perguntas, marque uma
          conversa de 15 minutos.
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
            , arts. 4º, 8º, 9º, 10, 13 e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026 (referência a valores).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            — exercício profissional mediado por tecnologias digitais.
          </li>
          <li>
            Google Search Central.{" "}
            <a href={FAQ_CHANGE} {...ext}>
              Changes to HowTo and FAQ rich results
            </a>
            , agosto de 2023.
          </li>
          <li>
            Google Search Central.{" "}
            <a href={FAQ_DOC} {...ext}>
              Dados estruturados de perguntas frequentes (FAQPage)
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={HELPFUL} {...ext}>
              Como criar conteúdo útil, confiável e que priorize as pessoas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
