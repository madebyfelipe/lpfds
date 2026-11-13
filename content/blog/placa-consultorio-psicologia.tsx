import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const CIDADE_LIMPA = "https://www.prefeitura.sp.gov.br/cidade/upload/lei_14_223_1254941069.pdf";
const DIRETRIZES = "https://support.google.com/business/answer/3038177?hl=pt-BR";

export const post: Post = {
  slug: "placa-consultorio-psicologia",
  title: "Placa para consultório de psicologia: o que colocar, o que evitar e as regras da fachada",
  description:
    "Placa para consultório de psicologia: dados obrigatórios do art. 20, o que deixar de fora, regras da prefeitura e do prédio, legibilidade e sigilo de quem entra.",
  keyword: "placa para consultório de psicologia",
  tags: ["identidade-visual", "divulgacao-etica"],
  publishedAt: "2026-11-13",
  summary:
    "A placa do consultório é publicidade profissional, então segue o art. 20 do Código de Ética: nome completo ou nome social, a palavra psicóloga(o) e o CRP com número, sem preço, promessa ou superlativo. Fora da ética, valem as regras da prefeitura para anúncios na fachada e as do condomínio. Uma boa placa é legível de onde a pessoa chega, usa o mesmo nome do Perfil da Empresa no Google e é discreta o bastante para preservar quem entra.",
  faq: [
    {
      q: "O que é obrigatório na placa de consultório de psicologia?",
      a: "Nome completo ou nome social, a palavra psicóloga(o), o CRP da região e o número de inscrição. Logo, apelido e nome fantasia podem entrar, desde que acompanhados desses dados. Se a placa for de uma pessoa jurídica, entram o nome da empresa e a inscrição dela no CRP."
    },
    {
      q: "Precisa de autorização da prefeitura para colocar placa?",
      a: "Depende da cidade. Muitas exigem licença para anúncio na fachada e limitam tamanho e posição. Em São Paulo, a Lei nº 14.223/2006 (Cidade Limpa) permite um único anúncio indicativo por imóvel, com área máxima ligada à largura da frente do imóvel. Consulte a prefeitura e o condomínio antes de encomendar."
    },
    {
      q: "Posso colocar na placa as abordagens e o público que atendo?",
      a: "Pode, desde que seja informação verdadeira e sem promessa. A cartilha do CRP-MG permite destacar o público, a abordagem e os serviços. Na prática, placa lida de longe funciona melhor com pouco texto: nome, psicóloga(o), CRP e, no máximo, uma linha sobre o atendimento."
    },
    {
      q: "Placa de consultório pode ter o preço da sessão?",
      a: "Não. O art. 20, alínea d, do Código de Ética veda usar o preço como forma de propaganda, e a cartilha do CRP-MG inclui gratuidade, desconto e preço social na mesma vedação."
    },
    {
      q: "O nome da placa precisa ser igual ao do Google?",
      a: "Não há regra do CFP sobre isso, mas as diretrizes do Perfil da Empresa no Google pedem que você represente a empresa como ela é vista e reconhecida no mundo real, de forma consistente com a identidade visual, a papelaria e outros materiais de marca. Placa e perfil com o mesmo nome ajudam o paciente a ter certeza de que chegou ao lugar certo."
    }
  ],
  cover: {
    src: "/blog/placa-consultorio-psicologia/placa-consultorio-psicologia-parede-de-concreto.jpg",
    alt: "Placa em branco com moldura fina numa parede de concreto, acima de um banco de madeira com vasos pequenos",
    caption: "Foto: rawpixel.com / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A placa é a primeira peça da marca que o paciente vê fora da tela. Ela
        confirma que ele chegou ao lugar certo, num momento em que muita gente
        já está ansiosa. E é uma das peças mais fáceis de errar: texto demais,
        letra pequena, CRP esquecido, ou uma frase que a gráfica sugeriu e que
        o Código de Ética não aceita.
      </p>
      <p>
        A resposta curta: a placa para consultório de psicologia traz nome
        completo ou nome social, “psicóloga(o)” e CRP, segue as regras da
        prefeitura e do prédio, e é desenhada para ser lida de onde a pessoa
        chega. Abaixo, o que dizem as normas, os tipos de placa, o que pode e o
        que evitar, como resolver legibilidade e sigilo, e um checklist para
        mandar à gráfica.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A placa é publicidade profissional. O{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>{" "}
          vale para qualquer meio de divulgação: a psicóloga informa o nome
          completo, o CRP e o número de registro, cita só títulos que possui,
          não usa preço como propaganda, não faz previsão taxativa de
          resultados, não se promove em detrimento de colegas e não faz
          divulgação sensacionalista.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          detalha o formato: nome completo ou nome social, a palavra
          psicóloga(o), o regional do CRP e o número de inscrição, como em “CRP
          04/XXXX”. Apelidos, artes e logomarcas são permitidos quando
          vinculados a esses dados. A cartilha também diz que o Conselho não
          restringe locais e meios de divulgação, citando panfleto, folder,
          cartão e outdoor. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          repete a regra do nome e do CRP para logomarcas.
        </p>
        <p>
          A ética é só uma camada. A outra é a lei municipal sobre anúncios,
          que muda de cidade para cidade, e a terceira é a convenção do prédio
          ou do centro comercial.
        </p>
      </section>

      <section>
        <h2>1. O que a placa precisa ter</h2>
        <p>
          Três dados não podem faltar: nome completo ou nome social,
          “psicóloga” ou “psicólogo”, e o CRP com a região e o número.
        </p>
        <ol>
          <li>
            <strong>Nome:</strong> o mesmo que aparece no CRP, ou o nome social
            registrado. A cartilha do CRP-MG entende que abreviar sobrenomes não
            é decisivo, desde que o CRP identifique a profissional.
          </li>
          <li>
            <strong>Profissão:</strong> “Psicóloga” ou “Psicólogo”, por extenso.
          </li>
          <li>
            <strong>Registro:</strong> “CRP 06/00000”, com a região.
          </li>
          <li>
            <strong>Pessoa jurídica:</strong> se a placa é da clínica, o nome
            da empresa (razão social ou nome fantasia) e a inscrição dela no
            CRP, como a cartilha descreve.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> “Ana Souza · Psicóloga · CRP 00/00000”
          numa placa de porta de 30 por 20 centímetros, com o símbolo da marca à
          esquerda. Nada mais. Quem chega lê em dois segundos.
        </p>
        <p>
          O erro comum é a placa com logo e nome fantasia grandes e o CRP
          minúsculo no canto, ilegível a um metro. O CRP é obrigatório; ele
          precisa ser lido.
        </p>
      </section>

      <section>
        <h2>2. O que pode entrar e o que fica de fora</h2>
        <p>
          Além dos dados obrigatórios, a cartilha permite destacar o público
          atendido, a abordagem e os serviços. Na placa, o espaço é curto, então
          escolha uma informação só, se escolher alguma.
        </p>
        <ul>
          <li><strong>Pode:</strong> “Psicologia infantil e orientação parental”.</li>
          <li><strong>Pode:</strong> “Atendimento presencial e online”.</li>
          <li><strong>Pode:</strong> título que você tem, como “Especialista em Neuropsicologia (CFP)”, se o título for registrado.</li>
          <li><strong>Evite:</strong> “Dra.” sem doutorado; a cartilha reserva o termo a quem tem o título.</li>
          <li><strong>Evite:</strong> preço, “primeira sessão grátis”, “valor social”.</li>
          <li><strong>Evite:</strong> “a melhor clínica do bairro”, “referência em autismo”.</li>
          <li><strong>Evite:</strong> promessas como “fim da ansiedade”.</li>
        </ul>
        <p>
          O erro comum é transformar a placa em folder, com lista de
          especialidades, telefone, Instagram e QR code. Se quiser um QR code,
          coloque numa peça menor, perto da porta, levando ao site. Para saber
          quando usar “especialista”, veja o post sobre{" "}
          <Link href="/blog/psicologo-titulo-de-especialista" className="inst-link">
            título de especialista
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Tipos de placa e onde cada uma funciona</h2>
        <p>
          O tipo de placa depende de onde o paciente procura o consultório:
          na rua, no corredor de um prédio comercial ou numa casa adaptada.
        </p>
        <ul>
          <li>
            <strong>Placa de porta:</strong> a mais comum em prédio comercial.
            Pequena, lida de perto, em acrílico, metal ou madeira.
          </li>
          <li>
            <strong>Diretório do prédio:</strong> a lista da portaria. Use o
            mesmo nome da placa de porta e o número da sala.
          </li>
          <li>
            <strong>Fachada:</strong> para casa ou loja térrea. Lida de longe,
            pede letra grande e pouco texto.
          </li>
          <li>
            <strong>Adesivo em vidro:</strong> útil em portas de vidro; cuide da
            privacidade de quem está na sala de espera.
          </li>
          <li>
            <strong>Totem ou placa de calçada:</strong> quase sempre depende de
            licença municipal; consulte antes.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma clínica fictícia numa casa usa letras
          caixa na fachada só com o nome da clínica e a palavra “Psicologia”, e
          uma placa menor ao lado do portão com o nome da responsável técnica,
          o CRP e a inscrição da clínica.
        </p>
        <p>
          O erro comum é usar o mesmo arquivo para todas as situações. Uma placa
          de porta ampliada para fachada fica com texto demais; uma arte de
          fachada reduzida para porta fica com letra pequena.
        </p>
      </section>

      <section>
        <h2>4. Regras da prefeitura e do prédio</h2>
        <p>
          Antes de encomendar uma placa de fachada, confirme as regras da sua
          cidade. Elas costumam definir quantos anúncios cabem por imóvel, a
          área máxima, se a placa pode avançar sobre a calçada e se é preciso
          licença.
        </p>
        <p>
          São Paulo é um bom exemplo de quão detalhadas essas regras podem ser.
          A{" "}
          <a href={CIDADE_LIMPA} {...ext}>
            Lei municipal nº 14.223/2006 (Cidade Limpa)
          </a>
          , no texto publicado, chama de anúncio indicativo aquele que só
          identifica o estabelecimento ou o profissional no local da atividade.
          Ela permite um único anúncio indicativo por imóvel, com área total de
          até 1,5 m² quando a frente do imóvel tem menos de 10 metros, e de até
          4 m² quando tem de 10 a 100 metros. O anúncio não pode avançar sobre a
          calçada, salvo até 15 centímetros em edificações existentes no
          alinhamento e regulares. A lei já recebeu mudanças e regulamentos
          depois, então confira a versão em vigor na prefeitura.
        </p>
        <ol>
          <li>Pesquise “anúncio indicativo” ou “licença de publicidade” no site da prefeitura.</li>
          <li>Em prédio ou centro comercial, peça à administração o padrão de placas.</li>
          <li>Guarde a licença ou a autorização junto da nota da gráfica.</li>
        </ol>
        <p>
          O erro comum é instalar e esperar a fiscalização. Tirar uma placa
          irregular custa mais do que fazer certo da primeira vez.
        </p>
      </section>

      <section>
        <h2>5. Legibilidade: a placa é lida em movimento</h2>
        <p>
          Placa boa é lida de onde a pessoa chega, e quase sempre em movimento.
          Isso define tamanho de letra, contraste e quantidade de texto.
        </p>
        <ul>
          <li>
            <strong>Pouco texto:</strong> o nome em destaque, a profissão e o
            CRP logo abaixo. Uma linha extra, no máximo.
          </li>
          <li>
            <strong>Contraste alto:</strong> letra escura em fundo claro ou o
            contrário. Dourado sobre bege e cinza sobre branco somem.
          </li>
          <li>
            <strong>Fonte simples:</strong> a tipografia da marca, se ela for
            legível; fontes cursivas finas não funcionam a distância.
          </li>
          <li>
            <strong>Teste no lugar:</strong> imprima a arte em tamanho real,
            cole na porta e olhe do ponto onde o paciente chega.
          </li>
          <li>
            <strong>Material e luz:</strong> acrílico brilhante reflete; em
            corredor iluminado, prefira acabamento fosco.
          </li>
        </ul>
        <p>
          O erro comum é aprovar a placa na tela do celular, onde tudo parece
          legível. A prova em tamanho real resolve antes da gráfica. As escolhas
          de cor seguem a paleta da marca; o post sobre{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          ajuda nessa parte.
        </p>
      </section>

      <section>
        <h2>6. Sigilo: quem entra também é visto</h2>
        <p>
          A placa identifica o consultório, mas quem passa por ela também passa
          a ser visto entrando num consultório de psicologia. O Código de Ética
          protege a intimidade das pessoas atendidas, e a placa pode ajudar ou
          atrapalhar nisso.
        </p>
        <ul>
          <li>Em casa ou loja térrea, considere uma entrada que não fique de frente para a rua movimentada.</li>
          <li>Em porta de vidro, use adesivo jateado até a altura dos olhos.</li>
          <li>Em prédio, a placa de porta discreta costuma bastar; a fachada não é obrigatória.</li>
          <li>Na sala de espera, evite que a porta aberta mostre quem está sentado.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia num prédio de
          salas usa só a placa de porta e o nome no diretório da portaria. O
          paciente acha a sala sem que a consulta fique visível para a rua.
        </p>
        <p>
          O erro comum é pensar a placa só como visibilidade. Para muita gente,
          discrição é parte do que faz o consultório parecer seguro. O post
          sobre{" "}
          <Link href="/blog/decoracao-consultorio-psicologia-infantil" className="inst-link">
            decoração de consultório infantil
          </Link>{" "}
          trata do sigilo na entrada e na sala de espera.
        </p>
      </section>

      <section>
        <h2>7. Placa e Google: o mesmo nome nos dois</h2>
        <p>
          O nome da placa deve ser o mesmo do Perfil da Empresa no Google. As{" "}
          <a href={DIRETRIZES} {...ext}>
            diretrizes do Perfil da Empresa
          </a>{" "}
          pedem que você represente a empresa como ela é vista e reconhecida
          no mundo real, de forma consistente com a identidade visual, a
          papelaria e outros materiais de marca. A placa é um desses materiais.
        </p>
        <ol>
          <li>Defina o nome oficial antes de encomendar a placa.</li>
          <li>Use exatamente esse nome no Google, no site, no WhatsApp e no Instagram.</li>
          <li>Coloque no Google fotos da fachada ou da porta, sem pessoas.</li>
          <li>Indique o número da sala e referências de acesso na descrição.</li>
        </ol>
        <p>
          O erro comum é colocar no Google um nome com palavras-chave (“Psicóloga
          Infantil Autismo TDAH Centro”) diferente da placa. Além de fugir das
          diretrizes, confunde o paciente na porta. O guia de{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          mostra como montar o perfil.
        </p>
      </section>

      <section>
        <h2>8. Clínica com vários profissionais</h2>
        <p>
          Numa clínica, a placa principal leva o nome da clínica e a inscrição
          dela no CRP, e cada profissional é identificado com nome e CRP onde
          atende. A cartilha do CRP-MG lembra que a pessoa jurídica que presta
          serviços de psicologia precisa estar registrada no CRP e ter
          responsável técnico.
        </p>
        <ul>
          <li>Fachada ou entrada: nome da clínica e inscrição no CRP.</li>
          <li>Recepção ou corredor: lista de profissionais com nome, profissão e registro.</li>
          <li>Portas: nome da sala ou da profissional, sem repetir a fachada.</li>
          <li>Clínica multiprofissional: cada profissão com o registro do próprio conselho.</li>
        </ul>
        <p>
          O erro comum é a placa da clínica dizer “psicologia” sem que a
          empresa esteja registrada no CRP. Se você ainda atende como pessoa
          física, a placa leva o seu nome. O post sobre{" "}
          <Link href="/blog/psicologo-cnpj-nome-fantasia" className="inst-link">
            CNPJ e nome fantasia
          </Link>{" "}
          explica quando o nome fantasia pode ir para a fachada.
        </p>
      </section>

      <section>
        <h2>Pode ou evitar na placa</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar na placa do consultório de psicologia" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar na placa do consultório de psicologia</caption>
            <thead><tr><th scope="col">Na placa</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Nome completo ou nome social, “psicóloga(o)” e CRP</td><td>Sim, é obrigatório</td></tr>
              <tr><td>Logo e nome fantasia junto desses dados</td><td>Sim</td></tr>
              <tr><td>Uma linha sobre público ou formato de atendimento</td><td>Sim</td></tr>
              <tr><td>“Dra.” sem doutorado</td><td>Não</td></tr>
              <tr><td>Preço, gratuidade ou desconto</td><td>Não</td></tr>
              <tr><td>“A melhor”, “referência”, “número 1”</td><td>Não</td></tr>
              <tr><td>Promessa de resultado</td><td>Não</td></tr>
              <tr><td>Placa de calçada sem licença municipal</td><td>Evite</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Além da placa: sinalização interna</h2>
        <p>
          Para quem já resolveu a placa, o passo seguinte é a sinalização de
          dentro: o caminho da porta até a sala de espera, o banheiro, a sala de
          atendimento. É a parte da marca que mais gente vê e que menos gente
          planeja.
        </p>
        <ul>
          <li>Use a mesma tipografia e as mesmas cores da placa.</li>
          <li>Sinalize o essencial: recepção, espera, banheiro, saída.</li>
          <li>Coloque um aviso discreto de “em atendimento” na porta da sala.</li>
          <li>Prefira pictogramas simples e conhecidos a ilustrações decorativas.</li>
        </ul>
        <p>
          Uma sinalização clara diminui perguntas na recepção e a sensação de
          estar perdido, o que vale para qualquer paciente e mais ainda para
          crianças e famílias.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças neurodivergentes</h2>
        <p>
          Para muitas crianças autistas, chegar a um lugar novo é a parte mais
          difícil da consulta. A placa e a entrada podem tornar esse momento
          mais previsível.
        </p>
        <ul>
          <li>
            Mande à família, antes da primeira sessão, uma foto da fachada ou da
            porta com a placa, sem pessoas, e o caminho até a sala.
          </li>
          <li>Mantenha a placa igual nas fotos do Google, do site e do WhatsApp.</li>
          <li>Evite placas com luz piscante ou cores saturadas perto da entrada.</li>
          <li>
            Evite símbolos que parte da comunidade autista rejeita, como a peça de
            quebra-cabeça; o post de{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            explica por quê.
          </li>
        </ul>
        <p>
          O post sobre{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório sensorialmente acessível
          </Link>{" "}
          continua esse cuidado da porta para dentro.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>CRP pequeno demais para ler.</li>
          <li>Texto demais: lista de especialidades, telefone, redes e QR code juntos.</li>
          <li>Nome da placa diferente do Google e do site.</li>
          <li>Encomendar placa de fachada sem consultar prefeitura e condomínio.</li>
          <li>Aprovar a arte só na tela.</li>
          <li>Placa da clínica sem a empresa registrada no CRP.</li>
          <li>Esquecer a privacidade de quem entra.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist para mandar à gráfica</h2>
        <ul>
          <li>Nome completo ou nome social, “psicóloga(o)” e CRP com região e número.</li>
          <li>Se for clínica: nome da empresa e inscrição no CRP.</li>
          <li>No máximo uma linha extra, sem preço, promessa nem superlativo.</li>
          <li>Contraste alto e fonte legível a distância.</li>
          <li>Prova em tamanho real testada no local.</li>
          <li>Regras da prefeitura e do prédio conferidas; licença guardada.</li>
          <li>Nome igual ao do Perfil da Empresa no Google.</li>
          <li>Foto da placa para mandar às famílias antes da primeira sessão.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe desenha a marca do consultório para funcionar da
          tela à porta: placa, papelaria, site e redes com o mesmo nome e a
          mesma linguagem. São dois dias de imersão para definir posicionamento,
          identidade visual e verbal, com a marca no ar em 45 dias e cada peça
          revisada pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se a placa é a próxima peça da sua lista, marque uma conversa de 15
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
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , 2ª edição, 2026, seções “Informações essenciais”, “Títulos e
            qualificações”, “Pessoa jurídica” e “Formas e locais de divulgação”.
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica CFP nº 1/2022 — Uso profissional das redes sociais
            </a>
            .
          </li>
          <li>
            Prefeitura de São Paulo.{" "}
            <a href={CIDADE_LIMPA} {...ext}>
              Lei nº 14.223, de 26 de setembro de 2006 (Cidade Limpa)
            </a>
            , art. 13 (texto publicado).
          </li>
          <li>
            Google.{" "}
            <a href={DIRETRIZES} {...ext}>
              Diretrizes para representar sua empresa no Google
            </a>
            .
          </li>
        </ul>
      </section>
    </>
  )
};
