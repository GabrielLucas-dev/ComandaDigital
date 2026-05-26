import { db } from "../config/db_conn.js";
import type { vendas } from "../model/vendas.js";

export async function getVendas(): Promise<vendas[]> {
  const sql = "SELECT * FROM vendas ORDER BY data_venda DESC";
  const [result] = await db.query(sql);

  return result as vendas[];
}

export async function postVendas(venda: any) {
  const sql = "INSERT INTO vendas (valor, forma_pagamento) VALUES (?, ?)";
  const values = [venda.valor, venda.forma_pagamento];
  const result = await db.query(sql, values);

  return result;
}

export async function getVendasByData(date: any): Promise<vendas[]> {
  const sql = "SELECT * FROM vendas WHERE DATE(data_venda) = ? ORDER BY data_venda DESC"
  const [result] = await db.query(sql, date);

  return result as vendas[];
}

export async function getVendaById(id: any): Promise<vendas[]> {
  const sql = "SELECT * FROM vendas WHERE id_venda = ?"
  const [result] = await db.query(sql, id)

  return result as vendas[];
}