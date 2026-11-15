import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const ADS_LP = "https://support.google.com/google-ads/answer/2404197?hl=pt-BR";
const VITALS = "https://web.dev/articles/vitals";

export const post: Post = {
  slug: "landing-page-psicologo",
  title: "Landing page para psicólogo: quando usar, o que colocar e o que o art. 20 não permite",
  description:
    "Landing page para psicólogo: quando usar no lugar do site, estrutura em 8 blocos, formulário com LGPD, Google Ads e os limites do Código de Ética.",
  keyword: "landing page para psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-15",
  summary:
    "Landing page é uma página única, feita para um objetivo só: apresentar um atendimento específico e levar a pessoa a entrar em contato. Para psicólogos, ela funciona bem em anúncios, palestras e serviços com público definido, como avaliação ou orientação parental. Precisa trazer nome completo e CRP e não pode usar preço, promessa de resultado nem depoimento de paciente como argumento (art. 20 do Código de Ética).",
  faq: [
    {
      q: "Qual a diferença entre landing page e site para psicólogo?",
      a: "O site apresenta você e todos os seus atendimentos, com várias páginas e caminhos. A landing page tem um objetivo só: um atendimento, um público e uma ação, em geral chamar no WhatsApp ou agendar. Muitas vezes ela é uma página dentro do próprio site, sem menu, usada como destino de anúncio ou de QR code."
    },
    {
      q: "Psicólogo pode ter landing page?",
      a: "Pode. A cartilha de publicidade do CRP-MG (2026) diz que o Conselho não restringe os meios de divulgação e cita sites entre eles. O conteúdo segue o art. 20 do Código de Ética: nome completo e CRP, só técnicas reconhecidas, sem preço como propaganda, sem previsão taxativa de resultado e sem sensacionalismo."
    },
    {
      q: "Posso colocar depoimentos de pacientes na landing page?",
      a: "Não é recomendado. A cartilha do CRP-MG veda expor depoimentos ou qualquer material decorrente do atendimento que possa identificar a pessoa, e pede reflexão ética mesmo quando há autorização. Use no lugar a explicação de como o atendimento funciona, a sua formação e as perguntas frequentes das famílias."
    },
    {
      q: "Preciso de landing page para anunciar no Google Ads?",
      a: "Não é obrigatório, mas ajuda. O Google avalia a experiência na página de destino: se ela é relevante para o anúncio, clara e fácil de usar no celular. Mandar o clique para a home genérica ou para o Instagram costuma desperdiçar o anúncio, porque a pessoa não acha o que procurou."
    }
  ],
  cover: {
    src: "/blog/landing-page-psicologo/landing-page-psicologo-notebook-mesa.jpg",
    alt: "Notebook com tela em branco sobre mesa de madeira, ao lado de flores roxas e um porta-lápis",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você investiu num anúncio, numa palestra ou num panfleto com QR code, e
        as pessoas chegam ao seu site sem achar o que procuravam. Clicam na home,
        veem cinco atendimentos, um menu cheio e desistem. Ou o link leva ao
        Instagram, onde o post fixado fala de outra coisa. Quase sempre, o que
        falha é a página onde o anúncio termina.
      </p>
      <p>
        A landing page resolve isso. É uma página só, feita para um atendimento
        e um público, com uma ação clara no fim. Para psicólogos, ela tem regras
        a mais: o art. 20 do Código de Ética vale para cada linha, e a página não
        pode virar vitrine de promessa. A seguir estão quando ela faz sentido, o
        que dizem as normas, oito blocos que compõem uma boa página, uma tabela
        de pode e evitar, a parte para quem atende famílias de crianças
        neurodivergentes e um checklist.
      </p>

      <section>
        <h2>Landing page ou site: quando cada um faz sentido</h2>
        <p>
          A landing page é para um objetivo; o site é para a sua presença
          inteira. Se alguém pesquisa o seu nome, quer conhecer você e todos os
          atendimentos: isso é o{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site profissional para psicólogo
          </Link>
          . Se alguém clicou num anúncio de “orientação parental para pais de
          crianças autistas”, quer ver aquilo e decidir.
        </p>
        <p>A landing page costuma valer a pena quando:</p>
        <ul>
          <li>
            <strong>Há anúncio pago</strong> no Google ou no Instagram para um
            atendimento específico.
          </li>
          <li>
            <strong>Há um evento</strong>, como palestra, grupo ou roda de
            conversa, com inscrição ou contato.
          </li>
          <li>
            <strong>Há um serviço com público bem definido</strong>, como
            avaliação neuropsicológica, orientação parental ou atendimento de
            adolescentes.
          </li>
          <li>
            <strong>Há material impresso com QR code</strong> que precisa levar a
            uma página certa, e não à home.
          </li>
        </ul>
        <p>
          Ela não substitui o site quando você ainda não tem nenhuma presença. A
          família que chega pela landing page quase sempre procura o seu nome
          depois, para confirmar quem você é. Se não achar nada, a confiança cai.
          O melhor arranjo, na maioria dos casos, é a landing page morar dentro do
          site (seunome.com.br/orientacao-parental), sem o menu completo, mas com
          um link discreto para a página “sobre”.
        </p>
      </section>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          afirma que o Conselho “não restringe os locais e meios de publicidade”
          e cita sites e redes sociais entre eles. Uma landing page é publicidade
          profissional, então segue o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          :
        </p>
        <ul>
          <li>informar nome completo e número do CRP (alínea a);</li>
          <li>citar só títulos e qualificações que você tem (alínea b);</li>
          <li>divulgar só técnicas reconhecidas pela profissão (alínea c);</li>
          <li>não usar o preço do serviço como forma de propaganda (alínea d);</li>
          <li>não fazer previsão taxativa de resultados (alínea e);</li>
          <li>não se promover em detrimento de outros profissionais (alínea f);</li>
          <li>não fazer divulgação sensacionalista (alínea h).</li>
        </ul>
        <p>
          A cartilha também veda expor depoimentos e qualquer material decorrente
          do atendimento que possa identificar quem foi atendido. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          reforça esses cuidados para a publicidade nas redes e na internet.
          Como a página costuma ter formulário, entra também a{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados
          </a>
          : pedir só o necessário e dizer para que serve.
        </p>
      </section>

      <section>
        <h2>1. Defina um atendimento, um público e uma ação</h2>
        <p>
          Uma landing page boa responde a uma pergunta só. Antes de abrir
          qualquer ferramenta, escreva três linhas: que atendimento é, para quem
          é e o que a pessoa deve fazer no fim da página.
        </p>
        <ol>
          <li>
            <strong>Atendimento:</strong> o nome como o público o chamaria
            (“avaliação neuropsicológica infantil”, e não “psicodiagnóstico
            interventivo”).
          </li>
          <li>
            <strong>Público:</strong> quem decide. Em atendimento infantil, quase
            sempre são os pais ou responsáveis.
          </li>
          <li>
            <strong>Ação:</strong> uma só. Chamar no WhatsApp, agendar uma
            conversa inicial ou se inscrever no evento.
          </li>
        </ol>
        <p>
          O erro comum é tentar aproveitar a página para tudo: três serviços,
          dois botões diferentes, link para o Instagram e para o blog. Cada saída
          a mais é uma chance de a pessoa se distrair. Se você ainda não sabe qual
          atendimento puxar, o guia de{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher um nicho na psicologia
          </Link>{" "}
          ajuda a decidir.
        </p>
      </section>

      <section>
        <h2>2. Abra com a situação de quem chega, em uma frase</h2>
        <p>
          O título da página diz para quem ela é e o que você oferece, com
          palavras que o público usa. Quem chegou por um anúncio precisa
          reconhecer, em três segundos, que está no lugar certo.
        </p>
        <ul>
          <li>
            <strong>Título:</strong> atendimento + público. “Orientação para
            pais de crianças autistas, presencial em Campinas e online”.
          </li>
          <li>
            <strong>Subtítulo:</strong> uma frase sobre como funciona, sem
            promessa. “Encontros com os responsáveis para entender a rotina da
            família e combinar estratégias para o dia a dia.”
          </li>
          <li>
            <strong>Botão:</strong> a ação, com verbo. “Conversar pelo WhatsApp”.
          </li>
          <li>
            <strong>Identificação:</strong> nome completo, “psicóloga” e CRP já
            no primeiro bloco ou logo abaixo.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo de título que funciona: “Avaliação
          neuropsicológica para crianças de 6 a 12 anos”. Exemplo que não cabe:
          “Descubra de vez o que seu filho tem e transforme a vida da sua
          família”. O segundo promete resultado e explora a angústia dos pais,
          o que esbarra nas alíneas e e h do art. 20.
        </p>
        <p>
          O erro comum é abrir com a sua biografia (“Sou psicóloga há dez
          anos…”). A formação importa, mas entra depois, quando a pessoa já sabe
          que a página fala com ela. Para afinar o jeito de falar, veja o guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Explique para quem é e como funciona</h2>
        <p>
          Depois do título, a página responde às duas dúvidas que mais seguram o
          contato: “isso é para mim?” e “como vai ser?”. Quando as duas têm
          resposta clara, a pessoa se sente segura para chamar.
        </p>
        <ol>
          <li>
            <strong>Para quem é:</strong> três ou quatro situações descritas sem
            alarme. “Famílias que receberam o diagnóstico há pouco e querem
            entender os próximos passos.”
          </li>
          <li>
            <strong>Para quem não é:</strong> uma linha honesta ajuda a filtrar.
            “Este atendimento não substitui a terapia da criança.”
          </li>
          <li>
            <strong>Como funciona:</strong> número aproximado de encontros,
            duração, formato (presencial ou online), quem participa e o que
            acontece no primeiro contato.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: “Primeiro, uma conversa de 20 minutos por
          telefone para entender o que vocês procuram. Se fizer sentido, marcamos
          o primeiro encontro, só com os responsáveis. Os encontros duram 50
          minutos e acontecem a cada 15 dias.” São dados de formato, sem falar
          em resultado, e é isso que tranquiliza.
        </p>
        <p>
          O erro comum é listar sintomas para gerar identificação (“seu filho
          grita, não dorme, não come?”). Isso soa sensacionalista e pode assustar
          quem já chega fragilizado. O post sobre{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços do psicólogo
          </Link>{" "}
          traz um modelo de descrição que também serve aqui.
        </p>
      </section>

      <section>
        <h2>4. Mostre quem você é sem virar currículo</h2>
        <p>
          A pessoa precisa saber quem vai atendê-la. Um bloco com foto
          profissional, nome completo, CRP e três ou quatro linhas sobre a sua
          formação e o seu jeito de trabalhar resolve.
        </p>
        <ul>
          <li>
            <strong>Foto:</strong> você, em boa luz, com expressão acolhedora.
            Nada de foto de sessão ou de paciente.
          </li>
          <li>
            <strong>Formação:</strong> só títulos que você tem, com o nome
            correto. Especialista é título registrado no CFP; curso livre é
            formação complementar.
          </li>
          <li>
            <strong>Abordagem:</strong> uma frase em linguagem simples, sem
            jargão.
          </li>
          <li>
            <strong>Link:</strong> “Conheça meu trabalho” levando à página sobre
            do site, para quem quer saber mais.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: “Ana Souza, psicóloga, CRP 06/000000. Trabalho
          com terapia cognitivo-comportamental e atendo crianças e famílias há
          oito anos. Fiz especialização em neuropsicologia e acompanho, junto com
          os pais, o que acontece em casa e na escola.” O número de CRP aqui é
          fictício.
        </p>
        <p>
          O erro comum é dizer “especialista” sem o título ou usar
          “referência em” e “a melhor” sem prova. O guia sobre{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            quando o psicólogo pode se dizer especialista
          </Link>{" "}
          explica a diferença. Para a foto, veja{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Responda às dúvidas antes do botão</h2>
        <p>
          Um bloco de perguntas frequentes perto do fim tira as últimas dúvidas
          sem a pessoa precisar perguntar. São quatro a seis perguntas reais, com
          respostas curtas.
        </p>
        <ul>
          <li>Atende online ou só presencial?</li>
          <li>Atende convênio ou emite recibo para reembolso?</li>
          <li>Os pais participam? A criança precisa ir no primeiro encontro?</li>
          <li>Quanto tempo dura, em média, o acompanhamento?</li>
          <li>Como funciona o sigilo?</li>
        </ul>
        <p>
          E o valor? A cartilha do CRP-MG explica que a restrição a “usar o preço
          como propaganda” significa que a publicidade não pode ter o foco ou o
          destaque no valor, e orienta que valores e condições sejam informados
          diretamente à pessoa, de forma reservada. Uma resposta que funciona:
          “O valor e as formas de pagamento são informados na conversa inicial,
          junto com a proposta de trabalho.” A exceção que a cartilha cita é o
          serviço vendido só online, numa plataforma, quando o Código de Defesa
          do Consumidor pede que o valor apareça, ainda sem destaque. O post{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>{" "}
          detalha.
        </p>
        <p>
          O erro comum é deixar as dúvidas para o WhatsApp. Cada pergunta sem
          resposta na página é um contato a menos, porque muita gente desiste em
          vez de perguntar.
        </p>
      </section>

      <section>
        <h2>6. Faça o contato ser fácil e seguro</h2>
        <p>
          O botão de contato aparece no topo, no meio e no fim, sempre com a
          mesma ação. Se houver formulário, ele pede o mínimo.
        </p>
        <ol>
          <li>
            <strong>WhatsApp:</strong> link com mensagem pronta e neutra (“Olá,
            vim pela página de orientação parental”), sem pedir que a pessoa
            conte o caso por escrito.
          </li>
          <li>
            <strong>Formulário:</strong> nome, telefone e melhor horário. Nada de
            diagnóstico, idade da criança ou “descreva o problema”.
          </li>
          <li>
            <strong>Aviso de privacidade:</strong> uma linha dizendo para que os
            dados servem e link para a política de privacidade.
          </li>
          <li>
            <strong>Resposta:</strong> diga em quanto tempo você retorna e
            cumpra.
          </li>
        </ol>
        <p>
          Por que tão pouco? Pela LGPD, dado de saúde é dado pessoal sensível, e
          a lei pede finalidade clara e necessidade. Um formulário que pergunta
          sobre o caso recolhe dado sensível antes de qualquer vínculo, e muitas
          vezes de uma criança. A conversa sobre o caso acontece depois, num
          canal adequado.
        </p>
        <p>
          O erro comum é pôr um formulário longo “para qualificar o contato”. Ele
          filtra, sim, mas filtra justamente a família cansada que só queria
          perguntar se você atende. Para organizar o primeiro contato, veja o
          guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/agendamento-online-psicologo" className="inst-link">
            agendamento online
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>7. Cuide do design, da velocidade e do celular</h2>
        <p>
          A maioria das pessoas que clica num anúncio está no celular. A página
          precisa abrir rápido, ser legível com uma mão só e seguir a sua
          identidade visual, para que a família reconheça você depois no site e
          no Instagram.
        </p>
        <ul>
          <li>
            <strong>Identidade:</strong> mesmas cores, fontes e logo do restante
            da sua marca.
          </li>
          <li>
            <strong>Leitura:</strong> fonte grande, frases curtas, contraste
            suficiente e um assunto por bloco.
          </li>
          <li>
            <strong>Velocidade:</strong> imagens leves e poucas animações. O
            Google descreve, nas{" "}
            <a href={VITALS} {...ext}>
              Core Web Vitals
            </a>
            , as métricas de carregamento, resposta e estabilidade da página.
          </li>
          <li>
            <strong>Imagens:</strong> o seu espaço, objetos, a sua foto. Nada de
            criança, sessão ou divã.
          </li>
        </ul>
        <p>
          O erro comum é usar um modelo pronto de “terapeuta” com cores e fotos
          que não têm nada a ver com o seu consultório. A pessoa sai da página,
          abre o seu Instagram e acha que são duas profissionais diferentes. O
          guia de{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          mostra como manter tudo coerente, e o de{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível
          </Link>{" "}
          cobre contraste e leitura.
        </p>
      </section>

      <section>
        <h2>8. Ligue a página ao anúncio e meça o que importa</h2>
        <p>
          Quando a landing page é destino de anúncio, o texto do anúncio e o da
          página precisam dizer a mesma coisa. O Google Ads considera a{" "}
          <a href={ADS_LP} {...ext}>
            experiência na página de destino
          </a>{" "}
          ao avaliar o anúncio: se a página é relevante para o que foi buscado,
          clara e fácil de navegar.
        </p>
        <ol>
          <li>
            <strong>Coerência:</strong> anúncio de “orientação parental” leva à
            página de orientação parental, com o mesmo termo no título.
          </li>
          <li>
            <strong>Origem:</strong> marque os links (por exemplo, com parâmetros
            UTM) para saber se o contato veio do anúncio, do QR code ou do
            Instagram.
          </li>
          <li>
            <strong>Ajuste:</strong> mude uma coisa por vez (título, botão,
            ordem dos blocos) e compare.
          </li>
        </ol>
        <p>
          O anúncio também segue o art. 20 e as políticas do Google para saúde.
          O guia de{" "}
          <Link href="/blog/google-ads-para-psicologos" className="inst-link">
            Google Ads para psicólogos
          </Link>{" "}
          trata disso, e o de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          explica como a mesma página pode ser achada sem anúncio.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na landing page do psicólogo</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na landing page do psicólogo"
            tabIndex={0}
          >
            <caption>Landing page para psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Elemento</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título</td>
                <td>Atendimento e público, com palavras do paciente</td>
                <td>Promessa (“transforme”, “resolva de vez”)</td>
              </tr>
              <tr>
                <td>Identificação</td>
                <td>Nome completo, psicóloga e CRP visíveis</td>
                <td>Só nome fantasia ou apelido</td>
              </tr>
              <tr>
                <td>Formação</td>
                <td>Títulos que você tem, com o nome correto</td>
                <td>“Especialista” sem título, “referência”, “a melhor”</td>
              </tr>
              <tr>
                <td>Prova</td>
                <td>Como o atendimento funciona e perguntas frequentes</td>
                <td>Depoimento de paciente, antes e depois, prints de conversa</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>“Informado na conversa inicial”</td>
                <td>Preço em destaque, desconto, “primeira sessão grátis”</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Sua foto, o espaço, objetos, arte da marca</td>
                <td>Criança atendida, sessão, divã, material de teste</td>
              </tr>
              <tr>
                <td>Formulário</td>
                <td>Nome, telefone, horário e aviso de privacidade</td>
                <td>Campos sobre o caso, diagnóstico ou idade da criança</td>
              </tr>
              <tr>
                <td>Urgência</td>
                <td>Datas reais de um evento</td>
                <td>Contador falso, “últimas vagas” sem ser verdade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem landing page: uma página sólida por público</h2>
        <p>
          Quem já usa landing page tende a criar uma nova a cada campanha. Com o
          tempo, ficam dez páginas parecidas, desatualizadas, algumas ainda
          indexadas no Google. Um arranjo mais sustentável é ter uma página
          sólida por atendimento ou público (orientação parental, avaliação,
          adolescentes) e variar só o anúncio que leva a ela.
        </p>
        <p>
          Revise cada uma a cada seis meses: horário, formato, CRP, links e
          respostas das perguntas frequentes. Página esquecida com informação
          antiga custa mais confiança do que página nenhuma.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas e neurodivergentes costumam chegar a uma
          landing page depois de muita pesquisa, às vezes de madrugada, às vezes
          logo depois de uma consulta difícil. Eles leem com atenção e
          desconfiam de promessa. A página precisa ser clara, previsível e
          respeitosa.
        </p>
        <ul>
          <li>
            <strong>Linguagem neuroafirmativa:</strong> “criança autista” ou
            “criança no espectro”, sem “portador”, “sofre de” ou cura. O guia de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            traz exemplos.
          </li>
          <li>
            <strong>Diga o papel da família:</strong> se os pais participam, com
            que frequência e como você conversa com escola e outros
            profissionais.
          </li>
          <li>
            <strong>Diga o que você não faz:</strong> se não fecha diagnóstico,
            se não atende pelo plano, se não faz acompanhamento escolar. Isso
            evita frustração dos dois lados.
          </li>
          <li>
            <strong>Sem quebra-cabeça e sem infantilização:</strong> parte da
            comunidade autista rejeita o símbolo, e muitos pais também são
            neurodivergentes e preferem página limpa, sem excesso de cor e
            animação.
          </li>
          <li>
            <strong>Previsibilidade:</strong> conte, passo a passo, o que
            acontece depois do clique. Saber o próximo passo diminui a ansiedade
            de quem vai chamar.
          </li>
        </ul>
        <p>
          Se a página é de avaliação, o post sobre{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>{" "}
          mostra o que os pais precisam encontrar; se é de orientação, veja{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            como divulgar orientação parental
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Mandar o anúncio para a home ou para o Instagram.</li>
          <li>Vários atendimentos e vários botões na mesma página.</li>
          <li>Esquecer o CRP ou deixá-lo escondido no rodapé.</li>
          <li>Título com promessa de resultado ou que explora o medo dos pais.</li>
          <li>Depoimento de paciente, mesmo com autorização.</li>
          <li>Preço, desconto ou sessão grátis como chamariz.</li>
          <li>Formulário pedindo detalhes do caso.</li>
          <li>Modelo pronto que não parece com a sua marca.</li>
          <li>Página pesada, que demora a abrir no celular.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da landing page</h2>
        <ul>
          <li>Um atendimento, um público e uma ação, escritos antes de começar.</li>
          <li>Título com atendimento e público, sem promessa.</li>
          <li>Nome completo, “psicóloga” e CRP no primeiro bloco.</li>
          <li>Blocos de “para quem é” e “como funciona”.</li>
          <li>Bloco “quem sou” com foto e títulos verdadeiros.</li>
          <li>Quatro a seis perguntas frequentes, incluindo valor e sigilo.</li>
          <li>Botão com a mesma ação no topo, no meio e no fim.</li>
          <li>Formulário mínimo, com aviso e política de privacidade.</li>
          <li>Identidade visual igual à do site e das redes.</li>
          <li>Abre rápido e é legível no celular.</li>
          <li>Texto do anúncio e da página dizem a mesma coisa.</li>
          <li>Links com origem marcada e contagem de contatos.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, a identidade visual e o site, com as páginas de cada
          atendimento prontas para receber anúncio ou QR code, revisadas pelo
          art. 20. Tudo é apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se os seus anúncios terminam numa página que não conversa com quem
          chega, marque uma conversa de 15 minutos.
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
            , art. 20 (alíneas a, b, c, d, e, f, h).
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026 (formas e locais de divulgação, referência
            a valores, sigilo).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais: publicidade e cuidados éticos.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={ADS_LP} {...ext}>
              Sobre a experiência na página de destino
            </a>{" "}
            (Ajuda do Google Ads).
          </li>
          <li>
            Google.{" "}
            <a href={VITALS} {...ext}>
              Web Vitals
            </a>{" "}
            (web.dev).
          </li>
        </ul>
      </section>
    </>
  )
};
