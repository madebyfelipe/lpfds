import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const RES11 = "https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf";

export const post: Post = {
  slug: "psicologo-inteligencia-artificial-divulgacao",
  title: "Psicólogo pode usar inteligência artificial na divulgação? Limites éticos e cuidados",
  description:
    "Psicólogo pode usar IA para criar posts e textos do consultório? Veja os cuidados com sigilo, LGPD e o artigo 20 do Código de Ética antes de publicar.",
  keyword: "psicólogo pode usar inteligência artificial",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-21",
  summary:
    "O Código de Ética do Psicólogo não trata de inteligência artificial, mas a responsabilidade pelo que o consultório publica continua sendo do psicólogo. Valem o artigo 20, o sigilo profissional e a LGPD: nunca coloque dados de pacientes em ferramentas de IA e revise tudo antes de publicar.",
  faq: [
    {
      q: "Posso colocar casos de pacientes em uma ferramenta de IA para gerar conteúdo?",
      a: "Não. O sigilo profissional vale para qualquer ferramenta, e a LGPD trata dados de saúde como sensíveis. Mesmo sem nome, um caso detalhado pode identificar a pessoa."
    },
    {
      q: "A IA pode escrever meus posts por mim?",
      a: "Pode ajudar com rascunhos e revisão, mas o psicólogo responde pelo que publica. O texto precisa respeitar o artigo 20: sem promessa de resultado, preço como chamariz ou sensacionalismo."
    },
    {
      q: "Preciso avisar que usei IA no texto?",
      a: "Este artigo não identificou regra do CFP que exija isso para texto de divulgação. Transparência pode ser boa prática, e vale conferir se o seu CRP publicou orientação mais recente."
    },
    {
      q: "Posso usar imagens geradas por IA no perfil?",
      a: "Com cuidado. A imagem não deve sugerir sessão, paciente ou resultado, nem representar uma pessoa real sem autorização. Para foto de perfil, use uma foto real sua."
    },
    {
      q: "Posso usar IA para responder mensagens de pacientes no WhatsApp?",
      a: "Não é recomendado. A mensagem de quem procura atendimento pode trazer dado de saúde, que a LGPD trata como sensível, e a resposta deve vir de você. Mensagens prontas escritas por você, como a saudação automática, são outra coisa."
    },
    {
      q: "A IA pode sugerir pautas para o blog do consultório?",
      a: "Pode ajudar a listar temas. Escolha os que respondem a dúvidas reais do seu público, confira as informações e escreva com a sua voz, citando as fontes que usou."
    }
  ],
  cover: {
    src: "/blog/psicologo-inteligencia-artificial-divulgacao/psicologo-inteligencia-artificial-divulgacao-notebook-com-luz.jpg",
    alt: "Notebook aberto sobre um piso de madeira com feixes de luz saindo da tela",
    caption: "Foto: jannoon028 / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Ferramentas de inteligência artificial já entraram na rotina de muitos
        consultórios: ideias de pauta, rascunho de post, revisão de texto. A
        dúvida é onde isso termina e onde começa o risco ético. Este artigo
        organiza os cuidados sem inventar regra: separa o que está nas normas do
        que é prudência.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética do Psicólogo
          </a>{" "}
          é de 2005 e não trata de IA. O que ele exige da divulgação (artigo 20)
          vale seja o texto escrito à mão ou com ajuda de uma ferramenta: nome
          completo e CRP, só qualificações que você possui, nada de previsão
          taxativa de resultados, preço como propaganda ou sensacionalismo. Para
          o uso da IA em si, confira se o CFP ou o seu CRP publicaram orientação
          recente; essa área muda rápido.
        </p>
      </section>

      <section>
        <h2>Sigilo: a regra que mais pesa</h2>
        <p>
          O sigilo profissional vale em qualquer ambiente. Ao digitar um caso em
          um chat de IA, você envia informação a um serviço de terceiros. A{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          classifica dados de saúde como sensíveis, com regras mais rígidas de
          tratamento. A regra prática é simples: nenhum dado de paciente entra em
          ferramenta de IA, nem “anonimizado” pela metade.
        </p>
        <p>
          O cuidado com o ambiente digital também aparece na{" "}
          <a href={RES11} {...ext}>
            Resolução CFP nº 11/2018
          </a>
          , sobre serviços psicológicos por tecnologias de informação e
          comunicação.
        </p>
      </section>

      <section>
        <h2>Para que a IA pode ajudar</h2>
        <ul>
          <li>Listar ideias de temas educativos gerais, sem casos.</li>
          <li>Revisar ortografia e clareza de um texto seu.</li>
          <li>Resumir um material público que você leu e conferiu.</li>
          <li>Sugerir títulos e perguntas frequentes para o site.</li>
        </ul>
      </section>

      <section>
        <h2>O que não delegar</h2>
        <ul>
          <li><strong>Afirmações sobre saúde:</strong> a IA pode errar ou inventar estudos. Confira cada fonte.</li>
          <li><strong>Tom de promessa:</strong> ferramentas tendem a escrever frases como “transforme sua vida”. Revise.</li>
          <li><strong>Relatos e exemplos de pacientes:</strong> inclusive os “fictícios” que se parecem com casos reais.</li>
          <li><strong>Diagnóstico ou orientação individual:</strong> nenhum conteúdo público faz isso.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de publicar um texto feito com IA</h2>
        <ol>
          <li>Li tudo e reconheço o texto como meu?</li>
          <li>Conferi cada dado e cada fonte citada?</li>
          <li>Há promessa, preço, superlativo ou sensacionalismo? Tire.</li>
          <li>O tom é o do consultório, o mesmo do site?</li>
          <li>Nenhuma informação de paciente foi usada na ferramenta?</li>
        </ol>
        <p>
          Para o que mais pode e não pode, veja{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            marketing para psicólogos e o Código de Ética
          </Link>{" "}
          e{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns ao usar IA na divulgação</h2>
        <ul>
          <li>
            <strong>Publicar o primeiro rascunho.</strong> O texto sai fluente,
            mas genérico, e costuma soar igual ao de muitos outros perfis. Quem
            procura um psicólogo quer reconhecer a sua forma de falar.
          </li>
          <li>
            <strong>Aceitar estatísticas e estudos sem conferir.</strong>{" "}
            Ferramentas de IA podem citar pesquisa que não existe ou atribuir
            um dado à fonte errada. Se não encontrou a fonte original, tire o
            número.
          </li>
          <li>
            <strong>Pedir “um caso para ilustrar”.</strong> A ferramenta cria
            uma história verossímil, e o leitor pode achar que é um paciente
            seu. Se usar exemplo, deixe claro que é fictício e genérico.
          </li>
          <li>
            <strong>Copiar o texto de um colega para a IA “reescrever”.</strong>{" "}
            Continua sendo o trabalho de outra pessoa. Veja{" "}
            <Link href="/blog/psicologo-direito-autoral-redes" className="inst-link">
              direito autoral nas redes
            </Link>
            .
          </li>
          <li>
            <strong>Deixar escapar superlativos.</strong> “A melhor abordagem”,
            “resultados comprovados” e “transforme sua vida” aparecem com
            frequência em textos gerados e esbarram no artigo 20.
          </li>
        </ul>
      </section>

      <section>
        <h2>Frases para revisar: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Revisão de texto feito com IA: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Revisão de texto feito com IA: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Frase típica</th><th scope="col">Situação</th></tr></thead>
            <tbody>
              <tr><td>“Atendo adultos com ansiedade, presencial e online”</td><td>Pode</td></tr>
              <tr><td>“Explico como funciona a primeira conversa”</td><td>Pode</td></tr>
              <tr><td>“Supere a ansiedade em poucas sessões”</td><td>Evitar (promessa)</td></tr>
              <tr><td>“A abordagem mais eficaz que existe”</td><td>Evitar (superlativo)</td></tr>
              <tr><td>“Estudos mostram que…” sem fonte</td><td>Evitar até conferir</td></tr>
              <tr><td>“Primeira sessão com desconto”</td><td>Evitar (preço como propaganda)</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Para que o texto final soe como você, vale ter o seu{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz
          </Link>{" "}
          escrito e entregar esse guia à ferramenta junto com o pedido.
        </p>
      </section>

      <section>
        <h2>Exemplo ilustrativo de pedido seguro</h2>
        <p>
          <em>Exemplo fictício, só para mostrar o formato.</em> Uma psicóloga
          quer ideias para a página de perguntas frequentes do site. Ela
          escreve na ferramenta:
        </p>
        <blockquote>
          <p>
            “Sou psicóloga e atendo adolescentes, presencial e online. Liste dez
            dúvidas comuns de pais antes de marcar a primeira conversa, em
            linguagem simples. Não invente dados, estudos nem casos.”
          </p>
        </blockquote>
        <p>
          O pedido não traz nome de paciente, história de atendimento nem dado
          pessoal de ninguém. Com a lista em mãos, ela escolhe as perguntas que
          ouve de verdade e escreve as respostas com as próprias palavras. Para
          montar essa página, veja{" "}
          <Link href="/blog/perguntas-frequentes-site-psicologo" className="inst-link">
            perguntas frequentes no site do psicólogo
          </Link>
          ; para os demais textos,{" "}
          <Link href="/blog/textos-site-psicologo" className="inst-link">
            textos do site do psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Textos gerados por IA sobre autismo e TDAH tendem a repetir termos
          antigos ou carregados, como “portador”, “sofre de autismo” ou listas
          de “sintomas” para os pais conferirem. Antes de publicar:
        </p>
        <ul>
          <li>
            revise o vocabulário com o guia de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            ;
          </li>
          <li>
            tire listas de sinais que funcionem como triagem caseira, porque
            elas beiram o diagnóstico à distância;
          </li>
          <li>
            nunca descreva na ferramenta a criança, a escola ou a família que
            você atende, nem para pedir um material “personalizado”;
          </li>
          <li>
            confira se o material para pais segue o que você faz no consultório.
            Ideias em{" "}
            <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
              material educativo para pais
            </Link>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia a partir
          de dois encontros de imersão: posicionamento, identidade visual e verbal, entregues em até
          30 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
          sobre a sua marca, o primeiro passo é uma conversa de 15 minutos.
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
            CRP-MG.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional
            </a>
            , abril de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 (LGPD)
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES11} {...ext}>
              Resolução CFP nº 11/2018
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
