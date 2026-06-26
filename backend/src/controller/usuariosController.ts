import type { Request, Response } from "express"
import * as usuariosService from "../service/usuariosService.js"

export async function getUsuarios(req: Request, res: Response) {
    try{
        const users = await usuariosService.getUsuarios();
        res.status(200).json(users)
    } catch(error: any) {
        res.status(404).json({message: error.message})
    }
}

export async function getUsuarioLogin(req: Request, res: Response) {
    const {email, senha} = req.body;
    try{
        const user = await usuariosService.getUsuarioLogin(email, senha);
        res.status(200).json(user)
    } catch(error: any) {
        res.status(404).json({message: error.message})
    }
}

export async function createUsuario(req: Request, res: Response){
    const values = req.body
    const senha = req.body.senha
    try{
        const user = await usuariosService.createUsuario(values, senha)
        return res.status(201).json(user)
    } catch(error: any){
        return res.status(400).json({message: error.message})
    }
}
