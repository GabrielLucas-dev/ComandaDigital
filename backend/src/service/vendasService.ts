import type { vendas } from '../model/vendas.js';
import * as vendasRepository from '../repository/vendasRepository.js'

export async function findVendas(): Promise<vendas[]> {
    const vendas = await vendasRepository.getVendas()
    if(vendas.length === 0) throw new Error('Nenhuma venda registrada')

    return vendas
}

export async function insertVendas(values: any) {
    const vendas = await vendasRepository.postVendas(values)
    if(!values) throw new Error("Valor(es) faltando")

    return vendas
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