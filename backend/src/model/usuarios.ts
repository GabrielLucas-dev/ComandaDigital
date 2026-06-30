export enum cargoUsuario{
    FUNCIONARIO = 'funcionario',
    GERENTE = 'gerente'
}

export interface usuario{
    id_usuario: number
    nome: string
    email: string
    senha: string
    cargo: cargoUsuario
}
