import type { Request, Response } from 'express';
import * as vendasService from '../service/vendasService.js'

export async function findVendas(req: Request, res: Response){
    try{
        const vendas = await vendasService.findVendas()
        res.status(200).json(vendas)
    }
    catch(error: any) {
        res.status(400).json({message: error.message})
    }
}