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


export async function deleteCategoria(req: Request, res: Response){
    const id = req.params.id_categoria
    try{
        const result = categoriasService.deleteCategoria(id)
        res.status(200).json(result)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}

export async function findCategoriaById(req: Request, res: Response) {
    const id = req.params.id_categoria
    try{
        const categoria = await categoriasService.findCategoriaById(id)
        res.status(200).json(categoria)
    } catch(error: any){
        res.status(400).json({message: error.message})
    }
}

export async function editCategoria(req: Request, res: Response) {
    const value = req.body
    const id = req.params.id_categoria
    try{
        const categoria = await categoriasService.editCategoria(value, id)
        res.status(200).json(categoria)
    } catch(error: any) {
        res.status(400).json({message: error.message})
    }
}