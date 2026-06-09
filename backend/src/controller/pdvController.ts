import type { Request, Response } from 'express';
import * as pdvService from '../service/pdvService.js'

export async function createPdv(req: Request, res: Response){
    const usuario_id = (req.usuario as any).id_usuario
    const { saldo_inicial } = req.body
    
    try{
        const result = await pdvService.createPdv(usuario_id, saldo_inicial ?? 0)
        return res.status(201).json(result)
    } catch(error: any){
        return res.status(400).json({message: error.message})
    }
}

export async function closePdv(req: Request, res: Response){
    const id = req.params.id_pdv
    const idAsNumber = Number(id)
    const data = req.body
    try{
        const result = await pdvService.closePdv(data, idAsNumber)
        return res.status(200).json(result)
    } catch(error: any){
        return res.status(400).json({message: error.message})
    }
}

export async function getActivePdv(req: Request, res: Response) {
    const usuario_id = (req.usuario as any).id_usuario

    try {
        const pdv = await pdvService.getActivePdv(usuario_id)
        return res.status(200).json(pdv) 
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
}