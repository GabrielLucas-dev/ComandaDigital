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