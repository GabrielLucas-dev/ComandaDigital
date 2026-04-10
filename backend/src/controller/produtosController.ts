import type { Request, Response } from "express";
import * as produtosService from "../service/protdutosService.js";

export async function findProdutos(req: Request, res: Response){
    try{
        const result = await produtosService.findProdutos()
        res.status(200).json(result)
    } catch(error: any){
        res.status(400).json({message: error.message})
    } 
}

export async function insertProduto(req: Request, res: Response) {
  try {
    const result = await produtosService.insertProduto(req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}

export async function deleteProduto(req: Request, res: Response){
  const id = req.params.id_produto
  try{
    const result = await produtosService.deleteProduto(id)
    res.status(200).json(result)
  } catch(error: any){
    res.status(400).json({message: error.message})
  }
}

export async function findProdutoById(req: Request, res: Response){
  const id = req.params.id_produto
  try{
    const produto = await produtosService.findProdutobyId(id)
    res.status(200).json(produto)
  } catch(error: any){
    res.status(400).json({message: error.message})
  }
}