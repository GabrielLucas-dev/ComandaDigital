import {db} from '../config/db_conn.js'
import type { usuario } from '../model/usuarios.js';

export async function getUsuarios(): Promise<usuario[]> {
    const sql = "SELECT * FROM usuarios";
    const [result] = await db.query(sql);

    return result as usuario[];
}

export async function getUsuarioLogin(email: string): Promise<usuario> {
    const sql = "SELECT * FROM usuarios WHERE email = ?"
    const [result] = await db.query(sql, [email])

    return result[0] as usuario;
}

export async function createUsuario(values: usuario, senha: string){
    const sql = "INSERT INTO usuarios (nome, email, senha, cargo) VALUES (?, ?, ?, ?)"
    const result = await db.query(sql, [values.nome, values.email, senha, values.cargo])

    return result 
}
