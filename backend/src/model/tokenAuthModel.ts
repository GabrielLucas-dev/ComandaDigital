import type {Request} from 'express'

export interface AuthRequest extends Request{
    usuario: {
        email: string,
        senha: string
    }
}