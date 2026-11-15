import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const MANUAL =
  "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/auditoria-fiscal/conformidade/perguntas-e-respostas-receita-saude";
const CFP_RS =
  "https://site.cfp.org.br/psicologas-e-psicologos-que-atendam-como-pessoa-fisica-terao-que-emitir-recibo-digital-pelo-receita-saude-a-partir-de-1o-de-janeiro/";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "recibo-psicologo",
  title: "Recibo de psicólogo no Receita Saúde: passo a passo, prazos e como explicar aos pacientes",
  description:
    "Recibo de psicólogo em 2026: quem emite pelo Receita Saúde, pagador e beneficiário, parcelas, cancelamento, reembolso do plano e como avisar os pacientes.",
  keyword: "recibo de psicólogo",
  tags: ["divulgacao-etica", "identidade-visual"],
  publishedAt: "2026-11-15",
  summary:
    "Desde 1º de janeiro de 2025, a psicóloga que atende como pessoa física emite o recibo pelo Receita Saúde, no app da Receita Federal ou no Carnê-Leão Web, na data de cada pagamento (Instrução Normativa RFB nº 2.240/2024). Quem atende por CNPJ emite nota fiscal da empresa. O recibo com a sua marca pode continuar existindo como comprovante complementar, mas não substitui o oficial.",
  faq: [
    {
      q: "Psicólogo ainda pode dar recibo de papel?",
      a: "Quem atende como pessoa física é obrigado a emitir o Receita Saúde desde 1º de janeiro de 2025, segundo a Instrução Normativa RFB nº 2.240/2024. Um recibo de papel com a sua marca pode ser entregue como comprovante complementar, mas não substitui o recibo eletrônico. Não emitir o Receita Saúde, ou emiti-lo com erro, sujeita a multa de R$ 100 por mês-calendário ou fração."
    },
    {
      q: "Quando o recibo de psicólogo deve ser emitido?",
      a: "Na data do pagamento. Se o paciente paga por mês, emite-se um recibo no dia do pagamento mensal; se parcela, um recibo por parcela paga. O manual da Receita permite emissão retroativa até o último dia de fevereiro do ano seguinte ao pagamento, desde que não haja procedimento fiscal iniciado."
    },
    {
      q: "Como emitir recibo quando a mãe paga a terapia do filho?",
      a: "O Receita Saúde separa pagador e beneficiário. Você informa o CPF de quem pagou (a mãe ou o pai) e o CPF de quem recebeu o atendimento (a criança). Se a mesma pessoa paga e é atendida, basta marcar a opção que indica isso."
    },
    {
      q: "Psicólogo com CNPJ precisa emitir Receita Saúde?",
      a: "O manual da Receita trata da obrigação para profissionais que prestam serviço como pessoa física. Quem atende por pessoa jurídica emite a nota fiscal de serviço conforme a regra do município, e clínicas continuam com a DMED, segundo o CFP. Confirme com o seu contador o enquadramento do seu caso."
    },
    {
      q: "Dá para cancelar um recibo emitido errado?",
      a: "Sim, em até dez dias a partir da emissão, pelo próprio profissional ou por um representante com procuração (art. 7º da IN RFB nº 2.240/2024). Depois desse prazo, a orientação é procurar a Receita pelos canais indicados no manual ou com o apoio do contador."
    }
  ],
  cover: {
    src: "/blog/recibo-psicologo/recibo-psicologo-celular-calculadora.jpg",
    alt: "Celular, calculadora, caneta e planilhas impressas sobre mesa branca de escritório",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Toda psicóloga que atende como autônoma já ouviu a pergunta “você me
        manda o recibo?”. Até 2024, a resposta era um talão com o seu nome e o
        CRP. Desde janeiro de 2025, a regra mudou: o recibo é eletrônico, sai
        pelo Receita Saúde, e o talão virou, no máximo, um complemento. Muita
        gente ainda tem dúvida sobre quando emitir, o que fazer quando a mãe
        paga a terapia do filho e como explicar isso aos pacientes sem gastar
        metade da sessão.
      </p>
      <p>
        Resposta curta: quem atende como pessoa física emite o Receita Saúde na
        data de cada pagamento, pelo app da Receita Federal ou pelo Carnê-Leão
        Web. A seguir estão a regra oficial, o passo a passo, os casos que mais
        confundem (pagador e beneficiário, parcelas, cancelamento, reembolso do
        plano), o que fazer com o recibo da sua marca e como avisar os
        pacientes. Questões tributárias específicas do seu caso ficam com o seu
        contador.
      </p>

      <section>
        <h2>O que diz a regra</h2>
        <p>
          O Receita Saúde é o recibo eletrônico de serviços de saúde,
          regulamentado pela Instrução Normativa RFB nº 2.240, de 11 de dezembro
          de 2024. O{" "}
          <a href={MANUAL} {...ext}>
            manual de perguntas e respostas da Receita Federal
          </a>{" "}
          (versão 2.1, outubro de 2025) lista os profissionais obrigados a
          emiti-lo desde 1º de janeiro de 2025, quando atuam como pessoa física:
          dentistas, fisioterapeutas, fonoaudiólogos, médicos, psicólogos e
          terapeutas ocupacionais.
        </p>
        <ul>
          <li>
            <strong>Quando:</strong> na data do pagamento do serviço; em
            pagamento parcelado, um recibo por parcela paga.
          </li>
          <li>
            <strong>Retroativo:</strong> permitido se nenhum procedimento de
            ofício da Receita tiver começado, até o último dia de fevereiro do ano
            seguinte ao pagamento (Ato Declaratório Executivo Cofis nº 11/2025,
            citado no manual).
          </li>
          <li>
            <strong>Multa:</strong> R$ 100 por mês-calendário ou fração para quem
            não emite ou emite com erro (art. 4º da IN).
          </li>
          <li>
            <strong>Cancelamento:</strong> em até dez dias da emissão, se houve
            erro (art. 7º da IN).
          </li>
        </ul>
        <p>
          O{" "}
          <a href={CFP_RS} {...ext}>
            CFP divulgou a mudança em dezembro de 2024
          </a>
          , lembrando que é obrigatório ter registro ativo no Conselho Regional,
          que o recibo deve sair no momento do pagamento e que clínicas e
          hospitais continuam a usar a DMED. Do lado ético, o{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          pede que o valor seja combinado com a pessoa antes do início do
          trabalho (art. 4º) e protege o sigilo (art. 9º), o que importa na hora
          de preencher a descrição do recibo.
        </p>
      </section>

      <section>
        <h2>1. Prepare o cadastro antes do primeiro recibo</h2>
        <p>
          O recibo só sai se três coisas estiverem em dia: conta gov.br nível
          prata ou ouro, registro ativo no CRP e cadastro no Carnê-Leão Web do
          ano. Resolva isso uma vez e o resto fica rápido.
        </p>
        <ol>
          <li>
            <strong>gov.br:</strong> confira o nível da sua conta. O manual exige
            prata ou ouro para acessar o Receita Saúde.
          </li>
          <li>
            <strong>CRP:</strong> o perfil “Profissional” aparece no app quando o
            Conselho envia os seus dados à Receita, o que acontece no máximo uma
            vez por mês. Inscrição recente pode demorar a aparecer.
          </li>
          <li>
            <strong>Carnê-Leão Web:</strong> no e-CAC, em “Declarações e
            Demonstrativos”, acesse o Carnê-Leão, informe que é trabalhador
            autônomo na ficha de configuração e preencha ocupação e registro
            profissional. O cadastro é por ano-calendário: quem fez em um ano
            precisa atualizar no seguinte.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia recém-inscrita no CRP abre
          o app em fevereiro e não vê o perfil profissional. Em vez de emitir
          recibo de papel e esquecer, ela anota os pagamentos do mês e emite os
          recibos retroativos assim que o perfil aparece, dentro do prazo.
        </p>
        <p>
          O erro comum é deixar o cadastro do Carnê-Leão para o dia em que o
          primeiro paciente pede recibo. Se você está começando agora, o guia
          para{" "}
          <Link href="/blog/psicologo-recem-formado-como-comecar" className="inst-link">
            psicólogo recém-formado
          </Link>{" "}
          reúne o que organizar antes de abrir a agenda.
        </p>
      </section>

      <section>
        <h2>2. Emita o recibo no app ou no computador</h2>
        <p>
          A emissão leva menos de um minuto quando o cadastro está pronto. Pelo
          celular, é no app da Receita Federal; pelo computador, no Carnê-Leão
          Web, ficha Rendimentos, opção “+ Receita Saúde”.
        </p>
        <p>Os campos que o manual descreve:</p>
        <ol>
          <li>CPF do pagador;</li>
          <li>
            uma caixa para marcar se o pagador é o próprio beneficiário do
            serviço;
          </li>
          <li>CPF do beneficiário, quando pagador e beneficiário são diferentes;</li>
          <li>valor do serviço;</li>
          <li>data do pagamento;</li>
          <li>
            opcionais: descrição e data do atendimento, que o manual cita como
            úteis para informações pedidas pelos planos de saúde no reembolso.
          </li>
        </ol>
        <p>
          Quem tem registro em mais de um estado escolhe o registro usado em cada
          atendimento. Quem tem muitos recibos pode importar um arquivo CSV de
          até mil linhas pelo Carnê-Leão, na função “Escrituração”, seguindo o
          modelo do manual (código de ocupação 255 para psicólogo).
        </p>
        <p>
          Exemplo ilustrativo: um consultório fictício recebe por Pix e, no fim
          de cada dia de atendimento, a psicóloga abre o app e emite os recibos
          dos pagamentos daquele dia. Leva poucos minutos e não acumula para o
          fim do mês.
        </p>
        <p>
          O erro comum é usar a data da sessão no lugar da data do pagamento. O
          fato que gera o recibo é o pagamento; a data do atendimento entra, se
          quiser, no campo opcional.
        </p>
      </section>

      <section>
        <h2>3. Pagador e beneficiário: o caso das crianças</h2>
        <p>
          Quando os pais pagam a terapia da criança, o recibo tem o CPF de quem
          pagou como pagador e o CPF da criança como beneficiário. É isso que
          permite à família deduzir corretamente a despesa na declaração.
        </p>
        <ul>
          <li>
            <strong>Peça os dados no começo:</strong> na ficha de primeiro
            contato, o nome e CPF de quem vai pagar e o CPF da criança.
          </li>
          <li>
            <strong>Pagamentos divididos:</strong> se pai e mãe dividem o valor,
            cada pagamento tem o seu pagador. Combine com a família quem paga o
            quê, para o recibo refletir o que de fato aconteceu.
          </li>
          <li>
            <strong>Adolescentes e adultos dependentes:</strong> mesma lógica,
            pagador de um lado, beneficiário do outro.
          </li>
          <li>
            <strong>Dados pessoais:</strong> guarde os CPFs só para isso. Pela{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>
            , dado coletado tem finalidade e não circula por grupos ou planilhas
            abertas.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: numa família fictícia, a mãe paga as sessões de
          março e o pai as de abril. Os recibos de março saem com o CPF da mãe
          como pagadora; os de abril, com o do pai. A criança é a beneficiária em
          todos.
        </p>
        <p>
          O erro comum é emitir tudo no CPF da criança como pagadora “para
          simplificar”. Isso não reflete o pagamento e confunde a declaração dos
          pais. O post sobre{" "}
          <Link href="/blog/manual-boas-vindas-consultorio" className="inst-link">
            manual de boas-vindas do consultório
          </Link>{" "}
          mostra onde colocar esse combinado, por escrito, desde o início.
        </p>
      </section>

      <section>
        <h2>4. Pacotes mensais, parcelas e pagamentos adiantados</h2>
        <p>
          A regra é sempre a mesma: um recibo para cada pagamento, na data em que
          ele acontece. O formato de cobrança muda só a quantidade de recibos.
        </p>
        <ol>
          <li>
            <strong>Mensalidade:</strong> a família paga as quatro sessões do mês
            de uma vez? Um recibo, na data do pagamento, com o valor total.
          </li>
          <li>
            <strong>Sessão a sessão:</strong> um recibo por pagamento.
          </li>
          <li>
            <strong>Parcelado:</strong> uma avaliação paga em três vezes gera
            três recibos, um em cada data de pagamento.
          </li>
          <li>
            <strong>Nota fiscal de pessoa física:</strong> se você também emite
            nota de serviço como autônoma, o manual diz que ela não dispensa o
            Receita Saúde: a nota comprova o serviço, o recibo comprova o
            pagamento.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma avaliação neuropsicológica fictícia é
          combinada por um valor total, pago em entrada mais duas parcelas. São
          três recibos, cada um com o valor e a data daquele pagamento, e a
          descrição pode indicar “avaliação psicológica, parcela 1 de 3”.
        </p>
        <p>
          O erro comum é emitir um recibo único com o valor total no dia da
          entrada. Se o dinheiro ainda não entrou, o recibo não deveria existir.
          Para quem faz avaliação, o guia de{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>{" "}
          mostra como explicar etapas e formato sem pôr preço na divulgação.
        </p>
      </section>

      <section>
        <h2>5. Errou? Cancele no prazo e emita de novo</h2>
        <p>
          Recibo com erro pode ser cancelado em até dez dias da emissão, pelo
          profissional ou pelo representante. Depois, emite-se o correto.
        </p>
        <ul>
          <li>
            <strong>Confira antes de enviar:</strong> CPF, valor e data são os
            campos que mais dão erro.
          </li>
          <li>
            <strong>Lote errado:</strong> recibos importados por arquivo podem
            ser cancelados um a um ou em lote, pela opção “Desfazer
            escrituração”, enquanto o cancelamento estiver disponível.
          </li>
          <li>
            <strong>Paciente pode conferir:</strong> o recibo aparece no perfil
            Paciente do app logo após a emissão, e o serviço “Validação Receita
            Saúde” confirma se um recibo existe e se os dados batem.
          </li>
          <li>
            <strong>Dúvida fora do manual:</strong> a Receita indica o e-mail
            receitasaude.cofis@rfb.gov.br.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: a psicóloga fictícia digita R$ 2.000 no lugar de
          R$ 200. A mãe vê o valor no app no mesmo dia e avisa. O recibo é
          cancelado e emitido de novo na hora, dentro do prazo.
        </p>
        <p>
          O erro comum é deixar o recibo errado “para corrigir depois”. Passados
          os dez dias, a correção fica mais trabalhosa e o valor errado pode ir
          para a declaração pré-preenchida da família.
        </p>
      </section>

      <section>
        <h2>6. Reembolso do plano de saúde: o que pôr na descrição</h2>
        <p>
          Os campos opcionais de descrição e data do atendimento existem para
          ajudar no reembolso. Use-os com o mínimo de informação clínica que o
          plano realmente exige.
        </p>
        <ol>
          <li>
            <strong>Pergunte o que o plano pede:</strong> as exigências variam
            entre operadoras. Peça à família a lista do plano dela antes de
            preencher.
          </li>
          <li>
            <strong>Descrição neutra:</strong> “Sessão de psicoterapia” ou
            “Avaliação psicológica”, com a data do atendimento.
          </li>
          <li>
            <strong>Informação clínica, só se exigida</strong> e combinada com o
            paciente ou responsável. O sigilo do art. 9º do Código de Ética vale
            também para o recibo.
          </li>
          <li>
            <strong>Documentos à parte:</strong> se o plano pede relatório ou
            declaração, faça o documento próprio, com o modelo do seu consultório.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: um plano fictício pede, para reembolso, a data de
          cada sessão. A psicóloga passa a preencher a data do atendimento no
          campo opcional e manda, junto, um resumo mensal das datas em papel
          timbrado digital.
        </p>
        <p>
          O erro comum é colocar diagnóstico na descrição por hábito. Se o plano
          não pediu, não escreva. Se você divulga que emite recibo para
          reembolso, o post sobre{" "}
          <Link href="/blog/psicologo-divulgar-convenio" className="inst-link">
            como divulgar convênio e reembolso
          </Link>{" "}
          traz o jeito certo de dizer isso no site.
        </p>
      </section>

      <section>
        <h2>7. O recibo da sua marca vira comprovante complementar</h2>
        <p>
          O talão com o seu logo deixou de ser o documento fiscal, mas a sua
          marca ainda tem lugar nessa etapa: num comprovante ou resumo mensal que
          acompanha o recibo oficial.
        </p>
        <ul>
          <li>
            <strong>Resumo mensal:</strong> datas das sessões, forma de pagamento
            e a observação “recibo oficial emitido no Receita Saúde”.
          </li>
          <li>
            <strong>Identificação:</strong> nome completo, “psicóloga”, CRP e
            contato, como pede o art. 20 para qualquer peça.
          </li>
          <li>
            <strong>Visual:</strong> o mesmo papel timbrado digital dos seus
            documentos, em PDF.
          </li>
          <li>
            <strong>Sem duplicidade:</strong> deixe claro no documento que ele
            não é recibo fiscal, para a família não declarar duas vezes.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: um consultório fictício envia, no primeiro dia
          útil do mês, um PDF com a marca listando as sessões do mês anterior e o
          número de cada recibo do Receita Saúde. A família arquiva tudo num
          lugar só.
        </p>
        <p>
          O erro comum é continuar entregando só o recibo de papel porque o
          paciente pediu. O post sobre{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria para consultório de psicologia
          </Link>{" "}
          mostra como montar o papel timbrado e os modelos de documento.
        </p>
      </section>

      <section>
        <h2>8. Avise os pacientes uma vez, por escrito</h2>
        <p>
          A maioria das dúvidas some quando o paciente sabe, desde o começo, como
          e quando vai receber o recibo. Escreva isso uma vez e reaproveite.
        </p>
        <ol>
          <li>
            <strong>No contrato ou termo de combinados:</strong> forma de
            pagamento, data e “o recibo é emitido pelo Receita Saúde na data do
            pagamento”.
          </li>
          <li>
            <strong>Mensagem pronta:</strong> uma resposta salva no WhatsApp
            explicando onde o recibo aparece (app da Receita, perfil Paciente).
          </li>
          <li>
            <strong>No site:</strong> uma pergunta frequente sobre recibo e
            reembolso.
          </li>
          <li>
            <strong>Para famílias:</strong> peça os dois CPFs (pagador e
            criança) no primeiro contato.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo de mensagem: “Oi, Carla. O recibo de hoje já foi
          emitido no Receita Saúde. Você encontra no app da Receita Federal, no
          perfil Paciente, e ele aparece sozinho na sua declaração
          pré-preenchida.” O nome é fictício.
        </p>
        <p>
          O erro comum é explicar a regra de novo a cada paciente, na hora da
          sessão. O guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          mostra como organizar respostas salvas, e o de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços
          </Link>{" "}
          ajuda a pôr as condições no site.
        </p>
      </section>

      <section>
        <h2>Recibo de psicólogo: pode e evitar</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no recibo de psicólogo"
            tabIndex={0}
          >
            <caption>Recibo de psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Situação</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emissão</td>
                <td>Receita Saúde na data de cada pagamento</td>
                <td>Só talão de papel, ou emissão no fim do ano</td>
              </tr>
              <tr>
                <td>Criança atendida</td>
                <td>Pais como pagadores, criança como beneficiária</td>
                <td>CPF da criança como pagadora</td>
              </tr>
              <tr>
                <td>Parcelas</td>
                <td>Um recibo por parcela paga</td>
                <td>Recibo do total antes de receber</td>
              </tr>
              <tr>
                <td>Descrição</td>
                <td>“Sessão de psicoterapia” e data do atendimento</td>
                <td>Diagnóstico sem exigência do plano</td>
              </tr>
              <tr>
                <td>Erro</td>
                <td>Cancelar em até dez dias e emitir o correto</td>
                <td>Deixar o recibo errado na declaração da família</td>
              </tr>
              <tr>
                <td>Sua marca</td>
                <td>Resumo mensal com marca, indicando que não é recibo fiscal</td>
                <td>Comprovante que parece um segundo recibo</td>
              </tr>
              <tr>
                <td>Divulgação</td>
                <td>“Emito recibo para reembolso” como informação</td>
                <td>Valor da sessão como chamariz</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já emite tudo certo: delegue e organize</h2>
        <p>
          Quem tem agenda cheia de pagamentos pode indicar um representante para
          emitir os recibos, como uma secretária ou o contador. A procuração é
          eletrônica, no e-CAC, em “Senhas e Procurações”, com a opção “IRPF –
          Carnê Leão Web”. Um profissional pode ter mais de um representante, e
          um representante pode atender mais de um profissional, o que ajuda
          consultórios compartilhados.
        </p>
        <p>
          Outro passo é ligar o recibo ao resto da rotina: a agenda marca o
          pagamento, o pagamento gera o recibo no mesmo dia e o resumo mensal com
          a marca sai no início do mês seguinte. Se o volume justificar, a
          importação em lote pelo Carnê-Leão evita digitar um por um. Se você
          divide sala com outras profissionais, o post sobre{" "}
          <Link href="/blog/consultorio-compartilhado-divulgacao" className="inst-link">
            consultório compartilhado
          </Link>{" "}
          trata de como cada uma mantém a própria identificação.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Famílias de crianças autistas e neurodivergentes costumam ter muitas
          frentes ao mesmo tempo: terapia, fono, terapia ocupacional, escola,
          plano de saúde. O recibo é uma das muitas burocracias do mês, e cada
          detalhe resolvido por você é um peso a menos para elas.
        </p>
        <ul>
          <li>
            <strong>Previsibilidade:</strong> diga quando o recibo sai (por
            exemplo, no mesmo dia do pagamento) e cumpra sempre.
          </li>
          <li>
            <strong>Reembolso organizado:</strong> muitas dessas famílias pedem
            reembolso de várias terapias. O resumo mensal com datas ajuda a
            montar o pedido.
          </li>
          <li>
            <strong>Equipe multiprofissional:</strong> fonoaudiólogas e
            terapeutas ocupacionais também emitem Receita Saúde. Se vocês atendem
            juntas, alinhe o mesmo combinado, para a família não receber
            instruções diferentes.
          </li>
          <li>
            <strong>Linguagem clara:</strong> mensagens curtas, sem sigla, com o
            passo a passo para achar o recibo no app. Muitos pais também são
            neurodivergentes e preferem instrução direta.
          </li>
        </ul>
        <p>
          Se você divide a família com outras profissões, o post sobre{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            clínica multidisciplinar de autismo
          </Link>{" "}
          mostra como apresentar o trabalho em conjunto.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Continuar só com o talão de papel.</li>
          <li>Usar a data da sessão no lugar da data do pagamento.</li>
          <li>Emitir o total de um parcelamento antes de receber.</li>
          <li>Colocar a criança como pagadora.</li>
          <li>Diagnóstico na descrição sem pedido do plano.</li>
          <li>Esquecer de atualizar o Carnê-Leão no início do ano.</li>
          <li>Perder o prazo de dez dias para cancelar um erro.</li>
          <li>Comprovante com a marca que parece um segundo recibo fiscal.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do recibo</h2>
        <ul>
          <li>Conta gov.br prata ou ouro.</li>
          <li>Perfil profissional visível no app (CRP ativo).</li>
          <li>Carnê-Leão Web do ano configurado como autônomo.</li>
          <li>CPF do pagador e do beneficiário pedidos no primeiro contato.</li>
          <li>Recibo emitido na data de cada pagamento.</li>
          <li>Descrição neutra; data do atendimento se o plano pedir.</li>
          <li>Recibos conferidos; erros cancelados em até dez dias.</li>
          <li>Combinado de pagamento e recibo por escrito.</li>
          <li>Resposta salva no WhatsApp explicando onde achar o recibo.</li>
          <li>Dúvidas tributárias do seu caso levadas ao contador.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A parte fiscal fica com você e o contador. A Made by Felipe cuida de como o seu
          consultório se apresenta em cada ponto de contato, do site ao papel
          timbrado do resumo mensal. A imersão em dois encontros de cerca de
          1h30 entende como você trabalha, para quem e aonde quer chegar. Daí
          saem o posicionamento, a identidade visual, os modelos de documento e
          o site, revisados pelo art. 20. Tudo é apresentado em até 30 dias, com
          o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se os seus documentos ainda não parecem com o seu consultório,
          marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Receita Federal do Brasil.{" "}
            <a href={MANUAL} {...ext}>
              Receita Saúde — orientações para emissão do recibo eletrônico de
              serviços de saúde
            </a>
            , versão 2.1, outubro de 2025 (com base na Instrução Normativa RFB nº
            2.240/2024 e no ADE Cofis nº 11/2025).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={CFP_RS} {...ext}>
              Psicólogas e psicólogos que atendam como pessoa física terão que
              emitir recibo digital pelo Receita Saúde a partir de 1º de janeiro
            </a>
            , 20 de dezembro de 2024.
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 4º, 9º e 20.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
