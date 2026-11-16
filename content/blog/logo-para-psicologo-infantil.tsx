import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

export const post: Post = {
  slug: "logo-para-psicologo-infantil",
  title: "Logo para psicólogo infantil: como falar com os pais sem cair no clichê",
  description:
    "Quem escolhe o psicólogo infantil é o adulto. Como criar o logo e a marca de um consultório infantil que comunica com os pais, dentro do Código de Ética.",
  keyword: "logo para psicólogo infantil",
  tags: ["identidade-visual"],
  publishedAt: "2026-11-07",
  summary:
    "O logo de um psicólogo infantil deve falar com o adulto que escolhe o consultório — mãe, pai ou responsável —, não só com a criança. Evite clichês como lápis, arco-íris e peça de quebra-cabeça; prefira um símbolo próprio, legível em tamanho pequeno, com uma versão que traga nome completo e CRP. Imagens de crianças atendidas ou de material de sessão ficam fora da marca.",
  faq: [
    { q: "O logo de psicologia infantil precisa ser colorido?", a: "Não necessariamente. Ele pode ter leveza e acolhimento sem estética infantilizada; o importante é ser legível, próprio e coerente com o posicionamento do consultório." },
    { q: "Por que evitar a peça de quebra-cabeça em logos ligados ao autismo?", a: "Ela é contestada por parte da comunidade autista, e um estudo publicado na revista Autism encontrou associações negativas com peças de quebra-cabeça, inclusive em logos ligados ao autismo." },
    { q: "Posso usar desenhos de pacientes na identidade visual?", a: "Não. Desenhos feitos em sessão são material decorrente do atendimento e estão protegidos pelo sigilo profissional." }
  ],
  cover: {
    src: "/blog/logo-para-psicologo-infantil/logo-para-psicologo-infantil-esbocos.jpg",
    alt: "Caderno com vários esboços de logo desenhados a lápis, em preto e branco, mostrando o processo de criação de um símbolo",
    caption: "Foto: Messala Ciulla / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Pesquise “logo psicólogo infantil” e o padrão aparece rápido: lápis de
        cor, arco-íris, balões, bonequinhos de mãos dadas, letras arredondadas
        em cores primárias. É uma estética que tenta falar com a criança. O
        problema é que, na grande maioria das vezes, não é a criança quem
        escolhe o consultório.
      </p>
      <p>
        Quem pesquisa, compara perfis, lê a descrição e manda a primeira
        mensagem é a mãe, o pai ou outro responsável. O logo e a marca de um
        consultório infantil precisam, antes de tudo, conversar com esse adulto.
        Este texto mostra como fazer isso — e como evitar os clichês que deixam
        consultórios diferentes com a mesma cara.
      </p>

      <section>
        <h2>Para quem o logo fala: o adulto que decide</h2>
        <p>
          Pense no momento em que o responsável procura atendimento para uma
          criança ou um adolescente. Muitas vezes ele chega depois de uma
          orientação da escola, do pediatra ou de outro profissional; às vezes,
          depois de semanas lendo sobre o assunto. Ele quer entender
          rapidamente três coisas: se você atende a faixa etária e a demanda do
          filho, como funciona o atendimento e se pode confiar em você.
        </p>
        <p>
          Uma marca infantilizada demais pode atrapalhar exatamente aí. Quando
          tudo parece desenho, a informação séria — formação, público, formato,
          como é o primeiro contato — some no meio dos enfeites. O logo pode ser
          acolhedor e ter leveza; não precisa parecer um material escolar.
        </p>
      </section>

      <section>
        <h2>Os clichês mais comuns (e por que evitar)</h2>
        <ul>
          <li>
            <strong>Lápis, giz de cera e arco-íris</strong> — dizem “criança”, mas
            não dizem nada sobre você. Qualquer consultório infantil pode usar o
            mesmo símbolo.
          </li>
          <li>
            <strong>Silhuetas de família ou de mãos dadas</strong> — muito usadas
            em bancos de imagem e em modelos prontos, o que torna o logo
            facilmente confundível com o de outros profissionais.
          </li>
          <li>
            <strong>O Ψ (psi) cercado de elementos infantis</strong> — o símbolo
            da psicologia não é proibido, mas sozinho não diferencia ninguém.
          </li>
          <li>
            <strong>A peça de quebra-cabeça</strong>, no caso de quem atende
            crianças autistas — o símbolo é contestado por parte da comunidade
            autista, e um estudo publicado na revista científica{" "}
            <a href="https://doi.org/10.1177/1362361317727125" {...ext}>
              Autism
            </a>{" "}
            encontrou associações negativas com peças de quebra-cabeça,
            inclusive as usadas em logos ligados ao autismo. Para uma marca que
            quer acolher famílias, é um ruído evitável.
          </li>
        </ul>
        <p>
          O problema comum a todos esses atalhos é o mesmo: eles partem do
          tema, não do consultório. Por isso são parecidos entre si.
        </p>
      </section>

      <section>
        <h2>De onde deve sair o símbolo</h2>
        <p>
          Um logo próprio nasce de perguntas sobre o seu trabalho, não sobre a
          infância em geral. Algumas delas:
        </p>
        <ul>
          <li>Qual faixa etária você atende — primeira infância, crianças, adolescentes?</li>
          <li>
            Que demandas chegam com mais frequência e em quais você se
            aprofundou?
          </li>
          <li>Qual é a sua abordagem e como você a explicaria a um responsável leigo?</li>
          <li>
            Como é o seu espaço, o seu jeito de receber as famílias, a sua
            história na profissão?
          </li>
        </ul>
        <p>
          Das respostas sai o posicionamento, e dele sai a direção visual. Esse
          caminho está descrito no texto sobre{" "}
          <Link href="/blog/branding-para-psicologos" className="inst-link">
            branding para psicólogos
          </Link>{" "}
          e, em detalhe, no{" "}
          <Link href="/metodologia" className="inst-link">
            método PSIQUE
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Cor, forma e tipografia: acolhedor sem ser infantil</h2>
        <h3>Cores</h3>
        <p>
          Paletas de consultório infantil tendem a dois extremos: cores
          primárias muito saturadas ou tons pastel muito claros. Os dois podem
          funcionar, desde que haja regra. Defina uma cor de base, uma de texto
          e uma de destaque, e garanta legibilidade: a{" "}
          <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
            WCAG 2.1
          </a>{" "}
          pede contraste mínimo de 4,5:1 para texto comum — algo que tons pastel
          sobre fundo branco raramente alcançam.
        </p>
        <h3>Formas</h3>
        <p>
          Formas arredondadas e traços orgânicos transmitem leveza sem recorrer a
          ilustração literal. Um símbolo simples também resiste melhor a
          tamanhos pequenos, como a foto de perfil do Instagram ou do WhatsApp.
        </p>
        <h3>Tipografia</h3>
        <p>
          Letras “de criança” ficam bem em um título, mas cansam em textos
          longos. Combine uma família com personalidade para a assinatura com
          outra de leitura confortável para descrições, site e documentos.
        </p>
      </section>

      <section>
        <h2>O que o Código de Ética pede do logo</h2>
        <p>
          O artigo 20 do{" "}
          <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          determina que a divulgação informe nome completo, CRP e número de
          registro. A{" "}
          <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          esclarece que logomarcas são permitidas desde que vinculadas a esses
          dados. Para um consultório infantil, isso significa:
        </p>
        <ul>
          <li>
            Prever uma versão da assinatura com nome completo e CRP legíveis,
            inclusive em tamanho pequeno.
          </li>
          <li>
            Usar nome fantasia (“Espaço…”, “Clínica…”) apenas se houver pessoa
            jurídica registrada no CRP, com o número de inscrição da empresa.
          </li>
          <li>
            Não usar imagens de crianças atendidas, desenhos feitos em sessão ou
            qualquer material que venha do atendimento — o sigilo vale também
            para a divulgação.
          </li>
          <li>
            Não associar a marca a promessas como “seu filho vai superar…”: o
            Código veda a previsão taxativa de resultados.
          </li>
        </ul>
      </section>

      <section>
        <h2>Quando o consultório atende crianças neurodivergentes</h2>
        <p>
          Consultórios que atendem crianças e adolescentes autistas, com TDAH ou
          outras condições do neurodesenvolvimento recebem famílias que, com
          frequência, já passaram por muitos profissionais e muita informação.
          Para esse responsável, a marca precisa ser especialmente clara e
          respeitosa.
        </p>
        <ul>
          <li>
            <strong>Diga o que você faz com precisão.</strong> Público, faixa
            etária, abordagem e formato de atendimento valem mais do que
            qualquer ilustração. Divulgue apenas qualificações que você possui e
            práticas reconhecidas pela profissão, como pede o artigo 20.
          </li>
          <li>
            <strong>Fuja da linguagem de “cura” e “superação”.</strong> Além de
            esbarrar na vedação à previsão de resultados, ela pode soar
            desrespeitosa para famílias e pessoas neurodivergentes.
          </li>
          <li>
            <strong>Pense em quem lê com pressa.</strong> Textos curtos,
            hierarquia clara e bom contraste ajudam o responsável que pesquisa no
            celular, entre uma tarefa e outra.
          </li>
          <li>
            <strong>Prefira um símbolo próprio</strong> a ícones associados ao
            tema, como o quebra-cabeça ou o laço colorido. O símbolo próprio
            diferencia e evita associações que você não escolheu.
          </li>
        </ul>
      </section>

      <section>
        <h2>Logo pronto, gerador grátis ou projeto?</h2>
        <p>
          Modelos prontos e geradores de logo resolvem a urgência de ter
          “alguma coisa” no perfil. O custo aparece depois: a mesma arte pode
          estar em dezenas de outros consultórios, e ela não foi pensada para o
          seu público nem para as exigências de identificação do Código de
          Ética. Se a escolha for por um modelo, use-o como provisório — e
          planeje a marca de verdade quando o consultório estiver pronto para
          isso.
        </p>
      </section>

      <section>
        <h2>Onde o logo vai viver</h2>
        <p>
          Antes de aprovar um logo, teste-o nos lugares em que os responsáveis
          vão encontrá-lo: a foto de perfil do Instagram e do WhatsApp, o perfil
          no Google, o site, o cartão, a assinatura de e-mail e os documentos
          que você entrega às famílias, como recibos e declarações. Se ele não
          funciona pequeno, em preto e branco ou sobre foto, ainda não está
          pronto.
        </p>
      </section>

      <section>
        <h2>Checklist rápido</h2>
        <ul>
          <li>O logo fala com o responsável, não só com a criança?</li>
          <li>Ele seria diferente do de outro consultório infantil da sua cidade?</li>
          <li>Funciona em tamanho de foto de perfil e em uma cor só?</li>
          <li>Existe uma versão com nome completo e CRP legíveis?</li>
          <li>Evita símbolos prontos e contestados, como o quebra-cabeça?</li>
          <li>Nenhuma peça usa imagem de atendimento ou promessa de resultado?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia —
          incluindo os que atendem crianças, adolescentes e suas famílias — a
          partir de dois encontros de imersão: posicionamento, identidade visual e verbal, entregues em
          até 30 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
          sobre a marca do seu consultório, o primeiro passo é uma conversa de
          15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Gernsbacher, M. A. et al.{" "}
            <a href="https://doi.org/10.1177/1362361317727125" {...ext}>
              Do puzzle pieces and autism puzzle piece logos evoke negative
              associations?
            </a>{" "}
            <em>Autism</em>.
          </li>
          <li>
            W3C.{" "}
            <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
              WCAG 2.1, critério 1.4.3 — Contraste (mínimo)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
