import { ATUALIZADO_EM } from "@/lib/legal";

/**
 * Casca das páginas legais (/privacidade, /cookies, /termos, /reembolso).
 *
 * Só estrutura e tipografia: o conteúdo de cada página é o `children`. Existe
 * para as quatro páginas não copiarem o mesmo cabeçalho e a mesma data de
 * atualização — que precisam bater entre si.
 */
export function LegalPage({
  kicker,
  titulo,
  resumo,
  children
}: {
  kicker: string;
  titulo: string;
  resumo?: string;
  children: React.ReactNode;
}) {
  return (
    <main id="conteudo" className="inst-legal">
      <header className="inst-legal__head">
        <p className="inst-kicker inst-kicker--tight">— {kicker}</p>
        <h1 className="inst-legal__title">{titulo}</h1>
        {resumo && <p className="inst-legal__lead">{resumo}</p>}
        <p className="inst-legal__updated">
          Última atualização: {ATUALIZADO_EM}
        </p>
      </header>
      <div className="inst-legal__body">{children}</div>
    </main>
  );
}

/** Bloco de identificação do controlador/contratado, igual nas quatro páginas. */
export function LegalIdentificacao({ linhas }: { linhas: string[] }) {
  return (
    <address className="inst-legal__id">
      {linhas.map((linha) => (
        <span key={linha}>{linha}</span>
      ))}
    </address>
  );
}
