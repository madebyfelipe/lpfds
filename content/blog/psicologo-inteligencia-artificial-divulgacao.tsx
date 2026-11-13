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
