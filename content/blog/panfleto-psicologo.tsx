import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";

export const post: Post = {
  slug: "panfleto-psicologo",
  title: "Panfleto para psicólogo: o que colocar, o que o art. 20 proíbe e onde distribuir",
  description:
    "Panfleto e folder para consultório de psicologia: o que precisa ter, o que o Código de Ética proíbe, texto, design, impressão, QR code e onde distribuir.",
  keyword: "panfleto para psicólogo",
  tags: ["identidade-visual", "divulgacao-etica"],
  publishedAt: "2026-11-15",
  summary:
    "Psicólogo pode divulgar o consultório com panfleto ou folder: a cartilha do CRP-MG cita esses meios entre os permitidos. O material precisa trazer nome completo e CRP e não pode usar preço como propaganda, prometer resultado nem ser sensacionalista (art. 20 do Código de Ética). Funciona melhor quando informa, segue a identidade visual e leva a uma página do site por QR code.",
  faq: [
    {
      q: "Psicólogo pode distribuir panfleto?",
      a: "Pode. A cartilha de publicidade do CRP-MG (2026) diz que o Conselho não restringe os meios de divulgação e cita panfleto, folder, cartão e outdoor. O conteúdo segue o art. 20 do Código de Ética: nome completo, CRP, sem preço como propaganda, sem promessa e sem sensacionalismo."
    },
    {
      q: "Posso colocar o valor da consulta no panfleto?",
      a: "O art. 20, alínea d, proíbe usar o preço do serviço como forma de propaganda. Um panfleto é peça de propaganda, então valor, desconto, “primeira sessão grátis” ou “preço social” em destaque não cabem. Informe o valor quando a pessoa perguntar, em conversa."
    },
    {
      q: "Onde posso deixar panfletos do consultório?",
      a: "Em lugares com autorização e com público que faça sentido: balcão de parceiros (pediatras, escolas, farmácias de bairro), eventos e palestras, a sua própria recepção. Evite abordar pessoas em situação de vulnerabilidade, como na porta de hospitais, porque isso se aproxima de induzir alguém a recorrer aos seus serviços."
    },
    {
      q: "Panfleto ainda funciona ou é melhor investir no digital?",
      a: "Os dois se completam. O panfleto alcança quem está perto, em lugares onde a pessoa já pensa em cuidado, e o QR code leva para o site, onde ela confirma quem você é. Sem um site ou perfil que responda às dúvidas, o panfleto vira papel no lixo."
    }
  ],
  cover: {
    src: "/blog/panfleto-psicologo/panfleto-psicologo-papeis-mesa.jpg",
    alt: "Folhas de papel coloridas e em branco sobre mesa de madeira ao lado de notebook e café",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Panfleto parece coisa do passado até a psicóloga perceber quantas
        famílias do bairro nunca a acharam no Instagram. Um folder no balcão do
        pediatra ou na mesa de uma palestra chega a quem está perto e já pensa
        em cuidado. A dúvida é se pode e como fazer sem parecer anúncio de
        promoção.
      </p>
      <p>
        A resposta curta: pode. O Conselho não restringe o meio, e panfleto e
        folder estão citados na cartilha do CRP-MG. O que muda é o conteúdo:
        nome completo e CRP, nada de preço como propaganda, promessa ou
        sensacionalismo. Abaixo estão as normas, oito passos do texto à
        distribuição, uma tabela de pode e evitar, erros comuns e um checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          afirma que o Conselho “não restringe os locais e meios de
          publicidade”, citando televisão, rádio, internet, jornais, revistas,
          “panfleto, folder, cartão, outdoor etc.”, e cabe à psicóloga avaliar
          os recursos mais adequados ao público e evitar conflito de interesses.
        </p>
        <p>
          O conteúdo segue o art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          : informar nome completo e número do CRP (alínea a), citar só títulos
          que possui (b), não usar o preço como forma de propaganda (d), não
          fazer previsão taxativa de resultados (e), não se promover em
          detrimento de outros profissionais (f) e não fazer divulgação
          sensacionalista (h). O art. 2º, alínea i, veda induzir pessoas a
          recorrer aos seus serviços. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          reforça esses pontos. Se o panfleto tiver QR code para um formulário,
          a coleta de dados segue a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>
          .
        </p>
      </section>

      <section>
        <h2>1. Decida para que o panfleto serve</h2>
        <p>
          Panfleto sem objetivo vira papel no lixo. Antes de abrir o programa
          de design, responda a uma pergunta: o que a pessoa deve fazer depois
          de ler?
        </p>
        <ul>
          <li><strong>Apresentar o consultório</strong> a quem mora ou trabalha perto.</li>
          <li><strong>Divulgar um serviço específico</strong>, como orientação parental ou avaliação.</li>
          <li><strong>Acompanhar uma palestra</strong> ou um evento, com o seu contato.</li>
          <li><strong>Ficar com parceiros</strong> que indicam você, como pediatras e escolas.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga que acabou de abrir
          consultório num bairro residencial faz um folder para deixar em três
          consultórios pediátricos parceiros, com o objetivo de levar as
          famílias a uma página do site sobre atendimento infantil.
        </p>
        <p>
          O erro comum é querer que um panfleto faça tudo: apresentar a
          psicóloga, listar dez serviços e ainda educar sobre saúde mental. Um
          objetivo por peça. Se o objetivo for informar, um{" "}
          <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
            material educativo
          </Link>{" "}
          funciona melhor que um anúncio.
        </p>
      </section>

      <section>
        <h2>2. O que o panfleto precisa ter</h2>
        <p>
          Alguns itens são obrigatórios pela norma e outros são o mínimo para a
          pessoa conseguir agir. Juntos, cabem num A6.
        </p>
        <ol>
          <li>Nome completo, a palavra psicóloga e o número do CRP.</li>
          <li>Para quem é o atendimento (idade, demanda principal).</li>
          <li>Os serviços, em poucas palavras.</li>
          <li>Formato: presencial (com endereço) e, se houver, online.</li>
          <li>Um contato: WhatsApp ou telefone, e o site.</li>
          <li>Um QR code para a página mais útil do site.</li>
        </ol>
        <p>
          <em>Exemplo fictício:</em> “Renata Alves, psicóloga (CRP 00/00000).
          Atendimento a crianças de 3 a 12 anos e orientação para pais. Rua das
          Acácias, 210, sala 5 · (00) 00000-0000 · renataalves.com.br”.
        </p>
        <p>
          O erro comum é esquecer o CRP ou colocar só o nome fantasia. A
          cartilha permite logomarca e nome artístico, desde que vinculados ao
          nome completo e ao CRP. O post sobre{" "}
          <Link href="/blog/cartao-de-visita-para-psicologo" className="inst-link">
            cartão de visita para psicólogo
          </Link>{" "}
          tem a mesma lista em formato menor.
        </p>
      </section>

      <section>
        <h2>3. O que fica de fora</h2>
        <p>
          Panfleto é o formato em que mais aparecem práticas de varejo:
          “promoção”, “vagas limitadas”, preço em destaque. Nada disso cabe na
          divulgação de psicologia.
        </p>
        <ul>
          <li>Preço, desconto, “primeira sessão grátis”, “preço social” como chamariz.</li>
          <li>Promessas: “acabe com a ansiedade”, “resultados em 10 sessões”.</li>
          <li>Listas de sintomas assustadoras (“seu filho pode ter…”).</li>
          <li>Depoimentos de pacientes ou de familiares.</li>
          <li>Superlativos sem prova: “a melhor”, “referência”, “especialista” sem título.</li>
          <li>Imagens de sessão, divã ou criança atendida.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de troca:</em> “Promoção de inauguração: 50%
          na primeira consulta” vira “Consultório novo no bairro. Atendimento a
          crianças e orientação para pais”.
        </p>
        <p>
          O erro comum é copiar o modelo de panfleto de outras áreas da saúde ou
          de comércio. O guia sobre{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            divulgar preço
          </Link>{" "}
          explica a alínea d em detalhe, e o de{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            título de especialista
          </Link>{" "}
          trata do uso da palavra.
        </p>
      </section>

      <section>
        <h2>4. Escreva o texto em quatro blocos</h2>
        <p>
          O texto de um panfleto se lê em segundos. Quatro blocos curtos dão
          conta: uma frase de abertura, para quem é, como funciona e como
          falar com você.
        </p>
        <ol>
          <li><strong>Abertura:</strong> uma frase que nomeia a situação do leitor, sem drama.</li>
          <li><strong>Para quem:</strong> idade e demandas, em linguagem comum.</li>
          <li><strong>Como funciona:</strong> primeira conversa, formato, participação da família.</li>
          <li><strong>Contato:</strong> nome, CRP, WhatsApp, site e QR code.</li>
        </ol>
        <p>
          <em>Exemplo fictício de abertura:</em> “Quando a rotina com as
          crianças pesa, conversar com alguém ajuda a enxergar o próximo passo.”
          Segue: “Atendo crianças de 3 a 12 anos e oriento os pais. A primeira
          conversa é só com os responsáveis.”
        </p>
        <p>
          O erro comum é encher o panfleto de texto, em letra pequena, ou de
          jargão (“abordagem psicodinâmica com foco em vínculos”). Diga a
          abordagem no site; no panfleto, diga o que a família precisa para
          decidir ligar. O guia de{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          ajuda a achar o registro certo.
        </p>
      </section>

      <section>
        <h2>5. Design: a identidade visual no papel</h2>
        <p>
          O panfleto é a marca na mão de alguém. Ele precisa ser reconhecido
          como seu quando a pessoa encontrar o seu site, a sua placa ou o seu
          Instagram.
        </p>
        <ul>
          <li>Use o logo, as cores e as fontes da sua identidade visual.</li>
          <li>Hierarquia clara: um título, um bloco de texto, o contato em destaque.</li>
          <li>Texto corrido com pelo menos 9 a 10 pontos e bom contraste com o fundo.</li>
          <li>Espaço em branco: um panfleto respirando parece mais cuidadoso.</li>
          <li>Imagem só se ajudar: o espaço do consultório, uma ilustração, sua foto.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> folder em A5 dobrado ao meio, capa com
          o logo e uma frase, miolo com para quem e como funciona, verso com
          contato, endereço e QR code.
        </p>
        <p>
          O erro comum é usar um modelo pronto de aplicativo de design, com
          cores e fontes que não têm nada a ver com o consultório. Se você ainda
          não tem identidade, comece por ela; o guia de{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>{" "}
          mostra o caminho, e o de{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria do consultório
          </Link>{" "}
          mostra como as peças conversam.
        </p>
      </section>

      <section>
        <h2>6. Formato, papel e impressão</h2>
        <p>
          Formato e papel mudam a impressão que o material causa. Um panfleto
          fino em papel brilhante lembra delivery; um folder em papel fosco
          mais encorpado lembra cuidado.
        </p>
        <ol>
          <li><strong>A6 (10,5 × 14,8 cm):</strong> bom para balcão e para acompanhar palestras.</li>
          <li><strong>A5 dobrado:</strong> folder com mais espaço, para apresentar serviços.</li>
          <li><strong>Papel fosco</strong> de gramatura média, que não amassa fácil.</li>
          <li><strong>Prova impressa</strong> antes da tiragem, para conferir cores e leitura.</li>
          <li><strong>Tiragem pequena</strong> na primeira vez, para testar e ajustar.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> primeira tiragem de 200 unidades em
          A6, distribuídas em quatro parceiros. Depois de dois meses, a
          psicóloga ajusta o texto e imprime de novo.
        </p>
        <p>
          O erro comum é imprimir milhares de unidades para baratear e ficar
          anos com material desatualizado, com telefone antigo ou serviço que
          mudou. Imprima o que você distribui em poucos meses.
        </p>
      </section>

      <section>
        <h2>7. Onde distribuir, e onde não</h2>
        <p>
          O lugar diz tanto quanto o texto. O panfleto funciona onde as pessoas
          já pensam em cuidado e onde você tem autorização para deixá-lo.
        </p>
        <ul>
          <li><strong>Parceiros:</strong> consultórios pediátricos, escolas, clínicas de outras áreas, com combinado.</li>
          <li><strong>Eventos:</strong> palestras, rodas de conversa, feiras de saúde do bairro.</li>
          <li><strong>Sua recepção:</strong> para pacientes levarem a quem perguntar.</li>
          <li><strong>Comércio local</strong> com mural de serviços, se o dono permitir.</li>
        </ul>
        <p>
          <em>Exemplo fictício de combinado:</em> “Posso deixar alguns folders
          na sua recepção? Se alguma família perguntar por psicóloga infantil,
          ela leva. Não precisa indicar ativamente.”
        </p>
        <p>
          Evite distribuir na porta de hospitais, prontos-socorros ou serviços
          de saúde mental, e abordar pessoas na rua oferecendo atendimento:
          quem está ali pode estar vulnerável, e a abordagem se aproxima de
          induzir alguém a recorrer aos seus serviços. Panfletagem em via
          pública também pode ter regras da prefeitura; confira antes. O guia de{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria com pediatras
          </Link>{" "}
          ajuda a abrir essas portas.
        </p>
      </section>

      <section>
        <h2>8. QR code e como saber se funcionou</h2>
        <p>
          O QR code liga o papel ao digital e permite saber quantas pessoas
          chegaram pelo panfleto. Ele precisa levar a uma página útil, não à
          home genérica.
        </p>
        <ol>
          <li>Aponte o QR code para a página do serviço divulgado.</li>
          <li>Use um link com marcação de origem (por exemplo, ?origem=folder-pediatra) para ver no relatório do site.</li>
          <li>Teste o QR code impresso em dois celulares antes da tiragem.</li>
          <li>Se o QR levar a formulário, diga para que os dados serão usados e peça consentimento.</li>
          <li>No primeiro contato, pergunte como a pessoa conheceu você.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> folders com links diferentes para cada
          parceiro mostram, depois de três meses, que um consultório pediátrico
          traz mais visitas que os outros três juntos.
        </p>
        <p>
          O erro comum é um QR code que leva ao Instagram, onde a pessoa se
          perde em posts. Uma{" "}
          <Link href="/blog/pagina-de-servicos-psicologo" className="inst-link">
            página de serviços bem feita
          </Link>{" "}
          converte melhor.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no panfleto do consultório</h2>
        <div className="inst-blog__table" role="region" aria-label="Panfleto para psicólogo: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Panfleto para psicólogo: o que pode e o que evitar</caption>
            <thead>
              <tr>
                <th scope="col">Tema</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome completo, psicóloga, CRP, logo</td>
                <td>Só nome fantasia ou apelido</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>Informar em conversa quando perguntam</td>
                <td>Preço, desconto ou sessão grátis no papel</td>
              </tr>
              <tr>
                <td>Texto</td>
                <td>Para quem é e como funciona</td>
                <td>Promessa de resultado ou lista de sintomas</td>
              </tr>
              <tr>
                <td>Imagem</td>
                <td>Consultório vazio, ilustração, sua foto</td>
                <td>Sessão, divã, criança atendida</td>
              </tr>
              <tr>
                <td>Distribuição</td>
                <td>Parceiros com autorização, eventos, recepção</td>
                <td>Porta de hospital, abordagem na rua</td>
              </tr>
              <tr>
                <td>QR code</td>
                <td>Página do serviço, com origem marcada</td>
                <td>Formulário sem finalidade nem consentimento</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já usa panfleto: troque o anúncio por informação</h2>
        <p>
          Quem já distribui panfletos pode dar um passo além: transformar a
          peça num material que a pessoa guarda. Um folder com informação útil
          (como funciona a primeira consulta, quando procurar ajuda, como
          conversar com a criança sobre a terapia) tende a ficar na geladeira,
          enquanto o anúncio vai para o lixo.
        </p>
        <p>
          Mantenha a identificação completa e o contato no verso, e deixe o
          miolo informativo, respaldado na ciência psicológica e sem orientar
          casos específicos, como pede a cartilha do CRP-MG para conteúdos
          educativos. Esse formato também é mais bem recebido por escolas e
          consultórios parceiros, que preferem não parecer vitrine de
          propaganda. Se você faz eventos, o guia de{" "}
          <Link href="/blog/psicologo-palestra-para-pais" className="inst-link">
            palestra para pais
          </Link>{" "}
          mostra como o material entra no fim do encontro.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para famílias de crianças autistas e neurodivergentes, o panfleto
          costuma chegar por um caminho de cuidado: o balcão do neuropediatra, a
          escola, a fono. A família está atenta e, muitas vezes, cansada. O
          material precisa ser claro e respeitoso.
        </p>
        <ul>
          <li>
            <strong>Linguagem neuroafirmativa:</strong> “criança autista”, sem
            “portador”, “sofre de” ou cura; veja{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
          <li>
            <strong>Sem quebra-cabeça</strong> e sem imagens infantilizadas;
            parte da comunidade autista rejeita o símbolo.
          </li>
          <li>
            <strong>Diga o que você faz:</strong> orientação parental,
            avaliação, acompanhamento, e como a família participa.
          </li>
          <li>
            <strong>Pense na leitura:</strong> frases curtas, fonte grande, sem
            excesso de cores. Muitos pais também são neurodivergentes.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            como divulgar orientação parental
          </Link>{" "}
          traz textos que se adaptam bem ao papel.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Esquecer o CRP ou usar só o nome fantasia.</li>
          <li>Preço, desconto ou “primeira sessão grátis” em destaque.</li>
          <li>Prometer resultado ou listar sintomas para assustar.</li>
          <li>Modelo pronto que não tem nada da sua identidade visual.</li>
          <li>Texto demais, em letra pequena.</li>
          <li>Distribuir sem autorização ou em lugares de vulnerabilidade.</li>
          <li>QR code para a home ou para o Instagram, sem medir a origem.</li>
          <li>Tiragem enorme que fica desatualizada.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de imprimir</h2>
        <ul>
          <li>O panfleto tem um objetivo só e uma ação clara.</li>
          <li>Nome completo, psicóloga e CRP estão visíveis.</li>
          <li>Não há preço, desconto, promessa, depoimento ou superlativo.</li>
          <li>O texto cabe em quatro blocos curtos.</li>
          <li>Logo, cores e fontes são da sua identidade visual.</li>
          <li>Letra legível e contraste conferidos na prova impressa.</li>
          <li>QR code testado, com origem marcada e página útil.</li>
          <li>Locais de distribuição combinados com quem autoriza.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar. Daí saem
          o posicionamento, a identidade visual, as peças que você precisa e o
          site para onde o QR code leva, revisados pelo art. 20. Tudo é
          apresentado em até 30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se o seu material impresso ainda não parece com o seu consultório,
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
            , arts. 2º (alínea i) e 20 (alíneas a, b, d, e, f, h).
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026 (formas e locais de divulgação,
            identificação, conteúdos educativos).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022
            </a>
            .
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
