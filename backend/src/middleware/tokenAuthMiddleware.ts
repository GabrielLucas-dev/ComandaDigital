import jwt from 'jsonwebtoken'
import type { NextFunction, Request, Response } from 'express'

export function tokenAuth(req: Request, res: Response, next: NextFunction) {
    const authHeader: any = req.headers.authorization;

    if(!authHeader) return res.status(401).send({message: "Credenciais inválidas"});

    const token: string = authHeader.split(' ')[1];
    const JWT_SECRET: string = process.env.JWT_SECRET!;

    try{
        const decoded = jwt.verify(token, JWT_SECRET)
        req.usuario = decoded

        return next();
    } catch(error: any) {
        res.status(401).send({message: "Usuário não autenticado | "+ error })
    }
}