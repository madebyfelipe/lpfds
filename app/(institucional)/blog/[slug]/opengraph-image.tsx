import { getPost, posts } from "@/lib/blog";
import { ogSize, renderOg } from "@/lib/og";

// og:image por post, com o título do post. Gerada no build (um PNG por slug).
export const alt = "Artigo do blog Made by Felipe";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return renderOg({ kicker: "Blog", title: post?.title ?? "Blog" });
}
