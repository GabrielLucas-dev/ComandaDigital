import { db } from "../config/db_conn.js";
import type { categoria } from "../model/categoria.js";

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
  return result;
}

export async function deleteCategoria(id_categoria: any){
  const sql = "DELETE FROM categorias WHERE id_categoria = ?"
  const result = db.query(sql, id_categoria)

  return result
}

export async function getCategoriaById(id_categoria: any){
  const sql = "SELECT * FROM categorias WHERE id_categoria = ?"
  const [result] = await db.query(sql, id_categoria)

  return result[0]
}