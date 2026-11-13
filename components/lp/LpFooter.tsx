import Link from "next/link";
import { identificacaoLinhas, paginasLegais } from "@/lib/legal";

/** Rodapé enxuto das LPs: identificação do estúdio e páginas legais. */
export function LpFooter() {
  return (
    <footer className="lp-foot">
      <p className="lp-foot__mark" aria-hidden="true">
        Made by Felipe®
      </p>
      <div className="lp-foot__row">
        <p className="lp-foot__id">{identificacaoLinhas().join(" · ")}</p>
        <nav aria-label="Páginas legais">
          <ul className="lp-foot__legal">
            {paginasLegais.map((p) => (
              <li key={p.href}>
                <Link href={p.href}>{p.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
