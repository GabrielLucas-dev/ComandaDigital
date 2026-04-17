import { db } from "../config/db_conn.js";
import type { itensVenda } from "../model/itensVenda.js";

export async function getItensVenda(): Promise<itensVenda[]> {
  const sql = "SELECT * FROM itens_venda";
  const result = await db.query(sql);

  return result;
}
