import type { usuario } from "../model/usuarios.js";
import * as usuariosRepository from "../repository/usuariosRepository.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'

export async function getUsuarios(): Promise<usuario[]> {
  const users = await usuariosRepository.getUsuarios();
  if (users.length === 0) throw new Error("Não há usuários");

  return users;
}

export async function getUsuarioLogin(email: string, senha: string) {
  if (!email || !senha) throw new Error("Info(s) faltando");

  console.time("buscar user service")
  const user = await usuariosRepository.getUsuarioLogin(email);
  if (!user) throw new Error("Usuário não encontrado");
  console.timeEnd("buscar user service")

  console.time("compara senha")
  const equals = await bcrypt.compare(senha, user.senha)
  if(!equals) throw new Error("Senha incorreta!")
    console.timeEnd("compara senha")

  const JWT_SECRET: string = process.env.JWT_SECRET!;

  const token = jwt.sign({ id_usuario: user.id_usuario, email: user.email, cargo: user.cargo }, JWT_SECRET, { expiresIn: "1h" });

  return { user, token };
}

export async function createUsuario(values: usuario, senha: string){
  if(!values) throw new Error("Valores faltando!")

  const hash = await bcrypt.hash(senha, 10)
  const user = await usuariosRepository.createUsuario(values, hash)

  return user
}
