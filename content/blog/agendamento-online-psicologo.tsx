import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const RES1_2009 = "https://site.cfp.org.br/wp-content/uploads/2009/04/resolucao2009_01.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const ANPD = "https://www.gov.br/anpd/pt-br";
const CRPSP_REDES = "https://www.crpsp.org/uploads/impresso/352760/teLd9UWz81Ulwgyyt1wjqgS0haUSRsoB.pdf";
const WCAG = "https://www.w3.org/TR/WCAG22/";

export const post: Post = {
  slug: "agendamento-online-psicologo",
  title: "Agendamento online para psicólogo: página, ferramenta e LGPD em 7 decisões",
  description:
    "Como montar o agendamento online do consultório: o que pedir no formulário, como escolher a ferramenta, sigilo, LGPD e o que a página pode dizer pelo art. 20.",
  keyword: "agendamento online para psicólogo",
  tags: ["presenca-digital"],
  publishedAt: "2026-11-13",
  summary:
    "O agendamento online funciona quando pede o mínimo de dados, deixa claro o que acontece depois do clique e roda numa ferramenta que trata os dados com segurança, com contrato que siga a LGPD. Dado de saúde é sensível (art. 5º, II, e art. 11 da LGPD), então o formulário não deve pedir motivo da consulta, e o sigilo do art. 9º do Código de Ética vale também para a agenda. A página segue o art. 20: nome, CRP, sem preço como chamariz e sem promessa.",
  faq: [
    {
      q: "Psicólogo pode ter agendamento online no site ou no Instagram?",
      a: "Pode. Nenhuma norma do CFP proíbe a marcação online. O cuidado está nos dados, que precisam seguir a LGPD e o sigilo do art. 9º do Código de Ética, e na página, que é publicidade profissional e segue o art. 20: nome completo, CRP, nada de preço como chamariz nem promessa de resultado."
    },
    {
      q: "Quais dados posso pedir no formulário de agendamento?",
      a: "Só o necessário para marcar e confirmar: nome, um telefone ou e-mail e a preferência de horário e de modalidade. O princípio da necessidade, do art. 6º da LGPD, pede o mínimo. Motivo da consulta, diagnóstico ou histórico são dados de saúde, sensíveis pelo art. 5º, II, e ficam para o primeiro contato ou a primeira sessão."
    },
    {
      q: "Preciso de cadastro no e-Psi para atender online e agendar pela internet?",
      a: "Não. A Resolução CFP nº 9/2024 revogou a Resolução nº 11/2018 e acabou com o cadastro no e-Psi. Para atender online, basta inscrição ativa no CRP e seguir as regras da resolução, inclusive sobre segurança dos dados."
    },
    {
      q: "Agendamento online ou WhatsApp: qual é melhor para o consultório?",
      a: "Depende da sua rotina. A agenda online reduz troca de mensagens para achar horário e deixa as regras visíveis. O WhatsApp é mais pessoal e muitos pacientes preferem. Muitos consultórios usam os dois: a página explica e permite pedir horário, e a confirmação segue pelo canal que o paciente escolher."
    },
    {
      q: "A ferramenta de agenda pode ficar com o prontuário também?",
      a: "Pode, se ela garantir sigilo, controle de acesso e guarda conforme a Resolução CFP nº 1/2009, sobre registro documental, e se o contrato com o fornecedor seguir a LGPD. Na dúvida, mantenha a agenda separada do prontuário e restrinja quem acessa cada um."
    }
  ],
  cover: {
    src: "/blog/agendamento-online-psicologo/agendamento-online-psicologo-agendamento-online-calendario-e-notebook.jpg",
    alt: "Calendário de mesa, bloco de notas e notebook sobre mesa clara, organização da agenda do consultório",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você termina uma sessão e encontra cinco mensagens perguntando horário.
        Responde à noite, a pessoa vê de manhã, propõe outro dia, você está em
        atendimento. Três dias depois, ela marcou com outra profissional. O
        agendamento online resolve parte disso, mas traz perguntas novas: que
        ferramenta usar, que dados pedir, o que a página pode dizer.
      </p>
      <p>
        A resposta curta: pode e funciona, desde que o formulário peça o mínimo
        (nada de motivo da consulta), a ferramenta trate os dados com segurança e
        contrato adequado à LGPD, e a página siga o art. 20 do Código de Ética.
        Abaixo estão as sete decisões que montam um agendamento online que poupa
        o seu tempo e protege o paciente.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          pede sigilo sobre tudo o que a psicóloga acessa no exercício
          profissional (art. 9º), e o fato de alguém estar marcando consulta já é
          informação protegida. A página de agendamento é divulgação de serviço,
          então segue o art. 20: nome completo, CRP, só títulos que você tem,
          nada de preço como propaganda e nada de previsão taxativa de resultado.
          Para atendimento online, vale a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>
          , que revogou a nº 11/2018 e o cadastro no e-Psi. Se a ferramenta guarda
          registros do atendimento, entra a{" "}
          <a href={RES1_2009} {...ext}>
            Resolução CFP nº 1/2009
          </a>
          , sobre registro documental.
        </p>
        <p>
          A{" "}
          <a href={LGPD} {...ext}>
            Lei Geral de Proteção de Dados
          </a>{" "}
          classifica dado de saúde como sensível (art. 5º, II) e só permite o
          tratamento nas hipóteses do art. 11. O art. 6º pede finalidade e
          necessidade: coletar só o que serve ao propósito declarado. Na relação
          com a ferramenta, você costuma ser a controladora, e o fornecedor, o
          operador, que trata os dados segundo as suas instruções (art. 39). O
          art. 46 exige medidas de segurança. A{" "}
          <a href={ANPD} {...ext}>
            ANPD
          </a>{" "}
          publica guias sobre esses papéis. O CRP-SP lembra, na série{" "}
          <a href={CRPSP_REDES} {...ext}>
            sobre redes e aplicativos de mensagens
          </a>
          , que o Código de Ética vale também nas interações virtuais.
        </p>
      </section>

      <section>
        <h2>Decisão 1: agenda aberta ou pedido de horário</h2>
        <p>
          Há dois modelos, e a escolha depende de como você faz a primeira
          conversa. Na agenda aberta, a pessoa escolhe o horário e ele já fica
          reservado. No pedido de horário, ela indica preferências e você
          confirma.
        </p>
        <ul>
          <li>
            <strong>Agenda aberta</strong> funciona bem para quem já é paciente ou
            para uma conversa inicial curta, com regras claras.
          </li>
          <li>
            <strong>Pedido de horário</strong> combina com quem faz triagem antes,
            por exemplo para checar se a demanda está na sua área, ou com quem
            atende crianças e precisa conversar primeiro com os responsáveis.
          </li>
          <li>
            <strong>Híbrido:</strong> horários abertos para retornos e pedido de
            horário para primeira consulta.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia que atende
          adolescentes deixa os retornos em agenda aberta, só para quem já está
          em atendimento, e usa um formulário de pedido de horário para novas
          famílias. Assim ela conversa com os responsáveis antes de reservar a
          primeira sessão.
        </p>
        <p>
          <strong>Erro comum:</strong> abrir a agenda inteira para qualquer pessoa
          e descobrir depois que a demanda era de outra área. A página precisa
          dizer para quem é o atendimento, o que liga o agendamento ao seu{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Decisão 2: o que o formulário pede</h2>
        <p>
          Peça só o que precisa para marcar e confirmar. Cada campo a mais é um
          dado a proteger e um motivo para a pessoa desistir.
        </p>
        <ol>
          <li><strong>Nome</strong> (ou como prefere ser chamada).</li>
          <li><strong>Um contato</strong>: telefone ou e-mail, à escolha da pessoa.</li>
          <li><strong>Modalidade</strong>: presencial ou online.</li>
          <li><strong>Preferência de dias e turnos.</strong></li>
          <li>
            <strong>Para atendimento infantil:</strong> nome do responsável e a
            idade da criança, sem pedir diagnóstico.
          </li>
          <li>
            <strong>Aceite</strong> do aviso de privacidade, com link para ele.
          </li>
        </ol>
        <p>
          Motivo da consulta, diagnóstico, medicação e histórico são dados de
          saúde. Eles não precisam passar por um formulário web nem ficar
          guardados na ferramenta de agenda. Se quiser uma ideia do tema, use um
          campo opcional e genérico, como “quer contar algo antes do primeiro
          contato?”, com aviso de que não é necessário.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício tinha um
          formulário com “descreva seus sintomas”. Muitas pessoas escreviam
          parágrafos sobre crises e diagnósticos, que ficavam numa planilha
          compartilhada. Ao trocar o campo por preferência de horário e
          modalidade, a planilha deixou de guardar dado sensível.
        </p>
        <p>
          <strong>Erro comum:</strong> usar um formulário genérico gratuito, sem
          saber onde os dados ficam e quem acessa.
        </p>
      </section>

      <section>
        <h2>Decisão 3: como escolher a ferramenta</h2>
        <p>
          A melhor ferramenta é a que você usa todo dia e que trata os dados com
          segurança. Antes da lista de recursos, confira o básico de proteção.
        </p>
        <ul>
          <li>
            <strong>Contrato e política de privacidade</strong> que digam o papel
            do fornecedor (operador), onde os dados ficam e o que acontece quando
            você cancela.
          </li>
          <li>
            <strong>Acesso com senha forte e verificação em duas etapas.</strong>
          </li>
          <li>
            <strong>Controle de quem vê o quê</strong>, essencial em clínica com
            secretaria ou mais de uma psicóloga.
          </li>
          <li>
            <strong>Exportação e exclusão dos dados</strong>, para atender pedidos
            do titular (art. 18 da LGPD).
          </li>
          <li>
            <strong>Lembretes configuráveis</strong>, com texto que você controla.
          </li>
          <li>
            <strong>Integração com a sua agenda</strong>, para não marcar duas
            pessoas no mesmo horário.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> duas psicólogas fictícias que dividem
          sala testam três sistemas por uma semana cada. Escolhem o que permite
          que cada uma veja só a própria agenda e que a secretária veja horários,
          mas não as anotações.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher pelo preço ou pela aparência e só
          depois ler os termos. Vale ler antes onde os dados ficam e como sair do
          serviço.
        </p>
      </section>

      <section>
        <h2>Decisão 4: o que a página de agendamento diz</h2>
        <p>
          A página é publicidade profissional e responde às dúvidas que fariam a
          pessoa mandar mensagem. Quanto mais clara, menos idas e vindas.
        </p>
        <ul>
          <li>Nome completo, psicóloga e CRP (art. 20, a).</li>
          <li>Para quem é o atendimento e quais modalidades existem.</li>
          <li>Como funciona a primeira consulta e quanto tempo dura.</li>
          <li>O que acontece depois do pedido e em quanto tempo você responde.</li>
          <li>Regras de remarcação e cancelamento, em linguagem simples.</li>
          <li>Link para o aviso de privacidade.</li>
        </ul>
        <p>
          O valor da sessão pode ser informado a quem pergunta ou no momento da
          marcação, mas não deve virar chamariz (“sessão por apenas…”,
          “primeira consulta grátis”). O post{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>{" "}
          detalha esse limite.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> a página de um consultório fictício diz:
          “Depois do pedido, respondo em até um dia útil pelo canal que você
          escolher. A primeira conversa serve para entender o que você busca e
          combinar se o meu trabalho faz sentido para você”.
        </p>
        <p>
          <strong>Erro comum:</strong> frases como “agende agora e comece a
          melhorar hoje”. É promessa de resultado e fere o art. 20, alínea e. O
          texto sobre{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site para psicólogo
          </Link>{" "}
          mostra onde a página entra no site.
        </p>
      </section>

      <section>
        <h2>Decisão 5: confirmações e lembretes</h2>
        <p>
          Lembrete reduz esquecimento, mas cada mensagem automática revela algo.
          Escreva-as pensando em quem pode ver a tela do celular.
        </p>
        <ol>
          <li>
            <strong>Texto neutro:</strong> “Lembrete: seu horário amanhã às 15h
            com Ana Souza”. Evite “sua sessão de terapia” ou “psicoterapia” na
            prévia da notificação, se a pessoa preferir discrição.
          </li>
          <li>
            <strong>Canal escolhido pelo paciente:</strong> pergunte se prefere
            e-mail, SMS ou WhatsApp.
          </li>
          <li>
            <strong>Responsável, no caso de criança:</strong> o lembrete vai para
            quem marcou, não para o celular do adolescente sem combinação.
          </li>
          <li>
            <strong>Link de sessão online</strong> enviado perto do horário e
            individual, nunca uma sala fixa compartilhada.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma paciente fictícia pede que os
          lembretes não mencionem terapia porque divide o computador com a
          família. A psicóloga ajusta o modelo para “seu horário com Ana”.
        </p>
        <p>
          <strong>Erro comum:</strong> mandar lembretes em grupo ou com outros
          pacientes em cópia aberta no e-mail. As mensagens prontas do{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          ajudam a padronizar o tom.
        </p>
      </section>

      <section>
        <h2>Decisão 6: onde colocar o botão</h2>
        <p>
          O agendamento precisa estar a um toque de quem já decidiu. Coloque o
          acesso onde a pessoa termina de ler sobre você.
        </p>
        <ul>
          <li>No topo e no fim da página inicial do site.</li>
          <li>Ao fim de cada página de serviço e da página “sobre”.</li>
          <li>Na bio do Instagram, com texto claro (“pedir horário”).</li>
          <li>No perfil do Google, no campo de agendamento ou site.</li>
        </ul>
        <p>
          Um único link para todos os canais facilita medir de onde vêm os
          pedidos, sem rastreio invasivo. O post sobre{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          mostra como preencher o perfil.
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício troca o “saiba
          mais” genérico do site por “pedir um horário” e passa a mostrar o mesmo
          botão no fim das páginas de serviço.
        </p>
        <p>
          <strong>Erro comum:</strong> esconder o agendamento num menu
          secundário ou usar termos vagos como “contato” para tudo.
        </p>
      </section>

      <section>
        <h2>Decisão 7: acessibilidade do agendamento</h2>
        <p>
          Se a pessoa não consegue usar o formulário, ela não marca. O
          agendamento precisa funcionar no celular, com teclado e com leitor de
          tela.
        </p>
        <ul>
          <li>Cada campo tem rótulo visível, não só texto de exemplo dentro dele.</li>
          <li>Mensagens de erro dizem o que corrigir.</li>
          <li>Contraste suficiente entre texto e fundo, como pedem as{" "}
            <a href={WCAG} {...ext}>
              diretrizes WCAG
            </a>
            .
          </li>
          <li>Botões grandes o bastante para o toque.</li>
          <li>Uma alternativa ao formulário: telefone ou mensagem.</li>
        </ul>
        <p>
          <strong>Erro comum:</strong> calendário que só funciona com o mouse.
          Teste a marcação usando apenas a tecla Tab. O post sobre{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          traz o passo a passo.
        </p>
      </section>

      <section>
        <h2>Agendamento online: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Agendamento online no consultório de psicologia: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Agendamento online no consultório de psicologia: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Formulário com nome, contato, modalidade e horário</td><td>Sim</td></tr>
              <tr><td>Campo obrigatório “descreva seus sintomas”</td><td>Evitar (dado sensível, LGPD art. 11)</td></tr>
              <tr><td>Página com nome completo, CRP e regras de remarcação</td><td>Sim</td></tr>
              <tr><td>“Primeira consulta grátis, agende já”</td><td>Não (art. 20, d)</td></tr>
              <tr><td>Lembrete neutro pelo canal que o paciente escolheu</td><td>Sim</td></tr>
              <tr><td>Planilha aberta com nomes e motivos de consulta</td><td>Não (art. 9º e LGPD art. 46)</td></tr>
              <tr><td>Ferramenta com contrato que define o papel do fornecedor</td><td>Sim</td></tr>
              <tr><td>“Agende e comece a melhorar hoje”</td><td>Não (art. 20, e)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já usa agenda online: revise a cada semestre</h2>
        <p>
          Ferramentas mudam termos, equipes mudam e campos se acumulam. Uma
          revisão curta a cada seis meses evita que o sistema guarde mais do que
          deveria.
        </p>
        <ul>
          <li>Quem tem acesso hoje? Ex-secretárias e ex-sócias ainda entram?</li>
          <li>O formulário ganhou campos que ninguém usa?</li>
          <li>Os pedidos antigos, de quem nunca virou paciente, ainda estão lá? Defina um prazo de exclusão.</li>
          <li>Os termos do fornecedor mudaram?</li>
          <li>Os textos dos lembretes ainda são neutros?</li>
        </ul>
        <p>
          Registre essas decisões num documento simples: quais dados coleta, por
          quê, onde ficam e por quanto tempo. É o começo do registro das
          operações de tratamento que a LGPD prevê no art. 37.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças autistas costumam chegar cansados, com muitas
          consultas na agenda e pouca paciência para trocar dez mensagens. Um
          agendamento claro é, por si só, um sinal de cuidado.
        </p>
        <ul>
          <li>
            <strong>Diga o que acontece na primeira conversa</strong> e se ela é
            com os responsáveis, com a criança ou com os dois.
          </li>
          <li>
            <strong>Não peça laudo nem diagnóstico no formulário.</strong> Se o
            laudo for útil, ele chega depois, por canal seguro.
          </li>
          <li>
            <strong>Ofereça escolhas sensoriais:</strong> horários mais calmos,
            possibilidade de visitar a sala antes, aviso sobre a sala de espera.
            O post sobre{" "}
            <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
              consultório sensorialmente acessível para autistas
            </Link>{" "}
            traz ideias.
          </li>
          <li>
            <strong>Pense em pais neurodivergentes:</strong> texto curto, passos
            numerados e possibilidade de pedir horário por escrito, sem ligação.
          </li>
          <li>
            <strong>Não use “vagas limitadas” para pressionar.</strong> Escassez
            como argumento é propaganda sensacionalista.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia acrescenta à página
          de agendamento uma linha: “Se for melhor para sua família, podemos
          combinar tudo por mensagem escrita”. Os pedidos por texto passam a
          chegar com as informações de que a equipe precisa.
        </p>
      </section>

      <section>
        <h2>Checklist do agendamento online</h2>
        <ul>
          <li>O formulário pede só nome, contato, modalidade e horário.</li>
          <li>Nenhum campo obrigatório pede dado de saúde.</li>
          <li>A ferramenta tem contrato e política que seguem a LGPD.</li>
          <li>O acesso tem verificação em duas etapas e permissões por pessoa.</li>
          <li>A página traz nome completo, CRP, regras e aviso de privacidade.</li>
          <li>Nada de preço como chamariz nem promessa de resultado.</li>
          <li>Lembretes são neutros e vão pelo canal escolhido.</li>
          <li>O formulário funciona no celular, com teclado e com leitor de tela.</li>
          <li>Há prazo para apagar pedidos de quem não virou paciente.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a marca do consultório nasce de uma imersão de dois
          dias que define posicionamento, tom de voz e identidade visual, com a
          marca no ar em 45 dias e cada peça revisada pelo art. 20. O site sai
          com o caminho até o agendamento pensado junto com a marca: textos
          claros, botão no lugar certo e formulário enxuto. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Para conversar sobre o seu consultório, marque 15 minutos.
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
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            (exercício profissional mediado por tecnologias digitais).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES1_2009} {...ext}>
              Resolução CFP nº 1/2009
            </a>{" "}
            (registro documental).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo. Série CRP SP Orienta —{" "}
            <a href={CRPSP_REDES} {...ext}>
              Uso de redes sociais e aplicativos de mensagens instantâneas
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 5º, 6º, 11, 18, 37, 39 e 46.
          </li>
          <li>
            <a href={ANPD} {...ext}>
              Autoridade Nacional de Proteção de Dados (ANPD)
            </a>
            .
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.2
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
