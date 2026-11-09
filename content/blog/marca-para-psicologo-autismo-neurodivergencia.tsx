import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

export const post: Post = {
  slug: "marca-para-psicologo-autismo-neurodivergencia",
  title: "Marca para psicólogo que atende autismo e neurodivergência: como comunicar com as famílias",
  description:
    "Como construir a marca de um consultório que atende crianças autistas e neurodivergentes: linguagem, símbolos, clareza para os pais e os limites do artigo 20.",
  keyword: "psicólogo autismo marca",
  publishedAt: "2026-11-08",
  summary:
    "A marca de um consultório que atende crianças autistas e neurodivergentes precisa ser clara para os pais (público, faixa etária, formato, primeiro contato), usar linguagem respeitosa e consistente, evitar símbolos genéricos ou contestados como o quebra-cabeça e nunca prometer cura ou resultado. Fotos de crianças atendidas e relatos de casos ficam fora da divulgação.",
  faq: [
    { q: "Devo escrever “pessoa autista” ou “pessoa com autismo”?", a: "As duas formas circulam. Parte da comunidade prefere “pessoa autista”; outras famílias usam “pessoa com autismo” ou “com TEA”. Escolha com consciência, mantenha a escolha nos canais e respeite como cada família se refere ao filho." },
    { q: "Posso dizer que sou especialista em autismo?", a: "Só se tiver o título correspondente. Sem título, divulgue a área de atuação e a experiência, sem apresentá-las como especialidade." },
    { q: "O que os pais procuram primeiro no perfil do psicólogo?", a: "Em geral: se você atende a faixa etária e a demanda do filho, como é o atendimento, se há orientação aos pais ou contato com a escola, a sua formação e como fazer o primeiro contato." }
  ],
  cover: {
    src: "/blog/marca-para-psicologo-autismo-neurodivergencia/marca-para-psicologo-autismo-lapis-de-cor.jpg",
    alt: "Lápis de cor apontados, em alturas diferentes, alinhados sobre fundo claro, sugerindo diversidade e individualidade",
    caption: "Foto: Jess Watters / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Quem atende crianças e adolescentes autistas, com TDAH ou outras
        condições do neurodesenvolvimento conhece um tipo específico de primeiro
        contato. Do outro lado, quase sempre, está a mãe ou o pai. Muitas vezes
        chegam depois de uma orientação da escola, de um laudo recente ou de
        meses pesquisando por conta própria. Eles têm pouco tempo, muita
        informação acumulada e uma pergunta simples: esse profissional entende o
        meu filho e sabe o que faz?
      </p>
      <p>
        A marca do consultório responde a essa pergunta antes de qualquer
        conversa. Este texto trata de como construí-la para esse público: o que
        dizer, como dizer, que símbolos evitar e onde o Código de Ética traça os
        limites.
      </p>

      <section>
        <h2>Quem você está convencendo é um adulto cansado e atento</h2>
        <p>
          O responsável que procura atendimento para uma criança neurodivergente
          costuma comparar vários profissionais. Ele lê bios, abre sites, confere
          formação, procura sinais de que você conhece a realidade da família. E,
          ao mesmo tempo, está atento a exageros: depois de muito material na
          internet, aprendeu a desconfiar de quem promete demais.
        </p>
        <p>Por isso, a marca desse consultório precisa entregar três coisas:</p>
        <ul>
          <li>
            <strong>Clareza</strong> — para quem você atende (faixa etária,
            demandas), como trabalha (abordagem, formato, presencial ou online) e
            como é o primeiro contato.
          </li>
          <li>
            <strong>Credibilidade</strong> — formação e qualificações reais,
            apresentadas sem adjetivos e sem comparação com outros
            profissionais.
          </li>
          <li>
            <strong>Respeito</strong> — pela criança, pela família e pela forma
            como a comunidade autista e neurodivergente fala de si.
          </li>
        </ul>
      </section>

      <section>
        <h2>Linguagem: o ponto mais sensível</h2>
        <p>
          Nesse nicho, as palavras pesam. Algumas escolhas de linguagem que vale
          decidir na identidade verbal do consultório, antes de escrever a
          primeira bio:
        </p>
        <h3>“Pessoa autista” ou “pessoa com autismo”</h3>
        <p>
          As duas formas circulam. Parte da comunidade autista prefere “pessoa
          autista”, por entender o autismo como parte da identidade; outras
          pessoas e famílias usam “pessoa com autismo” ou “com TEA”. Não existe
          uma resposta única. O importante é escolher com consciência, manter a
          escolha em todos os canais e estar aberto a como cada família se
          refere ao próprio filho.
        </p>
        <h3>Fuja do vocabulário de “cura” e “superação”</h3>
        <p>
          Frases como “seu filho vai superar o autismo” ou “resultados
          garantidos” são problemáticas duas vezes. Esbarram na vedação do
          artigo 20 à previsão taxativa de resultados e soam desrespeitosas para
          muitas pessoas neurodivergentes e suas famílias. Descreva o que você
          faz — avaliação, acompanhamento, orientação aos pais, trabalho com a
          escola — em vez de prometer onde a criança vai chegar.
        </p>
        <h3>Explique os termos técnicos</h3>
        <p>
          Siglas e nomes de abordagens são familiares para você, mas nem sempre
          para os pais. Uma linha explicando o que significa cada serviço
          oferecido ajuda mais do que uma lista de técnicas. E lembre: o artigo
          20 pede que você divulgue apenas técnicas e práticas reconhecidas ou
          regulamentadas pela profissão, e só títulos e qualificações que de
          fato possui.
        </p>
      </section>

      <section>
        <h2>Símbolos: por que evitar o quebra-cabeça</h2>
        <p>
          A peça de quebra-cabeça ainda aparece em muitas marcas ligadas ao
          autismo, mas é contestada por parte da comunidade autista, que a
          associa à ideia de algo “faltando” ou “a ser resolvido”. Um estudo
          publicado na revista{" "}
          <a href="https://doi.org/10.1177/1362361317727125" {...ext}>
            Autism
          </a>{" "}
          encontrou associações negativas com peças de quebra-cabeça, inclusive
          as usadas em logos ligados ao autismo.
        </p>
        <p>
          O mesmo raciocínio vale para outros símbolos prontos — laços
          coloridos, cérebros estilizados, silhuetas de crianças. Mesmo quando não
          são contestados, são genéricos: aparecem em dezenas de perfis e não
          dizem nada sobre o seu trabalho. Um símbolo próprio, construído a partir
          do posicionamento do consultório, diferencia e evita associações que
          você não escolheu. Falamos mais sobre isso no texto sobre{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Visual: acolhedor, previsível e legível</h2>
        <p>
          A identidade visual de um consultório que atende neurodivergência não
          precisa ser infantil. Algumas diretrizes práticas:
        </p>
        <ul>
          <li>
            <strong>Paleta contida.</strong> Poucas cores, com função definida.
            Excesso de cor e de elementos compete com a informação que o
            responsável procura.
          </li>
          <li>
            <strong>Contraste suficiente.</strong> A{" "}
            <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
              WCAG 2.1
            </a>{" "}
            pede contraste mínimo de 4,5:1 para texto comum. Tons pastel sobre
            branco raramente chegam lá.
          </li>
          <li>
            <strong>Consistência.</strong> As mesmas cores, a mesma assinatura e
            a mesma organização de informação em todos os canais tornam a marca
            previsível — uma qualidade valiosa para quem pesquisa com pressa,
            no celular, entre uma tarefa e outra.
          </li>
          <li>
            <strong>Imagens que não expõem.</strong> Nada de fotos de crianças
            atendidas, desenhos feitos em sessão ou qualquer material que venha
            do atendimento. O sigilo profissional vale também para a divulgação.
            Prefira o seu espaço de trabalho, objetos, texturas ou arte gráfica
            própria.
          </li>
        </ul>
      </section>

      <section>
        <h2>O que a família precisa encontrar rápido</h2>
        <p>
          Um bom teste para a sua marca é imaginar o responsável chegando ao seu
          perfil ou site pela primeira vez. Em menos de um minuto, ele deveria
          conseguir responder:
        </p>
        <ul>
          <li>Você atende a faixa etária do meu filho?</li>
          <li>Você trabalha com a demanda que nos trouxe até aqui?</li>
          <li>Como é o atendimento — presencial, online, com que frequência?</li>
          <li>Você faz orientação aos pais ou conversa com a escola?</li>
          <li>Qual é a sua formação?</li>
          <li>Como faço o primeiro contato e o que acontece depois?</li>
        </ul>
        <p>
          Se alguma dessas respostas exige procurar muito, ela deve subir na
          hierarquia da bio, da página principal do site ou dos destaques do
          Instagram.
        </p>
      </section>

      <section>
        <h2>Conteúdo: informar sem expor</h2>
        <p>
          Muitos psicólogos desse nicho produzem conteúdo para pais — explicações
          sobre desenvolvimento, rotina, escola, direitos. É um caminho legítimo
          para mostrar competência, desde que alguns cuidados sejam mantidos:
        </p>
        <ul>
          <li>
            Nada de relatos de casos que permitam identificar uma criança ou uma
            família, mesmo com nomes trocados.
          </li>
          <li>
            Depoimentos de pacientes ou responsáveis exigem reflexão cuidadosa:
            a{" "}
            <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
              cartilha de publicidade do CRP-MG
            </a>{" "}
            lembra que, mesmo com autorização, o uso não é recomendado quando o
            foco é promover o profissional.
          </li>
          <li>
            Sem sensacionalismo: títulos alarmistas e “sinais de que seu filho
            tem…” em tom de diagnóstico rápido esbarram no artigo 20 e
            confundem os pais.
          </li>
        </ul>
      </section>

      <section>
        <h2>Checklist para revisar a sua marca</h2>
        <ul>
          <li>A bio e o site dizem claramente público, faixa etária e formato?</li>
          <li>A linguagem sobre autismo e neurodivergência foi escolhida e é consistente?</li>
          <li>Nenhuma peça promete cura, superação ou resultado garantido?</li>
          <li>O símbolo é próprio, e não um quebra-cabeça ou ícone genérico?</li>
          <li>Nenhuma imagem mostra criança atendida ou material de sessão?</li>
          <li>Nome completo e CRP aparecem em toda divulgação?</li>
          <li>O texto passa no contraste e é fácil de ler no celular?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia —
          incluindo os que atendem famílias de crianças autistas e
          neurodivergentes — em dois dias de imersão: posicionamento, identidade
          visual e verbal, no ar em 45 dias, dentro do artigo 20 do Código de
          Ética. O processo completo está em{" "}
          <Link href="/metodologia" className="inst-link">
            /metodologia
          </Link>
          . Se quiser conversar sobre a marca do seu consultório, o primeiro passo
          é uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de 2026.
          </li>
          <li>
            Gernsbacher, M. A. et al.{" "}
            <a href="https://doi.org/10.1177/1362361317727125" {...ext}>
              Do puzzle pieces and autism puzzle piece logos evoke negative
              associations?
            </a>{" "}
            <em>Autism</em>.
          </li>
          <li>
            W3C.{" "}
            <a href="https://www.w3.org/TR/WCAG21/#contrast-minimum" {...ext}>
              WCAG 2.1, critério 1.4.3 — Contraste (mínimo)
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
