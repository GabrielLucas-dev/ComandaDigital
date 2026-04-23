import * as itensVendaRepository from "../repository/itensVendaRepository.js";

export async function findItensVends() {
  const itens = await itensVendaRepository.getItensVenda();
  if (itens.length === 0) throw new Error("Nenhum item encontrado");

  return itens;
}

export async function insertItensVenda(itens: any) {
  if (!itens || itens.length === 0) throw new Error("Valor(es) faltando");
  const venda = await itensVendaRepository.postItensVenda(itens);

  return venda;
}

export async function findItensVendaById(id: any) {
  if(!id) throw new Error("ID não encontrado")
  const itens = await itensVendaRepository.getItensVendaById(id)

  return itens
}
