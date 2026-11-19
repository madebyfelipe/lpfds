import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const CDC = "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm";
const CIVIL = "https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const ECA = "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm";

export const post: Post = {
  slug: "contrato-terapeutico-psicologo",
  title: "Contrato terapêutico do psicólogo: o que escrever, 8 cláusulas e como apresentar",
  description:
    "Contrato terapêutico do psicólogo: o que pedem o Código de Ética e a Res. CFP 9/2024, 8 cláusulas, versão para crianças e online e como apresentar.",
  keyword: "contrato terapêutico psicólogo",
  tags: ["divulgacao-etica"],
  publishedAt: "2026-11-17",
  summary:
    "O contrato terapêutico registra os combinados entre a psicóloga e a pessoa atendida: como o trabalho funciona, valor e forma de pagamento, faltas, sigilo e seus limites, canais de contato e encerramento. O Código de Ética pede acordos que respeitem os direitos de quem é atendido e o valor comunicado antes do início; no atendimento online, a Resolução CFP nº 9/2024 lista o que o contrato deve abarcar, inclusive os recursos que protegem o sigilo. Abaixo há 8 cláusulas para revisar com apoio jurídico e um jeito de apresentar o contrato sem burocratizar o primeiro encontro.",
  faq: [
    {
      q: "Contrato terapêutico é obrigatório?",
      a: "O Código de Ética não exige um documento escrito para todo atendimento, mas pede acordos de prestação de serviço que respeitem os direitos da pessoa atendida e que o valor seja comunicado antes do início. No atendimento online, a Resolução CFP nº 9/2024 diz que o contrato pode ser escrito ou verbal e lista o que ele deve abarcar. Ter os combinados por escrito evita mal-entendidos e protege as duas partes."
    },
    {
      q: "O que deve ter no contrato terapêutico?",
      a: "Identificação das partes com CRP, descrição do serviço, frequência e duração das sessões, valor e forma de pagamento, regras de falta e remarcação, sigilo e seus limites, canais de contato, atendimento online quando houver, tratamento de dados e encerramento. No online, entram também os recursos tecnológicos usados, a cláusula de foro e os dados da empresa, quando o atendimento é por pessoa jurídica."
    },
    {
      q: "Contrato terapêutico verbal vale?",
      a: "No atendimento online, a Resolução CFP nº 9/2024 admite contrato escrito ou verbal. No presencial, o combinado verbal também é um acordo, mas fica difícil comprovar o que foi dito. Uma saída comum é conversar sobre tudo no primeiro encontro e entregar o resumo por escrito em seguida."
    },
    {
      q: "Quem assina o contrato terapêutico de criança?",
      a: "O responsável legal. O art. 8º do Código de Ética exige autorização de ao menos um dos responsáveis para o atendimento não eventual de criança ou adolescente. Explique no contrato o que será comunicado aos responsáveis, que, pelo art. 13, é o estritamente essencial para promover medidas em benefício da criança."
    },
    {
      q: "Existe modelo oficial de contrato terapêutico do CFP?",
      a: "Não encontramos modelo oficial publicado pelo CFP. Há modelos em sites de contabilidade e de cursos, mas cada um reflete a prática de quem escreveu. Use-os como ponto de partida e revise com advogado e com as normas atuais, como a Resolução CFP nº 9/2024, que substituiu a 11/2018."
    }
  ],
  cover: {
    src: "/blog/contrato-terapeutico-psicologo/contrato-terapeutico-psicologo-prancheta-com-folha-e-notebook-na-mesa.jpg",
    alt: "Mesa de madeira com prancheta, folha em branco, lápis e notebook aberto, pronta para revisar um contrato terapêutico",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A paciente faltou três sessões seguidas sem avisar e agora pergunta se
        precisa pagar. Outra quer mandar áudios longos no WhatsApp entre as
        sessões. Um pai pede o relatório de tudo o que o filho adolescente diz.
        Quando os combinados ficam só na memória do primeiro encontro, cada uma
        dessas situações vira uma conversa desconfortável, e às vezes uma
        reclamação.
      </p>
      <p>
        A resposta curta é esta: o contrato terapêutico do psicólogo é o
        registro dos combinados do atendimento, escrito em linguagem simples e
        conversado no começo. Ele trata de como o trabalho funciona, valor,
        faltas, sigilo, contato e encerramento, e no atendimento online segue o
        que a Resolução CFP nº 9/2024 pede. Este guia mostra o que as normas
        dizem, 8 cláusulas para revisar com apoio jurídico, ajustes para
        crianças e online, e como apresentar o contrato de um jeito que reforça
        a sua marca. Ele complementa o guia de{" "}
        <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
          manual de boas-vindas do consultório
        </Link>
        , que é a versão mais leve desses combinados.
      </p>
      <p>
        <em>
          Este conteúdo é informativo e não substitui orientação jurídica. Para
          o texto final do seu contrato, conte com um advogado e consulte o CRP
          da sua região.
        </em>
      </p>

      <section>
        <h2>O que dizem as normas sobre o contrato terapêutico</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          não traz um modelo, mas define o que os combinados precisam
          respeitar. O art. 1º pede acordos de prestação de serviço que
          respeitem os direitos de quem é atendido (alínea e) e informações
          sobre o trabalho e seu objetivo (alínea f). O art. 4º diz que o valor
          é estipulado conforme a atividade e comunicado antes do início do
          trabalho. Os arts. 9º e 10 tratam do sigilo e das situações em que ele
          pode ser quebrado, e o art. 14 exige que a pessoa saiba desde o início
          se haverá algum meio de registro.
        </p>
        <p>
          Para o atendimento online, a{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          é mais detalhada. O art. 7º diz que o contrato pode ser escrito ou
          verbal e deve abarcar: características do trabalho, direitos e deveres
          das partes; os recursos tecnológicos usados; cláusula de foro na
          jurisdição da inscrição principal da psicóloga; e os dados da empresa,
          quando o atendimento é por pessoa jurídica. O parágrafo único obriga a
          informar quais recursos garantem o sigilo.
        </p>
        <p>
          Fora das normas da profissão, o contrato é uma prestação de serviço
          regida pelo{" "}
          <a href={CIVIL} {...ext}>
            Código Civil
          </a>{" "}
          (arts. 593 a 609) e, quando há relação de consumo, pelo{" "}
          <a href={CDC} {...ext}>
            Código de Defesa do Consumidor
          </a>
          , que garante informação clara (art. 6º, III). Os dados de saúde
          coletados são sensíveis pela{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>
          .
        </p>
      </section>

      <section>
        <h2>1. Identificação das partes e do serviço</h2>
        <p>
          O contrato começa dizendo quem atende, quem é atendido e qual serviço
          está sendo combinado. Parece óbvio, mas é a parte que mais aparece
          incompleta nos modelos prontos.
        </p>
        <ul>
          <li>Nome completo da psicóloga, CRP e endereço do consultório.</li>
          <li>Se o atendimento é por pessoa jurídica, razão social e CNPJ.</li>
          <li>Nome da pessoa atendida e, se for criança, do responsável.</li>
          <li>
            O serviço: psicoterapia individual, de casal, familiar, avaliação ou
            orientação parental, em linguagem simples.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Este documento registra os combinados do
          acompanhamento psicológico individual entre Mariana Costa (CRP
          06/000000) e a pessoa atendida abaixo.”
        </p>
        <p>
          <strong>Erro comum</strong>: usar um modelo de “contrato de prestação
          de serviços” genérico, com termos como “contratada” e “contratante” em
          todo parágrafo. Fica frio e difícil de ler. O guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a manter a mesma voz do site no documento.
        </p>
      </section>

      <section>
        <h2>2. Como o trabalho funciona: frequência, duração e objetivo</h2>
        <p>
          Esta cláusula atende ao art. 1º, alínea f: a pessoa precisa saber o
          que vai acontecer e para quê.
        </p>
        <ol>
          <li>Frequência combinada (semanal, quinzenal) e duração de cada sessão.</li>
          <li>Formato: presencial, online ou os dois.</li>
          <li>Que o objetivo é construído em conjunto e revisto ao longo do processo.</li>
          <li>Que não há prazo fixo de término nem resultado garantido.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: “As sessões são semanais, com 50 minutos.
          Os objetivos do acompanhamento são combinados entre nós e revistos
          sempre que um dos dois achar necessário.”
        </p>
        <p>
          <strong>Erro comum</strong>: escrever um número de sessões como
          “pacote” fechado com prazo de melhora. Isso se aproxima da previsão de
          resultado que o art. 20, alínea e, veta na divulgação, e confunde a
          pessoa sobre o que esperar.
        </p>
      </section>

      <section>
        <h2>3. Valor, pagamento e recibo</h2>
        <p>
          O art. 4º do Código pede que o valor seja comunicado antes do início.
          O contrato é o lugar natural para registrar isso.
        </p>
        <ul>
          <li>Valor da sessão e forma de pagamento (por sessão, mensal, Pix, cartão).</li>
          <li>Data de vencimento, se o pagamento for mensal.</li>
          <li>Como e quando o valor pode ser reajustado, com aviso prévio.</li>
          <li>Emissão de recibo ou nota fiscal, inclusive para reembolso.</li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “O valor é combinado na primeira conversa e
          registrado abaixo. Reajustes são avisados com 30 dias de antecedência.
          O recibo é enviado por e-mail após cada pagamento.”
        </p>
        <p>
          <strong>Erro comum</strong>: deixar o reajuste em aberto e anunciá-lo
          de surpresa. Para a parte de recibos e reembolso, veja os guias de{" "}
          <Link href="/blog/recibo-psicologo" className="inst-link">
            recibo de psicólogo
          </Link>{" "}
          e de{" "}
          <Link href="/blog/reembolso-plano-psicologo" className="inst-link">
            reembolso do plano de saúde
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Faltas, atrasos e remarcações</h2>
        <p>
          É a cláusula que mais gera conflito. Ela precisa ser clara, justa e
          conversada, não só assinada.
        </p>
        <ol>
          <li>Com quanta antecedência a sessão pode ser desmarcada sem cobrança.</li>
          <li>O que acontece em falta sem aviso.</li>
          <li>Como ficam atrasos (a sessão termina no horário combinado).</li>
          <li>Como você avisa quando precisa remarcar ou tirar férias.</li>
          <li>Exceções combinadas, como doença ou emergência.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: “Sessões desmarcadas com até 24 horas de
          antecedência podem ser remarcadas na mesma semana, conforme a agenda.
          Faltas sem aviso são cobradas. Situações de saúde ou emergência são
          conversadas caso a caso.”
        </p>
        <p>
          <strong>Erro comum</strong>: uma regra dura demais que você não
          aplica. Se a cláusula diz “toda falta é cobrada” e você abre exceções
          sem critério, a pessoa sente injustiça. Pelo{" "}
          <a href={CDC} {...ext}>
            CDC
          </a>
          , cláusulas que colocam a pessoa em desvantagem exagerada podem ser
          questionadas, e por isso a revisão jurídica ajuda.
        </p>
      </section>

      <section>
        <h2>5. Sigilo e seus limites</h2>
        <p>
          A pessoa precisa saber, desde o início, que o sigilo é a regra e em
          que situações ele pode ter exceções. Isso protege a confiança.
        </p>
        <ul>
          <li>O que é sigilo profissional (art. 9º), em linguagem simples.</li>
          <li>
            As situações em que pode haver quebra, buscando o menor prejuízo e
            só com o estritamente necessário (art. 10).
          </li>
          <li>
            Se haverá contato com outros profissionais e com que autorização
            (art. 6º, alínea b).
          </li>
          <li>Se haverá gravação ou registro além do prontuário (art. 14).</li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “O que você conta aqui fica entre nós. Em
          situações de risco grave à sua vida ou à de outra pessoa, posso
          precisar comunicar o mínimo necessário para proteger quem está em
          risco, e sempre conversamos sobre isso.”
        </p>
        <p>
          <strong>Erro comum</strong>: copiar artigos de lei inteiros no lugar
          da explicação. A pessoa assina sem entender. Explique com suas
          palavras e indique a fonte no fim.
        </p>
      </section>

      <section>
        <h2>6. Canais de contato, urgência e atendimento online</h2>
        <p>
          O contrato define como e quando a pessoa fala com você fora da sessão.
          No online, ele também cumpre o art. 7º da Resolução CFP nº 9/2024.
        </p>
        <ol>
          <li>Canal para agendamento e avisos (WhatsApp, e-mail) e horário de resposta.</li>
          <li>Que mensagens entre sessões não substituem a sessão.</li>
          <li>O que fazer numa urgência: serviços como o SAMU (192) e o CVV (188).</li>
          <li>Plataforma usada nas sessões online e como ela protege o sigilo.</li>
          <li>Cláusula de foro na jurisdição da sua inscrição principal.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: “As sessões online acontecem pela
          plataforma indicada abaixo, com criptografia de ponta a ponta. Respondo
          mensagens de agendamento em dias úteis, das 9h às 18h. Em urgência,
          procure o SAMU (192) ou o CVV (188).”
        </p>
        <p>
          <strong>Erro comum</strong>: citar a Resolução CFP 11/2018 ou o
          cadastro e-Psi, que foram revogados. O guia de{" "}
          <Link href="/blog/psicologo-online-divulgacao" className="inst-link">
            psicólogo online
          </Link>{" "}
          explica o que mudou.
        </p>
      </section>

      <section>
        <h2>7. Dados pessoais e prontuário</h2>
        <p>
          O contrato é um bom momento para dizer que dados você coleta, por que e
          por quanto tempo guarda.
        </p>
        <ul>
          <li>Quais dados são coletados (cadastro, pagamento, registros do atendimento).</li>
          <li>Onde ficam guardados e quem tem acesso.</li>
          <li>Que o prontuário segue as normas da profissão quanto à guarda.</li>
          <li>Como a pessoa pode pedir acesso ou correção dos dados dela.</li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Seus dados de cadastro e pagamento ficam
          em sistema protegido por senha, acessado só por mim. Os registros do
          atendimento seguem as normas do Conselho Federal de Psicologia.”
        </p>
        <p>
          <strong>Erro comum</strong>: prometer apagar tudo quando o
          atendimento terminar, o que pode contrariar os prazos de guarda de
          documentos da profissão. O guia de{" "}
          <Link href="/blog/politica-de-privacidade-psicologo" className="inst-link">
            política de privacidade para site de psicólogo
          </Link>{" "}
          trata da LGPD no site.
        </p>
      </section>

      <section>
        <h2>8. Encerramento e interrupção</h2>
        <p>
          Combinar como o acompanhamento termina evita sumiços e despedidas mal
          resolvidas, dos dois lados.
        </p>
        <ul>
          <li>Que a pessoa pode encerrar quando quiser, de preferência com uma sessão de fechamento.</li>
          <li>Em que situações você pode propor encerramento ou encaminhamento.</li>
          <li>Como ficam pagamentos pendentes.</li>
          <li>Que você orienta sobre encaminhamentos e fornece documentos pertinentes (art. 1º, alínea h).</li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Você pode encerrar o acompanhamento a
          qualquer momento. Sempre que possível, faremos um último encontro para
          fechar o processo e, se fizer sentido, indicar outro profissional.”
        </p>
        <p>
          <strong>Erro comum</strong>: multa por encerramento antecipado. Ela
          não combina com a natureza do serviço e tende a ser vista como abusiva.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no contrato terapêutico</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no contrato terapêutico do psicólogo"
            tabIndex={0}
          >
            <caption>Contrato terapêutico do psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Cláusula</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objetivo</td>
                <td>Objetivos combinados e revistos em conjunto</td>
                <td>Prazo de melhora ou número fechado de sessões “para resolver”</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>Valor, forma de pagamento e regra de reajuste</td>
                <td>Reajuste sem aviso ou multa por encerrar</td>
              </tr>
              <tr>
                <td>Faltas</td>
                <td>Regra clara de antecedência e exceções conversadas</td>
                <td>Regra que você não aplica de forma igual</td>
              </tr>
              <tr>
                <td>Sigilo</td>
                <td>Explicação simples da regra e das exceções</td>
                <td>Artigos de lei copiados sem explicação</td>
              </tr>
              <tr>
                <td>Online</td>
                <td>Plataforma, proteção do sigilo e foro (Res. CFP 9/2024)</td>
                <td>Citar a Res. 11/2018 ou o e-Psi</td>
              </tr>
              <tr>
                <td>Crianças</td>
                <td>Assinatura do responsável e o que será comunicado</td>
                <td>Prometer aos pais relato completo das sessões</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Como apresentar o contrato sem burocratizar o primeiro encontro</h2>
        <p>
          O contrato também comunica a sua marca. Um documento bem escrito e bem
          diagramado mostra cuidado antes mesmo da primeira sessão.
        </p>
        <ol>
          <li>
            <strong>Envie antes.</strong> Mande o contrato junto com a
            confirmação da primeira sessão, para a pessoa ler com calma.
          </li>
          <li>
            <strong>Converse no encontro.</strong> Reserve alguns minutos para
            tirar dúvidas, sem ler cláusula por cláusula.
          </li>
          <li>
            <strong>Use a identidade visual.</strong> Mesma tipografia, cores e
            tom do site, com títulos curtos e espaço para respirar.
          </li>
          <li>
            <strong>Facilite a assinatura.</strong> Assinatura eletrônica ou
            aceite por e-mail, com uma cópia para a pessoa.
          </li>
        </ol>
        <p>
          O guia de{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria para consultório de psicologia
          </Link>{" "}
          mostra como aplicar a identidade nesses documentos.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          No atendimento infantil, o contrato tem três partes: a psicóloga, a
          criança e os responsáveis. E com crianças neurodivergentes costuma
          haver uma equipe inteira em volta.
        </p>
        <ul>
          <li>
            Assinatura de ao menos um responsável (art. 8º) e, quando houver
            guarda compartilhada, como o outro responsável será informado,
            dentro do que a lei e o{" "}
            <a href={ECA} {...ext}>
              ECA
            </a>{" "}
            permitem.
          </li>
          <li>
            O que será comunicado aos pais: o estritamente essencial para
            medidas em benefício da criança (art. 13).
          </li>
          <li>
            Autorização para conversar com escola, fono, terapeuta ocupacional e
            médico, com o que será compartilhado.
          </li>
          <li>Encontros de orientação com os pais: frequência e se têm valor próprio.</li>
          <li>
            Uma versão em linguagem acessível para a própria criança ou
            adolescente, com apoio visual, quando fizer sentido.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Os responsáveis recebem devolutivas a cada
          dois meses sobre o andamento do acompanhamento. O conteúdo das sessões
          da criança não é relatado em detalhe, para preservar a confiança dela
          no processo.”
        </p>
        <p>
          Para os combinados com essas famílias no dia a dia, veja o guia de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Copiar um modelo da internet sem revisar com as normas atuais.</li>
          <li>Esquecer o CRP e os dados da pessoa jurídica.</li>
          <li>Prometer resultado ou prazo de melhora.</li>
          <li>Citar a Resolução 11/2018 no atendimento online.</li>
          <li>Regras de falta que você não aplica de forma igual.</li>
          <li>Multa por encerramento antecipado.</li>
          <li>Entregar o contrato sem conversar sobre ele.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do contrato terapêutico</h2>
        <ul>
          <li>Identificação das partes, CRP e, se houver, CNPJ.</li>
          <li>Descrição do serviço, frequência, duração e objetivo.</li>
          <li>Valor, pagamento, reajuste e recibo.</li>
          <li>Faltas, atrasos, remarcações e férias.</li>
          <li>Sigilo, exceções e contato com outros profissionais.</li>
          <li>Canais de contato e orientação para urgências.</li>
          <li>No online: plataforma, proteção do sigilo e foro (Res. CFP 9/2024, art. 7º).</li>
          <li>Dados pessoais e prontuário.</li>
          <li>Encerramento e encaminhamentos.</li>
          <li>Revisão por advogado antes de usar.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, e a mesma
          linguagem pode ser levada aos documentos que a pessoa recebe no
          começo do acompanhamento, sempre revisados pelo art. 20. Tudo é
          apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se seus documentos ainda parecem de outro consultório, marque uma
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
            , arts. 1º, 4º, 6º, 8º, 9º, 10, 13, 14 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            — exercício profissional mediado por tecnologias digitais, art. 7º.
          </li>
          <li>
            Brasil.{" "}
            <a href={CIVIL} {...ext}>
              Lei nº 10.406/2002
            </a>{" "}
            (Código Civil), arts. 593 a 609.
          </li>
          <li>
            Brasil.{" "}
            <a href={CDC} {...ext}>
              Lei nº 8.078/1990
            </a>{" "}
            (Código de Defesa do Consumidor), arts. 6º, III, e 51.
          </li>
          <li>
            Brasil.{" "}
            <a href={ECA} {...ext}>
              Lei nº 8.069/1990
            </a>{" "}
            (Estatuto da Criança e do Adolescente).
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018
            </a>{" "}
            (Lei Geral de Proteção de Dados).
          </li>
        </ul>
      </section>
    </>
  )
};
