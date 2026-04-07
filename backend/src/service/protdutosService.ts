import type { produtos } from "../model/produtos.js";
import * as produtosRepository from "../repository/produtosRepository.js";

export async function findProdutos(): Promise<produtos[]> {
    const produtos = await produtosRepository.getProdutos()
    if(produtos.length === 0) console.log("Não há produtos")

    return produtos;
}

export async function insertProduto(values: any) {
  const produto = await produtosRepository.postProduto(values);
  if (!values) throw new Error("valor(es) faltando!");

  return produto;
}
