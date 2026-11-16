import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES6 =
  "https://site.cfp.org.br/wp-content/uploads/2019/09/Resolu%C3%A7%C3%A3o-CFP-n-06-2019-comentada.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "parceria-psicologo-pediatra",
  title: "Parceria entre psicólogo e pediatra: como se apresentar e receber indicações com ética",
  description:
    "Como a psicóloga se apresenta a pediatras e neuropediatras, o que levar, como devolver o caso e por que comissão por indicação é proibida pelo CFP.",
  keyword: "parceria psicólogo pediatra",
  tags: ["posicionamento", "neurodivergencia"],
  publishedAt: "2026-11-14",
  summary:
    "A parceria entre psicóloga e pediatra (ou neuropediatra) é permitida e costuma nascer de uma apresentação clara do seu trabalho, não de pedidos de indicação. O Código de Ética proíbe pagar ou receber qualquer valor por encaminhamento (art. 2º, alínea p) e manda compartilhar com outros profissionais só o que qualifica o serviço, com o sigilo preservado (art. 6º). Na prática: um material curto sobre quem você atende, um canal de contato para o médico e uma devolutiva por escrito, com autorização da família.",
  faq: [
    {
      q: "Psicólogo pode pagar comissão ao pediatra que indica pacientes?",
      a: "Não. O art. 2º, alínea p, do Código de Ética proíbe receber ou pagar remuneração ou porcentagem por encaminhamento, e a alínea o proíbe receber comissões e vantagens além dos honorários. Isso vale também para presentes de valor, descontos para os pacientes do médico ou troca de indicações condicionada."
    },
    {
      q: "Como me apresentar a um neuropediatra sem parecer que estou vendendo?",
      a: "Peça um horário curto, leve uma folha com o público que você atende, a abordagem, os serviços (por exemplo, orientação parental ou psicoterapia infantil), o fluxo de encaminhamento e seus dados com CRP. Fale do que você faz e de como devolve informação ao médico, sem comparar com colegas e sem prometer resultado."
    },
    {
      q: "Posso mandar relatório para o pediatra da criança?",
      a: "Pode, com autorização dos responsáveis e só com o necessário. O art. 6º do Código de Ética manda compartilhar apenas informações relevantes para qualificar o serviço, e o art. 13 manda comunicar aos responsáveis o estritamente essencial. Quando for documento escrito, siga a Resolução CFP nº 6/2019 (relatório psicológico ou multiprofissional)."
    },
    {
      q: "Posso divulgar nas redes que trabalho em parceria com um médico?",
      a: "Pode citar parcerias com instituições, clínicas e equipes, desde que sem preço como chamariz e sem sugerir resultado garantido, como orienta a cartilha do CRP-MG. Peça autorização ao colega antes de citar o nome dele e não use casos de pacientes em comum como exemplo."
    },
    {
      q: "O pediatra pode encaminhar direto para mim pelo plano de saúde?",
      a: "Depende das regras de cada operadora, que estão fora do Código de Ética. Para a parceria, o que importa é deixar claro no seu material se você atende por convênio, por reembolso ou só particular, para que o médico oriente a família sem gerar expectativa errada."
    }
  ],
  cover: {
    src: "/blog/parceria-psicologo-pediatra/parceria-psicologo-pediatra-sala-de-espera.jpg",
    alt: "Fileira de cadeiras verdes e vermelhas vazias diante de uma parede bege",
    caption: "Foto: benzoix / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muitas famílias chegam ao consultório de psicologia infantil depois de
        ouvir do pediatra uma frase parecida com “vale procurar uma psicóloga”.
        Quando o médico não conhece ninguém, a família pesquisa sozinha no
        Google, às vezes com um diagnóstico recente de autismo ou de TDAH na
        mão e muita pressa. Quando conhece, ele dá um nome. Ser esse nome é o
        que a parceria com pediatras e neuropediatras resolve.
      </p>
      <p>
        A resposta curta: a parceria é permitida e saudável, desde que seja
        uma relação técnica entre profissionais, sem comissão, sem troca de
        favores e com o sigilo da criança no centro. Abaixo estão o que dizem
        as normas, como preparar a apresentação, o que levar ao consultório
        médico, como devolver o caso e uma parte específica para quem atende
        famílias de crianças autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          trata da relação com outras profissões em três pontos. O art. 1º,
          alínea j, pede respeito, consideração e solidariedade com o trabalho de
          outros profissionais e colaboração quando solicitada. O art. 6º diz
          que, com profissionais não psicólogos, a psicóloga encaminha o que
          extrapola o seu campo e “compartilhará somente informações relevantes
          para qualificar o serviço prestado, resguardando o caráter
          confidencial das comunicações”.
        </p>
        <p>
          O mesmo código fecha a porta para o dinheiro na indicação. O art. 2º
          proíbe, na alínea o, “pleitear ou receber comissões, empréstimos,
          doações ou vantagens outras de qualquer espécie, além dos honorários
          contratados” e, na alínea p, “receber, pagar remuneração ou
          porcentagem por encaminhamento de serviços”. A alínea i proíbe
          induzir qualquer pessoa a recorrer aos seus serviços.
        </p>
        <p>
          Quando a parceria vira divulgação, entra o art. 20: nome completo,
          CRP, só títulos que você tem, nada de preço como propaganda e nada de
          previsão taxativa de resultado. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          lembra que é possível divulgar convênios e parcerias com
          instituições e clínicas, “desde que não se use o preço como forma de
          propaganda”.
        </p>
      </section>

      <section>
        <h2>Por que o pediatra é um parceiro natural da psicologia infantil</h2>
        <p>
          O pediatra acompanha a criança desde os primeiros meses e costuma ser
          o primeiro a ouvir a preocupação dos pais com fala, sono, comportamento
          ou interação. O neuropediatra recebe os casos em que há suspeita de
          condição do neurodesenvolvimento. Os dois precisam de uma rede de
          profissionais para onde orientar a família, e essa rede quase sempre
          é montada por conhecimento pessoal.
        </p>
        <ol>
          <li>
            <strong>O médico indica quem entende.</strong> Ele precisa saber,
            em uma frase, que público você atende e com que tipo de demanda.
          </li>
          <li>
            <strong>O médico indica quem devolve.</strong> Um retorno técnico,
            curto e autorizado pela família mostra que a criança está sendo
            acompanhada.
          </li>
          <li>
            <strong>O médico indica quem é fácil de achar.</strong> Se a família
            pesquisa seu nome e encontra um site claro e um Perfil da Empresa no
            Google com endereço e contato, a indicação se completa.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga que atende crianças de 3 a
          10 anos e faz orientação parental percebe que metade das famílias
          chega “porque o pediatra mandou”. Ela decide se apresentar a três
          pediatras do bairro, com um material de uma página, em vez de
          aumentar a frequência de posts.
        </p>
        <p>
          <strong>Erro comum:</strong> tratar o pediatra como “fonte de
          pacientes”. Ele é um colega com outra responsabilidade técnica. A
          parceria só se sustenta se fizer sentido para a criança. Se você ainda
          não definiu com clareza quem atende, comece pelo{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento do consultório
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Antes de procurar o médico: defina o que você oferece</h2>
        <p>
          A primeira conversa funciona quando você sabe responder, sem
          rodeios, “para quais crianças e famílias eu sou a indicação certa?”.
          Sem isso, o médico guarda o seu cartão junto com os outros e esquece.
        </p>
        <ol>
          <li>
            <strong>Público:</strong> faixa etária, demandas que você acolhe e
            as que você encaminha para outro colega.
          </li>
          <li>
            <strong>Serviços:</strong> psicoterapia infantil, orientação
            parental, avaliação psicológica ou neuropsicológica (se você tem a
            formação), atendimento online ou presencial.
          </li>
          <li>
            <strong>Abordagem:</strong> uma frase sobre como você trabalha,
            sem jargão.
          </li>
          <li>
            <strong>Logística:</strong> bairro, horários, se há lista de espera,
            se atende por convênio, reembolso ou só particular.
          </li>
          <li>
            <strong>Limites:</strong> o que você não faz. Isso ajuda o médico a
            confiar no que você faz.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Atendo crianças de 2 a 12 anos com
          suspeita ou diagnóstico de autismo e TDAH, com psicoterapia e
          orientação aos pais. Avaliação neuropsicológica eu encaminho para a
          colega X.” Duas frases e o médico sabe quando lembrar de você.
        </p>
        <p>
          <strong>Erro comum:</strong> dizer que atende “de bebês a idosos,
          todas as demandas”. O médico procura especificidade. Esse recorte é o
          mesmo que a sua{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços
          </Link>{" "}
          precisa mostrar, então vale escrever os dois juntos.
        </p>
      </section>

      <section>
        <h2>Como pedir a primeira conversa</h2>
        <p>
          O caminho mais simples é pedir, pela secretária ou por e-mail, dez a
          quinze minutos com o médico para se apresentar como profissional da
          região que atende crianças. Ninguém gosta de ser abordado entre uma
          consulta e outra, e o pedido formal já mostra respeito pela agenda.
        </p>
        <ol>
          <li>
            Mande uma mensagem curta: quem você é, CRP, o público que atende e
            o pedido de um horário breve.
          </li>
          <li>
            Ofereça ir ao consultório dele ou conversar por vídeo. Muitos
            médicos preferem o intervalo do almoço ou o fim do expediente.
          </li>
          <li>
            Leve uma pergunta, não um discurso: “como o senhor costuma orientar
            as famílias quando percebe uma demanda emocional ou de
            comportamento?”. A resposta mostra o que ele precisa.
          </li>
          <li>
            Termine combinando como ele pode falar com você quando tiver uma
            dúvida sobre um caso.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de mensagem:</em> “Dr. Paulo, sou Ana Souza,
          psicóloga (CRP 00/00000), atendo crianças com autismo e TDAH aqui no
          bairro. Gostaria de me apresentar em 10 minutos, quando for melhor
          para o senhor. Posso ir até o consultório.”
        </p>
        <p>
          <strong>Erro comum:</strong> chegar com brinde, cesta ou “cortesia”.
          Mesmo um presente pequeno pode ser lido como vantagem ligada à
          indicação, e o art. 2º, alínea o, não faz exceção por valor. Para o
          tom da mensagem, o post sobre{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz do consultório
          </Link>{" "}
          ajuda a escrever sem soar como vendedor.
        </p>
      </section>

      <section>
        <h2>O que levar: o material de apresentação</h2>
        <p>
          Leve uma folha, impressa e em PDF, que o médico possa guardar ou
          repassar à secretária. É ela que vai estar na gaveta quando uma
          família perguntar “conhece alguma psicóloga?”.
        </p>
        <h3>O que a folha precisa ter</h3>
        <ul>
          <li>Nome completo, a palavra psicóloga, CRP e número (art. 20, a).</li>
          <li>Público e serviços, nas palavras definidas antes.</li>
          <li>Formação e títulos que você realmente tem (art. 20, b).</li>
          <li>Como a família agenda: telefone, WhatsApp, site.</li>
          <li>Como o médico fala com você sobre um caso.</li>
          <li>Endereço e se há atendimento online.</li>
        </ul>
        <h3>O que a folha não pode ter</h3>
        <ul>
          <li>Preço, desconto ou “valor especial para pacientes do doutor”.</li>
          <li>Promessa de resultado ou de prazo.</li>
          <li>Depoimento de família, foto de criança ou de atendimento.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma folha A5 com a marca do
          consultório, um parágrafo de apresentação, três tópicos de serviço e
          um QR code para a página do site que explica o primeiro contato. O
          mesmo arquivo vai por e-mail depois da conversa.
        </p>
        <p>
          <strong>Erro comum:</strong> entregar só um cartão de visita. O cartão
          identifica, mas não explica para quem você é a indicação. Veja o que
          cabe em cada peça no post sobre{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Encaminhamento e devolutiva: o que compartilhar com o médico</h2>
        <p>
          A parceria se confirma no primeiro caso em comum. O médico encaminha,
          a família agenda e, em algum momento, ele quer saber como a criança
          está. O que você diz, e como, define se ele volta a indicar.
        </p>
        <ol>
          <li>
            <strong>Autorização primeiro.</strong> Combine com os responsáveis,
            de preferência por escrito, o que pode ser compartilhado com o
            médico. O art. 13 do Código manda comunicar aos responsáveis o
            “estritamente essencial” e o art. 6º, b, limita o que vai ao outro
            profissional ao que qualifica o serviço.
          </li>
          <li>
            <strong>Retorno curto.</strong> Confirme que a criança está em
            acompanhamento, a frequência e, se for o caso, uma recomendação que
            dependa do médico.
          </li>
          <li>
            <strong>Documento escrito segue a Resolução CFP nº 6/2019.</strong>{" "}
            Se o médico pede algo formal, a{" "}
            <a href={RES6} {...ext}>
              Resolução CFP nº 6/2019
            </a>{" "}
            define o relatório psicológico (identificação, demanda,
            procedimento, análise e conclusão) e o relatório multiprofissional.
          </li>
          <li>
            <strong>Canal seguro.</strong> Evite mandar informação clínica por
            aplicativo pessoal. Dado de saúde é dado sensível para a{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>{" "}
            (art. 5º, II, e art. 11).
          </li>
        </ol>
        <p>
          <strong>Erro comum:</strong> mandar ao médico o resumo das sessões. O
          relatório não é a descrição literal dos atendimentos, diz a própria
          Resolução 6/2019. Para o canal de mensagens, o post sobre{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          mostra como separar o profissional do pessoal.
        </p>
      </section>

      <section>
        <h2>Comissão, presente e troca de indicação: onde está o limite</h2>
        <p>
          O limite é simples: nenhum valor, vantagem ou condição pode estar
          ligado ao encaminhamento. A indicação acontece porque faz sentido para
          a criança, e só por isso.
        </p>
        <ul>
          <li>
            <strong>Comissão ou porcentagem:</strong> proibida nos dois
            sentidos, pagar ou receber (art. 2º, p).
          </li>
          <li>
            <strong>Presentes e vantagens:</strong> proibidos quando além dos
            honorários (art. 2º, o).
          </li>
          <li>
            <strong>Desconto para pacientes do médico:</strong> vira preço como
            chamariz (art. 20, d) e cria um vínculo financeiro com a indicação.
          </li>
          <li>
            <strong>“Eu indico você, você me indica”:</strong> indicar de volta é
            natural quando o caso pede um médico. Combinar indicação como
            moeda de troca, não.
          </li>
          <li>
            <strong>Aluguel de sala no consultório médico:</strong> é possível,
            desde que o valor seja de mercado e não dependa do número de
            pacientes encaminhados.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um neuropediatra propõe que a psicóloga
          “retribua” cada indicação com um percentual da primeira sessão. A
          resposta ética é recusar e explicar que o Código proíbe, mantendo a
          porta aberta para a parceria técnica.
        </p>
        <p>
          <strong>Erro comum:</strong> achar que, como o médico propôs, a
          responsabilidade é dele. O art. 2º, alínea e, também proíbe ser
          conivente com faltas éticas. Para outras parcerias com instituições,
          como escolas, veja{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar na parceria com pediatras</h2>
        <div className="inst-blog__table" role="region" aria-label="Parceria com pediatra: o que a psicóloga pode e o que deve evitar" tabIndex={0}>
          <table>
            <caption>Parceria com pediatra: o que a psicóloga pode e o que deve evitar</caption>
            <thead>
              <tr>
                <th scope="col">Situação</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apresentação</td>
                <td>Pedir um horário curto e levar um material com público, serviços e CRP</td>
                <td>Abordar o médico no corredor ou pedir “me indica”</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Folha com formação real, serviços e contato</td>
                <td>Preço, desconto, depoimento ou foto de criança</td>
              </tr>
              <tr>
                <td>Indicação</td>
                <td>Receber e fazer indicações pelo interesse da criança</td>
                <td>Comissão, porcentagem, presente ou troca combinada</td>
              </tr>
              <tr>
                <td>Devolutiva</td>
                <td>Retorno curto, autorizado pela família, com o necessário</td>
                <td>Resumo das sessões ou dados por canal pessoal</td>
              </tr>
              <tr>
                <td>Divulgação</td>
                <td>Citar a parceria com autorização do colega</td>
                <td>Sugerir resultado garantido ou usar casos em comum</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem parceiros: redes de cuidado mais organizadas</h2>
        <p>
          Quando a parceria funciona com dois ou três médicos, o passo seguinte
          é organizar a rede. Um documento interno com os profissionais para
          quem você encaminha (fonoaudióloga, terapeuta ocupacional,
          neuropsicóloga, psiquiatra infantil) facilita a vida da família e
          mostra ao médico que a criança vai circular entre pessoas que se
          conhecem.
        </p>
        <p>
          Também vale combinar com cada médico o formato de retorno que ele
          prefere: uma mensagem pela secretária, um e-mail mensal ou só um
          relatório quando houver mudança relevante. E revise a cada semestre
          se o seu material ainda descreve o que você faz. Lista de espera
          longa, mudança de endereço ou um serviço novo precisam chegar ao
          parceiro antes de chegarem à família.
        </p>
        <p>
          Quem atende em equipe pode pensar em uma{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            marca de clínica multidisciplinar
          </Link>
          , mas a lógica é a mesma: cada profissional responde pela própria
          ética, e nenhum encaminhamento interno pode ter remuneração por
          indicação.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Nas famílias de crianças autistas, o neuropediatra costuma ser o
          ponto de partida. É comum que os pais saiam da consulta com um
          diagnóstico ou uma suspeita, uma lista de terapias e pouca orientação
          sobre por onde começar. A psicóloga que o médico indica entra num
          momento de muita ansiedade.
        </p>
        <ul>
          <li>
            <strong>Fale a língua do médico e a da família.</strong> No material
            para o neuropediatra, seja técnica. Na página do site para onde ele
            manda a família, seja acolhedora e concreta: como é o primeiro
            contato, quanto tempo leva, o que a família precisa levar.
          </li>
          <li>
            <strong>Use linguagem neuroafirmativa.</strong> Evite “tratar o
            autismo” ou “recuperar a criança”. O post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            traz trocas práticas.
          </li>
          <li>
            <strong>Deixe clara a sua parte na rede.</strong> Se você faz
            orientação parental e não faz intervenção intensiva, diga isso ao
            médico. Ele vai indicar com mais precisão.
          </li>
          <li>
            <strong>Não prometa prazo.</strong> Famílias perguntam “em quanto
            tempo ele vai falar?”. Nem você nem o material podem responder isso
            (art. 20, e).
          </li>
        </ul>
        <p>
          Para quem atende esse público, vale ter uma página específica no
          site, como mostra o post sobre{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Pedir indicação em vez de apresentar o trabalho.</li>
          <li>Levar presente, oferecer desconto ou aceitar porcentagem.</li>
          <li>Material genérico, sem público definido.</li>
          <li>Devolutiva sem autorização da família ou com detalhes demais.</li>
          <li>Prometer vaga imediata e depois deixar a família na fila.</li>
          <li>Site desatualizado: o médico indica, a família não encontra.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da parceria</h2>
        <ul>
          <li>Público, serviços e limites escritos em duas frases.</li>
          <li>Folha de apresentação com nome, CRP, formação real e contato.</li>
          <li>Mensagem de pedido de horário pronta.</li>
          <li>Modelo de autorização da família para devolutiva.</li>
          <li>Canal seguro para falar de casos.</li>
          <li>Site e Perfil da Empresa no Google atualizados.</li>
          <li>Nenhum valor, presente ou condição ligado à indicação.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros define com você o
          posicionamento, o público e as palavras do consultório. Desse
          trabalho sai o material de apresentação para médicos e escolas, com a
          mesma marca do site e das redes, revisado pelo art. 20. Tudo é apresentado em até 30 dias. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer chegar aos pediatras da sua região com um material
          que explica o seu trabalho, marque uma conversa de 15 minutos.
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
            , arts. 1º (alínea j), 2º (alíneas e, i, o e p), 6º, 9º, 13 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES6} {...ext}>
              Resolução CFP nº 6/2019 (comentada)
            </a>{" "}
            — elaboração de documentos escritos, arts. 11 e 12.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026 (convênios e parcerias).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , art. 5º, II, e art. 11.
          </li>
        </ul>
      </section>
    </>
  )
};
