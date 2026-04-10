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

export async function deleteComplemento(id_complemento: any) {
    if(!id_complemento) throw new Error("ID não encontrado")
    const delComplemento = complementosRepository.deleteComplemento(id_complemento)

    return delComplemento
}

export async function findComplmentoById(id_complemento: any){
    if(!id_complemento) throw new Error("ID não encontrado")
    const getComplemento = await complementosRepository.getComplementoById(id_complemento)

    return getComplemento
}