import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ANS_REEMBOLSO =
  "https://www.gov.br/ans/pt-br/assuntos/consumidor/caminho-do-consumidor-1/CartilhaReembolso20254.pdf";
const ANS_PARECER =
  "https://www.gov.br/ans/pt-br/arquivos/acesso-a-informacao/transparencia-institucional/pareceres-tecnicos-da-ans/2022/PARECER_TCNICO_N_39_2022_TERAPIAS_E_MTODOS__TRANSTORNO_DO_ESPECTRO_AUTISTA_RN_539.2022_RN_541.2022.pdf";
const CFP_PLANOS = "https://site.cfp.org.br/fale-conosco/fiscalizacao/fiscalizacao-de-planos-de-saude/";
const LEI_PLANOS = "https://www.planalto.gov.br/ccivil_03/leis/l9656.htm";
const RECEITA_SAUDE =
  "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/auditoria-fiscal/conformidade/perguntas-e-respostas-receita-saude";

export const post: Post = {
  slug: "reembolso-plano-psicologo",
  title: "Reembolso do plano de saúde para psicólogo particular: como explicar no site e no primeiro contato",
  description:
    "Reembolso do plano de saúde para psicólogo particular: o que diz a ANS, como escrever no site, documentos, mensagem modelo e o que o art. 20 não permite.",
  keyword: "reembolso do plano de saúde psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-16",
  summary:
    "No reembolso, o paciente paga a sessão particular e pede o valor de volta à operadora, nos limites do contrato; quem pede é o beneficiário, e o recibo ou a nota fiscal comprova o pagamento, segundo a ANS. No site, a psicóloga pode dizer que atende particular e emite os documentos para reembolso, sem prometer quanto o plano devolve e sem usar o reembolso como argumento de preço (art. 20 do Código de Ética). Recibo de valor não pago ou em nome de outra pessoa pode ser simulação, prática vedada.",
  faq: [
    {
      q: "Psicólogo particular pode dizer no site que aceita reembolso?",
      a: "Pode informar que emite recibo ou nota fiscal para que o paciente solicite reembolso ao plano. Quem reembolsa é a operadora, e não a psicóloga, então o texto não deve prometer valor nem aprovação. Também não use o reembolso como forma de propaganda de preço, como “sai de graça com o reembolso”."
    },
    {
      q: "Quais documentos o psicólogo precisa dar para o reembolso?",
      a: "Em geral, o recibo (pelo Receita Saúde, para quem atende como pessoa física) ou a nota fiscal (para quem tem CNPJ). Algumas operadoras pedem também pedido médico, relatório ou declaração com as datas das sessões. A ANS orienta o beneficiário a consultar o contrato e a operadora antes, porque os documentos exigidos variam."
    },
    {
      q: "O plano é obrigado a reembolsar a terapia com psicólogo particular?",
      a: "Depende do contrato. Segundo a ANS, quem tem plano com livre escolha de prestadores é reembolsado até o valor previsto no contrato. Sem livre escolha, o reembolso integral vale em situações específicas, como quando não há profissional disponível na rede na cidade e a operadora não garante o atendimento."
    },
    {
      q: "Posso emitir um recibo com valor maior para o paciente receber mais reembolso?",
      a: "Não. A cartilha de reembolso da ANS (2025) alerta que recibos ou notas com valores não desembolsados pelo beneficiário podem ser considerados simulação, prática vedada pela legislação, e que também merece atenção qualquer prática para obter reembolso maior que o devido. O recibo deve trazer o valor pago, a data e o paciente corretos."
    },
    {
      q: "Quanto tempo o plano leva para reembolsar?",
      a: "O prazo depende das regras da ANS e do contrato. A cartilha da ANS cita até 30 dias após a solicitação nos casos de falta de rede e de urgência ou emergência. Para planos com livre escolha, oriente o paciente a conferir o prazo no contrato ou na operadora, sem prometer data."
    }
  ],
  cover: {
    src: "/blog/reembolso-plano-psicologo/reembolso-plano-psicologo-calculadora-e-documentos.jpg",
    alt: "Calculadora sobre documentos numa prancheta, ao lado de um caderno aberto e uma caneta, organização de recibos",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        “Você atende pelo meu plano?” é das perguntas mais repetidas no
        WhatsApp de quem atende particular. A resposta costuma sair apressada,
        entre uma sessão e outra: “Não, mas dou recibo para reembolso”. E então
        vêm as dúvidas que você não sabe responder: quanto o plano devolve, que
        documento pedir, em quanto tempo. Às vezes, o paciente desiste antes
        de entender.
      </p>
      <p>
        A resposta curta é esta: no reembolso, o paciente paga a sessão e pede
        o valor de volta à operadora, nos limites do contrato. A psicóloga
        emite o recibo ou a nota fiscal certos e explica o caminho com
        clareza, no site e no primeiro contato, sem prometer valor nem usar o
        reembolso como argumento de preço. A seguir estão o que dizem as
        normas, sete passos para explicar o reembolso, uma tabela de pode e
        evitar, a parte para quem atende famílias de crianças autistas e
        neurodivergentes, os erros comuns e um checklist. A emissão do recibo
        em si está em{" "}
        <Link href="/blog/recibo-psicologo" className="inst-link">
          recibo de psicólogo no Receita Saúde
        </Link>
        .
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Quem regula os planos de saúde é a ANS, com base na{" "}
          <a href={LEI_PLANOS} {...ext}>
            Lei nº 9.656/1998
          </a>
          . A{" "}
          <a href={ANS_REEMBOLSO} {...ext}>
            cartilha de regras de reembolso da ANS (maio de 2025)
          </a>{" "}
          explica:
        </p>
        <ul>
          <li>
            o reembolso acontece quando o beneficiário recebe de volta o que
            gastou com um profissional de saúde, mostrando comprovante de que
            recebeu o serviço e pagou;
          </li>
          <li>
            o contrato deve informar os documentos exigidos; a nota fiscal é
            recomendada, e o recibo também vale como comprovante;
          </li>
          <li>
            em planos com livre escolha de prestadores, o reembolso vai até o
            valor previsto no contrato, e a tabela de cálculo deve ser fácil de
            encontrar;
          </li>
          <li>
            só o beneficiário ou o representante legal pode pedir o reembolso;
          </li>
          <li>
            recibos ou notas com valores não desembolsados pelo beneficiário
            podem ser considerados simulação, prática vedada.
          </li>
        </ul>
        <p>
          O{" "}
          <a href={CFP_PLANOS} {...ext}>
            CFP informa
          </a>{" "}
          que não tem mecanismos para intervir na relação contratual entre
          plano, psicóloga e usuário. O que é do Conselho é a forma de divulgar:
          o{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>{" "}
          proíbe usar o preço como propaganda e prever resultados, e o art. 9º
          protege o sigilo, que vale também para os documentos entregues ao
          plano. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          completam as orientações sobre divulgação e valores.
        </p>
      </section>

      <section>
        <h2>1. Entenda o reembolso antes de explicar</h2>
        <p>
          Para explicar bem, você precisa saber o básico do caminho que o
          paciente percorre. São três modelos de situação, segundo a ANS.
        </p>
        <ol>
          <li>
            <strong>Plano com livre escolha:</strong> o paciente escolhe o
            profissional fora da rede e recebe até o valor da tabela do
            contrato.
          </li>
          <li>
            <strong>Plano sem livre escolha, sem rede disponível:</strong> se
            não há profissional na cidade e a operadora não garante o
            atendimento em outra, o reembolso é integral, em até 30 dias,
            desde que o paciente tenha procurado a operadora antes.
          </li>
          <li>
            <strong>Urgência ou emergência:</strong> regra própria, com
            reembolso em até 30 dias após os documentos.
          </li>
        </ol>
        <p>
          A ANS também diz que, se o procedimento não estiver no Rol de
          Procedimentos e Eventos em Saúde, a operadora não é obrigada a
          reembolsar. Por isso, quem confirma a cobertura é sempre o paciente,
          com a operadora.
        </p>
        <p>
          Exemplo ilustrativo: uma paciente fictícia tem plano com livre
          escolha. Ela consulta o aplicativo da operadora, descobre o valor da
          tabela para sessão de psicoterapia e a exigência de pedido médico, e
          só então marca a primeira sessão.
        </p>
        <p>
          O erro comum é a psicóloga responder “o seu plano devolve X” com base
          no que outro paciente recebeu. Cada contrato é um; diga que o valor
          depende do plano e mostre onde conferir.
        </p>
      </section>

      <section>
        <h2>2. Escreva uma frase clara no site</h2>
        <p>
          O site deve dizer que você atende particular e emite os documentos
          para reembolso. Uma frase basta na página inicial; os detalhes ficam
          numa seção ou página própria.
        </p>
        <ul>
          <li>
            <strong>Diga o modelo:</strong> “Atendimento particular”.
          </li>
          <li>
            <strong>Diga o que você entrega:</strong> “Emito recibo pelo
            Receita Saúde” ou “emito nota fiscal”.
          </li>
          <li>
            <strong>Diga quem decide:</strong> “O reembolso segue as regras do
            seu plano”.
          </li>
          <li>
            <strong>Mostre o próximo passo:</strong> link para a seção de
            reembolso ou para o WhatsApp.
          </li>
        </ul>
        <p>Modelo fictício:</p>
        <blockquote>
          <p>
            “Atendimento particular. Emito recibo pelo Receita Saúde para que
            você solicite reembolso ao seu plano de saúde, conforme as regras do
            seu contrato. Veja como funciona.”
          </p>
        </blockquote>
        <p>
          O erro comum é escrever “aceito todos os planos por reembolso”. Você
          não aceita plano nenhum, quem reembolsa é a operadora, e a frase pode
          levar o paciente a achar que você é credenciada. A diferença entre
          credenciamento e reembolso está no post sobre{" "}
          <Link href="/blog/psicologo-divulgar-convenio" className="inst-link">
            divulgar convênio e plano de saúde
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Monte uma seção “Como funciona o reembolso”</h2>
        <p>
          Uma seção curta, em passos, tira as dúvidas antes que virem
          mensagens. Ela pode ficar na página de perguntas frequentes ou numa
          página própria.
        </p>
        <ol>
          <li>
            <strong>Consulte a operadora:</strong> confira se o seu plano tem
            livre escolha, o valor de reembolso e os documentos exigidos.
          </li>
          <li>
            <strong>Veja se precisa de pedido médico:</strong> algumas
            operadoras pedem; confirme antes da primeira sessão.
          </li>
          <li>
            <strong>Pague a sessão:</strong> o reembolso exige comprovante de
            pagamento.
          </li>
          <li>
            <strong>Receba o recibo:</strong> emitido em seu nome ou no nome do
            beneficiário, com a data e o valor pagos.
          </li>
          <li>
            <strong>Envie à operadora:</strong> pelo aplicativo, site ou outro
            canal que ela indicar.
          </li>
        </ol>
        <p>
          Feche com o link para a{" "}
          <a href={ANS_REEMBOLSO} {...ext}>
            cartilha da ANS
          </a>
          , que o paciente pode ler por conta própria. Isso mostra cuidado e
          tira de você o papel de dar garantias sobre o plano.
        </p>
        <p>
          Exemplo ilustrativo: depois de publicar a seção, uma psicóloga passa
          a responder “Você aceita reembolso?” com o link da página. As
          conversas no WhatsApp ficam mais curtas e chegam com perguntas
          melhores.
        </p>
        <p>
          O erro comum é esconder a informação num PDF para baixar. Texto na
          própria página é mais fácil de ler no celular e de achar no Google.
          Outras dúvidas que valem a mesma seção estão em{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Defina os documentos que você emite</h2>
        <p>
          Decida de antemão que documentos você entrega e como. Isso evita
          improviso e protege o sigilo.
        </p>
        <ul>
          <li>
            <strong>Recibo pelo Receita Saúde:</strong> obrigatório para
            profissionais de saúde que atendem como pessoa física, segundo as{" "}
            <a href={RECEITA_SAUDE} {...ext}>
              perguntas e respostas da Receita Federal
            </a>
            .
          </li>
          <li>
            <strong>Nota fiscal:</strong> para quem atende pelo CNPJ.
          </li>
          <li>
            <strong>Declaração de comparecimento ou de datas:</strong> se a
            operadora pedir, em documento próprio.
          </li>
          <li>
            <strong>Relatório:</strong> só quando exigido e combinado com o
            paciente ou responsável, com o mínimo de informação clínica.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia emite os recibos no
          último dia útil do mês, um por sessão, com a data de cada atendimento
          no campo de descrição. O paciente sabe quando vai receber e pede o
          reembolso uma vez por mês.
        </p>
        <p>
          O erro comum é colocar diagnóstico ou CID no recibo por hábito. Se o
          plano não pediu, não escreva; se pediu, combine antes com o paciente.
          O passo a passo de emissão, os prazos de cancelamento e o caso de
          crianças estão em{" "}
          <Link href="/blog/recibo-psicologo" className="inst-link">
            recibo de psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Diga não ao recibo “ajustado”</h2>
        <p>
          Recibo com valor maior, com data de sessão que não aconteceu ou em
          nome de quem não foi atendido pode configurar simulação. A ANS cita
          isso de forma expressa na cartilha de reembolso.
        </p>
        <ol>
          <li>O valor do recibo é o valor que o paciente pagou.</li>
          <li>A data é a data do atendimento ou do pagamento, conforme o campo.</li>
          <li>O beneficiário é quem foi atendido.</li>
          <li>Pacote ou desconto entram pelo valor real pago, nunca cheio.</li>
          <li>Nada de dividir uma sessão em duas para caber no teto do plano.</li>
        </ol>
        <p>
          Exemplo ilustrativo de resposta, quando o pedido chega: “Entendo que o
          reembolso ajuda muito. O recibo precisa trazer o valor que você pagou
          e a data da sessão, porque é isso que a operadora confere. Se quiser,
          te ajudo a ver as regras do seu plano.”
        </p>
        <p>
          O erro comum é ceder para não perder o paciente. Além do risco legal,
          o pedido costuma ser o primeiro de outros. Ter a regra escrita no
          contrato terapêutico e na seção de reembolso do site deixa a resposta
          impessoal. O mesmo vale para a{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            mensagem pronta no WhatsApp Business
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Prepare a mensagem do primeiro contato</h2>
        <p>
          A pergunta “atende pelo meu plano?” merece uma resposta pronta, gentil
          e completa, que já leve à decisão.
        </p>
        <p>Modelo fictício:</p>
        <blockquote>
          <p>
            “Oi, Carla! Meu atendimento é particular. Emito recibo pelo Receita
            Saúde a cada sessão, e muitos planos fazem o reembolso, de acordo
            com o contrato. Para saber quanto o seu plano devolve e que
            documentos pede, vale consultar a operadora antes. Deixei os passos
            aqui: [link]. O valor da sessão eu informo agora, se quiser seguir.”
          </p>
        </blockquote>
        <ul>
          <li>Responda a pergunta logo na primeira frase.</li>
          <li>Explique o que você faz e o que depende do plano.</li>
          <li>Ofereça o link e o próximo passo.</li>
          <li>Informe o valor na conversa, quando a pessoa pedir.</li>
        </ul>
        <p>
          O erro comum é responder só “não atendo plano” e encerrar. Muitos
          pacientes não sabem que o reembolso existe e desistem por falta de
          informação. Outro erro é transformar o reembolso em argumento de
          venda (“no fim, sai quase de graça”), o que usa o preço como
          propaganda.
        </p>
      </section>

      <section>
        <h2>7. Seja encontrada por quem busca reembolso</h2>
        <p>
          Muitas pessoas pesquisam “psicólogo com reembolso” ou “terapia por
          reembolso” mais o bairro. Uma página bem escrita responde a essa busca
          e traz pacientes que já sabem como o modelo funciona.
        </p>
        <ol>
          <li>
            Título da seção ou página com “reembolso do plano de saúde” e a
            cidade, se você atende presencial.
          </li>
          <li>Texto com os passos do item 3 e as perguntas frequentes.</li>
          <li>
            Perfil da Empresa no Google com a informação nos atributos ou na
            descrição, sem promessa.
          </li>
          <li>Link da página na resposta pronta do WhatsApp.</li>
        </ol>
        <p>
          Exemplo ilustrativo: a psicóloga cria a página “Terapia com reembolso
          do plano de saúde em Sorocaba”, com o passo a passo e a mensagem de que
          o valor depende do contrato. Em alguns meses, a página passa a
          aparecer para buscas com “reembolso”.
        </p>
        <p>
          O erro comum é prometer “reembolso garantido” no título para atrair
          clique. Além de falso, é previsão de resultado sobre algo que você
          não controla. O caminho do Google está em{" "}
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
        <h2>Pode e evitar ao falar de reembolso</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao falar de reembolso do plano de saúde"
            tabIndex={0}
          >
            <caption>Reembolso do plano de saúde: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Situação</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Site</td>
                <td>“Atendimento particular, com recibo para reembolso”</td>
                <td>“Aceito todos os planos”, “reembolso garantido”</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>“Depende do seu contrato; consulte a operadora”</td>
                <td>“O seu plano devolve tudo”, “sai de graça”</td>
              </tr>
              <tr>
                <td>Recibo</td>
                <td>Valor pago, data e beneficiário corretos</td>
                <td>Valor maior, sessão que não houve, nome de outra pessoa</td>
              </tr>
              <tr>
                <td>Descrição</td>
                <td>“Sessão de psicoterapia” com a data</td>
                <td>CID ou diagnóstico sem exigência e sem combinar</td>
              </tr>
              <tr>
                <td>WhatsApp</td>
                <td>Resposta pronta com passos e link</td>
                <td>“Não atendo plano” e mais nada</td>
              </tr>
              <tr>
                <td>Pedido do plano</td>
                <td>Pedir ao paciente a lista de documentos da operadora</td>
                <td>Pedir login e senha do plano do paciente</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já explica o reembolso: organize os pedidos</h2>
        <p>
          Quando muitos pacientes pedem reembolso, vale padronizar. Anote, sem
          dados clínicos, as exigências de cada operadora que aparecem com
          frequência: pedido médico, periodicidade, documentos extras. Com o
          tempo, você responde mais rápido e orienta melhor, sempre lembrando
          que cada contrato pode ser diferente.
        </p>
        <p>
          Combine também um calendário: recibos emitidos no mesmo dia do mês,
          declarações sob pedido com prazo de alguns dias úteis, relatórios só
          com agendamento. Escreva isso no contrato terapêutico. A ANS lembra
          que o paciente não deve compartilhar login e senha do plano com
          ninguém; nunca peça esses dados para “enviar por ele”.
        </p>
        <p>
          Se o volume crescer, uma secretária ou um serviço de contabilidade
          pode emitir os recibos por você, com procuração e acesso controlado.
          A responsabilidade pelo que sai com o seu nome continua sendo sua.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para muitas famílias de crianças autistas, o reembolso é o que torna
          o acompanhamento possível, porque a rede credenciada nem sempre tem o
          profissional que a família procura. Isso pede ainda mais clareza e
          nenhuma promessa.
        </p>
        <ul>
          <li>
            <strong>Cobertura para TEA:</strong> a ANS, na RN 539/2022, tornou
            obrigatória a cobertura de qualquer método ou técnica indicado pelo
            médico assistente para diagnósticos da CID F84, como explica o{" "}
            <a href={ANS_PARECER} {...ext}>
              Parecer Técnico nº 39/2022 da ANS
            </a>
            . Cite com o link, sem dizer que o plano “tem que pagar” o seu
            atendimento.
          </li>
          <li>
            <strong>Pedido médico:</strong> muitas operadoras exigem; oriente a
            família a confirmar antes de começar.
          </li>
          <li>
            <strong>Recibo da criança:</strong> o responsável paga e a criança
            é a beneficiária; o recibo precisa refletir isso. Detalhes em{" "}
            <Link href="/blog/recibo-psicologo" className="inst-link">
              recibo de psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Relatórios:</strong> só o necessário, combinados com a
            família, e em documento próprio.
          </li>
          <li>
            <strong>Tom:</strong> a família já enfrenta negativas e burocracia.
            Explique com calma, sem jargão.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo de texto no site: “Atendo crianças autistas e
          suas famílias de forma particular, com recibo para reembolso. Se o
          plano pedir relatório ou declaração, combinamos juntos o que vai
          constar. A cobertura e o valor dependem do seu contrato.”
        </p>
        <p>
          Se você atua com ABA ou métodos específicos, o post sobre{" "}
          <Link href="/blog/marca-psicologo-aba" className="inst-link">
            marca para psicólogo que trabalha com ABA
          </Link>{" "}
          mostra como falar do método sem promessa.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>“Aceito todos os planos” para quem só emite recibo para reembolso.</li>
          <li>Prometer valor, prazo ou aprovação do reembolso.</li>
          <li>Usar o reembolso como argumento de preço.</li>
          <li>Emitir recibo com valor maior ou em nome de outra pessoa.</li>
          <li>Colocar diagnóstico no recibo sem exigência e sem combinar.</li>
          <li>Pedir login e senha do plano do paciente.</li>
          <li>Responder “não atendo plano” e encerrar a conversa.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do reembolso</h2>
        <ul>
          <li>Frase no site: atendimento particular com recibo para reembolso.</li>
          <li>Seção “Como funciona o reembolso” em passos, com link para a ANS.</li>
          <li>Documentos definidos: recibo ou nota, declaração, relatório sob pedido.</li>
          <li>Regra escrita: valor, data e beneficiário reais.</li>
          <li>Mensagem pronta para “atende pelo meu plano?”.</li>
          <li>Nenhuma promessa de valor, prazo ou aprovação.</li>
          <li>Sigilo: informação clínica só quando exigida e combinada.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, a identidade visual e o site, com páginas que
          respondem às dúvidas reais dos pacientes, reembolso incluído, e com
          cada texto revisado pelo art. 20. Tudo é apresentado em até 30 dias,
          com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a pergunta sobre plano de saúde ainda ocupa metade do seu
          WhatsApp, marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Agência Nacional de Saúde Suplementar.{" "}
            <a href={ANS_REEMBOLSO} {...ext}>
              Plano de saúde: regras de reembolso
            </a>
            , maio de 2025.
          </li>
          <li>
            Agência Nacional de Saúde Suplementar.{" "}
            <a href={ANS_PARECER} {...ext}>
              Parecer Técnico nº 39/2022 — terapias e métodos para o transtorno
              do espectro autista (RN 539/2022 e RN 541/2022)
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_PLANOS} {...ext}>
              Lei nº 9.656/1998 — planos e seguros privados de assistência à saúde
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={CFP_PLANOS} {...ext}>
              Fiscalização de planos de saúde
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 9º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Receita Federal.{" "}
            <a href={RECEITA_SAUDE} {...ext}>
              Perguntas e respostas sobre o Receita Saúde
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
