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
    const saldo_final = req.body.saldo_final
    try{
        const result = await pdvService.closePdv(saldo_final, idAsNumber)
        return res.status(200).json(result)
    } catch(error: any){
        return res.status(400).json({message: error.message})
    }
}

export async function getActivePdv(req: Request, res: Response) {
    const usuario_id = (req.usuario as any).id_usuario
    console.log(req.usuario)

    try {
        const pdv = await pdvService.getActivePdv(usuario_id)
        return res.status(200).json(pdv) 
    } catch (error: any) {
        return res.status(500).json({ message: error.message })
    }
}

export async function getAnalisesPdv(req: Request, res: Response){
    const id_pdv = req.params.pdv_id
    const idAsNumber = Number(id_pdv)
    try{
        const status = await pdvService.getAnalisesPdv(idAsNumber)
        res.status(200).json(status)
    } catch(error: any){
        res.status(400).json({message: error.message})
    }
}

export async function getPdvs30dias(req: Request, res: Response) {
    try{
        const result = await pdvService.getPdvs30dias();
        return res.status(200).json(result)
    } catch(error: any){
        return res.status(400).json({message: error.message})
    }
}