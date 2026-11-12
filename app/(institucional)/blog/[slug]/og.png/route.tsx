import { getPost, posts } from "@/lib/blog";
import { renderOg } from "@/lib/og";

// og:image gerado com o título, em URL fixa (/blog/<slug>/og.png), para
// posts SEM capa. Era um opengraph-image.tsx, mas arquivo de metadata tem
// prioridade sobre o `openGraph.images` da página e esconderia a capa.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  return renderOg({ kicker: "Blog", title: post?.title ?? "Blog" });
}
