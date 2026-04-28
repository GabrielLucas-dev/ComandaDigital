import type { Request, Response } from 'express';
import * as analisesService from '../service/analisesService.js'

export async function analises(req: Request, res: Response) {
    try{
        const valor = await analisesService.analises();
        res.status(200).json(valor)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}