import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES06 = "https://www.sepsi.ufscar.br/arquivos/regulamentacao/resolucaocfp-06-2019.pdf";
const RES06_CFP =
  "https://site.cfp.org.br/cfp-publica-versao-comentada-da-resolucao-sobre-a-elaboracao-de-documentos-escritos/";
const RECEITA_SAUDE =
  "https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/auditoria-fiscal/conformidade/perguntas-e-respostas-receita-saude";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "papelaria-consultorio-psicologia",
  title: "Papelaria para consultório de psicologia: 8 peças, o que cada uma precisa trazer e como alinhar à marca",
  description:
    "Papel timbrado, carimbo, documentos, recibo, contrato e cartão: o que a papelaria do consultório de psicologia precisa trazer e como dar unidade à marca.",
  keyword: "papelaria para consultório de psicologia",
  tags: ["identidade-visual", "divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "A papelaria do consultório de psicologia é o conjunto de peças impressas e digitais que levam a marca: papel timbrado, carimbo, modelos de documento, recibo, contrato, cartões e envelope. Cada peça tem regras próprias: documentos psicológicos seguem a Resolução CFP nº 6/2019, o recibo de quem atende como pessoa física sai pelo Receita Saúde e toda peça de divulgação traz nome completo, “psicóloga(o)” e CRP. Psicóloga não prescreve, então receituário não faz parte do kit.",
  faq: [
    {
      q: "Psicólogo precisa de receituário?",
      a: "Não. A Resolução CFP nº 6/2019 lista as modalidades de documento psicológico: declaração, atestado psicológico, relatório, laudo e parecer. Receita não está entre elas, porque prescrever medicamento não é atribuição da psicologia. Para orientações escritas, use o papel timbrado."
    },
    {
      q: "O que deve ter no papel timbrado de psicólogo?",
      a: "Nome completo ou nome social, a palavra psicóloga(o), CRP com número, e contato e endereço do consultório. Se houver pessoa jurídica registrada, entram também o nome da empresa e a inscrição dela no CRP. O documento em si termina com local, data, carimbo com nome e inscrição, e assinatura."
    },
    {
      q: "Psicólogo ainda pode dar recibo em papel?",
      a: "Para quem atende como pessoa física, a Receita Federal tornou obrigatória, desde 1º de janeiro de 2025, a emissão do recibo eletrônico pelo Receita Saúde, na data do pagamento. Quem atende por CNPJ segue a nota fiscal da empresa. Confirme o seu caso com o contador."
    },
    {
      q: "O carimbo de psicólogo é obrigatório?",
      a: "Nos documentos psicológicos, sim: a Resolução CFP nº 6/2019 pede que o documento termine com local, data de emissão, carimbo com nome completo ou nome social e inscrição profissional, e assinatura."
    }
  ],
  cover: {
    src: "/blog/papelaria-consultorio-psicologia/papelaria-consultorio-psicologia-envelope-e-cartoes.jpg",
    alt: "Envelope branco, cartão preto, papel kraft e clipes organizados sobre uma mesa clara, como um kit de papelaria",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A família recebe uma declaração de comparecimento num papel sem
        cabeçalho, em fonte diferente do relatório entregue na semana anterior.
        O contrato veio por WhatsApp num modelo baixado da internet. Nada disso
        está errado do ponto de vista clínico, mas cada peça conta uma história
        diferente sobre o consultório, e algumas deixam de lado o que as normas
        pedem.
      </p>
      <p>
        A papelaria do consultório de psicologia resolve as duas coisas: dá
        unidade à marca e coloca, em cada peça, o que o Conselho e a Receita
        exigem. Abaixo estão as oito peças que formam o kit, o que cada uma
        precisa trazer, o que fica de fora e como montar tudo de forma que você
        use no dia a dia, não só no dia da entrega da identidade visual.
      </p>

      <section>
        <h2>O que entra na papelaria do consultório</h2>
        <p>
          Papelaria é toda peça que carrega a marca e passa pela mão de
          pacientes, famílias, escolas ou colegas. No consultório de psicologia,
          ela se divide em três grupos:
        </p>
        <ul>
          <li>
            <strong>Documentos:</strong> papel timbrado, carimbo e os modelos de
            declaração, atestado, relatório, laudo e parecer.
          </li>
          <li>
            <strong>Administrativo:</strong> recibo (ou nota), contrato,
            protocolo de entrega de documentos e envelope.
          </li>
          <li>
            <strong>Relacionamento e divulgação:</strong> cartão de visita,
            cartão de agendamento e assinatura de e-mail.
          </li>
        </ul>
        <p>
          Os três grupos usam a mesma identidade visual, mas não com a mesma
          intensidade. O documento é técnico e pede discrição; o cartão é
          divulgação e pode mostrar mais da marca. Se a sua identidade ainda não
          tem regras claras de uso, comece pelo guia de{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Quatro regras orientam a papelaria. A primeira é o{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>
          : toda divulgação informa nome completo, o CRP e o número de registro,
          e não usa preço como propaganda, nem promete resultado. Cartão e
          folder são divulgação, e a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          lembra que o Conselho não restringe os meios, incluindo panfleto,
          folder e cartão.
        </p>
        <p>
          A segunda é a{" "}
          <a href={RES06} {...ext}>
            Resolução CFP nº 6/2019
          </a>
          , que define como se escrevem os documentos psicológicos: quais são,
          o que cada um contém, como se encerram e por quanto tempo se guardam.
          O CFP publicou também uma{" "}
          <a href={RES06_CFP} {...ext}>
            versão comentada
          </a>
          .
        </p>
        <p>
          A terceira vem da Receita Federal: o{" "}
          <a href={RECEITA_SAUDE} {...ext}>
            manual do Receita Saúde
          </a>{" "}
          diz que psicólogos que atendem como pessoa física são obrigados, desde
          1º de janeiro de 2025, a emitir o recibo eletrônico (Instrução
          Normativa RFB nº 2.240/2024). A quarta é o art. 4º do Código: o valor
          é comunicado ao usuário antes do início do trabalho, o que dá ao
          contrato um papel claro.
        </p>
      </section>

      <section>
        <h2>1. Papel timbrado: a base de tudo</h2>
        <p>
          O papel timbrado é o modelo de página que recebe qualquer documento
          ou comunicado. Se ele estiver certo, metade da papelaria está pronta.
        </p>
        <ol>
          <li>
            <strong>Cabeçalho:</strong> logo ou assinatura da marca, nome
            completo ou nome social, “psicóloga(o)” e CRP com número.
          </li>
          <li>
            <strong>Rodapé:</strong> endereço, telefone ou WhatsApp, e-mail e
            site. Se houver pessoa jurídica registrada no CRP, o nome dela e a
            inscrição.
          </li>
          <li>
            <strong>Área de texto:</strong> margens generosas e uma fonte de
            leitura confortável, sem marca d’água atrás do texto.
          </li>
          <li>
            <strong>Duas versões:</strong> um arquivo editável (Word ou Google
            Docs) e um PDF para impressão.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia usa o símbolo da
          marca pequeno no canto superior esquerdo, o nome e o CRP ao lado, e
          uma linha fina na cor principal separando o cabeçalho do texto. No
          rodapé, uma linha de contato em cinza. O papel parece da marca sem
          competir com o conteúdo do documento.
        </p>
        <p>
          O erro comum é encher o cabeçalho com slogan, abordagens e público
          atendido. Em documento técnico, isso soa como propaganda e ocupa o
          espaço que o texto precisa. Deixe esse conteúdo para o cartão e o site.
          As cores do cabeçalho seguem a paleta da marca; o post sobre{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          ajuda a escolher a que imprime bem.
        </p>
      </section>

      <section>
        <h2>2. Carimbo e assinatura</h2>
        <p>
          O carimbo é obrigatório nos documentos psicológicos. A Resolução CFP
          nº 6/2019 pede que o documento termine com local, data de emissão,
          carimbo em que conste nome completo ou nome social e inscrição
          profissional, e assinatura.
        </p>
        <ul>
          <li>Conteúdo mínimo: nome completo ou nome social, “Psicóloga(o)” e CRP com número.</li>
          <li>Tipografia simples, sem logo: o carimbo identifica, não divulga.</li>
          <li>Tamanho que caiba ao lado da assinatura sem cobrir texto.</li>
          <li>Versão digital (imagem) para documentos em PDF, guardada com cuidado.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> carimbo de duas linhas, com o nome numa
          linha e “Psicóloga · CRP 00/00000” na outra, na mesma família de
          fonte do papel timbrado. Discreto, legível, coerente.
        </p>
        <p>
          O erro comum é usar o logo completo como carimbo. Ele fica pequeno
          demais para ler o CRP e transforma um elemento de identificação em
          peça de marca. Outro erro é deixar a imagem do carimbo e da assinatura
          numa pasta compartilhada, ao alcance de quem não deveria usar.
        </p>
      </section>

      <section>
        <h2>3. Modelos de declaração, atestado e relatório</h2>
        <p>
          Os modelos de documento levam a marca só no papel timbrado; o texto
          segue a estrutura da Resolução CFP nº 6/2019. O art. 8º lista as
          modalidades: declaração, atestado psicológico, relatório (psicológico
          ou multiprofissional), laudo psicológico e parecer psicológico.
        </p>
        <p>Ao montar os modelos:</p>
        <ol>
          <li>Crie um arquivo por modalidade, com os itens que a resolução pede para cada uma.</li>
          <li>
            Escreva em terceira pessoa e de forma impessoal, como pede o art. 6º.
          </li>
          <li>
            Preveja numeração de páginas: a resolução pede todas as laudas
            numeradas, rubricadas da primeira à penúltima e assinatura na última.
          </li>
          <li>Reserve o espaço do encerramento: local, data, carimbo e assinatura.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> o modelo de declaração de comparecimento
          tem o título, o nome da pessoa atendida, a finalidade, dias e horários,
          e o bloco de encerramento já posicionado. A psicóloga preenche os
          campos e não mexe no layout.
        </p>
        <p>
          O erro comum é decorar o documento: ícones, cores fortes, frases
          motivacionais. Documento psicológico é instrumento de comunicação
          técnica, e quem o recebe (escola, empresa, juiz, médico) precisa ler
          o conteúdo, não a marca.
        </p>
      </section>

      <section>
        <h2>4. Receituário: por que ele não entra</h2>
        <p>
          Psicóloga não prescreve medicamento, então não precisa de receituário.
          Receita não está entre as modalidades de documento da Resolução CFP nº
          6/2019, e o art. 20, alínea g, do Código veda propor atividades que
          sejam atribuições privativas de outras categorias.
        </p>
        <p>
          Mesmo assim, “receituário para psicólogo” aparece em muito pacote de
          papelaria vendido pronto. O problema não é só o nome: um bloco com
          cara de receita médica sugere ao paciente uma função que não é sua.
        </p>
        <p>O que usar no lugar, quando você precisa entregar algo escrito:</p>
        <ul>
          <li>
            <strong>Orientações gerais</strong> (rotina de sono, combinados de
            tela): papel timbrado comum, com título claro.
          </li>
          <li>
            <strong>Encaminhamento a outro profissional:</strong> papel
            timbrado, com o nome do serviço indicado e o motivo descrito com
            cuidado.
          </li>
          <li>
            <strong>Comunicação formal sobre o atendimento:</strong> a
            modalidade certa da resolução (declaração, relatório etc.).
          </li>
        </ul>
        <p>
          O erro comum é aceitar o kit do fornecedor sem revisar. Peça para
          trocar o receituário por um bloco de anotações neutro ou simplesmente
          tire a peça do orçamento.
        </p>
      </section>

      <section>
        <h2>5. Recibo e nota fiscal</h2>
        <p>
          Quem atende como pessoa física emite o recibo pelo Receita Saúde,
          na data do pagamento. O{" "}
          <a href={RECEITA_SAUDE} {...ext}>
            manual da Receita Federal
          </a>{" "}
          inclui psicólogos na lista de obrigados desde 1º de janeiro de 2025 e
          diz que, em pagamento parcelado, sai um recibo por parcela.
        </p>
        <p>Na prática, isso muda a papelaria assim:</p>
        <ul>
          <li>O talão de recibo com a sua marca deixa de ser o documento fiscal.</li>
          <li>
            Quem atende por CNPJ emite a nota fiscal da empresa, conforme a
            regra do município; o contador orienta.
          </li>
          <li>
            O que continua útil é um comprovante de combinado (datas, forma de
            pagamento), entregue com a marca, sem substituir o recibo oficial.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia manda por e-mail,
          todo mês, um resumo das sessões realizadas em papel timbrado digital,
          com a observação de que o recibo oficial foi emitido no Receita Saúde.
        </p>
        <p>
          O erro comum é continuar entregando só o recibo de papel “porque o
          paciente pediu”. Se a dúvida é sobre pessoa física ou jurídica, o post
          sobre{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            CNPJ e nome fantasia para psicólogo
          </Link>{" "}
          explica as diferenças na marca.
        </p>
      </section>

      <section>
        <h2>6. Contrato e termo de combinados</h2>
        <p>
          O contrato registra, antes de começar, o que o art. 4º do Código pede
          que você comunique: o valor e as condições do trabalho. Ele não é
          peça de divulgação, então o preço pode e deve estar nele. O que a
          cartilha do CRP-MG recomenda é que valor e condições sejam informados
          de forma reservada, à pessoa atendida, e não em publicidade.
        </p>
        <p>O que costuma entrar num termo de combinados claro:</p>
        <ol>
          <li>Partes, com nome, “psicóloga(o)” e CRP.</li>
          <li>Serviço, frequência e duração das sessões.</li>
          <li>Valor, forma de pagamento e política de faltas e remarcações.</li>
          <li>Sigilo e seus limites, em linguagem simples.</li>
          <li>
            Como os dados pessoais são tratados, conforme a{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>
            .
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um termo de duas páginas, com títulos
          curtos, espaço entre os blocos e as cláusulas de faltas em destaque.
          A família lê em cinco minutos e assina sem precisar perguntar o que
          cada parágrafo quer dizer.
        </p>
        <p>
          O erro comum é usar um contrato jurídico genérico, denso, que ninguém
          lê. Para o texto legal, consulte um advogado; para a forma, aplique a
          mesma tipografia e hierarquia da marca.
        </p>
      </section>

      <section>
        <h2>7. Cartões, envelope e protocolo de entrega</h2>
        <p>
          Cartão de visita, cartão de agendamento e envelope são as peças em que
          a marca aparece com mais força. O cartão de visita é divulgação e
          segue o art. 20; o guia de{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita para psicólogo
          </Link>{" "}
          detalha o que colocar.
        </p>
        <ul>
          <li>
            <strong>Cartão de agendamento:</strong> espaço para data e horário
            da próxima sessão, contato e política de remarcação resumida.
          </li>
          <li>
            <strong>Envelope:</strong> para entregar documentos. A Resolução CFP
            nº 6/2019 diz que eles são entregues diretamente ao beneficiário,
            ao responsável legal ou ao solicitante, em entrevista devolutiva.
          </li>
          <li>
            <strong>Protocolo de entrega:</strong> a mesma resolução torna
            obrigatório manter protocolo com a assinatura de quem recebeu. Um
            modelo simples, em papel timbrado, resolve.
          </li>
        </ul>
        <p>
          O erro comum é imprimir o nome do paciente ou o tipo de documento na
          face do envelope. Prefira envelope liso com a marca e identificação
          por dentro.
        </p>
      </section>

      <section>
        <h2>8. Versões digitais e guarda</h2>
        <p>
          Boa parte da papelaria hoje circula em PDF, e-mail e WhatsApp. As
          versões digitais precisam do mesmo cuidado das impressas.
        </p>
        <ul>
          <li>Modelos em PDF com campos preenchíveis para os documentos que se repetem.</li>
          <li>
            Assinatura de e-mail com nome, “psicóloga(o)”, CRP e contato; o post
            sobre{" "}
            <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
              e-mail profissional para psicólogo
            </Link>{" "}
            mostra um modelo.
          </li>
          <li>
            Pasta organizada para a guarda: a Resolução CFP nº 6/2019 (art. 15)
            manda guardar os documentos e o material que os fundamentou, físico
            ou digital, por no mínimo cinco anos.
          </li>
        </ul>
        <p>
          O erro comum é mandar documento psicológico solto por WhatsApp, sem
          protocolo. A entrega em devolutiva e o protocolo valem também quando o
          arquivo é digital.
        </p>
      </section>

      <section>
        <h2>Pode ou evitar na papelaria</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar na papelaria do consultório de psicologia" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar na papelaria do consultório de psicologia</caption>
            <thead><tr><th scope="col">Na peça</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Nome completo, “psicóloga(o)” e CRP no timbrado e no cartão</td><td>Sim, é obrigatório na divulgação</td></tr>
              <tr><td>Logo no cabeçalho do documento psicológico</td><td>Sim, discreto</td></tr>
              <tr><td>Valor da sessão no contrato</td><td>Sim, é comunicação reservada</td></tr>
              <tr><td>Valor ou “primeira sessão grátis” no cartão ou folder</td><td>Não</td></tr>
              <tr><td>Bloco de receituário</td><td>Não, psicóloga não prescreve</td></tr>
              <tr><td>Slogan que promete resultado no cartão</td><td>Não</td></tr>
              <tr><td>Nome do paciente na face do envelope</td><td>Evite</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem o básico: um sistema de modelos</h2>
        <p>
          Quando o consultório cresce, a papelaria vira sistema. Em vez de dez
          arquivos soltos, você tem um arquivo-mestre com os estilos (título,
          subtítulo, texto, legenda) e todos os modelos herdam dele. Trocou o
          endereço, troca num lugar só.
        </p>
        <ul>
          <li>Defina estilos de parágrafo no editor de texto, não formatação à mão.</li>
          <li>Use uma fonte de texto com boa leitura em 11 ou 12 pontos.</li>
          <li>Garanta contraste alto entre texto e fundo; cinza claro some na impressão.</li>
          <li>Nomeie os arquivos com padrão: “modelo-declaracao-comparecimento.docx”.</li>
          <li>Numa clínica, defina quem pode editar os modelos e quem só usa.</li>
        </ul>
        <p>
          Esse cuidado é o que separa uma identidade bonita no dia da entrega de
          uma marca que continua coerente depois de um ano de uso.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Nesse atendimento, a papelaria circula mais: declaração de
          comparecimento para o trabalho dos pais, relatório para a escola,
          relatório multiprofissional com a equipe, encaminhamentos. Cada
          documento é lido por pessoas diferentes, com expectativas diferentes.
        </p>
        <ul>
          <li>
            <strong>Relatório para a escola:</strong> a modalidade e a
            finalidade claras no topo, linguagem técnica sem jargão
            desnecessário, e só o que a escola precisa saber.
          </li>
          <li>
            <strong>Linguagem:</strong> descreva necessidades e apoios, não
            déficits; o guia de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajuda na revisão dos modelos.
          </li>
          <li>
            <strong>Leitura fácil para a família:</strong> títulos claros,
            parágrafos curtos e o protocolo de entrega explicado na devolutiva.
          </li>
          <li>
            <strong>Sigilo:</strong> o envelope liso importa mais quando o
            documento passa pela agenda da criança ou pela secretaria da escola.
          </li>
        </ul>
        <p>
          Se você trabalha em parceria com escolas, o post sobre{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>{" "}
          trata do que comunicar e do que preservar.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Comprar um kit pronto com receituário e não revisar.</li>
          <li>Ter um cabeçalho diferente em cada documento.</li>
          <li>Esquecer o CRP no cartão ou no rodapé do timbrado.</li>
          <li>Colocar valor ou desconto em peça de divulgação.</li>
          <li>Usar o logo como carimbo.</li>
          <li>Entregar documento psicológico sem protocolo.</li>
          <li>Tratar o talão de recibo como documento fiscal depois de 2025.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da papelaria</h2>
        <ul>
          <li>Papel timbrado com nome, “psicóloga(o)”, CRP e contato, em editável e PDF.</li>
          <li>Carimbo com nome completo ou nome social e inscrição.</li>
          <li>Um modelo por modalidade de documento da Resolução CFP nº 6/2019.</li>
          <li>Recibo pelo Receita Saúde (pessoa física) ou nota fiscal (CNPJ).</li>
          <li>Contrato com valor, faltas, sigilo e dados pessoais.</li>
          <li>Cartão de visita e de agendamento sem preço nem promessa.</li>
          <li>Envelope liso e protocolo de entrega.</li>
          <li>Pasta de guarda por cinco anos, no mínimo.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a papelaria sai junto com a identidade visual do
          consultório. São dois encontros de imersão para definir posicionamento,
          identidade visual e verbal, e a marca é entregue em até 30 dias, com as
          peças revisadas pelo art. 20 do Código de Ética. O caminho está na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e nos{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua papelaria hoje é um conjunto de arquivos soltos, vale uma
          conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06} {...ext}>
              Resolução CFP nº 6/2019
            </a>{" "}
            (elaboração de documentos escritos), arts. 6º, 8º, 15 e 16; e{" "}
            <a href={RES06_CFP} {...ext}>
              nota sobre a versão comentada
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 4º e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , 2ª edição, 2026.
          </li>
          <li>
            Receita Federal.{" "}
            <a href={RECEITA_SAUDE} {...ext}>
              Receita Saúde: orientações para emissão do recibo eletrônico de serviços de saúde
            </a>
            , versão 2.1, outubro de 2025.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 (LGPD)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
