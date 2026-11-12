"use client";

import { useEffect, useRef, useState } from "react";

type Item = { chave: string; titulo: string; texto: string };

/**
 * Lista "em foco" do método (referência: Specia1ne, One Page Love). Título
 * grande à esquerda, marcador numerado no eixo e a explicação à direita. Só a
 * linha em foco acende; as outras ficam em tinta apagada (sempre acima de
 * 4.5:1, ver `--gray-300`).
 *
 * Todo o texto está no HTML desde o servidor — sem JS a lista segue completa,
 * com a primeira linha em foco. O foco acompanha o mouse e, no scroll, a linha
 * que passa pelo meio da tela.
 */
export function MetodoFoco({
  itens,
  titulo: Titulo = "h2"
}: {
  itens: Item[];
  titulo?: "h2" | "h3";
}) {
  const [ativo, setAtivo] = useState(0);
  const linhas = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entradas) => {
        for (const e of entradas) {
          if (e.isIntersecting) setAtivo(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    linhas.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="inst-foco">
      <p className="inst-foco__count" aria-hidden="true">
        Em foco <b>{pad(ativo + 1)}</b> / {pad(itens.length)}
      </p>
      <ol className="inst-foco__list">
        {itens.map((item, i) => (
          <li
            key={item.chave}
            ref={(el) => {
              linhas.current[i] = el;
            }}
            data-i={i}
            data-ativo={i === ativo}
            className="inst-foco__row"
            onMouseEnter={() => setAtivo(i)}
          >
            <Titulo className="inst-foco__title">{item.titulo}</Titulo>
            <span className="inst-foco__box" aria-hidden="true">
              {item.chave}
            </span>
            <p className="inst-foco__copy">{item.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
