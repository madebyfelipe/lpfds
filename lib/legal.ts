/**
 * Dados legais e de identificação do negócio — fonte única.
 *
 * Alimenta as páginas /privacidade, /cookies, /termos e /reembolso, o rodapé
 * e o JSON-LD. Mudar aqui muda em todo lugar; nenhuma página repete um dado
 * de identificação por conta própria.
 *
 * Campos que ainda não foram confirmados ficam como string vazia de
 * propósito: `identificacaoLinhas()` simplesmente não emite a linha. É melhor
 * a página sair sem o endereço do que sair com um endereço inventado.
 */

/** Entidade que opera o site e responde pelos contratos. */
export const empresa = {
  /** Nome pelo qual o estúdio se apresenta ao público. */
  nomeFantasia: "Made by Felipe",
  /** Razão social registrada. PREENCHER. */
  razaoSocial: "",
  /** Só dígitos e pontuação; string vazia esconde a linha. */
  cnpj: "68.121.518/0001-17",
  /** Endereço da sede. Logradouro/número/CEP: PREENCHER. */
  endereco: {
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    municipio: "Curitiba",
    uf: "PR",
    cep: ""
  }
} as const;

/** Caixa que responde por contrato, privacidade e titular de dados. */
export const CONTATO_EMAIL = "alo@madebyfelipe.com.br";

/** Mesmo número usado nos CTAs de WhatsApp do site. */
export const WHATSAPP_NUMERO = "5515992835226";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMERO}`;

/** Data da última revisão dos textos legais — aparece no topo das páginas. */
export const ATUALIZADO_EM = "6 de setembro de 2026";

/**
 * Linhas de identificação prontas para render. Some a linha do dado que
 * ainda não existe, em vez de imprimir um rótulo vazio.
 */
export function identificacaoLinhas(): string[] {
  const { razaoSocial, nomeFantasia, cnpj, endereco } = empresa;
  const linhas: string[] = [];

  if (razaoSocial) {
    linhas.push(`${razaoSocial} (nome fantasia: ${nomeFantasia})`);
  } else {
    linhas.push(nomeFantasia);
  }

  if (cnpj) linhas.push(`CNPJ ${cnpj}`);

  const rua = [endereco.logradouro, endereco.numero, endereco.complemento]
    .filter(Boolean)
    .join(", ");
  const cidade = [endereco.bairro, `${endereco.municipio}/${endereco.uf}`]
    .filter(Boolean)
    .join(" — ");
  const local = [rua, cidade, endereco.cep && `CEP ${endereco.cep}`]
    .filter(Boolean)
    .join(" — ");
  if (local) linhas.push(local);

  linhas.push(`E-mail: ${CONTATO_EMAIL}`);
  return linhas;
}

/** Rotas legais — o rodapé monta os links a partir daqui. */
export const paginasLegais = [
  { href: "/privacidade", label: "Privacidade" },
  { href: "/cookies", label: "Cookies" },
  { href: "/termos", label: "Termos" },
  { href: "/reembolso", label: "Reembolso" }
] as const;
