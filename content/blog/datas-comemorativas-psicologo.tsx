import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const LEI_JANEIRO = "https://www2.camara.leg.br/legin/fed/lei/2023/lei-14556-25-abril-2023-794091-publicacaooriginal-167672-pl.html";
const LEI_AUTISMO = "https://www2.camara.leg.br/legin/fed/lei/2018/lei-13652-13-abril-2018-786563-normaatualizada-pl.html";
const LEI_SETEMBRO =
  "https://www2.camara.leg.br/legin/fed/lei/2025/lei-15199-8-setembro-2025-797943-publicacaooriginal-176351-pl.html";
const CFP_DIA = "https://site.cfp.org.br/?p=47924";
const OMS_SAUDE_MENTAL = "https://www.who.int/campaigns/world-mental-health-day";
const OMS_MIDIA = "https://www.who.int/publications/i/item/9789240076846";
const CFP_SUICIDIO = "https://site.cfp.org.br/cfp-chama-atencao-para-a-importancia-da-psicologia-na-prevencao-ao-suicidio/";
const CVV = "https://cvv.org.br/";

export const post: Post = {
  slug: "datas-comemorativas-psicologo",
  title: "Datas comemorativas para psicólogo: calendário de Janeiro Branco, Abril Azul, Setembro Amarelo e mais, sem sensacionalismo",
  description:
    "Datas comemorativas para psicólogo: calendário com a lei de cada data, ideias de post e o que o art. 20 veta no Janeiro Branco, Abril Azul e Setembro Amarelo.",
  keyword: "datas comemorativas para psicólogo",
  tags: ["presenca-digital", "divulgacao-etica", "neurodivergencia"],
  publishedAt: "2026-11-20",
  summary:
    "As datas comemorativas para psicólogo que têm base oficial no Brasil incluem o Janeiro Branco (Lei 14.556/2023), o Dia Nacional de Conscientização sobre o Autismo em 2 de abril e o Dia Nacional do Orgulho Autista em 18 de junho (Lei 13.652/2018, alterada em 2026), o Dia da Psicóloga e do Psicólogo em 27 de agosto, o Setembro Amarelo com os dias 10 e 17 de setembro (Lei 15.199/2025) e o Dia Mundial da Saúde Mental em 10 de outubro. Elas rendem conteúdo útil quando o post informa e orienta. O art. 20 do Código de Ética veta usar a data para sensacionalismo, promessa de resultado ou preço como chamariz, e o Setembro Amarelo pede cuidados próprios ao falar de suicídio.",
  faq: [
    {
      q: "Quais datas comemorativas o psicólogo pode usar nas redes?",
      a: "Qualquer data que tenha relação com o seu trabalho e permita um conteúdo informativo. Com base oficial no Brasil estão o Janeiro Branco (Lei 14.556/2023), o 2 de abril e o 18 de junho ligados ao autismo (Lei 13.652/2018, com redação de 2026), o Dia da Psicóloga e do Psicólogo em 27 de agosto, o Setembro Amarelo (Lei 15.199/2025) e o Dia Mundial da Saúde Mental, 10 de outubro, da OMS."
    },
    {
      q: "Quando é o Dia do Psicólogo?",
      a: "Em 27 de agosto. O CFP explica que a data lembra a regulamentação da profissão no Brasil pela Lei nº 4.119, de 27 de agosto de 1962."
    },
    {
      q: "Como falar de Setembro Amarelo nas redes sem sensacionalismo?",
      a: "Foque em informação, sinais de alerta descritos de forma geral e caminhos de ajuda, como o CVV (188). Evite detalhar métodos, contar casos, usar imagens chocantes ou prometer que a terapia evita o suicídio. A OMS mantém um material com recomendações para quem comunica publicamente sobre suicídio, e o art. 20, h, do Código de Ética veda a divulgação sensacionalista."
    },
    {
      q: "Psicólogo pode fazer promoção em data comemorativa?",
      a: "Não. O art. 20, d, do Código de Ética diz que a psicóloga não utilizará o preço do serviço como forma de propaganda. Desconto de Janeiro Branco, sessão gratuita no Dia do Psicólogo ou pacote de Setembro Amarelo usam a data e o preço como chamariz."
    },
    {
      q: "O Abril Azul é uma data oficial?",
      a: "A data oficial é o Dia Nacional de Conscientização sobre o Autismo, em 2 de abril, instituído pela Lei nº 13.652/2018. “Abril Azul” é o nome que a campanha do mês ganhou a partir dessa data. Desde 2026, a mesma lei também institui o Dia Nacional do Orgulho Autista, em 18 de junho."
    }
  ],
  cover: {
    src: "/blog/datas-comemorativas-psicologo/datas-comemorativas-psicologo-calendario-de-mesa.jpg",
    alt: "Calendário de mesa, bloco de notas, caneta e uma suculenta sobre uma mesa clara, vista de cima",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Todo começo de mês aparece a mesma dúvida: “o que eu posto agora?”. Os
        calendários de marketing listam dezenas de datas, a maioria sem
        relação com o seu consultório, e as datas que importam, como o
        Setembro Amarelo, chegam carregadas de cuidados que quase ninguém
        explica.
      </p>
      <p>
        A resposta curta: poucas datas bastam, desde que tenham relação com o
        seu trabalho e base confiável. As principais para psicólogas no Brasil
        são o Janeiro Branco, o 2 de abril e o 18 de junho, ligados ao autismo,
        o Dia da Psicóloga e do Psicólogo em 27 de agosto, o Setembro Amarelo e
        o Dia Mundial da Saúde Mental em 10 de outubro. Cada uma rende conteúdo
        útil quando o post informa e orienta, e vira problema quando usa a data
        para assustar, prometer resultado ou vender com desconto. Abaixo está o
        calendário com a fonte de cada data, ideias de post e o que evitar em
        cada uma.
      </p>

      <section>
        <h2>O que dizem as normas sobre conteúdo em datas comemorativas</h2>
        <p>
          Datas comemorativas não têm regra própria no{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          . Valem as regras da divulgação em geral, que pesam mais quando o tema
          é sensível.
        </p>
        <ul>
          <li>
            <strong>Art. 19:</strong> ao participar de atividade em veículos de
            comunicação, a psicóloga zela para que as informações disseminem o
            conhecimento sobre a profissão, sua base científica e seu papel
            social. Um post de Setembro Amarelo é exatamente isso.
          </li>
          <li>
            <strong>Art. 20:</strong> nome completo e CRP em toda divulgação
            (a), preço fora da propaganda (d), nenhuma previsão taxativa de
            resultados (e) e nenhuma divulgação sensacionalista (h).
          </li>
          <li>
            <strong>Art. 2º, i:</strong> veda induzir qualquer pessoa a
            recorrer aos seus serviços.
          </li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade profissional do CRP-MG (2026)
          </a>{" "}
          define como sensacionalista a comunicação “realizada de maneira
          exagerada, que superdimensiona um fato, sem rigor técnico, visando
          manipular sensações/emoções do público e induzir demandas”, e pede
          que o uso dos meios de comunicação priorize o viés informativo e
          educativo. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>
          , sobre redes sociais, lembra a perenidade do que se publica: o post
          de uma campanha continua no perfil depois que o mês acaba.
        </p>
      </section>

      <section>
        <h2>O calendário: datas com base oficial</h2>
        <p>
          Este é o calendário enxuto, só com datas que têm lei, conselho ou
          organismo internacional por trás. Confira a fonte de cada uma antes de
          postar: datas mudam, e algumas foram criadas ou alteradas
          recentemente.
        </p>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="Calendário de datas comemorativas para psicólogo com a fonte de cada data"
            tabIndex={0}
          >
            <caption>Datas comemorativas para psicólogo e suas fontes</caption>
            <thead>
              <tr>
                <th scope="col">Quando</th>
                <th scope="col">Data</th>
                <th scope="col">Fonte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Janeiro</td>
                <td>Janeiro Branco, campanha de promoção da saúde mental</td>
                <td>Lei nº 14.556/2023</td>
              </tr>
              <tr>
                <td>2 de abril</td>
                <td>Dia Nacional de Conscientização sobre o Autismo</td>
                <td>Lei nº 13.652/2018</td>
              </tr>
              <tr>
                <td>18 de junho</td>
                <td>Dia Nacional do Orgulho Autista</td>
                <td>Lei nº 13.652/2018, com redação da Lei nº 15.365/2026</td>
              </tr>
              <tr>
                <td>27 de agosto</td>
                <td>Dia da Psicóloga e do Psicólogo</td>
                <td>CFP; Lei nº 4.119/1962</td>
              </tr>
              <tr>
                <td>Setembro</td>
                <td>Setembro Amarelo; 10/9, prevenção do suicídio; 17/9, prevenção da automutilação</td>
                <td>Lei nº 15.199/2025</td>
              </tr>
              <tr>
                <td>10 de outubro</td>
                <td>Dia Mundial da Saúde Mental</td>
                <td>Organização Mundial da Saúde</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Erro comum:</strong> copiar o calendário de uma agência sem
          conferir. Muitas listas trazem datas sem origem clara ou com o
          significado trocado. Se você não acha a fonte, a data não entra.
        </p>
      </section>

      <section>
        <h2>Janeiro Branco: saúde mental sem promessa de ano novo</h2>
        <p>
          A{" "}
          <a href={LEI_JANEIRO} {...ext}>
            Lei nº 14.556/2023
          </a>{" "}
          instituiu a campanha Janeiro Branco, “dedicada à promoção da saúde
          mental”, com campanhas nacionais em janeiro sobre hábitos e ambientes
          saudáveis e prevenção, com enfoque especial na prevenção da
          dependência química e do suicídio.
        </p>
        <h3>Ideias de post</h3>
        <ul>
          <li>Como funciona o primeiro encontro com uma psicóloga.</li>
          <li>Diferença entre psicóloga, psiquiatra e outros profissionais.</li>
          <li>Onde buscar atendimento pela rede pública e por serviços-escola.</li>
          <li>Como escolher uma psicóloga: CRP, abordagem, público atendido.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de legenda:</em> “Janeiro Branco é a campanha
          nacional de promoção da saúde mental. Se você está pensando em
          começar terapia, aqui vão três perguntas para fazer no primeiro
          contato com qualquer psicóloga.”
        </p>
        <p>
          <strong>Erro comum:</strong> “ano novo, mente nova: comece a terapia e
          transforme sua vida em 2027”. A frase faz previsão de resultado, o que
          o art. 20, e, veda, e empurra a pessoa a decidir pela data, não pela
          necessidade.
        </p>
      </section>

      <section>
        <h2>2 de abril e 18 de junho: autismo com a voz das pessoas autistas</h2>
        <p>
          A{" "}
          <a href={LEI_AUTISMO} {...ext}>
            Lei nº 13.652/2018
          </a>
          , na redação dada pela Lei nº 15.365/2026, institui o Dia Nacional de
          Conscientização sobre o Autismo, em 2 de abril, e o Dia Nacional do
          Orgulho Autista, em 18 de junho. O mês de abril ganhou o apelido de
          Abril Azul por causa da primeira data.
        </p>
        <h3>Ideias de post</h3>
        <ul>
          <li>Direitos das pessoas autistas, com link para a lei e serviços oficiais.</li>
          <li>Como a escola pode receber uma criança autista, em linhas gerais.</li>
          <li>Indicações de livros, perfis e textos escritos por pessoas autistas.</li>
          <li>O que muda quando a família recebe um diagnóstico, sem dramatizar.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de legenda:</em> “Hoje, 2 de abril, é o Dia
          Nacional de Conscientização sobre o Autismo. Em vez de falar sobre
          pessoas autistas, separei três autores autistas que explicam o
          autismo com as próprias palavras.”
        </p>
        <p>
          <strong>Erro comum:</strong> post que trata o autismo como tragédia ou
          como algo a ser “superado”, ou que usa símbolos questionados por parte
          da comunidade autista. O guia de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo
          </Link>{" "}
          explica a discussão sobre o quebra-cabeça, e o de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          ajuda a escolher as palavras.
        </p>
      </section>

      <section>
        <h2>27 de agosto: o Dia da Psicóloga e do Psicólogo</h2>
        <p>
          O{" "}
          <a href={CFP_DIA} {...ext}>
            CFP
          </a>{" "}
          lembra que, em 27 de agosto, o Brasil celebra o Dia da Psicóloga e do
          Psicólogo, data da regulamentação da profissão pela Lei nº
          4.119/1962. É a data para falar da profissão como um todo.
        </p>
        <h3>Ideias de post</h3>
        <ul>
          <li>O que é o CRP e como conferir o registro de uma psicóloga.</li>
          <li>O que a psicologia faz além da clínica: escolas, saúde pública, assistência social.</li>
          <li>Como é a sua rotina de estudo, supervisão e cuidado com o sigilo.</li>
          <li>Mitos sobre terapia, respondidos com base na profissão.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de legenda:</em> “Hoje é o Dia da Psicóloga e
          do Psicólogo. Antes de marcar com qualquer profissional, você pode
          conferir se o registro dela está ativo. Mostro como no carrossel.”
        </p>
        <p>
          <strong>Erro comum:</strong> “no meu dia, sessão com 50% de
          desconto”. O art. 20, d, veda o preço como propaganda, e a data da
          profissão vira a data de uma promoção.
        </p>
      </section>

      <section>
        <h2>Setembro Amarelo: a data que mais exige cuidado</h2>
        <p>
          A{" "}
          <a href={LEI_SETEMBRO} {...ext}>
            Lei nº 15.199/2025
          </a>{" "}
          instituiu a campanha Setembro Amarelo, com ações de prevenção da
          automutilação e do suicídio em todo setembro, o dia 10 de setembro
          como Dia Nacional de Prevenção do Suicídio e o dia 17 como Dia
          Nacional de Prevenção da Automutilação. A lei diz que os dias têm por
          objetivo conscientizar a sociedade e combater o estigma associado a
          questões de saúde mental.
        </p>
        <h3>O que a OMS orienta a quem comunica</h3>
        <p>
          A{" "}
          <a href={OMS_MIDIA} {...ext}>
            Organização Mundial da Saúde mantém um material para quem fala
            publicamente sobre suicídio
          </a>{" "}
          (atualizado em 2023). Ele registra que histórias amplamente
          divulgadas de morte por suicídio costumam ser seguidas de mais
          suicídios, enquanto histórias de pessoas que superaram uma crise podem
          estar associadas a menos casos, e traz recomendações específicas para
          meios digitais e redes sociais.
        </p>
        <h3>Na prática, no seu post</h3>
        <ul>
          <li>Fale de sinais de alerta de forma geral e de como oferecer ajuda.</li>
          <li>Sempre inclua caminhos: o <a href={CVV} {...ext}>CVV</a> (188, 24 horas) e os serviços de urgência.</li>
          <li>Nunca descreva métodos nem conte casos, nem “anonimizados”.</li>
          <li>Evite imagens chocantes, cordas, pontes, números de mortes em destaque.</li>
          <li>Não prometa que a terapia evita o suicídio.</li>
        </ul>
        <p>
          O{" "}
          <a href={CFP_SUICIDIO} {...ext}>
            CFP defende
          </a>{" "}
          que a atuação da psicologia na prevenção vá além de intervenções
          individuais e considere as condições de vida que geram sofrimento.
          Um post que lembra a rede de apoio e os serviços públicos conversa com
          essa posição.
        </p>
        <p>
          <strong>Erro comum:</strong> usar o mês para captar pacientes com
          medo, como “não espere ser tarde demais, agende agora”. É o tipo de
          apelo emocional que a cartilha do CRP-MG chama de sensacionalista.
        </p>
      </section>

      <section>
        <h2>10 de outubro: Dia Mundial da Saúde Mental</h2>
        <p>
          A{" "}
          <a href={OMS_SAUDE_MENTAL} {...ext}>
            OMS
          </a>{" "}
          marca 10 de outubro como o Dia Mundial da Saúde Mental, com um tema
          diferente a cada ano. Usar o tema do ano dá ao seu post um gancho que
          não depende de você inventar nada.
        </p>
        <h3>Ideias de post</h3>
        <ul>
          <li>O tema do ano da OMS, explicado para o seu público.</li>
          <li>Saúde mental no trabalho, na escola ou na família, conforme quem você atende.</li>
          <li>Serviços públicos de saúde mental na sua cidade, com links oficiais.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de legenda:</em> “Hoje é o Dia Mundial da
          Saúde Mental. O tema da OMS este ano fala de experiências vividas.
          Para famílias, isso pode começar com uma pergunta simples em casa.”
        </p>
        <p>
          <strong>Erro comum:</strong> post genérico de “cuide da sua mente”,
          igual ao de qualquer marca. Ele não ensina nada e não diz nada sobre o
          seu trabalho. O guia de{" "}
          <Link href="/blog/carrossel-instagram-psicologo" className="inst-link">
            carrossel no Instagram para psicólogo
          </Link>{" "}
          mostra como transformar um tema em sete lâminas úteis.
        </p>
      </section>

      <section>
        <h2>Pode e evitar nas datas comemorativas</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar em posts de datas comemorativas para psicólogo"
            tabIndex={0}
          >
            <caption>Posts de datas comemorativas: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Escolha da data</td>
                <td>Datas com fonte e relação com o seu trabalho</td>
                <td>Datas sem origem, só para ter o que postar</td>
              </tr>
              <tr>
                <td>Janeiro Branco</td>
                <td>Como começar terapia e onde buscar atendimento</td>
                <td>“Ano novo, vida nova com terapia”</td>
              </tr>
              <tr>
                <td>Autismo</td>
                <td>Direitos, escola, vozes de pessoas autistas</td>
                <td>Tragédia, cura, símbolos contestados</td>
              </tr>
              <tr>
                <td>Setembro Amarelo</td>
                <td>Sinais gerais, como ajudar, CVV 188</td>
                <td>Métodos, casos, imagens chocantes, medo</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>Nenhuma menção ao preço no post da data</td>
                <td>Desconto, sessão grátis, pacote da campanha</td>
              </tr>
              <tr>
                <td>Identificação</td>
                <td>Nome completo e CRP</td>
                <td>Post sem quem assina</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já posta: um calendário editorial de verdade</h2>
        <p>
          As datas comemorativas funcionam melhor como ganchos dentro de um
          plano editorial. Seis datas por ano organizam os meses em que caem,
          e o resto do calendário vem dos temas do seu trabalho.
        </p>
        <ol>
          <li>
            <strong>Escolha três ou quatro datas</strong> que conversam com o
            seu público. Quem atende famílias de crianças autistas tem abril e
            junho; quem atende adultos talvez prefira janeiro e outubro.
          </li>
          <li>
            <strong>Prepare com antecedência</strong>, com um mês de folga, para
            conferir fontes e revisar o texto com calma.
          </li>
          <li>
            <strong>Ligue ao seu site:</strong> cada post pode levar a um artigo
            do seu blog sobre o tema. O guia de{" "}
            <Link href="/blog/blog-para-psicologo" className="inst-link">
              blog para psicólogo
            </Link>{" "}
            explica como.
          </li>
          <li>
            <strong>Reaproveite:</strong> o conteúdo do ano anterior pode voltar
            revisado, com fontes atualizadas.
          </li>
        </ol>
        <p>
          O guia de{" "}
          <Link href="/blog/instagram-para-psicologos" className="inst-link">
            Instagram para psicólogos
          </Link>{" "}
          cobre o resto do perfil: bio, destaques e identidade visual no feed.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Abril e junho concentram a atenção das famílias e das escolas, e
          também a maior quantidade de posts repetidos. É uma chance de mostrar
          um trabalho cuidadoso, com poucos posts bem feitos.
        </p>
        <ul>
          <li>
            <strong>Para os pais:</strong> conteúdo prático sobre escola,
            rotina, direitos e onde buscar informação oficial.
          </li>
          <li>
            <strong>Para as escolas:</strong> abril costuma trazer convites para
            palestras. O guia de{" "}
            <Link href="/blog/psicologo-palestra-para-pais" className="inst-link">
              palestra para pais
            </Link>{" "}
            ajuda a preparar uma fala sem expor casos.
          </li>
          <li>
            <strong>Para a própria criança:</strong> nunca use foto, desenho ou
            fala de criança atendida, nem com autorização. A cartilha do CRP-MG
            veda expor material decorrente de serviços psicológicos que possa
            identificar a pessoa atendida.
          </li>
          <li>
            <strong>Neurodivergência além do autismo:</strong> TDAH, dislexia e
            outras condições também cabem nas datas de saúde mental, com o mesmo
            cuidado de linguagem.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          traz mais temas para o resto do ano.
        </p>
      </section>

      <section>
        <h2>Erros comuns em datas comemorativas</h2>
        <ul>
          <li>Postar todas as datas do calendário de marketing.</li>
          <li>Não conferir a fonte e errar a data ou o nome da campanha.</li>
          <li>Desconto, sessão grátis ou pacote ligado à data.</li>
          <li>Promessa de resultado (“comece o ano curado”).</li>
          <li>Setembro Amarelo com métodos, casos ou imagens chocantes.</li>
          <li>Autismo tratado como tragédia ou com símbolos contestados.</li>
          <li>Post sem nome completo e CRP.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do post de data comemorativa</h2>
        <ul>
          <li>A data tem fonte oficial e relação com o seu trabalho?</li>
          <li>O post informa ou orienta, em vez de só lembrar a data?</li>
          <li>Nenhuma menção a preço, desconto ou gratuidade.</li>
          <li>Nenhuma promessa de resultado nem apelo ao medo.</li>
          <li>Temas sensíveis com caminhos de ajuda (CVV 188, rede de saúde).</li>
          <li>Nenhuma imagem de criança, sessão ou material de atendimento.</li>
          <li>Nome completo e CRP no post ou na legenda.</li>
          <li>Link para um conteúdo do seu site que aprofunda o tema.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com um
          jeito próprio de falar nas datas que importam para o seu público, e
          cada texto revisado pelo art. 20. Tudo é apresentado em até 30 dias,
          com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu perfil ainda depende do calendário dos outros, marque uma
          conversa de 15 minutos.
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
            , arts. 2º (i), 19 e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional (abril de 2026)
            </a>
            , seções “Divulgação sensacionalista” e “Sigilo”.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — publicidade profissional nas redes
              sociais
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_JANEIRO} {...ext}>
              Lei nº 14.556/2023 — institui a campanha Janeiro Branco
            </a>{" "}
            (Câmara dos Deputados, publicação original).
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_AUTISMO} {...ext}>
              Lei nº 13.652/2018 — Dia Nacional de Conscientização sobre o
              Autismo e Dia Nacional do Orgulho Autista
            </a>{" "}
            (Câmara dos Deputados, norma atualizada pela Lei nº 15.365/2026).
          </li>
          <li>
            Brasil.{" "}
            <a href={LEI_SETEMBRO} {...ext}>
              Lei nº 15.199/2025 — institui a campanha Setembro Amarelo
            </a>{" "}
            (Câmara dos Deputados, publicação original).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={CFP_DIA} {...ext}>
              Dia da Psicóloga e do Psicólogo
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={CFP_SUICIDIO} {...ext}>
              CFP chama atenção para a importância da psicologia na prevenção ao
              suicídio
            </a>
            .
          </li>
          <li>
            Organização Mundial da Saúde.{" "}
            <a href={OMS_MIDIA} {...ext}>
              Preventing suicide: a resource for media professionals, update
              2023
            </a>
            .
          </li>
          <li>
            Organização Mundial da Saúde.{" "}
            <a href={OMS_SAUDE_MENTAL} {...ext}>
              World Mental Health Day
            </a>
            .
          </li>
          <li>
            <a href={CVV} {...ext}>
              CVV — Centro de Valorização da Vida
            </a>{" "}
            (188, 24 horas, sem custo de ligação).
          </li>
        </ul>
      </section>
    </>
  )
};
