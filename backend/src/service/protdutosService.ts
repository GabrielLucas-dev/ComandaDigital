import type { produtos } from "../model/produtos.js";
import * as produtosRepository from "../repository/produtosRepository.js";

export async function findProdutos(): Promise<produtos[]> {
  const produtos = await produtosRepository.getProdutos()
  if(produtos.length === 0) throw new Error("Não há produtos")

    return produtos;
}

export async function insertProduto(values: any) {
  if (!values) throw new Error("valor(es) faltando!");
  const produto = await produtosRepository.postProduto(values);

  return produto;
}

export async function deleteProduto(id_produto: any){
  if(!id_produto) throw new Error('ID não encontrado!')
  const delProduto = await produtosRepository.deleteProduto(id_produto)

  return delProduto
}

export async function findProdutobyId(id_produto: any){
  if(!id_produto) throw new Error('ID não encontrado!')
  const findProduto = produtosRepository.getProdutoById(id_produto)

  return findProduto
}

export async function editProduto(values: any, id_produto: any){
  if(!values) throw new Error('valor(es) faltando!')
  if(!id_produto) throw new Error('ID não encotrado!')
  const produto = produtosRepository.putProduto(values, id_produto) 

  return produto
}