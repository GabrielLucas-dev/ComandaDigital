import type { vendas } from '../model/vendas.js';
import * as vendasRepository from '../repository/vendasRepository.js'
import * as pdvRepository from '../repository/pdvRepository.js'

export async function findVendas(): Promise<vendas[]> {
    const vendas = await vendasRepository.getVendas()
    if(vendas.length === 0) throw new Error('Nenhuma venda registrada')

    return vendas
}

export async function insertVendas(values: any, usuario_id: number) {
    if(!usuario_id) throw new Error("ID do usuario faltando")
    if(!values) throw new Error("Valor(es) faltando")
    
    const pdvAtivo = await pdvRepository.getActivePdv(usuario_id)
    if(!pdvAtivo) throw new Error("Não há um PDV aberto. Abra o caixa antes de registrar")

    const result = await vendasRepository.postVendas(values, usuario_id, pdvAtivo.id_pdv)
    if(!result) throw new Error("Erro ao registrar venda")

    return result
}

export async function findVendaByData(date: any) {
    if(!date) throw new Error("Data não informada")
    const vendas = await vendasRepository.getVendasByData(date)
    if(vendas.length === 0) throw new Error("Não há vendas registradas nessa data")

    return vendas
}

export async function findVendaById(id: any) {
    if(!id) throw new Error("id não informado")
    const venda = await vendasRepository.getVendaById(id)

    return venda
}