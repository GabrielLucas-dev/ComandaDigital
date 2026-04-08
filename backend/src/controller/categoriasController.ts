import type { Request, Response } from 'express'
import * as categoriasService from '../service/categoriasService.js'

export async function findCategorias(req: Request, res: Response) {
    try{
        const result = await categoriasService.findCategorias()
        res.status(200).json(result)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}

export async function insertCategoria(req: Request, res: Response) {
    try{
        const result = categoriasService.insertCategoria(req.body)
        res.status(201).json(result)
    } catch(error: any){
        res.status(400).json({message: error.message})
    }
}