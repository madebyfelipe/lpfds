/**
 * Temas do blog. Arquivo separado de `lib/blog.ts` de propósito: o filtro da
 * listagem é um componente cliente e não pode importar `blog.ts`, que puxa o
 * corpo de todos os posts para o bundle.
 */
export const temas = [
  { slug: "identidade-visual", label: "Identidade visual" },
  { slug: "divulgacao-etica", label: "Divulgação e ética" },
  { slug: "presenca-digital", label: "Presença digital" },
  { slug: "posicionamento", label: "Posicionamento" },
  { slug: "neurodivergencia", label: "Neurodivergência" }
] as const;

export type TemaSlug = (typeof temas)[number]["slug"];

export function temaLabel(slug: TemaSlug) {
  return temas.find((t) => t.slug === slug)!.label;
}
