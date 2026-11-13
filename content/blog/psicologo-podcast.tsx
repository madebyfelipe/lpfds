import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const CRPSP = "https://www.crpsp.org/uploads/impresso/352791/c5M28pLUgry9gb2yWgd5Q20mODekcExu.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "psicologo-podcast",
  title: "Psicólogo em podcast: como participar como convidado ou criar o seu com ética",
  description:
    "Psicólogo pode fazer podcast? Como ser convidado ou apresentador, o que os arts. 19 e 20 pedem, sigilo ao vivo, pauta, gravação e como levar o ouvinte ao site.",
  keyword: "psicólogo podcast",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "Psicólogo pode participar de podcast e criar o próprio. Pelo art. 19 do Código de Ética, a fala em veículo de comunicação deve divulgar a base científica e o papel social da profissão; pelo art. 2º, q, nada de diagnóstico ou análise de caso que exponha pessoas. Antes de aceitar um convite, conheça o programa; ao criar o seu, defina público, formato e regras de sigilo, e leve o ouvinte a um site com nome completo e CRP.",
  faq: [
    {
      q: "Psicólogo pode ter podcast?",
      a: "Pode. Nenhuma norma do CFP proíbe o formato. O podcast é atividade em veículo de comunicação (art. 19 do Código de Ética) e, quando apresenta seus serviços, é publicidade profissional (art. 20). Valem as mesmas regras do Instagram e do YouTube: conteúdo informativo, sem promessa, sem exposição de pacientes e com nome completo e CRP na descrição."
    },
    {
      q: "Posso falar de casos clínicos no podcast?",
      a: "Não de forma que identifique alguém. O art. 2º, alínea q, veda divulgar procedimentos ou resultados em meios de comunicação de forma a expor pessoas, e a Resolução CFP nº 3/2007 proíbe usar análise de caso que identifique o sujeito. Mesmo com nome trocado, detalhes de idade, cidade e história podem revelar quem é. O mais seguro é falar de temas, pesquisas e situações genéricas."
    },
    {
      q: "Posso responder dúvidas de ouvintes no podcast?",
      a: "Pode responder dúvidas gerais, com caráter educativo. O que não cabe é orientar um caso específico como se fosse atendimento: sem avaliação, a resposta vira aconselhamento público sobre a vida de alguém. Diga que a pergunta toca um tema comum, explique o tema e indique buscar atendimento quando a situação pedir."
    },
    {
      q: "Fui convidada para um podcast. O que devo perguntar antes?",
      a: "Pergunte o tema, quem são os outros convidados, se é ao vivo ou editado, onde será publicado e se o programa tem patrocínio. A orientação do CRP-SP sobre mídia pede que a psicóloga seja crítica aos convites, porque alguns programas usam a presença do profissional para validar ideias contrárias à ética e à Psicologia."
    },
    {
      q: "Podcast traz pacientes para o consultório?",
      a: "Não há como garantir, e prometer isso seria previsão de resultado. O podcast ajuda pessoas a conhecerem sua forma de pensar e falar. Para isso virar contato, o ouvinte precisa encontrar com facilidade um site ou perfil com seus serviços, nome completo, CRP e um caminho claro para agendar."
    }
  ],
  cover: {
    src: "/blog/psicologo-podcast/psicologo-podcast-microfone-e-notebook.jpg",
    alt: "Microfone de podcast em pedestal ao lado de notebook e fones de ouvido sobre mesa perto da janela",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você recebeu um convite para falar sobre autismo em um podcast de
        maternidade, ou pensa em gravar o seu, conversando sobre neurodivergência
        e família. Logo vêm as dúvidas: pode? E se perguntarem de um caso? E se
        o programa tiver patrocínio de um produto? Como transformar a conversa em
        algo útil para o consultório sem soar como propaganda?
      </p>
      <p>
        A resposta curta: psicólogo pode, sim, participar de podcast e ter o
        próprio. A fala segue o art. 19 do Código de Ética, que pede informação
        com base científica, e o art. 20, quando você apresenta seus serviços.
        O cuidado central é o sigilo: nada de caso identificável. A seguir estão
        as normas, os passos para ir como convidada, os passos para criar o seu
        programa, uma tabela de pode e evitar e uma parte para quem fala com
        famílias de crianças autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas sobre podcast</h2>
        <p>
          Não há resolução do CFP específica para podcast. Valem três regras
          gerais. O{" "}
          <a href={CODIGO} {...ext}>
            art. 19 do Código de Ética
          </a>{" "}
          diz que a psicóloga, “ao participar de atividade em veículos de
          comunicação”, zela para que as informações “disseminem o conhecimento
          a respeito das atribuições, da base científica e do papel social da
          profissão”. O art. 2º, alínea q, veda “realizar diagnósticos, divulgar
          procedimentos ou apresentar resultados de serviços psicológicos em
          meios de comunicação, de forma a expor pessoas, grupos ou
          organizações”. E o art. 20 rege a parte em que você divulga seus
          serviços.
        </p>
        <p>
          A{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>{" "}
          completa: o art. 55 permite usar os meios de comunicação “sempre que o
          objetivo for informativo ou educativo”, sem dar a leigos acesso a
          instrumentos e técnicas privativos, e o art. 54 proíbe análise de caso
          que identifique o sujeito. A orientação{" "}
          <a href={CRPSP} {...ext}>
            “A/o psicóloga/o, a mídia e a ética profissional”, do CRP-SP (2024)
          </a>
          , acrescenta que a profissional deve “ser crítica/o aos convites de
          participação” e cuidar não só da própria fala, mas do que o veículo
          está dizendo. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          lembra que liberdade de expressão não dispensa a ética quando você se
          apresenta como psicóloga.
        </p>
      </section>

      <section>
        <h2>Convidada ou apresentadora: qual caminho escolher</h2>
        <p>
          Comece como convidada se o objetivo é testar o formato e chegar a
          públicos que já existem. Crie o seu quando tiver assunto para muitos
          episódios e tempo fixo na agenda para gravar e editar.
        </p>
        <ul>
          <li>
            <strong>Convidada:</strong> exige preparo para uma conversa, aproveita
            a audiência de outra pessoa e não pede equipamento. Em troca, você não
            controla edição, título nem patrocínio.
          </li>
          <li>
            <strong>Apresentadora:</strong> você define tema, tom e ritmo, e o
            arquivo de episódios vira um acervo seu. Em troca, exige constância e
            o público começa do zero.
          </li>
          <li>
            <strong>Coapresentação com colega:</strong> divide o trabalho e
            enriquece o debate, mas pede acordo sobre linha editorial e sobre
            quem responde por cada fala.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia que atende pais
          de crianças autistas aceita três convites em podcasts de maternidade
          ao longo de alguns meses. Ao perceber que as perguntas se repetem,
          decide criar uma série curta própria sobre rotina e escola.
        </p>
        <p>
          <strong>Erro comum:</strong> começar pelo próprio programa sem saber
          se gosta de gravar. Um podcast abandonado no terceiro episódio passa
          impressão pior do que nenhum. A mesma lógica vale para vídeo, como
          mostra o post sobre{" "}
          <Link href="/blog/psicologo-youtube-e-lives" className="inst-link">
            YouTube e lives para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Antes de aceitar um convite: cinco perguntas</h2>
        <p>
          Aceite depois de entender o programa. A orientação do CRP-SP existe
          porque alguns veículos usam a presença de uma psicóloga para validar
          ideias que a Psicologia não sustenta.
        </p>
        <ol>
          <li>
            <strong>Qual é o tema e o recorte?</strong> “Autismo” é amplo demais;
            peça a pauta ou as perguntas principais.
          </li>
          <li>
            <strong>Quem mais participa?</strong> Debater com quem vende cura ou
            método sem base científica coloca você em posição difícil.
          </li>
          <li>
            <strong>É ao vivo ou editado?</strong> Ao vivo pede mais preparo para
            perguntas de ouvintes. Editado pede saber se você verá o corte final.
          </li>
          <li>
            <strong>Há patrocínio?</strong> Se o episódio anuncia um produto,
            deixe claro que você não o endossa. O post sobre{" "}
            <Link href="/blog/psicologo-publi-influenciador" className="inst-link">
              publi e parceria com influenciador
            </Link>{" "}
            explica o porquê.
          </li>
          <li>
            <strong>Como você será apresentada?</strong> Peça que usem nome
            completo, a palavra psicóloga e o CRP, e que não inventem títulos.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um podcast fictício convida para falar de
          “como acabar com as birras”. A psicóloga propõe outro título, “o que
          está por trás das crises e como os pais podem se organizar”, que não
          promete resultado e respeita a criança.
        </p>
        <p>
          <strong>Erro comum:</strong> aceitar o título que o programa escolheu
          sem ler. O título é publicidade com o seu nome junto e pode prometer o
          que você nunca diria.
        </p>
      </section>

      <section>
        <h2>Como se preparar para o episódio</h2>
        <p>
          Prepare três ou quatro ideias centrais, não um roteiro decorado. Em
          conversa, quem leu tudo soa engessado; quem não preparou nada se perde.
        </p>
        <ol>
          <li>
            <strong>Defina a mensagem principal</strong> em uma frase: o que o
            ouvinte deve lembrar no dia seguinte.
          </li>
          <li>
            <strong>Separe exemplos genéricos</strong>, sem pacientes: situações
            comuns, pesquisas publicadas, perguntas que os pais costumam fazer.
          </li>
          <li>
            <strong>Prepare a frase de “não sei”.</strong> “Essa pergunta pede
            avaliação, e eu não posso responder sobre uma pessoa que não atendi”
            resolve as perguntas sobre casos e famosos.
          </li>
          <li>
            <strong>Anote uma ou duas fontes</strong> para citar com precisão,
            como o nome do documento ou do órgão.
          </li>
          <li>
            <strong>Combine o link</strong> que vai na descrição: seu site ou a
            página do serviço.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> para um episódio sobre a escola, a
          mensagem principal é “a parceria entre família e escola começa por uma
          conversa organizada”. Os exemplos são situações típicas de reunião
          escolar, nunca a história de uma família atendida.
        </p>
        <p>
          <strong>Erro comum:</strong> comentar comportamento de famosos ou
          personagens de notícias. O CRP-SP lembra que hipóteses diagnósticas só
          surgem de atendimento sistemático. Opinar sobre uma pessoa que você
          nunca avaliou é exposição e falta de base técnica. O post sobre{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>{" "}
          tem bons temas para essa conversa.
        </p>
      </section>

      <section>
        <h2>Durante a gravação: sigilo e perguntas difíceis</h2>
        <p>
          O sigilo vale do primeiro ao último minuto, inclusive nas conversas
          “fora do ar” que às vezes entram no corte. Trate todo microfone como
          ligado.
        </p>
        <ul>
          <li>
            <strong>Nada de caso real,</strong> nem com nome trocado. Idade,
            cidade e história juntas identificam.
          </li>
          <li>
            <strong>Pergunta de ouvinte sobre a própria vida:</strong> responda o
            tema geral e indique buscar avaliação. Responder o caso é
            aconselhamento público.
          </li>
          <li>
            <strong>Pergunta sobre técnica ou teste:</strong> explique para que
            serve, sem detalhar aplicação. O art. 55 da Resolução nº 3/2007 veda
            dar a leigos acesso a instrumentos privativos.
          </li>
          <li>
            <strong>Pressão por promessa:</strong> “quanto tempo leva para
            melhorar?” pede resposta honesta: depende de cada pessoa.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> o apresentador pergunta “meu sobrinho de
          4 anos não fala, ele é autista?”. Resposta possível: “não dá para saber
          sem avaliação. O que posso dizer é que atraso de fala tem várias causas
          e vale procurar o pediatra e uma equipe que avalie com calma”.
        </p>
        <p>
          <strong>Erro comum:</strong> para ilustrar, contar “uma mãe que atendi
          esses dias”. Mesmo sem nome, essa mãe pode se reconhecer, e ouvir a
          própria história num podcast quebra a confiança. Se quiser um exemplo,
          diga que é fictício. A regra é a mesma dos{" "}
          <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
            depoimentos de paciente
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como criar o seu podcast em seis passos</h2>
        <p>
          Um podcast próprio precisa de público definido, formato que caiba na
          agenda e um plano de episódios antes do primeiro gravar.
        </p>
        <ol>
          <li>
            <strong>Público e promessa editorial.</strong> “Conversas sobre rotina
            e escola para pais de crianças neurodivergentes” diz o assunto, não um
            resultado.
          </li>
          <li>
            <strong>Formato.</strong> Solo, entrevista ou dupla; de 20 a 40
            minutos costuma caber em trajetos e tarefas, mas o tempo deve seguir
            o assunto.
          </li>
          <li>
            <strong>Temporada fechada.</strong> Planeje de 6 a 10 episódios de
            uma vez. Temporadas permitem pausas sem parecer abandono.
          </li>
          <li>
            <strong>Equipamento simples.</strong> Um microfone USB, fone e uma
            sala com tecido e móveis (menos eco) resolvem. O som limpo importa
            mais que o vídeo.
          </li>
          <li>
            <strong>Identidade.</strong> Nome do programa, capa quadrada e
            descrição alinhados à marca do consultório, com seu nome completo e
            CRP. Veja a{" "}
            <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
              identidade visual para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Distribuição.</strong> Uma plataforma de hospedagem envia o
            programa aos principais agregadores. Publique cada episódio também no
            site, com resumo em texto.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma série fictícia de oito episódios,
          “Família na rotina”, com temas como sono, telas, escola, irmãos e
          consultas, cada um com uma convidada de outra área (fonoaudióloga,
          terapeuta ocupacional, professora).
        </p>
        <p>
          <strong>Erro comum:</strong> usar trilha sonora ou vinheta baixada da
          internet sem licença. Prefira bibliotecas com licença clara para uso
          comercial.
        </p>
      </section>

      <section>
        <h2>Do episódio ao site: como o ouvinte encontra você</h2>
        <p>
          O podcast apresenta seu jeito de pensar; o site transforma interesse em
          contato. Sem esse caminho, o ouvinte gosta do episódio e esquece seu
          nome.
        </p>
        <ul>
          <li>
            <strong>Descrição do episódio:</strong> nome completo, psicóloga, CRP,
            resumo do tema e um link para o site.
          </li>
          <li>
            <strong>Página do episódio no site:</strong> resumo escrito, pontos
            principais e fontes citadas. Texto ajuda o Google a encontrar o
            conteúdo, como explica o guia de{" "}
            <Link href="/blog/seo-para-psicologos" className="inst-link">
              SEO para psicólogos
            </Link>
            .
          </li>
          <li>
            <strong>Fala final:</strong> um convite sóbrio, como “se quiser
            conhecer meu trabalho, o site está na descrição”. Sem preço, sem
            “vagas limitadas”.
          </li>
          <li>
            <strong>Newsletter:</strong> quem gostou pode receber os próximos
            episódios por e-mail, com consentimento. O post sobre{" "}
            <Link href="/blog/newsletter-para-psicologo" className="inst-link">
              newsletter para psicólogo
            </Link>{" "}
            mostra como montar.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> a página “Episódio 3 — Telas na rotina da
          família” traz um resumo de 300 palavras, três pontos principais e, no
          fim, o link para a página de orientação parental.
        </p>
        <p>
          <strong>Erro comum:</strong> encerrar todo episódio com oferta de
          “primeira sessão com desconto para ouvintes”. Isso é preço como
          propaganda, vedado pelo art. 20.
        </p>
      </section>

      <section>
        <h2>Podcast de psicólogo: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Podcast de psicólogo: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Podcast de psicólogo: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Explicar um tema com base em pesquisas e documentos oficiais</td><td>Sim</td></tr>
              <tr><td>Descrição com nome completo, psicóloga, CRP e link do site</td><td>Sim</td></tr>
              <tr><td>Exemplo genérico, rotulado como fictício</td><td>Sim</td></tr>
              <tr><td>Contar caso de paciente, mesmo com nome trocado</td><td>Não (sigilo, art. 2º, q)</td></tr>
              <tr><td>Opinar se um famoso “é autista” ou “tem TDAH”</td><td>Não (exposição e sem avaliação)</td></tr>
              <tr><td>Explicar passo a passo um teste psicológico</td><td>Não (Res. CFP 3/2007, art. 55)</td></tr>
              <tr><td>Desconto para ouvintes no fim do episódio</td><td>Não (preço como propaganda)</td></tr>
              <tr><td>Título “como acabar com a ansiedade em 7 dias”</td><td>Não (previsão de resultado)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já grava: cortes, vídeo e acervo</h2>
        <p>
          Depois de alguns episódios, o podcast vira matéria-prima. Cada conversa
          rende cortes curtos para redes, citações para posts e textos para o
          blog. O cuidado é o contexto: um trecho de 30 segundos tirado do meio da
          conversa pode soar como promessa ou diagnóstico. Antes de publicar um
          corte, assista como se fosse alguém que não ouviu o episódio.
        </p>
        <p>
          Se gravar em vídeo, cuide do fundo. Nada de divã, de material de
          atendimento ou de papéis com dados à vista. A estante, a parede da
          marca ou uma mesa limpa funcionam. Para convidadas, faça um termo
          simples de autorização de uso de voz e imagem, dizendo onde o episódio
          será publicado.
        </p>
        <p>
          Com o tempo, organize o acervo por tema no site. Uma página “Podcast”
          com episódios agrupados por assunto ajuda o ouvinte novo a começar pelo
          que interessa e mostra a consistência do seu trabalho.
        </p>
      </section>

      <section>
        <h2>Para quem fala com famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais de crianças neurodivergentes ouvem podcast enquanto dirigem,
          cozinham ou esperam a terapia acabar. Eles procuram companhia, linguagem
          clara e ideias práticas. Esse público também recebe muita promessa de
          cura e de método milagroso, então a sobriedade da sua fala é parte do
          valor.
        </p>
        <ul>
          <li>
            <strong>Convide pessoas autistas adultas</strong> para falar da
            própria experiência, com o consentimento delas e sem pedir que falem
            por todos.
          </li>
          <li>
            <strong>Use linguagem neuroafirmativa.</strong> “Criança autista”,
            “apoio”, “acomodação”, em vez de “sofre de autismo” ou “tratar o
            autismo”. Veja o post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
          <li>
            <strong>Não exponha a criança.</strong> Nada de pais contando a
            história do filho com nome e escola, nem áudio da criança.
          </li>
          <li>
            <strong>Desconfie de convites com produto.</strong> Suplementos,
            dietas e terapias sem base científica costumam patrocinar programas
            desse nicho.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um episódio fictício com uma mãe que é
          também professora fala de adaptação escolar a partir do ponto de vista
          dela como educadora, sem detalhes do filho. A conversa fica útil e
          ninguém é exposto. O post sobre{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental para pais de crianças autistas
          </Link>{" "}
          ajuda a ligar o episódio ao serviço.
        </p>
      </section>

      <section>
        <h2>Erros comuns de psicólogos em podcast</h2>
        <ul>
          <li>Aceitar convite sem saber tema, convidados e patrocínio.</li>
          <li>Contar caso de paciente para ilustrar.</li>
          <li>Opinar sobre a saúde mental de famosos.</li>
          <li>Deixar o programa publicar título que promete resultado.</li>
          <li>Responder pergunta de ouvinte como se fosse atendimento.</li>
          <li>Esquecer nome completo e CRP na descrição.</li>
          <li>Gravar sem plano e parar no terceiro episódio.</li>
          <li>Encerrar com desconto ou “vagas limitadas”.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de gravar</h2>
        <ul>
          <li>Conheço o tema, os convidados e quem patrocina.</li>
          <li>Tenho uma mensagem principal e exemplos genéricos.</li>
          <li>Sei como responder perguntas sobre casos e famosos.</li>
          <li>O título não promete resultado.</li>
          <li>A descrição tem nome completo, psicóloga, CRP e link.</li>
          <li>O fundo do vídeo não mostra material de atendimento.</li>
          <li>A trilha tem licença de uso.</li>
          <li>O episódio terá página no site com resumo.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão de dois dias define posicionamento, tom
          de voz e identidade visual do consultório. É daí que saem a capa e a
          descrição de um podcast e a página do site para onde o ouvinte vai,
          com a marca no ar em 45 dias e tudo revisado pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se está pensando em gravar, marque uma conversa de 15 minutos.
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
            , arts. 2º (alínea q), 9º, 19 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES3} {...ext}>
              Resolução CFP nº 3/2007
            </a>
            , arts. 53 a 58.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={CRPSP} {...ext}>
              Série CRP SP Orienta: a/o psicóloga/o, a mídia e a ética profissional
            </a>
            , janeiro de 2024.
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
            .
          </li>
        </ul>
      </section>
    </>
  )
};
