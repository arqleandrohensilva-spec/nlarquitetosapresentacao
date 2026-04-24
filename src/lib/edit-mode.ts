/**
 * Modo de edição interno NL — ativo apenas quando a URL contém ?edit=1.
 * Cliente final acessa o link sem o parâmetro e vê o documento como apresentação final.
 */
export const isEditMode = (): boolean => {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("edit") === "1";
};
