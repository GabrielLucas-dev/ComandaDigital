import type { usuario } from '../model/usuarios.js';
import * as usuariosRepository from '../repository/usuariosRepository.js'

export async function getUsuarios(): Promise<usuario[]> {
    const users = await usuariosRepository.getUsuarios();
    if(users.length === 0) throw new Error("Não há usuários");

    return users;
}

export async function getUsuarioLogin(email: string, senha: string) {
    if(!email || !senha) throw new Error("Info(s) faltando");
    const user = await usuariosRepository.getUsuarioLogin(email, senha);
    if(!user) throw new Error("Usuário não encontrado");

    return user;
}