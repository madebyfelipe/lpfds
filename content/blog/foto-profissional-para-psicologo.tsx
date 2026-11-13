import Link from "next/link";
import type { Post } from "@/lib/blog";

const ext = { target: "_blank", rel: "noopener noreferrer", className: "inst-link" } as const;
const CODIGO = "https://site.cfp.org.br/wp-content/uploads/2012/07/codigo-de-etica-psicologia.pdf";
const CARTILHA = "https://acervodigital.crp04.org.br/wp-content/uploads/tainacan-items/9483/81624/CRP-MG_Cartilha-Publicidade-profissional-abril-2026.pdf";
const NOTA = "https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf";
const GBP_FOTOS = "https://support.google.com/business/answer/6103862?hl=pt-BR";
const WCAG = "https://www.w3.org/TR/WCAG21/";

export const post: Post = {
  slug: "foto-profissional-para-psicologo",
  title: "Foto profissional para psicólogo: como escolher a imagem do site e do perfil",
  description:
    "Como escolher a foto profissional do psicólogo para site e redes: enquadramento, luz, fundo e o que evitar segundo o artigo 20 do Código de Ética.",
  keyword: "foto profissional para psicólogo",
  tags: ["identidade-visual", "presenca-digital"],
  publishedAt: "2026-11-12",
  updatedAt: "2026-11-13",
  summary:
    "A foto profissional do psicólogo deve mostrar quem atende, de forma simples e coerente com o consultório: rosto visível, boa luz, fundo discreto e roupa que combine com a marca. Fica de fora qualquer imagem de sessão, paciente ou criança atendida, e o artigo 20 do Código de Ética veda sensacionalismo e autopromoção em detrimento de colegas.",
  faq: [
    {
      q: "Preciso contratar um fotógrafo profissional?",
      a: "Não é obrigatório. Uma foto nítida, com luz natural e fundo simples, feita com um celular recente em modo retrato, resolve o perfil. O fotógrafo vale a pena quando você precisa de um conjunto de imagens para site, redes, Google e materiais impressos, com a mesma luz e o mesmo estilo em todas."
    },
    {
      q: "Psicólogo pode postar foto no consultório?",
      a: "Pode. A foto pode mostrar você e o espaço, desde que não apareça paciente, sessão em andamento, prontuário, agenda ou material produzido em atendimento. Antes de publicar, amplie a imagem e confira cada canto: o problema costuma estar no fundo, não no rosto."
    },
    {
      q: "Qual roupa usar na foto profissional de psicóloga?",
      a: "Não há regra do Conselho sobre roupa. Use algo que você usaria para atender e que combine com as cores da marca, em tons lisos. Estampas grandes, logos de marca de roupa e acessórios chamativos tiram a atenção do rosto e datam a foto rápido."
    },
    {
      q: "Posso usar foto de banco de imagens no site?",
      a: "Para ilustrar um texto ou um ambiente, sim, com licença comercial e crédito quando a licença pedir. Para mostrar quem atende, use foto sua: a família precisa reconhecer a pessoa com quem vai conversar, e uma modelo de banco no lugar do profissional confunde quem chega."
    },
    {
      q: "Com autorização do paciente, posso postar foto com ele?",
      a: "A Nota Técnica CFP 01/2022 diz que, com consentimento expresso e por escrito, o uso de fotos de pessoas atendidas é permitido, mas não recomendado, pelo risco de exposição, em especial de crianças e adolescentes. Para quem atende famílias, a escolha mais segura é não publicar."
    }
  ],
  cover: {
    src: "/blog/foto-profissional-para-psicologo/foto-profissional-para-psicologo-camera-na-mesa.jpg",
    alt: "Câmera fotográfica sobre uma mesa de trabalho com monitor e acessórios",
    caption: "Foto: lookstudio / Magnific",
    width: 2400,
    height: 1350
  },
  body: (
    <>
      <p>
        Antes de marcar o primeiro contato, muitos pais olham o rosto da pessoa
        que vai atender o filho. A foto profissional é uma das primeiras
        informações do site e do perfil, e ajuda a família a imaginar a
        conversa. Ela também é uma das imagens em que mais se erra, por excesso
        de pose, de edição ou de apelo.
      </p>
      <p>
        A resposta curta: uma boa foto profissional para psicólogo mostra o
        rosto com nitidez, em luz natural, sobre um fundo calmo, com roupa e
        cores próximas da marca do consultório. Ela não mostra paciente,
        sessão nem material de atendimento. A seguir estão as regras que valem
        para a imagem, o passo a passo para produzir a foto, onde usar cada
        versão e os cuidados extras para quem atende famílias de crianças
        autistas e neurodivergentes.
      </p>

      <section>
        <h2>O que dizem as normas sobre imagem</h2>
        <p>
          A foto é divulgação, então segue o artigo 20 do{" "}
          <a href={CODIGO} {...ext}>
            Código de Ética Profissional do Psicólogo
          </a>
          . Ele pede nome completo, CRP e número de registro em toda promoção
          pública dos serviços, e veda previsão taxativa de resultados,
          autopromoção em detrimento de outros profissionais e divulgação
          sensacionalista. Na prática: a foto não leva selo de &ldquo;o
          melhor&rdquo;, nem legenda de promessa, e o perfil onde ela aparece
          traz nome e CRP.
        </p>
        <p>
          O sigilo entra pelo artigo 9º. A{" "}
          <a href={CARTILHA} {...ext}>
            cartilha de publicidade do CRP-MG (2026)
          </a>{" "}
          diz que é vedada a exposição de &ldquo;dados, imagens, desenhos,
          mensagens e qualquer material decorrente de serviços
          psicológicos&rdquo; que possa identificar a pessoa atendida. A{" "}
          <a href={NOTA} {...ext}>
            Nota Técnica CFP 01/2022
          </a>{" "}
          completa: com consentimento expresso e por escrito, fotos de pessoas
          atendidas são permitidas, mas não recomendadas, em especial de
          crianças e adolescentes.
        </p>
        <p>
          A cartilha também lembra que, a partir do momento em que você se
          apresenta como psicólogo numa rede social, mesmo pessoal, responde
          eticamente pelo que posta ali. Isso inclui as fotos.
        </p>
      </section>

      <section>
        <h2>O que a foto precisa comunicar</h2>
        <p>
          A foto precisa responder a uma pergunta da família: &ldquo;com quem eu
          vou falar?&rdquo;. Tudo o que não ajuda a responder isso é ruído.
        </p>
        <ol>
          <li><strong>Quem você é:</strong> rosto visível, expressão natural, olhar para a câmera.</li>
          <li><strong>Acolhimento e seriedade ao mesmo tempo:</strong> nem pose de campanha, nem foto de férias.</li>
          <li><strong>Coerência com a marca:</strong> cores, luz e estilo próximos da identidade visual do consultório.</li>
          <li><strong>Atualidade:</strong> a pessoa da foto é a pessoa que abre a porta hoje.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia usa no site uma
          foto de formatura de dez anos atrás, com fundo de estúdio azul. Na
          primeira sessão, a mãe comenta que quase não a reconheceu. Uma foto
          recente, feita na própria sala de espera vazia, com a parede clara e
          uma planta, resolveria as duas coisas: reconhecimento e coerência com
          o espaço.
        </p>
        <p>
          <strong>Erro comum:</strong> escolher a foto em que você se acha mais
          bonito, e não a que mais se parece com você num dia de atendimento.
        </p>
        <p>
          A foto é uma peça da marca, não um enfeite. Sobre a base que ela
          precisa respeitar, veja{" "}
          <Link href="/blog/identidade-visual-para-psicologo" className="inst-link">
            identidade visual para psicólogo
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Enquadramento, luz e fundo: o passo a passo</h2>
        <p>
          Luz natural de frente ou de lado, fundo simples e enquadramento do
          peito para cima resolvem a maior parte dos casos. O passo a passo:
        </p>
        <ol>
          <li>
            <strong>Escolha a hora.</strong> Perto de uma janela, em horário de
            luz indireta, sem sol batendo direto no rosto. Sombra dura embaixo
            dos olhos envelhece e cansa.
          </li>
          <li>
            <strong>Escolha o fundo.</strong> Parede lisa, estante organizada ou
            o consultório vazio. Afaste-se um ou dois metros da parede para o
            fundo ficar levemente desfocado.
          </li>
          <li>
            <strong>Posicione a câmera na altura dos olhos.</strong> De baixo
            para cima a foto fica imponente; de cima para baixo, infantilizada.
          </li>
          <li>
            <strong>Faça três enquadramentos.</strong> Rosto e ombros (perfil das
            redes), peito para cima (site, Google) e meio corpo com o espaço
            (página &ldquo;sobre&rdquo;).
          </li>
          <li>
            <strong>Faça muitas e escolha poucas.</strong> Fale, ria, respire
            entre os cliques. A expressão natural aparece depois da décima foto.
          </li>
          <li>
            <strong>Edite pouco.</strong> Corrija luz e cor; não mude o rosto.
            Quem chega ao consultório encontra você pessoalmente.
          </li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> um psicólogo fictício faz as fotos com o
          celular apoiado numa pilha de livros, timer de 3 segundos, numa
          manhã nublada ao lado da janela. Sai com uma imagem de perfil, uma
          horizontal para o site e uma de meio corpo na poltrona vazia.
        </p>
        <p>
          <strong>Erro comum:</strong> usar o modo retrato do celular com o
          desfoque no máximo, que recorta mal o cabelo e os óculos. Deixe o
          desfoque leve.
        </p>
      </section>

      <section>
        <h2>Roupa, cores e estilo coerentes com a marca</h2>
        <p>
          Use a roupa com que você atende, em cores lisas que conversem com a
          paleta do consultório. Não existe regra do Conselho sobre roupa; o
          critério é coerência.
        </p>
        <ul>
          <li>Tons lisos, sem estampa grande, sem logo de marca de roupa à vista.</li>
          <li>Uma cor da paleta da marca na roupa ou no fundo, não nos dois.</li>
          <li>Acessórios discretos, para o olhar ir ao rosto.</li>
          <li>Leve duas ou três trocas: o que funciona no espelho nem sempre funciona na foto.</li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> se a marca de uma psicóloga fictícia usa
          verde-oliva e areia, uma camisa areia sobre fundo de parede clara,
          com uma planta verde ao lado, amarra a foto à identidade sem parecer
          produção de moda.
        </p>
        <p>
          <strong>Erro comum:</strong> roupa de festa ou excessivamente formal
          para um consultório infantil. A criança e os pais precisam ver alguém
          que senta no chão para brincar, não um terno de tribunal.
        </p>
        <p>
          Para escolher a paleta antes da foto, veja{" "}
          <Link href="/blog/cores-para-consultorio-de-psicologia" className="inst-link">
            cores para consultório de psicologia
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Fotos do consultório: o que pode aparecer no quadro</h2>
        <p>
          Você e o espaço vazio podem aparecer. Paciente, sessão, agenda,
          prontuário e material produzido em atendimento, não.
        </p>
        <ol>
          <li>Arrume o espaço como ele fica entre um atendimento e outro.</li>
          <li>Tire do enquadramento agenda, quadro de horários, pastas e papéis com nomes.</li>
          <li>Guarde desenhos, produções e materiais usados em sessão.</li>
          <li>Confira reflexos em vidros, telas de computador e celular.</li>
          <li>Amplie cada foto antes de publicar e olhe os cantos.</li>
        </ol>
        <p>
          <em>Exemplo ilustrativo:</em> numa foto fictícia da sala, um desenho
          infantil preso na parede ao fundo, com nome e idade escritos no canto,
          passa despercebido na tela do celular e fica legível no site em tela
          cheia. Retirar o desenho antes do clique evita expor uma criança.
        </p>
        <p>
          <strong>Erro comum:</strong> achar que &ldquo;não dá para
          reconhecer&rdquo; basta. A cartilha do CRP-MG lembra que o compromisso
          com o sigilo é do psicólogo, não do usuário.
        </p>
        <p>
          A decoração que vai aparecer nessas fotos tem um texto próprio:{" "}
          <Link href="/blog/decoracao-consultorio-psicologia-infantil" className="inst-link">
            decoração de consultório de psicologia infantil
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Onde usar cada imagem</h2>
        <p>
          A mesma sessão de fotos abastece site, redes e Google. O que muda é o
          recorte.
        </p>
        <ul>
          <li>
            <strong>Site:</strong> foto horizontal na página inicial e meio corpo
            na página &ldquo;sobre&rdquo;, com a mesma luz (veja{" "}
            <Link href="/blog/criacao-de-site-para-psicologos" className="inst-link">
              criação de site para psicólogos
            </Link>
            ).
          </li>
          <li>
            <strong>Instagram e WhatsApp:</strong> rosto e ombros, centralizado,
            porque o perfil é recortado em círculo e aparece pequeno (veja{" "}
            <Link href="/blog/instagram-para-psicologos" className="inst-link">
              Instagram para psicólogos
            </Link>{" "}
            e{" "}
            <Link href="/blog/whatsapp-business-para-psicologo" className="inst-link">
              WhatsApp Business para psicólogo
            </Link>
            ).
          </li>
          <li>
            <strong>Perfil da Empresa no Google:</strong> o{" "}
            <a href={GBP_FOTOS} {...ext}>
              Google recomenda
            </a>{" "}
            JPG ou PNG, entre 10 KB e 5 MB, 720 × 720 px, nítida, bem iluminada
            e sem filtro em excesso. Inclua também a fachada e a entrada, para a
            família reconhecer o local (veja{" "}
            <Link href="/blog/google-meu-negocio-para-psicologo" className="inst-link">
              Google Meu Negócio para psicólogo
            </Link>
            ).
          </li>
          <li>
            <strong>Materiais impressos:</strong> a versão de maior resolução,
            sem compressão de rede social.
          </li>
        </ul>
        <p>
          <strong>Erro comum:</strong> usar uma foto diferente em cada canal. A
          família que acha você no Google e depois abre o Instagram precisa
          reconhecer a mesma pessoa.
        </p>
      </section>

      <section>
        <h2>Pode e evitar, lado a lado</h2>
        <div className="inst-blog__table" role="region" aria-label="O que pode e o que evitar na foto profissional do psicólogo" tabIndex={0}>
          <table>
            <caption>O que pode e o que evitar na foto profissional do psicólogo</caption>
            <thead><tr><th scope="col">Pode</th><th scope="col">Evitar</th></tr></thead>
            <tbody>
              <tr><td>Rosto visível, expressão natural, olhar para a câmera</td><td>Óculos escuros, foto de festa, praia ou bebida na mão</td></tr>
              <tr><td>Você no consultório vazio</td><td>Paciente, sessão em andamento ou criança atendida, mesmo de costas</td></tr>
              <tr><td>Estante, poltrona, janela, plantas</td><td>Agenda, prontuário, nomes ou produções de atendimento no quadro</td></tr>
              <tr><td>Correção leve de luz e cor</td><td>Filtro que muda o rosto ou foto de dez anos atrás</td></tr>
              <tr><td>Legenda com nome, CRP e o público que você atende</td><td>Legenda com &ldquo;o melhor&rdquo;, &ldquo;referência&rdquo; ou promessa de resultado</td></tr>
              <tr><td>Foto de banco para ilustrar um texto, com licença</td><td>Modelo de banco no lugar da sua foto de perfil</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>Texto alternativo e nome do arquivo</h2>
        <p>
          Toda foto no site precisa de texto alternativo. As{" "}
          <a href={WCAG} {...ext}>
            Diretrizes de Acessibilidade para Conteúdo Web (WCAG 2.1)
          </a>{" "}
          pedem alternativa em texto para conteúdo não textual, e quem usa
          leitor de tela depende dela.
        </p>
        <ul>
          <li>Descreva a cena em uma frase: &ldquo;Psicóloga sorrindo, sentada em poltrona clara ao lado de uma estante&rdquo;.</li>
          <li>Não comece com &ldquo;imagem de&rdquo; nem empilhe palavras-chave.</li>
          <li>Nomeie o arquivo em minúsculas, sem acento: <em>nome-sobrenome-psicologa.jpg</em>, não <em>IMG_4821.jpg</em>.</li>
          <li>Comprima antes de subir, para a página carregar rápido no celular.</li>
        </ul>
        <p>
          <strong>Erro comum:</strong> repetir o mesmo alt em todas as fotos do
          site. Cada imagem descreve o que mostra. Mais sobre como o Google lê o
          site em{" "}
          <Link href="/blog/seo-para-psicologos" className="inst-link">
            SEO para psicólogos
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Para quem já tem uma boa foto: o banco de imagens próprio</h2>
        <p>
          Quem já tem foto de perfil resolvida ganha mais com um pequeno banco
          de imagens próprio do que com uma nova sessão a cada ano. Numa única
          tarde de fotos, vale produzir:
        </p>
        <ul>
          <li>três ou quatro retratos com expressões diferentes;</li>
          <li>detalhes do espaço sem pessoas: mesa, livros, janela, porta de entrada;</li>
          <li>imagens horizontais com área livre para texto, úteis em capas de posts e no site;</li>
          <li>a fachada e o caminho da entrada, para o Google e para a página de contato.</li>
        </ul>
        <p>
          Combine com o fotógrafo, por escrito, os direitos de uso das imagens
          (site, redes, impressos) e por quanto tempo. Guarde os originais em
          alta, com nomes descritivos, numa pasta que você encontre daqui a dois
          anos. Esse banco evita o recurso a fotos genéricas e mantém a
          coerência entre site, redes e materiais.
        </p>
      </section>

      <section>
        <h2>Para quem atende famílias de crianças autistas e neurodivergentes</h2>
        <p>
          Para essas famílias, a foto do profissional e do espaço faz parte da
          preparação da criança. Muitas mães e pais mostram a foto antes da
          primeira consulta, para a visita ser menos imprevisível. Isso pede
          alguns cuidados a mais:
        </p>
        <ul>
          <li>
            <strong>Previsibilidade:</strong> publique fotos da porta de entrada,
            da sala de espera e da sala de atendimento vazias, do jeito que a
            criança vai encontrar.
          </li>
          <li>
            <strong>Atualização:</strong> se mudou o cabelo, os óculos ou a sala,
            troque a foto. A diferença pode incomodar uma criança que se
            preparou olhando para ela.
          </li>
          <li>
            <strong>Nada de crianças:</strong> nem atendidas, nem de banco de
            imagens simulando atendimento. A Nota Técnica cita o risco de
            exposição de crianças e o artigo 17 do Estatuto da Criança e do
            Adolescente, que protege a imagem e a identidade.
          </li>
          <li>
            <strong>Legenda descritiva:</strong> &ldquo;Esta é a sala onde
            atendo; a luz é regulável e os brinquedos ficam guardados&rdquo;
            informa mais do que adjetivos.
          </li>
        </ul>
        <p>
          <em>Exemplo ilustrativo:</em> uma psicóloga fictícia cria um destaque
          no Instagram chamado &ldquo;Primeira visita&rdquo;, com cinco fotos do
          caminho até a sala. Pais de crianças autistas passam a pedir o link no
          primeiro contato. Mais ideias em{" "}
          <Link href="/blog/consultorio-acessivel-sensorial-autismo" className="inst-link">
            consultório acessível para autistas
          </Link>{" "}
          e em{" "}
          <Link href="/blog/marca-para-psicologo-autismo-neurodivergencia" className="inst-link">
            marca para psicólogo que atende autismo e neurodivergência
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>Erros comuns</h2>
        <ul>
          <li>Foto antiga, que não se parece mais com você.</li>
          <li>Selfie com braço esticado e luz de teto.</li>
          <li>Fundo com agenda, nomes ou produções de atendimento.</li>
          <li>Filtros de pele e de rosto que mudam a sua aparência.</li>
          <li>Uma foto diferente em cada canal.</li>
          <li>Foto com paciente, mesmo autorizada, para fins de divulgação.</li>
          <li>Banco de imagens no lugar da foto de quem atende.</li>
          <li>Legenda com superlativo ou promessa.</li>
        </ul>
      </section>

      <section>
        <h2>Checklist antes de publicar</h2>
        <ul>
          <li>O rosto está nítido e bem iluminado?</li>
          <li>A foto é recente?</li>
          <li>O fundo está limpo de nomes, agenda e material de atendimento?</li>
          <li>Roupa e cores conversam com a marca?</li>
          <li>Há um recorte para cada canal (perfil, site, Google)?</li>
          <li>O perfil onde a foto aparece mostra nome completo e CRP?</li>
          <li>A imagem tem texto alternativo e nome de arquivo descritivo?</li>
          <li>Os direitos de uso com o fotógrafo estão combinados por escrito?</li>
        </ul>
      </section>

      <section>
        <h2>Como o estúdio trabalha</h2>
        <p>
          A Made by Felipe constrói a marca de consultórios de psicologia em dois
          dias de imersão: posicionamento, identidade visual e verbal, no ar em
          45 dias, dentro do artigo 20 do Código de Ética. A direção das fotos
          entra nessa identidade, para que retrato, site e redes falem a mesma
          língua. Veja como funciona na{" "}
          <Link href="/metodologia" className="inst-link">
            metodologia
          </Link>
          . Se quiser conversar sobre a sua marca, o primeiro passo é uma
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
            , arts. 9º e 20.
          </li>
          <li>
            CRP-MG.{" "}
            <a href={CARTILHA} {...ext}>
              Cartilha de publicidade profissional
            </a>
            , abril de 2026 (seções &ldquo;Sigilo&rdquo; e &ldquo;Perfis em redes sociais&rdquo;).
          </li>
          <li>
            Conselho Federal de Psicologia.{" "}
            <a href={NOTA} {...ext}>
              Nota Técnica nº 01/2022 — Uso profissional das redes sociais: publicidade e cuidados éticos
            </a>
            .
          </li>
          <li>
            Google.{" "}
            <a href={GBP_FOTOS} {...ext}>
              Gerenciar fotos e vídeos do Perfil da Empresa
            </a>{" "}
            (diretrizes de fotos).
          </li>
          <li>
            W3C.{" "}
            <a href={WCAG} {...ext}>
              Web Content Accessibility Guidelines (WCAG) 2.1
            </a>
            , critério 1.1.1.
          </li>
        </ul>
      </section>
    </>
  )
};
