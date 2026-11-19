import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const RES9 =
  "https://atosoficiais.com.br/cfp/resolucao-do-exercicio-profissional-n-9-2024-regulamenta-o-exercicio-profissional-da-psicologia-mediado-por-tecnologias-digitais-da-informacao-e-da-comunicacao-tdics-em-territorio-nacional-e-revoga-as-resolucao-cfp-no-11-de-11-de-maio-de-2018-e-resolucao-cfp-no-04-de-26-de-marco-de-2020";
const CRPSP =
  "https://www.crpsp.org/noticia/view/3251/resolucao-do-cfp-que-disciplina-uso-de-tecnologias-digitais-no-exercicio-da-psicologia-ja-esta-em-vigor-plataforma-e-psi-sera-encerrada";
const LGPD = "https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm";
const GDPR = "https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX:32016R0679";

export const post: Post = {
  slug: "psicologo-brasileiros-no-exterior",
  title: "Psicólogo para brasileiros no exterior: como divulgar o atendimento online dentro da Resolução CFP 9/2024",
  description:
    "Psicólogo para brasileiros no exterior: o que diz a Resolução CFP 9/2024, fuso, urgência, contrato, dados, site e onde divulgar com ética.",
  keyword: "psicólogo para brasileiros no exterior",
  tags: ["presenca-digital", "posicionamento"],
  publishedAt: "2026-11-16",
  summary:
    "Psicóloga com inscrição ativa no CRP pode atender online brasileiros que moram fora; a Resolução CFP nº 9/2024 pede que ela avalie os limites legais entre países, tenha um plano para urgências e considere as diferenças culturais e linguísticas. Na divulgação, valem as regras do art. 20 do Código de Ética: nome completo, CRP, nada de preço como chamariz nem promessa. O site precisa dizer em que fuso você atende, em que idioma e o que fazer numa emergência no país da pessoa.",
  faq: [
    {
      q: "Psicólogo brasileiro pode atender paciente que mora no exterior?",
      a: "A Resolução CFP nº 9/2024 regulamenta o atendimento por tecnologias digitais e não proíbe atender quem está fora do Brasil. Ela pede que a psicóloga avalie os limites legais de atuação nas fronteiras entre países, os meios de lidar com urgências e as diferenças culturais e linguísticas. Como cada país tem as próprias regras para serviços de saúde, vale conferir a legislação do país onde a pessoa mora antes de começar."
    },
    {
      q: "Preciso de algum cadastro para atender brasileiros no exterior?",
      a: "O cadastro no e-Psi, exigido pela norma antiga, deixou de ser exigido com a Resolução CFP nº 9/2024, e o CRP SP informou que a plataforma seria encerrada. A exigência central é a inscrição ativa no seu Conselho Regional. A resolução também dispensa a inscrição secundária para quem atende por tecnologias digitais."
    },
    {
      q: "E se eu mudar para fora do Brasil, posso continuar atendendo?",
      a: "A Resolução CFP nº 9/2024 diz que profissionais que residem em outros países devem obedecer à legislação local (art. 6º, § 2º). Antes de mudar, confira as regras do país de destino para exercer a psicologia, mesmo online, e converse com o seu CRP sobre a inscrição."
    },
    {
      q: "Como divulgar atendimento psicológico para brasileiros que moram fora?",
      a: "Com um site que diga claramente “atendimento online em português para brasileiros no exterior”, o fuso e os horários, o CRP e o que fazer em emergências; com páginas ou textos voltados aos países onde estão os seus pacientes; e com presença nas comunidades de brasileiros, sempre informando, sem preço como chamariz e sem promessa de resultado."
    },
    {
      q: "Posso cobrar em dólar ou euro?",
      a: "O Código de Ética não trata da moeda, mas proíbe usar o preço como forma de propaganda. Informe o valor e a forma de pagamento na conversa inicial ou no contrato, e trate com o seu contador a parte tributária de receber do exterior."
    }
  ],
  cover: {
    src: "/blog/psicologo-brasileiros-no-exterior/psicologo-brasileiros-no-exterior-notebook-e-mapa-mundi.jpg",
    alt: "Notebook e xícara de café sobre um mapa-múndi colorido, vistos de cima",
    caption: "Foto: Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A mensagem chega às três da tarde no Brasil e às sete da noite em
        Lisboa: “Oi, moro em Portugal há dois anos e queria fazer terapia em
        português. Você atende quem está fora?”. Para muitas psicólogas, esse
        tipo de contato começou a aparecer sem nenhuma divulgação, por
        indicação. E logo vem a dúvida: pode? E, se pode, como divulgar sem
        tropeçar nas regras?
      </p>
      <p>
        A resposta curta: a psicóloga com inscrição ativa no CRP pode atender
        online brasileiros que moram fora, desde que avalie o que a{" "}
        <a href={RES9} {...ext}>
          Resolução CFP nº 9/2024
        </a>{" "}
        pede, como limites legais entre países, urgências e diferenças
        culturais, e divulgue dentro do art. 20 do Código de Ética. A seguir
        estão o que dizem as normas, sete decisões para montar e divulgar esse
        atendimento, uma tabela de pode e evitar, a parte para quem atende
        famílias de crianças autistas e neurodivergentes no exterior, os erros
        comuns e um checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          A{" "}
          <a href={RES9} {...ext}>
            Resolução CFP nº 9/2024
          </a>{" "}
          regulamenta o exercício da Psicologia mediado por tecnologias
          digitais (TDICs) e revogou as Resoluções nº 11/2018 e nº 4/2020. Para
          quem atende brasileiros no exterior, cinco pontos importam:
        </p>
        <ul>
          <li>
            <strong>Art. 4º, VII:</strong> a psicóloga deve avaliar os limites
            legais de atuação no que diz respeito às fronteiras entre os países.
          </li>
          <li>
            <strong>Art. 4º, VI:</strong> deve ter meios para atender ou
            direcionar demandas de urgência e emergência.
          </li>
          <li>
            <strong>Art. 4º, VIII:</strong> deve considerar diferenças
            culturais e linguísticas, faixa etária e deficiências das pessoas
            atendidas.
          </li>
          <li>
            <strong>Art. 6º:</strong> orientação e fiscalização do Conselho se
            restringem ao exercício em território nacional; quem atende por
            TDIC fica dispensado de inscrição secundária, e quem reside em
            outro país deve obedecer à legislação local.
          </li>
          <li>
            <strong>Art. 7º:</strong> o contrato, escrito ou verbal, traz as
            características do trabalho, os recursos tecnológicos e o foro na
            jurisdição da inscrição principal.
          </li>
        </ul>
        <p>
          O{" "}
          <a href={CRPSP} {...ext}>
            CRP SP
          </a>{" "}
          informou que, com a nova resolução, o cadastro deixou de ser exigido e a plataforma e-Psi seria encerrada.
          Se o seu site ainda diz “cadastrada no e-Psi”, atualize.
        </p>
        <p>
          A divulgação segue o{" "}
          <a href={CODIGO} {...ext}>
            art. 20 do Código de Ética
          </a>
          , a{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          e as orientações da{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>
          : nome completo, CRP, nada de preço como propaganda, previsão de
          resultado ou sensacionalismo. A resolução brasileira não responde
          pelo outro lado da fronteira: o que o país da pessoa exige de quem
          presta serviço de saúde a distância é uma pergunta a conferir país a
          país.
        </p>
      </section>

      <section>
        <h2>1. Decida para quem e de onde você atende</h2>
        <p>
          Antes de divulgar, defina o público e os países. “Brasileiros no
          exterior” é amplo demais para um site convencer alguém.
        </p>
        <ol>
          <li>
            <strong>Quem:</strong> adultos que migraram para trabalhar,
            estudantes, mães e pais que criam filhos fora, casais binacionais.
          </li>
          <li>
            <strong>Onde:</strong> os países de onde já vêm contatos, ou onde há
            grandes comunidades brasileiras.
          </li>
          <li>
            <strong>O quê:</strong> que temas você conhece bem, como adaptação,
            luto migratório, maternidade longe da família, orientação de pais.
          </li>
          <li>
            <strong>Limites:</strong> o que você não vai atender a distância,
            como situações de risco que pedem rede presencial.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: uma psicóloga fictícia percebe que metade dos
          contatos de fora vem de mães brasileiras em Portugal e na Irlanda,
          com filhos pequenos. Ela passa a se apresentar como “psicoterapia
          online em português para mães brasileiras que criam filhos fora do
          Brasil”, e as conversas ficam mais certeiras.
        </p>
        <p>
          O erro comum é anunciar “atendo o mundo todo” sem saber como lidar
          com urgências em cada país. Comece por poucos países que você conhece.
          O raciocínio do recorte está em{" "}
          <Link href="/blog/como-escolher-nicho-na-psicologia" className="inst-link">
            como escolher um nicho na psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>2. Monte o plano de urgência antes da primeira sessão</h2>
        <p>
          Atender alguém a milhares de quilômetros exige saber, antes, o que
          fazer numa crise. A resolução pede meios de direcionar urgências e
          diz quando considerar a rede presencial (art. 5º).
        </p>
        <ol>
          <li>
            <strong>Número de emergência do país:</strong> por exemplo, 112 na
            União Europeia e 911 nos Estados Unidos e no Canadá. Confira o de
            cada país que você atende.
          </li>
          <li>
            <strong>Contato de apoio:</strong> combine com a pessoa um contato
            de confiança no país onde ela mora.
          </li>
          <li>
            <strong>Endereço da sessão:</strong> saiba de onde a pessoa está
            falando, para orientar serviços locais se for preciso.
          </li>
          <li>
            <strong>Registro:</strong> o art. 5º, § 2º, pede que ações e
            encaminhamentos fiquem no prontuário.
          </li>
        </ol>
        <p>
          No site, esse plano vira uma frase clara: “Este atendimento não é
          serviço de emergência. Em crise, ligue para o número de emergência do
          país onde você está”.
        </p>
        <p>
          Exemplo ilustrativo: na conversa inicial, a psicóloga pergunta a
          cidade da pessoa e anota o serviço de emergência local e um contato
          de confiança. Leva dois minutos e evita improviso.
        </p>
        <p>
          O erro comum é deixar o aviso de emergência só com números
          brasileiros, como o 188 do CVV, que quem está fora talvez não consiga
          usar. Mostre os dois.
        </p>
      </section>

      <section>
        <h2>3. Escreva a página do atendimento no exterior</h2>
        <p>
          A página precisa responder em poucos segundos: você atende quem está
          fora, em que idioma, em que horários e como começa.
        </p>
        <ul>
          <li>
            <strong>Título:</strong> “Psicoterapia online em português para
            brasileiros no exterior”.
          </li>
          <li>
            <strong>Fuso:</strong> horários no fuso de Brasília e exemplos em
            outros fusos, como Lisboa ou Nova York.
          </li>
          <li>
            <strong>Plataforma:</strong> por onde são as sessões e como você
            cuida do sigilo.
          </li>
          <li>
            <strong>Identificação:</strong> nome completo, psicóloga, CRP com a
            região.
          </li>
          <li>
            <strong>Primeiro contato:</strong> WhatsApp ou e-mail, com prazo de
            resposta.
          </li>
          <li>
            <strong>Emergência:</strong> o aviso do item anterior.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo de abertura: “Morar fora traz conquistas e também
          saudade, cansaço e a sensação de recomeçar do zero. Atendo online, em
          português, adultos brasileiros que vivem em outros países, com
          horários pela manhã e à noite no horário de Brasília”.
        </p>
        <p>
          O erro comum é escrever “terapia online” e só. Quem mora fora busca
          sinais de que você entende a experiência de migrar. A estrutura de
          uma página com objetivo único está em{" "}
          <Link href="/blog/landing-page-psicologo" className="inst-link">
            landing page para psicólogo
          </Link>
          , e o contexto do atendimento online em{" "}
          <Link href="/blog/psicologo-online-divulgacao" className="inst-link">
            psicólogo online: como divulgar
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>4. Deixe o contrato claro, com foro e tecnologia</h2>
        <p>
          O art. 7º da resolução lista o que o contrato deve abarcar. Com quem
          mora fora, ele evita mal-entendidos sobre horário, faltas e
          pagamento.
        </p>
        <ol>
          <li>Características do trabalho, direitos e deveres das partes.</li>
          <li>
            Recursos tecnológicos usados e como garantem o sigilo (parágrafo
            único do art. 7º).
          </li>
          <li>Foro na jurisdição da sua inscrição principal no CRP.</li>
          <li>
            Dados da empresa, se você atende por pessoa jurídica ou plataforma.
          </li>
          <li>
            Regras de horário: em que fuso a sessão é marcada e o que acontece
            na mudança de horário de verão de cada país.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: um contrato fictício diz “As sessões são
          marcadas no horário de Brasília. Nas semanas de mudança de horário no
          seu país, confirmamos o horário por mensagem na véspera”. Uma linha
          que poupa sessões perdidas.
        </p>
        <p>
          O erro comum é combinar tudo por mensagem solta. O contrato pode ser
          verbal, segundo a resolução, mas registrar por escrito protege as
          duas partes. Valores e forma de pagamento entram no contrato, nunca
          como propaganda no site; o porquê está em{" "}
          <Link href="/blog/psicologo-pode-divulgar-preco" className="inst-link">
            psicólogo pode divulgar preço?
          </Link>
        </p>
      </section>

      <section>
        <h2>5. Cuide dos dados com as duas legislações em mente</h2>
        <p>
          Dados de saúde são sensíveis para a{" "}
          <a href={LGPD} {...ext}>
            LGPD
          </a>
          . Quando a pessoa mora em outro país, a lei de lá também pode valer.
        </p>
        <ul>
          <li>
            <strong>União Europeia:</strong> o{" "}
            <a href={GDPR} {...ext}>
              Regulamento Geral sobre a Proteção de Dados (RGPD)
            </a>{" "}
            se aplica, pelo art. 3º, n.º 2, a quem está fora da União e oferece
            serviços a pessoas que estão nela. Quem atende clientes em
            Portugal, por exemplo, precisa considerar essa regra.
          </li>
          <li>
            <strong>Ferramentas:</strong> prefira plataformas de vídeo e de
            prontuário com criptografia e política de privacidade clara.
          </li>
          <li>
            <strong>Formulários:</strong> só dados de contato; nada sobre o
            motivo da procura.
          </li>
          <li>
            <strong>Aviso de privacidade:</strong> diga que dados você coleta,
            para quê, onde ficam e como pedir a exclusão.
          </li>
        </ul>
        <p>
          Exemplo ilustrativo: a psicóloga revisa a política de privacidade do
          site e acrescenta um parágrafo sobre pessoas que moram na União
          Europeia, com os direitos de acesso e exclusão.
        </p>
        <p>
          O erro comum é presumir que só a lei brasileira vale. Se você atende
          muitas pessoas de um mesmo país, vale uma consulta a um advogado de
          proteção de dados. O cuidado com formulários e agenda está em{" "}
          <Link href="/blog/agendamento-online-psicologo" className="inst-link">
            agendamento online para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>6. Seja encontrada por quem busca do exterior</h2>
        <p>
          Brasileiros fora do país costumam buscar no Google em português,
          com o nome do país ou da cidade: “psicóloga brasileira em Portugal”,
          “terapia em português na Alemanha”. O site precisa conversar com essas
          buscas.
        </p>
        <ol>
          <li>
            <strong>Títulos com país:</strong> se você atende mais de um país,
            um parágrafo ou uma seção para cada, com as dúvidas próprias.
          </li>
          <li>
            <strong>Conteúdo útil:</strong> textos sobre adaptação, saudade,
            criar filhos bilíngues, explicados com cuidado e sem promessa.
          </li>
          <li>
            <strong>Perfil da Empresa no Google:</strong> só se você tem
            endereço de atendimento; ele não serve para “atendimento online no
            mundo”.
          </li>
          <li>
            <strong>Redes:</strong> perfis que deixem claro o fuso e o público
            na bio.
          </li>
        </ol>
        <p>
          Exemplo ilustrativo: um post de blog fictício, “Saudade de casa ou
          algo mais? Quando a adaptação pesa demais”, responde a uma busca real
          e termina com a explicação de como funciona o atendimento.
        </p>
        <p>
          O erro comum é dizer “psicóloga em Lisboa” morando no Brasil. Isso
          confunde e pode sugerir atendimento presencial que não existe. Diga
          “atendimento online para quem mora em Lisboa”. O passo a passo para o
          Google está em{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>7. Divulgue nas comunidades sem virar spam</h2>
        <p>
          Grupos de brasileiros no exterior, em redes sociais ou aplicativos de
          mensagem, são onde muitos pedem indicação. Participar ajuda, desde
          que você informe e respeite as regras do grupo.
        </p>
        <ul>
          <li>Leia as regras do grupo e pergunte à moderação antes de divulgar.</li>
          <li>
            Responda dúvidas gerais com informação, sem fazer atendimento no
            comentário.
          </li>
          <li>Apresente-se com nome, CRP e link para o site.</li>
          <li>Nada de preço, “primeira sessão grátis” ou sorteio.</li>
          <li>Não comente casos nem responda pedidos de ajuda em crise em público.</li>
        </ul>
        <p>
          Exemplo ilustrativo: num grupo de mães brasileiras em Dublin, alguém
          pergunta por terapia em português. A psicóloga responde: “Sou
          psicóloga (CRP 06/000000) e atendo online brasileiros que moram fora.
          Se quiser, as informações estão no meu site”. E para por aí.
        </p>
        <p>
          O erro comum é postar o mesmo anúncio em dez grupos no mesmo dia. As
          regras para grupos estão em{" "}
          <Link href="/blog/psicologo-grupos-de-maes" className="inst-link">
            psicólogo pode divulgar em grupo de WhatsApp?
          </Link>
          , e as de comentários em{" "}
          <Link href="/blog/psicologo-responder-comentarios-direct" className="inst-link">
            psicólogo pode responder comentários e direct?
          </Link>
        </p>
      </section>

      <section>
        <h2>Pode e evitar na divulgação para brasileiros no exterior</h2>
        <div className="inst-blog__table-wrap">
          <table
            className="inst-blog__table"
            role="table"
            aria-label="O que pode e o que evitar na divulgação de atendimento para brasileiros no exterior"
            tabIndex={0}
          >
            <caption>Brasileiros no exterior: pode e evitar na divulgação</caption>
            <thead>
              <tr>
                <th scope="col">Elemento</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apresentação</td>
                <td>“Atendimento online em português para brasileiros no exterior”</td>
                <td>“Psicóloga em Lisboa” morando no Brasil</td>
              </tr>
              <tr>
                <td>Registro</td>
                <td>Nome completo, psicóloga, CRP com região</td>
                <td>“Cadastrada no e-Psi” ou só nome fantasia</td>
              </tr>
              <tr>
                <td>Horários</td>
                <td>Fuso de Brasília e exemplos em outros fusos</td>
                <td>“Atendo a qualquer hora”</td>
              </tr>
              <tr>
                <td>Emergência</td>
                <td>Aviso com número de emergência do país da pessoa</td>
                <td>Só números brasileiros, ou nenhum aviso</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>Informado na conversa inicial ou no contrato</td>
                <td>Preço em destaque, câmbio como vantagem, desconto</td>
              </tr>
              <tr>
                <td>Texto</td>
                <td>Temas da migração, com verbos de processo</td>
                <td>“Supere a saudade”, “adapte-se em 8 sessões”</td>
              </tr>
              <tr>
                <td>Comunidades</td>
                <td>Informar com permissão da moderação</td>
                <td>Anúncio repetido, atendimento em comentário</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já atende: organize por país</h2>
        <p>
          Quem já tem pacientes em vários países ganha com uma planilha simples,
          sem dados clínicos: país, fuso, número de emergência, regra de horário
          de verão e o que você já verificou sobre a legislação local. Ela vira
          a base do contrato, do aviso de emergência e das páginas do site.
        </p>
        <p>
          Com essa visão, dá para decidir onde vale aprofundar. Se a maioria
          está em dois países, faça uma seção no site para cada, com as dúvidas
          próprias: como funciona o sistema de saúde de lá, onde buscar apoio
          presencial em paralelo, que documentos você emite ou não. Revise uma
          vez por ano, porque fuso, regras e plataformas mudam.
        </p>
        <p>
          Outro ponto para quem cresce nesse público é o idioma. Se você atende
          casais binacionais ou filhos que preferem outra língua, diga no site
          em que idiomas atende de fato, e só esses. Anunciar um idioma que você
          não domina para sessão é prometer o que não pode cumprir.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes no exterior</h2>
        <p>
          Famílias brasileiras com filhos autistas ou neurodivergentes no
          exterior costumam lidar com dois sistemas ao mesmo tempo: a escola e a
          saúde do país onde moram e a referência cultural e de idioma do
          Brasil. Muitas procuram orientação parental em português, para falar
          com calma do que vivem.
        </p>
        <ul>
          <li>
            <strong>Diga o que você oferece a distância:</strong> orientação
            parental, apoio aos pais, conversa sobre rotina e escola. A{" "}
            <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
              divulgação de orientação parental
            </Link>{" "}
            segue as mesmas regras.
          </li>
          <li>
            <strong>Avaliação e laudos:</strong> deixe claro que documentos você
            emite e que a aceitação deles pela escola ou pelo sistema de saúde
            do outro país depende das regras de lá. Não prometa que “vale lá
            fora”.
          </li>
          <li>
            <strong>Diferenças culturais e linguísticas:</strong> o art. 4º,
            VIII, da resolução pede atenção a isso; crianças bilíngues e
            escolas com outra cultura de inclusão fazem parte da conversa.
          </li>
          <li>
            <strong>Rede local:</strong> mostre que você trabalha junto com os
            profissionais do país, com autorização da família.
          </li>
          <li>
            <strong>Linguagem:</strong> sem “cura” nem “recuperar o atraso”.
            Veja{" "}
            <Link href="/blog/linguagem-neuroafirmativa-psicologo" className="inst-link">
              linguagem neuroafirmativa
            </Link>
            .
          </li>
        </ul>
        <p>
          Exemplo ilustrativo de texto: “Orientação em português para pais
          brasileiros de crianças autistas que vivem fora do Brasil. Conversamos
          sobre rotina, escola e o diálogo com os profissionais daí, sempre
          respeitando o acompanhamento que a criança já tem no seu país.”
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Anunciar “atendo o mundo todo” sem plano de urgência por país.</li>
          <li>Manter “cadastrada no e-Psi” no site depois da Resolução CFP 9/2024.</li>
          <li>Sugerir atendimento presencial numa cidade onde você não está.</li>
          <li>Usar o câmbio ou o preço em reais como chamariz.</li>
          <li>Prometer que laudos ou documentos serão aceitos em outro país.</li>
          <li>Ignorar a lei de dados do país onde a pessoa mora.</li>
          <li>Divulgar repetidamente em grupos sem permissão.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do atendimento para brasileiros no exterior</h2>
        <ul>
          <li>Público e países definidos.</li>
          <li>Plano de urgência com número de emergência de cada país.</li>
          <li>Página com idioma, fuso, plataforma, CRP e aviso de emergência.</li>
          <li>Contrato com tecnologia, sigilo, foro e regra de fuso.</li>
          <li>Política de privacidade que considera a lei do país da pessoa.</li>
          <li>Textos com o país ou a cidade, sem sugerir presencial.</li>
          <li>Divulgação em comunidades com permissão e sem preço.</li>
          <li>Legislação local conferida antes de atender um país novo.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quem e aonde quer chegar, inclusive
          quando o seu público está espalhado por outros países. Daí saem o
          posicionamento, a identidade visual e o site, com as páginas do
          atendimento online revisadas pelo art. 20. Tudo é apresentado em até
          30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se brasileiros de fora já procuram você e o site ainda não fala com
          eles, marque uma conversa de 15 minutos.
        </p>
      </section>

      <section>
        <h2>Fontes</h2>
        <ul>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={RES9} {...ext}>
              Resolução CFP nº 9/2024
            </a>{" "}
            — regulamenta o exercício profissional da Psicologia mediado por
            TDICs (arts. 4º a 7º).
          </li>
          <li>
            Conselho Regional de Psicologia de São Paulo.{" "}
            <a href={CRPSP} {...ext}>
              Resolução do CFP que disciplina uso de tecnologias digitais já
              está em vigor; plataforma e-Psi será encerrada
            </a>
            .
          </li>
          <li>
            Conselho Federal de Psicologia. Resolução CFP nº 10/2005 —{" "}
            <a href={CODIGO} {...ext}>
              Código de Ética Profissional do Psicólogo
            </a>
            , art. 20.
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
            </a>
            , edição de abril de 2026.
          </li>
          <li>
            Brasil.{" "}
            <a href={LGPD} {...ext}>
              Lei nº 13.709/2018 — Lei Geral de Proteção de Dados Pessoais
            </a>
            .
          </li>
          <li>
            União Europeia.{" "}
            <a href={GDPR} {...ext}>
              Regulamento (UE) 2016/679 — Regulamento Geral sobre a Proteção de
              Dados
            </a>
            , art. 3º.
          </li>
        </ul>
      </section>
    </>
  )
};
