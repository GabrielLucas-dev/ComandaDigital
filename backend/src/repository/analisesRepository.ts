import { db } from "../config/db_conn.js";

export async function analises() {
   const sql = `SELECT SUM(valor) FROM vendas WHERE data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)` 
   const totalVendas30dias = await db.query(sql)

   const sql2 = `SELECT (forma_pagamento) FROM vendas`
   const formasPagamento = await db.query(sql2)

   const sql3 = `SELECT AVG(valor) FROM vendas`
   const ticketMedio = await db.query(sql3)

   return {
    totalVendas30dias,
    formasPagamento, 
    ticketMedio
   } 
}