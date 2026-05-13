import type { Request, Response } from 'express';
import * as analisesService from '../service/analisesService.js';

export async function getAnalises30dias(req: Request, res: Response) {
    try{
        const valor = await analisesService.getAnalises30dias();
        res.status(200).json(valor);
    } catch(error: any) {
        res.status(400).json({message: error.message});
    }
}

export async function getAnalisesGerais(req: Request, res: Response) {
    try{
        const valor = await analisesService.getAnalisesGerais();
        res.status(200).json(valor);
    } catch(error: any){
        res.status(400).json({message: error.message});
    }
}

export async function getAnalisesPeriodo(req: Request, res: Response){
    const {data_inicio, data_fim} = req.query;
    const dataInicio = `${data_inicio} 00:00:00`
    const dataFim = `${data_fim} 23:59:59`
    try{
        const valor = await analisesService.getAnalisesPeriodo(dataInicio, dataFim);
        res.status(200).json(valor)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}
