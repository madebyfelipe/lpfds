import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NUTRI = "https://www.planalto.gov.br/ccivil_03/leis/l8234.htm";
const BERENICE = "https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2012/lei/l12764.htm";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "seletividade-alimentar-psicologa-divulgar",
  title: "Psicóloga e seletividade alimentar infantil: como apresentar o atendimento às famílias",
  description:
    "Seletividade alimentar infantil: como a psicóloga explica o próprio papel, trabalha com nutricionista e fono e divulga sem prometer resultado.",
  keyword: "psicóloga seletividade alimentar infantil",
  tags: ["neurodivergencia", "divulgacao-etica"],
  publishedAt: "2026-11-17",
  summary:
    "A psicóloga que atende seletividade alimentar infantil apresenta melhor o trabalho quando deixa claro o que é papel dela (a relação da criança e da família com a comida, a ansiedade nas refeições, a rotina) e o que é de outros profissionais, como a dieta, que é do nutricionista. A divulgação descreve o processo e o trabalho em equipe, sem prometer que a criança vai passar a comer, sem foto de criança e sem preço como chamariz, como pede o art. 20 do Código de Ética. Abaixo há um passo a passo com exemplos fictícios.",
  faq: [
    {
      q: "Psicólogo trata seletividade alimentar?",
      a: "A psicóloga pode atender a criança e a família nos aspectos emocionais e de comportamento ligados à alimentação, como ansiedade nas refeições, rigidez, medo de alimentos novos e o clima da mesa em casa. A avaliação e a conduta nutricional são do nutricionista, e outros profissionais, como fonoaudiólogo, terapeuta ocupacional e médico, costumam participar. O trabalho em equipe é o que a divulgação deve mostrar."
    },
    {
      q: "Qual a diferença entre seletividade alimentar e criança enjoada para comer?",
      a: "Muitas crianças passam por fases de recusar alimentos, e isso costuma fazer parte do desenvolvimento. Quando a lista de alimentos aceitos é muito curta, a recusa vem com sofrimento ou afeta a saúde, a rotina e a vida social, vale procurar avaliação com pediatra e equipe. No site, a psicóloga pode explicar isso sem diagnosticar pelo texto."
    },
    {
      q: "Seletividade alimentar tem a ver com autismo?",
      a: "A seletividade alimentar é frequente entre crianças autistas e costuma estar ligada a questões sensoriais e à preferência por rotina, mas também aparece em crianças que não são autistas. Na divulgação, evite tratar uma coisa como sinal da outra e não use a alimentação para sugerir diagnóstico."
    },
    {
      q: "Psicóloga pode passar cardápio ou dieta para a criança?",
      a: "Não. O planejamento da alimentação e a conduta dietoterápica são atribuições do nutricionista, previstas na Lei 8.234/1991, e o art. 20, alínea g, do Código de Ética proíbe propor atividades privativas de outras categorias. A psicóloga pode orientar a família sobre o clima das refeições e trabalhar junto com o nutricionista."
    },
    {
      q: "Como divulgar atendimento de seletividade alimentar no Instagram?",
      a: "Com conteúdo informativo sobre o tema, explicação de como você trabalha e do papel de cada profissional, e sem fotos de crianças comendo ou de pratos “antes e depois”. Não prometa que a criança vai experimentar novos alimentos em certo prazo. Nome completo e CRP aparecem no perfil e nas peças."
    }
  ],
  cover: {
    src: "/blog/seletividade-alimentar-psicologa-divulgar/seletividade-alimentar-psicologa-divulgar-prato-vazio-cercado-de-legumes.jpg",
    alt: "Prato branco vazio no centro de uma mesa clara, cercado por legumes, verduras e frutas coloridas vistos de cima",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mãe chega cansada. Conta que o filho come quatro alimentos, que cada
        refeição vira briga, que a avó diz que é “manha” e que a pediatra pediu
        “acompanhamento multidisciplinar”. Ela digitou no Google “psicóloga
        para seletividade alimentar” e encontrou perfis prometendo que a
        criança “vai comer de tudo”. Desconfiou. Com razão.
      </p>
      <p>
        A resposta curta é esta: a psicóloga que atende seletividade alimentar
        infantil apresenta bem o trabalho quando explica o que faz (a relação
        da criança e da família com a comida, a ansiedade em volta da mesa, a
        rotina), com quem trabalha (nutricionista, fono, terapeuta ocupacional,
        pediatra) e como o processo acontece, sem prometer resultado. Este guia
        mostra como montar essa apresentação no site, nas redes e nas conversas
        com outros profissionais, sempre dentro do art. 20. Se você atende
        principalmente crianças autistas, leia também o guia de{" "}
        <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
          marca para psicólogos que atendem autismo e neurodivergência
        </Link>
        .
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética
          </a>{" "}
          tem três alíneas que pesam muito nesse tema. A alínea e veta previsão
          taxativa de resultado, o que exclui “seu filho vai comer de tudo”. A
          alínea g proíbe propor atividades privativas de outras categorias, e o
          planejamento da alimentação é atribuição do nutricionista pela{" "}
          <a href={NUTRI} {...ext}>
            Lei 8.234/1991
          </a>
          . A alínea h veta divulgação sensacionalista, como vídeos de crianças
          chorando diante do prato.
        </p>
        <p>
          Valem também o art. 1º, alínea b (assumir só o que você está
          capacitada a fazer), o art. 6º, alínea a (encaminhar o que extrapola o
          seu campo), o art. 8º (autorização de ao menos um responsável para
          atender criança) e o art. 9º (sigilo). A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          leva essas regras para as redes sociais.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG
          </a>{" "}
          reforça que imagem de criança atendida e relato de caso não cabem na
          divulgação. Dados de saúde da criança, como o que ela come, são dados
          sensíveis pela{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>
          .
        </p>
      </section>

      <section>
        <h2>1. Defina o seu papel na seletividade alimentar</h2>
        <p>
          A família precisa entender, na primeira leitura, o que a psicóloga faz
          nesse cuidado. Sem isso, ela espera um cardápio ou uma solução rápida.
        </p>
        <ol>
          <li>
            <strong>O que é seu.</strong> Ansiedade e medo ligados à comida,
            rigidez e rotina, o clima das refeições em casa, a orientação aos
            pais sobre como agir à mesa, o vínculo da criança com a experiência
            de comer.
          </li>
          <li>
            <strong>O que é da equipe.</strong> Estado nutricional e dieta
            (nutricionista), mastigação e deglutição (fonoaudiólogo),
            sensorialidade (terapeuta ocupacional), saúde geral (pediatra).
          </li>
          <li>
            <strong>Como as partes se encontram.</strong> Conversas com a
            equipe, com autorização da família.
          </li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: “Atendo crianças para quem comer virou
          motivo de medo ou de briga, e as famílias delas. Trabalho junto com a
          nutricionista e a fonoaudióloga que acompanham a criança, cada uma na
          sua parte.”
        </p>
        <p>
          <strong>Erro comum</strong>: escrever “tratamento da seletividade
          alimentar” como se a psicóloga resolvesse tudo. Isso promete demais e
          invade o campo de outros profissionais. O guia de{" "}
          <Link href="/blog/textos-site-psicologo" className="inst-link">
            textos para site de psicólogo
          </Link>{" "}
          ajuda a escrever o papel com clareza.
        </p>
      </section>

      <section>
        <h2>2. Explique a seletividade sem diagnosticar pelo texto</h2>
        <p>
          Muitas famílias não sabem se o que vivem é uma fase comum ou algo que
          pede ajuda. A divulgação pode orientar sem virar autodiagnóstico.
        </p>
        <ul>
          <li>
            Diga que recusar alimentos é comum em certas fases da infância.
          </li>
          <li>
            Liste situações que justificam procurar avaliação: lista muito curta
            de alimentos aceitos, sofrimento nas refeições, impacto na saúde, na
            escola ou nos passeios.
          </li>
          <li>
            Indique que o primeiro passo costuma ser o pediatra, que pode
            encaminhar para a equipe.
          </li>
          <li>
            Mencione que existe um quadro descrito nos manuais diagnósticos, o
            transtorno alimentar restritivo/evitativo, sem dizer que a criança
            do leitor o tem.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: um post do blog “Seletividade alimentar ou
          fase? Quando vale procurar ajuda”, com a resposta no primeiro
          parágrafo e a indicação de começar pelo pediatra.
        </p>
        <p>
          <strong>Erro comum</strong>: quizzes como “seu filho tem seletividade
          alimentar? Faça o teste”. O art. 2º, alínea q, veta divulgar
          diagnósticos em meios de comunicação de forma a expor pessoas, e o
          teste vira um diagnóstico informal. O guia de{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          traz formatos seguros.
        </p>
      </section>

      <section>
        <h2>3. Monte a página do atendimento</h2>
        <p>
          Uma página só sobre seletividade alimentar organiza as respostas e
          aparece para quem busca o tema no Google.
        </p>
        <ol>
          <li><strong>Para quem é</strong>: faixa etária e situações que você atende.</li>
          <li><strong>O que a psicóloga faz</strong>: o seu papel, em linguagem leiga.</li>
          <li><strong>Com quem você trabalha</strong>: os outros profissionais, sem citar nomes ou clínicas.</li>
          <li><strong>Como começa</strong>: conversa com os responsáveis, autorização, contato com a equipe.</li>
          <li><strong>O papel dos pais</strong>: encontros de orientação, o que muda em casa.</li>
          <li><strong>Identificação</strong>: nome completo, CRP, formação real, botão de contato.</li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: a página “Seletividade alimentar” de uma
          psicóloga de Recife tem um quadro “O que eu faço / o que a
          nutricionista faz / o que a fono faz”, com duas linhas em cada coluna.
          As mensagens que ela recebe passam a citar se a criança já tem
          acompanhamento nutricional.
        </p>
        <p>
          <strong>Erro comum</strong>: colocar foto de prato colorido com
          carinha feita de legumes. Ela sugere uma técnica de cozinha, não o seu
          trabalho, e reforça a ideia de que basta “caprichar no prato”. O guia
          de{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços para psicólogo
          </Link>{" "}
          tem a estrutura completa.
        </p>
      </section>

      <section>
        <h2>4. Mostre o trabalho com nutricionista, fono e terapeuta ocupacional</h2>
        <p>
          O trabalho em equipe é o argumento mais forte da sua divulgação nesse
          tema. Ele tranquiliza a família e abre portas com outros
          profissionais.
        </p>
        <ul>
          <li>
            Explique que você conversa com a equipe da criança, com autorização
            dos responsáveis, e compartilha só o necessário (art. 6º, alínea b).
          </li>
          <li>
            Prepare um material curto para nutricionistas e fonoaudiólogas
            explicando quando a psicologia pode ajudar.
          </li>
          <li>
            Se você não conhece profissionais da área na sua cidade, diga que
            ajuda a família a buscar encaminhamento.
          </li>
          <li>
            Para indicações, nunca ofereça ou aceite comissão (art. 2º, alínea
            p).
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: uma página em PDF “Psicologia e
          seletividade alimentar: como posso somar ao seu trabalho”, entregue a
          duas nutricionistas infantis com quem a psicóloga já dividiu
          acompanhamentos.
        </p>
        <p>
          <strong>Erro comum</strong>: apresentar-se como “a psicóloga da
          clínica X” sem autorização da clínica, ou usar o nome de parceiras para
          dar credibilidade. Fale do modo de trabalhar. O guia de{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria entre psicólogo e pediatra
          </Link>{" "}
          mostra como abrir essa conversa.
        </p>
      </section>

      <section>
        <h2>5. Fale com os pais sem culpa e sem promessa</h2>
        <p>
          Pais de crianças com seletividade costumam ouvir que “é falta de
          limite”. A sua comunicação pode ser o primeiro lugar onde eles não se
          sentem julgados.
        </p>
        <ul>
          <li>Reconheça o cansaço das refeições sem dramatizar.</li>
          <li>Evite frases que culpam: “os pais criaram o problema”.</li>
          <li>
            Descreva o processo: encontros, orientação, pequenos combinados em
            casa, conversa com a equipe.
          </li>
          <li>
            Diga que o tempo varia de criança para criança e que não há prazo
            garantido.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Muitas famílias chegam depois de ouvir que
          é manha. Aqui, a gente começa entendendo como estão as refeições na
          sua casa e o que a criança sente diante da comida.”
        </p>
        <p>
          <strong>Erro comum</strong>: “em 8 semanas seu filho vai experimentar
          novos alimentos”. Isso é previsão taxativa de resultado (art. 20,
          alínea e) e, se não acontecer, a família se culpa duas vezes. O guia
          de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            orientação parental
          </Link>{" "}
          mostra como divulgar o trabalho com os pais.
        </p>
      </section>

      <section>
        <h2>6. Escolha imagens e conteúdos que não exponham a criança</h2>
        <p>
          Nesse tema, a tentação de mostrar “o antes e depois do prato” é
          grande. Ela fere o art. 20 e o sigilo, mesmo sem rosto.
        </p>
        <ol>
          <li>Nada de fotos ou vídeos de crianças comendo, recusando ou chorando.</li>
          <li>Nada de “prato de antes e prato de depois”.</li>
          <li>Nada de relatos de casos, nem com nome trocado.</li>
          <li>
            Use ilustrações, fotos de objetos (talheres, pratos vazios), do
            consultório e de você.
          </li>
          <li>
            Prefira conteúdos que explicam: o que é seletividade, quem procurar,
            como é o trabalho em equipe.
          </li>
        </ol>
        <p>
          <em>Exemplo fictício</em>: um carrossel “Quem faz o quê na
          seletividade alimentar”, com uma tela para cada profissional e a
          última com o CRP e o link para a página do site.
        </p>
        <p>
          <strong>Erro comum</strong>: usar foto de banco com criança sorrindo
          diante de brócolis. Mesmo não sendo uma criança atendida, a imagem
          sugere resultado e reforça o estereótipo. O post sobre{" "}
          <Link href="/blog/psicologo-direito-autoral-redes" className="inst-link">
            direito autoral e imagens nas redes
          </Link>{" "}
          ajuda na escolha.
        </p>
      </section>

      <section>
        <h2>7. Apareça nas buscas das famílias e da equipe</h2>
        <p>
          As famílias procuram com termos como “psicóloga seletividade alimentar
          + cidade”. Os profissionais procuram alguém de confiança para indicar.
          Esteja nos dois caminhos.
        </p>
        <ul>
          <li>
            Página do serviço com o termo no título e a cidade no texto.
          </li>
          <li>
            Perfil de empresa no Google com o serviço listado. Veja o guia de{" "}
            <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
              Google Meu Negócio para psicólogo
            </Link>
            .
          </li>
          <li>
            Um ou dois posts de blog respondendo às perguntas mais comuns, com
            fontes.
          </li>
          <li>
            Presença em grupos de famílias só quando o tema surgir, com
            informação, não anúncio.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: um post “Seletividade alimentar: o que a
          psicóloga faz e o que a nutricionista faz”, ligado à página do serviço
          e compartilhado com as nutricionistas parceiras.
        </p>
        <p>
          <strong>Erro comum</strong>: anunciar “avaliação gratuita de
          seletividade”. Gratuidade como chamariz é vetada pelo art. 20, alínea
          d. O post sobre{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo divulgar preço
          </Link>{" "}
          explica os limites.
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação do atendimento de seletividade alimentar</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na divulgação do atendimento de seletividade alimentar"
            tabIndex={0}
          >
            <caption>Seletividade alimentar infantil: pode e evitar na divulgação</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Papel</td>
                <td>Explicar o que a psicóloga faz e o que é da equipe</td>
                <td>Passar cardápio, dieta ou “plano alimentar”</td>
              </tr>
              <tr>
                <td>Resultado</td>
                <td>Descrever o processo e o trabalho com os pais</td>
                <td>“Seu filho vai comer de tudo em X semanas”</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Ilustrações, objetos, consultório, você</td>
                <td>Criança comendo, chorando ou prato “antes e depois”</td>
              </tr>
              <tr>
                <td>Diagnóstico</td>
                <td>Explicar quando procurar avaliação</td>
                <td>Testes online que sugerem diagnóstico</td>
              </tr>
              <tr>
                <td>Preço</td>
                <td>Informar de forma neutra, se quiser</td>
                <td>“Avaliação gratuita” ou pacote com desconto</td>
              </tr>
              <tr>
                <td>Parcerias</td>
                <td>Material informativo para nutricionistas e fonos</td>
                <td>Comissão por indicação</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já divulga: conteúdo com fontes e atualização</h2>
        <p>
          Se você já tem página e perfil organizados, o próximo passo é
          conteúdo que mostre cuidado com a informação. O tema circula muito nas
          redes com dicas sem base, e uma fonte confiável se destaca.
        </p>
        <ul>
          <li>
            Cite estudos com DOI e documentos oficiais quando falar de causas ou
            frequência, e date o post.
          </li>
          <li>
            Não repita porcentagens que circulam em reportagens sem conferir o
            estudo original.
          </li>
          <li>
            Revise os posts antigos uma vez por ano e atualize o que mudou.
          </li>
          <li>
            Convide a nutricionista parceira para um conteúdo conjunto, em que
            cada uma fala da sua parte.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/blog-para-psicologo" className="inst-link">
            blog para psicólogo
          </Link>{" "}
          mostra como transformar essas dúvidas em posts que aparecem no Google.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          A seletividade alimentar aparece com frequência entre crianças
          autistas, muitas vezes ligada a questões sensoriais e à preferência
          por previsibilidade. Isso pede alguns cuidados extras na comunicação.
        </p>
        <ul>
          <li>
            Respeite a forma de a criança sentir texturas, cheiros e cores, sem
            tratar isso como teimosia a ser vencida.
          </li>
          <li>
            Fale da família inteira: irmãos, avós e a escola também participam
            das refeições.
          </li>
          <li>
            Mostre que você se articula com a terapeuta ocupacional e a fono que
            muitas vezes já acompanham a criança.
          </li>
          <li>
            Lembre que a{" "}
            <a href={BERENICE} {...ext}>
              Lei 12.764/2012
            </a>{" "}
            garante à pessoa autista atenção integral às necessidades de saúde,
            incluindo atendimento multiprofissional (art. 3º, III, b), o que
            reforça o cuidado em equipe.
          </li>
        </ul>
        <p>
          <em>Exemplo fictício</em>: “Muitas crianças autistas que atendo têm
          uma relação delicada com a comida. Nosso trabalho começa entendendo o
          que ela sente à mesa, sem pressa e junto com a equipe que já a
          acompanha.”
        </p>
        <p>
          Para a linguagem com essas famílias, veja o guia de{" "}
          <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
            linguagem neuroafirmativa
          </Link>
          , e para um espaço que acolha crianças sensíveis a estímulos, o de{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Prometer que a criança vai comer de tudo ou em certo prazo.</li>
          <li>Oferecer cardápio, dieta ou suplementação.</li>
          <li>Postar fotos de crianças à mesa ou pratos “antes e depois”.</li>
          <li>Testes online que sugerem diagnóstico.</li>
          <li>Culpar os pais pela seletividade.</li>
          <li>Repetir estatísticas sem conferir a fonte original.</li>
          <li>Avaliação gratuita como chamariz.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist da divulgação</h2>
        <ul>
          <li>Papel da psicóloga explicado em uma frase clara.</li>
          <li>Papel da nutricionista, da fono e da terapeuta ocupacional citado.</li>
          <li>Página própria do atendimento, com cidade e CRP.</li>
          <li>Orientação sobre quando procurar avaliação, sem diagnóstico.</li>
          <li>Nenhuma imagem de criança ou prato “antes e depois”.</li>
          <li>Nenhuma promessa de prazo ou de resultado.</li>
          <li>Fontes datadas nos posts do blog.</li>
          <li>Nome completo e CRP em todas as peças.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com a
          página do atendimento escrita para as famílias e revisada pelo art.
          20. Tudo é apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se as famílias ainda chegam esperando um cardápio, marque uma
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
            , arts. 1º, 2º, 6º, 8º, 9º e 20.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>{" "}
            (cartilha, abril de 2026).
          </li>
          <li>
            Brasil.{" "}
            <a href={NUTRI} {...ext}>
              Lei nº 8.234/1991
            </a>{" "}
            — regulamenta a profissão de nutricionista.
          </li>
          <li>
            Brasil.{" "}
            <a href={BERENICE} {...ext}>
              Lei nº 12.764/2012
            </a>{" "}
            (Política Nacional de Proteção dos Direitos da Pessoa com Transtorno
            do Espectro Autista), art. 3º.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018
            </a>{" "}
            (Lei Geral de Proteção de Dados).
          </li>
        </ul>
      </section>
    </>
  )
};
