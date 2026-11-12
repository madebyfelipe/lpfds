import type { Comentario } from "@/lib/comentarios";

/**
 * Comentários APROVADOS pelo Felipe. Só entra aqui o que chegou pelo
 * formulário (e-mail "Comentário pendente") e foi aprovado — nunca comentário
 * inventado, de teste ou de seed. Ordem: mais antigo primeiro.
 *
 * Exemplo de entrada:
 *   { slug: "site-para-psicologo", nome: "Ana", texto: "…", data: "2026-11-09" },
 */
export const comentarios: Comentario[] = [];
