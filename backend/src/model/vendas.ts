type formaPagamento = 'pix' | 'debito' | 'credito' | 'dinheiro'

export interface vendas{
    id_venda: number
    data_venda: Date
    valor: number
    forma_pagamento: formaPagamento
    desconto: number
    id_pdv: number
}