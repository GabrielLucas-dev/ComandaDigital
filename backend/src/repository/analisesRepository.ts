import { db } from "../config/db_conn.js";

// ANALISES ULTIMOS 30 DIAS

export async function analises() {
  const sql = `SELECT SUM(valor) FROM vendas WHERE data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [valorVendas30dias] = await db.query(sql);

  const sql_2 = `SELECT AVG(valor) FROM vendas WHERE data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [ticketMedio30dias] = await db.query(sql_2);

  const sql_3 = `SELECT COUNT(*) FROM vendas WHERE data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [totalVendas30dias] = await db.query(sql_3);

  const sql_5 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'pix' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`; 
  const [formaPagamentoPix30dias] = await db.query(sql_5);
  const sql_6 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'debito' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`; 
  const [formaPagamentoDebito30dias] = await db.query(sql_6);
  const sql_7 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'credito' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`; 
  const [formaPagamentoCredito30dias] = await db.query(sql_7);
  const sql_8 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'dinheiro' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`; 
  const [formaPagamentoDinheiro30dias] = await db.query(sql_8);

  // ANALISES GERAL (SEM DATA)

  const sql_9 = `SELECT SUM(valor) FROM vendas`;
  const [valorVendas] = await db.query(sql_9);

  const sql_10 = `SELECT AVG(valor) FROM vendas`;
  const [ticketMedio] = await db.query(sql_10);

  const sql_11 = `SELECT COUNT(*) FROM vendas`;
  const [totalVendas] = await db.query(sql_11);

  const sql_13 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'pix'`; 
  const [formaPagamentoPix] = await db.query(sql_13);
  const sql_14 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'debito'`; 
  const [formaPagamentoDebito] = await db.query(sql_14);
  const sql_15 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'credito'`; 
  const [formaPagamentoCredito] = await db.query(sql_15);
  const sql_16 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'dinheiro'`; 
  const [formaPagamentoDinheiro] = await db.query(sql_16);

  return {
    valorVendas30dias,
    ticketMedio30dias,
    totalVendas30dias,
    formaPagamentoPix30dias,
    formaPagamentoDebito30dias,
    formaPagamentoCredito30dias,
    formaPagamentoDinheiro30dias,

    valorVendas, 
    ticketMedio,
    totalVendas,
    formaPagamentoPix,
    formaPagamentoDebito,
    formaPagamentoCredito,
    formaPagamentoDinheiro
  };
}
