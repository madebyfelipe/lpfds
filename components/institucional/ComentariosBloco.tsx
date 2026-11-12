"use client";

import { useEffect, useState } from "react";
import { ComentarioForm } from "@/components/institucional/ComentarioForm";
import { buscarComentarios, formatarData, type Comentario } from "@/lib/comentarios";

/**
 * Lista + formulário dos comentários. O HTML estático traz só os comentários
 * já aprovados em arquivo (`iniciais`); os do banco chegam por GET depois da
 * hidratação, para a página do post continuar estática. Quem acabou de
 * comentar vê o próprio comentário na hora, sem esperar o cache.
 */
export function ComentariosBloco({ slug, iniciais }: { slug: string; iniciais: Comentario[] }) {
  const [doBanco, setDoBanco] = useState<Comentario[]>([]);
  const [novos, setNovos] = useState<Comentario[]>([]);

  useEffect(() => {
    let vivo = true;
    buscarComentarios(slug)
      .then((lista) => vivo && setDoBanco(lista))
      // Sem a lista a página segue útil: o formulário continua funcionando.
      .catch(() => {});
    return () => {
      vivo = false;
    };
  }, [slug]);

  // O comentário novo pode já estar em `doBanco` se a lista chegar depois do envio.
  const vistos = new Set(doBanco.map((c) => c.id).filter(Boolean));
  const todos = [...iniciais, ...doBanco, ...novos.filter((c) => !c.id || !vistos.has(c.id))];

  return (
    <>
      {todos.length > 0 && (
        <ol className="inst-blog__comment-list">
          {todos.map((c) => (
            <li key={c.id ?? `${c.data}-${c.nome}-${c.texto.slice(0, 20)}`} className="inst-blog__comment">
              <p className="inst-blog__comment-meta">
                {c.nome} · <time dateTime={c.data}>{formatarData(c.data)}</time>
              </p>
              <p className="inst-blog__comment-text">{c.texto}</p>
            </li>
          ))}
        </ol>
      )}
      <p className="inst-blog__comment-note">
        Os comentários são publicados na hora e podem ser removidos depois pela moderação. Pedimos só o seu
        nome; não publique dados de pacientes, nem links, e-mails ou telefones.
      </p>
      <ComentarioForm slug={slug} onPublicado={(c) => setNovos((atual) => [...atual, c])} />
    </>
  );
}
