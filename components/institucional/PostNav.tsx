import Link from "next/link";

type Item = { slug: string; title: string };

/**
 * Anterior / próximo, na ordem de publicação. "Anterior" é o mais antigo e
 * "próximo" o mais recente; quando falta um dos lados a coluna fica vazia.
 */
export function PostNav({ older, newer }: { older?: Item; newer?: Item }) {
  if (!older && !newer) return null;
  return (
    <nav className="inst-postnav" aria-label="Outros artigos">
      {older ? (
        <Link href={`/blog/${older.slug}`} rel="prev" className="inst-postnav__link">
          <span className="inst-postnav__dir">← Artigo anterior</span>
          <span className="inst-postnav__title">{older.title}</span>
        </Link>
      ) : (
        <span />
      )}
      {newer ? (
        <Link
          href={`/blog/${newer.slug}`}
          rel="next"
          className="inst-postnav__link inst-postnav__link--next"
        >
          <span className="inst-postnav__dir">Próximo artigo →</span>
          <span className="inst-postnav__title">{newer.title}</span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}
