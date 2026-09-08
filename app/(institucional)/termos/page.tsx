import type { Metadata } from "next";
import Link from "next/link";
import { LegalIdentificacao, LegalPage } from "@/components/institucional/LegalPage";
import { CONTATO_EMAIL, identificacaoLinhas } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Termos de Uso | Made by Felipe",
  description:
    "Condições de uso do site madebyfelipe.com, propriedade intelectual do conteúdo e regras dos serviços de branding contratados com a Made by Felipe.",
  alternates: { canonical: "/termos" }
};

export default function TermosPage() {
  return (
    <LegalPage
      kicker="Termos"
      titulo="Termos de Uso"
      resumo="Estas condições valem para quem navega neste site e para quem contrata os serviços apresentados nele."
    >
      <section>
        <h2>1. Quem opera este site</h2>
        <LegalIdentificacao linhas={identificacaoLinhas()} />
      </section>

      <section>
        <h2>2. O que este site é</h2>
        <p>
          Este é o site institucional de um estúdio de branding. Ele apresenta o
          método de trabalho, o portfólio e os canais de contato. Os
          formulários servem para pedir contato — preencher qualquer um deles
          não fecha contrato, não reserva vaga na agenda e não gera cobrança.
        </p>
        <p>
          O conteúdo publicado aqui é informativo. Não é consultoria jurídica,
          contábil, publicitária regulada nem orientação clínica, e não
          substitui a análise do seu caso concreto.
        </p>
      </section>

      <section>
        <h2>3. Como o contrato nasce</h2>
        <p>
          O serviço só existe depois de proposta escrita, com escopo, prazo e
          preço definidos, aceita pelas duas partes. Se algo nestes Termos
          divergir da proposta assinada, <strong>vale a proposta</strong>.
        </p>
        <p>
          Preços não são divulgados neste site: eles dependem do escopo e são
          apresentados na proposta.
        </p>
      </section>

      <section>
        <h2>4. Propriedade intelectual</h2>
        <p>
          Textos, fotografias, diagramas, layout e código deste site pertencem à
          Made by Felipe ou são usados sob licença. As peças exibidas no
          portfólio são trabalhos de autoria do estúdio, publicados com
          autorização dos respectivos clientes; marcas, logotipos e nomes de
          terceiros que aparecem nesses cases pertencem aos seus titulares e são
          exibidos apenas para identificar o trabalho realizado.
        </p>
        <p>
          Reproduzir, copiar ou redistribuir esse material fora de citação com
          crédito e link depende de autorização por escrito. Para pedir, escreva
          para{" "}
          <a href={`mailto:${CONTATO_EMAIL}`} className="inst-link">
            {CONTATO_EMAIL}
          </a>
          .
        </p>
        <p>
          Nos projetos contratados, a titularidade das peças entregues é
          transferida ao cliente conforme a proposta, após a quitação integral.
          O estúdio mantém o direito de exibir o trabalho em portfólio, salvo
          acordo de confidencialidade em contrário.
        </p>
      </section>

      <section>
        <h2>5. Uso aceitável</h2>
        <p>Ao usar o site, você concorda em não:</p>
        <ul>
          <li>
            enviar dados de terceiros nos formulários sem autorização de quem
            eles se referem;
          </li>
          <li>
            enviar dados de pacientes, prontuários ou qualquer informação
            clínica — este não é um canal de atendimento;
          </li>
          <li>
            tentar obter acesso não autorizado, sobrecarregar o serviço ou
            extrair conteúdo por meios automatizados em escala;
          </li>
          <li>usar o conteúdo para atividade ilícita ou enganosa.</li>
        </ul>
      </section>

      <section>
        <h2>6. Disponibilidade e links externos</h2>
        <p>
          O site pode ficar indisponível por manutenção ou por falha de
          fornecedores de infraestrutura. Não garantimos funcionamento
          ininterrupto nem ausência de erros no conteúdo, embora ele seja
          revisado.
        </p>
        <p>
          Há links para sites de terceiros (redes sociais, agenda, arquivos). O
          que acontece do outro lado é responsabilidade de quem opera aquele
          serviço, sob os termos e a política de privacidade dele.
        </p>
      </section>

      <section>
        <h2>7. Responsabilidade</h2>
        <p>
          Nos serviços contratados, respondemos pela execução do escopo acordado
          na proposta. Resultados comerciais dependem de fatores fora do
          controle do estúdio — oferta, preço, atendimento e condução comercial
          do cliente —, e por isso não são garantidos. Nada aqui afasta os
          direitos que o Código de Defesa do Consumidor assegura quando ele for
          aplicável.
        </p>
      </section>

      <section>
        <h2>8. Privacidade</h2>
        <p>
          O tratamento de dados pessoais é descrito na{" "}
          <Link href="/privacidade" className="inst-link">
            Política de Privacidade
          </Link>{" "}
          e o uso de cookies na{" "}
          <Link href="/cookies" className="inst-link">
            Política de Cookies
          </Link>
          , que integram estes Termos.
        </p>
      </section>

      <section>
        <h2>9. Alterações</h2>
        <p>
          Estes Termos podem mudar; a data de atualização no topo indica a
          versão vigente. Contratos já assinados seguem a versão vigente na data
          da assinatura.
        </p>
      </section>

      <section>
        <h2>10. Lei aplicável e foro</h2>
        <p>
          Aplica-se a lei brasileira. Fica eleito o foro do domicílio do
          consumidor para as relações de consumo; nas demais, o foro da comarca
          da sede do estúdio.
        </p>
      </section>
    </LegalPage>
  );
}
