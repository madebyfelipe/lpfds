import Image from "next/image";
import { formatDate } from "@/lib/blog";

/**
 * Autoria no topo do post, no padrão de blog de empresa (RD Station): avatar
 * redondo, nome em destaque e a data logo abaixo. O nome leva à caixa
 * "Sobre o autor" no fim do artigo.
 */
export function PostByline({
  publishedAt,
  updatedAt,
  minutes
}: {
  publishedAt: string;
  updatedAt?: string;
  minutes: number;
}) {
  return (
    <div className="inst-byline">
      <Image
        src="/institucional/felipe-avatar.jpg"
        alt=""
        width={96}
        height={96}
        sizes="48px"
        className="inst-byline__avatar"
      />
      <div className="inst-byline__text">
        <a href="#sobre-o-autor" className="inst-byline__name">
          Felipe Silva
        </a>
        <p className="inst-byline__meta">
          <time dateTime={publishedAt}>{formatDate(publishedAt)}</time>
          {updatedAt && updatedAt !== publishedAt && (
            <>
              {" · atualizado em "}
              <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
            </>
          )}
          {` · ${minutes} min de leitura`}
        </p>
      </div>
    </div>
  );
}
