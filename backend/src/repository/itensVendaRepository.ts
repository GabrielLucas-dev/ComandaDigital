import { db } from "../config/db_conn.js";
import type { itensVenda } from "../model/itensVenda.js";

export async function getItensVenda(): Promise<itensVenda[]> {
  const sql = "SELECT * FROM itens_venda";
  const [result] = await db.query(sql);

  return result as itensVenda[];
}

export async function postItensVenda(itens: any[]) {
    const results: any[] = []
    const sql = "INSERT INTO itens_venda (preco_unitario, produto_id, venda_id, complementos, nome_produto) VALUES (?, ?, ?, ?, ?)"
    
    for(const item of itens){
        const values = [item.preco_unitario, item.produto_id, item.venda_id, JSON.stringify(item.complementos), item.nome_produto]
        const result = await db.query(sql, values)
        results.push(result)
    }
    return results
}
