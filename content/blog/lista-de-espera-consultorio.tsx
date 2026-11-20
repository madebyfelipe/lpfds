import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const GOOGLE_HORARIOS = "https://support.google.com/business/answer/15300403?hl=pt-BR";

export const post: Post = {
  slug: "lista-de-espera-consultorio",
  title: "Lista de espera no consultório de psicologia: como organizar e comunicar no site, no WhatsApp e no Google",
  description:
    "Lista de espera do consultório de psicologia: o que perguntar, como avisar no site, no WhatsApp e no Google, prazos honestos e o que o art. 20 veta.",
  keyword: "lista de espera consultório de psicologia",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "A lista de espera do consultório de psicologia funciona quando a família sabe o que acontece depois de entrar nela: quais dados você guarda, como e quando vai avisar, o que fazer se a demanda não puder esperar e quando o nome sai da lista. No site, no WhatsApp e no Google, a comunicação é a mesma e sem pressão: nada de “últimas vagas” nem de promessa de prazo. Pedir só o necessário e indicar colegas quando a espera for longa protege a pessoa e cumpre o Código de Ética e a LGPD.",
  faq: [
    {
      q: "Psicólogo pode ter lista de espera?",
      a: "Pode. Nenhuma norma do CFP proíbe a lista de espera. O que o Código de Ética pede é informação clara sobre o serviço (art. 1º, f), não induzir ninguém a recorrer aos seus serviços (art. 2º, i) e sugerir outros psicólogos quando você não puder seguir com o atendimento (art. 1º, k). Na prática, isso quer dizer explicar como a lista funciona e oferecer alternativas quando a espera não servir à pessoa."
    },
    {
      q: "O que perguntar no formulário da lista de espera?",
      a: "Só o que você precisa para chamar a pessoa: nome, contato, quem será atendido (adulto, criança ou adolescente), modalidade (presencial ou online) e turnos possíveis. Detalhes clínicos ficam para o primeiro contato. Pela LGPD, dado de saúde é dado sensível, e o princípio da necessidade pede o mínimo para a finalidade."
    },
    {
      q: "Posso escrever “últimas vagas” para atrair pacientes?",
      a: "Não é recomendado. A cartilha de publicidade do CRP-MG chama de sensacionalista a comunicação que superdimensiona um fato para induzir demanda, e o art. 2º, i, do Código de Ética veda induzir alguém a recorrer aos seus serviços. Informe o estado da agenda com fatos: “agenda completa no momento; há lista de espera para os turnos da manhã”."
    },
    {
      q: "Quanto tempo uma pessoa pode ficar na lista de espera?",
      a: "Não existe prazo fixado em norma. O que funciona é você definir um prazo de validade para o cadastro (por exemplo, 60 ou 90 dias, como exemplo ilustrativo), avisar isso na hora da inscrição e perguntar, ao fim do prazo, se a pessoa ainda quer continuar. Assim a lista não guarda contatos de quem já foi atendido em outro lugar."
    },
    {
      q: "Como avisar no Google que a agenda está cheia?",
      a: "O Perfil da Empresa no Google tem campos de horário e de descrição, e as postagens ajudam em avisos temporários. Use a descrição para dizer como funciona a lista de espera e mantenha os horários reais de atendimento. Evite marcar o perfil como fechado só porque não há vaga: o consultório continua funcionando."
    }
  ],
  cover: {
    src: "/blog/lista-de-espera-consultorio/lista-de-espera-consultorio-prancheta-em-mesa-de-madeira.jpg",
    alt: "Prancheta com folha em branco, lápis e caneta sobre uma mesa de madeira clara, vista de cima",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mensagem chega numa terça à noite: “Oi, vocês atendem criança? É
        para o meu filho de 6 anos, a escola pediu.” Sua agenda está cheia há
        dois meses. Você responde que não há horário, a mãe agradece e some.
        Três semanas depois abre uma vaga, e você já não sabe quem pediu
        primeiro, quem ainda espera e quem conseguiu atendimento em outro
        lugar.
      </p>
      <p>
        A resposta curta: uma lista de espera bem feita tem quatro partes. Um
        cadastro pequeno, que pede só o necessário. Uma regra clara de ordem e
        de contato. Uma saída para quem não pode esperar, com indicação de
        colegas ou serviços. E um prazo de validade, para que ninguém fique
        esquecido. Depois disso, a mesma mensagem vai para o site, para o
        WhatsApp e para o Google, sem pressão e sem promessa de data. Este
        guia mostra como montar cada parte, o que as normas pedem e textos de
        exemplo que você pode adaptar. Se você ainda organiza horários à mão,
        o guia de{" "}
        <Link href="/blog/agendamento-online-psicologo" className="inst-link">
          agendamento online para psicólogo
        </Link>{" "}
        complementa este.
      </p>

      <section>
        <h2>O que dizem as normas sobre a lista de espera</h2>
        <p>
          Nenhuma resolução do CFP trata da lista de espera pelo nome. Ela
          entra nas regras gerais do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          e da proteção de dados. Quatro pontos guiam tudo o que vem a seguir.
        </p>
        <ul>
          <li>
            <strong>Informação clara.</strong> O art. 1º, f, pede que a
            psicóloga informe, a quem de direito, o trabalho a ser realizado e
            o seu objetivo. Quem entra na lista precisa saber o que está
            esperando e como vai ser chamado.
          </li>
          <li>
            <strong>Sem indução.</strong> O art. 2º, i, veda induzir qualquer
            pessoa a recorrer aos seus serviços, e o art. 20, h, veda a
            divulgação sensacionalista. A{" "}
            <a href={CARTILHA} {...ext}>
              cartilha de publicidade profissional do CRP-MG (2026)
            </a>{" "}
            define sensacionalismo como a comunicação que superdimensiona um
            fato para manipular emoções e induzir demanda. “Corra, restam
            duas vagas” cabe nessa definição.
          </li>
          <li>
            <strong>Continuidade.</strong> O art. 1º, k, pede que a psicóloga
            sugira serviços de outros psicólogos quando não puder continuar um
            trabalho. Na espera, o espírito é o mesmo: quem não pode aguardar
            merece uma indicação.
          </li>
          <li>
            <strong>Dados pessoais.</strong> A{" "}
            <a href={LGPD} {...ext}>
              Lei Geral de Proteção de Dados (Lei nº 13.709/2018)
            </a>{" "}
            pede finalidade definida e o mínimo de dados para ela (art. 6º) e
            trata dado de saúde como sensível (art. 5º, II, e art. 11). Um
            campo “descreva o motivo da procura” num formulário aberto coleta
            dado sensível sem necessidade.
          </li>
        </ul>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>
          , sobre publicidade nas redes, lembra que a divulgação pode destacar
          formação, público atendido, abordagem e metodologia, e reforça que é
          vedado induzir qualquer pessoa a recorrer aos seus serviços. Isso
          vale para o post que anuncia a abertura da lista tanto quanto para o
          resto do perfil.
        </p>
      </section>

      <section>
        <h2>1. Decida para quem a lista existe</h2>
        <p>
          Antes do formulário, decida que demandas a lista aceita. Uma lista
          que recebe todo mundo vira uma pilha de contatos que você nunca vai
          conseguir chamar, e a família descobre isso tarde demais.
        </p>
        <ol>
          <li>
            <strong>Público.</strong> Adultos, crianças, adolescentes, casais?
            Se você só atende crianças a partir de certa idade, diga.
          </li>
          <li>
            <strong>Serviço.</strong> Psicoterapia, avaliação, orientação
            parental? Uma lista para cada serviço evita misturar quem espera
            uma avaliação de seis encontros com quem procura acompanhamento
            contínuo.
          </li>
          <li>
            <strong>Modalidade.</strong> Presencial, online ou as duas. A
            vaga que abre às 7h online não serve para quem só pode ir ao
            consultório à tarde.
          </li>
          <li>
            <strong>O que fica de fora.</strong> Situações de urgência e crise
            não cabem em lista de espera. Escreva isso no próprio cadastro e
            diga para onde a pessoa deve ir.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia mantém duas
          listas, “psicoterapia infantil” e “orientação a pais”. Quem entra na
          primeira fica sabendo que a orientação a pais pode começar antes.
        </p>
        <p>
          <strong>Erro comum:</strong> abrir a lista sem filtro e depois
          descobrir que metade das pessoas procura um serviço que você não
          oferece. Se você ainda não tem clareza sobre o que oferece, o guia
          da{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços do psicólogo
          </Link>{" "}
          ajuda a organizar isso antes da lista.
        </p>
      </section>

      <section>
        <h2>2. Monte um cadastro que pede só o necessário</h2>
        <p>
          O cadastro da lista de espera precisa de cinco ou seis campos. Tudo o que é clínico fica para a primeira conversa,
          quando você já pode cuidar daquela informação.
        </p>
        <h3>Campos que bastam</h3>
        <ul>
          <li>Nome de quem faz o contato.</li>
          <li>Telefone ou e-mail, e por qual canal prefere ser chamado.</li>
          <li>Quem será atendido: a própria pessoa, filho ou filha, idade.</li>
          <li>Serviço procurado, a partir da lista que você definiu.</li>
          <li>Modalidade e turnos possíveis.</li>
          <li>Aceite da política de privacidade, com link.</li>
        </ul>
        <h3>Campos que ficam de fora</h3>
        <p>
          Diagnóstico, nome da escola, descrição do comportamento, medicações.
          Pela LGPD, dado de saúde é sensível, e o princípio da necessidade
          pede o mínimo para a finalidade. A finalidade aqui é chamar a pessoa
          quando abrir uma vaga, e para isso o motivo da procura não é
          necessário.
        </p>
        <p>
          <em>Exemplo ilustrativo de aviso no topo do formulário:</em> “Este
          cadastro serve só para eu avisar você quando abrir um horário. Não
          escreva aqui detalhes do que está acontecendo; vamos conversar sobre
          isso no primeiro contato. Seus dados ficam guardados por até 90 dias
          e são apagados se você pedir.”
        </p>
        <p>
          <strong>Erro comum:</strong> usar um formulário genérico de
          contato, com campo aberto de mensagem, como lista de espera. As
          pessoas escrevem o caso inteiro ali, e o seu formulário passa a
          guardar dados sensíveis sem que ninguém tenha planejado isso. A{" "}
          <Link href="/blog/politica-de-privacidade-psicologo" className="inst-link">
            política de privacidade do site do psicólogo
          </Link>{" "}
          precisa descrever esse cadastro, com finalidade e prazo.
        </p>
      </section>

      <section>
        <h2>3. Defina a regra de ordem e diga qual é</h2>
        <p>
          A família aceita esperar quando entende a regra. Ordem de chegada é
          a mais simples de explicar, mas raramente é a única: o turno e a
          modalidade decidem quem pode ocupar a vaga que abriu.
        </p>
        <ol>
          <li>
            <strong>Regra principal:</strong> ordem de inscrição dentro de
            cada lista.
          </li>
          <li>
            <strong>Regra de encaixe:</strong> quando a vaga é num turno
            específico, chama-se a primeira pessoa da lista que marcou aquele
            turno.
          </li>
          <li>
            <strong>Prazo de resposta:</strong> quem é chamado tem, por
            exemplo, 48 horas para confirmar (número ilustrativo; escolha o
            seu). Sem resposta, a vaga vai para a próxima pessoa e a primeira
            continua na lista.
          </li>
          <li>
            <strong>Transparência:</strong> escreva a regra no site e no
            cadastro, com as mesmas palavras.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de texto:</em> “Chamo por ordem de
          inscrição, dentro do turno que você marcou. Quando abrir um horário,
          envio uma mensagem e aguardo sua resposta por 48 horas. Se não
          puder naquele horário, você continua na lista.”
        </p>
        <p>
          <strong>Erro comum:</strong> dar estimativas de prazo que você não
          controla (“em umas duas semanas eu te chamo”). Vagas abrem quando um
          processo termina, e isso não tem data. Prometer prazo e não cumprir
          gera mais frustração do que dizer, com franqueza, que não há
          previsão.
        </p>
      </section>

      <section>
        <h2>4. Ofereça uma saída para quem não pode esperar</h2>
        <p>
          Toda lista de espera precisa de uma porta lateral: o que a pessoa
          faz se a situação não pode aguardar ou se a espera é longa demais.
          Essa é a parte que mais diz sobre o seu cuidado, e a que mais falta
          nos sites de consultório.
        </p>
        <ul>
          <li>
            <strong>Urgência e crise:</strong> diga que a lista não é canal de
            urgência e aponte o caminho. O{" "}
            <a href="https://cvv.org.br/" {...ext}>
              CVV
            </a>{" "}
            atende pelo 188, e serviços de saúde da rede pública (UBS, CAPS,
            pronto atendimento) recebem situações agudas.
          </li>
          <li>
            <strong>Colegas de confiança:</strong> mantenha duas ou três
            indicações por tipo de demanda, combinadas com os colegas. O art.
            1º, j, do Código de Ética fala em solidariedade e colaboração
            entre profissionais.
          </li>
          <li>
            <strong>Serviços-escola e serviços públicos:</strong> clínicas de
            universidades e a rede pública são opções reais para muitas
            famílias.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de mensagem:</em> “Hoje a espera para
          psicoterapia infantil está longa e sem previsão. Se você precisa
          começar logo, posso indicar duas colegas que atendem essa faixa
          etária na região. Em situação de crise, procure o pronto atendimento
          ou ligue 188 (CVV).”
        </p>
        <p>
          <strong>Erro comum:</strong> segurar a pessoa na lista por receio de
          “perder” o contato. Uma indicação bem feita constrói mais confiança
          no seu trabalho do que uma espera longa. Se você quer organizar
          indicações com outros profissionais, o guia de{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria entre psicólogo e pediatra
          </Link>{" "}
          traz um modelo de combinação.
        </p>
      </section>

      <section>
        <h2>5. Comunique a lista no site</h2>
        <p>
          No site, a lista de espera aparece onde a pessoa procura horário: na
          página de contato, na página de cada serviço e nas perguntas
          frequentes. A mensagem é curta, factual e sempre traz o próximo
          passo.
        </p>
        <ol>
          <li>
            <strong>Estado da agenda:</strong> “Agenda completa no momento
            para psicoterapia infantil. Há lista de espera.”
          </li>
          <li>
            <strong>Como entrar:</strong> botão para o cadastro, com o que
            será pedido.
          </li>
          <li>
            <strong>Como funciona:</strong> regra de ordem, prazo de resposta
            e validade do cadastro, em três frases.
          </li>
          <li>
            <strong>Se não puder esperar:</strong> o parágrafo da saída
            lateral, com o 188 e a orientação para urgências.
          </li>
          <li>
            <strong>Identificação:</strong> nome completo e CRP, como pede o
            art. 20, a, em toda divulgação.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de pergunta frequente:</em> “Vocês têm
          horário? Neste momento a agenda de psicoterapia está completa, e a
          de orientação a pais tem vagas às quintas. Para psicoterapia, você
          pode entrar na lista de espera; chamo por ordem de inscrição e
          aviso por mensagem.”
        </p>
        <p>
          <strong>Erro comum:</strong> esquecer de atualizar. O site diz
          “agenda completa” meses depois de abrirem vagas, ou o contrário.
          Coloque a revisão desse texto numa rotina mensal. O guia de{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>{" "}
          mostra onde esse tipo de resposta rende mais.
        </p>
      </section>

      <section>
        <h2>6. Comunique a lista no WhatsApp</h2>
        <p>
          O WhatsApp é por onde a maioria dos pedidos chega, então é ali que a
          lista precisa ser explicada sem você digitar tudo de novo a cada
          conversa. Mensagens salvas e respostas automáticas do WhatsApp
          Business ajudam, desde que soem como você.
        </p>
        <h3>Três mensagens que resolvem quase tudo</h3>
        <ul>
          <li>
            <strong>Primeiro contato com agenda cheia:</strong> agradece, diz
            o estado da agenda, explica a lista e oferece a saída lateral.
          </li>
          <li>
            <strong>Confirmação de inscrição:</strong> diz o que foi
            registrado, a regra de ordem e por quanto tempo o cadastro vale.
          </li>
          <li>
            <strong>Chamado da vaga:</strong> dia, horário, modalidade e o
            prazo para confirmar.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de confirmação:</em> “Pronto, Ana, você
          está na lista de espera para psicoterapia infantil, turno da tarde,
          presencial. Chamo por ordem de inscrição e, quando abrir um horário,
          mando mensagem por aqui. Seu cadastro vale por 90 dias; antes disso,
          pergunto se você ainda quer continuar.”
        </p>
        <p>
          <strong>Erro comum:</strong> resposta automática que já pede
          detalhes do caso (“conte um pouco sobre o que está acontecendo”). A
          conversa fica registrada no celular e, às vezes, num aparelho que
          outra pessoa usa. O guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          traz o cuidado com o aparelho e com as mensagens salvas.
        </p>
      </section>

      <section>
        <h2>7. Comunique a lista no Google</h2>
        <p>
          No Perfil da Empresa no Google, o consultório continua aberto, mesmo
          com a agenda cheia. Os horários mostram quando você atende, e a
          descrição e as postagens contam como funciona a espera.
        </p>
        <ol>
          <li>
            <strong>Horários reais.</strong> Mantenha o horário de
            funcionamento. O Google explica, na{" "}
            <a href={GOOGLE_HORARIOS} {...ext}>
              ajuda sobre horários do Perfil da Empresa
            </a>
            , como editar horários regulares e especiais.
          </li>
          <li>
            <strong>Descrição.</strong> Uma frase sobre a lista: “Agenda de
            psicoterapia infantil com lista de espera; orientação a pais com
            horários às quintas.”
          </li>
          <li>
            <strong>Postagem.</strong> Quando a lista abrir ou fechar, uma
            postagem curta com o link do cadastro.
          </li>
          <li>
            <strong>Respostas a perguntas.</strong> Se alguém perguntar sobre
            horário nas perguntas do perfil, responda com a mesma frase do
            site.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de postagem:</em> “Lista de espera aberta
          para psicoterapia de adolescentes, turnos da manhã e online. O
          cadastro pede só nome, contato e turno. Em urgência, procure o
          pronto atendimento ou ligue 188.”
        </p>
        <p>
          <strong>Erro comum:</strong> marcar o perfil como temporariamente
          fechado porque não há vaga. Quem procura fica com a impressão de que
          o consultório parou de funcionar. O guia do{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          cobre o resto do perfil.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na lista de espera</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na lista de espera do consultório de psicologia"
            tabIndex={0}
          >
            <caption>Lista de espera do consultório: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aviso de agenda</td>
                <td>“Agenda completa; há lista de espera”</td>
                <td>“Últimas vagas”, contagem regressiva, urgência</td>
              </tr>
              <tr>
                <td>Cadastro</td>
                <td>Nome, contato, serviço, turno e aceite</td>
                <td>Campo aberto para descrever o caso</td>
              </tr>
              <tr>
                <td>Prazo</td>
                <td>Regra de ordem e validade do cadastro</td>
                <td>Promessa de data que você não controla</td>
              </tr>
              <tr>
                <td>Quem não pode esperar</td>
                <td>Indicação de colegas, 188 e rede pública</td>
                <td>Segurar a pessoa na lista sem alternativa</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>Informar o valor quando a pessoa pergunta (veja{" "}
                  <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
                    se o psicólogo pode divulgar preço
                  </Link>
                  )</td>
                <td>Preço ou desconto como chamariz para a lista</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>Horários reais e descrição da lista</td>
                <td>Perfil marcado como fechado por falta de vaga</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem lista: revisão e saída da lista</h2>
        <p>
          A lista envelhece rápido: pessoas conseguem atendimento em outro
          lugar ou deixam de precisar. Uma
          revisão periódica mantém a lista honesta e cumpre o que a LGPD pede
          sobre guardar dados só pelo tempo necessário.
        </p>
        <ul>
          <li>
            <strong>Validade com aviso:</strong> perto do fim do prazo do
            cadastro, mande uma mensagem perguntando se a pessoa quer
            continuar. Sem resposta, o cadastro sai e os dados são apagados.
          </li>
          <li>
            <strong>Fechar a lista:</strong> quando a espera passar do
            razoável, feche as inscrições e diga isso no site. Uma lista
            fechada com indicações é mais respeitosa do que uma lista aberta
            que nunca anda.
          </li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para famílias de crianças autistas e neurodivergentes, a espera
          costuma ser parte de uma maratona: fila do neuropediatra, fila da
          avaliação, fila da fonoaudiologia, pedido da escola. A sua lista de
          espera entra nesse percurso, e a forma de comunicar pesa mais.
        </p>
        <ul>
          <li>
            <strong>Diga o que você oferece e o que não oferece.</strong> Se
            você não faz avaliação diagnóstica, diga isso no cadastro, para
            que a família não espere meses por um serviço que você não presta.
          </li>
          <li>
            <strong>Separe as listas por serviço.</strong> Avaliação,
            psicoterapia, orientação parental e grupos têm ritmos diferentes.
            A família pode começar a orientação parental antes da vaga de
            psicoterapia da criança.
          </li>
          <li>
            <strong>Explique a previsibilidade.</strong> Muitas famílias
            organizam a rotina da criança com antecedência. Avisar com clareza
            como será o chamado e quanto tempo há para responder ajuda.
          </li>
          <li>
            <strong>Indique com cuidado.</strong> Tenha indicações de colegas
            que atendem crianças neurodivergentes, combinadas antes, e
            lembre que serviços públicos e serviços-escola também atendem.
          </li>
          <li>
            <strong>Sem apelo à urgência do diagnóstico.</strong> Frases como
            “não perca a janela do desenvolvimento” para empurrar a família à
            lista usam medo como chamariz. Informe com calma e deixe a
            decisão com ela.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>{" "}
          é um bom lugar para explicar a espera da avaliação, quando você a
          oferece.
        </p>
      </section>

      <section>
        <h2>Erros comuns na lista de espera</h2>
        <ul>
          <li>Formulário com campo aberto, que recebe o caso inteiro.</li>
          <li>Prazo prometido que ninguém consegue cumprir.</li>
          <li>“Últimas vagas” e outras frases de urgência no Instagram.</li>
          <li>Lista sem validade, cheia de contatos de meses atrás.</li>
          <li>Nenhuma saída para quem não pode esperar.</li>
          <li>Site, WhatsApp e Google dizendo coisas diferentes.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da lista de espera</h2>
        <ul>
          <li>Públicos, serviços e modalidades da lista definidos.</li>
          <li>Cadastro com cinco ou seis campos, sem campo clínico aberto.</li>
          <li>Regra de ordem, prazo de resposta e validade escritos.</li>
          <li>Saída para urgência (188, rede pública) e indicações de colegas.</li>
          <li>Texto igual no site, no WhatsApp e no Google.</li>
          <li>Política de privacidade descrevendo o cadastro e o prazo.</li>
          <li>Nome completo e CRP em toda divulgação.</li>
          <li>Revisão mensal da lista e do texto do site.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          páginas que explicam serviços, agenda e lista de espera em linguagem
          clara, e cada texto revisado pelo art. 20. Tudo é apresentado em até
          30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua agenda já tem fila e o site ainda não explica isso, marque
          uma conversa de 15 minutos.
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
            , arts. 1º (f, j, k), 2º (i) e 20 (a, h).
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            , seção “Divulgação sensacionalista”.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — publicidade profissional nas redes
              sociais
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 5º, 6º e 11.
          </li>
          <li>
            Google.{" "}
            <a href={GOOGLE_HORARIOS} {...ext}>
              Ajuda do Perfil da Empresa: editar horários
            </a>
            .
          </li>
          <li>
            <a href="https://cvv.org.br/" {...ext}>
              CVV — Centro de Valorização da Vida
            </a>{" "}
            (ligação gratuita pelo 188).
          </li>
        </ul>
      </section>
    </>
  )
};
