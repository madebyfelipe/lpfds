import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES13 = "https://abmes.org.br/public/arquivos/legislacoes/Resolucao-CFP-013-2022-06-15.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const GOOGLE_HORARIOS = "https://support.google.com/business/answer/15300403?hl=pt-BR";
const CVV = "https://cvv.org.br/";

export const post: Post = {
  slug: "ferias-psicologo-avisar-pacientes",
  title: "Férias do psicólogo: como avisar pacientes, ajustar o site e as redes e cuidar das urgências",
  description:
    "Férias do psicólogo: quando e como avisar pacientes, mensagens de exemplo, site, Google e WhatsApp, plano para urgências e cuidados com famílias de crianças.",
  keyword: "férias do psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "As férias do psicólogo começam a ser comunicadas no contrato: ali fica combinado como você avisa ausências e o que acontece com as sessões. Depois, o aviso pessoal vem com antecedência, em sessão e por escrito, com as datas, a volta e o que fazer em uma urgência. Site, Perfil da Empresa no Google, WhatsApp e redes repetem a mesma informação, sem expor a sua vida pessoal e sem deixar ninguém sem caminho enquanto você descansa.",
  faq: [
    {
      q: "Com quanto tempo de antecedência o psicólogo deve avisar as férias?",
      a: "Nenhuma norma do CFP fixa um prazo. O que o Código de Ética pede é informação clara sobre o trabalho e acordos que respeitem os direitos de quem é atendido (art. 1º, e e f). Na prática, muitas psicólogas avisam cerca de um mês antes de férias longas e lembram de novo nas últimas sessões; o importante é que o prazo esteja combinado no contrato e seja cumprido."
    },
    {
      q: "Paciente paga a sessão durante as férias do psicólogo?",
      a: "Depende do que foi combinado no contrato terapêutico. A Resolução CFP nº 13/2022 pede que o contrato, verbal ou escrito, evidencie condições, honorários e frequência (art. 3º, I). Combine antes como ficam as sessões nas suas férias e nas férias do paciente, e repita isso no aviso, para que não haja surpresa."
    },
    {
      q: "O que fazer com pacientes em situação de risco durante as férias?",
      a: "Planeje antes. Converse com a pessoa sobre o período, combine com uma colega de confiança uma retaguarda para urgências, com o consentimento do paciente para compartilhar o necessário, e deixe por escrito os caminhos de crise, como o CVV (188) e os serviços de urgência da rede de saúde. O art. 1º, k, do Código de Ética fala em fornecer ao substituto as informações necessárias à continuidade do trabalho."
    },
    {
      q: "Preciso avisar no Google que o consultório está em férias?",
      a: "Ajuda. O Perfil da Empresa no Google permite ajustar horários especiais para dias com funcionamento diferente, e a ajuda do Google explica como editar esses horários. Assim quem procura o consultório no período não encontra o perfil marcado como aberto sem ninguém para atender."
    }
  ],
  cover: {
    src: "/blog/ferias-psicologo-avisar-pacientes/ferias-psicologo-avisar-pacientes-malas-e-chapeu-de-palha.jpg",
    alt: "Malas antigas empilhadas com um chapéu de palha por cima, sobre um piso claro",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você comprou as passagens há meses, mas só na véspera percebe que
        metade dos pacientes ainda não sabe das datas, a mensagem automática
        do WhatsApp não está configurada e o site continua mostrando horários
        para as próximas semanas. A viagem começa com o celular na mão,
        respondendo um por um.
      </p>
      <p>
        A resposta curta: as férias do psicólogo se comunicam em camadas. A
        primeira é o contrato, onde fica combinado como você avisa ausências e
        o que acontece com as sessões. A segunda é o aviso pessoal a cada
        paciente ou família, com antecedência, em sessão e por escrito. A
        terceira são os canais públicos: site, Perfil da Empresa no Google,
        WhatsApp e redes, todos com as mesmas datas. E por baixo de tudo, um
        plano para urgências, para que ninguém fique sem caminho enquanto você
        descansa. Este guia mostra cada camada, com mensagens de exemplo que
        você pode adaptar.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          Nenhuma resolução do CFP trata das férias da psicóloga pelo nome. Elas
          entram nas regras sobre contrato, informação e continuidade do
          trabalho.
        </p>
        <ul>
          <li>
            <strong>Acordos e informação.</strong> O{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>{" "}
            pede acordos de prestação de serviço que respeitem os direitos de
            quem é atendido (art. 1º, e) e informação clara sobre o trabalho
            (art. 1º, f).
          </li>
          <li>
            <strong>Contrato.</strong> A{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022
            </a>{" "}
            diz que, na psicoterapia, o contrato verbal ou escrito evidencia
            direitos e deveres das partes, condições, honorários, frequência e
            tempo de sessão (art. 3º, I). Ausências planejadas fazem parte
            dessas condições.
          </li>
          <li>
            <strong>Continuidade.</strong> O art. 1º, k, do Código pede que a
            psicóloga sugira colegas quando o trabalho não puder ser
            continuado, fornecendo ao substituto as informações necessárias. Em
            férias, o trabalho não é interrompido, mas a lógica da retaguarda é
            a mesma.
          </li>
          <li>
            <strong>Sigilo.</strong> O art. 9º vale também para o aviso: a
            mensagem coletiva, o post e a resposta automática não podem
            identificar ninguém.
          </li>
        </ul>
      </section>

      <section>
        <h2>1. Combine as férias no contrato, antes de precisar</h2>
        <p>
          O aviso de férias mais tranquilo é o que já foi combinado no primeiro
          encontro. Quando o contrato diz como você comunica ausências, o aviso
          vira só uma confirmação.
        </p>
        <ol>
          <li>
            <strong>Prazo de aviso:</strong> com quanto tempo você avisa as
            suas férias e com quanto tempo espera saber das férias do
            paciente.
          </li>
          <li>
            <strong>Sessões no período:</strong> o que acontece com as sessões
            que caem nas suas férias e nas do paciente.
          </li>
          <li>
            <strong>Recessos fixos:</strong> se você costuma parar em períodos
            certos do ano, diga quais.
          </li>
          <li>
            <strong>Urgências:</strong> como funciona o contato durante
            ausências planejadas.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de cláusula:</em> “Faço duas pausas por ano,
          em geral em janeiro e em julho, e aviso as datas com pelo menos 30
          dias de antecedência. Nesses períodos não há sessões. Em urgência,
          indico uma colega de retaguarda e os serviços de crise listados no
          aviso.”
        </p>
        <p>
          <strong>Erro comum:</strong> deixar o assunto para a hora das
          férias e decidir, caso a caso, quem paga o quê. O guia de{" "}
          <Link href="/blog/contrato-terapeutico-psicologo" className="inst-link">
            contrato terapêutico para psicólogo
          </Link>{" "}
          tem um modelo de seção sobre faltas, remarcações e férias.
        </p>
      </section>

      <section>
        <h2>2. Avise cada paciente em sessão, com antecedência</h2>
        <p>
          O aviso das férias começa na sessão, de viva voz. Para muitas pessoas, a ausência da terapeuta é tema de
          trabalho, e a conversa precisa de espaço.
        </p>
        <ul>
          <li>
            <strong>Quando:</strong> no prazo combinado no contrato e de novo
            nas duas últimas sessões antes da pausa.
          </li>
          <li>
            <strong>O que dizer:</strong> datas de saída e de volta, o que
            acontece com as sessões e o que fazer numa urgência.
          </li>
          <li>
            <strong>Espaço para reação:</strong> pergunte como a pessoa recebe
            a notícia. Algumas querem planejar o período; outras precisam falar
            do que a pausa desperta.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de fala:</em> “Quero te avisar com
          antecedência: vou estar em férias de 5 a 25 de janeiro. Nossa última
          sessão antes da pausa é dia 2, e voltamos dia 27, no mesmo horário.
          Antes disso, vamos combinar o que você faz se precisar de apoio nesse
          período.”
        </p>
        <p>
          <strong>Erro comum:</strong> avisar só por mensagem, na última
          semana. Para quem está em um momento delicado, a notícia por escrito,
          sem conversa, pode soar como abandono.
        </p>
      </section>

      <section>
        <h2>3. Confirme por escrito, com as mesmas datas</h2>
        <p>
          Depois da conversa, uma mensagem curta registra as datas e os
          caminhos de urgência. Ela evita confusão e serve de consulta durante
          o período.
        </p>
        <h3>O que a mensagem traz</h3>
        <ul>
          <li>Datas de saída e de volta.</li>
          <li>Data da última sessão antes da pausa e da primeira depois.</li>
          <li>O que acontece com as sessões, como combinado no contrato.</li>
          <li>Contato de retaguarda, se houver, e caminhos de crise.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de mensagem:</em> “Oi, Marina. Como
          conversamos, estarei em férias de 5 a 25 de janeiro. Nossa última
          sessão é dia 2 e voltamos dia 27, às 19h. Nesse período não leio
          mensagens. Em urgência, você pode falar com a psicóloga Ana (contato
          combinado na sessão) ou ligar 188, do CVV, a qualquer hora. Em
          situação de risco imediato, procure o pronto atendimento mais
          próximo.”
        </p>
        <p>
          <strong>Erro comum:</strong> mensagem coletiva em lista de
          transmissão ou grupo, com todos os contatos visíveis. Mande
          individualmente, ou por lista de transmissão, em que cada pessoa
          recebe como mensagem própria. O guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          explica esse cuidado.
        </p>
      </section>

      <section>
        <h2>4. Monte o plano de urgências antes de sair</h2>
        <p>
          Férias tranquilas dependem de um plano para o que pode dar errado.
          Ele é feito antes e é individual: nem todo paciente precisa da mesma
          retaguarda.
        </p>
        <ol>
          <li>
            <strong>Mapeie quem precisa de atenção:</strong> pessoas em crise
            recente, em risco ou em momentos delicados.
          </li>
          <li>
            <strong>Combine uma retaguarda:</strong> uma colega de confiança
            que aceite receber contatos urgentes no período.
          </li>
          <li>
            <strong>Peça consentimento:</strong> antes de passar à colega
            qualquer informação, combine com o paciente o que será
            compartilhado. O sigilo (Código, art. 9º) continua valendo.
          </li>
          <li>
            <strong>Escreva os caminhos de crise:</strong> o{" "}
            <a href={CVV} {...ext}>
              CVV
            </a>{" "}
            atende pelo 188, 24 horas, sem custo de ligação, e os serviços de
            urgência da rede de saúde recebem situações agudas.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia combina com uma
          colega uma retaguarda recíproca: cada uma cobre as férias da outra.
          Antes de sair, ela conversa com os três pacientes que podem precisar
          e, com o consentimento deles, passa à colega só o essencial para um
          contato de urgência.
        </p>
        <p>
          <strong>Erro comum:</strong> resolver as urgências “atendendo pelo
          celular da praia”. Além de não descansar, você atende sem as
          condições adequadas que o art. 1º, c, do Código pede.
        </p>
      </section>

      <section>
        <h2>5. Atualize o site e o Perfil da Empresa no Google</h2>
        <p>
          Quem procura uma psicóloga no meio das suas férias precisa saber
          que você está fora e quando volta. Site e Google mostram isso a quem
          ainda não é paciente.
        </p>
        <ul>
          <li>
            <strong>Site:</strong> um aviso curto na página de contato e, se o
            site permitir, uma faixa discreta: “Consultório em férias de 5 a 25
            de janeiro. Mensagens recebidas no período serão respondidas a
            partir do dia 26.”
          </li>
          <li>
            <strong>Agendamento online:</strong> bloqueie as datas no sistema,
            para que ninguém marque uma sessão que não vai acontecer.
          </li>
          <li>
            <strong>Google:</strong> ajuste os horários especiais do período. A{" "}
            <a href={GOOGLE_HORARIOS} {...ext}>
              ajuda do Perfil da Empresa sobre horários
            </a>{" "}
            explica como editar horários regulares e especiais.
          </li>
          <li>
            <strong>Postagem no Google:</strong> um aviso com as datas e a
            volta.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> esquecer de desfazer. Faixa de férias
          no site em março passa a impressão de site abandonado. Coloque na
          agenda o dia de tirar o aviso. Os guias de{" "}
          <Link href="/blog/agendamento-online-psicologo" className="inst-link">
            agendamento online para psicólogo
          </Link>{" "}
          e do{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          cobrem o resto da configuração.
        </p>
      </section>

      <section>
        <h2>6. Configure a resposta automática do WhatsApp e do e-mail</h2>
        <p>
          A resposta automática atende quem escreve sem saber das férias:
          novos contatos, famílias da lista de espera, escolas. Ela precisa
          dizer três coisas e não mais que isso.
        </p>
        <ol>
          <li>Que você está fora e até quando.</li>
          <li>Quando a mensagem será respondida.</li>
          <li>O que fazer em urgência.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de resposta automática:</em> “Olá! Estou em
          férias até 25 de janeiro e respondo as mensagens a partir do dia 26.
          Se for uma urgência, ligue 188 (CVV, 24 horas) ou procure o pronto
          atendimento mais próximo. Psicóloga Ana Souza, CRP 00/00000.”
          (nome e CRP fictícios).
        </p>
        <p>
          O WhatsApp Business tem um recurso de mensagem de ausência, e os
          serviços de e-mail têm resposta automática de férias. Confira na
          ajuda de cada um como ativar e agendar.
        </p>
        <p>
          <strong>Erro comum:</strong> resposta automática que convida a pessoa
          a “contar o que está acontecendo” para você ler na volta. A mensagem
          fica parada no celular por semanas, às vezes com conteúdo sensível. O
          guia de{" "}
          <Link href="/blog/email-profissional-para-psicologo" className="inst-link">
            e-mail profissional para psicólogo
          </Link>{" "}
          tem mais sobre isso.
        </p>
      </section>

      <section>
        <h2>7. Avise nas redes sem expor a sua vida pessoal</h2>
        <p>
          Nas redes, o aviso de férias é informação prática. Não precisa de
          foto da viagem nem de detalhes de onde você está.
        </p>
        <ul>
          <li>
            Um story ou post com as datas, a volta e o que fazer em urgência.
          </li>
          <li>
            Destaque fixo com o aviso durante o período, se você usa
            destaques.
          </li>
          <li>Identificação com nome completo e CRP, como em toda divulgação.</li>
        </ul>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aponta, entre os cuidados nas redes, a perenidade do que se publica e
          as publicações associadas à imagem da psicóloga que não sejam
          adequadas ao exercício profissional, e recomenda cuidado para não
          confundir perfil pessoal e publicidade. Fotos da viagem, se você
          quiser postar, ficam melhor num perfil pessoal, separado do
          profissional.
        </p>
        <p>
          <strong>Erro comum:</strong> usar as férias como gancho de venda,
          com “volto em fevereiro com agenda aberta, garanta seu horário”. A
          frase empurra a pessoa a decidir por pressa, e o art. 2º, i, do
          Código veda induzir alguém a recorrer aos seus serviços. Se você
          tiver vagas na volta, informe com calma; o guia de{" "}
          <Link href="/blog/lista-de-espera-consultorio" className="inst-link">
            lista de espera no consultório
          </Link>{" "}
          mostra como.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no aviso de férias</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao avisar as férias do psicólogo"
            tabIndex={0}
          >
            <caption>Aviso de férias do psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Canal</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sessão</td>
                <td>Aviso com antecedência e espaço para a reação</td>
                <td>Contar só na última semana</td>
              </tr>
              <tr>
                <td>Mensagem</td>
                <td>Individual, com datas e caminhos de urgência</td>
                <td>Grupo com todos os contatos visíveis</td>
              </tr>
              <tr>
                <td>Urgência</td>
                <td>Retaguarda combinada, CVV 188 e rede de saúde</td>
                <td>Atender pelo celular durante a viagem</td>
              </tr>
              <tr>
                <td>Site e Google</td>
                <td>Aviso com datas e horários especiais</td>
                <td>Aviso esquecido semanas depois da volta</td>
              </tr>
              <tr>
                <td>Redes</td>
                <td>Post informativo com nome e CRP</td>
                <td>“Garanta seu horário na volta”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já planeja as férias: a volta</h2>
        <p>
          A volta também se comunica. Na primeira semana, a agenda costuma
          encher de remarcações, mensagens acumuladas e pedidos novos.
        </p>
        <ul>
          <li>
            Reserve o primeiro dia para responder mensagens e reorganizar a
            agenda, sem sessões.
          </li>
          <li>
            Responda primeiro quem está em acompanhamento, depois a lista de
            espera, depois os contatos novos.
          </li>
          <li>Tire os avisos do site, do Google e da resposta automática.</li>
          <li>
            Na primeira sessão, abra espaço para falar do período: algumas
            pessoas viveram coisas importantes na sua ausência.
          </li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para muitas crianças autistas e neurodivergentes, a rotina é apoio, e
          a mudança dela pede preparo. A pausa da terapia costuma coincidir com
          as férias escolares, quando a rotina inteira da casa muda.
        </p>
        <ul>
          <li>
            <strong>Avise a família com mais antecedência</strong>, para que
            ela possa organizar o período.
          </li>
          <li>
            <strong>Prepare a criança</strong> de forma adequada à idade, com
            os pais: um calendário visual com o último dia, a pausa e a volta
            ajuda muitas crianças a entender a interrupção.
          </li>
          <li>
            <strong>Oriente os pais para o período:</strong> sugestões de
            rotina e de previsibilidade nas férias, sem prometer resultados.
          </li>
          <li>
            <strong>Combine com a equipe:</strong> se a criança é atendida
            também por outras profissionais, avise as datas, com autorização da
            família, para que a rede não pare toda ao mesmo tempo sem aviso.
          </li>
          <li>
            <strong>Retaguarda:</strong> para famílias que vivem crises
            frequentes, combine o que fazer em cada situação antes de sair.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais de crianças autistas
          </Link>{" "}
          ajuda a montar orientações por escrito para o período.
        </p>
      </section>

      <section>
        <h2>Erros comuns no aviso de férias</h2>
        <ul>
          <li>Nada combinado no contrato sobre ausências e sessões.</li>
          <li>Aviso só por mensagem, sem conversa em sessão.</li>
          <li>Mensagem em grupo, expondo os contatos.</li>
          <li>Nenhum plano para quem pode precisar de apoio urgente.</li>
          <li>Agenda online aberta para datas em que você está fora.</li>
          <li>Férias usadas como gancho de venda.</li>
          <li>Avisos esquecidos no site e no Google depois da volta.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist das férias do psicólogo</h2>
        <ul>
          <li>Contrato com prazo de aviso e regra para as sessões no período.</li>
          <li>Aviso em sessão, no prazo combinado, e lembrete nas últimas sessões.</li>
          <li>Mensagem individual com datas, volta e caminhos de urgência.</li>
          <li>Retaguarda combinada e consentimento para compartilhar o essencial.</li>
          <li>Site, agendamento e Google atualizados.</li>
          <li>Resposta automática no WhatsApp e no e-mail.</li>
          <li>Post informativo nas redes, com nome e CRP.</li>
          <li>Dia marcado para tirar os avisos e reorganizar a agenda.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          páginas de contato e de perguntas frequentes fáceis de atualizar em
          férias e recessos, e cada texto revisado pelo art. 20. Tudo é
          apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu site ainda não ajuda nessas horas, marque uma conversa de
          15 minutos.
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
            , arts. 1º (c, e, f, k), 2º (i) e 9º.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022 — exercício da psicoterapia
            </a>{" "}
            (DOU de 21/06/2022, cópia da ABMES), art. 3º.
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
            Google.{" "}
            <a href={GOOGLE_HORARIOS} {...ext}>
              Ajuda do Perfil da Empresa: editar horários
            </a>
            .
          </li>
          <li>
            <a href={CVV} {...ext}>
              CVV — Centro de Valorização da Vida
            </a>{" "}
            (188, 24 horas, sem custo de ligação).
          </li>
        </ul>
      </section>
    </>
  )
};
