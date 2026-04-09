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