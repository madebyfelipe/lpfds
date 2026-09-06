import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferencias } from "@/components/CookieConsent";
import { LegalPage } from "@/components/institucional/LegalPage";
import { CONTATO_EMAIL } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de Cookies | Made by Felipe",
  description:
    "Quais cookies este site usa, para quê, e como aceitar ou recusar os cookies de medição a qualquer momento.",
  alternates: { canonical: "/cookies" }
};

// A tabela abaixo tem de espelhar o que `lib/consent.ts` de fato libera.
// Cookie novo no site = linha nova aqui.
export default function CookiesPage() {
  return (
    <LegalPage
      kicker="Cookies"
      titulo="Política de Cookies"
      resumo="Este site funciona inteiro sem cookies de rastreamento. Os de medição só são gravados se você aceitar — e a decisão pode ser mudada aqui embaixo quando quiser."
    >
      <section>
        <h2>1. O que são</h2>
        <p>
          Cookies são pequenos arquivos que um site guarda no seu navegador para
          lembrar de alguma coisa entre uma visita e outra. Tecnologias
          parecidas — <code>localStorage</code> e pixels de medição — fazem o
          mesmo papel e estão cobertas por esta política.
        </p>
      </section>

      <section>
        <h2>2. O que este site usa</h2>

        <h3>2.1 Necessários (sempre ativos)</h3>
        <p>
          Guardam apenas a sua própria escolha. Ficam no armazenamento local do
          seu navegador (<code>localStorage</code>), <strong>nunca são enviados
          ao servidor</strong> e não identificam você para ninguém. Não dependem
          de consentimento porque sem eles o site não consegue respeitar suas
          preferências.
        </p>
        <ul>
          <li>
            <code>mbf-consent</code> — a decisão que você tomou no banner, para
            não perguntarmos de novo a cada página. Vale por 12 meses; depois
            disso o banner pergunta outra vez.
          </li>
          <li>
            <code>inst-theme</code> — se você escolheu o tema claro ou escuro.
          </li>
          <li>
            <code>mbf-ebook-download</code> — gravado apenas se você baixou o
            e-book, para reabrir o link sem cadastrar de novo.
          </li>
        </ul>

        <h3>2.2 Medição (só com o seu aceite)</h3>
        <ul>
          <li>
            <strong>Meta Pixel</strong> (<code>_fbp</code>, <code>fr</code>) —
            mede quantas pessoas chegam ao site a partir de anúncios e
            publicações no Instagram e no Facebook. O script só é carregado
            depois do aceite; se você recusar, ele não é baixado e nenhum
            cookie da Meta é gravado.
          </li>
        </ul>

        <h3>2.3 Conteúdo incorporado (só com o seu aceite)</h3>
        <p>
          A página <Link href="/hub" className="inst-link">/hub</Link> pode
          exibir publicações do Instagram e do TikTok. Esses blocos vêm dos
          servidores das próprias plataformas, que gravam cookies próprios ao
          carregar. Por isso eles só são carregados depois do aceite — sem ele,
          no lugar do bloco aparece um link para abrir a publicação na
          plataforma.
        </p>
      </section>

      <section>
        <h2>3. Mudar sua escolha</h2>
        <p>
          Sua decisão vale por 12 meses e pode ser trocada quando quiser, aqui
          mesmo:
        </p>
        <CookiePreferencias />
        <p>
          Você também pode apagar cookies e bloquear novos pelas configurações
          do seu navegador. Bloquear os necessários não impede o site de
          funcionar, mas faz o banner reaparecer a cada visita.
        </p>
      </section>

      <section>
        <h2>4. Dúvidas</h2>
        <p>
          O que fazemos com os dados que essas ferramentas coletam está na{" "}
          <Link href="/privacidade" className="inst-link">
            Política de Privacidade
          </Link>
          . Se ficar alguma dúvida, escreva para{" "}
          <a href={`mailto:${CONTATO_EMAIL}`} className="inst-link">
            {CONTATO_EMAIL}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
