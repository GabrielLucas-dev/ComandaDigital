import type { NextFunction, Request, Response } from "express";
import { cargoUsuario } from "../model/usuarios.js";

export function requireRole(...allowedRoles: cargoUsuario[]) {
  return (req: Request, res: Response, next: NextFunction) => {

    const { cargo } = req.usuario as {cargo?: cargoUsuario};

    if(!cargo){
        return res.status(401).json({message: "Usuario não autenticado"})
    }

    if(!allowedRoles.includes(cargo)) {
      return res.status(403).json({ message: "Acesso negado" });
    }

    next();
  };
}
