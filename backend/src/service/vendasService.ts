import type { vendas } from '../model/vendas.js';
import * as vendasRepository from '../repository/vendasRepository.js'

export async function findVendas(): Promise<vendas[]> {
    const vendas = await vendasRepository.getVendas()
    if(vendas.length === 0) throw new Error('Nenhuma venda registrada')

    return vendas
}