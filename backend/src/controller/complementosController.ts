import type { Request, Response } from 'express';
import * as complementosService from '../service/complementosService.js'

export async function findComplementos(req: Request, res: Response) {
    try{
        const result = await complementosService.findComplementos()
        res.status(200).json(result)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}

export async function insertComplemento(req: Request, res: Response) {
    try{
        const complemento = complementosService.insertComplemento(req.body)
        res.status(201).json(complemento)
    } catch(error: any){
        res.status(400).json({message: error.message})
    }
}

export async function deleteComplemento(req: Request, res: Response){
    const id = req.params.id_complemento
    try{
        const result = complementosService.deleteComplemento(id)
        res.status(200).json(result)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}

export async function findComplementoById(req: Request, res: Response){
    const id = req.params.id_complemento
    try{
        const result = await complementosService.findComplmentoById(id)
        res.status(200).json(result)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}