import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES23 = "https://ses.sp.bvs.br/wp-content/uploads/2022/10/U_RS-CFP-23_131022.pdf";
const ESPECIALISTA = "https://site.cfp.org.br/servicos/titulo-de-especialista/";
const RES06 = "https://www.sepsi.ufscar.br/arquivos/regulamentacao/resolucaocfp-06-2019.pdf";

export const post: Post = {
  slug: "marca-para-neuropsicologa",
  title: "Marca para neuropsicóloga: posicionamento, identidade visual e o que o CFP permite",
  description:
    "Como construir a marca de uma neuropsicóloga: título de especialista, público, encaminhadores, identidade visual, laudo e site dentro do art. 20.",
  keyword: "marca para neuropsicóloga",
  tags: ["posicionamento", "neurodivergencia", "identidade-visual"],
  publishedAt: "2026-11-13",
  summary:
    "A marca de uma neuropsicóloga precisa ser lida por dois públicos ao mesmo tempo: famílias e adultos que buscam avaliação e profissionais que encaminham, como médicos e escolas. Ela parte de um posicionamento claro (quem você avalia e para quê), usa o título de especialista só se você tiver o registro, e leva a mesma identidade do site ao laudo. Nada de imagem de teste, promessa de diagnóstico ou prazo garantido.",
  faq: [
    {
      q: "Posso me apresentar como neuropsicóloga sem o título de especialista?",
      a: "A cartilha do CRP-MG orienta que a psicóloga só use títulos que possui e que, sem título, divulgue a área de atuação ou a experiência, sem apresentá-la como especialidade. Então “psicóloga com atuação em avaliação neuropsicológica” é seguro; “neuropsicóloga” como título pede o registro de especialista ou a especialização correspondente. Na dúvida, consulte o seu CRP."
    },
    {
      q: "Neuropsicologia é especialidade reconhecida pelo CFP?",
      a: "Sim. A Resolução CFP nº 23/2022 lista a Neuropsicologia entre as 13 especialidades para registro de psicóloga especialista. O próprio CFP lembra que o registro não é obrigatório para exercer a profissão, mas atesta a atuação na área."
    },
    {
      q: "Posso mostrar testes neuropsicológicos no Instagram ou no site?",
      a: "Não. A cartilha do CRP-MG diz que é vedada a divulgação de imagens de testes psicológicos em material de publicidade profissional, para proteger instrumentos privativos da profissão. Prefira fotos do espaço, de objetos neutros ou arte gráfica da marca."
    },
    {
      q: "Que cores usar na marca de uma neuropsicóloga?",
      a: "Não existe cor certa para a especialidade. Escolha a paleta pelo público e pelo tom que você quer passar, garanta contraste de leitura e evite clichês como cérebro colorido e peças de quebra-cabeça, que muitas pessoas autistas rejeitam."
    }
  ],
  cover: {
    src: "/blog/marca-para-neuropsicologa/marca-para-neuropsicologa-papelaria-timbrada.jpg",
    alt: "Folhas, envelope e cartões em branco de papelaria timbrada sobre fundo cinza claro, base da identidade visual de uma neuropsicóloga",
    caption: "Foto: rawpixel.com / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A neuropsicóloga vive uma situação particular na hora de construir a
        marca. Quem paga e quem procura nem sempre é quem indica. Uma família
        pode chegar porque a escola sugeriu uma avaliação, um adulto porque o
        psiquiatra pediu um laudo, um neurologista porque precisa de um
        parecer sobre memória. A mesma marca precisa ser clara para todos
        eles, e a maioria das neuropsicólogas acaba com um perfil genérico de
        “psicóloga clínica” que não comunica o que faz.
      </p>
      <p>
        A resposta curta: defina quem você avalia e para quê, apresente
        títulos só se tiver, fale com os encaminhadores tanto quanto com as
        famílias e leve a mesma identidade do site ao laudo. Abaixo estão os
        passos, com exemplos rotulados como ilustrativos e os limites do
        Código de Ética em cada um.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={RES23} {...ext}>
            Resolução CFP nº 23/2022
          </a>{" "}
          lista a Neuropsicologia entre as especialidades para registro de
          psicóloga especialista e a descreve como a área referente à relação
          entre funções do sistema nervoso e o comportamento humano. Segundo a{" "}
          <a href={ESPECIALISTA} {...ext}>
            página do CFP sobre o registro
          </a>
          , ele não é condição obrigatória para o exercício profissional, mas
          atesta o reconhecimento da atuação na área. A resolução exige, entre
          outros requisitos, inscrição no CRP há pelo menos dois anos.
        </p>
        <p>
          Na divulgação vale o{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>
          : nome completo ou nome social, CRP, só títulos e qualificações que
          possui, sem preço como propaganda e sem previsão taxativa de
          resultados. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          acrescenta dois pontos que pesam para quem faz avaliação: não
          apresentar uma qualificação como se fosse especialidade e não
          divulgar imagens de testes psicológicos. A{" "}
          <a href={RES06} {...ext}>
            Resolução CFP nº 6/2019
          </a>{" "}
          regula os documentos escritos, incluindo o laudo.
        </p>
      </section>

      <section>
        <h2>1. Decida quem você avalia e para quê</h2>
        <p>
          O posicionamento de uma neuropsicóloga começa pela pergunta “quem eu
          avalio e com que finalidade”. Neuropsicologia infantil para
          investigação de autismo e TDAH, avaliação de adultos com queixa de
          atenção, avaliação de idosos com queixa de memória e reabilitação
          cognitiva depois de lesão são marcas diferentes.
        </p>
        <ol>
          <li>Liste as faixas etárias que você atende hoje e as que quer atender.</li>
          <li>Liste as demandas mais frequentes, sem detalhe de caso.</li>
          <li>Separe o que é avaliação, o que é intervenção e o que é orientação.</li>
          <li>Escolha o recorte principal da marca e deixe os outros como serviços.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Avaliação neuropsicológica de
          crianças e adolescentes, com devolutiva para a família e orientação
          à escola.” Em uma linha, a família sabe se é com você e o pediatra
          sabe para quem encaminhar.
        </p>
        <p>
          <strong>Erro comum:</strong> listar “avaliação, psicoterapia,
          reabilitação, orientação vocacional e supervisão” com o mesmo peso.
          Quem lê não entende o que você faz melhor. O texto sobre{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          mostra como recortar sem se limitar.
        </p>
      </section>

      <section>
        <h2>2. Use o título certo em cada lugar</h2>
        <p>
          O nome que aparece na marca precisa corresponder ao que você tem.
          Esse é o ponto em que mais perfis de neuropsicologia escorregam,
          porque “neuropsicóloga” virou termo de busca.
        </p>
        <ul>
          <li>
            <strong>Com registro de especialista:</strong> “Psicóloga
            especialista em Neuropsicologia, CRP 00/00000”.
          </li>
          <li>
            <strong>Com especialização, sem registro no CRP:</strong> cite a
            especialização como título acadêmico, com a instituição, sem dizer
            “título de especialista pelo CFP”.
          </li>
          <li>
            <strong>Sem especialização:</strong> descreva a área, como
            “psicóloga com atuação em avaliação neuropsicológica”, e a
            formação que tiver, como curso livre, sem apresentá-la como
            especialidade.
          </li>
        </ul>
        <p>
          A regra vale para a bio, o site, o cartão, a assinatura de e-mail e
          o perfil no Google. O artigo{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            psicólogo pode se dizer especialista?
          </Link>{" "}
          detalha cada situação.
        </p>
        <p>
          <strong>Erro comum:</strong> pôr “Neuropsicóloga” no nome do perfil
          por SEO antes de ter o título. A busca traz visitas, mas a
          divulgação fica em desacordo com o art. 20, alínea b.
        </p>
      </section>

      <section>
        <h2>3. Fale com quem encaminha</h2>
        <p>
          Boa parte das avaliações chega por indicação de outros
          profissionais. A marca precisa ter uma camada pensada para eles,
          sem virar autopromoção em detrimento de colegas.
        </p>
        <ol>
          <li>
            <strong>Uma página ou seção “para profissionais”</strong> no site,
            com o que você avalia, como recebe o encaminhamento e o que
            devolve (laudo, relatório, devolutiva).
          </li>
          <li>
            <strong>Um material de apresentação de uma página</strong>, com a
            mesma identidade visual, para enviar a médicos, escolas e
            terapeutas.
          </li>
          <li>
            <strong>Linguagem técnica na medida</strong>: o neurologista quer
            saber quais funções você investiga; a escola quer saber como a
            devolutiva chega até ela, com autorização da família.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma folha “Avaliação neuropsicológica
          infantil: para quem é, como encaminhar, o que a família recebe”,
          com nome, CRP e contato no rodapé.
        </p>
        <p>
          <strong>Erro comum:</strong> prometer prazos que dependem da
          criança e da família, como “laudo em 7 dias”. Se precisar informar
          prazo, diga o que é habitual e do que depende. Para escolas, o texto
          sobre{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>{" "}
          trata do sigilo.
        </p>
      </section>

      <section>
        <h2>4. Escolha nome e assinatura visual</h2>
        <p>
          Para a maioria das neuropsicólogas que atendem sozinhas, o nome
          próprio é a marca. Um nome fantasia faz sentido quando há equipe ou
          planos de crescer, e precisa vir acompanhado do nome completo e do
          CRP da responsável.
        </p>
        <ul>
          <li>
            <strong>Nome próprio:</strong> mais direto para a busca de quem
            recebeu a indicação (“fulana neuropsicóloga”).
          </li>
          <li>
            <strong>Nome fantasia:</strong> evite termos que prometem
            resultado, como “Cérebro Feliz” ou “Mente Plena”, e confira o
            registro no INPI. O artigo sobre{" "}
            <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
              nome para consultório de psicologia
            </Link>{" "}
            traz o passo a passo.
          </li>
          <li>
            <strong>Símbolo:</strong> fuja do cérebro estilizado, do neurônio e
            do quebra-cabeça. São tão usados que não diferenciam, e o
            quebra-cabeça é rejeitado por muitas pessoas autistas.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> criar um logo complexo que some no
          tamanho de um avatar ou no cabeçalho de um laudo. Teste a assinatura
          em 32 pixels e em preto e branco antes de aprovar.
        </p>
      </section>

      <section>
        <h2>5. Monte uma identidade visual que aguente documento técnico</h2>
        <p>
          A identidade da neuropsicóloga precisa funcionar no Instagram e num
          laudo de dez páginas. Isso puxa escolhas mais sóbrias do que as de
          uma psicóloga que só atende em consultório.
        </p>
        <ol>
          <li>
            <strong>Tipografia legível em texto longo</strong>, com uma
            família para títulos e outra (ou a mesma) para corpo.
          </li>
          <li>
            <strong>Paleta com contraste.</strong> Uma cor de destaque e
            neutros. O texto sobre{" "}
            <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
              cores para consultório de psicologia
            </Link>{" "}
            mostra como escolher sem clichê.
          </li>
          <li>
            <strong>Papel timbrado discreto</strong>: nome, CRP, contato e
            assinatura visual no cabeçalho ou no rodapé, sem competir com o
            conteúdo.
          </li>
          <li>
            <strong>Fotos sem atendimento</strong>: espaço vazio, mesa,
            objetos, você em retrato. Nunca testes, crianças avaliadas ou
            material de avaliação.
          </li>
        </ol>
        <p>
          <strong>Erro comum:</strong> usar a mesma paleta vibrante do
          Instagram no laudo. O documento é lido por médicos, escolas e às
          vezes pelo Judiciário; ele pede sobriedade. Veja o que entra numa{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Leve a marca ao laudo sem mexer na estrutura técnica</h2>
        <p>
          O laudo é a peça que mais circula da sua marca, e a Resolução CFP nº
          6/2019 define o que ele precisa conter. A identidade visual entra na
          forma, não na estrutura.
        </p>
        <ul>
          <li>Mantenha os itens e a ordem que a resolução define para cada tipo de documento.</li>
          <li>
            Encerre com local, data, nome completo ou nome social, CRP e
            assinatura, e numere e rubrique as páginas como a resolução pede.
          </li>
          <li>Use o timbrado da marca em todas as páginas, com a mesma tipografia do site.</li>
          <li>Coloque referências em nota de rodapé, como a resolução orienta.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> cabeçalho com a assinatura visual em
          uma cor, corpo em preto, rodapé com nome, CRP e contato. Nada de
          ícones, fundos ou frases motivacionais.
        </p>
        <p>
          <strong>Erro comum:</strong> incluir no documento um texto de
          apresentação comercial do consultório. O laudo é documento técnico;
          a apresentação fica no site e no material para encaminhadores.
        </p>
      </section>

      <section>
        <h2>7. Faça o site responder às perguntas da avaliação</h2>
        <p>
          A família que recebeu a indicação procura seu nome no Google e
          decide em poucos minutos se vai ligar. O site precisa responder,
          antes do contato, às dúvidas que você mais ouve.
        </p>
        <ul>
          <li>O que é a avaliação neuropsicológica e para quem é indicada.</li>
          <li>Como funciona: entrevista, sessões, devolutiva, documento final.</li>
          <li>O que a família precisa trazer e como se preparar.</li>
          <li>Quem você é, com títulos reais e CRP.</li>
          <li>Como agendar a primeira conversa.</li>
        </ul>
        <p>
          O artigo sobre a{" "}
          <Link href="/blog/pagina-de-avaliacao-neuropsicologica" className="inst-link">
            página de avaliação neuropsicológica infantil
          </Link>{" "}
          mostra a estrutura da página do serviço, e o de{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site profissional para psicólogo
          </Link>{" "}
          cobre o resto do site.
        </p>
        <p>
          <strong>Erro comum:</strong> escrever “diagnóstico de autismo” como
          o produto. A avaliação investiga e descreve; o diagnóstico de TEA
          costuma envolver uma equipe e o médico. Prometer o rótulo é previsão
          de resultado.
        </p>
      </section>

      <section>
        <h2>Marca de neuropsicóloga: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Marca de neuropsicóloga: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Marca de neuropsicóloga: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Na divulgação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>“Especialista em Neuropsicologia” com o registro no CRP</td><td>Sim</td></tr>
              <tr><td>“Atuação em avaliação neuropsicológica”, sem o título</td><td>Sim</td></tr>
              <tr><td>“Neuropsicóloga” no nome do perfil sem título nem especialização</td><td>Não (art. 20, b)</td></tr>
              <tr><td>Foto de teste, protocolo ou bloco de respostas</td><td>Não (instrumento privativo)</td></tr>
              <tr><td>“Laudo garantido em 7 dias”</td><td>Evitar (promessa)</td></tr>
              <tr><td>“Descubra se seu filho é autista”</td><td>Não (previsão de resultado)</td></tr>
              <tr><td>Página explicando etapas da avaliação e da devolutiva</td><td>Sim</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem marca: revisar sem recomeçar</h2>
        <p>
          Se você já tem logo e perfil, a revisão costuma ser de coerência,
          não de criação. Junte numa tela a bio, o site, o cartão, o laudo e o
          material para encaminhadores e veja se o título, o nome e as cores
          são os mesmos em todos.
        </p>
        <p>
          Dois ajustes rendem mais do que trocar o logo: alinhar o título em
          todos os pontos de contato ao que você tem registrado e criar a
          camada para profissionais que encaminham. Se a marca nasceu antes da
          especialização, talvez o posicionamento tenha mudado e valha um{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding
          </Link>{" "}
          planejado, sem perder o nome que as pessoas já buscam.
        </p>
      </section>

      <section>
        <h2>Para quem avalia crianças autistas e neurodivergentes</h2>
        <p>
          Na avaliação infantil, a marca fala com pais que muitas vezes estão
          esperando há meses, ouviram opiniões contraditórias e chegam
          ansiosos por uma resposta. A comunicação pode reduzir essa
          ansiedade ou aumentá-la.
        </p>
        <ul>
          <li>
            <strong>Explique o processo antes do preço e do prazo.</strong> O
            que acontece em cada encontro, quem participa e como é a
            devolutiva.
          </li>
          <li>
            <strong>Use linguagem que respeita a criança.</strong> “Investigar
            o perfil de desenvolvimento” em vez de “descobrir o problema”.
          </li>
          <li>
            <strong>Diga o que a avaliação não faz.</strong> Ela não é
            tratamento e não substitui o acompanhamento da equipe.
          </li>
          <li>
            <strong>Mostre como você se adapta</strong>: sala com estímulos
            controlados, pausas, possibilidade de conhecer o espaço antes.
          </li>
          <li>
            <strong>Nada de foto de criança atendida</strong>, nem de costas,
            nem desfocada.
          </li>
        </ul>
        <p>
          Para o tom e as escolhas visuais, veja o artigo sobre{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Usar “neuropsicóloga” como título sem o registro ou a especialização.</li>
          <li>Mostrar testes, protocolos ou material de avaliação nas redes.</li>
          <li>Prometer diagnóstico, prazo fechado ou “descobrir” uma condição.</li>
          <li>Ter uma marca para as famílias e nenhuma comunicação para quem encaminha.</li>
          <li>Laudo com identidade diferente do site, ou com texto comercial dentro.</li>
          <li>Símbolos de cérebro e quebra-cabeça que não diferenciam.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da marca de neuropsicóloga</h2>
        <ul>
          <li>Recorte principal escrito em uma linha.</li>
          <li>Título conferido com o que você tem registrado, igual em todos os lugares.</li>
          <li>Nome completo ou nome social e CRP em toda peça.</li>
          <li>Seção ou material para encaminhadores.</li>
          <li>Paleta e tipografia testadas em post, site e laudo.</li>
          <li>Timbrado do laudo pronto, sem mexer na estrutura da Res. 6/2019.</li>
          <li>Site com as etapas da avaliação e da devolutiva.</li>
          <li>Nenhuma imagem de teste, criança ou atendimento.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe cria marcas para consultórios de psicologia,
          incluindo neuropsicólogas que precisam falar com famílias e com
          encaminhadores. São dois dias de imersão para definir
          posicionamento, identidade visual e tom de voz, e a marca fica no ar
          em 45 dias, com site, timbrado e materiais revisados pelo art. 20.
          Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser conversar sobre a sua marca, marque 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES23} {...ext}>
              Resolução CFP nº 23/2022 — registro de psicóloga(o) especialista
            </a>
            , arts. 3º, 4º e 13 e anexo I.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={ESPECIALISTA} {...ext}>
              Registro de Especialista
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , arts. 18 e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES06} {...ext}>
              Resolução CFP nº 6/2019 — elaboração de documentos escritos
            </a>
            .
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
            , 2ª edição, 2026, seções “Títulos e qualificações” e
            “Instrumentos e técnicas privativas”.
          </li>
        </ul>
      </section>
    </>
  )
};
