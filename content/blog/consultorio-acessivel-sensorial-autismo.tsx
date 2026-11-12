import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const LEI_TEA = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const LBI = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm";
const ANTICAPACITISTA = "https://site.cfp.org.br/wp-content/uploads/2025/10/Manual_Anticapacitista_web.pdf";
const WCAG = "https://www.w3.org/TR/WCAG21/";

export const post: Post = {
  slug: "consultorio-acessivel-sensorial-autismo",
  title: "Consultório sensorialmente acessível para autistas: ajustes no espaço e na comunicação",
  description:
    "Como deixar o consultório de psicologia mais acessível para crianças autistas: luz, som, sala de espera, aviso antes da primeira visita e como comunicar isso.",
  keyword: "consultório acessível para autistas",
  tags: ["neurodivergencia", "identidade-visual"],
  publishedAt: "2026-11-12",
  summary:
    "Um consultório sensorialmente acessível reduz o que costuma sobrecarregar: luz forte, barulho, espera longa, imprevisto. Os ajustes mais úteis são simples: iluminação regulável, sala de espera calma ou espera fora dela, um guia visual da primeira visita e perguntas prévias sobre o perfil sensorial da criança. Na divulgação, descreva o que existe de fato, sem prometer que o espaço “acalma” ou “trata”.",
  faq: [
    {
      q: "O que é um consultório sensorialmente acessível?",
      a: "É um espaço pensado para reduzir estímulos que podem sobrecarregar pessoas com sensibilidade sensorial, como muitas pessoas autistas: luz intensa, barulho, cheiros fortes, excesso de objetos, espera longa e mudanças sem aviso."
    },
    {
      q: "Preciso de uma sala multissensorial?",
      a: "Não. Sala multissensorial é um recurso de intervenção, com outros objetivos. Para o consultório, o mais útil costuma ser reduzir estímulos e dar previsibilidade, e perguntar a cada família o que a criança precisa."
    },
    {
      q: "Posso divulgar que meu consultório é adaptado para autistas?",
      a: "Pode descrever os ajustes que existem: luz regulável, sala de espera silenciosa, guia visual. Evite dizer que o espaço acalma, trata ou garante uma boa experiência, porque isso é previsão de resultado, vedada pelo artigo 20."
    },
    {
      q: "Existe norma oficial para consultório sensorial?",
      a: "Não encontramos uma norma técnica específica para consultórios. A Lei Brasileira de Inclusão garante acessibilidade de forma ampla, e a Lei 12.764/2012 reconhece a pessoa autista como pessoa com deficiência para todos os efeitos legais."
    }
  ],
  cover: {
    src: "/blog/consultorio-acessivel-sensorial-autismo/consultorio-acessivel-sensorial-autismo-sala-calma.jpg",
    alt: "Sala clara e silenciosa com uma poltrona baixa, cortinas leves e uma planta, sem pessoas",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Para muitas crianças autistas, o atendimento começa antes da porta da
        sala: o corredor iluminado demais, a TV ligada na recepção, o barulho do
        ar-condicionado, a espera sem saber o que vem depois. Quando isso
        sobrecarrega, a primeira consulta já começa difícil para a criança e
        para a família. Pequenos ajustes no espaço e na comunicação mudam essa
        entrada.
      </p>

      <section>
        <h2>O que dizem as leis</h2>
        <p>
          A{" "}
          <a href={LEI_TEA} {...ext}>
            Lei nº 12.764/2012
          </a>{" "}
          considera a pessoa com transtorno do espectro autista pessoa com
          deficiência para todos os efeitos legais. A{" "}
          <a href={LBI} {...ext}>
            Lei Brasileira de Inclusão (Lei nº 13.146/2015)
          </a>{" "}
          trata a acessibilidade como direito e inclui barreiras de comunicação e
          de atitude, não só as físicas. Não encontramos norma técnica oficial
          específica para consultório sensorial; o que existe são orientações
          práticas de serviços de saúde e pesquisas de arquitetura. O{" "}
          <a href={ANTICAPACITISTA} {...ext}>
            manual anticapacitista do CFP
          </a>{" "}
          é uma boa leitura para a postura por trás dos ajustes.
        </p>
      </section>

      <section>
        <h2>Antes da primeira visita</h2>
        <ul>
          <li>
            <strong>Pergunte.</strong> Um formulário curto ou uma conversa com os
            responsáveis: o que costuma incomodar a criança, o que acalma, se ela
            prefere esperar fora, qual horário é melhor.
          </li>
          <li>
            <strong>Mostre o caminho.</strong> Um guia com fotos da fachada, da
            entrada, da sala de espera e da sala de atendimento, sem pessoas.
            Muitas famílias mostram isso à criança antes de sair de casa.
          </li>
          <li>
            <strong>Diga o que vai acontecer.</strong> Quem recebe, quanto tempo
            dura, se os pais ficam junto.
          </li>
          <li>
            <strong>Evite espera.</strong> Horários com folga entre um
            atendimento e outro reduzem o tempo na recepção.
          </li>
        </ul>
      </section>

      <section>
        <h2>Ajustes no espaço</h2>
        <div className="inst-blog__table" role="region" aria-label="Ajustes sensoriais no consultório" tabIndex={0}>
          <table>
            <caption>Ajustes sensoriais no consultório</caption>
            <thead><tr><th scope="col">Estímulo</th><th scope="col">Ajuste possível</th></tr></thead>
            <tbody>
              <tr><td>Luz</td><td>Luz indireta ou regulável, cortina para sol direto, evitar lâmpada que pisca</td></tr>
              <tr><td>Som</td><td>Sem TV ou música na espera, tapete e cortina para abafar, fones disponíveis</td></tr>
              <tr><td>Visual</td><td>Paredes calmas, menos objetos expostos, brinquedos guardados e à vista só quando usados</td></tr>
              <tr><td>Cheiro</td><td>Sem aromatizador ou difusor forte</td></tr>
              <tr><td>Espera</td><td>Canto mais isolado ou opção de esperar no carro ou do lado de fora, com aviso pelo WhatsApp</td></tr>
              <tr><td>Previsibilidade</td><td>Mesma sala, mesma rotina de entrada, aviso prévio de qualquer mudança</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          A paleta e a decoração entram aqui também. Os detalhes estão em{" "}
          <Link href="/blog/decoracao-consultorio-psicologia-infantil" className="inst-link">
            decoração de consultório de psicologia infantil
          </Link>{" "}
          e em{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Cada criança é uma</h2>
        <p>
          Sensibilidade sensorial varia muito: há crianças que evitam estímulos
          e crianças que os buscam. Por isso, um plano individual, combinado com
          a família, vale mais do que um pacote de itens comprados. O espaço
          calmo é o ponto de partida; o ajuste fino vem das perguntas.
        </p>
      </section>

      <section>
        <h2>Acessibilidade também no site e no WhatsApp</h2>
        <ul>
          <li>Texto claro, frases curtas, informação sobre a primeira visita fácil de achar.</li>
          <li>Contraste suficiente e fonte legível, seguindo as <a href={WCAG} {...ext}>WCAG 2.1</a>.</li>
          <li>Fotos do espaço com texto alternativo que descreve o que mostram.</li>
          <li>Opção de contato por mensagem, para quem não gosta de ligar.</li>
        </ul>
        <p>
          Mais em{" "}
          <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
            criação de site para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Como divulgar sem prometer</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            artigo 20 do Código de Ética
          </a>{" "}
          veda previsão taxativa de resultados e divulgação sensacionalista. Na
          prática:
        </p>
        <ul>
          <li><strong>Pode:</strong> “A sala de espera não tem TV e a luz é regulável. Se preferir, a criança pode esperar fora e eu aviso pelo WhatsApp.”</li>
          <li><strong>Evite:</strong> “Espaço que acalma crianças autistas”, “ambiente terapêutico que reduz crises”.</li>
          <li><strong>Não:</strong> fotos de crianças no espaço, mesmo de costas.</li>
        </ul>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Decorar com muitas cores e personagens achando que é “acolhedor”.</li>
          <li>Comprar itens sensoriais sem perguntar o que a criança precisa.</li>
          <li>Recepção compartilhada com TV ligada e sem alternativa.</li>
          <li>Mudar a sala sem avisar a família.</li>
          <li>Anunciar o espaço como se ele fosse a intervenção.</li>
        </ul>
      </section>

      <section>
        <h2>Exemplo ilustrativo</h2>
        <p>
          Uma clínica fictícia divide a recepção com outros consultórios. Sem
          poder mudar o espaço todo, ela combina com as famílias de crianças
          autistas que mandem mensagem ao chegar; a psicóloga busca a criança no
          carro ou na calçada no horário marcado. No site, uma página “Primeira
          visita” mostra fotos da entrada e da sala e explica esse combinado.
        </p>
      </section>

      <section>
        <h2>Checklist</h2>
        <ul>
          <li>Perguntas sobre perfil sensorial antes da primeira visita.</li>
          <li>Guia visual da entrada e das salas, sem pessoas.</li>
          <li>Luz regulável, sem TV, sem aromatizador forte.</li>
          <li>Alternativa à sala de espera.</li>
          <li>Rotina de entrada previsível e aviso de mudanças.</li>
          <li>Site e WhatsApp com informação clara e acessível.</li>
          <li>Divulgação descritiva, sem promessa.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói marcas de consultórios que atendem famílias
          de crianças autistas e neurodivergentes: posicionamento, identidade
          visual e verbal em dois dias de imersão, no ar em 45 dias, dentro do
          artigo 20. A paleta, o guia de primeira visita e o site saem da mesma
          identidade. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>
          . O primeiro passo é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Brasil.{" "}
            <a href={LEI_TEA} {...ext}>
              Lei nº 12.764/2012 — Política Nacional de Proteção dos Direitos da Pessoa com Transtorno do Espectro Autista
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LBI} {...ext}>
              Lei nº 13.146/2015 — Lei Brasileira de Inclusão da Pessoa com Deficiência
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={ANTICAPACITISTA} {...ext}>
              Manual orientativo para uma atuação anticapacitista na Psicologia
            </a>
            , 2025.
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
