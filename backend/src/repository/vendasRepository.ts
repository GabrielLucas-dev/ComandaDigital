import { db } from '../config/db_conn.js'
import type { vendas } from '../model/vendas.js';

export async function getVendas(): Promise<vendas[]>{
    const sql = "SELECT * FROM vendas"
    const [result] = await db.query(sql)

    return result as vendas[]
}

export async function postVendas(venda: any) {
    const sql = "INSERT INTO vendas (valor, forma_pagamento) VALUES (?, ?)"
    const values = [venda.valor, venda.forma_pagamento]
    const result = await db.query(sql, values)

    return result
}