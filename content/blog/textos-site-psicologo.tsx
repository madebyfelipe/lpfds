import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const TITULO = "https://developers.google.com/search/docs/appearance/title-link?hl=pt-br";
const SNIPPET = "https://developers.google.com/search/docs/appearance/snippet?hl=pt-br";
const UTIL = "https://developers.google.com/search/docs/fundamentals/creating-helpful-content?hl=pt-br";

export const post: Post = {
  slug: "textos-site-psicologo",
  title: "Textos para site de psicólogo: modelos para a página inicial, o contato e os botões",
  description:
    "Textos para site de psicólogo: modelos de título, abertura, chamada, página de contato, rodapé e descrição para o Google, dentro do art. 20 do Código de Ética.",
  keyword: "textos para site de psicólogo",
  tags: ["presenca-digital", "divulgacao-etica"],
  publishedAt: "2026-11-16",
  summary:
    "Os textos do site de psicólogo funcionam quando dizem, em poucas linhas, quem você atende, como trabalha, onde atende e qual o próximo passo. Cada página precisa de nome completo, a palavra psicóloga e o CRP, e nenhum texto pode prometer resultado, usar preço como chamariz ou trazer depoimento de paciente (art. 20 do Código de Ética). Abaixo há modelos fictícios para a página inicial, a página de contato, os botões, o rodapé e a descrição que aparece no Google.",
  faq: [
    {
      q: "O que escrever na página inicial do site de psicólogo?",
      a: "Um título que diga que atendimento você oferece, para quem e onde (ou online); uma frase sobre como você trabalha; seu nome completo, a palavra psicóloga e o CRP; e um botão com o próximo passo, como “Conversar pelo WhatsApp”. Abaixo disso, um resumo dos atendimentos, uma apresentação curta sua e as perguntas frequentes."
    },
    {
      q: "Posso usar texto pronto ou copiar de outro site de psicólogo?",
      a: "Copiar texto de outro site esbarra no direito autoral e deixa o seu site igual a dezenas de outros. Modelos servem como estrutura: troque cada frase pelas suas palavras, pelo público que você atende e pela sua forma de trabalhar."
    },
    {
      q: "Que palavras evitar no site de psicólogo?",
      a: "Promessas (“cure”, “supere de vez”, “resultados garantidos”), superlativos sem prova (“a melhor”, “referência”), preço como propaganda (“sessão grátis”, “desconto”) e termos sensacionalistas. Também vale evitar jargão técnico sem explicação, porque quem lê quase sempre é leigo."
    },
    {
      q: "Posso usar inteligência artificial para escrever os textos do site?",
      a: "Pode usar como rascunho, mas a responsabilidade pelo conteúdo continua sua. Revise cada frase com o art. 20 do Código de Ética, tire generalidades e acrescente detalhes que só você conhece, como o público, a cidade e o jeito de conduzir a primeira conversa."
    },
    {
      q: "Qual o tamanho ideal dos textos do site de psicólogo?",
      a: "Na página inicial, frases curtas e blocos de duas a quatro linhas, porque a maioria lê no celular. Páginas de serviço e a página sobre você podem ser mais longas, desde que cada parágrafo responda a uma dúvida real de quem chega."
    }
  ],
  cover: {
    src: "/blog/textos-site-psicologo/textos-site-psicologo-caderno-e-notebook.jpg",
    alt: "Caderno de espiral em branco sobre um notebook, ao lado de óculos, café e folhas verdes, pronto para escrever",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O site está pronto, o modelo é bonito, e o cursor pisca no campo
        “título da página inicial”. Você escreve “Bem-vindo ao meu espaço”,
        apaga, tenta “Cuidar de você é o meu propósito”, apaga de novo. Escrever
        sobre o próprio trabalho é difícil, e o art. 20 do Código de Ética deixa
        a tarefa mais delicada: muita frase de marketing comum vira promessa
        quando quem escreve é psicóloga.
      </p>
      <p>
        A resposta curta é esta: bons textos para site de psicólogo dizem quem
        você atende, como trabalha, onde atende e o que a pessoa deve fazer em
        seguida, com o nome completo e o CRP à vista e sem promessa. Este guia
        traz modelos fictícios para as partes que mais travam: o título da
        página inicial, a abertura, a apresentação curta, os botões, a página
        de contato, o rodapé e a descrição que aparece no Google. As páginas{" "}
        <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
          sobre mim
        </Link>{" "}
        e de{" "}
        <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
          serviços
        </Link>{" "}
        têm guias próprios.
      </p>

      <section>
        <h2>O que dizem as normas sobre o texto do site</h2>
        <p>
          Todo texto do site é publicidade profissional e segue o{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>
          . Ao divulgar, a psicóloga informa nome completo, a palavra psicóloga
          e o número do CRP, e pode informar títulos que tenha e técnicas
          reconhecidas. O mesmo artigo proíbe:
        </p>
        <ul>
          <li>usar o preço como forma de propaganda (alínea d);</li>
          <li>fazer previsão taxativa de resultados (alínea e);</li>
          <li>fazer autopromoção em detrimento de outros profissionais (alínea f);</li>
          <li>propor atividades privativas de outras profissões (alínea g);</li>
          <li>fazer divulgação sensacionalista (alínea h).</li>
        </ul>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          detalha esses pontos e lembra que depoimentos ou material do
          atendimento não devem ser expostos. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          reforça que a responsabilidade pelo conteúdo divulgado é da
          profissional, inclusive quando o texto foi escrito por outra pessoa ou
          por uma ferramenta.
        </p>
        <p>
          Na prática, cada frase do site passa por três perguntas: ela promete
          algo que você não controla? Ela compara você a colegas? Ela usa preço
          ou gratuidade para atrair? Se a resposta for sim, reescreva.
        </p>
      </section>

      <section>
        <h2>1. O título da página inicial: atendimento, público e lugar</h2>
        <p>
          O título da página inicial deve dizer o que você faz, para quem e
          onde. É a primeira frase que a pessoa lê e, muitas vezes, a que o
          Google mostra.
        </p>
        <ol>
          <li>
            <strong>Atendimento:</strong> psicoterapia, avaliação, orientação de
            pais.
          </li>
          <li>
            <strong>Público:</strong> adultos, adolescentes, crianças, famílias
            de crianças autistas.
          </li>
          <li>
            <strong>Lugar:</strong> bairro e cidade, ou “online para todo o
            Brasil”.
          </li>
        </ol>
        <p>Modelos fictícios:</p>
        <ul>
          <li>“Psicoterapia para adultos em Sorocaba e online.”</li>
          <li>“Psicóloga infantil em Curitiba, no Batel. Crianças de 3 a 12 anos.”</li>
          <li>“Orientação para pais de crianças autistas, online.”</li>
          <li>“Psicoterapia para adolescentes e conversa com a família, em Recife.”</li>
        </ul>
        <p>
          O erro comum é escolher uma frase poética que serviria para qualquer
          profissão, como “Um espaço para florescer”. Ela pode entrar como
          frase de apoio, depois do título claro. Se a sua marca tem um slogan,
          o post sobre{" "}
          <Link href="/blog/slogan-para-psicologo" className="inst-link">
            slogan para psicólogo
          </Link>{" "}
          mostra como escrevê-lo sem prometer resultado.
        </p>
      </section>

      <section>
        <h2>2. A abertura: a situação de quem chega, em duas frases</h2>
        <p>
          Logo abaixo do título, duas ou três frases mostram que você entende a
          situação de quem procura ajuda e explicam como trabalha. Fale da
          situação; deixe o diagnóstico de fora.
        </p>
        <ol>
          <li>Descreva o momento da pessoa com palavras do dia a dia.</li>
          <li>Diga o que acontece no atendimento, sem prometer o fim.</li>
          <li>Termine com o próximo passo.</li>
        </ol>
        <p>Modelo fictício para quem atende adultos:</p>
        <blockquote>
          <p>
            “Se a ansiedade tem ocupado mais espaço do que você gostaria, a
            terapia é um lugar para entender o que está acontecendo e encontrar
            jeitos de lidar com isso, no seu ritmo. Atendo adultos em sessões
            semanais, presenciais ou online.”
          </p>
        </blockquote>
        <p>Modelo fictício para quem atende crianças:</p>
        <blockquote>
          <p>
            “Quando o comportamento do seu filho preocupa em casa ou na escola,
            é comum não saber por onde começar. A primeira conversa é só com os
            responsáveis, para entender a história da criança e combinar os
            próximos passos.”
          </p>
        </blockquote>
        <p>
          O erro comum é escrever “vou te ajudar a superar a ansiedade” ou
          “você vai voltar a ser feliz”. São previsões de resultado. Troque o
          verbo de resultado por um verbo de processo: entender, cuidar,
          acompanhar, construir. A lista de palavras está no post sobre{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. A apresentação curta: quem atende, em um parágrafo</h2>
        <p>
          Na página inicial, a apresentação é um resumo de quatro a seis
          linhas, com foto e link para a página completa. Ela responde: quem é
          você, que formação tem e por que trabalha com esse público.
        </p>
        <ul>
          <li>Nome completo, psicóloga e CRP na primeira linha.</li>
          <li>Abordagem, dita em linguagem simples.</li>
          <li>Formação relevante, com o nome correto dos títulos.</li>
          <li>Um detalhe concreto do seu jeito de trabalhar.</li>
        </ul>
        <p>Modelo fictício:</p>
        <blockquote>
          <p>
            “Sou Ana Ribeiro Lima, psicóloga (CRP 06/000000). Trabalho com
            terapia cognitivo-comportamental e atendo adolescentes e adultos
            jovens. Antes do consultório, trabalhei seis anos em escola, e isso
            me ensinou a conversar com o jovem e com a família sem tomar
            partido.”
          </p>
        </blockquote>
        <p>
          Cuidado com títulos: “especialista” só com título de especialista
          concedido pelo Conselho ou com a especialização nomeada como curso.
          As regras estão em{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            psicólogo pode se dizer especialista?
          </Link>
        </p>
        <p>
          O erro comum é transformar a apresentação em currículo, com dez
          cursos em lista. Na página inicial, uma formação principal basta; o
          resto vai para a{" "}
          <Link href="/blog/pagina-sobre-mim-psicologo" className="inst-link">
            página sobre mim
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Os botões: diga o que acontece ao clicar</h2>
        <p>
          O texto do botão deve dizer exatamente o que acontece depois do
          clique. “Saiba mais” e “Clique aqui” não dizem nada; “Conversar pelo
          WhatsApp” diz.
        </p>
        <ol>
          <li>Comece com um verbo de ação: conversar, agendar, ver, ligar.</li>
          <li>Diga o canal ou o destino: WhatsApp, agenda, página.</li>
          <li>Use no máximo quatro palavras.</li>
          <li>Repita o mesmo botão principal em todas as páginas.</li>
        </ol>
        <p>Modelos fictícios:</p>
        <ul>
          <li>“Conversar pelo WhatsApp”</li>
          <li>“Agendar a primeira conversa”</li>
          <li>“Ver como funciona a avaliação”</li>
          <li>“Ver o endereço no mapa”</li>
        </ul>
        <p>
          Botão com urgência falsa é o erro mais comum aqui: “Últimas vagas!”,
          “Garanta já a sua sessão”. Além de soar como varejo, “últimas vagas”
          só pode ser dito se for verdade, e mesmo assim pressiona quem está
          frágil. Se a agenda está cheia, diga com calma: “Agenda com lista de
          espera; deixe seu contato”.
        </p>
        <p>
          Botão também é acessibilidade. Leitores de tela leem o texto do botão
          fora do contexto, então “Clique aqui” vira um mistério. O post sobre{" "}
          <Link href="/blog/site-acessivel-psicologo" className="inst-link">
            site acessível para psicólogo
          </Link>{" "}
          traz os outros ajustes.
        </p>
      </section>

      <section>
        <h2>5. A página de contato: o que esperar depois da mensagem</h2>
        <p>
          A página de contato deve tirar o medo de mandar a primeira mensagem.
          Diga como entrar em contato, em quanto tempo você responde e o que
          acontece em seguida.
        </p>
        <ol>
          <li>
            <strong>Canais:</strong> WhatsApp, e-mail e telefone, com o número
            escrito por extenso além do botão.
          </li>
          <li>
            <strong>Tempo de resposta:</strong> “Respondo em até um dia útil”.
          </li>
          <li>
            <strong>Próximo passo:</strong> conversa inicial por telefone,
            primeira sessão, envio de horários.
          </li>
          <li>
            <strong>Endereço:</strong> com referência, estacionamento e
            acessibilidade.
          </li>
          <li>
            <strong>Aviso de urgência:</strong> o site não é canal de
            emergência.
          </li>
        </ol>
        <p>Modelo fictício:</p>
        <blockquote>
          <p>
            “Mande uma mensagem pelo WhatsApp com seu nome e o melhor horário
            para conversarmos. Respondo em até um dia útil, de segunda a sexta.
            Não é preciso contar o motivo da procura por mensagem: falamos
            sobre isso com calma. Em situação de emergência, ligue para o CVV,
            188, ou procure o pronto-socorro mais próximo.”
          </p>
        </blockquote>
        <p>
          O erro comum é um formulário com campo “Descreva o seu caso”. Ele
          convida a pessoa a escrever dados de saúde num canal que talvez não
          seja seguro, e a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          trata dado de saúde como sensível. A mensagem de boas-vindas do
          WhatsApp segue a mesma lógica; veja{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. O rodapé e os avisos: identificação e privacidade</h2>
        <p>
          O rodapé aparece em todas as páginas, então é o lugar certo para a
          identificação completa e para os avisos que ninguém procura, mas
          todos precisam encontrar.
        </p>
        <ul>
          <li>Nome completo, “psicóloga” e CRP com a região.</li>
          <li>Endereço ou “atendimento online”.</li>
          <li>Link para a política de privacidade.</li>
          <li>Nome empresarial e CNPJ, se você atende como pessoa jurídica.</li>
        </ul>
        <p>Modelo fictício:</p>
        <blockquote>
          <p>
            “Ana Ribeiro Lima · Psicóloga · CRP 06/000000 · Rua Exemplo, 100,
            sala 12, Sorocaba (SP) · Atendimento presencial e online ·
            Política de privacidade”
          </p>
        </blockquote>
        <p>
          O aviso de privacidade pode ser curto, desde que verdadeiro: que dados
          o site coleta, para quê, por quanto tempo e como pedir a exclusão.
          Se o site usa cookies de medição ou pixel de anúncio, isso precisa
          estar escrito e, quando for o caso, depender de consentimento.
        </p>
        <p>
          O erro comum é usar o nome fantasia sozinho, sem o nome da
          profissional. O art. 20 pede o nome completo de quem é responsável.
          Se você tem CNPJ, o post sobre{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            psicólogo com CNPJ e nome fantasia
          </Link>{" "}
          explica como mostrar os dois.
        </p>
      </section>

      <section>
        <h2>7. O título e a descrição que aparecem no Google</h2>
        <p>
          Cada página tem um título e uma descrição que o Google pode usar no
          resultado da busca. Eles são textos do site também, e seguem as mesmas
          regras éticas.
        </p>
        <ol>
          <li>
            <strong>Título da página:</strong> atendimento, cidade e seu nome,
            sem repetir palavras. A{" "}
            <a href={TITULO} {...ext}>
              documentação do Google sobre links de título
            </a>{" "}
            pede títulos descritivos, concisos e únicos para cada página.
          </li>
          <li>
            <strong>Descrição:</strong> uma ou duas frases que resumem a página.
            O Google explica, na{" "}
            <a href={SNIPPET} {...ext}>
              página sobre snippets
            </a>
            , que pode usar a meta description quando ela descreve melhor a
            página do que o texto encontrado.
          </li>
          <li>
            <strong>Uma descrição por página:</strong> nada de copiar a mesma
            frase em todas.
          </li>
        </ol>
        <p>Modelos fictícios:</p>
        <ul>
          <li>
            Título: “Psicóloga infantil em Curitiba | Ana Ribeiro Lima”.
          </li>
          <li>
            Descrição: “Psicoterapia para crianças de 3 a 12 anos no Batel, com
            encontros regulares com os pais. Saiba como funciona a primeira
            conversa.”
          </li>
        </ul>
        <p>
          O erro comum é escrever para o robô: “psicóloga Curitiba psicóloga
          infantil Curitiba melhor psicóloga”. Além de repetitivo, “melhor” é
          superlativo sem prova. O passo a passo para o Google está em{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Pode e evitar nos textos do site</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar nos textos do site de psicólogo"
            tabIndex={0}
          >
            <caption>Textos para site de psicólogo: pode e evitar</caption>
            <thead>
              <tr>
                <th scope="col">Parte do site</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Título</td>
                <td>“Psicoterapia para adultos em Sorocaba e online”</td>
                <td>“A melhor psicóloga da cidade”</td>
              </tr>
              <tr>
                <td>Abertura</td>
                <td>Verbos de processo: entender, acompanhar, cuidar</td>
                <td>“Supere a ansiedade de vez”, “resultados garantidos”</td>
              </tr>
              <tr>
                <td>Apresentação</td>
                <td>Nome completo, CRP, abordagem e formação real</td>
                <td>“Especialista” sem título, “referência no assunto”</td>
              </tr>
              <tr>
                <td>Botões</td>
                <td>“Conversar pelo WhatsApp”</td>
                <td>“Últimas vagas!”, “Clique aqui”</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>“Informado na conversa inicial”</td>
                <td>“Primeira sessão grátis”, “10% de desconto no pacote”</td>
              </tr>
              <tr>
                <td>Prova</td>
                <td>Como o atendimento funciona e perguntas frequentes</td>
                <td>Depoimento de paciente, prints, antes e depois</td>
              </tr>
              <tr>
                <td>Contato</td>
                <td>Canais, prazo de resposta e aviso de emergência</td>
                <td>Campo “descreva o seu caso”</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem textos: revise com o leitor real</h2>
        <p>
          Se o site já está no ar, a revisão mais útil é ler os textos em voz
          alta, no celular, como se você fosse quem procura ajuda. Frase que
          você não diria numa conversa provavelmente soa artificial no site.
        </p>
        <p>
          Depois, compare as palavras do site com as mensagens que chegam no
          WhatsApp. Se as pessoas escrevem “meu filho não para quieto na
          escola” e o site fala em “dificuldades de autorregulação”, há uma
          distância a encurtar. Use os termos técnicos, mas explique-os na
          primeira vez.
        </p>
        <p>
          Por fim, confira o Google Search Console: que buscas trazem pessoas
          ao site e em que páginas elas chegam. O Google recomenda conteúdo
          feito para pessoas, e não para mecanismos de busca, no guia de{" "}
          <a href={UTIL} {...ext}>
            conteúdo útil e confiável
          </a>
          . Uma revisão por semestre, com as dúvidas novas que surgiram no
          atendimento, mantém o texto atual sem reescrever tudo.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Quem lê o site, neste caso, costuma ser uma mãe ou um pai que já
          pesquisou muito, já ouviu promessas e está cansado. Os textos precisam
          ser diretos, respeitosos e livres de termos que soem como cura ou
          correção.
        </p>
        <ul>
          <li>
            <strong>Abertura:</strong> “Para famílias que querem entender
            melhor o filho e organizar a rotina com mais apoio”, em vez de
            “para superar os desafios do autismo”.
          </li>
          <li>
            <strong>Linguagem:</strong> “criança autista” ou “criança no
            espectro”, conforme a preferência da comunidade e da família; nada
            de “portador”. O post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            traz exemplos.
          </li>
          <li>
            <strong>Previsibilidade:</strong> explique passo a passo o que
            acontece na primeira visita, onde estacionar, como é a sala de
            espera.
          </li>
          <li>
            <strong>Trabalho em rede:</strong> diga como você conversa com a
            escola e outros profissionais, sempre com autorização.
          </li>
          <li>
            <strong>Leitura fácil:</strong> frases curtas, listas, nada de
            parágrafo longo. Muitos pais também são neurodivergentes.
          </li>
        </ul>
        <p>Modelo fictício de abertura:</p>
        <blockquote>
          <p>
            “Atendo crianças autistas de 2 a 10 anos e suas famílias, em
            Campinas. Antes da primeira sessão, conversamos com os responsáveis
            e, se ajudar, mando fotos da sala para a criança conhecer o espaço.”
          </p>
        </blockquote>
        <p>
          Evite listas de “sinais de autismo” no site para atrair visitas.
          Elas incentivam o autodiagnóstico e podem soar sensacionalistas.
          Prefira explicar quando procurar avaliação e como ela funciona.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Título poético que não diz atendimento, público nem cidade.</li>
          <li>Verbos de resultado: superar, curar, resolver, transformar.</li>
          <li>CRP só numa página, ou nome fantasia sem o nome da profissional.</li>
          <li>Botões genéricos ou com urgência falsa.</li>
          <li>Formulário pedindo detalhes do caso.</li>
          <li>Texto copiado de outro site ou gerado e publicado sem revisão.</li>
          <li>A mesma descrição para o Google em todas as páginas.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist dos textos do site</h2>
        <ul>
          <li>Título da página inicial com atendimento, público e lugar.</li>
          <li>Abertura com a situação de quem chega e verbos de processo.</li>
          <li>Nome completo, psicóloga e CRP em todas as páginas.</li>
          <li>Apresentação curta com formação real e link para a página completa.</li>
          <li>Botões que dizem o que acontece ao clicar.</li>
          <li>Página de contato com prazo de resposta e aviso de emergência.</li>
          <li>Rodapé com identificação e política de privacidade.</li>
          <li>Título e descrição únicos para cada página.</li>
          <li>Nenhuma promessa, preço como chamariz, superlativo ou depoimento.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem o
          posicionamento, o tom de voz, a identidade visual e o site, com cada
          texto escrito nas palavras do seu público e revisado pelo art. 20.
          Tudo é apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu site ainda tem “Bem-vindo ao meu espaço” no título,
          marque uma conversa de 15 minutos.
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
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>{" "}
            — uso profissional das redes sociais.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            , arts. 5º e 11.
          </li>
          <li>
            Google Search Central.{" "}
            <a href={TITULO} {...ext}>
              Links de título nos resultados da Pesquisa
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={SNIPPET} {...ext}>
              Snippets e meta descriptions
            </a>
            .
          </li>
          <li>
            Google Search Central.{" "}
            <a href={UTIL} {...ext}>
              Como criar conteúdo útil, confiável e que prioriza as pessoas
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
