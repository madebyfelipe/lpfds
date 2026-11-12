import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const RES11 = "https://site.cfp.org.br/wp-content/uploads/2018/05/RESOLU%C3%87%C3%83O-N%C2%BA-11-DE-11-DE-MAIO-DE-2018.pdf";

export const post: Post = {
  slug: "foto-profissional-para-psicologo",
  title: "Foto profissional para psicólogo: como escolher a imagem do site e do perfil",
  description:
    "Como escolher a foto profissional do psicólogo para site e redes: enquadramento, luz, fundo e o que evitar segundo o artigo 20 do Código de Ética.",
  keyword: "foto profissional para psicólogo",
  tags: ["identidade-visual", "presenca-digital"],
  publishedAt: "2026-11-12",
  summary:
    "A foto profissional do psicólogo deve mostrar quem atende, de forma simples e coerente com o consultório: rosto visível, boa luz, fundo discreto e roupa que combine com a marca. Fica de fora qualquer imagem de sessão, paciente ou criança atendida, e o artigo 20 do Código de Ética veda sensacionalismo e autopromoção em detrimento de colegas.",
  faq: [
    {
      q: "Preciso contratar um fotógrafo?",
      a: "Não é obrigatório. Uma foto bem iluminada, nítida e com fundo simples pode funcionar. Um fotógrafo ajuda quando você quer um conjunto de imagens para site, redes e materiais."
    },
    {
      q: "Posso fotografar meu consultório?",
      a: "Pode, desde que a imagem mostre o espaço e não uma sessão, um paciente ou material de atendimento. Veja a cena inteira antes de publicar para conferir que nada identifica ninguém."
    },
    {
      q: "Qual roupa usar na foto?",
      a: "Uma que você usaria para atender e que combine com as cores da marca. Evite estampas muito chamativas, que datam rápido e distraem do rosto."
    },
    {
      q: "Posso usar foto de banco de imagens?",
      a: "Para ilustrar um texto, sim, com licença comercial. Para mostrar quem atende, use foto sua: a família precisa saber com quem vai conversar."
    }
  ],
  cover: {
    src: "/blog/foto-profissional-para-psicologo/foto-profissional-para-psicologo-camera-na-mesa.jpg",
    alt: "Câmera fotográfica sobre uma mesa de trabalho com monitor e acessórios",
    caption: "Foto: lookstudio / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Antes de marcar o primeiro contato, muitos pais olham o rosto da pessoa
        que vai atender o filho. A foto profissional é uma das primeiras
        informações do site e do perfil, e ajuda a família a imaginar a
        conversa. Ela também é uma das imagens em que mais se erra, por excesso
        de pose, de edição ou de apelo.
      </p>

      <section>
        <h2>O que a foto precisa comunicar</h2>
        <ul>
          <li><strong>Quem você é:</strong> rosto visível, expressão natural, olhar para a câmera.</li>
          <li><strong>Acolhimento e seriedade:</strong> nada de pose artificial nem de ar de propaganda.</li>
          <li><strong>Coerência com a marca:</strong> cores e estilo próximos da identidade visual do consultório.</li>
        </ul>
        <p>
          Sobre a base da marca, veja{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Enquadramento, luz e fundo</h2>
        <ul>
          <li>Luz natural, de frente ou de lado, sem sombra forte no rosto.</li>
          <li>Fundo simples: parede lisa, estante organizada ou o próprio consultório vazio.</li>
          <li>Enquadramento do peito para cima para o perfil; meio corpo para a página “sobre”.</li>
          <li>Resolução suficiente para não pixelar quando a imagem for ampliada no site.</li>
          <li>Pouca edição: o paciente vai encontrar você pessoalmente.</li>
        </ul>
      </section>

      <section>
        <h2>O que o artigo 20 e o bom senso mandam evitar</h2>
        <p>
          O artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          veda a divulgação sensacionalista e a autopromoção em detrimento de
          outros profissionais. Para imagens, a{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          é a referência prática. Na dúvida, evite:
        </p>
        <ul>
          <li>fotos de sessão, de paciente ou de criança atendida, mesmo com autorização informal;</li>
          <li>divã, brinquedos ou materiais de atendimento em uso;</li>
          <li>imagens de “antes e depois” ou que sugiram resultado;</li>
          <li>legendas com superlativos como “o melhor” ou “referência”.</li>
        </ul>
      </section>

      <section>
        <h2>Onde usar cada imagem</h2>
        <ul>
          <li>
            <strong>Site:</strong> a mesma foto na página inicial e na “sobre”
            (veja{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site para psicólogo
            </Link>
            ).
          </li>
          <li>
            <strong>Instagram:</strong> foto de perfil recortada em círculo,
            com o rosto centralizado (veja{" "}
            <Link href="/blog/instagram-para-psicologos" className="inst-link">
              Instagram para psicólogos
            </Link>
            ).
          </li>
          <li>
            <strong>Google Meu Negócio:</strong> foto do rosto e do espaço,
            para a família reconhecer o local (veja{" "}
            <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
              Google Meu Negócio
            </Link>
            ).
          </li>
        </ul>
      </section>

      <section>
        <h2>Acessibilidade: texto alternativo</h2>
        <p>
          Toda foto publicada no site precisa de um texto alternativo que descreva
          o que ela mostra, para quem usa leitor de tela. As{" "}
          <a href="https://www.w3.org/TR/WCAG21/" {...ext}>
            Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1)
          </a>{" "}
          pedem alternativa em texto para conteúdo não textual. Descreva a cena
          em uma frase simples, sem lista de palavras-chave.
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
