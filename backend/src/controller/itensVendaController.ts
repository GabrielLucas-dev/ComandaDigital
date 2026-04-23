import type { Request, Response } from 'express'
import * as itensVendaService from '../service/itensVendaService.js'

export async function findItensVenda(req: Request, res: Response) {
    try{
        const itens = await itensVendaService.findItensVends()
        res.status(200).json(itens)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}

export async function insertItensVenda(req: Request, res: Response) {
    const itens = req.body.itens
    try{
        const result = await itensVendaService.insertItensVenda(itens)
        res.status(201).json(result)
    } catch(error: any){
        res.status(400).json({message: error.message})
    }
}

export async function findItensVendaById(req: Request, res: Response) {
    const id = req.params.venda_id
    try{
        const result = await itensVendaService.findItensVendaById(id)
        res.status(200).json(result)
    } catch(error: any){
        res.status(400).json({message: error.message})
    }
}