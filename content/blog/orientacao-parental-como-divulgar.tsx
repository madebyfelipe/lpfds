import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const RES11 = "https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf";

export const post: Post = {
  slug: "orientacao-parental-como-divulgar",
  title: "Orientação parental para pais de crianças autistas: como divulgar o serviço com ética",
  description:
    "Como divulgar orientação parental para famílias de crianças autistas: o que explicar, o que não prometer e o que o artigo 20 do Código de Ética pede.",
  keyword: "orientação parental autismo divulgação",
  tags: ["neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-12",
  summary:
    "Para divulgar orientação parental com ética, descreva o que o serviço é, para quem serve e como funcionam os encontros, sem prometer que a criança vai evoluir de determinado modo. O artigo 20 do Código de Ética veda previsão taxativa de resultados, preço como propaganda e imagens que exponham pacientes.",
  faq: [
    {
      q: "Posso prometer que a orientação parental vai melhorar o comportamento da criança?",
      a: "Não. Prometer resultado é previsão taxativa, vedada pelo artigo 20. Descreva o que a família trabalha nos encontros, como estratégias de rotina e comunicação, sem garantir efeito."
    },
    {
      q: "Posso postar relato de pais que fizeram a orientação?",
      a: "Não é recomendável. Depoimentos de pacientes e familiares na divulgação são apontados como infração pela orientação do CRP e podem expor a família. Veja o artigo sobre depoimento de paciente."
    },
    {
      q: "Orientação parental é o mesmo que psicoterapia para os pais?",
      a: "São serviços diferentes. Explique no site qual é o seu: o foco, o formato e a duração dos encontros, para a família saber o que esperar."
    },
    {
      q: "Posso divulgar grupos de pais no Instagram?",
      a: "Pode divulgar a existência e o formato do grupo, sem preço, desconto ou vaga limitada como chamariz, e sem expor quem participa."
    }
  ],
  cover: {
    src: "/blog/orientacao-parental-como-divulgar/orientacao-parental-como-divulgar-sala-acolhedora.jpg",
    alt: "Poltrona com manta clara entre plantas diante de uma parede de tijolos brancos, sala acolhedora",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muitos pais de crianças autistas procuram orientação antes mesmo de
        procurar terapia para o filho: querem entender o diagnóstico, organizar a
        rotina e saber como se comunicar em casa. Quem oferece esse serviço
        precisa explicá-lo bem e, ao mesmo tempo, respeitar os limites da
        divulgação profissional.
      </p>

      <section>
        <h2>O que explicar na divulgação</h2>
        <ul>
          <li>Para quem é: pais e cuidadores de crianças com diagnóstico ou em investigação.</li>
          <li>Como são os encontros: formato, frequência e duração, individual ou em grupo.</li>
          <li>Os temas que costumam aparecer: rotina, comunicação, escola, irmãos, autocuidado.</li>
          <li>O que o serviço não é: não substitui o acompanhamento da criança nem dá diagnóstico a distância.</li>
          <li>Quem conduz: nome completo, CRP e as qualificações que você possui.</li>
        </ul>
      </section>

      <section>
        <h2>O que o artigo 20 não deixa dizer</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          veda previsão taxativa de resultados, uso do preço como propaganda e
          sensacionalismo, e exige que se divulguem apenas técnicas e práticas
          reconhecidas. Frases como “seu filho vai se comunicar em semanas” ou
          “acabe com as crises” não passam. Prefira descrever o que acontece nos
          encontros e deixar a conversa sobre o caso para o atendimento.
        </p>
        <p>
          Sobre relatos de famílias, leia{" "}
          <Link href="/blog/psicologo-pode-postar-depoimento-de-paciente" className="inst-link">
            psicólogo pode postar depoimento de paciente?
          </Link>
        </p>
      </section>

      <section>
        <h2>Linguagem que acolhe sem prometer</h2>
        <p>
          Famílias recém-diagnosticadas costumam estar sob muita pressão e
          culpa. Um texto acolhedor reconhece essa carga sem sugerir que exista
          um jeito certo de agir. Evite termos que tratem o autismo como doença
          a ser vencida; o artigo sobre{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          dá exemplos de palavras para revisar.
        </p>
      </section>

      <section>
        <h2>Onde divulgar</h2>
        <ul>
          <li>
            <strong>Site:</strong> uma página do serviço, com perguntas frequentes
            (veja{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site para psicólogo
            </Link>
            ).
          </li>
          <li>
            <strong>Instagram:</strong> conteúdo educativo geral, sem caso
            identificável (veja{" "}
            <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
              conteúdo para psicólogo infantil
            </Link>
            ).
          </li>
          <li>
            <strong>Google Meu Negócio:</strong> o serviço listado, com horário
            e forma de contato.
          </li>
        </ul>
      </section>

      <section>
        <h2>Cuidado com os dados da família</h2>
        <p>
          Se você usa formulário ou lista de espera, a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          classifica dados de saúde como sensíveis. Peça o mínimo no primeiro
          contato e guarde com cuidado o que receber.
        </p>
      </section>

      <section>
        <h2>Erros comuns ao divulgar orientação parental</h2>
        <ul>
          <li><strong>Prometer “filhos mais obedientes”</strong> ou “fim das birras”. É previsão de resultado, vedada pelo artigo 20, e culpabiliza a família quando a promessa não se cumpre.</li>
          <li><strong>Usar casos reais</strong> de famílias atendidas, mesmo sem nomes, em posts e vídeos.</li>
          <li><strong>Fotos de crianças</strong> como ilustração do serviço.</li>
          <li><strong>Misturar orientação parental com práticas que não são da psicologia</strong> no mesmo perfil profissional.</li>
          <li><strong>Tom de julgamento</strong> nos conteúdos (“o erro que todo pai comete”), que afasta justamente quem precisaria procurar ajuda.</li>
        </ul>
      </section>

      <section>
        <h2>Ideias de conteúdo que respeitam as regras</h2>
        <p>
          Divulgar orientação parental é, em boa parte, produzir conteúdo útil para pais. Alguns formatos que funcionam sem expor ninguém:
        </p>
        <ul>
          <li><strong>Explicar como é a orientação</strong>: quem participa, como são os encontros, o que se trabalha.</li>
          <li><strong>Responder dúvidas frequentes</strong> de forma geral, com base na ciência psicológica.</li>
          <li><strong>Conteúdos sobre rotina, escola e comunicação</strong>, sem tom de receita pronta.</li>
          <li><strong>Para famílias de crianças neurodivergentes</strong>: como funciona a orientação depois de um diagnóstico, como conversar com a escola, onde buscar informação confiável.</li>
          <li><strong>Convites para conversar</strong> que deixam claro como é o primeiro contato.</li>
        </ul>
        <p>
          Esse tipo de conteúdo qualifica quem chega: a família já entende o trabalho antes de mandar mensagem. Veja também <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">conteúdo para psicólogo infantil</Link>.
        </p>
      </section>

      <section>
        <h2>Checklist</h2>
        <ul>
          <li>A divulgação explica como funciona a orientação, sem prometer resultado?</li>
          <li>Nenhum post usa caso real ou foto de criança?</li>
          <li>O tom acolhe, sem julgar os pais?</li>
          <li>O perfil não mistura a psicologia com práticas de outra natureza?</li>
          <li>O caminho do primeiro contato está claro?</li>
        </ul>
      </section>

      <section>
        <h2>Para famílias de crianças neurodivergentes</h2>
        <p>
          Muitas famílias procuram orientação parental logo depois de um diagnóstico de autismo, TDAH ou outra condição do neurodesenvolvimento. Nesse momento, chegam com muita informação acumulada e pouca clareza sobre o próximo passo. A divulgação ajuda quando:
        </p>
        <ul>
          <li><strong>Explica o lugar da orientação</strong> no cuidado da criança, ao lado de outros profissionais, sem prometer substituir nenhum deles.</li>
          <li><strong>Usa a linguagem que a família reconhece</strong>, com a mesma escolha de termos em todos os canais — veja <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">linguagem neuroafirmativa</Link>.</li>
          <li><strong>Mostra o formato</strong>: encontros só com os responsáveis, com quem cuida da criança no dia a dia, online ou presencial.</li>
          <li><strong>Evita a lógica do “consertar”</strong>: o foco descrito é a família entender e apoiar a criança, não “normalizá-la”.</li>
        </ul>
        <p>
          Esse cuidado diferencia o consultório sem nenhum superlativo: a família percebe, pela forma de falar, que encontrou alguém que conhece a realidade dela.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. Se quiser conversar
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

        </ul>
      </section>
    </>
  )
};
