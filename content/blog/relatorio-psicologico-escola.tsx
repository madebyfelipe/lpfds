import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES06 = "https://site.cfp.org.br/wp-content/uploads/2019/09/Resolu%C3%A7%C3%A3o-CFP-n-06-2019-comentada.pdf";
const RES06_NOTICIA =
  "https://site.cfp.org.br/cfp-publica-versao-comentada-da-resolucao-sobre-a-elaboracao-de-documentos-escritos/";
const RES1_2009 = "https://site.cfp.org.br/wp-content/uploads/2009/04/resolucao2009_01.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "relatorio-psicologico-escola",
  title: "Relatório psicológico para a escola: o que pode constar, estrutura e como explicar aos pais",
  description:
    "Relatório psicológico para a escola (Res. CFP 6/2019): diferença para laudo, os 5 itens, o que não entra por sigilo, devolutiva e como falar com os pais.",
  keyword: "relatório psicológico para escola",
  tags: ["neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-17",
  summary:
    "O relatório psicológico para a escola comunica o trabalho da psicóloga e pode trazer orientações para a equipe, mas não tem a finalidade de produzir diagnóstico, que é papel do laudo, segundo a Resolução CFP nº 6/2019. Ele segue cinco itens (identificação, descrição da demanda, procedimento, análise e conclusão), usa linguagem acessível a quem vai ler e registra só o necessário para a finalidade, protegendo o sigilo da criança e da família. A entrega aos responsáveis pede entrevista devolutiva e protocolo assinado. Abaixo há um roteiro, um quadro do que entra e do que fica de fora e como explicar tudo isso aos pais.",
  faq: [
    {
      q: "Qual a diferença entre relatório e laudo psicológico para a escola?",
      a: "Pela Resolução CFP nº 6/2019, o laudo é o resultado de um processo de avaliação psicológica e serve para subsidiar decisões. O relatório comunica a atuação da psicóloga em um processo de trabalho, pode trazer orientações e encaminhamentos e não tem como finalidade produzir diagnóstico psicológico. Se a escola pede um diagnóstico, o documento adequado depende de uma avaliação psicológica."
    },
    {
      q: "A escola pode pedir o relatório direto para a psicóloga?",
      a: "O documento é entregue ao beneficiário do serviço, ao responsável legal ou ao solicitante, em entrevista devolutiva (art. 16 da Resolução CFP nº 6/2019). No atendimento de crianças, o caminho comum é combinar com os responsáveis a finalidade do relatório e entregá-lo a eles, que o levam à escola. Contato direto com a escola pede autorização da família e, pelo art. 6º do Código de Ética, só informações relevantes para qualificar o serviço."
    },
    {
      q: "O que não pode constar no relatório psicológico para a escola?",
      a: "Nada que não seja necessário para a finalidade combinada. O relatório não é a descrição literal das sessões, e o Código de Ética pede que, no atendimento à criança, se comunique aos responsáveis o estritamente essencial para promover medidas em seu benefício (art. 13). Conflitos familiares, falas da criança em sessão e hipóteses sem fundamento técnico costumam ficar de fora."
    },
    {
      q: "O relatório psicológico tem validade?",
      a: "Sim. A Resolução CFP nº 6/2019 pede que o prazo de validade do conteúdo seja indicado no último parágrafo do documento, considerando a natureza dinâmica do trabalho. Para a escola, isso ajuda a lembrar que o relatório descreve um momento e deve ser atualizado quando a situação mudar."
    },
    {
      q: "Precisa de devolutiva para entregar o relatório?",
      a: "Sim. O art. 18 da Resolução CFP nº 6/2019 diz que, para a entrega do relatório e do laudo psicológico, é dever da psicóloga realizar ao menos uma entrevista devolutiva com a pessoa atendida ou com os responsáveis legais. Se não for possível, ela precisa explicitar as razões."
    }
  ],
  cover: {
    src: "/blog/relatorio-psicologico-escola/relatorio-psicologico-escola-carteira-escolar-com-livros.jpg",
    alt: "Carteira escolar vazia com livros e um pote de lápis de cor, diante de um quadro verde de sala de aula",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mãe chega à sessão com um bilhete da coordenação: “Precisamos de um
        laudo da psicóloga para organizar as adaptações do semestre.” Você
        acompanha a criança há quatro meses, não fez uma avaliação psicológica
        formal e sabe que o que a escola precisa, de fato, são orientações
        práticas para a sala. Que documento escrever? O que pode ir para a
        escola sem expor a criança e a família?
      </p>
      <p>
        A resposta curta: na maioria desses casos, o documento é um relatório
        psicológico, não um laudo. Pela Resolução CFP nº 6/2019, o relatório
        comunica o trabalho que você fez ou está fazendo, pode trazer
        orientações e encaminhamentos, e não tem a finalidade de produzir
        diagnóstico. Ele segue cinco itens, usa linguagem que a professora
        entende e registra só o necessário. E a entrega passa por uma conversa
        com os pais. Este guia traz o roteiro, um quadro do que entra e do que
        fica de fora, e como explicar o processo às famílias, inclusive no seu
        site. Ele complementa o guia de{" "}
        <Link href="/blog/parceria-psicologo-escola" className="inst-link">
          parceria entre psicólogo e escola
        </Link>
        .
      </p>

      <section>
        <h2>O que dizem as normas sobre o relatório psicológico</h2>
        <p>
          A{" "}
          <a href={RES06} {...ext}>
            Resolução CFP nº 6/2019
          </a>{" "}
          (há uma{" "}
          <a href={RES06_NOTICIA} {...ext}>
            versão comentada publicada pelo CFP
          </a>
          ) organiza os documentos escritos da psicologia: declaração,
          atestado, relatório psicológico, relatório multiprofissional, laudo e
          parecer. O artigo 11 define o relatório como uma exposição escrita,
          descritiva e circunstanciada, que considera os condicionantes
          históricos e sociais da pessoa atendida e visa a comunicar a atuação
          profissional, podendo gerar orientações, recomendações e
          encaminhamentos, “não tendo como finalidade produzir diagnóstico
          psicológico”. O mesmo artigo pede linguagem acessível e compreensível
          ao destinatário, e diz que o relatório não é a descrição literal das
          sessões.
        </p>
        <p>
          A resolução também trata da entrega: documentos vão diretamente ao
          beneficiário, ao responsável legal ou ao solicitante, em entrevista
          devolutiva, com protocolo assinado (art. 16); a devolutiva é dever
          na entrega de relatório e laudo (art. 18); o prazo de validade do
          conteúdo fica no último parágrafo (art. 17); e documento e material
          que o fundamentou são guardados por pelo menos cinco anos (art. 15).
        </p>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          completa o quadro. O artigo 6º manda compartilhar com não psicólogos
          só as informações relevantes para qualificar o serviço, lembrando a
          quem recebe o dever de sigilo. O artigo 12 pede que, em documentos
          de trabalho multiprofissional, se registre apenas o necessário. E o
          artigo 13 diz que, no atendimento à criança, se comunica aos
          responsáveis o estritamente essencial para promover medidas em seu
          benefício.
        </p>
      </section>

      <section>
        <h2>1. Descubra o que a escola precisa antes de escolher o documento</h2>
        <p>
          O pedido da escola raramente chega com o nome certo do documento.
          “Laudo”, “relatório”, “declaração” e “parecer” são usados como
          sinônimos fora da psicologia. Antes de escrever, descubra a
          finalidade.
        </p>
        <ol>
          <li>
            <strong>Pergunte aos pais o que a escola pediu e para quê:</strong>{" "}
            adaptações em sala, plano de ensino individualizado, acompanhante,
            atendimento educacional especializado, matrícula.
          </li>
          <li>
            <strong>Confirme o tipo de trabalho que você fez:</strong> houve
            avaliação psicológica com esse objetivo ou é um acompanhamento?
          </li>
          <li>
            <strong>Escolha o documento pela finalidade:</strong> para dizer
            que a criança está em atendimento, uma declaração basta; para
            comunicar o trabalho e orientar, um relatório; para responder a uma
            pergunta diagnóstica, um laudo, que depende de avaliação.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> a escola de um menino fictício de 7
          anos pediu “laudo para adaptações”. A psicóloga conversou com a mãe,
          entendeu que o objetivo era organizar a rotina em sala e escreveu um
          relatório com orientações práticas. O diagnóstico, que já existia,
          estava no laudo de outra profissional e não precisou ser repetido.
        </p>
        <p>
          <strong>Erro comum:</strong> escrever um “laudo” sem ter feito
          avaliação psicológica, só porque a escola usou essa palavra. O guia
          de{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>{" "}
          mostra como apresentar a avaliação quando ela é o serviço.
        </p>
      </section>

      <section>
        <h2>2. Monte o relatório nos cinco itens da resolução</h2>
        <p>
          A Resolução CFP nº 6/2019 organiza o relatório psicológico em cinco
          itens. Eles podem vir em tópicos ou em texto corrido, mas todos
          precisam estar lá.
        </p>
        <ol>
          <li>
            <strong>Identificação:</strong> título “Relatório Psicológico”,
            nome completo (ou nome social) da pessoa atendida, quem solicitou,
            a finalidade e o nome da autora com o número do CRP.
          </li>
          <li>
            <strong>Descrição da demanda:</strong> o que motivou o atendimento,
            quem forneceu as informações e o que levou ao pedido do documento.
          </li>
          <li>
            <strong>Procedimento:</strong> o raciocínio técnico que justifica o
            trabalho, os recursos usados e o referencial teórico.
          </li>
          <li>
            <strong>Análise:</strong> a exposição do que foi observado, ligada
            à finalidade do documento.
          </li>
          <li>
            <strong>Conclusão:</strong> orientações, encaminhamentos e
            sugestões, com o prazo de validade no último parágrafo, local,
            data e assinatura.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de finalidade:</em> “Este relatório tem como
          finalidade comunicar à equipe pedagógica da Escola Exemplo (nome
          fictício), a pedido dos responsáveis, o acompanhamento psicológico
          em curso e orientações para a rotina em sala de aula.”
        </p>
        <p>
          <strong>Erro comum:</strong> pular a finalidade. É ela que define o
          que entra e o que fica de fora do resto do documento. A resolução
          também permite destacar, ao final, que o relatório não pode ser usado
          para fins diferentes do indicado e que tem caráter sigiloso.
        </p>
      </section>

      <section>
        <h2>3. Escreva para a professora, não para colegas</h2>
        <p>
          O artigo 11 pede linguagem acessível e compreensível ao destinatário.
          Para a escola, isso significa trocar termos técnicos por descrições
          do que acontece em sala e do que ajuda.
        </p>
        <ul>
          <li>
            <strong>Descreva comportamentos e contextos:</strong> “em
            ambientes com muito barulho, tende a se retirar do grupo” ajuda a
            professora a agir; “hipersensibilidade auditiva” sozinha, não.
          </li>
          <li>
            <strong>Traga orientações que cabem na sala:</strong> avisar antes
            de mudanças de rotina, oferecer um lugar mais calmo, dar instruções
            curtas e uma de cada vez.
          </li>
          <li>
            <strong>Diga o que você observou e onde:</strong> no consultório,
            pelos relatos da família, em uma visita à escola.
          </li>
          <li>
            <strong>Evite previsões:</strong> nada de “com essas medidas, a
            criança vai acompanhar a turma até o fim do ano”.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de orientação:</em> “Sugere-se antecipar as
          mudanças da rotina com um quadro visual na sala e permitir que a
          criança use o fone abafador nos momentos de recreio coletivo, quando
          ela pedir.”
        </p>
        <p>
          <strong>Erro comum:</strong> copiar trechos do prontuário. O
          prontuário é escrito para você e para colegas, e a{" "}
          <a href={RES1_2009} {...ext}>
            Resolução CFP nº 1/2009
          </a>{" "}
          trata dele como registro documental; o relatório se baseia nele, mas
          é outro texto, para outro leitor. O guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa para psicólogo
          </Link>{" "}
          ajuda a escolher as palavras.
        </p>
      </section>

      <section>
        <h2>4. Registre só o necessário para a finalidade</h2>
        <p>
          O relatório vai circular pela escola: coordenação, professoras,
          talvez a secretaria. Tudo o que estiver escrito ali pode ser lido por
          várias pessoas e guardado por anos. Por isso, cada informação precisa
          passar por uma pergunta: isso é necessário para a escola cumprir a
          finalidade do documento?
        </p>
        <ul>
          <li>
            <strong>Fica de fora:</strong> conflitos entre os pais, questões de
            saúde de outros familiares, falas da criança em sessão, detalhes do
            histórico que não mudam nada na sala.
          </li>
          <li>
            <strong>Entra com cuidado:</strong> diagnóstico já estabelecido,
            quando a família autorizar e quando for relevante para a finalidade.
          </li>
          <li>
            <strong>Entra:</strong> o que ajuda a escola a agir em benefício da
            criança.
          </li>
        </ul>
        <p>
          O artigo 13 do Código de Ética é o critério: o estritamente
          essencial para promover medidas em benefício da criança. Os dados de
          saúde também são dados pessoais sensíveis pela{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          (art. 11), e os de crianças pedem tratamento no melhor interesse
          delas (art. 14).
        </p>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia tinha escrito
          que a criança “passou por um período difícil após a separação dos
          pais”. Na revisão, trocou por “a família relata mudanças recentes na
          rotina da casa”, que já explicava o que a escola precisava saber.
        </p>
        <p>
          <strong>Erro comum:</strong> achar que, por ser para a escola, “é bom
          contar tudo para ajudar”. Mais informação não significa mais cuidado.
        </p>
      </section>

      <section>
        <h2>5. Entregue aos pais, com devolutiva e protocolo</h2>
        <p>
          O relatório não vai por e-mail para a coordenação. A resolução pede
          entrega em entrevista devolutiva, com protocolo assinado por quem
          recebe.
        </p>
        <ol>
          <li>
            <strong>Marque a devolutiva com os responsáveis.</strong> Leia o
            relatório com eles, explique cada parte e ouça o que querem ajustar
            ou perguntar.
          </li>
          <li>
            <strong>Peça a assinatura do protocolo de entrega</strong>, em que
            quem recebe se responsabiliza pelo uso e pelo sigilo das
            informações (art. 16, § 1º).
          </li>
          <li>
            <strong>Combine o caminho até a escola:</strong> normalmente os
            pais levam o documento. Se a família quiser que você converse com a
            escola, registre a autorização.
          </li>
          <li>
            <strong>Guarde uma cópia</strong> e o material que o fundamentou
            por pelo menos cinco anos (art. 15).
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> na devolutiva, os pais de uma menina
          fictícia pediram para tirar a menção a um episódio na festa da escola.
          A psicóloga avaliou que a orientação continuava clara sem ele e
          ajustou o texto antes de assinar.
        </p>
        <p>
          <strong>Erro comum:</strong> mandar o PDF pelo WhatsApp sem conversa.
          Se a família pedir também a versão digital, use assinatura digital e
          um envio com controle de acesso. O guia de{" "}
          <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
            e-mail profissional para psicólogo
          </Link>{" "}
          trata do envio seguro de documentos.
        </p>
      </section>

      <section>
        <h2>6. Indique a validade e combine a atualização</h2>
        <p>
          O artigo 17 pede que o prazo de validade do conteúdo esteja no último
          parágrafo do documento. Para a escola, essa linha é também um
          lembrete: o relatório descreve um momento da criança.
        </p>
        <ul>
          <li>
            <strong>Escolha um prazo coerente</strong> com a natureza do
            trabalho: um semestre ou um ano letivo costumam fazer sentido para
            orientações escolares, mas a decisão é técnica.
          </li>
          <li>
            <strong>Escreva com clareza:</strong> “O conteúdo deste relatório
            tem validade de seis meses a partir desta data.”
          </li>
          <li>
            <strong>Combine com os pais</strong> quando revisar: no início do
            próximo ano, em uma troca de escola ou quando algo mudar.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia passou a incluir,
          na devolutiva, uma data sugerida para a próxima conversa sobre a
          escola. Os pais deixaram de chegar em cima da hora pedindo um
          documento novo para a matrícula.
        </p>
        <p>
          <strong>Erro comum:</strong> deixar a escola usar o mesmo relatório
          por anos. Um documento vencido pode sustentar decisões sobre uma
          criança que já mudou muito. O guia de{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais de crianças autistas
          </Link>{" "}
          ajuda a manter as orientações vivas entre um documento e outro.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no relatório psicológico para a escola</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar no relatório psicológico para a escola"
            tabIndex={0}
          >
            <caption>Relatório psicológico para a escola: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tipo de documento</td>
                <td>Relatório para comunicar o trabalho e orientar</td>
                <td>Chamar de laudo sem avaliação psicológica</td>
              </tr>
              <tr>
                <td>Finalidade</td>
                <td>Escrita na identificação, com o solicitante</td>
                <td>Documento genérico “para quem interessar”</td>
              </tr>
              <tr>
                <td>Conteúdo</td>
                <td>O essencial para medidas em benefício da criança</td>
                <td>Conflitos familiares e falas da criança em sessão</td>
              </tr>
              <tr>
                <td>Linguagem</td>
                <td>Comportamentos, contextos e orientações práticas</td>
                <td>Jargão técnico e rótulos</td>
              </tr>
              <tr>
                <td>Conclusão</td>
                <td>Orientações, encaminhamentos e validade</td>
                <td>Previsão de resultado ou de desempenho</td>
              </tr>
              <tr>
                <td>Entrega</td>
                <td>Devolutiva com os pais e protocolo assinado</td>
                <td>PDF mandado direto à coordenação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já escreve relatórios: o encontro com a escola</h2>
        <p>
          Quando a família autoriza, uma conversa com a escola, presencial ou
          por chamada, completa o documento. O
          relatório organiza a informação; a conversa permite ouvir o que a
          professora vê e ajustar as orientações à realidade da sala.
        </p>
        <p>
          Algumas práticas ajudam: pedir à escola que diga, antes, quais são as
          dúvidas; levar as orientações do relatório em uma página; combinar o
          que pode ser compartilhado e registrar a conversa no prontuário. Se a
          escola tem equipe multiprofissional, o relatório multiprofissional
          (art. 12 da resolução) pode ser produzido em conjunto, preservando a
          autonomia de cada profissão.
        </p>
        <p>
          Lembre que a escola tem o próprio olhar e as próprias decisões
          pedagógicas. O relatório orienta, não determina o plano de ensino.
          Esse equilíbrio sustenta a parceria ao longo dos anos.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para famílias de crianças autistas, o pedido de documento da escola
          costuma vir com ansiedade: medo de que a criança perca a vaga, de que
          não tenha apoio, de que seja rotulada. Explicar o processo com
          antecedência tira peso dessa hora.
        </p>
        <ul>
          <li>
            <strong>Explique a diferença entre os documentos</strong> logo no
            início do acompanhamento, para que os pais saibam o que você pode
            emitir e o que depende de avaliação ou de outro profissional.
          </li>
          <li>
            <strong>Combine os prazos:</strong> relatório pede tempo para
            escrever e uma devolutiva. Pedido de um dia para o outro não é o
            melhor caminho.
          </li>
          <li>
            <strong>Pense com a família no que vai para a escola,</strong>{" "}
            especialmente sobre diagnóstico. Algumas famílias preferem
            compartilhar; outras, não. A decisão é delas.
          </li>
          <li>
            <strong>Escreva orientações a partir das forças da criança,</strong>{" "}
            não só das dificuldades.
          </li>
        </ul>
        <p>
          No site, uma resposta curta nas perguntas frequentes (“Você emite
          relatório para a escola?”) evita mal-entendidos antes mesmo do
          primeiro contato. O guia de{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>{" "}
          mostra como escrever, e o de{" "}
          <Link href="/blog/marketing-psicologa-infantil" className="inst-link">
            marketing para psicóloga infantil
          </Link>{" "}
          trata do resto da comunicação com as famílias.
        </p>
      </section>

      <section>
        <h2>Erros comuns no relatório psicológico para a escola</h2>
        <ul>
          <li>Escrever “laudo” sem ter feito avaliação psicológica.</li>
          <li>Não indicar a finalidade nem quem solicitou o documento.</li>
          <li>Copiar trechos do prontuário ou descrever sessões.</li>
          <li>Incluir conflitos familiares e informações que não mudam nada na sala.</li>
          <li>Usar jargão técnico que a professora não entende.</li>
          <li>Prever resultados ou desempenho escolar.</li>
          <li>Entregar sem devolutiva e sem protocolo.</li>
          <li>Esquecer o prazo de validade no último parágrafo.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do relatório psicológico para a escola</h2>
        <ul>
          <li>Finalidade confirmada com os pais e documento escolhido por ela.</li>
          <li>Cinco itens: identificação, demanda, procedimento, análise e conclusão.</li>
          <li>Nome, CRP, solicitante e finalidade na identificação.</li>
          <li>Linguagem acessível, com orientações práticas para a sala.</li>
          <li>Só o essencial para medidas em benefício da criança.</li>
          <li>Prazo de validade no último parágrafo, com local, data e assinatura.</li>
          <li>Devolutiva com os responsáveis e protocolo de entrega assinado.</li>
          <li>Cópia e material de base guardados por pelo menos cinco anos.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          páginas que explicam às famílias o que você faz, inclusive a relação
          com a escola, e cada texto revisado pelo art. 20. Tudo é apresentado
          em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se as famílias que você atende ainda chegam sem entender o seu
          trabalho, marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06} {...ext}>
              Resolução CFP nº 6/2019 comentada — elaboração de documentos
              escritos
            </a>
            , arts. 11 a 18.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06_NOTICIA} {...ext}>
              CFP publica versão comentada da resolução sobre a elaboração de
              documentos escritos
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 6º, 8º, 9º, 12 e 13.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES1_2009} {...ext}>
              Resolução CFP nº 1/2009 — registro documental
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 11 e 14.
          </li>
        </ul>
      </section>
    </>
  )
};
