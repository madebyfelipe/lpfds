import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;

export const post: Post = {
  slug: "branding-para-psicologos",
  title: "Branding para psicólogos: quando vale contratar e como é o processo",
  description:
    "O que é branding para um consultório de psicologia, sinais de que chegou a hora, como funciona o processo e o que perguntar antes de contratar.",
  keyword: "branding para psicólogos",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-07",
  summary:
    "Branding para psicólogos é o trabalho de definir o posicionamento do consultório — para quem ele existe e o que o distingue — e traduzir isso em identidade visual e verbal. Vale contratar quando a marca deixou de acompanhar o consultório: você explica o seu trabalho do zero em toda conversa ou os canais contam histórias diferentes. Um bom processo aprova a estratégia antes da arte e respeita o artigo 20 do Código de Ética.",
  faq: [
    { q: "Qual a diferença entre branding e marketing para psicólogos?", a: "Branding define quem é o consultório e como ele se apresenta; marketing decide como levar essa apresentação às pessoas certas. O branding vem antes e orienta o marketing." },
    { q: "Quanto tempo leva um projeto de branding para consultório?", a: "Depende do escopo de cada estúdio. Na Made by Felipe, o processo é de dois encontros de imersão, com a marca entregue em até 30 dias e o site incluso." },
    { q: "O que perguntar antes de contratar um estúdio de branding?", a: "Como o processo chega ao posicionamento, se quem conduz conhece o artigo 20 e as orientações do seu CRP, o que é entregue (inclusive guia da marca) e como são as aprovações." }
  ],
  cover: {
    src: "/blog/branding-para-psicologos/branding-para-psicologos-planejamento-de-marca.jpg",
    alt: "Caderno aberto com caneta sobre mesa branca e três vasos de suculentas ao fundo, cena de planejamento de marca",
    caption: "Foto: Ylanite Koppens / StockSnap (licença CC0).",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Branding costuma ser apresentado como assunto de empresa grande. Para
        quem atende em consultório, a palavra parece distante: a agenda é
        preenchida por indicação, o Instagram é atualizado quando sobra tempo e
        a marca é o nome com o CRP embaixo. Funciona até o momento em que deixa
        de funcionar — quando você quer mudar o perfil de quem chega, abrir
        atendimento online, atender um público específico ou simplesmente parar
        de explicar o seu trabalho do zero em cada primeira conversa.
      </p>
      <p>
        Este texto explica o que é branding para psicólogos, quando faz sentido
        investir nisso, como o processo costuma funcionar e o que perguntar a
        quem vai conduzir o trabalho.
      </p>

      <section>
        <h2>O que é branding (e por que não é só o logo)</h2>
        <p>
          Branding é o trabalho de definir o que a marca do consultório é e
          traduzir essa definição em tudo o que as pessoas veem e leem. Ele tem
          duas camadas:
        </p>
        <ul>
          <li>
            <strong>Estratégia</strong> — para quem você atende, que necessidade
            leva essas pessoas até você, o que distingue o seu trabalho e em que
            contexto ele acontece. O resultado é o posicionamento.
          </li>
          <li>
            <strong>Identidade</strong> — a forma que o posicionamento ganha: a
            identidade visual (assinatura, cores, tipografia, imagens) e a
            identidade verbal (tom de voz, mensagens-chave, como você descreve o
            que faz).
          </li>
        </ul>
        <p>
          Um logo sozinho é só uma peça da segunda camada. Quando ele nasce sem a
          primeira, a escolha visual vira questão de gosto — e a marca fica
          parecida com a de muitos outros consultórios. Já falamos sobre isso
          em detalhe no texto sobre{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Branding, marketing e social media: qual a diferença</h2>
        <p>
          Os três termos aparecem misturados nas ofertas para psicólogos, mas
          resolvem problemas diferentes:
        </p>
        <ul>
          <li>
            <strong>Branding</strong> define quem é o consultório e como ele se
            apresenta. É a base, feita uma vez e revisada quando o consultório
            muda.
          </li>
          <li>
            <strong>Marketing</strong> decide como levar essa apresentação às
            pessoas certas: canais, conteúdo, indicações, presença local.
          </li>
          <li>
            <strong>Social media</strong> é a execução contínua em redes sociais
            — posts, roteiros, publicação.
          </li>
        </ul>
        <p>
          Quando o marketing ou o social media começam sem branding, cada peça
          tenta resolver sozinha a pergunta “quem sou eu e para quem falo?”. O
          resultado costuma ser um perfil que muda de tom e de cara a cada mês.
          Com a marca definida, o conteúdo passa a ter um ponto de partida — e
          fica mais fácil de produzir, por você ou por quem você contratar.
        </p>
      </section>

      <section>
        <h2>Branding para psicólogos tem regras próprias</h2>
        <p>
          A publicidade do psicólogo é regulada. O artigo 20 do{" "}
          <a href="https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf" {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          determina, entre outros pontos, que a divulgação traga nome completo,
          CRP e número de registro, que não use o preço do serviço como forma de
          propaganda, que não faça previsão taxativa de resultados e que não seja
          sensacionalista.
        </p>
        <p>
          Na prática, isso muda o trabalho de marca em três frentes:
        </p>
        <ul>
          <li>
            <strong>Na identidade visual</strong>, a assinatura precisa prever o
            nome completo e o CRP de forma legível. A{" "}
            <a href="https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf" {...ext}>
              cartilha de publicidade do CRP-MG
            </a>{" "}
            orienta que logomarcas são permitidas desde que vinculadas a esses
            dados.
          </li>
          <li>
            <strong>Na identidade verbal</strong>, o discurso descreve o que você
            faz, para quem e como — sem prometer o resultado que a pessoa vai
            obter e sem se comparar a outros profissionais.
          </li>
          <li>
            <strong>Na direção de arte</strong>, nada de imagens de sessão, de
            paciente ou de material produzido em atendimento: o sigilo
            profissional vale também para a divulgação.
          </li>
        </ul>
        <p>
          Por isso, quem conduz o branding de um consultório precisa conhecer
          essas regras antes da primeira proposta visual — e não descobrir na
          revisão final que metade das peças não pode ir ao ar.
        </p>
      </section>

      <section>
        <h2>Sinais de que chegou a hora</h2>
        <p>
          Não existe um momento único, mas algumas situações costumam indicar
          que a marca deixou de acompanhar o consultório:
        </p>
        <ul>
          <li>
            Você precisa explicar a sua formação e o seu foco do início em quase
            toda primeira conversa.
          </li>
          <li>
            As pessoas que chegam não são as que você atende melhor, ou chegam
            com expectativas que não combinam com o seu trabalho.
          </li>
          <li>
            Instagram, site, perfil no Google e WhatsApp contam histórias
            diferentes — nomes, cores e descrições que não se conversam.
          </li>
          <li>
            Você vai mudar algo relevante: um público novo, atendimento online,
            um espaço próprio, uma pessoa jurídica.
          </li>
          <li>
            A sua formação e a sua experiência cresceram, e a apresentação
            continua a mesma do início da carreira.
          </li>
        </ul>
        <p>
          Se nenhum desses pontos se aplica, talvez ainda não seja o momento. Um
          bom processo de branding também começa por essa honestidade.
        </p>
      </section>

      <section>
        <h2>Como funciona o processo</h2>
        <p>
          Cada estúdio tem o seu método, mas um processo sério de branding passa
          por etapas parecidas. Para ficar concreto, descrevemos o nosso, o{" "}
          <Link href="/metodologia" className="inst-link">
            método PSIQUE
          </Link>
          , que tem duas etapas.
        </p>
        <h3>Etapa 1 — Estratégia de marca</h3>
        <ul>
          <li>
            <strong>Entrevista</strong>: conversa individual com você e com quem
            mais atua no consultório.
          </li>
          <li>
            <strong>Workshop</strong>: dois encontros de imersão, de cerca de 1h30, em que seis
            áreas — Prática, Sujeito, Inquietação, Qualidade, Universo e Estória
            — viram estratégia.
          </li>
          <li>
            <strong>Pesquisa</strong>: validação das informações levantadas e
            leitura da concorrência da sua região.
          </li>
          <li>
            <strong>Diagnóstico</strong>: tudo o que foi coletado, documentado e
            aprovado com você antes de seguir.
          </li>
        </ul>
        <h3>Etapa 2 — Identidade de marca</h3>
        <ul>
          <li>
            <strong>Plataforma</strong>: a síntese da estratégia, o documento que
            orienta toda a identidade.
          </li>
          <li>
            <strong>Keyword</strong>: a proposta de posicionamento e de
            identidade verbal — o discurso do consultório.
          </li>
          <li>
            <strong>Keyvisual</strong>: a proposta de identidade visual — cores,
            grafismos e tipografia.
          </li>
          <li>
            <strong>Guia da marca</strong>: estratégia, posicionamento e
            identidade reunidos e aplicados. No nosso caso, entregues em até 30 dias.
          </li>
        </ul>
        <p>
          O ponto mais importante dessa sequência é a ordem: o posicionamento é
          aprovado antes de qualquer arte. Assim a discussão sobre cores e
          formas deixa de ser preferência pessoal e passa a ter critério.
        </p>
      </section>

      <section>
        <h2>O que você recebe ao final</h2>
        <p>
          O pacote varia de estúdio para estúdio. No nosso, as entregas são
          posicionamento, identidade visual, identidade verbal, guia da marca,
          página profissional, papelaria clínica e direção de arte. Seja qual
          for o escopo, vale exigir que exista um guia: é ele que permite a você
          — ou a quem cuidar das suas redes — aplicar a marca com consistência
          depois que o projeto termina.
        </p>
      </section>

      <section>
        <h2>O que perguntar antes de contratar</h2>
        <ul>
          <li>
            Como o processo chega ao posicionamento? Existe uma etapa de
            estratégia antes do visual?
          </li>
          <li>
            Quem conduz conhece o artigo 20 do Código de Ética e as orientações
            do seu Conselho Regional?
          </li>
          <li>Quanto tempo leva e quanto do seu tempo o processo exige?</li>
          <li>
            O que exatamente é entregue? Há guia da marca? Os arquivos ficam com
            você?
          </li>
          <li>
            Como são as aprovações? Em que momento você valida cada etapa?
          </li>
          <li>
            O estúdio já trabalhou com consultórios de psicologia? Peça para ver
            projetos, não só ouvir sobre eles.
          </li>
        </ul>
        <p>
          Desconfie de propostas que prometem “mais pacientes” como resultado
          garantido. Marca organiza como você é percebido e encontrado; a
          decisão de quem procura atendimento depende de muitos outros fatores.
        </p>
      </section>

      <section>
        <h2>Erros comuns ao contratar</h2>
        <ul>
          <li>
            <strong>Começar pelo logo.</strong> Pedir “só um logo” e descobrir
            depois que ele não serve para o público que você quer atender.
          </li>
          <li>
            <strong>Escolher pela referência bonita.</strong> Um portfólio
            atraente não diz se o processo chega a uma estratégia — pergunte como
            aquele resultado foi decidido.
          </li>
          <li>
            <strong>Pular a sua participação.</strong> Ninguém conhece o seu
            consultório melhor do que você. Um processo que não pede o seu
            tempo nas etapas de estratégia vai inventar, em vez de traduzir.
          </li>
          <li>
            <strong>Não pedir o guia.</strong> Sem um documento de uso, a marca
            se desfaz nas primeiras peças feitas por outra pessoa.
          </li>
        </ul>
      </section>

      <section>
        <h2>Branding não substitui o seu Conselho</h2>
        <p>
          Um bom trabalho de marca ajuda a divulgar dentro das regras, mas a
          responsabilidade ética pela publicidade é do profissional. Em caso de
          dúvida sobre uma peça específica, a orientação vem do Conselho
          Regional em que você está inscrito.
        </p>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia a partir
          de dois encontros de imersão: posicionamento, identidade visual e verbal, entregues em até
          30 dias, dentro do artigo 20 do Código de Ética. Se quiser entender se
          faz sentido para o seu consultório agora, o primeiro passo é uma
          conversa de 15 minutos.
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
        </ul>
      </section>
    </>
  )
};
