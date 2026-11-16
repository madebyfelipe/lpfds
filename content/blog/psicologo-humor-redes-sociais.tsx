import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";

export const post: Post = {
  slug: "psicologo-humor-redes-sociais",
  title: "Psicólogo pode usar humor e emoji nas redes sociais? O que o Código de Ética diz",
  description:
    "Psicólogo pode usar humor, memes e emoji no Instagram? O que o Código de Ética e a Nota Técnica CFP 1/2022 limitam, com exemplos do que cabe e do que evitar.",
  keyword: "psicólogo pode usar humor nas redes sociais",
  tags: ["divulgacao-etica", "presenca-digital"],
  publishedAt: "2026-11-12",
  summary:
    "Pode. O Código de Ética não proíbe humor nem emoji: ele veda divulgação sensacionalista, previsão de resultados e qualquer coisa que exponha ou ridicularize pessoas. Humor que brinca com a rotina, com o próprio profissional ou com situações gerais tende a caber; humor sobre sintomas, diagnósticos, pacientes ou grupos não cabe. O conteúdo continua precisando ser coerente com a ciência psicológica.",
  faq: [
    {
      q: "Psicólogo pode postar meme?",
      a: "Pode, se o meme não ridicularizar sofrimento, diagnóstico ou grupos de pessoas, não expuser ninguém e não passar informação errada sobre saúde mental. Na dúvida, pergunte: alguém que vive isso se sentiria respeitado ao ver o post?"
    },
    {
      q: "Usar emoji deixa o perfil pouco profissional?",
      a: "Não necessariamente. Emoji é linguagem visual e pode ajudar a organizar uma legenda. O excesso cansa e atrapalha quem usa leitor de tela, que lê cada emoji em voz alta. Use poucos e no fim das frases."
    },
    {
      q: "Posso fazer piada com situações de atendimento?",
      a: "Evite. Mesmo sem nomes, uma situação de sessão contada em tom de piada pode ser reconhecida por quem viveu e fere o sigilo e a confiança. Brinque com a sua rotina, não com a de quem você atende."
    }
  ],
  cover: {
    src: "/blog/psicologo-humor-redes-sociais/psicologo-humor-redes-sociais-celular-e-cafe.jpg",
    alt: "Celular, óculos e xícara de café sobre um fundo dividido em amarelo e vermelho",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Muita psicóloga sente que precisa escolher entre um perfil sério e
        distante ou um perfil leve que “não parece de psicóloga”. Não precisa.
        As normas da profissão não proíbem humor nem emoji. Elas proíbem certos
        efeitos que o humor mal usado pode ter.
      </p>

      <section>
        <h2>O que as normas dizem</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          veda a divulgação sensacionalista e a previsão taxativa de resultados.
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          entende como sensacionalista a comunicação exagerada, que
          superdimensiona um fato sem rigor técnico. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          pede que as publicações estejam de acordo com a ciência psicológica e
          que a atuação não caracterize preconceito nem seja capacitista. Ela
          também recomenda cuidado com a fronteira entre perfil pessoal e
          profissional.
        </p>
        <p>
          Nenhum desses textos fala de humor ou emoji. Então a pergunta certa não
          é “pode ser engraçado?”, e sim “essa graça exagera, desinforma, expõe
          ou ridiculariza alguém?”.
        </p>
      </section>

      <section>
        <h2>O que costuma caber e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Humor nas redes de psicólogo: o que cabe e o que evitar" tabIndex={0}>
          <table>
            <caption>Humor nas redes de psicólogo: o que cabe e o que evitar</caption>
            <thead><tr><th scope="col">Tipo de humor</th><th scope="col">Cabe?</th></tr></thead>
            <tbody>
              <tr><td>Brincar com a própria rotina (o café, a agenda, a planilha)</td><td>Sim</td></tr>
              <tr><td>Situações gerais da vida de pais (a mochila esquecida, a lição de casa)</td><td>Sim, com cuidado</td></tr>
              <tr><td>Desfazer um mito com leveza, explicando o que a ciência diz</td><td>Sim</td></tr>
              <tr><td>Meme sobre sintoma ou diagnóstico (“meu TDAH atacou”)</td><td>Evitar</td></tr>
              <tr><td>Piada com situação de sessão, mesmo sem nome</td><td>Não (sigilo)</td></tr>
              <tr><td>Humor que ridiculariza grupos, corpos ou comportamentos</td><td>Não</td></tr>
              <tr><td>“Antes e depois da terapia” em tom de piada</td><td>Não (promessa de resultado)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Emoji: poucos e no lugar certo</h2>
        <ul>
          <li>
            Leitores de tela leem o nome de cada emoji. Uma linha com seis
            emojis vira uma frase longa e confusa para quem não enxerga.
          </li>
          <li>Prefira emoji no fim da frase, não no lugar de palavras.</li>
          <li>Evite emoji em informação importante, como horário e forma de contato.</li>
          <li>
            Escolha alguns que combinem com a marca e repita. Faz parte do{" "}
            <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
              tom de voz
            </Link>
            .
          </li>
        </ul>
      </section>

      <section>
        <h2>Um teste de três perguntas</h2>
        <ol>
          <li>Alguém que vive isso se sentiria respeitado ao ver o post?</li>
          <li>Um colega ou o seu CRP leriam o post como informação ou como exagero?</li>
          <li>Se a piada for tirada, sobra conteúdo útil?</li>
        </ol>
        <p>
          Se a resposta à terceira for não, o post é só engajamento. Pode
          funcionar uma vez, mas não constrói a confiança que leva alguém a
          marcar o primeiro contato. Mais sobre o que cabe no perfil em{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Aqui o cuidado dobra. Muitas famílias de crianças autistas já ouviram
          piadas sobre o filho e sobre elas mesmas, e memes sobre autismo e TDAH
          circulam carregados de estereótipos. Humor sobre a rotina dos pais, em
          tom de cumplicidade, pode funcionar; humor sobre a criança ou sobre o
          diagnóstico, não. Na dúvida, prefira leveza a piada, e confira a{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          . Ideias de posts em{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, o tom de voz do consultório (inclusive o quanto de
          humor cabe nele) é definido nos dois encontros de imersão, junto com a
          identidade visual, com tudo entregue em até 30 dias e dentro do artigo 20. Se
          quiser conversar sobre o jeito de falar do seu perfil, o primeiro passo
          é uma conversa de 15 minutos.
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
            , arts. 9º e 20.
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
            , edição de 2026.
          </li>
        </ul>
      </section>
    </>
  )
};
