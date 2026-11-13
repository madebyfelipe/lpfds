import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ESPECIALISTA = "https://site.cfp.org.br/servicos/titulo-de-especialista/";
const GOOGLE_UTIL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";

export const post: Post = {
  slug: "pagina-sobre-mim-psicologo",
  title: "Página sobre mim para psicólogo: como escrever, o que incluir e um modelo em 7 blocos",
  description:
    "Como escrever a página sobre mim do site de psicólogo: público, formação e títulos dentro do art. 20, abordagem em linguagem simples, foto e um modelo.",
  keyword: "página sobre mim psicólogo",
  tags: ["posicionamento", "presenca-digital"],
  publishedAt: "2026-11-13",
  summary:
    "A página sobre mim do site de psicólogo responde a três perguntas de quem está escolhendo: você atende alguém como eu, está preparada para isso e como é começar. Abra pelo público e pela forma de trabalhar, liste só títulos que você tem (o art. 20 do Código de Ética exige), explique a abordagem sem jargão e termine com o primeiro passo. Nome completo, “psicóloga(o)” e CRP aparecem na página.",
  faq: [
    {
      q: "O que escrever na página sobre mim de psicóloga?",
      a: "Para quem você atende e com quais demandas, sua formação e títulos, a abordagem explicada em linguagem simples, como funciona o primeiro contato e, se quiser, um pouco do porquê escolheu essa área. Nome completo, “psicóloga(o)” e CRP devem aparecer."
    },
    {
      q: "Posso escrever “especialista” na minha página sobre?",
      a: "Só se você tem o título. A cartilha do CRP-MG explica que se fala em títulos acadêmicos (especialista, mestre, doutor) ou profissionais (registro de especialista no CFP), e que curso livre ou formação não pode ser apresentado como especialidade. Sem título, descreva a área de atuação e a experiência."
    },
    {
      q: "Devo escrever a página sobre em primeira ou terceira pessoa?",
      a: "Não há regra. Em consultório individual, a primeira pessoa costuma soar mais próxima e combina com a conversa que vem depois. Em clínica, a página institucional pode ir em terceira pessoa, com perfis curtos de cada profissional."
    },
    {
      q: "Posso falar da minha vida pessoal na página sobre mim?",
      a: "Com moderação. A cartilha do CRP-MG diz que não há indicação para que a publicidade profissional faça referência à vida privada e a opiniões pessoais, morais, religiosas ou políticas. Contar por que escolheu a área é diferente de expor sua vida ou suas convicções."
    }
  ],
  cover: {
    src: "/blog/pagina-sobre-mim-psicologo/pagina-sobre-mim-psicologo-notebook-e-plantas.jpg",
    alt: "Notebook aberto sobre uma mesa de madeira com plantas, livros e xícara de café, perto de uma janela",
    caption: "Foto: wahyu_t / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Depois da página inicial, a página sobre mim costuma ser uma das mais
        abertas no site de uma psicóloga. Quem chega nela já gostou de algo e
        agora quer saber se pode confiar em você. E muita página sobre responde
        mal: um currículo em lista, uma biografia longa que começa na infância,
        ou um texto genérico que poderia ser de qualquer colega.
      </p>
      <p>
        A boa página sobre mim de psicólogo responde a três perguntas de quem
        está escolhendo: você atende alguém como eu? Está preparada para isso?
        Como é começar? Abaixo estão o que dizem as normas, o que escrever em
        cada parte, os limites do art. 20 para títulos e vida pessoal e um
        modelo em sete blocos para adaptar.
      </p>

      <section>
        <h2>Para que serve a página sobre mim</h2>
        <p>
          Ela serve para a pessoa decidir se marca a primeira conversa. Não é
          um currículo nem um diário: é a parte do site que transforma
          interesse em confiança.
        </p>
        <p>
          Também ajuda no Google. O{" "}
          <a href={GOOGLE_UTIL} {...ext}>
            guia do Google sobre conteúdo útil
          </a>{" "}
          sugere avaliar o conteúdo pelo “quem, como e por quê” e pergunta se
          fica claro para os visitantes quem o criou, com assinaturas que levam
          a mais informações sobre os autores. A página sobre é esse lugar. Para um
          site de saúde, uma página sobre clara, com formação e registro, é
          parte do que faz o resto do site parecer confiável. O guia de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          mostra como ela se encaixa no site.
        </p>
      </section>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A página sobre é publicidade profissional. O{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>{" "}
          pede que ela informe nome completo, CRP e número; que se refira
          apenas a títulos ou qualificações que você possui; que divulgue só
          técnicas e práticas reconhecidas ou regulamentadas pela profissão; e
          que não traga previsão de resultado, autopromoção em detrimento de
          colegas ou sensacionalismo.
        </p>
        <p>
          A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          diz que a psicóloga pode destacar formação, público atendido,
          abordagem teórica e metodologia de trabalho. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          detalha os títulos, reserva “Dr.” e “Dra.” para quem tem doutorado e
          trata da vida privada e de crenças pessoais na publicidade.
        </p>
      </section>

      <section>
        <h2>1. Comece por quem você atende</h2>
        <p>
          A primeira frase da página fala do leitor, não de você. Quem chega
          quer saber, antes de tudo, se está no lugar certo.
        </p>
        <ol>
          <li>Diga o público: crianças, adolescentes, adultos, famílias, casais.</li>
          <li>Diga as demandas mais comuns que você acompanha, sem prometer resolver.</li>
          <li>Diga o formato: presencial (cidade, bairro), online ou os dois.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Atendo crianças de 3 a 12 anos e suas
          famílias, em especial famílias de crianças autistas e com TDAH, em
          consultório em Campinas e por videochamada para orientação parental.”
          Uma frase, e o leitor já sabe se é com ele.
        </p>
        <p>
          O erro comum é abrir com “Sou psicóloga formada pela universidade X
          desde 2015”. É informação útil, mas não é a primeira que o leitor
          precisa. Se ainda não tem clareza sobre o público, o post sobre{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          vem antes desta página.
        </p>
      </section>

      <section>
        <h2>2. Formação e títulos, dentro do art. 20</h2>
        <p>
          Liste só o que você tem, chamando cada coisa pelo nome certo. A
          cartilha do CRP-MG separa três categorias: títulos acadêmicos
          (especialista, mestre, doutor), títulos profissionais (registro de
          especialista no CFP) e qualificações (cursos livres, formações).
        </p>
        <ul>
          <li>
            <strong>Graduação:</strong> “Psicóloga formada pela [instituição]”.
          </li>
          <li>
            <strong>Pós-graduação:</strong> “Especialista em [área] pela
            [instituição]”, se for título acadêmico.
          </li>
          <li>
            <strong>Registro no CFP:</strong> “Especialista em [área] com
            registro no CFP”, se tiver. O{" "}
            <a href={ESPECIALISTA} {...ext}>
              site do CFP
            </a>{" "}
            explica como obter.
          </li>
          <li>
            <strong>Cursos e formações:</strong> “Formação em [abordagem] pelo
            [instituto]”, sem chamar de especialização.
          </li>
          <li>
            <strong>Sem títulos ainda:</strong> descreva a área de atuação e a
            experiência, como a cartilha orienta.
          </li>
        </ul>
        <p>
          O erro comum é a sopa de cursos: vinte certificados em lista, sem
          dizer o que eles mudam no atendimento. Escolha os que explicam o seu
          trabalho e deixe o restante para o currículo Lattes. Outro erro é o
          “Dra.” sem doutorado, que a cartilha veda. O post sobre{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            título de especialista
          </Link>{" "}
          aprofunda essa parte.
        </p>
      </section>

      <section>
        <h2>3. A abordagem, em linguagem simples</h2>
        <p>
          Explique como você trabalha com palavras que o paciente usa. O nome
          da abordagem pode aparecer, mas logo seguido do que ele significa na
          prática.
        </p>
        <ol>
          <li>Nomeie a abordagem ou as abordagens que você usa.</li>
          <li>Explique, em duas ou três frases, como isso aparece nas sessões.</li>
          <li>Diga o que a pessoa pode esperar das primeiras semanas, sem prometer resultado.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Trabalho com terapia cognitivo-comportamental.
          Na prática, isso quer dizer que olhamos juntos para situações do dia a
          dia, o que você pensa e sente nelas, e combinamos pequenos passos entre
          uma sessão e outra.”
        </p>
        <p>
          O erro comum é escrever para colegas, com termos técnicos sem
          tradução. O erro oposto é prometer: “em poucas sessões você vai se
          sentir melhor” é previsão de resultado, vedada pelo art. 20, alínea e.
          A cartilha permite apresentar, de forma geral, objetivos e possíveis
          benefícios do serviço, desde que sem garantir resultado. O guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a achar o registro certo.
        </p>
      </section>

      <section>
        <h2>4. A sua história: quanto contar</h2>
        <p>
          Conte o porquê, não a sua vida. Um parágrafo sobre o que te levou a
          essa área cria conexão; uma autobiografia desvia o foco do leitor.
        </p>
        <ul>
          <li><strong>Cabe:</strong> por que você escolheu o público ou a área.</li>
          <li><strong>Cabe:</strong> o que você valoriza no atendimento.</li>
          <li><strong>Cabe:</strong> há quanto tempo atende, se for verdade e útil.</li>
          <li>
            <strong>Evite:</strong> opiniões políticas, morais ou religiosas; a
            cartilha diz que não há indicação para isso na publicidade
            profissional.
          </li>
          <li>
            <strong>Evite:</strong> associar a psicologia a crença religiosa; a
            cartilha lembra que a Resolução CFP nº 7/2023 veda isso.
          </li>
          <li><strong>Evite:</strong> detalhes da sua saúde ou da sua família como argumento de venda.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Comecei a atender crianças num estágio
          em escola pública e percebi o quanto as famílias chegavam sozinhas às
          dúvidas sobre desenvolvimento. Desde então, meu trabalho inclui os pais
          em cada etapa.”
        </p>
        <p>
          O erro comum é usar a própria história de sofrimento como gancho
          principal. Ela pode aparecer, se você quiser, mas a página continua
          sendo sobre o que você oferece a quem lê.
        </p>
      </section>

      <section>
        <h2>5. A foto</h2>
        <p>
          A página sobre pede uma foto sua, atual, em que você pareça como na
          primeira sessão. É a primeira vez que o paciente vê o rosto de quem
          vai encontrar.
        </p>
        <ul>
          <li>Foto recente, com luz natural e expressão tranquila.</li>
          <li>Roupa e ambiente parecidos com os do consultório.</li>
          <li>Sem pacientes, crianças ou material de atendimento na cena.</li>
          <li>Texto alternativo (alt) descrevendo a foto, para leitores de tela.</li>
        </ul>
        <p>
          O erro comum é usar uma foto antiga ou muito produzida, que não bate
          com quem abre a porta. O guia de{" "}
          <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
            foto profissional para psicólogo
          </Link>{" "}
          tem orientações de cenário e roupa.
        </p>
      </section>

      <section>
        <h2>6. Como funciona o primeiro contato</h2>
        <p>
          Termine a página dizendo o que acontece quando a pessoa entra em
          contato. Isso tira a principal barreira de quem está em dúvida: não
          saber o que vem depois.
        </p>
        <ol>
          <li>Por onde falar: WhatsApp, formulário ou e-mail.</li>
          <li>O que acontece: “respondo em até um dia útil e combinamos um horário”.</li>
          <li>Como é a primeira sessão: duração, presencial ou online, o que trazer.</li>
          <li>Um botão claro para o próximo passo.</li>
        </ol>
        <p>
          O valor da sessão não vai na página. A cartilha do CRP-MG recomenda
          que valor e condições sejam informados de forma reservada, à pessoa
          atendida, antes do início do trabalho. Também ficam de fora “vagas
          limitadas” e “primeira sessão gratuita”.
        </p>
        <p>
          O erro comum é a página terminar no último curso da lista, sem
          caminho. O leitor gostou, mas precisa voltar ao menu para achar o
          contato. O post sobre{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          ajuda a preparar a resposta.
        </p>
      </section>

      <section>
        <h2>7. A página no Google</h2>
        <p>
          A página sobre também pode aparecer quando alguém busca o seu nome.
          Alguns ajustes simples ajudam:
        </p>
        <ul>
          <li>Título da página com nome e profissão: “Ana Souza, psicóloga infantil em Campinas”.</li>
          <li>Um único H1, com o seu nome.</li>
          <li>Nome completo e CRP em texto, não só dentro de uma imagem.</li>
          <li>Links para as páginas de serviço e para os artigos que você escreveu.</li>
          <li>O mesmo nome usado no Perfil da Empresa no Google e nas redes.</li>
        </ul>
        <p>
          O erro comum é deixar a página com o título padrão do construtor de
          sites (“Sobre”). Para quem está montando o site do zero, o guia de{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>{" "}
          mostra as páginas que vêm junto.
        </p>
      </section>

      <section>
        <h2>Modelo em 7 blocos (ilustrativo)</h2>
        <p>
          Use o roteiro abaixo como ponto de partida e reescreva com a sua voz.
          Os textos entre colchetes são para trocar.
        </p>
        <ol>
          <li>
            <strong>Abertura:</strong> “Atendo [público] com [demandas], em
            [cidade/online].”
          </li>
          <li>
            <strong>Identificação:</strong> “Sou [nome completo], psicóloga, CRP
            [00/00000].”
          </li>
          <li>
            <strong>Como trabalho:</strong> “Trabalho com [abordagem]. Na prática,
            isso significa [explicação simples].”
          </li>
          <li>
            <strong>Formação:</strong> graduação, títulos e as formações que
            explicam o atendimento.
          </li>
          <li>
            <strong>Por que essa área:</strong> um parágrafo curto, verdadeiro.
          </li>
          <li>
            <strong>Primeiro contato:</strong> canal, prazo de resposta e como é
            a primeira sessão.
          </li>
          <li>
            <strong>Botão:</strong> “Falar pelo WhatsApp” ou “Agendar uma
            conversa”.
          </li>
        </ol>
      </section>

      <section>
        <h2>Pode ou evitar na página sobre mim</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar na página sobre mim de psicólogo" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar na página sobre mim de psicólogo</caption>
            <thead><tr><th scope="col">Na página</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Nome completo, “psicóloga(o)” e CRP</td><td>Sim, é obrigatório</td></tr>
              <tr><td>Público, abordagem e formato de atendimento</td><td>Sim</td></tr>
              <tr><td>“Especialista” com título acadêmico ou registro no CFP</td><td>Sim</td></tr>
              <tr><td>Curso livre apresentado como especialização</td><td>Não</td></tr>
              <tr><td>“Dra.” sem doutorado</td><td>Não</td></tr>
              <tr><td>“Em poucas sessões você vai se sentir melhor”</td><td>Não</td></tr>
              <tr><td>Valor da sessão ou primeira sessão grátis</td><td>Não</td></tr>
              <tr><td>Crença religiosa associada ao atendimento</td><td>Não</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para clínicas: a página “sobre nós”</h2>
        <p>
          Numa clínica, a página sobre fala da instituição e apresenta a
          equipe. A estrutura muda um pouco:
        </p>
        <ul>
          <li>Abertura com o público e a proposta da clínica.</li>
          <li>Nome da empresa, inscrição no CRP e responsável técnica.</li>
          <li>Perfis curtos de cada profissional: nome, profissão, registro, público e formação principal.</li>
          <li>Como a equipe trabalha junto, quando for multiprofissional.</li>
          <li>Um link de cada perfil para a página do serviço que a pessoa oferece.</li>
        </ul>
        <p>
          A Nota Técnica lembra que pessoas jurídicas seguem as mesmas
          diretrizes de publicidade e que cabe à responsável técnica zelar por
          isso. O post sobre{" "}
          <Link href="/blog/site-para-clinica-de-psicologia" className="inst-link">
            site para clínica de psicologia
          </Link>{" "}
          trata do resto da estrutura.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Quem lê a página sobre, nesse caso, é quase sempre o pai ou a mãe, às
          vezes depois de meses de espera e de outras tentativas. Eles procuram
          três sinais: experiência com crianças como a deles, um jeito de
          trabalhar que inclui a família e respeito pela criança.
        </p>
        <ul>
          <li>Diga com clareza as idades e as demandas que você acompanha.</li>
          <li>Explique como os pais participam do processo.</li>
          <li>Diga se você conversa com a escola e outros profissionais, e com qual autorização.</li>
          <li>
            Use linguagem que não reduz a criança ao diagnóstico; o post de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            ajuda.
          </li>
          <li>Liste só formações que você tem, com o nome certo; famílias costumam conferir.</li>
        </ul>
        <p>
          Se você também faz avaliação, o post sobre a{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica
          </Link>{" "}
          mostra como apresentar esse serviço numa página própria.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Abrir pela formação, não pelo público.</li>
          <li>Lista longa de cursos sem explicar o atendimento.</li>
          <li>Chamar curso livre de especialização ou usar “Dra.” sem doutorado.</li>
          <li>Jargão técnico sem tradução.</li>
          <li>Prometer resultado ou prazo.</li>
          <li>Foto antiga ou muito produzida.</li>
          <li>Página sem caminho para o contato.</li>
          <li>CRP só dentro de uma imagem.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da página sobre mim</h2>
        <ul>
          <li>A primeira frase diz quem você atende e onde.</li>
          <li>Nome completo, “psicóloga(o)” e CRP em texto.</li>
          <li>Títulos e qualificações com o nome certo, só os que você tem.</li>
          <li>Abordagem explicada em linguagem simples.</li>
          <li>Um parágrafo curto sobre por que essa área.</li>
          <li>Foto atual com alt descritivo.</li>
          <li>Primeiro contato explicado e botão claro.</li>
          <li>Sem preço, promessa, superlativo nem crença religiosa.</li>
          <li>Título da página com nome e profissão.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A página sobre é onde o posicionamento aparece por inteiro, e é por
          ele que a Made by Felipe começa. São dois dias de imersão para
          definir público, voz e identidade visual, e a marca fica no ar em 45
          dias, com site e textos revisados pelo art. 20 do Código de Ética. O
          processo está na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e nos{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua página sobre ainda não diz quem você atende, marque uma
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
            , art. 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , 2ª edição, 2026, seções “Títulos e qualificações”, “Previsão de
            resultados”, “Referência a valores”, “Perfis em redes sociais” e
            “Preceitos, citações e denominações religiosas”.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={ESPECIALISTA} {...ext}>
              Título de especialista
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={GOOGLE_UTIL} {...ext}>
              Como criar conteúdo útil, confiável e que priorize as pessoas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
