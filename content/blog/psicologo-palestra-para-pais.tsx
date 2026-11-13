import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LEI13935 = "https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/L13935.htm";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const MANUAL_ANTICAP = "https://site.cfp.org.br/wp-content/uploads/2025/10/Manual_Anticapacitista_web.pdf";

export const post: Post = {
  slug: "psicologo-palestra-para-pais",
  title: "Palestra para pais na escola: como a psicóloga prepara, conduz e divulga em 8 passos",
  description:
    "Como a psicóloga prepara uma palestra para pais na escola: escolha do tema, roteiro, perguntas difíceis, sigilo, divulgação e o que o art. 20 não permite.",
  keyword: "palestra para pais psicólogo",
  tags: ["divulgacao-etica", "neurodivergencia"],
  publishedAt: "2026-11-14",
  summary:
    "A palestra para pais é uma forma legítima de a psicóloga levar conhecimento às famílias e de ser conhecida na comunidade, desde que seja conteúdo, e não propaganda. O tema nasce da demanda da escola e das famílias, o roteiro cabe em cerca de uma hora com tempo para perguntas, e as dúvidas pessoais vão para depois, com sigilo. O Código de Ética veda induzir alguém a contratar seus serviços e expor casos atendidos.",
  faq: [
    {
      q: "Quais temas funcionam numa palestra de psicóloga para pais?",
      a: "Os que nascem da demanda real da escola e das famílias: uso de telas, sono, rotina, limites, ansiedade, transição de ciclo, bullying, inclusão de colegas com deficiência e neurodivergência. Antes de escolher, pergunte à coordenação o que ela tem ouvido dos pais e, se possível, faça uma consulta curta às famílias."
    },
    {
      q: "Quanto tempo deve durar uma palestra para pais?",
      a: "Não há regra, mas encontros de uma hora a uma hora e meia, com pelo menos um terço do tempo para perguntas, costumam caber na agenda de quem trabalha e mantêm a atenção. Combine com a escola o horário que permite que mais famílias venham, inclusive a opção online."
    },
    {
      q: "Posso divulgar meu consultório no fim da palestra?",
      a: "Você pode se apresentar com nome completo, psicóloga e CRP, e deixar um contato. O que o Código de Ética veda é induzir as pessoas a contratar seus serviços (art. 2º, alínea i) e usar vantagens como chamariz. Nada de sorteio de sessão, cupom ou oferta especial para quem assistiu."
    },
    {
      q: "O que fazer quando um pai faz uma pergunta pessoal na frente de todos?",
      a: "Acolha, responda a parte geral que serve a todos e convide a pessoa para conversar depois, em particular. Não comente o caso do filho dela em público nem levante hipóteses diagnósticas. Isso protege a família e respeita o sigilo do art. 9º do Código de Ética."
    },
    {
      q: "Psicóloga pode cobrar para dar palestra em escola?",
      a: "Pode. Palestra é um serviço profissional e pode ser remunerada, combinada com a escola em contrato. Também pode ser voluntária, desde que não seja usada para captar pacientes, o que a Nota Técnica CFP 1/2022 considera inadequado para o trabalho voluntário."
    }
  ],
  cover: {
    src: "/blog/psicologo-palestra-para-pais/psicologo-palestra-para-pais-auditorio-cadeiras-vazias.jpg",
    alt: "Auditório vazio com fileiras de cadeiras azuis em curva e paredes de madeira",
    caption: "Foto: evening_tao / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A coordenadora da escola liga: “Os pais estão preocupados com o uso de
        celular das crianças. Você faria uma palestra no mês que vem?”. É um
        convite que muitas psicólogas recebem e que poucas recusam. É a chance de
        falar com dezenas de famílias de uma vez, de mostrar o seu jeito de
        trabalhar e de ajudar a escola. E também é o lugar onde a palestra pode
        virar propaganda, onde um pai pede diagnóstico na frente de todos e onde
        um exemplo mal escolhido expõe uma criança.
      </p>
      <p>
        A resposta curta: prepare a palestra como um trabalho de educação, não
        como um anúncio. O tema nasce da demanda da escola, o roteiro cabe em
        uma hora com tempo para perguntas, os casos são sempre fictícios, e as
        dúvidas pessoais ficam para depois. Abaixo estão as normas, oito passos
        da preparação à divulgação, a tabela do que pode e do que evitar e uma
        parte para palestras sobre autismo e neurodivergência.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          não tem um artigo sobre palestras, mas vários se aplicam. O art. 1º,
          alínea b, pede que a psicóloga assuma só atividades para as quais está
          capacitada. O art. 2º veda induzir qualquer pessoa a recorrer aos seus
          serviços (alínea i) e diagnosticar ou apresentar resultados de forma a
          expor pessoas em meios de comunicação (alínea q). O art. 9º protege o
          sigilo. O art. 18 veda divulgar instrumentos e técnicas privativas para
          leigos, o que inclui mostrar testes psicológicos. E toda divulgação da
          palestra segue o art. 20.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          acrescenta que o trabalho voluntário pode ser divulgado, mas é
          inadequado quando tem a finalidade de captar clientes, e que sorteios e
          cupons não são permitidos. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          reforça que a interação com o público deve se apoiar na ciência
          psicológica. Nas escolas públicas, a{" "}
          <a href={LEI13935} {...ext}>
            Lei nº 13.935/2019
          </a>{" "}
          prevê serviços de psicologia na educação básica, o que torna a escola
          parceira natural desse tipo de ação.
        </p>
      </section>

      <section>
        <h2>Passo 1: descubra a demanda antes de escolher o tema</h2>
        <p>
          A palestra boa responde ao que os pais estão vivendo, não ao que a
          psicóloga gostaria de falar. Antes de aceitar o tema sugerido, faça
          três perguntas à escola.
        </p>
        <ol>
          <li>O que os pais têm perguntado à coordenação e aos professores?</li>
          <li>Que situação levou a escola a pensar na palestra?</li>
          <li>Que idade têm os filhos de quem vai estar na plateia?</li>
        </ol>
        <p>
          Se der, proponha um formulário de duas perguntas às famílias, sem pedir
          nome nem dados sobre os filhos. Isso respeita a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          e dá material real para o roteiro.
        </p>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma escola fictícia pediu uma
          palestra sobre “ansiedade”. Na conversa, a coordenadora contou que a
          preocupação era a volta das férias no 6º ano. O tema virou “A
          passagem para o 6º ano: o que muda para o seu filho e para você”.
        </p>
        <p>
          <strong>Erro comum:</strong> aceitar um tema largo demais. “Saúde
          mental na infância” cabe num semestre, não numa noite.
        </p>
      </section>

      <section>
        <h2>Passo 2: confira se o tema está dentro da sua prática</h2>
        <p>
          O art. 1º, alínea b, do Código de Ética pede que a psicóloga assuma só
          atividades para as quais está capacitada. Na palestra, isso significa
          falar do que você estuda e atende.
        </p>
        <ul>
          <li>Se o tema é seu campo de prática, aceite e prepare.</li>
          <li>Se é próximo, estude e diga na palestra de onde vêm as informações.</li>
          <li>Se é de outra profissão, como alimentação ou aprendizagem escolar, sugira à escola uma fala conjunta com quem tem essa formação (art. 20, alínea g).</li>
        </ul>
        <p>
          <strong>Erro comum:</strong> aceitar qualquer tema para não perder a
          oportunidade. A plateia percebe, e a imagem que fica é a de quem fala
          de tudo. O post sobre{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>{" "}
          mostra como construir essa relação para além de uma noite.
        </p>
      </section>

      <section>
        <h2>Passo 3: monte um roteiro de uma hora com espaço para perguntas</h2>
        <p>
          Um roteiro simples funciona melhor do que muitos slides. A estrutura
          abaixo cabe em cerca de uma hora e deixa tempo para a plateia.
        </p>
        <ol>
          <li><strong>Abertura (5 min):</strong> quem você é, em duas frases, e o combinado de sigilo: “não vamos falar de casos de ninguém aqui”.</li>
          <li><strong>O que é o tema (10 min):</strong> o que a ciência diz, em linguagem de casa.</li>
          <li><strong>Sinais e situações (10 min):</strong> o que é esperado na idade e o que merece atenção.</li>
          <li><strong>O que a família pode fazer (15 min):</strong> três a cinco atitudes práticas.</li>
          <li><strong>Quando procurar ajuda (5 min):</strong> sem indicar a si mesma; fale de serviços em geral, inclusive públicos.</li>
          <li><strong>Perguntas (15 a 20 min).</strong></li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> na palestra fictícia sobre o 6º
          ano, as atitudes práticas foram: conversar sobre a nova rotina antes do
          primeiro dia, visitar a escola juntos, combinar o uso do celular e
          acompanhar sem fazer pelo filho.
        </p>
        <p>
          <strong>Erro comum:</strong> passar 50 minutos falando e deixar 5 para
          perguntas. Os pais vieram com dúvidas, e é nelas que a palestra fica
          útil.
        </p>
      </section>

      <section>
        <h2>Passo 4: use só exemplos fictícios e anunciados como tal</h2>
        <p>
          Contar casos aproxima a plateia, mas um caso real, mesmo sem nome, pode
          ser reconhecido numa escola onde todos se conhecem. O art. 9º do
          Código de Ética protege o sigilo, e o art. 2º, alínea q, veda expor
          pessoas.
        </p>
        <ul>
          <li>Crie personagens e diga que são fictícios: “imagine uma menina de 11 anos...”.</li>
          <li>Mude idade, série, família e situação para que nada lembre um caso real.</li>
          <li>Nunca use exemplo de aluno da própria escola, nem disfarçado.</li>
          <li>Não mostre testes, protocolos ou material de atendimento (art. 18).</li>
        </ul>
        <p>
          <strong>Erro comum:</strong> “atendi um menino aqui do bairro que...”.
          A frase já basta para que alguém tente adivinhar quem é.
        </p>
      </section>

      <section>
        <h2>Passo 5: prepare as respostas para perguntas difíceis</h2>
        <p>
          Em quase toda palestra para pais, alguém conta a história do filho e
          pergunta “isso é normal?” ou “ele tem TDAH?”. A resposta acolhe, devolve
          a parte geral para todos e leva o resto para depois.
        </p>
        <ol>
          <li>Agradeça a pergunta.</li>
          <li>Responda o que vale para qualquer criança daquela idade.</li>
          <li>Diga que cada situação precisa de avaliação e que não é possível responder sobre uma criança específica ali.</li>
          <li>Convide a pessoa para conversar no fim, em particular, e ofereça indicação de serviços, não só o seu.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Obrigada por trazer isso. Muitas
          crianças nessa fase passam por algo parecido, e o que ajuda em geral é...
          Sobre o seu filho, não dá para dizer daqui; se quiser, conversamos
          depois.”
        </p>
        <p>
          <strong>Erro comum:</strong> responder com hipótese diagnóstica em
          público. Além de expor a família, transforma a palestra num atendimento
          sem avaliação. O post sobre{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            responder comentários e direct
          </Link>{" "}
          usa a mesma lógica para as redes.
        </p>
      </section>

      <section>
        <h2>Passo 6: leve material para casa, não folheto de venda</h2>
        <p>
          Um material curto, que resume a palestra, é o que os pais guardam. Ele
          também leva o seu nome, sem precisar ser propaganda.
        </p>
        <ul>
          <li>Uma página com as três a cinco atitudes práticas.</li>
          <li>Indicação de leituras confiáveis e de serviços públicos.</li>
          <li>Rodapé com nome completo, psicóloga, CRP e um contato (art. 20, alínea a).</li>
          <li>Visual da sua marca, em vez de um modelo genérico.</li>
        </ul>
        <p>
          <strong>Erro comum:</strong> entregar só um cartão com “agende sua
          sessão”. Isso aproxima a palestra de captação. O post sobre{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo para pais
          </Link>{" "}
          mostra como fazer um impresso útil, e o de{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria para consultório
          </Link>{" "}
          ajuda a manter o visual coerente.
        </p>
      </section>

      <section>
        <h2>Passo 7: divulgue a palestra junto com a escola</h2>
        <p>
          Quem convida os pais é a escola. A psicóloga ajuda com o texto, mas a
          divulgação parte da instituição, com uma chamada clara e sem promessa.
        </p>
        <ul>
          <li>Título com o tema e o público: “Telas e sono: conversa para pais do Fundamental I”.</li>
          <li>Data, horário, local, se haverá transmissão online.</li>
          <li>Seu nome completo, psicóloga e CRP.</li>
          <li>Nada de “vai resolver a birra do seu filho” nem de “vagas limitadas” como pressão.</li>
        </ul>
        <p>
          No seu perfil, você pode contar que vai falar na escola, com
          autorização dela, e depois compartilhar o conteúdo em um post
          educativo. Não publique fotos da plateia sem autorização de quem
          aparece e não mostre crianças.
        </p>
        <p>
          <strong>Erro comum:</strong> sortear uma sessão entre os presentes. A
          Nota Técnica CFP 1/2022 veda sorteios, como explica o post{" "}
          <Link href="/blog/psicologo-sorteio-instagram" className="inst-link">
            psicólogo pode fazer sorteio?
          </Link>
        </p>
      </section>

      <section>
        <h2>Passo 8: depois da palestra, cuide do contato</h2>
        <p>
          É natural que alguns pais procurem você depois. O cuidado agora é
          receber esse contato sem pressão e manter a relação com a escola.
        </p>
        <ol>
          <li>Responda quem procurar, com o mesmo cuidado de qualquer primeiro contato.</li>
          <li>Não ofereça condição especial “para quem foi à palestra”.</li>
          <li>Se atender um aluno da escola, combine com a família o que pode ser compartilhado com a instituição, sempre com autorização.</li>
          <li>Mande à escola um resumo do que foi tratado e das dúvidas que apareceram, sem identificar ninguém.</li>
        </ol>
        <p>
          <strong>Erro comum:</strong> usar a lista de presença para mandar
          mensagens. Os dados foram coletados pela escola para outro fim.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na palestra para pais</h2>
        <div className="inst-blog__table" role="region" aria-label="Palestra para pais: o que a psicóloga pode e o que deve evitar" tabIndex={0}>
          <table>
            <caption>Palestra para pais: o que a psicóloga pode e o que deve evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Apresentar-se com nome completo, psicóloga e CRP</td><td>Sim (art. 20, a)</td></tr>
              <tr><td>Exemplo fictício, anunciado como tal</td><td>Sim</td></tr>
              <tr><td>Caso de aluno da escola, “sem nome”</td><td>Não (art. 9º)</td></tr>
              <tr><td>Hipótese diagnóstica sobre o filho de quem pergunta</td><td>Não (art. 2º, q)</td></tr>
              <tr><td>Mostrar teste psicológico nos slides</td><td>Não (art. 18)</td></tr>
              <tr><td>Sorteio de sessão ou cupom para a plateia</td><td>Não (Nota Técnica CFP 1/2022)</td></tr>
              <tr><td>Palestra remunerada, com contrato</td><td>Sim</td></tr>
              <tr><td>Palestra voluntária para captar pacientes</td><td>Evitar (Nota Técnica CFP 1/2022)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já faz palestras: transforme em série</h2>
        <p>
          Quando a palestra dá certo, a escola costuma pedir outra. Em vez de
          temas soltos, proponha um ciclo ao longo do ano.
        </p>
        <ul>
          <li>Três encontros por semestre, cada um ligado a um momento escolar: começo do ano, meio, transição de ciclo.</li>
          <li>Um formato curto online para quem não pode ir à escola.</li>
          <li>Rodas de conversa menores, com grupos de pais da mesma série.</li>
          <li>Um texto no seu blog para cada encontro, com o conteúdo geral, o que ajuda quem não foi e o{" "}
            <Link href="/blog/seo-para-psicologos" className="inst-link">
              SEO do seu site
            </Link>
            .
          </li>
        </ul>
        <p>
          O ciclo dá à escola um projeto e a você uma presença constante, sem
          depender de convite a cada vez.
        </p>
      </section>

      <section>
        <h2>Para palestras sobre autismo e neurodivergência</h2>
        <p>
          Quando o tema é autismo, TDAH ou inclusão, a palestra tem duas
          plateias na mesma sala: pais de crianças
          neurodivergentes, que conhecem o tema de perto, e pais de colegas, que
          às vezes chegam com medo ou preconceito.
        </p>
        <ul>
          <li><strong>Fale de inclusão, não de “problema na sala”:</strong> como as diferenças aparecem e como a turma inteira ganha com a convivência.</li>
          <li><strong>Use linguagem neuroafirmativa,</strong> sem “sofre de autismo” nem “portador”. O{" "}
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista do CFP
            </a>{" "}
            ajuda a revisar o vocabulário.
          </li>
          <li><strong>Nunca use a turma como exemplo,</strong> nem diga quantos alunos com diagnóstico a escola tem.</li>
          <li><strong>Prepare-se para perguntas sobre diagnóstico:</strong> explique o caminho da avaliação em geral, sem avaliar ninguém ali.</li>
          <li><strong>Pense na acessibilidade do próprio evento:</strong> luz, som, intervalo, possibilidade de sair da sala, e opção online.</li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental para famílias de autistas
          </Link>{" "}
          aprofundam esses cuidados.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Tema escolhido sem ouvir a escola nem as famílias.</li>
          <li>Palestra longa demais, com pouco tempo para perguntas.</li>
          <li>Caso real “disfarçado”.</li>
          <li>Hipótese diagnóstica em público.</li>
          <li>Fim da palestra com oferta, sorteio ou “agende já”.</li>
          <li>Fotos de crianças ou da plateia sem autorização.</li>
          <li>Uso da lista de presença para mandar mensagens.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da palestra</h2>
        <ul>
          <li>Tema definido com a escola, a partir da demanda real.</li>
          <li>Tema dentro da sua prática (art. 1º, b).</li>
          <li>Roteiro de cerca de uma hora, com um terço para perguntas.</li>
          <li>Só exemplos fictícios, anunciados como tal.</li>
          <li>Resposta pronta para perguntas pessoais.</li>
          <li>Material para casa com nome, psicóloga e CRP.</li>
          <li>Divulgação sem promessa, sorteio ou pressão.</li>
          <li>Nenhum dado de presença usado para contato posterior.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros organiza o posicionamento, o
          tom de voz e a identidade visual do consultório, e os materiais que
          acompanham uma palestra, como slides e impressos, saem dessa mesma
          base. Tudo é apresentado em até 30 dias, com cada peça revisada pelo art.
          20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se você quer chegar à próxima palestra com uma marca que as famílias
          reconhecem, marque uma conversa de 15 minutos.
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
            , arts. 1º (alínea b), 2º (alíneas i e q), 9º, 18 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>{" "}
            (trabalho voluntário, sorteios e cupons).
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
            <a href={LEI13935} {...ext}>
              Lei nº 13.935/2019
            </a>{" "}
            (serviços de psicologia e de serviço social nas redes públicas de educação básica).
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={MANUAL_ANTICAP} {...ext}>
              Manual Anticapacitista
            </a>
            , 2025.
          </li>
        </ul>
      </section>
    </>
  )
};
