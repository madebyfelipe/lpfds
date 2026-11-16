import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const WCAG = "https://www.w3.org/TR/WCAG21/";

export const post: Post = {
  slug: "manual-de-marca-psicologo",
  title: "Manual de marca para consultório de psicologia: o que incluir em 8 partes",
  description:
    "O que um manual de marca para consultório de psicologia precisa ter: logo, cores, fontes, imagens, tom de voz, aplicações e o bloco de identificação do art. 20.",
  keyword: "manual de marca para consultório de psicologia",
  tags: ["identidade-visual"],
  publishedAt: "2026-11-13",
  summary:
    "O manual de marca é o documento que diz como usar a identidade do consultório: versões do logo, cores com códigos, fontes, estilo de imagem, tom de voz e exemplos de aplicação. Para psicólogas, ele tem uma parte que outras áreas não têm: o bloco de identificação do art. 20 (nome completo ou nome social, psicóloga, CRP e número) e a lista do que a marca nunca mostra, como sessão, paciente ou promessa. Um manual de 10 a 20 páginas costuma bastar para um consultório.",
  faq: [
    {
      q: "O que é manual de marca?",
      a: "É o documento que reúne as regras de uso da identidade visual e verbal de uma marca: logo, cores, tipografia, imagens, tom de voz e exemplos de aplicação. Ele existe para que qualquer pessoa, seja você, uma secretária ou um designer contratado depois, aplique a marca do mesmo jeito em todos os lugares."
    },
    {
      q: "Consultório pequeno precisa de manual de marca?",
      a: "Precisa de uma versão enxuta. Mesmo quem trabalha sozinha troca de designer, contrata alguém para as redes ou monta a papelaria em uma gráfica nova. Sem manual, cada pessoa interpreta a marca de um jeito, e a identidade se perde em poucos meses."
    },
    {
      q: "Qual a diferença entre manual de marca e identidade visual?",
      a: "A identidade visual é o conjunto de elementos (logo, cores, fontes, grafismos). O manual de marca é o documento que explica como usar esses elementos, com medidas, códigos de cor e exemplos certos e errados. Um sem o outro funciona mal: identidade sem manual se desfigura; manual sem identidade bem pensada não tem o que proteger."
    },
    {
      q: "O manual de marca precisa ter regras do CFP?",
      a: "Para consultório de psicologia, é recomendável. O art. 20 do Código de Ética exige nome completo, CRP e número em toda divulgação, e a cartilha do CRP-MG lembra que logomarcas só são permitidas vinculadas a essa identificação. Colocar essas regras no manual evita que alguém crie uma peça só com o logo."
    },
    {
      q: "Quantas páginas tem um manual de marca?",
      a: "Depende do tamanho da marca. Para um consultório individual, de 10 a 20 páginas cobrem o essencial. Clínicas com equipe e várias unidades costumam precisar de mais seções, como regras para cada profissional e sinalização."
    }
  ],
  cover: {
    src: "/blog/manual-de-marca-psicologo/manual-de-marca-psicologo-amostras-de-cor.jpg",
    alt: "Leque de amostras de cor, folhas brancas e óculos sobre fundo vermelho, cena de criação do manual de marca",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        O logo ficou pronto, as cores foram escolhidas e o site está no ar. Seis
        meses depois, o cartão de visita saiu com um verde diferente, a
        secretária esticou o logo para caber no banner e a pessoa que cuida do
        Instagram trocou a fonte “porque combinava mais”. Nada disso é má
        vontade. É falta de um documento que diga como a marca funciona.
      </p>
      <p>
        A resposta curta: o manual de marca é esse documento. Ele reúne as
        regras de logo, cores, fontes, imagens, tom de voz e aplicações, e, no
        caso do consultório de psicologia, inclui o bloco de identificação do
        art. 20 e a lista do que a marca nunca mostra. A seguir estão as normas
        que entram no manual, as oito partes que ele precisa ter, uma tabela de
        pode e evitar e os cuidados para quem atende famílias de crianças
        autistas e neurodivergentes.
      </p>

      <section>
        <h2>Por que o consultório precisa de um manual</h2>
        <p>
          A marca é reconhecida pela repetição. Quando o mesmo logo, as mesmas
          cores e o mesmo jeito de escrever aparecem no site, no Google, na placa
          e no WhatsApp, a pessoa associa tudo a você. Quando cada peça sai de um
          jeito, ela vê várias marcas pequenas e nenhuma fica na memória.
        </p>
        <p>
          O manual também economiza tempo. Em vez de explicar a cada gráfica ou
          designer como a marca funciona, você envia o arquivo. E protege o
          investimento: uma identidade bem pensada, como a descrita no post sobre{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          , perde valor rápido se ninguém souber aplicá-la.
        </p>
      </section>

      <section>
        <h2>O que dizem as normas que entram no manual</h2>
        <p>
          Não há norma do CFP sobre manual de marca, mas várias regras de
          publicidade precisam estar nele. O{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>{" "}
          exige, em toda divulgação, nome completo, CRP e número de registro, e
          veda preço como propaganda, previsão taxativa de resultados,
          autopromoção em detrimento de colegas e divulgação sensacionalista. A{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>
          , no art. 53, pede ainda a palavra “psicólogo” junto do nome e do CRP.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          diz que “o uso de apelidos, artes e logomarcas é permitido desde que
          estejam vinculados ao nome completo, CRP e número de inscrição”, e que o
          nome social pode substituir o nome civil. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica essas regras ao digital. Para acessibilidade, as{" "}
          <a href={WCAG} {...ext}>
            diretrizes WCAG 2.1
          </a>{" "}
          pedem contraste mínimo de 4,5:1 para texto comum e 3:1 para elementos
          gráficos importantes. Essas três frentes viram páginas do manual.
        </p>
      </section>

      <section>
        <h2>1. Essência: posicionamento e público em uma página</h2>
        <p>
          A primeira página explica o porquê da marca. Sem ela, quem aplica a
          identidade decide pelo gosto e não pela estratégia.
        </p>
        <ul>
          <li>
            <strong>Para quem é o consultório:</strong> o público principal em
            uma frase.
          </li>
          <li>
            <strong>O que você faz e como:</strong> serviços e abordagem, sem
            jargão.
          </li>
          <li>
            <strong>Três palavras da personalidade:</strong> por exemplo,
            “calma, clara, próxima”.
          </li>
          <li>
            <strong>O que a marca não é:</strong> “não é infantilizada”, “não é
            clínica fria”.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> “Consultório de psicologia para famílias
          de crianças neurodivergentes. Atendimento presencial e online,
          orientação a pais e articulação com a escola. Personalidade: calma,
          clara, prática. A marca não usa clichês infantis nem linguagem de
          alerta.”
        </p>
        <p>
          <strong>Erro comum:</strong> pular essa página por achar óbvia. Para
          você, é; para o designer que vai fazer o banner daqui a um ano, não. O
          post sobre{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          ajuda a escrever esse resumo.
        </p>
      </section>

      <section>
        <h2>2. Logo: versões, área de proteção e usos proibidos</h2>
        <p>
          O logo é a peça mais usada e a mais maltratada. O manual mostra cada
          versão e diz quando usar.
        </p>
        <ol>
          <li>
            <strong>Versões:</strong> principal (horizontal), vertical, reduzida
            (símbolo ou monograma para avatar) e versões em uma cor, positiva e
            negativa.
          </li>
          <li>
            <strong>Área de proteção:</strong> o espaço livre ao redor do logo,
            medido por um elemento dele (por exemplo, a altura de uma letra).
          </li>
          <li>
            <strong>Tamanho mínimo:</strong> em pixels para tela e em milímetros
            para impressão, abaixo do qual o logo perde leitura.
          </li>
          <li>
            <strong>Usos proibidos:</strong> esticar, girar, trocar cores, aplicar
            sombra, colocar sobre foto sem contraste.
          </li>
          <li>
            <strong>Identificação junto do logo:</strong> como o nome completo, a
            palavra psicóloga e o CRP acompanham o logo em cada versão.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> o manual de um consultório fictício mostra
          o logo horizontal com, logo abaixo, a linha “Ana Souza · Psicóloga · CRP
          00/00000”, e uma página com seis exemplos de uso errado marcados com um
          X.
        </p>
        <p>
          <strong>Erro comum:</strong> entregar só o arquivo do logo em PNG
          colorido. Sem versões em uma cor e sem vetor, a gráfica improvisa. O post
          sobre{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>{" "}
          mostra outros cuidados com o símbolo.
        </p>
      </section>

      <section>
        <h2>3. Cores: códigos, proporção e contraste</h2>
        <p>
          A página de cores dá os códigos exatos e diz quanto de cada cor usar.
          Sem isso, o verde da marca vira cinco verdes diferentes.
        </p>
        <ul>
          <li>
            <strong>Códigos para cada uso:</strong> HEX e RGB para tela, CMYK
            para impressão e, se houver placa ou tecido, referência de cor
            impressa (como uma escala de cor de gráfica).
          </li>
          <li>
            <strong>Proporção:</strong> qual cor é a base, qual é a de apoio e
            qual é o destaque usado com moderação.
          </li>
          <li>
            <strong>Combinações aprovadas:</strong> texto escuro sobre fundo
            claro, texto claro sobre a cor principal, com o contraste medido.
          </li>
          <li>
            <strong>Combinações proibidas:</strong> pares que não passam no
            contraste mínimo das WCAG.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> paleta fictícia com areia como base,
          verde-musgo como cor principal e terracota como destaque. O manual
          avisa que texto em terracota sobre areia não passa no contraste para
          letras pequenas e só pode aparecer em títulos grandes.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher a paleta só pela harmonia e
          descobrir depois que o texto fica ilegível no celular. O post sobre{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          explica como escolher.
        </p>
      </section>

      <section>
        <h2>4. Tipografia: famílias, hierarquia e substitutas</h2>
        <p>
          As fontes dão voz visual à marca. O manual define quais usar, para quê
          e o que fazer quando elas não estiverem disponíveis.
        </p>
        <ol>
          <li>
            <strong>Fonte de títulos e fonte de texto</strong>, com os pesos
            permitidos.
          </li>
          <li>
            <strong>Hierarquia:</strong> tamanhos relativos de título, subtítulo,
            texto e legenda.
          </li>
          <li>
            <strong>Fonte substituta</strong> para quando a principal não existir,
            como no Word de uma escola ou em ferramentas on-line.
          </li>
          <li>
            <strong>Licença:</strong> onde a fonte pode ser usada (site,
            impresso, aplicativos) e quem tem o arquivo.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Títulos em uma fonte sem serifa
          geométrica, peso semibold; textos na mesma família, peso regular. Na
          falta dela, usar Arial. Nunca usar fontes manuscritas para textos
          longos.”
        </p>
        <p>
          <strong>Erro comum:</strong> usar uma fonte decorativa no texto todo
          porque “é fofa”. Para famílias que leem cansadas ou para leitores
          disléxicos, fontes muito estilizadas dificultam a leitura.
        </p>
      </section>

      <section>
        <h2>5. Imagens: estilo e o que a marca nunca mostra</h2>
        <p>
          A página de imagens é onde o manual do consultório mais se diferencia
          de outras áreas. Além do estilo, ela lista o que o art. 20 e o sigilo
          tiram de cena.
        </p>
        <ul>
          <li>
            <strong>Estilo:</strong> luz natural ou estúdio, cores alinhadas à
            paleta, enquadramento, presença ou não de pessoas.
          </li>
          <li>
            <strong>O que usar:</strong> o espaço do consultório, objetos,
            texturas, detalhes da identidade e fotos suas, como orienta o post
            sobre{" "}
            <Link href="/blog/foto-profissional-para-psicologo" className="inst-link">
              foto profissional para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>O que nunca usar:</strong> sessão, paciente, criança atendida,
            divã, testes psicológicos, material de atendimento, “antes e
            depois”.
          </li>
          <li>
            <strong>Banco de imagem:</strong> só com licença comercial e crédito
            registrado.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> o manual de uma clínica fictícia mostra
          quatro fotos aprovadas (sala vazia com luz da manhã, estante, mesa com
          caderno, retrato da psicóloga) e quatro proibidas (criança desenhando,
          mãos de paciente, divã, folha de teste).
        </p>
        <p>
          <strong>Erro comum:</strong> usar foto de banco com criança sorrindo
          “porque não é paciente de verdade”. Para quem vê, a imagem sugere
          atendimento infantil com resultado, e é isso que a regra quer evitar.
        </p>
      </section>

      <section>
        <h2>6. Tom de voz e slogan</h2>
        <p>
          A marca também fala. O manual define como ela escreve, com exemplos
          concretos, para que site, legendas e mensagens de WhatsApp soem como a
          mesma pessoa.
        </p>
        <ol>
          <li>
            <strong>Três ou quatro princípios de escrita:</strong> “frases curtas”,
            “explicar termos técnicos”, “acolher sem infantilizar”.
          </li>
          <li>
            <strong>Exemplos de “é assim / não é assim”</strong> em situações
            reais: bio, legenda, resposta a pedido de horário.
          </li>
          <li>
            <strong>Palavras que a marca usa e evita.</strong> “Acompanhamento”
            sim; “cura” e “garantido” nunca.
          </li>
          <li>
            <strong>Slogan</strong> e as regras de uso dele.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “É assim: ‘Atendo famílias de crianças
          autistas, presencial e online. Para conversar, chame no WhatsApp.’ Não é
          assim: ‘Transforme a vida do seu filho! Vagas limitadas!’”
        </p>
        <p>
          <strong>Erro comum:</strong> deixar o tom de voz fora do manual. As
          peças podem estar visualmente certas e soar como outra marca. Veja os
          posts sobre{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz para psicólogo
          </Link>{" "}
          e{" "}
          <Link href="/blog/slogan-para-psicologo" className="inst-link">
            slogan para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>7. Aplicações: exemplos prontos para copiar</h2>
        <p>
          As páginas de aplicação mostram a marca no mundo real. São as que mais
          ajudam quem vai produzir uma peça nova.
        </p>
        <ul>
          <li>
            <strong>Digital:</strong> avatar e destaques do Instagram, modelo de
            post e de carrossel, cabeçalho do site, assinatura de e-mail, perfil
            do Google.
          </li>
          <li>
            <strong>Impresso:</strong> cartão de visita, receituário ou papel
            timbrado, folder, envelope.
          </li>
          <li>
            <strong>Espaço físico:</strong> placa da porta, sinalização interna,
            adesivo de vidro.
          </li>
          <li>
            <strong>Documentos:</strong> modelo de contrato, de declaração e de
            material para famílias.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma página mostra o cartão de visita
          frente e verso com medidas, papel e acabamento, e o texto exato do
          verso: nome completo, psicóloga, CRP, endereço, site e WhatsApp.
        </p>
        <p>
          <strong>Erro comum:</strong> fazer o manual só com teoria. Sem exemplos
          aplicados, cada pessoa inventa o próprio jeito. Os posts sobre{" "}
          <Link href="/blog/papelaria-consultorio-psicologia" className="inst-link">
            papelaria para consultório
          </Link>{" "}
          e{" "}
          <Link href="/blog/placa-consultorio-psicologia" className="inst-link">
            placa para consultório
          </Link>{" "}
          detalham essas peças.
        </p>
      </section>

      <section>
        <h2>8. Conformidade: o bloco de identificação e a lista do art. 20</h2>
        <p>
          A última parte é a que só o manual de uma psicóloga precisa ter. Ela
          transforma as regras de publicidade em instruções que qualquer pessoa
          consegue seguir.
        </p>
        <ol>
          <li>
            <strong>Bloco de identificação:</strong> o texto exato com nome
            completo ou nome social, a palavra psicóloga, a sigla do CRP e o
            número, em versões curta e longa.
          </li>
          <li>
            <strong>Onde o bloco aparece:</strong> bio, rodapé do site, verso do
            cartão, placa, descrição de vídeos, fim de materiais.
          </li>
          <li>
            <strong>Lista do que a marca não faz:</strong> preço como chamariz,
            promessa de resultado, superlativo, depoimento de paciente, imagem de
            sessão.
          </li>
          <li>
            <strong>Pessoa jurídica:</strong> se houver nome fantasia, como ele
            aparece junto do responsável técnico e do registro da empresa.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> versão curta “Ana Souza · Psicóloga · CRP
          00/00000”; versão longa “Ana Souza, psicóloga, CRP 00/00000. Atendimento
          a famílias de crianças neurodivergentes, presencial e online.”
        </p>
        <p>
          <strong>Erro comum:</strong> confiar que “todo mundo sabe” das regras.
          A pessoa que faz o anúncio ou o designer freelancer muitas vezes não
          sabe. Para PJ, leia o post sobre{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            CNPJ e nome fantasia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Manual de marca: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Manual de marca do consultório: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Manual de marca do consultório: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">No manual</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Logo sempre acompanhado de nome completo, psicóloga e CRP</td><td>Sim</td></tr>
              <tr><td>Paleta com combinações testadas no contraste WCAG</td><td>Sim</td></tr>
              <tr><td>Fotos do espaço, objetos e retrato da psicóloga</td><td>Sim</td></tr>
              <tr><td>Exemplos de texto “é assim / não é assim”</td><td>Sim</td></tr>
              <tr><td>Modelo de post com “primeira sessão grátis”</td><td>Não (preço como propaganda)</td></tr>
              <tr><td>Foto de banco com criança em atendimento</td><td>Não (art. 20 e sigilo)</td></tr>
              <tr><td>Slogan “a melhor terapia para seu filho”</td><td>Não (superlativo e promessa)</td></tr>
              <tr><td>Logo sozinho, sem identificação, em anúncios</td><td>Não (art. 20, a)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para clínicas e equipes: o manual como acordo</h2>
        <p>
          Em clínica com mais de uma profissional, o manual ganha outra função:
          vira o acordo sobre como cada pessoa aparece sob a marca comum. Ele
          define como o nome e o CRP de cada psicóloga entram nas peças, como
          profissionais de outras áreas aparecem (com o registro do conselho de
          cada uma) e quem aprova peças novas.
        </p>
        <p>
          Inclua também uma versão de uma página, um “guia rápido”, com logo,
          cores, fontes, bloco de identificação e a lista do que não fazer. É essa
          página que a recepção e a pessoa das redes vão consultar no dia a dia. O
          documento completo fica para designers e gráficas.
        </p>
        <p>
          Por fim, trate o manual como documento vivo. Ponha a data da versão na
          capa e revise quando a marca ganhar uma peça nova ou quando uma norma
          mudar. O post sobre{" "}
          <Link href="/blog/marca-clinica-multidisciplinar-autismo" className="inst-link">
            marketing para clínica multidisciplinar de autismo
          </Link>{" "}
          mostra como organizar várias profissões sob uma marca.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          A marca de quem atende essas famílias aparece em lugares sensíveis: na
          mochila da criança, na reunião da escola, no grupo de pais. O manual
          ajuda a manter o cuidado em todos eles.
        </p>
        <ul>
          <li>
            <strong>Regras de linguagem neuroafirmativa</strong> na página de tom
            de voz, com a lista de termos usados e evitados. Veja o post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
          <li>
            <strong>Símbolos que a marca não usa:</strong> quebra-cabeça e clichês
            infantis, quando o posicionamento pede sobriedade.
          </li>
          <li>
            <strong>Cuidados sensoriais:</strong> paleta sem cores saturadas
            demais em grandes áreas, sem animações piscantes no digital, com
            espaço em branco nos materiais.
          </li>
          <li>
            <strong>Modelos de material para famílias</strong>, com rodapé e
            fontes acessíveis, como no post sobre{" "}
            <Link href="/blog/material-educativo-pais-autismo" className="inst-link">
              material educativo para pais de crianças autistas
            </Link>
            .
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> o manual de um consultório fictício proíbe
          GIFs e vídeos com cortes rápidos no Instagram e define uma paleta de
          tons terrosos, coerente com o espaço físico sensorialmente calmo.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Entregar só o arquivo do logo, sem manual.</li>
          <li>Manual só com teoria, sem exemplos aplicados.</li>
          <li>Cores sem códigos CMYK ou sem teste de contraste.</li>
          <li>Fonte sem substituta nem licença registrada.</li>
          <li>Nenhuma regra sobre imagens proibidas.</li>
          <li>Esquecer o bloco de identificação do art. 20.</li>
          <li>Manual que nunca é revisado.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do manual de marca</h2>
        <ul>
          <li>Página de essência: público, serviço, personalidade.</li>
          <li>Logo: versões, área de proteção, tamanho mínimo, usos proibidos.</li>
          <li>Cores: HEX, RGB, CMYK, proporção e contraste.</li>
          <li>Tipografia: famílias, hierarquia, substituta, licença.</li>
          <li>Imagens: estilo, o que usar e o que nunca usar.</li>
          <li>Tom de voz, palavras usadas e evitadas, slogan.</li>
          <li>Aplicações digitais, impressas e no espaço físico.</li>
          <li>Bloco de identificação e lista do art. 20.</li>
          <li>Guia rápido de uma página e data da versão.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, o manual de marca é parte da entrega da identidade
          do consultório. Ele nasce da imersão de dois encontros, junto com o
          posicionamento, o tom de voz e as aplicações, e a marca é entregue em até
          30 dias, com o bloco de identificação do art. 20 já previsto em cada
          peça. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser organizar a marca do seu consultório, marque uma conversa de
          15 minutos.
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
            , arts. 53 a 58.
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
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
            , critérios 1.4.3 e 1.4.11.
          </li>
        </ul>
      </section>
    </>
  )
};
