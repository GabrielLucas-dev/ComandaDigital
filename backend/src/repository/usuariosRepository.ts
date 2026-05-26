import {db} from '../config/db_conn.js'
import type { usuario } from '../model/usuarios.js';

export async function getUsuarios(): Promise<usuario[]> {
    const sql = "SELECT * FROM usuarios";
    const [result] = await db.query(sql);

    return result[0] as usuario[];
}

export async function getUsuarioLogin(email: string, senha: string): Promise<usuario> {
    const sql = "SELECT * FROM usuarios WHERE email = ? AND senha = ?"
    const [result] = await db.query(sql, [email, senha])

    return result[0] as usuario;
}

