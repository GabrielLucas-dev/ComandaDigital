import type { usuario } from "../model/usuarios.js";
import * as usuariosRepository from "../repository/usuariosRepository.js";
import jwt from "jsonwebtoken";

export async function getUsuarios(): Promise<usuario[]> {
  const users = await usuariosRepository.getUsuarios();
  if (users.length === 0) throw new Error("Não há usuários");

  return users;
}

export async function getUsuarioLogin(email: string, senha: string) {
  if (!email || !senha) throw new Error("Info(s) faltando");

  const user = await usuariosRepository.getUsuarioLogin(email, senha);
  
  if (!user) throw new Error("Usuário não encontrado");

  const JWT_SECRET: string = process.env.JWT_SECRET!;

  const token = jwt.sign({ id_usuario: user.id_usuario, email: user.email }, JWT_SECRET, { expiresIn: "24h" });

  return { user, token };
}
