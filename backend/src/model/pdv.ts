export type statusPDV = 'aberto' | 'fechado'

export interface pdv{
    id_pdv: number
    usuario_id: number
    data_abertura: Date
    data_fechamento: Date
    saldo_inicial: number
    saldo_final: number
    status_pdv: statusPDV
}