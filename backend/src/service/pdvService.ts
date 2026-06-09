import type { pdv } from '../model/pdv.js'
import * as pdvRepository from '../repository/pdvRepository.js'

export async function createPdv(saldo_inicial: number, usuario_id: number) {
    const result = await pdvRepository.createPdv(saldo_inicial, usuario_id)
    if(!result) throw new Error("Erro interno")

    return result
}

export async function closePdv(saldo_final: number, id: number){
    if(!id) throw new Error("informe o ID do PDV")
    if(!saldo_final) throw new Error("Informe o saldo final")
    
    const pdv = await pdvRepository.getPdvById(id)
    if(!pdv) throw new Error("PDV não encontrado")
    if(pdv.status_pdv === 'fechado') throw new Error("Esse pdv já esta fechado")
    
    const result = await pdvRepository.closePdv(saldo_final, id)

    return result 
}

export async function getActivePdv(id: number){
    const pdv = await pdvRepository.getActivePdv(id)
    return pdv
}