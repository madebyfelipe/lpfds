import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const RES13 = "https://abmes.org.br/public/arquivos/legislacoes/Resolucao-CFP-013-2022-06-15.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "divulgar-supervisao-clinica",
  title: "Como divulgar supervisão clínica para colegas: 7 passos dentro do Código de Ética",
  description:
    "Como divulgar supervisão clínica para colegas: o que a Res. CFP 13/2022 exige de quem supervisiona, como apresentar o formato e cuidar do sigilo dos casos.",
  keyword: "como divulgar supervisão clínica",
  tags: ["posicionamento", "divulgacao-etica"],
  publishedAt: "2026-11-20",
  summary:
    "A divulgação de supervisão segue as mesmas regras da publicidade de serviços psicológicos, como lembra a cartilha do CRP-MG: nome completo e CRP, só títulos que você tem, sem preço como chamariz e sem promessa. Para supervisionar psicoterapia, a Resolução CFP nº 13/2022 pede inscrição regular no CRP e experiência como psicoterapeuta compatível com a atividade. Divulgue para quem é a supervisão, a abordagem, o formato e como o sigilo dos casos é cuidado.",
  faq: [
    {
      q: "Quem pode oferecer supervisão clínica em psicologia?",
      a: "Para supervisão e orientação em psicoterapia, o art. 8º da Resolução CFP nº 13/2022 pede que a psicóloga esteja regularmente inscrita no Conselho Regional e tenha experiência como psicoterapeuta que lhe garanta capacitação pessoal, teórica e técnica compatível com a atividade. Não existe um número mínimo de anos fixado nessa resolução; a capacitação precisa ser real e demonstrável."
    },
    {
      q: "Posso divulgar supervisão no Instagram?",
      a: "Pode, com as mesmas regras da divulgação de atendimento. A cartilha de publicidade do CRP-MG diz que a publicidade de cursos livres, supervisões e mentorias feita por psicólogas segue as mesmas diretrizes da publicidade de serviços psicológicos: nome completo e CRP, só qualificações que você tem, sem preço como propaganda, sem previsão de resultado e sem sensacionalismo."
    },
    {
      q: "Posso divulgar o valor da supervisão?",
      a: "O art. 20, d, do Código de Ética veda usar o preço do serviço como forma de propaganda, e a cartilha do CRP-MG estende as regras de publicidade às supervisões. Na prática, informe o valor na conversa ou em proposta enviada a quem pediu, e não use desconto, “primeira supervisão grátis” ou preço promocional como chamariz."
    },
    {
      q: "Como falar dos casos discutidos em supervisão sem quebrar o sigilo?",
      a: "Não fale de casos na divulgação. Nos encontros, combine que os casos são apresentados sem nome, sem dados que identifiquem a pessoa e com o mínimo necessário, e que o material não é compartilhado fora do grupo. O dever de sigilo do art. 9º do Código de Ética vale para a supervisora e para quem apresenta o caso."
    },
    {
      q: "Supervisão em grupo ou individual: qual divulgar?",
      a: "Divulgue o formato que você consegue sustentar com qualidade. O grupo costuma atrair quem está começando e busca troca; o individual, quem quer aprofundar casos específicos. Diga na página quantas pessoas o grupo tem no máximo, a frequência e a duração, para que a colega escolha sabendo o que vai encontrar."
    }
  ],
  cover: {
    src: "/blog/divulgar-supervisao-clinica/divulgar-supervisao-clinica-notebook-e-livros.jpg",
    alt: "Notebook com um texto na tela ao lado de uma caneca e de livros empilhados, diante de uma parede de tijolos brancos",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você atende há anos, estuda a sua abordagem com constância e colegas
        mais novas já pedem para “trocar uma ideia” sobre casos. Oferecer
        supervisão parece o passo natural, mas aí vem a dúvida: como divulgar
        sem parecer venda de curso de internet, e o que o Conselho permite?
      </p>
      <p>
        A resposta curta: supervisão se divulga com as mesmas regras de
        qualquer serviço psicológico. Nome completo e CRP, só títulos que você
        tem, sem preço como chamariz e sem promessa de resultado. E, antes de
        divulgar, confira se você cumpre o que a Resolução CFP nº 13/2022 pede
        de quem supervisiona psicoterapia: inscrição regular e experiência
        clínica compatível.
      </p>
      <p>
        Abaixo estão as normas, sete passos para montar a oferta e a
        divulgação, uma tabela do que pode e do que evitar e uma parte para
        quem supervisiona colegas que atendem crianças autistas e
        neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas sobre supervisão e divulgação</h2>
        <p>
          A{" "}
          <a href={RES13} {...ext}>
            Resolução CFP nº 13/2022
          </a>{" "}
          trata da supervisão em psicoterapia no art. 8º. Quem supervisiona
          deve estar regularmente inscrita no Conselho Regional e ter
          experiência como psicoterapeuta que garanta “capacitação pessoal,
          teórica e técnica compatível com essa atividade”. Quando há
          estagiários, a supervisora zela pela qualidade técnica e pelo rigor
          ético e informa às pessoas atendidas que se trata de atividade
          educativa supervisionada.
        </p>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          completa. O art. 1º, b, pede que a psicóloga assuma só atividades
          para as quais esteja capacitada. O art. 9º trata do sigilo, que vale
          para os casos levados à supervisão. O art. 17 diz que docentes e
          supervisores devem orientar e exigir dos estudantes a observância do
          Código.
        </p>
        <p>
          Para a divulgação, a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade profissional do CRP-MG (abril de 2026)
          </a>{" "}
          é explícita: a publicidade de cursos livres, supervisões e mentorias
          feita por psicólogas “deve seguir as mesmas diretrizes” da
          publicidade de serviços psicológicos. Isso traz para a supervisão
          todo o art. 20 do Código: nome completo e CRP, só títulos que você
          possui, sem preço como propaganda, sem previsão taxativa de
          resultados, sem autopromoção em detrimento de colegas e sem
          sensacionalismo.
        </p>
      </section>

      <section>
        <h2>1. Defina para quem é a sua supervisão</h2>
        <p>
          A divulgação começa pela pergunta “quem eu supervisiono bem?”. Uma
          oferta para “psicólogos em geral” compete com todo mundo; uma oferta
          para um público claro é encontrada por quem precisa dela.
        </p>
        <ul>
          <li>
            <strong>Momento de carreira:</strong> recém-formadas, quem está
            abrindo o consultório, quem muda de área.
          </li>
          <li>
            <strong>Abordagem:</strong> a sua, dita pelo nome, sem misturar
            linhas que você não pratica.
          </li>
          <li>
            <strong>Público atendido pela colega:</strong> crianças, famílias,
            adolescentes, adultos.
          </li>
          <li>
            <strong>Tipo de demanda:</strong> casos clínicos, organização do
            consultório, escrita de documentos.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Supervisão clínica em terapia
          cognitivo-comportamental para psicólogas que atendem crianças e
          orientam famílias, nos primeiros anos de consultório.”
        </p>
        <p>
          <strong>Erro comum:</strong> oferecer supervisão em temas que você
          conhece só de leitura. O art. 1º, b, pede capacitação real, e a
          colega vai levar casos de verdade. Se você ainda está definindo o
          seu recorte, o guia de{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          ajuda a chegar nele.
        </p>
      </section>

      <section>
        <h2>2. Mostre a formação e a experiência sem adjetivos</h2>
        <p>
          Colegas decidem pela formação e pela prática, não por adjetivos.
          Liste o que você fez, com datas e instituições, e deixe que a lista
          fale.
        </p>
        <ol>
          <li>Graduação, CRP e ano de início na clínica.</li>
          <li>Especializações e formações concluídas, com instituição.</li>
          <li>Título de especialista do CFP, se tiver, com o nome exato.</li>
          <li>Áreas de atuação atuais e há quanto tempo.</li>
          <li>Docência, publicações ou grupos de estudo que você conduz.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Psicóloga (CRP 06/000000),
          clínica desde 2014. Especialização em Terapia
          Cognitivo-Comportamental na Infância (instituição X, 2016). Atende
          crianças e orienta famílias. Coordena um grupo de estudos sobre
          desenvolvimento infantil desde 2020.”
        </p>
        <p>
          <strong>Erro comum:</strong> chamar-se “especialista” sem o título
          registrado ou “referência em supervisão” sem prova. O art. 20, b,
          permite citar apenas títulos e qualificações que você possui. O post{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            psicólogo pode se dizer especialista?
          </Link>{" "}
          explica a diferença entre formação e título.
        </p>
      </section>

      <section>
        <h2>3. Explique o formato com clareza</h2>
        <p>
          A colega quer saber como vai funcionar antes de mandar mensagem.
          Responda na página: modalidade, duração, frequência, quantas pessoas
          por grupo e como os casos são preparados.
        </p>
        <ul>
          <li>Individual, em grupo ou os dois.</li>
          <li>Presencial, online ou híbrido; se online, por qual meio seguro.</li>
          <li>Frequência (semanal, quinzenal, mensal) e duração do encontro.</li>
          <li>Tamanho máximo do grupo.</li>
          <li>Como a colega prepara o caso: resumo escrito, sem identificação.</li>
          <li>Se há leitura de apoio ou só discussão de casos.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Grupos de até seis
          psicólogas, encontros quinzenais online de 1h30. Cada encontro
          discute dois casos, apresentados por escrito sem dados que
          identifiquem a pessoa atendida.”
        </p>
        <p>
          <strong>Erro comum:</strong> descrever a supervisão como “jornada de
          transformação profissional”. A frase não diz nada sobre o formato e
          beira a promessa. Concretude convence mais do que entusiasmo. Se
          você também vende material, compare com o guia{" "}
          <Link href="/blog/psicologo-vender-curso-material" className="inst-link">
            psicólogo pode vender curso?
          </Link>
          , que trata de produtos.
        </p>
      </section>

      <section>
        <h2>4. Mostre como o sigilo dos casos é cuidado</h2>
        <p>
          Quem leva um caso à supervisão leva junto o sigilo da pessoa
          atendida. A sua página deve dizer como isso é protegido, porque essa
          é uma preocupação de colegas cuidadosas, justamente as que você
          quer atrair.
        </p>
        <ol>
          <li>
            Casos apresentados sem nome, sem escola, sem bairro, sem detalhes
            que identifiquem.
          </li>
          <li>Material escrito não é encaminhado nem guardado fora do combinado.</li>
          <li>
            Em grupo, combinado explícito de que o que se discute ali não sai
            dali.
          </li>
          <li>
            Encontros online em ambiente reservado, sem gravação, salvo acordo
            com finalidade clara.
          </li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> no primeiro encontro de um
          grupo, a supervisora lê um combinado de sigilo de cinco linhas e cada
          participante confirma. O mesmo texto está resumido na página do
          serviço.
        </p>
        <p>
          <strong>Erro comum:</strong> usar trechos de casos discutidos em
          supervisão como conteúdo de Instagram, mesmo “anonimizados”. Detalhes
          clínicos combinados com o perfil da colega podem identificar a pessoa.
          O art. 2º, q, do Código veda apresentar resultados de serviços em
          meios de comunicação de forma a expor pessoas.
        </p>
      </section>

      <section>
        <h2>5. Escolha onde as colegas vão encontrar você</h2>
        <p>
          Supervisão é um serviço de colega para colega. Os canais que
          funcionam são os da rede profissional, não os de pacientes.
        </p>
        <ul>
          <li>
            <strong>Site:</strong> uma página própria de supervisão, separada
            das páginas para pacientes, com título claro.
          </li>
          <li>
            <strong>Newsletter para colegas:</strong> uma lista separada da de
            famílias, com textos sobre a prática clínica.
          </li>
          <li>
            <strong>Grupos de estudo e associações:</strong> conduzir ou
            participar de grupos aproxima colegas da sua forma de pensar.
          </li>
          <li>
            <strong>Indicação:</strong> supervisoras, ex-colegas de formação e
            docentes conhecem quem está procurando.
          </li>
          <li>
            <strong>Conteúdo:</strong> textos e vídeos sobre dúvidas clínicas
            comuns, sem casos.
          </li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma psicóloga escreve uma vez
          por mês para a lista de colegas sobre um tema da clínica infantil e
          termina o texto com um link para a página de supervisão. Não há
          contagem regressiva nem “últimas vagas”.
        </p>
        <p>
          <strong>Erro comum:</strong> misturar, no mesmo perfil e no mesmo
          post, conteúdo para famílias e oferta para colegas. Os dois públicos
          se confundem. O guia de{" "}
          <Link href="/blog/newsletter-para-psicologo" className="inst-link">
            newsletter para psicólogo
          </Link>{" "}
          mostra como separar listas.
        </p>
      </section>

      <section>
        <h2>6. Converse sobre valor sem usá-lo como propaganda</h2>
        <p>
          O valor da supervisão se informa a quem pergunta, por mensagem ou
          proposta, e se registra num combinado por escrito. O que fica fora
          da divulgação é o preço como isca.
        </p>
        <ul>
          <li>Informe o valor na conversa, com o que está incluído.</li>
          <li>Combine por escrito frequência, faltas e encerramento.</li>
          <li>Emita recibo, como em qualquer serviço.</li>
          <li>Se fizer supervisão voluntária, não a use para captar clientes.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> a página termina com “Para
          saber valores e horários disponíveis, envie uma mensagem com o seu
          momento de carreira e o que você busca na supervisão”.
        </p>
        <p>
          <strong>Erro comum:</strong> “primeira supervisão grátis” ou “50% para
          recém-formadas” em post. A cartilha do CRP-MG estende à supervisão as
          regras da publicidade, e o art. 20, d, veda o preço como forma de
          propaganda. Para o recibo, veja o guia de{" "}
          <Link href="/blog/recibo-psicologo" className="inst-link">
            recibo de psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>7. Prepare a primeira conversa</h2>
        <p>
          A primeira conversa com uma candidata a supervisionanda é parte da
          divulgação: é nela que a colega decide. Um roteiro simples deixa o
          encontro útil para as duas.
        </p>
        <ol>
          <li>Onde ela atende, para quem e há quanto tempo.</li>
          <li>O que ela espera da supervisão e o que já tentou.</li>
          <li>Se a abordagem dela conversa com a sua.</li>
          <li>Formato, frequência e combinados de sigilo.</li>
          <li>Se for o caso, indicação de outra supervisora mais adequada.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma colega pede supervisão
          para casos de avaliação neuropsicológica, que não é a sua área. Você
          explica o seu recorte e indica duas colegas que fazem isso. A colega
          lembra de você para outra demanda meses depois.
        </p>
        <p>
          <strong>Erro comum:</strong> aceitar toda supervisionanda para encher
          o grupo. Uma pessoa fora do recorte atrasa o grupo e frustra a
          própria colega. Indicar bem é parte da reputação; o post sobre{" "}
          <Link href="/blog/indicacao-entre-psicologos" className="inst-link">
            indicação entre psicólogos
          </Link>{" "}
          trata disso.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação de supervisão</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar ao divulgar supervisão clínica para colegas"
            tabIndex={0}
          >
            <caption>Divulgação de supervisão clínica: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Formação</td>
                <td>Listar formações, datas e instituições</td>
                <td>“Especialista” sem título; “referência” sem prova</td>
              </tr>
              <tr>
                <td>Formato</td>
                <td>Tamanho do grupo, frequência e duração</td>
                <td>“Jornada de transformação” sem dizer como funciona</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>Informar a quem pergunta e registrar por escrito</td>
                <td>Desconto, gratuidade ou “últimas vagas” em post</td>
              </tr>
              <tr>
                <td>Casos</td>
                <td>Temas gerais da prática clínica</td>
                <td>Trechos de casos discutidos, mesmo “anônimos”</td>
              </tr>
              <tr>
                <td>Resultados</td>
                <td>Descrever o que a supervisão oferece</td>
                <td>“Mais segurança e mais pacientes em 3 meses”</td>
              </tr>
              <tr>
                <td>Colegas</td>
                <td>Falar do seu jeito de trabalhar</td>
                <td>Diminuir outras supervisoras ou abordagens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já supervisiona: dar forma à oferta</h2>
        <p>
          Se você já supervisiona informalmente, o próximo passo é dar forma ao
          que existe. Escreva um combinado de uma página com formato, sigilo,
          valor, faltas e encerramento, e use o mesmo texto para todas. Isso
          tira a supervisão do campo do favor e protege a relação entre
          colegas.
        </p>
        <p>
          Depois, pense em temas recorrentes. Se as supervisionandas trazem
          sempre as mesmas dúvidas, como primeira entrevista com os pais ou
          escrita de relatório para a escola, isso pode virar um grupo
          temático com começo e fim. E, se você supervisiona estagiários numa
          clínica-escola, lembre que o art. 8º da Res. CFP 13/2022 pede
          informar às pessoas atendidas que o atendimento é atividade
          educativa supervisionada. A{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            página sobre mim
          </Link>{" "}
          pode contar essa trajetória de docência sem adjetivos.
        </p>
      </section>

      <section>
        <h2>Para quem supervisiona colegas que atendem crianças autistas e neurodivergentes</h2>
        <p>
          Muitas psicólogas recém-formadas recebem cedo famílias de crianças
          autistas, com TDAH ou outras condições do neurodesenvolvimento, e
          buscam supervisão justamente para isso. Se esse é o seu recorte, a
          divulgação pode dizer com clareza o que a supervisão cobre.
        </p>
        <ul>
          <li>Primeira entrevista e devolutiva com os responsáveis.</li>
          <li>Trabalho em rede com escola, pediatra, fonoaudiologia e terapia ocupacional.</li>
          <li>Escrita de documentos, como relatório para a escola.</li>
          <li>Linguagem que respeita a criança e a família.</li>
          <li>Limites da atuação e quando encaminhar.</li>
        </ul>
        <p>
          Evite frases que transformam a supervisão em atalho: “domine o
          atendimento de autismo em 8 encontros”. Isso é previsão de resultado
          e não respeita a complexidade do tema. Diga o que se faz nos
          encontros e qual é a sua experiência com esse público. Para as
          dúvidas mais comuns das supervisionandas, os guias de{" "}
          <Link href="/blog/devolutiva-avaliacao-pais" className="inst-link">
            devolutiva para os pais
          </Link>{" "}
          e de{" "}
          <Link href="/blog/relatorio-psicologico-escola" className="inst-link">
            relatório psicológico para escola
          </Link>{" "}
          podem servir de material de apoio.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Oferecer supervisão sem a experiência clínica que o tema pede.</li>
          <li>Usar adjetivos e títulos que você não tem.</li>
          <li>Não dizer formato, frequência e tamanho do grupo.</li>
          <li>Divulgar desconto, gratuidade ou contagem regressiva.</li>
          <li>Transformar casos de supervisão em conteúdo.</li>
          <li>Misturar oferta para colegas com conteúdo para famílias.</li>
          <li>Aceitar supervisionandas fora do seu recorte.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da divulgação de supervisão</h2>
        <ul>
          <li>Inscrição regular no CRP e experiência compatível (Res. CFP 13/2022, art. 8º).</li>
          <li>Público da supervisão definido em uma frase.</li>
          <li>Formação listada com datas e instituições.</li>
          <li>Formato, frequência, duração e tamanho do grupo na página.</li>
          <li>Combinado de sigilo escrito e resumido no site.</li>
          <li>Valor só na conversa e no combinado; nada de preço como isca.</li>
          <li>Nome completo e CRP em todas as peças.</li>
          <li>Roteiro da primeira conversa pronto.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com
          páginas separadas para pacientes e para colegas e cada texto
          revisado pelo art. 20. Tudo é apresentado em até 30 dias, com o site
          incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer apresentar a sua supervisão com clareza, marque uma
          conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES13} {...ext}>
              Resolução CFP nº 13/2022 — diretrizes e deveres para o exercício
              da psicoterapia
            </a>{" "}
            (DOU de 21/06/2022, cópia da ABMES), arts. 5º e 8º.
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 1º (b), 2º (q), 9º, 17 e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            , trecho sobre cursos livres, supervisões e mentorias.
          </li>
        </ul>
      </section>
    </>
  )
};
