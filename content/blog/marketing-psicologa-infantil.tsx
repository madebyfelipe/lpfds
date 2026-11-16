import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const CARTILHA =
  "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const ECA = "https://www.planalto.gov.br/ccivil_03/leis/l8069.htm";

export const post: Post = {
  slug: "marketing-psicologa-infantil",
  title: "Marketing para psicóloga infantil: 8 frentes para ser encontrada pelos pais dentro do Código de Ética",
  description:
    "Marketing para psicóloga infantil: posicionamento, site, Google, conteúdo para pais, escolas, pediatras e imagens sem criança, dentro do Código de Ética.",
  keyword: "marketing para psicóloga infantil",
  tags: ["posicionamento", "presenca-digital"],
  publishedAt: "2026-11-15",
  summary:
    "No atendimento infantil, quem decide é o adulto: o marketing da psicóloga infantil fala com pais, escolas e pediatras, não com a criança. As frentes que sustentam a procura são posicionamento claro, site e Perfil da Empresa no Google, conteúdo útil para pais e uma rede de indicação. O art. 20 do Código de Ética e o ECA pedem cuidado redobrado: nada de foto de criança atendida, promessa de resultado ou preço como chamariz.",
  faq: [
    {
      q: "Psicóloga infantil pode postar foto de criança no Instagram?",
      a: "Foto de criança atendida, não: expõe a criança, fere o sigilo e o art. 20 desaconselha imagens de atendimento. O ECA também protege a imagem da criança (art. 17). Use fotos do espaço, de materiais neutros, suas e ilustrações."
    },
    {
      q: "Como divulgar meu consultório infantil em escolas?",
      a: "Ofereça informação, não propaganda: uma conversa com a coordenação, uma palestra sobre um tema pedido pela escola ou um material educativo para as famílias, sempre com nome completo e CRP. Evite deixar panfletos com promessa ou pedir que a escola indique você em troca de algo."
    },
    {
      q: "Qual rede social funciona melhor para psicóloga infantil?",
      a: "A que os pais da sua região usam e que você consegue manter. Muitas psicólogas infantis começam pelo Instagram e pelo Perfil da Empresa no Google, porque pais pesquisam no Google com o bairro. Mais importante que a rede é ter um site que responda às dúvidas práticas."
    },
    {
      q: "Posso fazer anúncio pago para atrair pais?",
      a: "Pode, desde que o anúncio siga o art. 20: nome completo, CRP, sem promessa, sem preço como chamariz e sem imagem de criança atendida. Evite segmentar anúncios por condição de saúde da criança e use páginas de destino informativas."
    }
  ],
  cover: {
    src: "/blog/marketing-psicologa-infantil/marketing-psicologa-infantil-sala-brinquedos.jpg",
    alt: "Mesa baixa de madeira com revistas, tablet, brinquedos de encaixe e cofrinho, e um ukulele sobre o tapete",
    caption: "Foto: rawpixel.com / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        A psicóloga infantil tem uma particularidade no marketing: quem
        precisa do atendimento não é quem procura. A criança não pesquisa no
        Google nem manda mensagem no WhatsApp. Quem faz isso é uma mãe, um pai,
        uma avó, às vezes depois de um recado da escola ou de uma conversa com
        o pediatra.
      </p>
      <p>
        A resposta curta: o marketing da psicóloga infantil fala com adultos
        cansados e preocupados, em três lugares ao mesmo tempo (Google, redes e
        rede de indicação), com informação clara e sem expor nenhuma criança.
        Abaixo estão as regras, oito frentes de trabalho em ordem de
        prioridade, uma tabela de pode e evitar, erros comuns e um checklist.
      </p>

      <section>
        <h2>O que dizem as normas</h2>
        <p>
          O art. 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>{" "}
          vale para toda divulgação: nome completo e número do CRP, nada de
          preço como forma de propaganda, nada de previsão taxativa de
          resultado e nada de sensacionalismo. O art. 8º lembra que o
          atendimento não eventual de criança depende da autorização de ao
          menos um responsável, o que faz do adulto o seu leitor principal.
        </p>
        <p>
          A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha do CRP-MG (2026)
          </a>{" "}
          diz que o Conselho não restringe os meios de divulgação (site,
          redes, panfleto, rádio) e que a psicóloga pode destacar o público que
          atende, a abordagem e os serviços. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP nº 1/2022
          </a>{" "}
          aplica as mesmas regras às redes sociais. E o{" "}
          <a href={ECA} {...ext}>
            Estatuto da Criança e do Adolescente
          </a>
          , no art. 17, protege a imagem e a identidade da criança, o que vale
          também para posts e fotos.
        </p>
      </section>

      <section>
        <h2>1. Posicionamento: diga que criança e que família você atende</h2>
        <p>
          “Psicóloga infantil” é o começo, não o posicionamento. Pais procuram
          por idade e por demanda: “psicóloga para criança de 4 anos que não
          dorme”, “psicóloga para TDAH infantil”, “psicóloga para criança
          autista”. Quanto mais claro o recorte, mais fácil ser lembrada.
        </p>
        <ol>
          <li>Defina a faixa etária que você atende de fato.</li>
          <li>Liste as três demandas que mais aparecem no seu consultório.</li>
          <li>Diga como a família participa (orientação aos pais, devolutivas).</li>
          <li>Escreva uma frase que junte tudo isso e use em todo lugar.</li>
        </ol>
        <p>
          <em>Exemplo fictício:</em> “Lúcia Prado, psicóloga (CRP 00/00000).
          Atendo crianças de 3 a 11 anos, com foco em ansiedade, sono e
          desenvolvimento atípico, e oriento os pais em cada etapa.”
        </p>
        <p>
          O erro comum é atender “crianças, adolescentes, adultos, casais e
          famílias” na mesma bio. A mãe não sabe se você é a pessoa certa para
          o filho dela. O guia de{" "}
          <Link href="/blog/posicionamento-para-psicologo" className="inst-link">
            posicionamento para psicólogo
          </Link>{" "}
          mostra como fazer esse recorte sem perder pacientes.
        </p>
      </section>

      <section>
        <h2>2. Um site que responda às perguntas dos pais</h2>
        <p>
          Pais pesquisam com calma, quase sempre à noite, depois que a criança
          dorme. O site é o lugar onde eles decidem se vão mandar a mensagem.
          Ele precisa responder às dúvidas práticas antes que elas virem
          pergunta no WhatsApp.
        </p>
        <ul>
          <li>Para quem é o atendimento (idade, demandas).</li>
          <li>Como é a primeira conversa: com os pais, sem a criança, ou com os dois.</li>
          <li>Como os pais participam ao longo do processo.</li>
          <li>Endereço, formato (presencial, online para orientação parental) e horários.</li>
          <li>Quem é você: formação, CRP, foto sua.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo de seção:</em> “A primeira conversa é só com
          os responsáveis. Nela entendo o que trouxe vocês até aqui, a rotina da
          criança e o que a escola tem observado. Depois combinamos juntos os
          próximos passos.”
        </p>
        <p>
          O erro comum é ter só o Instagram, com o link do WhatsApp na bio. Pais
          que chegam pelo Google ou por indicação querem confirmar quem você é
          antes de escrever. Veja{" "}
          <Link href="/blog/site-para-psicologo" className="inst-link">
            o que um site profissional para psicólogo precisa ter
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>3. Google: Perfil da Empresa e páginas por demanda</h2>
        <p>
          Boa parte das buscas por psicóloga infantil é local: “psicóloga
          infantil em Moema”, “psicóloga infantil perto de mim”. O Perfil da
          Empresa no Google e páginas do site com o bairro e a demanda fazem você
          aparecer nessas buscas.
        </p>
        <ol>
          <li>Crie ou revise o Perfil da Empresa com o seu nome real, categoria e horário.</li>
          <li>Coloque fotos do consultório e da fachada, sem crianças.</li>
          <li>Faça uma página no site para cada demanda principal.</li>
          <li>Use títulos com o serviço e a cidade, sem empilhar palavras.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de título:</em> “Psicóloga infantil em
          Curitiba para ansiedade e sono · Lúcia Prado”.
        </p>
        <p>
          Avaliações no Google pedem atenção: não peça avaliação a pais de
          pacientes e não responda revelando que a pessoa é paciente. O guia de{" "}
          <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
            Google Meu Negócio para psicólogo
          </Link>{" "}
          detalha isso, e o de{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>{" "}
          aprofunda as páginas.
        </p>
      </section>

      <section>
        <h2>4. Conteúdo que ajuda os pais a decidir</h2>
        <p>
          Conteúdo para psicóloga infantil funciona quando responde às dúvidas
          que os pais já têm, não quando tenta ensinar psicologia. As perguntas
          mais comuns são “isso é normal para a idade?”, “quando procurar
          ajuda?” e “como é a terapia infantil?”.
        </p>
        <ul>
          <li>Posts que explicam quando vale procurar avaliação, sem listas de diagnóstico.</li>
          <li>Conteúdos sobre como funciona a terapia e o papel dos pais.</li>
          <li>Respostas a dúvidas frequentes em formato curto (carrossel, vídeo de 1 minuto).</li>
          <li>Textos mais longos no site, que o Google encontra por anos.</li>
        </ul>
        <p>
          <em>Exemplo fictício de pauta:</em> “Birra aos 3 anos: o que é
          esperado e quando conversar com uma psicóloga”, com orientação geral e
          sem prometer que a terapia “acaba com as birras”.
        </p>
        <p>
          O erro comum é o post que dá conselho para um caso (“se o seu filho faz
          isso, ele tem…”). Isso é diagnóstico à distância e pode prejudicar
          quem lê. O post de{" "}
          <Link href="/blog/conteudo-para-psicologo-infantil" className="inst-link">
            ideias de conteúdo para psicólogo infantil
          </Link>{" "}
          traz pautas prontas, e o de{" "}
          <Link href="/blog/carrossel-instagram-psicologo" className="inst-link">
            carrossel no Instagram
          </Link>{" "}
          mostra o formato.
        </p>
      </section>

      <section>
        <h2>5. Escolas: informação antes de divulgação</h2>
        <p>
          A escola é, muitas vezes, quem primeiro sugere à família procurar uma
          psicóloga. Ter uma boa relação com coordenações e orientadoras
          educacionais faz o seu nome aparecer no momento certo, desde que a
          aproximação seja profissional e informativa.
        </p>
        <ol>
          <li>Comece pelas escolas do seu bairro e pelas que já têm pacientes seus, sem citar quem.</li>
          <li>Peça uma conversa com a coordenação para entender o que eles mais observam.</li>
          <li>Ofereça algo útil: um encontro com professores ou um material para as famílias.</li>
          <li>Deixe um contato profissional com nome completo e CRP.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma conversa de 40 minutos com
          professores da educação infantil sobre como acolher crianças em
          adaptação, sem falar de nenhum aluno.
        </p>
        <p>
          O erro comum é pedir que a escola “indique você” ou oferecer algo em
          troca de indicação, o que se aproxima de induzir pessoas a recorrer
          aos seus serviços (art. 2º). O guia de{" "}
          <Link href="/blog/parceria-psicologo-escola" className="inst-link">
            parceria entre psicólogo e escola
          </Link>{" "}
          tem o roteiro completo.
        </p>
      </section>

      <section>
        <h2>6. Pediatras e outros profissionais da infância</h2>
        <p>
          Pediatras, fonoaudiólogas, terapeutas ocupacionais e
          neuropediatras encaminham crianças todos os dias. Ser uma indicação
          confiável para eles depende de duas coisas: eles saberem o que você
          faz e receberem retorno quando a família autoriza.
        </p>
        <ul>
          <li>Apresente-se com uma página curta para profissionais no site.</li>
          <li>Explique para quem é o seu atendimento e como é o primeiro contato.</li>
          <li>Combine como será a devolutiva, sempre com consentimento da família.</li>
          <li>Indique também: a rede funciona nos dois sentidos.</li>
        </ul>
        <p>
          <em>Exemplo fictício de mensagem:</em> “Olá, Dra. Paula. Sou Lúcia
          Prado, psicóloga infantil (CRP 00/00000), atendo aqui perto do seu
          consultório. Deixo o link de uma página com como trabalho, caso seja
          útil para alguma família.”
        </p>
        <p>
          O erro comum é mandar o mesmo texto para dezenas de profissionais sem
          nunca conversar. Uma visita ou um café vale mais. O post sobre{" "}
          <Link href="/blog/parceria-psicologo-pediatra" className="inst-link">
            parceria com pediatras
          </Link>{" "}
          aprofunda essa frente.
        </p>
      </section>

      <section>
        <h2>7. Primeiro contato: WhatsApp e agenda</h2>
        <p>
          Muitos pais escrevem uma vez e, se a resposta demora ou é confusa,
          procuram outra profissional. O primeiro contato também é marketing, e
          o mais barato de melhorar.
        </p>
        <ol>
          <li>Tenha uma mensagem de saudação com nome, CRP e prazo de resposta.</li>
          <li>Prepare respostas para as perguntas mais frequentes: idade, formato, plano, valor.</li>
          <li>Responda valor quando perguntarem, em conversa privada, sem usar como isca no perfil.</li>
          <li>Ofereça horários claros para a primeira conversa com os responsáveis.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo de saudação:</em> “Olá! Aqui é a Lúcia Prado,
          psicóloga infantil (CRP 00/00000). Respondo em até um dia útil. Se
          puder, me conte a idade da criança e o que trouxe vocês até aqui.”
        </p>
        <p>
          O erro comum é a primeira mensagem já pedir dados da criança em
          excesso ou detalhes do caso por escrito. Peça o mínimo e deixe o resto
          para a conversa. O guia de{" "}
          <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
            WhatsApp Business para psicólogo
          </Link>{" "}
          traz modelos.
        </p>
      </section>

      <section>
        <h2>8. Imagens: mostre o espaço, não a criança</h2>
        <p>
          A imagem é onde o marketing infantil mais erra. Fotos de crianças
          brincando no consultório comovem, mas mostram atendimento e expõem
          quem está ali. A saída é mostrar o lugar, os objetos e você.
        </p>
        <ul>
          <li>Fotos do consultório com brinquedos e materiais organizados, vazio.</li>
          <li>Retratos seus, em situação de trabalho sem paciente.</li>
          <li>Ilustrações e uma identidade visual que pareça acolhedora sem ser infantilizada.</li>
          <li>Banco de imagem só com licença e sem sugerir sessão.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma foto da mesa baixa com massinha e
          livros, luz natural, sem ninguém, comunica cuidado sem expor ninguém.
        </p>
        <p>
          O erro comum é usar foto de banco com uma criança “fazendo terapia”.
          Mesmo sendo modelo, a imagem sugere sessão. O guia de{" "}
          <Link href="/blog/logo-para-psicologo-infantil" className="inst-link">
            logo para psicólogo infantil
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/decoracao-consultorio-psicologia-infantil" className="inst-link">
            decoração de consultório infantil
          </Link>{" "}
          ajudam a montar esse visual.
        </p>
      </section>

      <section>
        <h2>Pode e evitar no marketing da psicóloga infantil</h2>
        <div className="inst-blog__table" role="region" aria-label="Marketing para psicóloga infantil: o que pode e o que evitar" tabIndex={0}>
          <table>
            <caption>Marketing para psicóloga infantil: o que pode e o que evitar</caption>
            <thead>
              <tr>
                <th scope="col">Frente</th>
                <th scope="col">Pode</th>
                <th scope="col">Evitar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Posicionamento</td>
                <td>Faixa etária, demandas e papel dos pais</td>
                <td>“Atendo todas as idades e demandas”</td>
              </tr>
              <tr>
                <td>Conteúdo</td>
                <td>Orientação geral sobre quando procurar ajuda</td>
                <td>Diagnóstico à distância em post</td>
              </tr>
              <tr>
                <td>Imagens</td>
                <td>Consultório vazio, materiais, você</td>
                <td>Criança atendida ou modelo “em sessão”</td>
              </tr>
              <tr>
                <td>Escolas</td>
                <td>Conversa com a coordenação e material informativo</td>
                <td>Pedir indicação em troca de algo</td>
              </tr>
              <tr>
                <td>Valor</td>
                <td>Informar em conversa privada quando perguntam</td>
                <td>Desconto ou “primeira sessão grátis” como isca</td>
              </tr>
              <tr>
                <td>Resultados</td>
                <td>Explicar como o processo é acompanhado</td>
                <td>Prometer fim das birras, da ansiedade ou prazo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Para quem já faz o básico: descubra de onde vêm as famílias</h2>
        <p>
          Quem já tem site, Google e Instagram costuma não saber qual frente
          traz as famílias. Uma pergunta simples resolve: no primeiro contato,
          pergunte como a família chegou até você e anote numa planilha, sem
          nenhum dado clínico.
        </p>
        <p>
          Em três meses, você sabe se as famílias vêm mais da escola, do
          pediatra, do Google ou das redes, e pode concentrar energia onde
          funciona. Se o Google aparece pouco, revise as páginas por demanda.
          Se as escolas trazem muita gente, uma{" "}
          <Link href="/blog/psicologo-palestra-para-pais" className="inst-link">
            palestra para pais
          </Link>{" "}
          por semestre pode fortalecer esse canal. E se quase tudo vem de
          indicação, o site precisa estar pronto para quem chega desconfiado e
          quer confirmar quem você é.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Se o seu foco são crianças autistas, com TDAH ou outras
          neurodivergências, o marketing pede ainda mais clareza e cuidado. As
          famílias costumam estar exaustas, com filas longas e muita
          informação contraditória.
        </p>
        <ul>
          <li>
            <strong>Diga o que você faz e o que não faz:</strong> avaliação,
            intervenção, orientação parental, e para onde encaminha o resto.
          </li>
          <li>
            <strong>Use linguagem neuroafirmativa,</strong> sem “cura”,
            “sofre de” ou quebra-cabeça.
          </li>
          <li>
            <strong>Explique plano e reembolso</strong> com transparência, sem
            prometer cobertura.
          </li>
          <li>
            <strong>Ofereça um material para pais</strong> com a sua marca,
            útil mesmo para quem ainda não vai marcar.
          </li>
        </ul>
        <p>
          O guia de{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>{" "}
          e o de{" "}
          <Link href="/blog/orientacao-parental-como-divulgar" className="inst-link">
            como divulgar orientação parental
          </Link>{" "}
          aprofundam essa parte.
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Falar com a criança, e não com os pais, no site e nas redes.</li>
          <li>Posicionamento genérico, que atende “todas as idades”.</li>
          <li>Foto de criança, real ou de banco, sugerindo sessão.</li>
          <li>Post que diagnostica à distância.</li>
          <li>Pedir avaliação no Google a pais de pacientes.</li>
          <li>Desconto ou sessão grátis como chamariz.</li>
          <li>Responder o WhatsApp dias depois, sem saudação nem prazo.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist do marketing infantil</h2>
        <ul>
          <li>Tenho uma frase com idade, demandas e papel dos pais.</li>
          <li>O site responde como é a primeira conversa e como os pais participam.</li>
          <li>O Perfil da Empresa no Google está completo e com fotos sem crianças.</li>
          <li>Publico conteúdo que ajuda os pais a decidir, sem diagnosticar.</li>
          <li>Tenho uma página ou material para escolas e pediatras.</li>
          <li>O WhatsApp tem saudação, prazo e respostas prontas.</li>
          <li>Toda peça traz nome completo e CRP.</li>
          <li>Anoto como cada família chegou, sem dado clínico.</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          Na Made by Felipe, a imersão em dois encontros de cerca de 1h30
          entende como você trabalha, para quais famílias e aonde quer chegar.
          Daí saem o posicionamento, a identidade visual, o site e o jeito de
          falar com os pais, revisados pelo art. 20. Tudo é apresentado em até
          30 dias, com o site incluso. Veja a{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>{" "}
          e os{" "}
          <Link href="/cases" className="inst-link">
            cases
          </Link>
          . Se os pais ainda não entendem de primeira para quem é o seu
          atendimento, marque uma conversa de 15 minutos.
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
            , arts. 2º, 8º e 20.
          </li>
          <li>
            Conselho Regional de Psicologia de Minas Gerais.{" "}
            <a href={CARTILHA} {...ext}>
              Orientações sobre publicidade profissional
            </a>
            , edição de abril de 2026 (formas e locais de divulgação).
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
            <a href={ECA} {...ext}>
              Lei nº 8.069/1990 — Estatuto da Criança e do Adolescente
            </a>
            , art. 17.
          </li>
        </ul>
      </section>
    </>
  )
};
