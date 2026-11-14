import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ECA = "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "marca-psicologo-adolescentes",
  title: "Marca para psicólogo que atende adolescentes: como falar com os pais e com o jovem ao mesmo tempo",
  description:
    "Como construir a marca da psicóloga que atende adolescentes: dois públicos, sigilo, identidade visual, tom de voz, site e redes dentro do art. 20.",
  keyword: "marca para psicólogo de adolescentes",
  tags: ["posicionamento", "identidade-visual"],
  publishedAt: "2026-11-14",
  summary:
    "A marca da psicóloga que atende adolescentes fala com dois públicos: os responsáveis, que autorizam e pagam, e o jovem, que precisa querer estar ali. O caminho é uma marca com base sóbria para os pais e uma camada de linguagem mais direta para o adolescente, sempre deixando claro como funciona o sigilo. O art. 20 do Código de Ética, o ECA e a Nota Técnica CFP 1/2022 vedam promessa de resultado e exposição de imagem ou depoimento de adolescentes.",
  faq: [
    {
      q: "Como divulgar o trabalho de psicóloga de adolescentes?",
      a: "Com uma marca que deixe claro para quem é o atendimento, como ele funciona e como fica o sigilo. Site, perfil no Google e uma rede social com conteúdo educativo para os pais costumam ser a base, porque são os responsáveis que procuram e autorizam. Conteúdo para o próprio adolescente entra como complemento, sempre dentro do art. 20 do Código de Ética."
    },
    {
      q: "O conteúdo da psicóloga de adolescentes deve falar com os pais ou com o jovem?",
      a: "Com os dois, em peças diferentes. Os pais procuram informação sobre comportamento, escola e quando buscar ajuda. O adolescente quer saber se vai ser ouvido sem julgamento e o que fica entre ele e a psicóloga. Misturar os dois tons na mesma peça costuma não servir a nenhum."
    },
    {
      q: "Posso usar foto de adolescente no meu Instagram ou site?",
      a: "Evite. A Nota Técnica CFP 1/2022 diz que fotos e depoimentos de pessoas atendidas não são recomendados, em especial de crianças e adolescentes, e cita o art. 17 do ECA, que protege a imagem e a identidade. Para fotos de banco, prefira ambientes, objetos e a própria psicóloga."
    },
    {
      q: "Como explicar o sigilo para os pais no site?",
      a: "Diga com clareza que o que o adolescente fala nas sessões é sigiloso e que, como prevê o art. 13 do Código de Ética, os responsáveis recebem o que for estritamente essencial para promover medidas em benefício do jovem. Explicar isso antes do primeiro contato evita conflito depois."
    },
    {
      q: "Que cores e estilo usar na marca de psicóloga que atende adolescentes?",
      a: "Não existe paleta certa por idade. Evite o visual infantil, que afasta o adolescente, e o excesso de tendência, que envelhece rápido. Uma base neutra e madura, com uma cor de destaque e tipografia legível, conversa com os pais e não constrange o jovem."
    }
  ],
  cover: {
    src: "/blog/marca-psicologo-adolescentes/marca-psicologo-adolescentes-poltrona-sala-acolhedora.jpg",
    alt: "Poltrona branca de tecido macio ao lado de uma planta em vaso, em sala clara com piso de madeira",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Quem atende adolescentes tem um problema de comunicação que quase
        nenhuma outra área tem. Quem procura, pesquisa e paga são os pais. Quem
        precisa querer voltar na semana seguinte é o jovem. Uma marca feita só
        para os pais parece sala de diretoria para um menino de 15 anos. Uma
        marca feita só para o adolescente, cheia de gíria e de meme, parece
        pouco séria para a mãe que está preocupada.
      </p>
      <p>
        A resposta curta: a marca precisa de uma base sóbria, que dá confiança
        aos responsáveis, e de uma camada de linguagem que fala com o
        adolescente sem imitar o jeito dele. No centro das duas está o sigilo,
        explicado com clareza para os dois públicos. Abaixo estão as normas, sete
        decisões de marca, um exemplo fictício, a tabela do que pode e do que
        evitar e uma parte para quem atende adolescentes autistas e
        neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          tem dois artigos que mexem diretamente com a marca de quem atende
          adolescentes. O art. 8º pede autorização de ao menos um responsável
          para o atendimento não eventual de criança ou adolescente. O art. 13
          diz que, nesse atendimento, os responsáveis recebem “o estritamente
          essencial para se promoverem medidas em seu benefício”. Os dois definem
          o que a sua comunicação promete aos pais e ao jovem.
        </p>
        <p>
          A divulgação segue o art. 20: nome completo, CRP, só títulos que você
          possui, nada de preço como propaganda, nada de previsão de resultado e
          nada de sensacionalismo. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          acrescenta que fotos e depoimentos de pessoas atendidas não são
          recomendados, “em especial crianças e adolescentes”, e cita o art. 17
          do{" "}
          <a href={ECA} {...ext}>
            Estatuto da Criança e do Adolescente
          </a>
          , que protege a imagem, a identidade e a autonomia. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG
          </a>{" "}
          completa com cuidados para interações nas redes, como comentários e
          caixas de perguntas.
        </p>
      </section>

      <section>
        <h2>1. Defina os dois públicos antes de qualquer peça</h2>
        <p>
          A marca começa por escrever, em poucas linhas, quem são os
          responsáveis que procuram você e quem são os adolescentes que você
          atende. Sem isso, cada post vai falar com alguém diferente.
        </p>
        <ul>
          <li><strong>Responsáveis:</strong> o que os preocupa (escola, isolamento, uso de telas, conflitos em casa), onde buscam informação, que dúvidas trazem no primeiro contato.</li>
          <li><strong>Adolescentes:</strong> faixa de idade, como costumam chegar (trazidos, encaminhados pela escola, por pedido próprio), o que temem na terapia.</li>
          <li><strong>Escola e outros profissionais:</strong> muitas vezes são eles que indicam, e também leem o seu site.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma psicóloga fictícia notou que a
          maior parte dos contatos vinha de mães de jovens de 12 a 15 anos, por
          indicação da escola. Ela decidiu que o site falaria primeiro com as
          mães e que o Instagram teria uma série mensal escrita para os
          adolescentes.
        </p>
        <p>
          <strong>Erro comum:</strong> tentar falar com “todo mundo de 10 a 25
          anos”. A fase muda muito nesse intervalo. O post sobre{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher um nicho na psicologia
          </Link>{" "}
          ajuda a fazer esse recorte.
        </p>
      </section>

      <section>
        <h2>2. Escreva um posicionamento que caiba nos dois públicos</h2>
        <p>
          O posicionamento é uma frase que diz para quem você trabalha e como,
          e precisa soar verdadeira para a mãe e para o jovem. A Nota Técnica CFP
          1/2022 permite destacar o público atendido, a abordagem e a
          metodologia, e é com esses elementos que a frase se constrói.
        </p>
        <ol>
          <li>Comece pelo público: “adolescentes de 12 a 17 anos e suas famílias”.</li>
          <li>Diga como trabalha: a abordagem em linguagem simples.</li>
          <li>Diga o que diferencia o seu jeito: por exemplo, encontros periódicos com a família ou atendimento online para quem estuda fora.</li>
          <li>Tire qualquer promessa: “para seu filho voltar a ser feliz” não entra.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> “Psicoterapia para adolescentes de
          12 a 17 anos, com um espaço só deles e encontros combinados com a
          família.”
        </p>
        <p>
          <strong>Erro comum:</strong> um posicionamento que só fala de
          problemas (“ansiedade, depressão, automutilação”). Ele assusta o jovem
          e pode soar sensacionalista. O post sobre{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          mostra o processo completo.
        </p>
      </section>

      <section>
        <h2>3. Faça do sigilo uma parte visível da marca</h2>
        <p>
          Para o adolescente, a pergunta principal é “o que eu falar vai chegar
          aos meus pais?”. Para os pais, é “vou saber o que está acontecendo?”. A
          marca que responde às duas ganha confiança antes do primeiro contato.
        </p>
        <ul>
          <li>No site, uma seção curta: “Como funciona o sigilo”, com base no art. 13 do Código de Ética.</li>
          <li>Para os pais: o que eles recebem, quando e de que forma (encontros de retorno, por exemplo).</li>
          <li>Para o jovem: em linguagem direta, o que fica entre vocês e em que situações o sigilo pode ser quebrado para protegê-lo.</li>
          <li>Repita a mesma explicação no primeiro contato e no contrato.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> “O que você conta aqui fica aqui.
          Seus responsáveis sabem como o processo está indo, mas não o que você
          disse. Se houver risco para você, a gente conversa antes sobre o que
          precisa ser compartilhado.”
        </p>
        <p>
          <strong>Erro comum:</strong> prometer sigilo absoluto. O Código prevê
          situações de quebra, e a promessa sem ressalva cria problema depois.
          Esse texto entra bem na{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            página sobre mim
          </Link>{" "}
          ou na página de atendimentos.
        </p>
      </section>

      <section>
        <h2>4. Crie uma identidade visual madura, sem ser fria</h2>
        <p>
          A identidade visual de quem atende adolescentes não deve parecer
          infantil nem corporativa. O visual infantil afasta o jovem, que não
          quer ser tratado como criança. O visual corporativo afasta os dois.
        </p>
        <ul>
          <li><strong>Cores:</strong> uma base neutra (off-white, cinzas quentes, um tom escuro para texto) e uma cor de destaque usada com parcimônia.</li>
          <li><strong>Tipografia:</strong> uma família legível em tela pequena, sem letras “fofas” nem fontes de tendência que envelhecem em um ano.</li>
          <li><strong>Imagens:</strong> espaços, objetos, texturas, a própria psicóloga. Nada de adolescentes em sessão ou fotos de banco com jovens tristes olhando a janela.</li>
          <li><strong>Ícones e grafismos:</strong> simples, que funcionem em Stories e em documentos.</li>
        </ul>
        <p>
          <strong>Exemplo ilustrativo:</strong> uma marca fictícia usa areia e
          grafite como base, um verde escuro de destaque e uma tipografia sem
          serifa. Nos posts para adolescentes, entra um grafismo de linhas
          soltas; nos posts para pais, o layout fica mais limpo.
        </p>
        <p>
          <strong>Erro comum:</strong> usar a paleta da psicologia infantil, com
          arco-íris e quebra-cabeça. O post sobre{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          mostram como escolher sem cair no clichê.
        </p>
      </section>

      <section>
        <h2>5. Ajuste o tom de voz para cada público, sem trocar de marca</h2>
        <p>
          Um mesmo tom de voz pode ter dois registros. Com os pais, é claro,
          informativo e calmo. Com o adolescente, é mais direto e mais curto, sem
          imitar gíria. A marca é a mesma; muda o volume.
        </p>
        <ol>
          <li>Defina três adjetivos para o tom, por exemplo: direto, acolhedor, sem julgamento.</li>
          <li>Escreva uma frase-exemplo para cada público.</li>
          <li>Liste palavras que você usa e palavras que evita.</li>
          <li>Revise as peças em voz alta: se soa como um adulto fingindo ser jovem, refaça.</li>
        </ol>
        <p>
          <strong>Exemplo ilustrativo:</strong> para os pais, “Quando o isolamento
          do adolescente merece atenção”. Para o jovem, “Não querer sair do
          quarto nem sempre é preguiça”. Os dois são sobre o mesmo tema, sem
          diagnóstico e sem promessa.
        </p>
        <p>
          <strong>Erro comum:</strong> encher o texto de gíria e emoji. Gíria
          muda rápido, e o adolescente percebe quando é forçada. O post sobre{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          tem um roteiro para definir o seu.
        </p>
      </section>

      <section>
        <h2>6. Monte o site para os pais e uma porta para o jovem</h2>
        <p>
          O site é lido sobretudo pelos responsáveis, que pesquisam antes de
          ligar. Ele precisa responder às dúvidas deles e ter uma parte que o
          adolescente possa ler sem constrangimento.
        </p>
        <ul>
          <li>Home com o posicionamento e o público em uma frase.</li>
          <li>Página de atendimentos: para quem é, como funciona, frequência combinada caso a caso, presencial ou online.</li>
          <li>Seção “Como funciona o sigilo”, em duas versões curtas.</li>
          <li>Uma página ou bloco “Para você, adolescente”, com perguntas que o jovem costuma ter.</li>
          <li>Contato com formulário enxuto, sem pedir diagnóstico, com aviso sobre dados de acordo com a{" "}
            <a href={LGPD} {...ext}>
              LGPD
            </a>
            .
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> um formulário que pede ao responsável que
          descreva “o problema do adolescente”. Isso é dado sensível e o expõe.
          O post sobre{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços do site de psicólogo
          </Link>{" "}
          mostra como descrever cada atendimento, e o de{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            site profissional para psicólogo
          </Link>{" "}
          cobre a estrutura completa.
        </p>
      </section>

      <section>
        <h2>7. Escolha redes e conteúdos por público</h2>
        <p>
          Os pais costumam estar no Instagram e no Google. O adolescente está em
          outras redes, mas não é ali que ele vai procurar psicóloga. Por isso, a
          maior parte do conteúdo vai para os responsáveis, e uma parte menor,
          bem cuidada, fala com o jovem.
        </p>
        <ul>
          <li><strong>Para os pais:</strong> sinais de quando buscar ajuda, como conversar sobre temas difíceis, como funciona a terapia de adolescentes.</li>
          <li><strong>Para o adolescente:</strong> o que é terapia, o que acontece na primeira sessão, mitos sobre ir à psicóloga.</li>
          <li><strong>Para a escola:</strong> materiais que você pode oferecer em palestras e encontros.</li>
        </ul>
        <p>
          Interações com adolescentes nas redes pedem cuidado redobrado. A
          cartilha do CRP-MG lembra que respostas em comentários e caixas de
          perguntas devem se apoiar na ciência psicológica e considerar a
          repercussão. O post sobre{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            responder comentários e direct
          </Link>{" "}
          traz respostas-modelo, e o de{" "}
          <Link href="/blog/psicologo-tiktok" className="inst-link">
            psicólogo no TikTok
          </Link>{" "}
          discute a rede que mais concentra o público jovem.
        </p>
        <p>
          <strong>Erro comum:</strong> fazer “trend” com temas sérios, como
          automutilação ou ideação suicida. Isso é divulgação sensacionalista e
          pode causar dano.
        </p>
      </section>

      <section>
        <h2>Exemplo de marca completa (fictício)</h2>
        <p>
          Um exemplo inventado para este artigo, com dados fictícios:
        </p>
        <ul>
          <li><strong>Posicionamento:</strong> “Psicoterapia para adolescentes de 12 a 17 anos, com um espaço só deles e encontros combinados com a família.”</li>
          <li><strong>Visual:</strong> areia, grafite e verde escuro; tipografia sem serifa; fotos do consultório e da psicóloga.</li>
          <li><strong>Tom:</strong> direto, acolhedor e sem julgamento.</li>
          <li><strong>Site:</strong> home, atendimentos, “Como funciona o sigilo”, “Para você, adolescente”, sobre e contato.</li>
          <li><strong>Redes:</strong> três posts por semana para os pais e uma série mensal para os jovens.</li>
          <li><strong>Assinatura:</strong> Bia Exemplo · Psicóloga · CRP 00/00000.</li>
        </ul>
      </section>

      <section>
        <h2>Pode e evitar na marca de quem atende adolescentes</h2>
        <div className="inst-blog__table" role="region" aria-label="Marca para psicólogo de adolescentes: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Marca para psicólogo de adolescentes: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Dizer a faixa de idade e a abordagem</td><td>Sim (Nota Técnica CFP 1/2022)</td></tr>
              <tr><td>Explicar como funciona o sigilo com os responsáveis</td><td>Sim (arts. 8º e 13)</td></tr>
              <tr><td>Foto ou depoimento de adolescente atendido</td><td>Evitar (Nota Técnica; ECA, art. 17)</td></tr>
              <tr><td>“Seu filho mais confiante em poucas semanas”</td><td>Não (art. 20, e)</td></tr>
              <tr><td>Trend com tema de automutilação</td><td>Não (art. 20, h)</td></tr>
              <tr><td>Conteúdo educativo para pais e para jovens</td><td>Sim</td></tr>
              <tr><td>“Pacote para adolescentes” ou desconto para irmãos</td><td>Não (art. 20, d)</td></tr>
              <tr><td>Nome completo, psicóloga e CRP em toda peça</td><td>Sim, é obrigatório (art. 20, a)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem marca: ajuste fino com os dois públicos</h2>
        <p>
          Se a marca já existe e você quer atender mais adolescentes, comece por
          ouvir os dois públicos, sem expor ninguém.
        </p>
        <ul>
          <li>Anote, sem identificar pessoas, as dúvidas que os pais trazem no primeiro contato e transforme as mais frequentes em conteúdo.</li>
          <li>Pergunte a jovens de fora do consultório, como sobrinhos ou filhos de amigos, se entendem o site e se ele parece “para eles”.</li>
          <li>Revise o vocabulário: palavras como “problema” e “tratamento” podem dar lugar a “o que está difícil” e “acompanhamento”.</li>
          <li>Confira se as cores e as fotos combinam com a idade que você atende hoje.</li>
          <li>Quando a mudança for grande, o post sobre{" "}
            <Link href="/blog/rebranding-consultorio-de-psicologia" className="inst-link">
              rebranding de consultório de psicologia
            </Link>{" "}
            mostra como fazer a transição sem perder quem já conhece você.
          </li>
        </ul>
      </section>

      <section>
        <h2>Para quem atende adolescentes autistas e neurodivergentes</h2>
        <p>
          Adolescentes autistas, com TDAH ou outras neurodivergências muitas
          vezes chegam depois de anos de atendimentos na infância, às vezes
          cansados de terapia. Os pais conhecem bem o caminho e querem saber o que
          muda nessa fase.
        </p>
        <ul>
          <li><strong>Fale da transição:</strong> o que muda do atendimento infantil para o adolescente, como a família participa e como o jovem ganha mais voz.</li>
          <li><strong>Use linguagem neuroafirmativa:</strong> falar de necessidades de apoio, interesses e autonomia, e não de “corrigir comportamentos”.</li>
          <li><strong>Mostre previsibilidade:</strong> como é a primeira sessão, quanto tempo dura, como é a sala. Isso reduz a ansiedade de quem precisa de antecipação.</li>
          <li><strong>Evite imagens de quebra-cabeça e de “mundo próprio”:</strong> muitos adultos e adolescentes autistas rejeitam esses símbolos.</li>
          <li><strong>Diga se o consultório tem cuidado sensorial,</strong> como luz regulável e sala silenciosa.</li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/marca-psicologo-tdah" className="inst-link">
            marca para psicólogo que atende TDAH
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>{" "}
          aprofundam esses pontos.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Marca com visual infantil para quem atende adolescentes.</li>
          <li>Conteúdo que imita gíria e trend.</li>
          <li>Prometer sigilo absoluto ou, ao contrário, prometer aos pais que eles saberão de tudo.</li>
          <li>Fotos de banco com jovens tristes ou em sessão.</li>
          <li>Formulário que pede descrição do problema do adolescente.</li>
          <li>Posicionamento feito só de transtornos.</li>
          <li>Nenhuma página que o próprio jovem possa ler.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da marca</h2>
        <ul>
          <li>Os dois públicos estão escritos em poucas linhas.</li>
          <li>O posicionamento cabe na boca da mãe e na do jovem.</li>
          <li>O sigilo está explicado no site, com base no art. 13.</li>
          <li>A identidade visual é madura, sem clichês infantis.</li>
          <li>O tom de voz tem um registro para cada público.</li>
          <li>Nenhuma foto, depoimento ou promessa envolvendo adolescentes atendidos.</li>
          <li>Nome completo, psicóloga e CRP em todas as peças.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão de dois dias define com você os dois
          públicos, o posicionamento, o tom de voz e a identidade visual, e a
          marca vai ao ar em 45 dias, com cada peça revisada pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a sua marca ainda fala só com os pais, ou só com ninguém, marque
          uma conversa de 15 minutos.
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
            , arts. 8º, 13 e 20.
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
            Brasil.{" "}
            <a href={ECA} {...ext}>
              Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente
            </a>
            , art. 17.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 11 e 14.
          </li>
        </ul>
      </section>
    </>
  )
};
