import type { categoria } from '../model/categoria.js'
import * as categoriasRepository from '../repository/categoriasRepository.js'

export async function findCategorias() {
    const categorias = await categoriasRepository.getCategorias()
    if(categorias.length === 0) console.log("Não há categoria(s)")

    return categorias
}

export async function insertCategoria(value: categoria){
   const categoria = await categoriasRepository.postCategoria(value) 
   if(!value) throw new Error("Valor faltando")

    return categoria
}

export async function deleteCategoria(id_categoria: any){
    if(!id_categoria) throw new Error("ID não encotrado")
    const delCategoria = categoriasRepository.deleteCategoria(id_categoria)

    return delCategoria
}

export async function findCategoriaById(id_categoria: any){
    if(!id_categoria) throw new Error("ID não encotrado")
    const getCategoria = await categoriasRepository.getCategoriaById(id_categoria)

    return getCategoria
}

export async function editCategoria(value: any, id_categoria:any){
    if(!value) throw new Error('valor faltando!')
    if(!id_categoria) throw new Error("ID não encotrado!")
    const editCategoria = categoriasRepository.putCategoria(value, id_categoria)

    return editCategoria
}