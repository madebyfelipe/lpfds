import { Children, Fragment, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import { formatDate, type Post } from "@/lib/blog";
import { temaLabel } from "@/lib/blog-temas";
import type { PostCardData } from "@/components/institucional/PostCard";

export type Heading = { id: string; text: string };

const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) return textOf((node.props as { children?: ReactNode }).children);
  return "";
}

/**
 * Percorre o corpo do post (JSX estático, sem CMS) e devolve: o mesmo corpo com
 * `id` em cada <h2> (âncora do sumário), a lista de h2 e o texto corrido. O
 * conteúdo dos artigos não muda — só ganha o atributo id.
 */
export function readBody(post: Post) {
  const headings: Heading[] = [];
  const used = new Set<string>(["perguntas-frequentes"]);

  const walk = (node: ReactNode): ReactNode =>
    Children.map(node, (child) => {
      if (!isValidElement(child)) return child;
      const el = child as ReactElement<{ children?: ReactNode; id?: string }>;
      if (el.type === "h2") {
        const text = textOf(el.props.children);
        let id = slugify(text) || "secao";
        for (let n = 2; used.has(id); n++) id = `${slugify(text)}-${n}`;
        used.add(id);
        headings.push({ id, text });
        return cloneElement(el, { id });
      }
      // Só desce em tags nativas e fragmentos; componentes (Link) não têm h2.
      if (typeof el.type === "string" || el.type === Fragment) {
        return cloneElement(el, undefined, walk(el.props.children));
      }
      return child;
    });

  const body = walk(post.body);
  if (post.faq?.length) headings.push({ id: "perguntas-frequentes", text: "Perguntas frequentes" });

  const text = [post.summary, textOf(post.body), ...(post.faq ?? []).map((f) => `${f.q} ${f.a}`)].join(" ");
  const words = text.split(/\s+/).filter(Boolean).length;
  // ~200 palavras/min é a média de leitura em pt-BR para texto corrido.
  return { body, headings, minutes: Math.max(1, Math.round(words / 200)) };
}

export function toCard(post: Post): PostCardData {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    publishedAt: post.publishedAt,
    dateLabel: formatDate(post.publishedAt),
    minutes: readBody(post).minutes,
    tags: post.tags,
    tagLabels: post.tags.map(temaLabel),
    cover: post.cover && { src: post.cover.src, alt: post.cover.alt, width: post.cover.width, height: post.cover.height }
  };
}
