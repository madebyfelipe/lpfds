import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES3 = "https://site.cfp.org.br/wp-content/uploads/2007/02/resolucao2007_3.pdf";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const WCAG = "https://www.w3.org/TR/WCAG21/";

export const post: Post = {
  slug: "material-educativo-pais-autismo",
  title: "Material educativo para pais de crianças autistas: como criar com a marca do consultório",
  description:
    "Como criar material educativo para pais de crianças autistas com a marca do consultório: formatos, texto, design acessível, LGPD e o que o CFP não permite.",
  keyword: "material educativo para pais de crianças autistas",
  tags: ["neurodivergencia", "identidade-visual"],
  publishedAt: "2026-11-13",
  summary:
    "Um material educativo para pais de crianças autistas (guia, cartilha, roteiro de rotina ou lista de perguntas para a escola) funciona quando resolve uma dúvida concreta, em linguagem simples, com fonte e com a identidade do consultório. Pelo Código de Ética, ele precisa ter base científica (art. 19), não pode expor casos (art. 2º, q) nem prometer resultado (art. 20), e não deve mostrar testes psicológicos. Se for baixado no site em troca de e-mail, a LGPD exige consentimento claro.",
  faq: [
    {
      q: "Psicóloga pode distribuir material educativo para pais?",
      a: "Pode. Material informativo é uma forma de cumprir o art. 19 do Código de Ética, que pede a disseminação da base científica e do papel social da profissão. Como leva o seu nome, ele também é publicidade e segue o art. 20: nome completo e CRP, sem promessa de resultado, sem preço como chamariz e sem caso identificável."
    },
    {
      q: "Que tipo de material educativo ajuda pais de crianças autistas?",
      a: "Os mais úteis respondem uma dúvida prática: como preparar a criança para uma consulta, como organizar uma reunião com a escola, como montar uma rotina visual em casa, quais direitos pesquisar. Material curto e focado em um tema costuma ser mais lido do que uma cartilha que tenta explicar tudo sobre autismo."
    },
    {
      q: "Posso cobrar e-mail para liberar o download?",
      a: "Pode, desde que a pessoa saiba para que o e-mail será usado e concorde com isso, como pede a LGPD. Diga no formulário se ela vai receber uma newsletter e com que frequência, e permita o descadastro. O material em si não pode ser oferecido como “brinde” atrelado a desconto ou pacote."
    },
    {
      q: "Posso usar atividades e figuras que uso no atendimento?",
      a: "Com cuidado. Material produzido para um paciente, como desenhos, registros e planos individuais, não pode ser divulgado. Testes psicológicos e suas imagens também não, como lembra a cartilha do CRP-MG. Recursos genéricos, como um modelo de quadro de rotina em branco, podem ser adaptados para o público geral."
    },
    {
      q: "Preciso revisar o material com frequência?",
      a: "Sim. Leis, diretrizes e pesquisas mudam. Coloque a data de atualização no rodapé e revise pelo menos uma vez por ano, ou quando uma norma citada mudar."
    }
  ],
  cover: {
    src: "/blog/material-educativo-pais-autismo/material-educativo-pais-autismo-folhas-em-branco.jpg",
    alt: "Folhas de papel em branco, celular e xícara de café sobre mesa de madeira, preparação de material educativo",
    caption: "Foto: jannoon028 / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Os pais saem da devolutiva com muitas perguntas e pouca energia para
        lembrar de tudo. Dias depois, mandam mensagem pedindo “aquele resumo” ou
        procuram no Google e encontram textos alarmistas, promessas de cura e
        listas de sintomas sem contexto. Um material educativo bem feito, com a
        sua marca, ocupa esse espaço: fica na geladeira, vai para a escola e
        circula entre famílias.
      </p>
      <p>
        A resposta curta: material educativo para pais de crianças autistas
        funciona quando resolve uma dúvida concreta, em linguagem simples, com
        fonte e com a identidade visual do consultório. Ele segue o Código de
        Ética como qualquer publicidade: base científica, sem caso identificável,
        sem promessa. A seguir estão as normas, os formatos que mais ajudam, como
        escrever, como desenhar com acessibilidade, como distribuir e uma
        checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O{" "}
          <a href={CODIGO} {...ext}>
            art. 19 do Código de Ética
          </a>{" "}
          pede que a psicóloga, ao se comunicar com o público, dissemine “o
          conhecimento a respeito das atribuições, da base científica e do papel
          social da profissão”. Um guia para pais é exatamente isso. O art. 2º,
          alínea q, veda divulgar procedimentos ou resultados de forma a expor
          pessoas, e o art. 20 rege a parte de divulgação: nome completo, CRP, sem
          preço como propaganda, sem previsão taxativa de resultados.
        </p>
        <p>
          A{" "}
          <a href={RES3} {...ext}>
            Resolução CFP nº 3/2007
          </a>{" "}
          proíbe, no art. 55, dar a leigos acesso a “instrumentos e técnicas de
          uso privativo da categoria”. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          diz que “é vedada a divulgação de imagens de testes psicológicos em
          material de publicidade profissional” e que é vedada a exposição de
          “dados, imagens, desenhos, mensagens e qualquer material decorrente de
          serviços psicológicos” que possa identificar o usuário. Se o material
          for entregue em troca de e-mail, a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>{" "}
          pede consentimento informado, e a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          lembra que a divulgação digital deve respeitar essa lei.
        </p>
      </section>

      <section>
        <h2>1. Escolha uma dúvida, não um tema</h2>
        <p>
          Comece pela pergunta que os pais mais fazem, não pelo assunto amplo.
          “Autismo” rende um livro; “como preparar meu filho para a primeira
          consulta” rende duas páginas que alguém vai ler inteiras.
        </p>
        <ol>
          <li>
            <strong>Liste as perguntas que chegam</strong> por WhatsApp, na
            recepção e nas devolutivas, sem dados de quem perguntou.
          </li>
          <li>
            <strong>Agrupe por momento:</strong> suspeita, avaliação, depois do
            diagnóstico, escola, rotina, adolescência.
          </li>
          <li>
            <strong>Escolha a mais frequente</strong> e escreva o título como
            resposta: “Cinco passos para a reunião com a escola”.
          </li>
          <li>
            <strong>Defina o que fica de fora</strong> e vira outro material.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício percebe que quase
          toda família pergunta como contar ao irmão mais velho sobre o
          diagnóstico. Daí nasce o material “Como conversar com os irmãos”, de
          quatro páginas, que a equipe entrega na devolutiva e publica no site.
        </p>
        <p>
          <strong>Erro comum:</strong> fazer uma cartilha de 30 páginas que
          explica tudo, do histórico do diagnóstico aos direitos. Ninguém lê, e
          qualquer mudança exige refazer o material inteiro. As ideias de pauta do
          post sobre{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            conteúdo para psicólogo infantil
          </Link>{" "}
          também servem para materiais.
        </p>
      </section>

      <section>
        <h2>2. Escolha o formato certo para a dúvida</h2>
        <p>
          O formato depende de onde o material vai ser usado: na geladeira, na
          mochila, no celular ou numa reunião.
        </p>
        <ul>
          <li>
            <strong>Guia curto em PDF (2 a 6 páginas):</strong> para explicar um
            processo, como a avaliação ou a adaptação escolar.
          </li>
          <li>
            <strong>Folha única para imprimir:</strong> roteiro de perguntas para
            a escola, lista de documentos para levar a uma consulta.
          </li>
          <li>
            <strong>Modelo em branco:</strong> quadro de rotina, calendário
            visual, ficha de registro de sono. Genérico, sem dados de ninguém.
          </li>
          <li>
            <strong>Carrossel ou página do site:</strong> versão resumida que
            leva ao material completo.
          </li>
          <li>
            <strong>Material impresso no consultório:</strong> folder da recepção
            com os temas e o endereço do site.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> o mesmo tema, “preparar a criança para o
          dentista”, vira uma folha com seis passos para imprimir, um carrossel
          com os três primeiros passos e uma página no site com o texto completo.
        </p>
        <p>
          <strong>Erro comum:</strong> fazer só PDF. Arquivo pesado demora a abrir
          no celular e não aparece no Google. Ter a versão em página do site ajuda
          a família a encontrar o conteúdo, como mostra o guia de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Escreva para quem está cansado</h2>
        <p>
          Pais de crianças autistas leem entre uma tarefa e outra, muitas vezes
          depois de um dia difícil. O texto precisa ser direto, gentil e fácil de
          escanear.
        </p>
        <ol>
          <li>
            <strong>Uma ideia por parágrafo</strong>, frases curtas e verbos no
            imperativo gentil: “anote”, “combine”, “pergunte”.
          </li>
          <li>
            <strong>Explique termos técnicos</strong> na primeira vez que
            aparecem, ou troque por palavras comuns.
          </li>
          <li>
            <strong>Use listas numeradas</strong> para passos e bullets para
            opções.
          </li>
          <li>
            <strong>Use linguagem neuroafirmativa:</strong> “criança autista”,
            “apoio”, “necessidades”, em vez de “portador”, “sofre de” ou
            “tratamento do autismo”. O post sobre{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>{" "}
            traz uma lista.
          </li>
          <li>
            <strong>Cite as fontes</strong> no fim, com links para documentos
            oficiais e pesquisas.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> em vez de “a criança com TEA pode
          apresentar hipersensibilidade sensorial a estímulos auditivos”, o
          material diz “alguns sons podem incomodar muito a criança. Fones que
          abafam o barulho e avisos antes de lugares cheios podem ajudar”.
        </p>
        <p>
          <strong>Erro comum:</strong> escrever em tom de alerta (“sinais que você
          não pode ignorar”). O medo vende, mas fere o art. 20, que veda
          divulgação sensacionalista, e não ajuda pais já ansiosos. O{" "}
          <Link href="/blog/tom-de-voz-para-psicologo" className="inst-link">
            tom de voz do consultório
          </Link>{" "}
          deve estar definido antes.
        </p>
      </section>

      <section>
        <h2>4. Desenhe com a identidade do consultório</h2>
        <p>
          O material circula sem você por perto. A identidade visual é o que faz a
          família lembrar de onde ele veio e reconhecer o próximo.
        </p>
        <ul>
          <li>
            <strong>Use a paleta e as fontes da marca</strong>, sempre as mesmas,
            para todos os materiais formarem uma coleção.
          </li>
          <li>
            <strong>Crie um modelo fixo:</strong> capa, cabeçalho, rodapé com nome
            completo, psicóloga, CRP, site e data de atualização.
          </li>
          <li>
            <strong>Ilustrações neutras:</strong> ícones, objetos e formas. Nada
            de foto de criança, de sessão ou de material de atendimento.
          </li>
          <li>
            <strong>Espaço em branco:</strong> páginas cheias cansam, sobretudo
            leitores com sobrecarga sensorial.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia usa o verde-musgo e
          o areia da marca em todos os guias, com um ícone diferente para cada
          tema (escola, sono, alimentação). Em pouco tempo, as famílias reconhecem
          os guias dela no grupo da escola.
        </p>
        <p>
          <strong>Erro comum:</strong> baixar modelos coloridos de sites de design
          com quebra-cabeças e arco-íris. Além de não ser a sua marca, o
          quebra-cabeça é um símbolo que parte da comunidade autista rejeita. Veja
          o post sobre{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>{" "}
          e o{" "}
          <Link href="/blog/manual-de-marca-psicologo" className="inst-link">
            manual de marca do consultório
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>5. Garanta acessibilidade no PDF e no papel</h2>
        <p>
          Muitos pais também são neurodivergentes, têm baixa visão ou leem pelo
          celular com pouca luz. Acessibilidade aqui é parte do conteúdo.
        </p>
        <ol>
          <li>
            <strong>Contraste:</strong> as{" "}
            <a href={WCAG} {...ext}>
              diretrizes WCAG 2.1
            </a>{" "}
            pedem contraste mínimo de 4,5:1 para texto comum. Cinza-claro sobre
            bege costuma falhar.
          </li>
          <li>
            <strong>Fonte:</strong> sem serifa, tamanho confortável para impressão
            e para tela, sem textos inteiros em caixa alta ou itálico.
          </li>
          <li>
            <strong>PDF com texto real:</strong> exporte do editor como texto, não
            como imagem, para leitores de tela e para a busca funcionarem.
          </li>
          <li>
            <strong>Ordem de leitura e títulos:</strong> use os estilos de título
            do editor, que viram marcadores no PDF.
          </li>
          <li>
            <strong>Cor não é a única pista:</strong> ícone ou palavra junto da
            cor.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um roteiro para a escola marca os itens
          urgentes em vermelho e também com a palavra “antes”, para quem não
          distingue a cor ou imprime em preto e branco.
        </p>
        <p>
          <strong>Erro comum:</strong> salvar o material como imagem para “não
          desconfigurar”. Ele fica ilegível para leitores de tela e invisível para
          o Google. As mesmas ideias valem para o espaço físico, como no post sobre{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório sensorialmente acessível
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Revise o conteúdo pelo art. 20 antes de publicar</h2>
        <p>
          Antes de distribuir, releia o material com quatro perguntas. Se uma
          resposta for “sim”, ajuste.
        </p>
        <ol>
          <li>
            <strong>Promete resultado?</strong> “Com estas dicas, seu filho vai
            dormir a noite toda” é previsão taxativa.
          </li>
          <li>
            <strong>Expõe alguém?</strong> Relato, desenho, mensagem ou foto
            ligada a um atendimento, mesmo anonimizada, sai.
          </li>
          <li>
            <strong>Mostra instrumento privativo?</strong> Itens, imagens ou
            correção de testes psicológicos saem.
          </li>
          <li>
            <strong>Usa preço como chamariz?</strong> “Baixe e ganhe 10% na
            avaliação” sai.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> o guia fictício “Rotina visual em casa”
          dizia “reduz as crises”. A versão revisada diz “pode ajudar a criança a
          antecipar o que vem depois, o que muitas famílias relatam como um alívio
          no dia a dia”, e cita a fonte.
        </p>
        <p>
          <strong>Erro comum:</strong> esquecer o rodapé com nome completo e CRP.
          Um material que circula sem identificação é publicidade fora do art. 20 e
          ainda perde a chance de levar a família até você. O{" "}
          <Link href="/blog/marketing-para-psicologos-codigo-de-etica" className="inst-link">
            guia de marketing e Código de Ética
          </Link>{" "}
          tem a lista completa.
        </p>
      </section>

      <section>
        <h2>7. Distribua por canais que os pais já usam</h2>
        <p>
          O material funciona quando chega na hora certa. Pense em onde a família
          está quando a dúvida aparece.
        </p>
        <ul>
          <li>
            <strong>Na devolutiva ou primeira consulta:</strong> impresso ou
            enviado por e-mail logo depois.
          </li>
          <li>
            <strong>No site:</strong> uma página “Materiais para famílias”, com a
            versão em texto e o PDF.
          </li>
          <li>
            <strong>Na newsletter:</strong> um material novo por edição. Veja
            como montar no post sobre{" "}
            <Link href="/blog/newsletter-para-psicologo" className="inst-link">
              newsletter para psicólogo
            </Link>
            .
          </li>
          <li>
            <strong>Na escola:</strong> com autorização da família, o roteiro de
            reunião pode ir para a coordenação.
          </li>
          <li>
            <strong>No WhatsApp Business:</strong> como resposta rápida para as
            perguntas mais frequentes.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> um consultório fictício envia o guia “Antes
          da avaliação” junto com a confirmação do agendamento. As famílias chegam
          sabendo o que levar e o que esperar.
        </p>
        <p>
          <strong>Erro comum:</strong> criar o material e deixá-lo esquecido numa
          pasta. Defina onde cada um vai morar antes de começar a escrever.
        </p>
      </section>

      <section>
        <h2>Material educativo: o que pode e o que evitar</h2>
        <div className="inst-blog__table" role="region" aria-label="Material educativo para pais: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Material educativo para pais: o que pode e o que evitar</caption>
            <thead><tr><th scope="col">Situação</th><th scope="col">Pode?</th></tr></thead>
            <tbody>
              <tr><td>Guia sobre um tema com fontes e data de atualização</td><td>Sim</td></tr>
              <tr><td>Modelo de rotina visual em branco</td><td>Sim</td></tr>
              <tr><td>Rodapé com nome completo, psicóloga, CRP e site</td><td>Sim</td></tr>
              <tr><td>Download em troca de e-mail, com finalidade explicada</td><td>Sim</td></tr>
              <tr><td>Desenho ou relato de um paciente, mesmo sem nome</td><td>Não (sigilo)</td></tr>
              <tr><td>Itens ou imagens de teste psicológico</td><td>Não (cartilha CRP-MG; Res. 3/2007)</td></tr>
              <tr><td>“Com este método, seu filho vai falar”</td><td>Não (previsão de resultado)</td></tr>
              <tr><td>Foto de criança ou de sessão na capa</td><td>Não (art. 20 e sigilo)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já tem materiais: transforme em coleção</h2>
        <p>
          Quando já existem três ou quatro materiais, vale organizá-los como
          coleção. Numere ou agrupe por momento (antes da avaliação, depois do
          diagnóstico, escola, rotina) e crie uma página índice no site. Isso
          ajuda a família a encontrar o próximo passo e mostra a coerência do seu
          trabalho.
        </p>
        <p>
          Faça também uma revisão anual. Confira se as leis e diretrizes citadas
          continuam válidas, troque links quebrados e atualize a data no rodapé.
          Se um material ficar desatualizado e você não tiver tempo de revisar,
          tire do ar. Conteúdo velho com o seu nome passa a impressão de descuido.
        </p>
        <p>
          Se pensar em vender materiais mais completos, as regras mudam um pouco:
          leia o post sobre{" "}
          <Link href="/blog/psicologo-vender-curso-material" className="inst-link">
            psicólogo que vende curso, e-book ou material
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias com mais de uma pessoa neurodivergente</h2>
        <p>
          É comum que um dos pais descubra o próprio diagnóstico de autismo ou
          TDAH depois do filho. Materiais para essas famílias pedem alguns ajustes.
        </p>
        <ul>
          <li>
            <strong>Menos texto por página</strong> e destaque para o passo que
            importa.
          </li>
          <li>
            <strong>Checklists que dá para marcar,</strong> em vez de parágrafos
            de instrução.
          </li>
          <li>
            <strong>Sem tom de cobrança.</strong> “Se der, tente” acolhe mais do
            que “você deve”.
          </li>
          <li>
            <strong>Versão em áudio ou vídeo curto</strong> do mesmo conteúdo,
            para quem processa melhor ouvindo.
          </li>
        </ul>
        <p>
          A{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          aprofunda como comunicar com essas famílias em todos os canais.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Tentar explicar tudo sobre autismo num único material.</li>
          <li>Tom de alerta ou medo na capa e no título.</li>
          <li>Usar quebra-cabeça e arco-íris no lugar da identidade da marca.</li>
          <li>Salvar o PDF como imagem.</li>
          <li>Mostrar desenho, relato ou foto ligada a atendimento.</li>
          <li>Esquecer nome completo, CRP e data de atualização.</li>
          <li>Pedir e-mail sem explicar o que será enviado.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do material</h2>
        <ul>
          <li>Responde uma dúvida concreta em poucas páginas.</li>
          <li>Linguagem simples e neuroafirmativa.</li>
          <li>Fontes citadas, com links.</li>
          <li>Paleta, fontes e modelo da marca.</li>
          <li>Contraste e fonte legíveis; PDF com texto real.</li>
          <li>Rodapé com nome completo, psicóloga, CRP, site e data.</li>
          <li>Nada de caso, teste, foto de criança, promessa ou preço.</li>
          <li>Canal de distribuição definido.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a identidade visual do consultório sai de uma
          imersão de dois encontros e fica pronta, com site e peças, em até 30 dias. Os
          modelos de material para famílias podem entrar nesse sistema, com
          paleta, fontes e rodapé prontos e revisados pelo art. 20. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se quiser pensar a coleção do seu consultório, marque uma conversa de
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
            , arts. 2º (alínea q), 9º, 19 e 20.
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
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
            , critério 1.4.3.
          </li>
        </ul>
      </section>
    </>
  )
};
