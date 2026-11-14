import type { Metadata } from "next";
import "../../institucional.css";
import "./exemplo.css";

/**
 * Exemplo de site de psicóloga — destino do link rastreado do cold mail
 * (/r/<token>, ver lib/prospeccao/clique.ts). Pessoa, CRP, cidade e telefone
 * são FICTÍCIOS e a página diz isso no topo. Fora do Google (noindex) e fora
 * do sitemap. Texto dentro do artigo 20: sem preço, sem promessa, sem foto de
 * atendimento.
 */
export const metadata: Metadata = {
  title: "Exemplo de site para psicóloga — Made by Felipe",
  description: "Exemplo fictício de site de consultório de psicologia feito pela Made by Felipe.",
  robots: { index: false, follow: false }
};

export default function ExemploSitePsicologa() {
  return (
    <div className="inst exemplo">
      <p className="exemplo__aviso">
        Exemplo fictício, criado pela Made by Felipe para mostrar como pode ficar o site de um consultório. A psicóloga, o CRP
        e os contatos abaixo não existem. <a href="https://www.madebyfelipe.com.br/">Conheça o estúdio</a>.
      </p>

      <div className="exemplo__wrap">
        <header className="exemplo__topo">
          <span className="exemplo__marca">Helena Prado · Psicologia</span>
          <span className="exemplo__crp">Psicóloga · CRP 00/00000 (fictício)</span>
        </header>

        <main id="conteudo">
          <section className="exemplo__hero" aria-labelledby="exemplo-titulo">
            <p className="exemplo__kicker">Psicologia infantil e orientação de pais</p>
            <h1 id="exemplo-titulo">Atendimento para crianças e apoio para as famílias</h1>
            <p className="exemplo__lead">
              Atendo crianças de 3 a 12 anos, inclusive autistas e neurodivergentes, e oriento pais e responsáveis. Presencial
              em Campinas e online.
            </p>
            <a className="exemplo__botao" href="#primeiro-contato">
              Como é o primeiro contato
            </a>
          </section>

          <section className="exemplo__secao" aria-labelledby="exemplo-para-quem">
            <h2 id="exemplo-para-quem">Para quem é</h2>
            <ul className="exemplo__grade">
              <li>
                <strong>Crianças</strong>
                Acompanhamento psicológico com brincadeira, rotina e comunicação no centro.
              </li>
              <li>
                <strong>Pais e responsáveis</strong>
                Encontros de orientação para pensar a rotina em casa e na escola.
              </li>
              <li>
                <strong>Escolas</strong>
                Conversa com a equipe, sempre com a autorização da família.
              </li>
            </ul>
          </section>

          <section className="exemplo__secao" id="primeiro-contato" aria-labelledby="exemplo-contato">
            <h2 id="exemplo-contato">Como é o primeiro contato</h2>
            <ol className="exemplo__passos">
              <li>Você manda uma mensagem contando, em poucas linhas, o que motivou a procura.</li>
              <li>Eu respondo com os horários e explico como funciona o atendimento.</li>
              <li>O primeiro encontro é só com os responsáveis, para eu conhecer a história da criança.</li>
            </ol>
          </section>
        </main>

        <footer className="exemplo__rodape">
          Helena Prado · Psicóloga · CRP 00/00000 · dados fictícios deste exemplo.
          <br />
          Site de exemplo feito pela <a href="https://www.madebyfelipe.com.br/">Made by Felipe</a>, estúdio de marca para
          consultórios de psicologia.
        </footer>
      </div>
    </div>
  );
}
