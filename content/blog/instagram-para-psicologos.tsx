import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";

export const post: Post = {
  slug: "instagram-para-psicologos",
  title: "Instagram para psicólogos: bio, o que postar e o que o Código de Ética proíbe",
  description:
    "Como montar o Instagram profissional de psicólogo: bio com CRP, perfil pessoal x profissional, destaques, identidade visual e o que a Nota Técnica do CFP orienta.",
  keyword: "instagram para psicólogos",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-09",
  summary:
    "O Instagram profissional do psicólogo precisa trazer nome completo, a palavra psicólogo(a) e o CRP, dizer em uma linha para quem você atende e como, e manter a mesma identidade visual em todos os posts. A cartilha do CRP-MG recomenda separar perfil pessoal e profissional, e tudo o que é publicado como psicólogo segue o Código de Ética.",
  faq: [
    { q: "O que postar no Instagram de psicologia?", a: "Conteúdo educativo baseado na ciência psicológica, explicação de como funciona o atendimento, respostas gerais às dúvidas do público, bastidores do consultório sem pacientes e a sua formação, sempre com nome e CRP no perfil." },
    {
      q: "O que colocar na bio do Instagram de psicólogo?",
      a: "Nome completo (ou a versão escolhida com o número do CRP), a palavra psicólogo(a), o CRP com o número, uma linha sobre público e formato de atendimento e um link de contato. Evite preço, promessa de resultado e títulos que você não possui."
    },
    {
      q: "Preciso ter um perfil separado do pessoal?",
      a: "A cartilha do CRP-MG recomenda manter um perfil pessoal e um profissional para quem usa as redes na divulgação, porque tudo o que é publicado onde você se apresenta como psicólogo pode ser avaliado eticamente."
    },
    {
      q: "Posso usar caixinha de perguntas e responder dúvidas?",
      a: "Pode, desde que as respostas sejam respaldadas na ciência psicológica, considerem a diversidade de cada caso e não se transformem em atendimento ou diagnóstico público."
    },
    {
      q: "Com que frequência devo postar?",
      a: "Não há regra no Código. Mais importante que a frequência é a consistência: a mesma identidade, o mesmo tom e informações claras sobre o atendimento em todos os posts e destaques."
    }
  ],
  cover: {
    src: "/blog/instagram-para-psicologos/instagram-para-psicologos-mesa-de-trabalho.jpg",
    alt: "Câmera fotográfica, celular e caderno de capa floral sobre mesa branca, vista de cima, cena de produção de conteúdo",
    caption: "Foto: Kristin Hardwick / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Para muitos consultórios, o Instagram é a primeira — e às vezes a única —
        vitrine. É ali que a pessoa indicada confere quem você é, e é ali que um
        responsável pesquisando atendimento para o filho decide se manda ou não
        a primeira mensagem. Este texto organiza o que um perfil profissional de
        psicólogo precisa ter, da bio aos destaques, e o que as normas da
        profissão orientam para as redes sociais.
      </p>

      <section>
        <h2>As regras valem também nas redes</h2>
        <p>
          Em 2022, o Conselho Federal de Psicologia publicou a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica nº 01/2022 — Uso Profissional das Redes Sociais
          </a>
          . A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          resume a ideia central: toda comunicação em que você se apresenta como
          psicólogo, ou cujo conteúdo esteja ligado ao exercício profissional,
          deve seguir o{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          e as demais normas — inclusive o artigo 20.
        </p>
      </section>

      <section>
        <h2>Perfil pessoal ou profissional?</h2>
        <p>
          A cartilha recomenda manter um perfil pessoal e um profissional para
          quem usa as redes na divulgação. O motivo: a partir do momento em que
          você se apresenta como psicólogo em uma rede, responde eticamente pelo
          que posta ali — incluindo opiniões pessoais de cunho moral, religioso
          ou político, que podem gerar questionamentos e denúncias quando
          associadas ao exercício da profissão.
        </p>
      </section>

      <section>
        <h2>A bio: cinco elementos</h2>
        <ol>
          <li>
            <strong>Nome</strong> — a mesma versão usada no site e nos documentos.
          </li>
          <li>
            <strong>Psicólogo(a) e CRP</strong> — com a sigla do regional e o
            número (ex.: CRP 04/XXXX, ilustrativo). É obrigatório, não opcional.
          </li>
          <li>
            <strong>Para quem e como</strong> — uma linha com público e formato:
            “Atendimento a crianças, adolescentes e orientação a pais · presencial
            em [cidade] e online”.
          </li>
          <li>
            <strong>Abordagem ou foco</strong>, se ajudar o seu público a se
            reconhecer — sem apresentar curso livre como se fosse
            especialização.
          </li>
          <li>
            <strong>Link de contato</strong> — para o WhatsApp, o site ou uma
            página com as informações essenciais.
          </li>
        </ol>
        <p>
          O que não entra: preço, “primeira sessão grátis”, promessa de
          resultado, “Dr.” sem doutorado e superlativos.
        </p>
      </section>

      <section>
        <h2>Destaques: as perguntas que todo mundo faz</h2>
        <p>
          Use os destaques para responder às dúvidas que chegam no direct antes
          que elas cheguem:
        </p>
        <ul>
          <li><strong>Sobre</strong> — formação, trajetória, abordagem.</li>
          <li><strong>Atendimento</strong> — público, formato, duração, primeiro contato.</li>
          <li><strong>Para pais</strong> — se você atende crianças: como funciona a orientação aos responsáveis e o contato com a escola.</li>
          <li><strong>Localização</strong> — se houver atendimento presencial.</li>
        </ul>
      </section>

      <section>
        <h2>Identidade visual no feed</h2>
        <p>
          Um feed consistente não é estética pela estética: ele faz quem chega
          por indicação reconhecer você em segundos. Alguns princípios:
        </p>
        <ul>
          <li>
            <strong>Poucas cores, com função.</strong> Fundo, texto e destaque —
            definidos na identidade visual, não escolhidos post a post.
          </li>
          <li>
            <strong>Uma ou duas fontes.</strong> Legíveis no tamanho do celular.
          </li>
          <li>
            <strong>Modelos de post próprios.</strong> Templates prontos de
            aplicativos deixam o perfil parecido com dezenas de outros.
          </li>
          <li>
            <strong>Contraste.</strong> Texto claro sobre fundo pastel costuma
            ficar ilegível; a{" "}
            <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
              WCAG 2.1
            </a>{" "}
            pede 4,5:1 para texto comum.
          </li>
          <li>
            <strong>Imagens que não expõem.</strong> Nada de sessão, paciente,
            criança atendida ou material de atendimento.
          </li>
        </ul>
        <p>
          Os fundamentos estão em{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Conteúdo e interação</h2>
        <p>
          A cartilha do CRP-MG lembra que o diálogo com o público — comentários,
          enquetes, caixinhas de perguntas — deve ser respaldado na ciência
          psicológica e considerar a diversidade de cada caso. Isso significa:
        </p>
        <ul>
          <li>Responder de forma geral, sem fazer avaliação ou diagnóstico público.</li>
          <li>Levar qualquer assunto pessoal para o canal privado.</li>
          <li>Não publicar casos, prints ou depoimentos de pacientes — veja{" "}
            <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
              psicólogo pode postar depoimento de paciente?
            </Link>
          </li>
          <li>Evitar títulos alarmistas do tipo “5 sinais de que seu filho tem…”.</li>
        </ul>
      </section>

      <section>
        <h2>O que postar no Instagram de psicologia</h2>
        <p>
          Uma das dúvidas mais buscadas é o que postar. Formatos que funcionam e cabem nas regras:
        </p>
        <ul>
          <li><strong>Como funciona o atendimento</strong>: primeira conversa, formatos, duração, para quem é.</li>
          <li><strong>Explicações baseadas na ciência psicológica</strong> sobre temas do seu público, em linguagem simples.</li>
          <li><strong>Respostas às dúvidas que chegam no direct</strong>, de forma geral, sem caso real.</li>
          <li><strong>Bastidores do consultório</strong>: o espaço, a rotina de estudo, eventos de formação — sem pacientes.</li>
          <li><strong>Sua formação e trajetória</strong>, sem exagero nem superlativo.</li>
          <li><strong>Convites claros para o primeiro contato</strong>, dizendo o que acontece depois da mensagem.</li>
        </ul>
        <p>
          Para ideias específicas de quem atende crianças, veja <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">conteúdo para psicólogo infantil</Link>.
        </p>
      </section>

      <section>
        <h2>Pode e evitar: resumo</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar no Instagram de psicólogo" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar no Instagram de psicólogo</caption>
            <thead><tr><th scope="col">No perfil</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
            <tr><td>Nome, “psicólogo(a)” e CRP na bio</td><td>Deve</td></tr>
            <tr><td>Público, abordagem e formato de atendimento</td><td>Sim</td></tr>
            <tr><td>Conteúdo educativo baseado na ciência psicológica</td><td>Sim</td></tr>
            <tr><td>Valor da sessão, desconto ou “primeira sessão grátis”</td><td>Não</td></tr>
            <tr><td>Depoimento, print ou foto de paciente</td><td>Evitar (sigilo e sensacionalismo)</td></tr>
            <tr><td>“Teste” ou lista de sinais em tom de diagnóstico</td><td>Evitar</td></tr>
            <tr><td>“Dr.” ou “especialista” sem o título correspondente</td><td>Não</td></tr>
            <tr><td>Opiniões pessoais no perfil profissional</td><td>Evitar (a cartilha recomenda perfis separados)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem atende crianças e famílias</h2>
        <p>
          Se o seu consultório atende crianças e adolescentes — em especial
          famílias de crianças autistas ou neurodivergentes —, lembre que quem
          segue e lê o perfil são os pais. Alguns ajustes ajudam:
        </p>
        <ul>
          <li>
            Escreva para o adulto: explique como funciona a orientação aos pais,
            o contato com a escola e a primeira consulta.
          </li>
          <li>
            Use a mesma linguagem sobre autismo e neurodivergência em todos os
            posts — veja{" "}
            <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
              marca para psicólogo que atende autismo e neurodivergência
            </Link>
            .
          </li>
          <li>
            Nunca publique fotos de crianças atendidas, desenhos feitos em sessão
            ou relatos de pais.
          </li>
          <li>
            Fuja de conteúdos em tom de diagnóstico rápido. Informação geral e
            baseada na ciência ajuda; listas de “sinais” confundem e assustam.
          </li>
        </ul>
        <p>
          Antes de publicar algo sobre o qual tenha dúvida, a comissão de
          orientação do seu Conselho Regional é o canal certo para consultar.
        </p>
      </section>

      <section>
        <h2>Checklist do perfil</h2>
        <ul>
          <li>Nome, psicólogo(a) e CRP na bio?</li>
          <li>Uma linha clara sobre público e formato?</li>
          <li>Destaques com atendimento e primeiro contato?</li>
          <li>Cores e fontes definidas, sem template genérico?</li>
          <li>Nenhum preço, promessa, depoimento ou imagem de atendimento?</li>
          <li>Perfil pessoal separado do profissional?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética — e isso inclui como a
          marca aparece no Instagram. Se quiser conversar sobre o seu perfil, o
          primeiro passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica nº 01/2022 — Uso Profissional das Redes Sociais: Publicidade e Cuidados Éticos
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            W3C.{" "}
            <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
              WCAG 2.1, critério 1.4.3
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
