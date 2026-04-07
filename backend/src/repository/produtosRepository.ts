import { db } from "../config/db_conn.js";
import type { produtos } from "../model/produtos.js";

export async function getProdutos(): Promise<produtos[]> {
    const sql = "SELECT * FROM produtos"
    const [result] = await db.query(sql)
    
    return [result] as produtos[];
}

getProdutos()
.then((result) => {
    return result
}).catch(error => console.log(error))

//FALTA PASSAR A CATEGORIA
export async function postProduto(produto: any) {
  const sql = "INSERT INTO produtos (nome_produto, preco_produto) VALUES (?, ?)";
  const values = [produto.nome_produto, produto.preco_produto];

  const result = await db.query(sql, values);
  return result;
}


