import { db } from "../config/db_conn.js";

// ANÁLISES ULTIMOS 30 DIAS

export async function getAnalises30dias() {
  const sql = `SELECT SUM(valor) FROM vendas WHERE data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [valorVendas30dias] = await db.query(sql);

  const sql_2 = `SELECT AVG(valor) FROM vendas WHERE data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [ticketMedio30dias] = await db.query(sql_2);

  const sql_3 = `SELECT COUNT(*) FROM vendas WHERE data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [totalVendas30dias] = await db.query(sql_3);

  const sql_4 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'pix' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [formaPagamentoPix30dias] = await db.query(sql_4);
  const sql_5 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'debito' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [formaPagamentoDebito30dias] = await db.query(sql_5);
  const sql_6 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'credito' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [formaPagamentoCredito30dias] = await db.query(sql_6);
  const sql_7 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'dinheiro' AND data_venda >= DATE_SUB(NOW(), INTERVAL 30 DAY)`;
  const [formaPagamentoDinheiro30dias] = await db.query(sql_7);

  return {
    valorVendas30dias,
    ticketMedio30dias,
    totalVendas30dias,
    formaPagamentoPix30dias,
    formaPagamentoDebito30dias,
    formaPagamentoCredito30dias,
    formaPagamentoDinheiro30dias,
  };
}

// ANÁLISES GERAIS

export async function getAnalisesGerais() {
  const sql = `SELECT SUM(valor) FROM vendas`;
  const [valorVendas] = await db.query(sql);

  const sql_2 = `SELECT AVG(valor) FROM vendas`;
  const [ticketMedio] = await db.query(sql_2);

  const sql_3 = `SELECT COUNT(*) FROM vendas`;
  const [totalVendas] = await db.query(sql_3);

  const sql_4 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'pix'`;
  const [formaPagamentoPix] = await db.query(sql_4);
  const sql_5 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'debito'`;
  const [formaPagamentoDebito] = await db.query(sql_5);
  const sql_6 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'credito'`;
  const [formaPagamentoCredito] = await db.query(sql_6);
  const sql_7 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'dinheiro'`;
  const [formaPagamentoDinheiro] = await db.query(sql_7);

  return {
    valorVendas,
    ticketMedio,
    totalVendas,
    formaPagamentoPix,
    formaPagamentoDebito,
    formaPagamentoCredito,
    formaPagamentoDinheiro,
  };
}

// ANÁLISES EM UM PERIODO DETERMINADO

export async function getAnalisesPeriodo(dataInicio: string, dataFim: string) {
  const sql = `SELECT SUM(valor) FROM vendas WHERE data_venda BETWEEN ? AND ?`;
  const [valorVendasPeriodo] = await db.query(sql, [dataInicio, dataFim]);

  const sql_2 = `SELECT AVG(valor) FROM vendas WHERE data_venda BETWEEN ? AND ?`;
  const [ticketMedioPeriodo] = await db.query(sql_2, [dataInicio, dataFim]);

  const sql_3 = `SELECT COUNT(*) FROM vendas WHERE data_venda BETWEEN ? AND ?`;
  const [totalVendasPeriodo] = await db.query(sql_3, [dataInicio, dataFim]);

  const sql_4 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'pix' AND data_venda BETWEEN ? AND ?`;
  const [formaPagamentoPixPeriodo] = await db.query(sql_4, [dataInicio, dataFim]);
  const sql_5 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'debito' AND data_venda BETWEEN ? AND ?`;
  const [formaPagamentoDebitoPeriodo] = await db.query(sql_5, [dataInicio, dataFim]);
  const sql_6 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'credito' AND data_venda BETWEEN ? AND ?`;
  const [formaPagamentoCreditoPeriodo] = await db.query(sql_6, [dataInicio, dataFim]);
  const sql_7 = `SELECT COUNT(forma_pagamento) FROM vendas WHERE forma_pagamento = 'dinheiro' AND data_venda BETWEEN ? AND ?`;
  const [formaPagamentoDinheiroPeriodo] = await db.query(sql_7, [dataInicio, dataFim]);

  return {
    valorVendasPeriodo,
    ticketMedioPeriodo,
    totalVendasPeriodo,
    formaPagamentoPixPeriodo,
    formaPagamentoDebitoPeriodo,
    formaPagamentoCreditoPeriodo,
    formaPagamentoDinheiroPeriodo,
  };
}
