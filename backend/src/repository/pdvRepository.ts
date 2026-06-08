import { db } from "../config/db_conn.js"
import type { pdv } from "../model/pdv.js"

export async function createPdv(usuario_id: number, saldo_inicial: number){
    const sql = "INSERT INTO pdv (usuario_id, saldo_inicial, status_pdv) VALUES (?, ?, 'aberto')"
    const pdv = await db.query(sql, [usuario_id, saldo_inicial])

    return pdv 
}

export async function closePdv(saldo_final: number, id: number){
    const sql = `UPDATE 
    pdv SET
    data_fechamento = CURRENT_TIMESTAMP,
    saldo_final = ?, 
    status_pdv = 'fechado'
    WHERE id_pdv = ?`
    const pdv = await db.query(sql, [saldo_final, id])
    
    return pdv
}

export async function getActivePdv(usuario_id: number){
    const sql = `SELECT * FROM pdv 
    WHERE usuario_id = ? 
    ANd status_pdv = 'aberto
    AND data_abertura = CURDATE()
    LIMIT 1`
    const [pdv] = await db.query(sql, [usuario_id])
    return pdv ?? null
}

export async function getPdvById(id: number){
    const sql = "SELECT * FROM pdv WHERE id_pdv = ?"
    const [pdv] = await db.query(sql, [id])
    return pdv ?? null
}