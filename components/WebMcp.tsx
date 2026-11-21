"use client";

import { useEffect } from "react";

/**
 * WebMCP — expõe três ações do site como ferramentas para o navegador-agente.
 *
 * O padrão é novo e o nome do objeto ainda muda (`navigator.modelContext` em
 * versões antigas, `document.modelContext` na atual): tentamos os dois e, se
 * não houver nenhum, o componente não faz nada — zero custo para quem não tem
 * suporte. As ferramentas são de leitura/rolagem; nada é enviado, comprado ou
 * apagado sem o clique da pessoa.
 */

type Registrador = {
  registerTool?: (tool: unknown) => unknown;
  provideContext?: (contexto: unknown) => unknown;
};

type Ferramenta = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: () => Promise<string>;
};

function acharRegistrador(): Registrador | null {
  const nav = navigator as Navigator & { modelContext?: Registrador };
  const doc = document as Document & { modelContext?: Registrador };
  return nav.modelContext ?? doc.modelContext ?? null;
}

export function WebMcp() {
  useEffect(() => {
    const registrador = acharRegistrador();
    if (!registrador) return;

    const irPara = (id: string) => {
      const alvo = document.getElementById(id);
      if (!alvo) return "Seção não encontrada nesta página.";
      alvo.scrollIntoView({ behavior: "smooth", block: "start" });
      return "Seção trazida para a tela.";
    };

    const ferramentas: Ferramenta[] = [
      {
        name: "abrir_contato",
        description:
          "Leva a pessoa até o bloco de contato da página atual. Não envia nada; o envio é decisão dela.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => irPara("contato")
      },
      {
        name: "ver_metodo",
        description: "Abre a página do método PSIQUE (as seis áreas e os oito passos).",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = "/metodologia";
          return "Indo para /metodologia.";
        }
      },
      {
        name: "ver_servicos",
        description: "Rola até a lista do que o estúdio entrega na página atual.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => irPara("servicos")
      }
    ];

    const ferramentasFormatadas = ferramentas.map((f) => ({
      name: f.name,
      description: f.description,
      inputSchema: f.inputSchema,
      execute: f.execute
    }));

    try {
      if (typeof registrador.registerTool === "function") {
        for (const f of ferramentasFormatadas) registrador.registerTool(f);
      } else if (typeof registrador.provideContext === "function") {
        registrador.provideContext({ tools: ferramentasFormatadas });
      }
    } catch {
      // Suporte parcial não pode quebrar a página.
    }
  }, []);

  return null;
}
