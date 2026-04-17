import { db } from '../config/db_conn.js'
import type { vendas } from '../model/vendas.js';

export async function getVendas(): Promise<vendas[]>{
    const sql = "SELECT * FROM vendas"
    const [result] = await db.query(sql)

    return result as vendas[]
}

export async function postVendas(values: any) {
    const sql = "INSERT INTO vendas (valor, forma_pagamento) VALUES (?, ?)"
    const result = await db.query(sql, values)

    return result
}