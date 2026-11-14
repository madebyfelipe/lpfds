import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const CDC = "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm";

export const post: Post = {
  slug: "manual-boas-vindas-consultorio",
  title: "Manual de boas-vindas do consultório de psicologia: o que incluir em 9 blocos",
  description:
    "Como montar o manual de boas-vindas do consultório de psicologia: horários, faltas, sigilo, contato, LGPD e a versão para pais, dentro do Código de Ética.",
  keyword: "manual de boas-vindas consultório de psicologia",
  tags: ["identidade-visual", "presenca-digital"],
  publishedAt: "2026-11-14",
  summary:
    "O manual de boas-vindas é um documento curto que a psicóloga entrega no início do acompanhamento com os combinados do consultório: como agendar, duração das sessões, faltas e remarcações, pagamento, sigilo e seus limites, canais de contato e o que fazer numa urgência. O Código de Ética pede acordos que respeitem os direitos de quem é atendido e que o valor seja comunicado antes do início (arts. 1º e 4º). Ele não substitui a conversa nem o contrato, mas evita mal-entendidos e mostra a marca do consultório no primeiro contato.",
  faq: [
    {
      q: "O que colocar no manual de boas-vindas do consultório de psicologia?",
      a: "Apresentação do consultório, como funcionam o agendamento e a duração das sessões, a política de faltas e remarcações, forma de pagamento e recibos, sigilo e seus limites, canais e horários de contato, orientação para urgências, atendimento online (se houver) e como seus dados pessoais são tratados."
    },
    {
      q: "Manual de boas-vindas substitui o contrato terapêutico?",
      a: "Não. O manual explica os combinados em linguagem simples; o contrato, quando existe, formaliza a prestação do serviço. Muitos consultórios usam o manual como anexo do contrato ou como resumo dele. A conversa no primeiro atendimento continua necessária, porque o art. 1º, alínea f, do Código pede que a pessoa seja informada sobre o trabalho a ser realizado."
    },
    {
      q: "Posso cobrar falta sem aviso prévio?",
      a: "O Código de Ética não proíbe, mas a regra precisa ser combinada antes, por escrito e de forma clara, e aplicada do mesmo jeito para todos. O manual é o lugar para registrar o prazo de aviso e o que acontece em caso de falta. Situações excepcionais podem ser avaliadas caso a caso."
    },
    {
      q: "Posso publicar o manual de boas-vindas no site?",
      a: "Pode publicar uma versão com o funcionamento geral: como agendar, sigilo, canais e urgências. Deixe fora o valor da sessão, porque o art. 20, alínea d, proíbe usar preço como forma de propaganda. O valor vai na versão entregue a quem já está iniciando o acompanhamento."
    }
  ],
  cover: {
    src: "/blog/manual-boas-vindas-consultorio/manual-boas-vindas-consultorio-caderno-mesa.jpg",
    alt: "Caderno, óculos, lápis e um vaso com planta sobre uma mesa branca",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mãe manda mensagem às 23h perguntando se pode trazer o irmão mais
        novo para a sessão. Um paciente falta pela terceira vez sem avisar e
        se surpreende com a cobrança. Outro pergunta se você atende no
        feriado. Quase todo atrito do dia a dia do consultório nasce de um
        combinado que ficou só na conversa do primeiro dia e se perdeu.
      </p>
      <p>
        O manual de boas-vindas resolve isso. É um documento curto, com a
        marca do consultório, que reúne as regras de funcionamento em
        linguagem simples e fica com a pessoa atendida (ou com a família)
        para consulta. Abaixo estão o que dizem as normas, os nove blocos que
        o manual precisa ter, como escrever cada um, a versão para pais de
        crianças neurodivergentes e um checklist final.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Não existe norma do CFP que obrigue a ter um manual de boas-vindas.
          Mas o{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          dá a base para ele. O art. 1º, alínea e, pede acordos de prestação de
          serviços “que respeitem os direitos do usuário”; a alínea f manda
          fornecer informações sobre o trabalho a ser realizado e seu
          objetivo. O art. 4º, alínea b, diz que o valor é estipulado e
          comunicado “antes do início do trabalho”.
        </p>
        <p>
          O sigilo está no art. 9º e os limites dele no art. 10; no atendimento
          de crianças e adolescentes, o art. 13 manda comunicar aos responsáveis
          “o estritamente essencial”. Se há atendimento online, vale a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>
          , que revogou a Resolução 11/2018. Como o manual pede e guarda dados
          pessoais, entra a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>
          ; e, como é uma relação de consumo, o{" "}
          <a href={CDC} {...ext}>
            Código de Defesa do Consumidor
          </a>{" "}
          pede informação clara sobre o serviço (art. 6º, III).
        </p>
      </section>

      <section>
        <h2>Para que serve o manual (e o que ele não faz)</h2>
        <p>
          O manual serve para que os combinados sobrevivam ao primeiro dia. Na
          primeira sessão a pessoa está ansiosa, presta atenção no que sente e
          não na política de remarcação. Ter tudo escrito evita que você
          repita as mesmas explicações e protege os dois lados.
        </p>
        <ol>
          <li>
            <strong>Informa:</strong> como agendar, quanto dura a sessão, como
            pagar, como falar com você.
          </li>
          <li>
            <strong>Alinha expectativas:</strong> o que acontece numa falta, em
            quanto tempo você responde mensagens, o que não é feito por
            WhatsApp.
          </li>
          <li>
            <strong>Mostra a marca:</strong> é uma das primeiras peças que a
            pessoa recebe. Cor, tipografia e tom de voz contam.
          </li>
        </ol>
        <p>
          O que ele não faz: não substitui a conversa sobre o trabalho
          terapêutico, não é contrato assinado (a não ser que você o use como
          anexo) e não serve para divulgar. Ele é para quem já decidiu começar.
        </p>
        <p>
          <strong>Erro comum:</strong> um manual de dez páginas com tom de
          regulamento. Se ninguém lê, não alinha nada. Mantenha entre uma e
          três páginas e use o mesmo{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz do consultório
          </Link>{" "}
          que aparece no site.
        </p>
      </section>

      <section>
        <h2>Bloco 1: apresentação e como funciona o acompanhamento</h2>
        <p>
          Abra com uma saudação curta e com o que a pessoa precisa saber para
          começar. Nada de currículo longo: a formação já está no site e na
          página sobre você.
        </p>
        <ul>
          <li>Nome completo, a palavra psicóloga e CRP.</li>
          <li>O que é o primeiro atendimento e o que vem depois dele.</li>
          <li>Frequência e duração das sessões.</li>
          <li>Endereço, como chegar, acessibilidade do prédio.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Que bom que você chegou. As sessões
          duram 50 minutos e acontecem uma vez por semana, no mesmo dia e
          horário. Nas primeiras semanas, vamos entender juntos o que trouxe
          você até aqui e combinar os próximos passos.”
        </p>
        <p>
          <strong>Erro comum:</strong> prometer o que a terapia vai trazer
          (“aqui você vai superar a ansiedade”). O manual também é comunicação
          do consultório e não pode ter previsão taxativa de resultado. Para a
          parte sobre você, use a mesma base da{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            página sobre mim
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Bloco 2: agendamento, faltas e remarcações</h2>
        <p>
          Este é o bloco que mais evita conflito. Escreva a regra de forma
          direta, com prazos em horas, e aplique igual para todos.
        </p>
        <ol>
          <li>Como agendar e remarcar (canal e antecedência).</li>
          <li>Prazo de aviso para remarcar sem cobrança.</li>
          <li>O que acontece numa falta sem aviso.</li>
          <li>Tolerância para atrasos e se a sessão termina no horário.</li>
          <li>Férias, feriados e recessos: como você avisa.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Remarcações avisadas com 24 horas de
          antecedência não são cobradas. Faltas sem aviso são cobradas
          normalmente, porque o horário fica reservado para você. Se houver
          atraso, a sessão termina no horário combinado.”
        </p>
        <p>
          <strong>Erro comum:</strong> regra vaga (“avisar com antecedência”)
          que vira discussão a cada falta. Defina um número. Se você usa
          agenda online, a regra precisa aparecer também lá; o post sobre{" "}
          <Link href="/blog/agendamento-online-psicologo" className="inst-link">
            agendamento online para psicólogo
          </Link>{" "}
          mostra onde.
        </p>
      </section>

      <section>
        <h2>Bloco 3: valor, pagamento e recibos</h2>
        <p>
          O art. 4º do Código pede que o valor seja comunicado antes do início
          do trabalho. O manual entregue a quem vai começar é um bom lugar para
          isso, junto com a forma de pagamento.
        </p>
        <ul>
          <li>Valor da sessão e se há reajuste (com qual periodicidade).</li>
          <li>Forma e data de pagamento (por sessão, mensal).</li>
          <li>Emissão de recibo ou nota fiscal e para que serve (reembolso, imposto de renda).</li>
          <li>Se atende por convênio ou só particular com reembolso.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “O pagamento é feito até o dia 10 de
          cada mês, por Pix ou transferência. Emito recibo mensal com os
          dados necessários para reembolso do plano de saúde.”
        </p>
        <p>
          <strong>Erro comum:</strong> colocar o valor na versão pública do
          manual, no site. Aí ele vira propaganda com preço, o que o art. 20,
          alínea d, proíbe. Tenha duas versões: a pública, sem valor, e a
          entregue no início, com valor. Detalhes no post{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>
        </p>
      </section>

      <section>
        <h2>Bloco 4: sigilo e seus limites</h2>
        <p>
          Explique o sigilo em linguagem simples e diga, com honestidade, que
          ele tem limites. As pessoas confiam mais quando sabem onde a regra
          termina.
        </p>
        <ol>
          <li>O que é sigilo e o que ele protege (art. 9º).</li>
          <li>
            Em que situações excepcionais ele pode ser quebrado, com a decisão
            baseada no menor prejuízo e restrita ao necessário (art. 10).
          </li>
          <li>
            No atendimento de crianças e adolescentes, o que os responsáveis
            recebem: o estritamente essencial para medidas em benefício deles
            (art. 13).
          </li>
          <li>Como são guardados os registros dos atendimentos.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “O que é conversado aqui fica aqui. Em
          situações excepcionais, previstas no Código de Ética, posso
          compartilhar o estritamente necessário para proteger você ou outra
          pessoa. Se isso acontecer, conversaremos antes sempre que possível.”
        </p>
        <p>
          <strong>Erro comum:</strong> escrever “sigilo absoluto”. Não é o que
          o Código diz, e a promessa pode virar problema numa situação de
          risco.
        </p>
      </section>

      <section>
        <h2>Bloco 5: canais de contato e urgências</h2>
        <p>
          Diga por onde a pessoa fala com você, para quê e em quanto tempo você
          costuma responder. E diga com clareza o que fazer numa urgência,
          porque o consultório não funciona 24 horas.
        </p>
        <ul>
          <li>Canal para agendar e remarcar (WhatsApp, e-mail, agenda online).</li>
          <li>Horário em que você responde mensagens.</li>
          <li>O que não é tratado por mensagem (assuntos da terapia ficam para a sessão).</li>
          <li>
            Em urgência: SAMU (192), CVV (188), pronto-socorro ou CAPS da
            cidade.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Respondo mensagens de segunda a sexta,
          das 9h às 18h. Assuntos da terapia, vamos guardar para a sessão. Em
          situação de urgência, ligue 192 (SAMU) ou 188 (CVV).”
        </p>
        <p>
          <strong>Erro comum:</strong> deixar o número pessoal como canal único
          e responder de madrugada. O cliente aprende que pode. O post sobre{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          mostra como separar os canais e usar mensagem de ausência.
        </p>
      </section>

      <section>
        <h2>Blocos 6 a 9: online, dados, documentos e encerramento</h2>
        <p>
          Os últimos blocos são curtos, mas fazem diferença quando a dúvida
          aparece.
        </p>
        <h3>6. Atendimento online</h3>
        <p>
          Se você atende online, diga qual plataforma usa, como a pessoa entra,
          o cuidado com ambiente privado e o que acontece se a conexão cair.
          Esse atendimento segue a Resolução CFP nº 9/2024.
        </p>
        <h3>7. Dados pessoais</h3>
        <p>
          Quais dados você pede, para quê, onde guarda e como a pessoa pode
          pedir acesso ou correção. Dado de saúde é dado sensível (art. 5º, II,
          e art. 11 da LGPD).
        </p>
        <h3>8. Documentos</h3>
        <p>
          Como pedir declaração de comparecimento, relatório ou recibo, e o
          prazo para entrega.
        </p>
        <h3>9. Encerramento e interrupções</h3>
        <p>
          Como funciona o encerramento combinado, o que acontece numa pausa
          longa e como você avisa se precisar interromper o trabalho.
        </p>
        <p>
          <strong>Erro comum:</strong> esquecer o bloco de dados pessoais. Ele
          é o mais curto e o que mostra cuidado com a LGPD. O e-mail que envia o
          manual também conta; veja{" "}
          <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
            e-mail profissional para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Formato, design e entrega</h2>
        <p>
          O manual é uma peça da identidade do consultório. Ele precisa ter a
          mesma cara do site, do cartão e das redes, e ser fácil de ler no
          celular, que é onde a maioria vai abrir.
        </p>
        <ol>
          <li>PDF de uma a três páginas, com as cores e a tipografia da marca.</li>
          <li>Títulos curtos por bloco, para quem quer achar uma regra rápido.</li>
          <li>Fonte em tamanho legível e bom contraste entre texto e fundo.</li>
          <li>Entrega por e-mail depois do agendamento e uma cópia impressa na recepção, se houver.</li>
          <li>Data da versão no rodapé, para saber qual vale.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga manda o PDF junto com a
          confirmação do primeiro horário e, na primeira sessão, pergunta se
          ficou alguma dúvida. A conversa sobre regras leva dois minutos em vez
          de quinze.
        </p>
        <p>
          <strong>Erro comum:</strong> fazer o manual no editor de texto, com
          fonte padrão. Se você já tem{" "}
          <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
            manual de marca
          </Link>
          , ele diz quais cores e fontes usar; se não tem, as peças de{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria do consultório
          </Link>{" "}
          seguem o mesmo padrão.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no manual de boas-vindas</h2>
        <div className="inst-blog__table" role="region" aria-label="Manual de boas-vindas: o que incluir e o que evitar" tabIndex={0}>
          <table>
            <caption>Manual de boas-vindas: o que incluir e o que evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apresentação</td>
                <td>Nome, CRP, como funciona o acompanhamento</td>
                <td>Promessa de resultado ou de prazo</td>
              </tr>
              <tr>
                <td>Faltas</td>
                <td>Prazo de aviso em horas e regra igual para todos</td>
                <td>Regra vaga ou aplicada caso a caso sem critério</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>Valor e forma de pagamento na versão entregue no início</td>
                <td>Valor na versão pública do site</td>
              </tr>
              <tr>
                <td>Sigilo</td>
                <td>Explicar o sigilo e seus limites</td>
                <td>Prometer “sigilo absoluto”</td>
              </tr>
              <tr>
                <td>Contato</td>
                <td>Canais, horários e telefones de urgência</td>
                <td>Número pessoal como canal único, sem horário</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem um manual: versões e revisão</h2>
        <p>
          Quem já tem o básico pode separar versões por público. Adultos,
          adolescentes e responsáveis por crianças precisam de informações
          diferentes, e um documento único tende a ficar confuso para todos.
        </p>
        <p>
          Revise o manual quando mudar algo concreto: endereço, valor, regra de
          faltas, plataforma de atendimento online. Guarde as versões antigas
          com data, para saber qual combinado valia para cada pessoa. E, se um
          tipo de dúvida aparece toda semana, é sinal de que falta um bloco ou
          que um bloco está mal escrito.
        </p>
        <p>
          Para adolescentes, vale um texto à parte, escrito para eles, sobre o
          que fica entre vocês e o que os responsáveis recebem. O post sobre{" "}
          <Link href="/blog/marca-psicologo-adolescentes" className="inst-link">
            marca para psicólogo que atende adolescentes
          </Link>{" "}
          trata dessa conversa dupla.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para essas famílias, o manual faz ainda mais diferença. Muitos pais
          estão no começo de uma rotina cheia de terapias, com agendas que se
          sobrepõem, e qualquer previsibilidade ajuda. A criança, por sua vez,
          pode precisar saber antes como será o espaço.
        </p>
        <ul>
          <li>
            <strong>Uma versão para os pais</strong>, com o que eles recebem de
            devolutiva, a frequência das conversas de orientação e como o
            sigilo funciona com a criança.
          </li>
          <li>
            <strong>Uma página visual para a criança</strong>, com fotos do
            espaço vazio (porta, sala, banheiro) e uma sequência simples do que
            acontece na sessão. Isso antecipa e reduz surpresas.
          </li>
          <li>
            <strong>Informações sensoriais</strong>: se a sala tem luz mais
            baixa, se há fones abafadores, se a família pode avisar sobre
            sensibilidades antes.
          </li>
          <li>
            <strong>Regras de falta pensadas para a realidade</strong>: crises
            e imprevistos acontecem. Você pode manter a regra e dizer como
            avalia situações excepcionais.
          </li>
        </ul>
        <p>
          Use linguagem respeitosa e sem rótulos; o post sobre{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          traz exemplos, e o de{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório sensorialmente acessível
          </Link>{" "}
          ajuda a descrever o espaço.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Manual longo demais, com tom de regulamento.</li>
          <li>Regras de falta sem prazo definido.</li>
          <li>Valor da sessão publicado no site.</li>
          <li>“Sigilo absoluto” e nenhuma palavra sobre limites.</li>
          <li>Sem orientação para urgência.</li>
          <li>Visual sem a marca do consultório, com cara de rascunho.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do manual de boas-vindas</h2>
        <ul>
          <li>Nome completo, psicóloga e CRP no cabeçalho.</li>
          <li>Agendamento, duração e frequência das sessões.</li>
          <li>Faltas e remarcações com prazo em horas.</li>
          <li>Valor e pagamento só na versão entregue no início.</li>
          <li>Sigilo e seus limites.</li>
          <li>Canais, horários de resposta e telefones de urgência.</li>
          <li>Atendimento online, dados pessoais, documentos e encerramento.</li>
          <li>Versão para pais e página visual para a criança, se você atende crianças.</li>
          <li>Data da versão no rodapé.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão de dois dias define o posicionamento e o
          tom de voz do consultório, e a identidade visual sai desse trabalho,
          pronta para aplicar em peças como o manual de boas-vindas, a
          papelaria e o site, sempre revisada pelo art. 20. A marca vai ao ar em
          45 dias. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu consultório ainda entrega os combinados num documento sem
          cara de marca, marque uma conversa de 15 minutos.
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
            , arts. 1º (alíneas e e f), 4º, 9º, 10, 13 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            (atendimento mediado por tecnologias digitais).
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 5º, II, e art. 11.
          </li>
          <li>
            Brasil.{" "}
            <a href={CDC} {...ext}>
              Lei nº 8.078/1990 — Código de Defesa do Consumidor
            </a>
            , art. 6º, III.
          </li>
        </ul>
      </section>
    </>
  )
};
