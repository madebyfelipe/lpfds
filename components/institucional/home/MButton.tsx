/**
 * Miolo do botão no padrão Monolog: texto que sobe no hover (a cópia de baixo
 * é um text-shadow) e seta que sai pela diagonal enquanto outra entra. Vai
 * dentro de um <a>/<button> com a classe `mbtn`; quem decide a tag é o pai.
 */
export function MButtonInner({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span className="mbtn__text-wrap">
        <span className="mbtn__text">{children}</span>
      </span>
      <span className="mbtn__aside" aria-hidden="true">
        <span className="mbtn__aside-bg" />
        <Arrow className="mbtn__arrow" />
        <Arrow className="mbtn__arrow mbtn__arrow--in" />
      </span>
    </>
  );
}

function Arrow({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" focusable="false">
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
