import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const INPI = "https://www.gov.br/inpi/pt-br/servicos/marcas";

export const post: Post = {
  slug: "slogan-para-psicologo",
  title: "Slogan para psicólogo: como escrever uma frase de marca sem prometer resultado",
  description:
    "Como criar um slogan para psicólogo: 6 passos, exemplos ilustrativos, o que o art. 20 veta (promessa, superlativo, sensacionalismo) e onde usar a frase.",
  keyword: "slogan para psicólogo",
  tags: ["posicionamento", "divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "Um bom slogan para psicólogo diz para quem você trabalha e como, em poucas palavras, sem prometer resultado. O art. 20 do Código de Ética veta previsão taxativa de resultados, autopromoção em detrimento de colegas e divulgação sensacionalista, então frases como “o fim da sua ansiedade” ou “a melhor terapia da cidade” ficam de fora. Parta do posicionamento, escreva várias versões, teste em voz alta e use a frase sempre junto do nome completo e do CRP.",
  faq: [
    {
      q: "Psicólogo pode ter slogan?",
      a: "Pode. Nenhuma norma do CFP proíbe frase de marca. O slogan faz parte da publicidade profissional, então segue o art. 20 do Código de Ética e os arts. 53 a 58 da Resolução CFP nº 3/2007: sem previsão taxativa de resultado, sem autopromoção em detrimento de colegas, sem sensacionalismo e sempre acompanhado do nome completo (ou nome social), da palavra psicóloga e do CRP com número."
    },
    {
      q: "Quais palavras evitar no slogan de psicólogo?",
      a: "Evite verbos de resultado garantido (cura, resolve, elimina, acaba com), superlativos sem prova (o melhor, a maior, referência, número 1), prazos (em 10 sessões) e termos sensacionalistas que exploram medo ou sofrimento. Também evite citar preço, gratuidade ou desconto, porque o art. 20 veda o preço como forma de propaganda."
    },
    {
      q: "Qual o tamanho ideal de um slogan?",
      a: "Não há regra fixa. Na prática, frases de três a oito palavras cabem bem embaixo do logo, na bio do Instagram e no cabeçalho do site. Se precisar de mais de uma linha para explicar o serviço, isso é uma frase de apresentação, não um slogan, e as duas podem conviver."
    },
    {
      q: "Preciso registrar o slogan no INPI?",
      a: "Não é obrigatório para usar. No Brasil, o INPI registra marcas (nome e logo); slogan isolado, em regra, não tem registro próprio como marca. O que vale a pena é pesquisar no buscador do INPI e no Google se o nome do consultório já é usado por outra pessoa da área antes de investir na marca."
    },
    {
      q: "Slogan e frase de efeito do Instagram são a mesma coisa?",
      a: "Não precisam ser. O slogan é fixo e acompanha a marca em todo lugar: placa, site, cartão. Frases de efeito de posts mudam toda semana. Manter o slogan estável ajuda as pessoas a reconhecerem seu trabalho com o tempo."
    }
  ],
  cover: {
    src: "/blog/slogan-para-psicologo/slogan-para-psicologo-caderno-e-cafe.jpg",
    alt: "Caderno espiral com caneta, óculos e xícara de café sobre mesa de madeira clara, cena de escrita do slogan",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Você já tem nome, logo e um Instagram com algumas dezenas de posts, mas
        falta aquela frase curta que vai embaixo do nome e explica, de cara, o
        que o seu consultório faz. Na hora de escrever, aparecem duas
        tentações: copiar um bordão genérico (“cuidando de você”) ou escrever
        algo forte demais, que soa como promessa. A primeira deixa a marca
        igual a todas as outras. A segunda pode bater no art. 20 do Código de
        Ética.
      </p>
      <p>
        A resposta curta: um slogan para psicólogo funciona quando diz para
        quem você trabalha e como você trabalha, sem garantir resultado. Ele
        sai do posicionamento, não de um gerador de frases. Abaixo estão o que
        dizem as normas, um passo a passo em seis etapas, exemplos ilustrativos
        de frases que passam e que não passam, uma tabela de pode e evitar e
        uma parte só para quem atende famílias de crianças autistas e
        neurodivergentes.
      </p>

      <section>
        <h2>O que é um slogan e para que ele serve no consultório</h2>
        <p>
          Slogan é a frase fixa que acompanha a marca. Ele aparece embaixo do
          logo, no topo do site, na bio, na assinatura de e-mail e às vezes na
          placa da porta. O papel dele é encurtar a explicação: em poucos
          segundos, a pessoa entende se aquele trabalho é para ela.
        </p>
        <p>
          No consultório de psicologia, o slogan tem uma função a mais. Muita
          gente chega com medo, vergonha ou cansaço. Uma frase clara e sóbria
          sinaliza que ali o assunto será tratado com cuidado. Ela não substitui
          o nome nem a página de serviços, mas orienta a primeira impressão. Se
          ainda não definiu o público principal, comece pelo{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            guia de posicionamento para psicólogo
          </Link>
          : sem ele, o slogan fica vago.
        </p>
      </section>

      <section>
        <h2>O que dizem as normas sobre o slogan</h2>
        <p>
          Não existe resolução do CFP só sobre slogan. Vale a regra geral de
          publicidade. O{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>{" "}
          diz que a psicóloga, ao promover seus serviços “por quaisquer meios”,
          informa nome completo, CRP e número de registro; cita só títulos que
          possui; não usa o preço como propaganda; não faz “previsão taxativa
          de resultados”; não faz autopromoção em detrimento de outros
          profissionais; e não faz “divulgação sensacionalista”.
        </p>
        <p>
          A{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>{" "}
          repete essas regras nos arts. 53 a 58 e acrescenta, no art. 56, a
          proibição de divulgar serviços com conteúdos “falsos ou
          sensacionalistas, ou que firam os sentimentos da população,
          induzindo-lhe demandas”. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          lembra que publicidade enganosa ou abusiva também é vedada pelo
          Código de Defesa do Consumidor. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          confirma que “apelidos, artes e logomarcas” são permitidos desde que
          vinculados ao nome completo, ao CRP e ao número de inscrição. Para o
          slogan, isso quer dizer: a frase pode ser criativa, mas nunca aparece
          sozinha, sem a sua identificação profissional.
        </p>
      </section>

      <section>
        <h2>1. Parta do posicionamento, não da frase</h2>
        <p>
          O slogan resume uma decisão que já foi tomada: para quem você
          trabalha, com que tipo de demanda e de que jeito. Se essa decisão não
          existe, qualquer frase serve e nenhuma convence.
        </p>
        <ol>
          <li>
            <strong>Escreva o público em uma linha.</strong> “Mães e pais de
            crianças autistas em idade escolar” é mais útil que “famílias”.
          </li>
          <li>
            <strong>Liste o que a pessoa procura</strong> com as palavras dela:
            entender o diagnóstico, organizar a rotina, conversar com a escola.
          </li>
          <li>
            <strong>Descreva como você trabalha</strong> em termos concretos:
            atendimento online, orientação parental, abordagem, faixa etária.
          </li>
          <li>
            <strong>Marque o que você não faz.</strong> Isso evita uma frase que
            prometa mais do que o serviço entrega.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia que atende
          adolescentes com ansiedade em atendimento online chega ao núcleo
          “adolescentes, ansiedade, online, escuta sem julgamento”. Daí saem
          frases candidatas; sem esse núcleo, sairia “sua mente em equilíbrio”,
          que poderia estar em qualquer clínica.
        </p>
        <p>
          <strong>Erro comum:</strong> começar pelo slogan de um colega que você
          admira e adaptar as palavras. Além de ficar parecido, a frase dele
          resume o posicionamento dele, não o seu. Se o seu ainda está aberto, o
          texto sobre{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher um nicho na psicologia
          </Link>{" "}
          ajuda a fechar.
        </p>
      </section>

      <section>
        <h2>2. Escolha o tipo de slogan</h2>
        <p>
          Existem alguns formatos de slogan, e cada um combina com um momento
          da marca. Escolher o formato antes de escrever reduz as tentativas.
        </p>
        <ul>
          <li>
            <strong>Descritivo:</strong> diz o serviço e o público. “Psicologia
            para famílias de crianças neurodivergentes.” É o mais seguro e o
            mais útil para quem está começando ou quer aparecer em buscas.
          </li>
          <li>
            <strong>De abordagem:</strong> mostra o jeito de trabalhar.
            “Escuta sem pressa, plano com os pés no chão.” Funciona quando o
            público já está claro em outro lugar, como no nome.
          </li>
          <li>
            <strong>De convite:</strong> chama para uma ação sem pressionar.
            “Um lugar para pensar com calma.” Pede cuidado para não virar
            promessa.
          </li>
          <li>
            <strong>De valor:</strong> resume um princípio. “Cuidado com
            ciência e respeito à diferença.” Bom para clínicas com equipe.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício chamado
          “Ateliê Raiz” não diz o que faz no nome. Para ele, um slogan
          descritivo resolve mais do que um poético: “Psicologia infantil e
          orientação a pais”.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher o formato poético quando o nome
          também é poético. Nome e slogan abstratos juntos deixam a pessoa sem
          saber o que você faz. Vale ler o post sobre{" "}
          <Link href="/blog/nome-para-consultorio-de-psicologia" className="inst-link">
            nome para consultório de psicologia
          </Link>{" "}
          para combinar as duas peças.
        </p>
      </section>

      <section>
        <h2>3. Escreva muitas versões antes de escolher</h2>
        <p>
          A primeira frase raramente é a melhor. Escreva de 20 a 30 versões em
          uma sessão, sem julgar, e só depois corte. Volume aqui é método, não
          enchimento.
        </p>
        <ol>
          <li>
            Monte uma lista de palavras do seu núcleo: público, demanda, modo de
            trabalho, valores.
          </li>
          <li>
            Combine duas ou três delas por frase, alternando formatos (descritivo,
            abordagem, convite).
          </li>
          <li>
            Troque palavras abstratas por concretas. “Bem-estar” diz pouco;
            “rotina”, “escola” ou “sono” dizem mais.
          </li>
          <li>
            Corte o que sobra. Se uma palavra sai e a frase continua dizendo o
            mesmo, ela não fazia falta.
          </li>
          <li>
            Separe as cinco melhores e deixe descansar um ou dois dias.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> da lista “pais, autismo, escola, rotina,
          parceria”, saem versões como “Parceria com os pais, do diagnóstico à
          escola”, “Orientação a pais de crianças autistas” e “Rotina, escola e
          família no mesmo plano”. A terceira fala de método; a segunda, de
          público. As duas podem ser testadas.
        </p>
        <p>
          <strong>Erro comum:</strong> usar gerador de slogan por inteligência
          artificial e aceitar a primeira saída. Ferramentas ajudam a destravar,
          mas costumam devolver frases genéricas e, às vezes, promessas. Se usar,
          aplique as mesmas regras; o post sobre{" "}
          <Link href="/blog/psicologo-inteligencia-artificial-divulgacao" className="inst-link">
            inteligência artificial na divulgação do psicólogo
          </Link>{" "}
          mostra os cuidados.
        </p>
      </section>

      <section>
        <h2>4. Passe cada frase pelo filtro do art. 20</h2>
        <p>
          Antes de testar com pessoas, cada candidata passa por quatro perguntas.
          Se uma resposta for “sim”, a frase sai ou é reescrita.
        </p>
        <ol>
          <li>
            <strong>Promete resultado?</strong> Verbos como curar, resolver,
            eliminar, acabar com, transformar sua vida, ou prazos (“em poucas
            sessões”), entram em “previsão taxativa de resultados”.
          </li>
          <li>
            <strong>Compara com colegas?</strong> “A terapia que funciona”,
            “diferente de tudo que você já tentou” ou “a melhor da cidade” são
            autopromoção em detrimento de outros profissionais.
          </li>
          <li>
            <strong>Explora medo ou sofrimento?</strong> “Não deixe seu filho
            ficar para trás” cria urgência pelo medo, o que se aproxima do
            sensacionalismo e de “induzir demandas”.
          </li>
          <li>
            <strong>Cita preço, gratuidade ou vantagem?</strong> “Primeira
            sessão grátis” no slogan é o preço como propaganda.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Seu filho autista mais independente”
          parece inofensiva, mas promete um resultado que depende de muitos
          fatores. Reescrita: “Orientação a pais para a rotina e a autonomia”.
          A segunda descreve o trabalho, não garante o efeito.
        </p>
        <p>
          <strong>Erro comum:</strong> achar que só “cura” é promessa. Promessa
          também aparece em adjetivos (“definitivo”, “garantido”) e em frases
          de antes e depois. O{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            guia de marketing para psicólogos e Código de Ética
          </Link>{" "}
          tem mais exemplos de linguagem de resultado.
        </p>
      </section>

      <section>
        <h2>5. Teste em voz alta e com pessoas do público</h2>
        <p>
          Um slogan é lido em um segundo e falado em voz alta mais vezes do que
          parece: em apresentações, em vídeos, ao atender o telefone. Teste das
          duas formas.
        </p>
        <ol>
          <li>
            <strong>Leia em voz alta</strong> as cinco finalistas. Corte as que
            travam, rimam demais ou soam como propaganda de banco.
          </li>
          <li>
            <strong>Mostre a três ou quatro pessoas</strong> próximas do público
            (sem ser pacientes) e pergunte só: “o que você acha que esse
            consultório faz?”. Se a resposta errar o serviço, a frase está vaga.
          </li>
          <li>
            <strong>Coloque embaixo do logo</strong> em tamanho pequeno, como
            ficará no Instagram. Frase longa demais vira duas linhas
            ilegíveis.
          </li>
          <li>
            <strong>Pesquise no Google e no Instagram</strong> a frase entre
            aspas para ver se outra profissional já usa.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> para “Escuta que acolhe”, três pessoas
          responderam “algo de psicologia, não sei de quê”. Para “Psicologia
          para pais de crianças autistas”, todas acertaram. A segunda venceu,
          mesmo sendo menos bonita.
        </p>
        <p>
          <strong>Erro comum:</strong> testar com pacientes atuais. Pedir
          opinião sobre a marca a quem está em atendimento mistura a relação
          terapêutica com interesse comercial. Prefira colegas, amigos e
          pessoas do público que não atendem com você.
        </p>
      </section>

      <section>
        <h2>6. Use o slogan sempre com nome e CRP</h2>
        <p>
          Depois de escolhido, o slogan precisa aparecer do mesmo jeito em todos
          os pontos de contato, e sempre perto da identificação profissional.
        </p>
        <ul>
          <li>
            <strong>Site:</strong> no cabeçalho ou na primeira dobra, com nome
            completo e CRP no rodapé e na página sobre. O post sobre{" "}
            <Link href="/blog/site-para-psicologo" className="inst-link">
              site profissional para psicólogo
            </Link>{" "}
            detalha onde cada informação entra.
          </li>
          <li>
            <strong>Instagram:</strong> na bio, logo abaixo do nome, sem
            competir com o CRP por espaço.
          </li>
          <li>
            <strong>Papelaria e placa:</strong> embaixo do logo, em tamanho
            menor que o nome.
          </li>
          <li>
            <strong>Assinatura de e-mail e WhatsApp Business:</strong> uma
            linha só, igual à do site.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Ana Souza · Psicóloga · CRP 00/00000 —
          Orientação a pais de crianças autistas”. Nome, profissão, registro e
          slogan juntos, na mesma linha.
        </p>
        <p>
          <strong>Erro comum:</strong> mudar a frase a cada post ou campanha.
          O slogan ganha força com a repetição. Frases de campanha podem
          variar; o slogan fica. As regras de uso entram no{" "}
          <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
            manual de marca do consultório
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Slogan de psicólogo: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Slogan de psicólogo: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Slogan de psicólogo: o que pode e o que evitar (exemplos ilustrativos)</caption>
            <thead><tr><th scope="col">Frase</th><th scope="col">Pode?</th><th scope="col">Por quê</th></tr></thead>
            <tbody>
              <tr><td>“Psicologia para famílias de crianças neurodivergentes”</td><td>Sim</td><td>Descreve público e serviço</td></tr>
              <tr><td>“Escuta sem pressa, atendimento online”</td><td>Sim</td><td>Descreve o modo de trabalho</td></tr>
              <tr><td>“Orientação a pais para rotina e escola”</td><td>Sim</td><td>Diz o foco, sem garantir efeito</td></tr>
              <tr><td>“O fim da sua ansiedade”</td><td>Não</td><td>Previsão taxativa de resultado</td></tr>
              <tr><td>“A melhor psicóloga infantil da cidade”</td><td>Não</td><td>Superlativo e autopromoção em detrimento de colegas</td></tr>
              <tr><td>“Não deixe seu filho ficar para trás”</td><td>Evitar</td><td>Explora medo; aproxima-se do sensacionalismo</td></tr>
              <tr><td>“Primeira sessão gratuita”</td><td>Não</td><td>Preço ou gratuidade como propaganda</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem slogan: como revisar sem perder o que construiu</h2>
        <p>
          Revise o slogan quando o público mudou, quando a frase promete mais do
          que o serviço entrega ou quando ninguém entende o que você faz ao lê-la.
          Mudança de gosto, sozinha, raramente justifica.
        </p>
        <p>
          Faça a revisão em três passos. Primeiro, releia a frase atual com o
          filtro do art. 20 e corrija o que for promessa ou comparação, mesmo que
          esteja em uso há anos. Segundo, veja se ela ainda descreve o público
          principal; se você passou a atender sobretudo famílias de crianças
          neurodivergentes, por exemplo, a frase genérica perdeu função. Terceiro,
          troque em todos os lugares de uma vez: site, bio, Google, papelaria
          digital e assinatura. Duas frases convivendo confundem mais do que uma
          imperfeita.
        </p>
        <p>
          Se a mudança vier junto com nome ou identidade visual nova, trate como
          projeto maior. O post sobre{" "}
          <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
            rebranding de consultório de psicologia
          </Link>{" "}
          mostra quando vale mudar tudo e como avisar quem já conhece seu
          trabalho.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Pais que procuram ajuda para um filho autista ou com TDAH muitas vezes
          chegam depois de anos de espera, laudos e opiniões contraditórias. Um
          slogan que promete “desenvolvimento”, “independência” ou “recuperar o
          tempo perdido” toca exatamente nesse cansaço, e é por isso que ele
          precisa de mais cuidado, não menos.
        </p>
        <ul>
          <li>
            <strong>Fale com os pais, não sobre a criança.</strong> “Orientação
            a pais” ou “apoio à família” descreve o que você faz com quem está
            lendo.
          </li>
          <li>
            <strong>Use linguagem neuroafirmativa.</strong> Evite “tratar o
            autismo”, “superar o TDAH” ou “criança especial”. O post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            traz alternativas.
          </li>
          <li>
            <strong>Prefira o concreto ao emocional.</strong> “Rotina, escola e
            comunicação” informa; “um futuro brilhante para seu filho” promete.
          </li>
          <li>
            <strong>Não use imagem de criança</strong> junto do slogan. A regra
            do art. 20 e do sigilo vale para foto também.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Psicologia para famílias neurodivergentes:
          rotina, escola e convivência” é longa, mas cabe no site e diz tudo que o
          pai precisa saber para decidir se continua lendo. Para a bio, a versão
          curta “Apoio a famílias neurodivergentes” funciona. A{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          aprofunda o resto da comunicação.
        </p>
      </section>

      <section>
        <h2>Erros comuns ao criar o slogan</h2>
        <ul>
          <li>Começar pela frase antes de definir público e serviço.</li>
          <li>Prometer resultado com verbo ou adjetivo (“cura”, “definitivo”).</li>
          <li>Usar superlativo ou se dizer referência sem prova.</li>
          <li>Copiar a estrutura do slogan de outra profissional.</li>
          <li>Colocar o slogan sem nome completo e CRP por perto.</li>
          <li>Testar a frase com pacientes em atendimento.</li>
          <li>Trocar de slogan a cada campanha.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do slogan</h2>
        <ul>
          <li>Diz para quem você trabalha ou como você trabalha.</li>
          <li>Não promete resultado, prazo nem transformação.</li>
          <li>Não compara com colegas nem usa superlativo.</li>
          <li>Não cita preço, gratuidade ou desconto.</li>
          <li>Pessoas do público entendem o serviço ao ler.</li>
          <li>Cabe embaixo do logo em tamanho de Instagram.</li>
          <li>Aparece sempre junto do nome completo e do CRP.</li>
          <li>Está igual no site, na bio, no Google e na papelaria.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, o slogan sai da mesma imersão de dois encontros que
          define o posicionamento, o nome e a identidade visual do consultório.
          Escrevemos as versões juntos, passamos cada uma pelo art. 20 e
          aplicamos a frase escolhida no site e nas peças, com a marca entregue em até
          30 dias. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser pensar a frase da sua marca, marque uma conversa de 15
          minutos.
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
            Conselho Federal de Psicologia.{" "}
            <a href={RES3} {...ext}>
              Resolução CFP nº 3/2007
            </a>
            , arts. 53 a 58 (publicidade profissional).
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
          <li>
            Instituto Nacional da Propriedade Industrial.{" "}
            <a href={INPI} {...ext}>
              Marcas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
