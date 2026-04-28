import * as analisesRepository from '../repository/analisesRepository.js'

export async function analises() {
    const valor = await analisesRepository.analises()
    if(!valor) throw new Error('Não há vendas nos ultimos 30 dias')

    return valor
}