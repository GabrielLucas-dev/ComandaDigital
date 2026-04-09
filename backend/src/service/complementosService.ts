import * as complementosRepository from '../repository/complementosRepository.js'

export async function findComplementos() {
    const complementos = await complementosRepository.getComplementos()
    if(complementos.length === 0) throw new Error("Não há complemento(s)")

    return complementos
}

export async function insertComplemento(values: any) {
    const complemento = complementosRepository.postComplmento(values)
    if(!values) throw new Error("Não há valor(es)") 

    return complemento
}