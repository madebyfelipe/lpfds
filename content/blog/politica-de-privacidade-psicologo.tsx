import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const COOKIES =
  "https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf";
const PEQUENO_PORTE =
  "https://www.gov.br/anpd/pt-br/documentos-e-publicacoes/regulamentacoes-da-anpd/resolucao-cd-anpd-no-2-de-27-de-janeiro-de-2022";
const ANPD = "https://www.gov.br/anpd/pt-br";
const TDICS =
  "https://www.crpsp.org/noticia/view/3251/resolucao-do-cfp-que-disciplina-uso-de-tecnologias-digitais-no-exercicio-da-psicologia-ja-esta-em-vigor-plataforma-e-psi-sera-encerrada";
const CDC = "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm";

export const post: Post = {
  slug: "politica-de-privacidade-psicologo",
  title: "Política de privacidade para site de psicólogo: o que escrever, seção por seção, pela LGPD",
  description:
    "Política de privacidade para site de psicólogo: o que a LGPD pede, formulários, WhatsApp, cookies, dados de saúde, direitos do titular e um roteiro em 9 seções.",
  keyword: "política de privacidade para site de psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-16",
  summary:
    "A política de privacidade do site de psicólogo explica, em linguagem simples, quem é a responsável pelos dados, o que o site coleta (formulário, WhatsApp, agenda, cookies), para quê, com quem compartilha, por quanto tempo guarda e como a pessoa exerce os direitos da LGPD. Ela trata só do site e do primeiro contato: o prontuário e o que é dito em atendimento seguem o sigilo do Código de Ética e as regras do CFP, e a política deve dizer isso. Abaixo há um roteiro em 9 seções com trechos fictícios para adaptar, que não substitui a revisão de um advogado.",
  faq: [
    {
      q: "Site de psicólogo precisa de política de privacidade?",
      a: "Se o site coleta qualquer dado pessoal, como um formulário de contato, um agendamento, uma inscrição em newsletter ou cookies de medição, a LGPD exige que a pessoa receba informação clara sobre esse uso. A forma mais simples de cumprir isso é uma página de política de privacidade, com link no rodapé e ao lado de cada formulário."
    },
    {
      q: "Posso copiar a política de privacidade de outro site?",
      a: "Copiar não funciona, porque a política precisa descrever o que o seu site faz: quais formulários existem, quais ferramentas recebem os dados, por quanto tempo você guarda. Um texto copiado costuma citar ferramentas que você não usa e omitir as que usa. Modelos servem de estrutura; o conteúdo é o seu."
    },
    {
      q: "O que muda na política de privacidade por ser psicólogo?",
      a: "Mensagens de quem procura atendimento podem conter dados de saúde, que a LGPD trata como dados sensíveis (art. 11). A política deve pedir que a pessoa não envie detalhes clínicos pelo formulário, explicar como esse primeiro contato é protegido e deixar claro que o prontuário e o atendimento seguem o sigilo profissional e as normas do CFP."
    },
    {
      q: "Psicólogo autônomo precisa de encarregado de dados (DPO)?",
      a: "A Resolução CD/ANPD nº 2/2022 dispensa os agentes de pequeno porte, o que inclui pessoas físicas que tratam dados como controladoras, de indicar encarregado, desde que mantenham um canal de comunicação com o titular. A mesma resolução tira a dispensa de quem faz tratamento de alto risco, e dados de saúde entram nos critérios dessa avaliação. Por isso vale conferir o seu caso com um advogado e, em qualquer cenário, publicar um contato para assuntos de privacidade."
    }
  ],
  cover: {
    src: "/blog/politica-de-privacidade-psicologo/politica-de-privacidade-psicologo-notebook-com-cadeado.jpg",
    alt: "Notebook visto de cima com um cadeado e uma chave sobre o teclado, ideia de proteção de dados",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O site ficou pronto, com formulário de contato, botão de WhatsApp e
        um pixel de anúncio que alguém sugeriu instalar. No rodapé, a
        plataforma colocou um link “Política de privacidade” que leva a um
        texto genérico, em português de tradução automática, citando
        ferramentas que você nunca usou. E você fica com a pergunta: isso
        serve? O que a LGPD pede de verdade para o site de uma psicóloga?
      </p>
      <p>
        A resposta curta é esta: a política de privacidade para site de
        psicólogo precisa descrever o que o seu site faz com dados pessoais,
        em linguagem simples. Quem é a responsável, o que é coletado, para
        quê, com quem é compartilhado, por quanto tempo é guardado, como a
        pessoa exerce os direitos e com quem fala. Por ser um serviço de saúde
        mental, ela também separa o site do atendimento, que segue o sigilo
        profissional. Abaixo está um roteiro em 9 seções com trechos fictícios.
        Este guia orienta a escrita e não substitui a revisão de um advogado.
        Para o formulário de agenda em si, o guia de{" "}
        <Link href="/blog/agendamento-online-psicologo" className="inst-link">
          agendamento online para psicólogo
        </Link>{" "}
        complementa este.
      </p>

      <section>
        <h2>O que dizem as normas sobre a política de privacidade</h2>
        <p>
          A{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
          </a>{" "}
          dá à pessoa o direito de acesso facilitado às informações sobre o
          tratamento dos seus dados (art. 9º): finalidade, forma e duração,
          identificação e contato do controlador, compartilhamento,
          responsabilidades e direitos. O art. 18 lista esses direitos, como
          confirmação, acesso, correção, eliminação e revogação do
          consentimento. O art. 11 trata dos dados sensíveis, que incluem dados
          referentes à saúde.
        </p>
        <p>
          A Autoridade Nacional de Proteção de Dados (ANPD) publicou o{" "}
          <a href={COOKIES} {...ext}>
            guia orientativo sobre cookies
          </a>
          , que explica como informar e pedir consentimento para cookies não
          necessários. A{" "}
          <a href={PEQUENO_PORTE} {...ext}>
            Resolução CD/ANPD nº 2/2022
          </a>{" "}
          trata dos agentes de pequeno porte, categoria que inclui pessoas
          físicas, e simplifica algumas obrigações, como a indicação de
          encarregado, desde que haja um canal de comunicação com o titular.
        </p>
        <p>
          Do lado da psicologia, o art. 9º do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          impõe o sigilo sobre tudo o que você conhece no exercício
          profissional. A Resolução CFP nº 9/2024, que regula o atendimento por
          tecnologias digitais (veja o{" "}
          <a href={TDICS} {...ext}>
            resumo do CRP-SP
          </a>
          ), reforça o cuidado com o sigilo e a segurança das informações no
          atendimento online.
        </p>
      </section>

      <section>
        <h2>1. Identifique quem é a responsável pelos dados</h2>
        <p>
          A primeira seção diz quem controla os dados e como falar com essa
          pessoa. Sem isso, a pessoa não sabe a quem pedir acesso ou exclusão.
        </p>
        <ol>
          <li>
            Nome completo ou razão social, e CNPJ se houver.
          </li>
          <li>
            “Psicóloga” e o número do CRP, já que o site é a sua divulgação
            profissional.
          </li>
          <li>
            Um e-mail para assuntos de privacidade, que você lê de fato.
          </li>
          <li>
            Se você indicar um encarregado, o nome e o contato dele; se não,
            o canal de comunicação que você mantém, como pede a Resolução
            CD/ANPD nº 2/2022 para quem é dispensado.
          </li>
        </ol>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Este site é mantido
          por Ana Ribeiro, psicóloga, CRP 00/00000, que é a responsável pelos
          dados pessoais tratados aqui. Para qualquer assunto sobre os seus
          dados, escreva para privacidade@exemplo.com.br.”
        </p>
        <p>
          <strong>Erro comum:</strong> deixar como responsável a empresa que fez
          o site ou a hospedagem. Elas são operadoras; a responsável é você. O
          guia de{" "}
          <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
            e-mail profissional para psicólogo
          </Link>{" "}
          ajuda a criar um endereço próprio para esse canal.
        </p>
      </section>

      <section>
        <h2>2. Liste o que o site coleta, ponto por ponto</h2>
        <p>
          Antes de escrever, navegue pelo site como visitante e anote cada
          lugar onde alguém digita algo ou uma ferramenta registra a visita.
        </p>
        <ul>
          <li>
            <strong>Formulário de contato:</strong> quais campos (nome,
            telefone, e-mail, mensagem).
          </li>
          <li>
            <strong>Botão de WhatsApp:</strong> o número e as mensagens ficam
            no WhatsApp, sob as regras da plataforma.
          </li>
          <li>
            <strong>Agenda online:</strong> dados pedidos pela ferramenta de
            agendamento.
          </li>
          <li>
            <strong>Newsletter:</strong> e-mail e, às vezes, nome.
          </li>
          <li>
            <strong>Medição e anúncios:</strong> ferramentas de estatística,
            pixels de redes sociais, mapas e vídeos incorporados.
          </li>
          <li>
            <strong>Registros técnicos:</strong> endereço IP e dados de acesso
            guardados pela hospedagem.
          </li>
        </ul>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “No formulário de
          contato, pedimos seu nome, um telefone ou e-mail e uma mensagem curta.
          Não peça nem envie detalhes sobre a sua saúde por aqui: isso fica para
          a primeira conversa.”
        </p>
        <p>
          <strong>Erro comum:</strong> esquecer o que veio pronto com o tema do
          site, como fontes carregadas de servidores externos, mapas e vídeos
          incorporados. Cada um registra a visita. Se você não precisa deles,
          o melhor é tirar; se precisa, eles entram na política.
        </p>
      </section>

      <section>
        <h2>3. Explique para que serve cada dado e a base legal</h2>
        <p>
          Cada dado coletado tem uma finalidade e uma base legal da LGPD. A
          pessoa precisa entender por que você pede aquilo e com que direito.
        </p>
        <ol>
          <li>
            <strong>Responder ao contato:</strong> procedimentos preliminares a
            um contrato, a pedido da pessoa (art. 7º, V).
          </li>
          <li>
            <strong>Enviar newsletter:</strong> consentimento (art. 7º, I),
            com descadastro fácil.
          </li>
          <li>
            <strong>Cookies de medição e anúncio:</strong> em regra,
            consentimento, conforme o guia da ANPD.
          </li>
          <li>
            <strong>Registros técnicos de segurança:</strong> legítimo
            interesse ou cumprimento de obrigação legal, conforme o caso.
          </li>
          <li>
            <strong>Dados de saúde que cheguem pelo contato:</strong> as bases
            do art. 11, que são mais restritas; por isso a orientação de não
            enviar detalhes clínicos pelo site.
          </li>
        </ol>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Usamos seu nome e
          contato só para responder à sua mensagem, a seu pedido. A newsletter
          só chega se você marcar essa opção.”
        </p>
        <p>
          <strong>Erro comum:</strong> escrever “seus dados podem ser usados
          para fins de marketing e parcerias”. Além de vago, abre espaço para
          usos que a pessoa não esperava. Finalidade boa é específica. O guia
          de{" "}
          <Link href="/blog/newsletter-para-psicologo" className="inst-link">
            newsletter para psicólogo
          </Link>{" "}
          mostra como pedir o consentimento.
        </p>
      </section>

      <section>
        <h2>4. Separe o site do atendimento e do prontuário</h2>
        <p>
          Esta é a seção que distingue a política de uma psicóloga. Ela diz
          claramente que o site trata do primeiro contato e que o atendimento
          tem regras próprias, mais rígidas.
        </p>
        <ul>
          <li>
            Explique que o prontuário, os registros de sessão e o que é dito em
            atendimento seguem o sigilo profissional (art. 9º do Código de
            Ética) e as normas do CFP.
          </li>
          <li>
            Para atendimento online, informe que a plataforma usada nas sessões
            é escolhida com atenção ao sigilo, como pede a Resolução CFP nº
            9/2024, e que detalhes são combinados no contrato terapêutico.
          </li>
          <li>
            Peça que a pessoa não envie relatórios, laudos ou detalhes clínicos
            pelo formulário ou pelo WhatsApp antes da primeira conversa.
          </li>
        </ul>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Esta política trata
          dos dados do site e do primeiro contato. O que você conta em
          atendimento, e os registros que faço dele, ficam protegidos pelo
          sigilo profissional da psicologia e seguem as normas do Conselho
          Federal de Psicologia.”
        </p>
        <p>
          <strong>Erro comum:</strong> pedir, no formulário do site, “descreva
          brevemente o motivo da procura” como campo obrigatório. Use um campo
          opcional, com o aviso ao lado. O guia de{" "}
          <Link href="/blog/textos-site-psicologo" className="inst-link">
            textos para site de psicólogo
          </Link>{" "}
          traz modelos para esse aviso.
        </p>
      </section>

      <section>
        <h2>5. Diga com quem os dados são compartilhados</h2>
        <p>
          Quase todo site compartilha dados com alguma ferramenta: hospedagem,
          e-mail, agenda, newsletter. A pessoa tem direito de saber quais são e
          para quê.
        </p>
        <ol>
          <li>
            Liste os tipos de operadores: hospedagem do site, provedor de
            e-mail, ferramenta de agenda, ferramenta de newsletter, plataforma
            de medição.
          </li>
          <li>
            Cite os nomes das ferramentas principais, para que a pessoa possa
            ler as políticas delas.
          </li>
          <li>
            Informe quando há transferência internacional, comum em
            ferramentas com servidores fora do Brasil.
          </li>
          <li>
            Diga que você não vende nem cede dados para terceiros.
          </li>
        </ol>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Para o site funcionar,
          usamos uma empresa de hospedagem, um serviço de e-mail e uma
          ferramenta de agenda online. Algumas delas guardam dados em
          servidores fora do Brasil. Não vendemos nem cedemos seus dados.”
        </p>
        <p>
          <strong>Erro comum:</strong> instalar o pixel de uma rede social para
          anúncios e não citar na política nem pedir consentimento. O pixel
          envia dados da visita para a plataforma, e uma visita à página de um
          serviço de saúde mental diz algo sobre a pessoa. Sem consentimento,
          o pixel fica desligado. O guia de{" "}
          <Link href="/blog/google-ads-para-psicologos" className="inst-link">
            Google Ads para psicólogos
          </Link>{" "}
          trata da medição de anúncios.
        </p>
      </section>

      <section>
        <h2>6. Explique os cookies e dê escolha de verdade</h2>
        <p>
          Cookies necessários, os que fazem o site funcionar, não precisam de
          consentimento. Cookies de medição e de anúncio, em regra, precisam, e
          o guia da ANPD pede que a escolha seja livre e informada.
        </p>
        <ul>
          <li>
            Liste os cookies por categoria: necessários, de medição, de
            anúncio, de conteúdo incorporado.
          </li>
          <li>
            Um banner com “Aceitar” e “Recusar” com o mesmo destaque. Recusar
            não pode ser mais difícil do que aceitar.
          </li>
          <li>
            Sem consentimento, as ferramentas não necessárias nem carregam.
          </li>
          <li>
            Um link no rodapé para a pessoa mudar a escolha depois.
          </li>
        </ul>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Além dos cookies
          necessários, só usamos estatística de visitas com a sua permissão,
          que você muda no link ‘Cookies’ do rodapé.”
        </p>
        <p>
          <strong>Erro comum:</strong> o banner “Ao continuar navegando, você
          concorda com os cookies”, com um botão só. O{" "}
          <a href={COOKIES} {...ext}>
            guia da ANPD
          </a>{" "}
          não recomenda esse consentimento tácito, por ser incompatível com a LGPD, e pede um botão de rejeitar fácil de ver. Se o
          site não usa nenhuma ferramenta além das necessárias, você pode nem
          precisar de banner, e isso deixa o site mais leve. O guia de{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site profissional para psicólogo
          </Link>{" "}
          ajuda a decidir o que o site realmente precisa.
        </p>
      </section>

      <section>
        <h2>7. Informe por quanto tempo guarda e como protege</h2>
        <p>
          A pessoa precisa saber por quanto tempo os dados ficam com você e o
          que acontece depois. Prazos claros também ajudam você a não acumular
          mensagens antigas sem motivo.
        </p>
        <ol>
          <li>
            Defina um prazo para cada tipo de dado: mensagens de contato que
            não viraram atendimento, inscrições de newsletter, registros
            técnicos.
          </li>
          <li>
            Diga o que acontece ao fim do prazo: exclusão ou anonimização.
          </li>
          <li>
            Descreva as medidas de segurança em termos gerais: senhas fortes,
            verificação em duas etapas, acesso restrito.
          </li>
          <li>
            Lembre que o prontuário tem prazos próprios, definidos pelas
            normas do CFP, e não segue os prazos do site.
          </li>
        </ol>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Mensagens de contato
          que não resultam em atendimento são apagadas em até seis meses.”
        </p>
        <p>
          <strong>Erro comum:</strong> prometer “segurança total” ou “seus dados
          100% protegidos”. Nenhum sistema garante isso, e a promessa pode ser
          lida como propaganda enganosa pelo{" "}
          <a href={CDC} {...ext}>
            Código de Defesa do Consumidor
          </a>
          . Descreva o que você faz, sem garantir o impossível. O guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          traz cuidados de segurança para o canal mais usado no primeiro
          contato.
        </p>
      </section>

      <section>
        <h2>8. Mostre como a pessoa exerce os direitos</h2>
        <p>
          O art. 18 da LGPD lista os direitos do titular. A política explica
          quais são, em linguagem simples, e como pedir cada um.
        </p>
        <ul>
          <li>
            Confirmar se você trata dados dela e ter acesso a eles.
          </li>
          <li>
            Corrigir dados incompletos ou desatualizados.
          </li>
          <li>
            Pedir a eliminação de dados tratados com consentimento e revogar o
            consentimento.
          </li>
          <li>
            Saber com quem os dados foram compartilhados.
          </li>
          <li>
            Reclamar à{" "}
            <a href={ANPD} {...ext}>
              ANPD
            </a>{" "}
            se achar que os direitos não foram respeitados.
          </li>
        </ul>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Você pode pedir, a
          qualquer momento, acesso, correção ou exclusão dos seus dados,
          escrevendo para privacidade@exemplo.com.br. Respondemos em até 15
          dias. Se achar que seus direitos não foram respeitados, você pode
          procurar a ANPD.”
        </p>
        <p>
          <strong>Erro comum:</strong> exigir cópia de documento para pedidos
          simples, como sair da newsletter. O descadastro fica sempre a um
          clique.
        </p>
      </section>

      <section>
        <h2>9. Date, escreva simples e atualize</h2>
        <p>
          A última seção traz a data da versão e como você avisa mudanças. O
          texto inteiro, do começo ao fim, precisa ser compreensível para quem
          não é da área jurídica.
        </p>
        <ol>
          <li>
            Data da última atualização no topo ou no fim da página.
          </li>
          <li>
            Frases curtas, sem latim e sem “doravante denominado”.
          </li>
          <li>
            Revisão sempre que o site ganhar ou perder um formulário ou uma
            ferramenta.
          </li>
          <li>
            Link para a política no rodapé e ao lado de cada formulário.
          </li>
        </ol>
        <p>
          <strong>Trecho de exemplo (fictício):</strong> “Esta política foi
          atualizada em março de 2026.”
        </p>
        <p>
          <strong>Erro comum:</strong> uma política de 15 páginas em letras
          miúdas. A LGPD pede informação clara; uma página com estes 9 títulos
          cumpre melhor esse papel. O guia de{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>{" "}
          mostra como escrever respostas curtas para dúvidas parecidas.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na política de privacidade</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na política de privacidade do site de psicólogo"
            tabIndex={0}
          >
            <caption>Política de privacidade para site de psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsável</td>
                <td>Seu nome, CRP e um e-mail que você lê</td>
                <td>A agência ou a plataforma como responsável</td>
              </tr>
              <tr>
                <td>Coleta</td>
                <td>Lista do que o seu site coleta de fato</td>
                <td>Texto copiado que cita ferramentas que você não usa</td>
              </tr>
              <tr>
                <td>Finalidade</td>
                <td>“Para responder à sua mensagem”</td>
                <td>“Para fins de marketing e parcerias”</td>
              </tr>
              <tr>
                <td>Saúde</td>
                <td>Pedir que detalhes clínicos fiquem para a conversa</td>
                <td>Campo obrigatório “descreva o motivo da procura”</td>
              </tr>
              <tr>
                <td>Cookies</td>
                <td>Aceitar e recusar com o mesmo destaque</td>
                <td>“Ao continuar navegando, você concorda”</td>
              </tr>
              <tr>
                <td>Segurança</td>
                <td>Descrever as medidas que você adota</td>
                <td>“Seus dados 100% protegidos”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem política: uma revisão rápida</h2>
        <p>
          Se o seu site já tem uma política, pergunte: o nome e o contato da
          responsável são os seus? Cada formulário e ferramenta aparece no
          texto, e só eles? O texto separa o site do atendimento? Há data de
          atualização recente?
        </p>
        <p>
          Depois, abra o site numa janela anônima. Se pixels, mapas ou vídeos
          de terceiros carregam antes de qualquer aceite, a correção é técnica:
          essas ferramentas só podem carregar depois dele.
        </p>
        <p>
          Por fim, confira se a caixa de consentimento de cada formulário leva
          à política. Se a revisão mostrar muitos ajustes, o guia de{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>{" "}
          ajuda nessa decisão.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Quando o site fala com pais, os dados de crianças entram em cena. O
          art. 14 da LGPD exige que o tratamento de dados de crianças e
          adolescentes seja feito no melhor interesse deles. Na prática, o formulário do site não deveria
          pedir nome, idade, escola ou diagnóstico da criança.
        </p>
        <p>
          Pais de crianças autistas costumam querer contar tudo logo: o laudo,
          a escola, as terapias anteriores. Um aviso ao lado do campo de
          mensagem acolhe isso: essas informações são importantes e serão
          conversadas na primeira consulta.
        </p>
        <p>
          Se você usa uma ferramenta de agenda ou de questionário inicial para
          famílias, confira onde ficam os dados e quem tem acesso, e cite essa
          ferramenta na política. Laudos e relatórios enviados por e-mail
          precisam de cuidado: combine com a família um canal seguro antes de
          receber documentos. O guia de{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>{" "}
          trata do primeiro contato nesse serviço.
        </p>
      </section>

      <section>
        <h2>Erros comuns na política de privacidade do psicólogo</h2>
        <ul>
          <li>Usar um texto genérico copiado de outro site ou gerado pela plataforma.</li>
          <li>Colocar a agência ou a hospedagem como responsável pelos dados.</li>
          <li>Esquecer pixels, mapas e vídeos incorporados.</li>
          <li>Pedir motivo da procura como campo obrigatório no formulário.</li>
          <li>Não separar o site do atendimento e do prontuário.</li>
          <li>Banner de cookies com um botão só ou recusa escondida.</li>
          <li>Prometer segurança total.</li>
          <li>Não ter data de atualização nem canal de contato.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da política de privacidade</h2>
        <ul>
          <li>Responsável identificada com nome, CRP e e-mail de contato.</li>
          <li>Inventário de formulários, WhatsApp, agenda, newsletter e ferramentas.</li>
          <li>Finalidade e base legal para cada dado.</li>
          <li>Seção que separa o site do atendimento e cita o sigilo.</li>
          <li>Operadores e transferência internacional informados.</li>
          <li>Cookies por categoria, com escolha livre e reversível.</li>
          <li>Prazos de guarda e medidas de segurança descritos sem promessa.</li>
          <li>Direitos do art. 18 e como pedir cada um.</li>
          <li>Data de atualização e link no rodapé e nos formulários.</li>
          <li>Revisão por um advogado antes de publicar.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          formulários que pedem só o necessário, ferramentas que carregam
          depois do aceite e cada texto revisado pelo art. 20. Tudo é
          apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a política do seu site ainda é o texto genérico da plataforma,
          marque uma conversa de 15 minutos.
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
            , arts. 5º, 7º, 9º, 11, 14 e 18.
          </li>
          <li>
            Autoridade Nacional de Proteção de Dados.{" "}
            <a href={COOKIES} {...ext}>
              Guia orientativo: cookies e proteção de dados pessoais
            </a>
            .
          </li>
          <li>
            Autoridade Nacional de Proteção de Dados.{" "}
            <a href={PEQUENO_PORTE} {...ext}>
              Resolução CD/ANPD nº 2, de 27 de janeiro de 2022
            </a>{" "}
            — agentes de tratamento de pequeno porte, arts. 2º, 3º, 4º e 11.
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 9º e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={TDICS} {...ext}>
              Resolução do CFP que disciplina o uso de tecnologias digitais
            </a>{" "}
            (Resolução CFP nº 9/2024).
          </li>
          <li>
            Brasil.{" "}
            <a href={CDC} {...ext}>
              Lei nº 8.078/1990 — Código de Defesa do Consumidor
            </a>
            , art. 37.
          </li>
        </ul>
      </section>
    </>
  )
};
