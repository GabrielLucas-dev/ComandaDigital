import * as itensVendaRepository from "../service/itensVendaService.js";

export async function findItensVends() {
  const itens = await itensVendaRepository.getItensVenda();
  if (!itens) throw new Error("Nenhum item encontrado");

  return itens;
}
