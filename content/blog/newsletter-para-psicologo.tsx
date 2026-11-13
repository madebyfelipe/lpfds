import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const ANPD = "https://www.gov.br/anpd/pt-br";
const GMAIL = "https://support.google.com/a/answer/81126?hl=pt-BR";

export const post: Post = {
  slug: "newsletter-para-psicologo",
  title: "Newsletter para psicólogo: como montar, o que enviar e o que a LGPD exige",
  description:
    "Como criar uma newsletter para psicólogo: lista com consentimento, pauta, frequência, ferramenta e os limites do art. 20 e da LGPD em cada envio.",
  keyword: "newsletter para psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "Uma newsletter é uma carta periódica por e-mail para quem pediu para recebê-la. Para a psicóloga, ela funciona como canal próprio de conteúdo: não depende do algoritmo e chega a quem já demonstrou interesse. Monte a lista só com consentimento (LGPD), nunca use contatos de pacientes sem pedido expresso, mantenha o conteúdo educativo e aplique a cada envio as mesmas regras do art. 20 que valem para o Instagram.",
  faq: [
    {
      q: "Psicólogo pode ter newsletter?",
      a: "Pode. Nenhuma norma do CFP proíbe e-mail como canal. A newsletter é publicidade profissional quando apresenta seus serviços, então segue o art. 20 do Código de Ética e a Nota Técnica CFP nº 1/2022: nome completo ou nome social, CRP, nada de preço como chamariz, promessa ou depoimento."
    },
    {
      q: "Posso colocar os e-mails dos meus pacientes na newsletter?",
      a: "Não sem um pedido claro de cada pessoa. O e-mail foi coletado para o atendimento, e a LGPD exige uma finalidade informada para cada uso. Além disso, uma lista com só pacientes revela quem faz terapia com você. O caminho seguro é deixar o convite aberto no site e cada um se inscrever se quiser."
    },
    {
      q: "Com que frequência enviar uma newsletter de psicologia?",
      a: "Na frequência que você consegue manter sem cair a qualidade. Para quem atende em tempo integral, uma vez por mês ou a cada quinze dias costuma ser sustentável. O mais importante é cumprir o que você prometeu no formulário de inscrição."
    },
    {
      q: "Qual ferramenta usar para enviar a newsletter?",
      a: "Use uma ferramenta de e-mail marketing que tenha confirmação de inscrição, link de descadastro em todo envio e registro de quando cada pessoa se inscreveu. Evite enviar pelo e-mail pessoal com todos os endereços em cópia: além de parecer spam, isso expõe a lista inteira."
    },
    {
      q: "Newsletter ainda funciona ou Instagram é melhor?",
      a: "São canais diferentes. O Instagram ajuda a ser encontrada; a newsletter aprofunda a relação com quem já conhece seu trabalho. A lista é sua, enquanto o alcance nas redes depende da plataforma. Muitos consultórios usam os dois, com o e-mail para textos mais longos."
    }
  ],
  cover: {
    src: "/blog/newsletter-para-psicologo/newsletter-para-psicologo-notebook-e-envelope.jpg",
    alt: "Notebook aberto ao lado de um envelope com caneta e uma xícara de café sobre mesa escura, cena de escrita de newsletter",
    caption: "Foto: onlyyouqj / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você posta toda semana, o alcance oscila e boa parte dos seguidores
        nunca vê o conteúdo. Ao mesmo tempo, pais que leram um texto seu no
        site somem depois da primeira visita. A newsletter resolve um pedaço
        disso: é uma carta por e-mail, enviada com regularidade, para quem
        pediu para receber. Ela chega na caixa de entrada sem depender de
        algoritmo e dá espaço para textos mais longos do que um carrossel.
      </p>
      <p>
        Para a psicóloga, o canal tem duas camadas de cuidado. A primeira é a
        Lei Geral de Proteção de Dados: e-mail é dado pessoal, e a lista só
        pode ter quem consentiu. A segunda é o Código de Ética: a newsletter
        que apresenta seu trabalho é publicidade profissional e segue o art.
        20. Abaixo está o passo a passo para montar a sua, do formulário ao
        primeiro envio, com o que pode e o que evitar em cada etapa.
      </p>

      <section>
        <h2>O que dizem as normas sobre newsletter</h2>
        <p>
          Não existe resolução do CFP só sobre e-mail. Valem as regras gerais
          de publicidade. O{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>{" "}
          pede que, ao promover seus serviços “por quaisquer meios”, a
          psicóloga informe nome completo, CRP e número de registro, não use o
          preço como propaganda, não faça previsão taxativa de resultados e
          não se promova em detrimento de colegas. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica essas regras ao ambiente digital e lembra que a divulgação
          deve respeitar a LGPD.
        </p>
        <p>
          A{" "}
          <a href={LGPD} {...ext}>
            Lei nº 13.709/2018 (LGPD)
          </a>{" "}
          exige uma base legal para tratar dados pessoais. Para newsletter, a
          base usual é o consentimento: livre, informado e para uma finalidade
          determinada. A pessoa também tem o direito de revogar esse
          consentimento a qualquer momento, o que na prática é o link de
          descadastro. A{" "}
          <a href={ANPD} {...ext}>
            Autoridade Nacional de Proteção de Dados (ANPD)
          </a>{" "}
          publica guias sobre o tema.
        </p>
      </section>

      <section>
        <h2>1. Defina para quem é a newsletter</h2>
        <p>
          Antes de escolher ferramenta, decida quem vai ler. Uma newsletter
          que tenta falar com pais, adultos em terapia e colegas ao mesmo
          tempo acaba genérica e ninguém abre.
        </p>
        <ol>
          <li>
            <strong>Escolha um leitor principal.</strong> Pais de crianças
            neurodivergentes, adultos que buscam psicoterapia ou psicólogas
            que fazem supervisão com você são públicos diferentes, com
            perguntas diferentes.
          </li>
          <li>
            <strong>Escreva a promessa do formulário em uma frase.</strong> O
            que a pessoa recebe e com que frequência. Essa frase vira o texto
            do convite e define o que você pode enviar.
          </li>
          <li>
            <strong>Confira se o tema conversa com o seu posicionamento.</strong>{" "}
            Se você já definiu um{" "}
            <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
              nicho na psicologia
            </Link>
            , a newsletter é o lugar de aprofundar esse recorte.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Uma carta por mês para pais de
          crianças autistas, com um tema do dia a dia (sono, escola, rotina)
          explicado com base em evidências. Sem propaganda a cada linha.”
        </p>
        <p>
          <strong>Erro comum:</strong> prometer “dicas de saúde mental” para
          qualquer pessoa. A promessa vaga atrai inscrições que não abrem e
          não ajuda ninguém a lembrar de você.
        </p>
      </section>

      <section>
        <h2>2. Monte a lista só com consentimento</h2>
        <p>
          A lista da newsletter começa vazia e cresce por inscrição
          voluntária. Esse é o ponto em que mais consultórios erram, porque a
          tentação é importar a agenda inteira.
        </p>
        <ul>
          <li>
            <strong>Formulário com finalidade clara.</strong> Diga o que a
            pessoa vai receber, com que frequência e que ela pode sair quando
            quiser. Peça só o e-mail e, se precisar, o primeiro nome.
          </li>
          <li>
            <strong>Confirmação em duas etapas.</strong> A ferramenta envia um
            e-mail pedindo para confirmar a inscrição. Isso evita endereços
            digitados errado e registra o consentimento.
          </li>
          <li>
            <strong>Registro de quando e onde a pessoa entrou.</strong> As
            ferramentas de e-mail marketing guardam isso. É a sua prova de
            consentimento se alguém perguntar.
          </li>
          <li>
            <strong>Política de privacidade no site</strong> explicando o uso
            dos e-mails, quem tem acesso e por quanto tempo ficam guardados.
          </li>
        </ul>
        <p>
          <strong>Pacientes e familiares:</strong> o e-mail que você recebeu
          para marcar sessões foi coletado para o atendimento. Usar esse dado
          para outra finalidade sem pedido expresso fere a lógica da LGPD. E
          há um risco de sigilo: uma lista formada só por pacientes revela
          quem faz terapia com você se for exposta. Deixe o convite visível no
          site e no{" "}
          <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
            rodapé do seu e-mail profissional
          </Link>{" "}
          e quem quiser se inscreve.
        </p>
        <p>
          <strong>Erro comum:</strong> comprar lista ou adicionar contatos de
          grupos de WhatsApp. Além de ilegal sem consentimento, derruba a
          entrega: muitos marcam como spam.
        </p>
      </section>

      <section>
        <h2>3. Escolha uma ferramenta que cuide do básico</h2>
        <p>
          Qualquer ferramenta séria de e-mail marketing serve para começar. O
          que importa são quatro recursos, não a marca.
        </p>
        <ol>
          <li>
            <strong>Inscrição com confirmação</strong> (o chamado duplo
            opt-in).
          </li>
          <li>
            <strong>Link de descadastro automático</strong> em todo envio. O{" "}
            <a href={GMAIL} {...ext}>
              Gmail exige
            </a>{" "}
            de quem envia mais de 5 mil mensagens por dia o cancelamento com
            um clique e um link de descadastro visível no corpo da mensagem.
            Mesmo abaixo disso, é boa prática.
          </li>
          <li>
            <strong>Envio pelo seu domínio</strong>, com autenticação SPF e
            DKIM configurada. Um endereço como contato@seuconsultorio.com.br
            entrega melhor e passa mais confiança do que um e-mail gratuito.
          </li>
          <li>
            <strong>Servidores e contrato que tratem a LGPD</strong>: veja na
            política da ferramenta onde os dados ficam e como pedir exclusão.
          </li>
        </ol>
        <p>
          <strong>Erro comum:</strong> mandar a newsletter pelo e-mail pessoal
          com todos os endereços no campo “Para” ou “Cc”. Todo mundo vê o
          e-mail de todo mundo. Em um consultório de psicologia, isso é um
          vazamento.
        </p>
        <p>
          Com a ferramenta pronta, a pergunta passa a ser o que escrever.
        </p>
      </section>

      <section>
        <h2>4. Planeje a pauta das primeiras edições</h2>
        <p>
          A newsletter que dura é a que tem pauta antes do primeiro envio.
          Liste pelo menos seis temas antes de anunciar o formulário. Isso
          mostra se o assunto rende e evita o mês em branco.
        </p>
        <ul>
          <li>
            <strong>Perguntas que você ouve toda semana.</strong> Sem detalhe
            de caso, sem nada que identifique alguém. “Muitos pais perguntam
            se…” é o limite.
          </li>
          <li>
            <strong>Um texto do blog, ampliado.</strong> A newsletter pode
            trazer o contexto e linkar o artigo no site, o que também ajuda o
            site a ser encontrado. Veja como funciona o{" "}
            <Link href="/blog/seo-para-psicologos" className="inst-link">
              SEO para psicólogos
            </Link>
            .
          </li>
          <li>
            <strong>Recursos públicos confiáveis:</strong> uma cartilha do
            CRP, um material do Ministério da Saúde, um direito previsto em
            lei. Sempre com link para a fonte.
          </li>
          <li>
            <strong>Bastidores do consultório</strong> que não exponham
            ninguém: como funciona a primeira conversa, o que esperar de uma
            avaliação, como é a sala.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de pauta trimestral:</em> mês 1, “o que
          observar no sono de crianças autistas e quando procurar ajuda”; mês
          2, “como conversar com a escola sobre adaptações”; mês 3, “o que é
          orientação parental e como funciona”.
        </p>
        <p>
          <strong>Erro comum:</strong> transformar cada edição em anúncio de
          vaga na agenda. O leitor sai da lista quando percebe que só recebe
          propaganda.
        </p>
      </section>

      <section>
        <h2>5. Escreva cada edição com estrutura simples</h2>
        <p>
          Uma edição boa tem um assunto, uma ideia central e uma ação
          possível para o leitor. Textos de 400 a 800 palavras costumam caber
          bem; o tamanho certo é o que o tema pede.
        </p>
        <ol>
          <li>
            <strong>Assunto do e-mail claro.</strong> Diga do que se trata.
            Evite caixa alta, ponto de exclamação em série e títulos que
            prometem resultado (“acabe com as crises”).
          </li>
          <li>
            <strong>Abertura curta</strong>, com a situação que o leitor
            reconhece.
          </li>
          <li>
            <strong>Corpo com uma ideia</strong>, explicada com base na
            ciência psicológica, como pede o art. 19 do Código de Ética para
            o conteúdo sobre psicologia.
          </li>
          <li>
            <strong>Fechamento</strong> com um link para aprofundar e, se
            fizer sentido, um convite sóbrio para quem quiser conversar.
          </li>
          <li>
            <strong>Rodapé fixo</strong> com nome completo ou nome social,
            “psicóloga”, CRP e número, endereço de contato e link de
            descadastro.
          </li>
        </ol>
        <p>
          O jeito de escrever deve ser o mesmo do site e das redes. Se ainda
          não está definido, comece pelo{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz do consultório
          </Link>
          .
        </p>
        <p>
          <strong>Erro comum:</strong> responder dúvidas pessoais de leitores
          na edição seguinte, com detalhes. A cartilha do CRP-MG lembra que
          respostas a perguntas do público devem ser genéricas e respaldadas
          na ciência, sem virar atendimento.
        </p>
      </section>

      <section>
        <h2>6. Leve o art. 20 para dentro de cada envio</h2>
        <p>
          A newsletter que fala do seu trabalho é publicidade, e o art. 20
          vale para ela como vale para um post. Na prática, quatro cuidados
          resolvem a maior parte dos casos.
        </p>
        <ul>
          <li>
            <strong>Sem preço como chamariz.</strong> Nada de “condição
            especial para assinantes”, desconto ou primeira sessão grátis. A{" "}
            <a href={CARTILHA} {...ext}>
              cartilha do CRP-MG
            </a>{" "}
            inclui gratuidade, cupons, pacotes e “preço social” na mesma
            vedação. Veja{" "}
            <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
              o que vale para preço
            </Link>
            .
          </li>
          <li>
            <strong>Sem promessa.</strong> “Em quatro semanas seu filho dorme
            melhor” é previsão taxativa de resultado.
          </li>
          <li>
            <strong>Sem depoimento de paciente</strong>, nem anônimo, nem
            “história inspirada em um caso”. Entenda o motivo no texto sobre{" "}
            <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
              depoimento de paciente
            </Link>
            .
          </li>
          <li>
            <strong>Sem sorteio.</strong> A Nota Técnica proíbe cupons
            promocionais e sorteios na divulgação de serviços psicológicos,
            inclusive para “quem indicar três amigos”.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> achar que, por ser um e-mail “privado”,
          as regras não valem. A norma fala em promover serviços “por
          quaisquer meios”.
        </p>
      </section>

      <section>
        <h2>7. Divulgue o formulário nos lugares certos</h2>
        <p>
          A lista cresce onde já existe leitura. O formulário deve aparecer
          perto do conteúdo, não escondido numa página só dele.
        </p>
        <ul>
          <li>No fim dos artigos do blog, com a promessa da newsletter.</li>
          <li>
            Na página “sobre” e no rodapé do{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site profissional
            </Link>
            .
          </li>
          <li>
            No link da bio do{" "}
            <Link href="/blog/instagram-para-psicologos" className="inst-link">
              Instagram
            </Link>
            , quando a edição do mês tratar de um tema que você postou.
          </li>
          <li>
            Em palestras e rodas de conversa, com um QR code que leva ao
            formulário. Nunca passe uma lista de papel para recolher e-mails
            sem explicar o uso.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de convite:</em> “Recebo muitas perguntas
          sobre rotina e escola. Uma vez por mês, respondo uma delas por
          e-mail, com calma. Se quiser receber, a inscrição está aqui.”
        </p>
        <p>
          <strong>Erro comum:</strong> oferecer um brinde em troca da
          inscrição que funcione como vantagem financeira ligada ao serviço,
          como desconto na avaliação.
        </p>
      </section>

      <section>
        <h2>Newsletter: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Newsletter de psicóloga: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Newsletter de psicóloga: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Formulário no site com finalidade e frequência descritas</td><td>Sim</td></tr>
              <tr><td>Texto educativo com link para fonte oficial</td><td>Sim</td></tr>
              <tr><td>Convite sóbrio para a primeira conversa, sem preço</td><td>Sim</td></tr>
              <tr><td>Importar os e-mails de pacientes da agenda</td><td>Não, sem pedido expresso</td></tr>
              <tr><td>“Assinantes têm 20% de desconto na avaliação”</td><td>Não (preço como chamariz)</td></tr>
              <tr><td>Relato de caso, mesmo com nome trocado</td><td>Não (sigilo e depoimento)</td></tr>
              <tr><td>Envio com todos os endereços em cópia aberta</td><td>Não (exposição de dados)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já envia: como medir sem perder o foco</h2>
        <p>
          Depois de alguns envios, a ferramenta mostra aberturas, cliques e
          descadastros. Use esses números para ajustar a pauta, não para
          perseguir crescimento a qualquer custo. Uma edição com poucos
          cliques pode ter sido lida inteira e ter cumprido o papel.
        </p>
        <p>
          Três ajustes costumam render mais do que trocar de ferramenta:
          revisar o assunto dos e-mails que menos abriram, ver quais links
          receberam cliques para entender o interesse real e limpar da lista,
          com aviso prévio, quem não abre há muitos meses. Lista menor e
          engajada entrega melhor.
        </p>
        <p>
          Se você atende em consultório com mais de um profissional, defina
          quem responde pela newsletter e pelo tratamento dos dados. A
          publicidade da pessoa jurídica também segue o art. 20, e cada
          psicóloga citada aparece com nome e CRP.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Pais de crianças autistas, com TDAH ou outras condições recebem uma
          quantidade enorme de informação, boa parte sem base científica. Uma
          newsletter mensal, calma e com fontes pode ser exatamente o
          contrário disso, e é um bom motivo para alguém continuar lendo.
        </p>
        <ul>
          <li>
            <strong>Escreva para quem está cansado.</strong> Parágrafos
            curtos, um tema por edição, um resumo no topo.
          </li>
          <li>
            <strong>Use linguagem que respeita a criança.</strong> O texto
            sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajuda a revisar termos como “sofre de autismo”.
          </li>
          <li>
            <strong>Nada de promessa de melhora.</strong> “Técnicas que
            reduzem as crises” promete resultado. Prefira “o que a pesquisa
            diz sobre crises e o que costuma ajudar as famílias a se
            organizar”.
          </li>
          <li>
            <strong>Indique recursos de direito:</strong> a lei que institui a
            política nacional de proteção dos direitos da pessoa com
            transtorno do espectro autista, cartilhas da Defensoria, serviços
            públicos da sua cidade.
          </li>
          <li>
            <strong>Não fale de crianças específicas</strong>, nem com nomes
            trocados, e não use fotos de crianças atendidas.
          </li>
        </ul>
        <p>
          Para ideias de temas que já funcionam nas redes, veja o artigo sobre{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>
          ; boa parte pode virar edição de newsletter com mais profundidade.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Começar sem pauta e parar no terceiro envio.</li>
          <li>Importar contatos de pacientes ou de grupos sem consentimento.</li>
          <li>Enviar pelo e-mail pessoal com endereços em cópia aberta.</li>
          <li>Esquecer nome, CRP e link de descadastro no rodapé.</li>
          <li>Usar desconto, brinde com vantagem financeira ou sorteio para atrair inscrições.</li>
          <li>Contar casos do consultório, mesmo “sem identificar”.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes do primeiro envio</h2>
        <ul>
          <li>Leitor principal e promessa da newsletter definidos.</li>
          <li>Formulário com finalidade, frequência e saída fácil.</li>
          <li>Confirmação de inscrição ativa e registro do consentimento.</li>
          <li>Política de privacidade do site atualizada.</li>
          <li>Envio pelo domínio do consultório, com SPF e DKIM.</li>
          <li>Seis temas na pauta.</li>
          <li>Rodapé com nome completo ou nome social, “psicóloga”, CRP e descadastro.</li>
          <li>Leitura final com o art. 20 ao lado: preço, promessa, depoimento, sorteio.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe cria marcas para consultórios de psicologia, e a
          newsletter entra quando faz sentido para o posicionamento. São dois
          dias de imersão para definir público, tom de voz e identidade
          visual, e a marca fica no ar em 45 dias, com site, modelos de
          e-mail e peças revisadas pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser pensar a sua newsletter junto, marque uma conversa de 15
          minutos.
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
            , arts. 9º, 19 e 20.
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
            , 2ª edição, 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 7º, 8º e 18.
          </li>
          <li>
            <a href={ANPD} {...ext}>
              Autoridade Nacional de Proteção de Dados (ANPD)
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={GMAIL} {...ext}>
              Diretrizes para remetentes de e-mail
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
