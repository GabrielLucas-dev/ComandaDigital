import { db } from "../config/db_conn.js";
import type { categoria } from "../model/categoria.js";

//NÃO ESTA RETORNANDO OS DADOS, APENAS UM OBJETO '{}' VAZIO
export async function getCategorias(): Promise<categoria[]> {
  const sql = "SELECT * FROM categorias";
  const [result] = await db.query(sql);

  return result as categoria[];
}

getCategorias()
  .then((result) => {
    return result;
  })
  .catch((error) => console.log(error));

export async function postCategoria(categoria: categoria) {
  const sql = "INSERT INTO categorias (nome_categoria) VALUES (?)";
  const value = categoria.nome_categoria;

  const result = await db.query(sql, [value]);
  console.log(result)
  return result;
}
