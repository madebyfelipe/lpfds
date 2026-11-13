import Image from "next/image";
import { formatDate } from "@/lib/blog";

/**
 * Autoria no topo do post: avatar + nome + data, no lugar da linha de texto
 * corrido que havia antes ("13 de novembro de 2026 · 6 min de leitura · Por
 * Felipe"). A autoria completa (bio, link para o método) continua no fim do
 * artigo, em AuthorBox — aqui é só identificação rápida, como em blogs de
 * empresa (ex.: RD Station), mas com o Felipe no lugar da marca.
 */
export function PostByline({ publishedAt, minutes }: { publishedAt: string; minutes: number }) {
  return (
    <div className="inst-blog__byline">
      <Image
        src="/institucional/felipe-avatar.jpg"
        alt=""
        width={96}
        height={96}
        sizes="48px"
        className="inst-blog__byline-avatar"
      />
      <div>
        <p className="inst-blog__byline-name">Felipe</p>
        <p className="inst-blog__byline-meta">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          {" · "}
          {minutes} min de leitura
        </p>
      </div>
    </div>
  );
}
