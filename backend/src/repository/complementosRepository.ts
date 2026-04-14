import { db } from '../config/db_conn.js'
import type { complemento } from '../model/complemento.js'

export async function getComplementos(): Promise<complemento[]> {
    const sql = "SELECT * FROM complementos"
    const [result] = await db.query(sql)

    return result as complemento[]
}

getComplementos()
.then((result) => {
    return result 
})
.catch((error) => console.log(error))

export async function postComplmento(complemento: complemento) {
    const sql = 'INSERT INTO complementos (nome_complemento, preco) VALUES (?, ?)'
    const values = [complemento.nome_complemento, complemento.preco]
    const result = await db.query(sql, values)

    return result
}

export async function deleteComplemento(id_complemento: any) {
    const sql = "DELETE FROM complementos WHERE id_complemento = ?"
    const result = await db.query(sql, id_complemento)

    return result
}

export async function getComplementoById(id_complemento: any){
    const sql = "SELECT * FROM complementos WHERE id_complemento = ?"
    const [result] = await db.query(sql, id_complemento)

    return result[0]
}

export async function putComplemento(values: any, id_complemento:any) {
    const sql = "UPDATE complementos SET nome_complemento = ?, preco = ? WHERE id_complemento = ?"
    const result = await db.query(sql, [values.nome_complemento, values.preco, id_complemento])

    return result
}