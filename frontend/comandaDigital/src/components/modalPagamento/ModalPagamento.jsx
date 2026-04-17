import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalPagamento.css";
import { faCreditCard, faMoneyBill, faWallet, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faPix } from "@fortawesome/free-brands-svg-icons"
import { useState } from "react";
import {createPortal} from 'react-dom'

function ModalPagamento({ onClose, onConfirm, cart }) {
  const [formaPagamento, setFormaPagamento] = useState(null);

  const formas = [
    { id: "dinheiro", label: "Dinheiro", icon: faMoneyBill },
    { id: "credito", label: "Crédito", icon: faCreditCard },
    { id: "debito", label: "Débito", icon: faWallet },
    { id: "pix", label: "Pix", icon: faPix},
  ];


  const handleConfirmVenda = () => {
    const venda = {
        forma_pagamento: formaPagamento,
        itens: cart.map((item) => ({
            id_produto: item.id_produto,
            nome_produto: item.nome_produto,
            preco: item.preco_produto,
            complementos: item.complementos
        })),
        valor: cart.reduce((acc, item) => acc + Number(item.preco_produto), 0),
        data_venda: new Date().toISOString()
    }

    onConfirm?.(formaPagamento)
    onClose()
  }

  return createPortal(
    <div className="modalPagamento-overlay">        
      <section className="container-modalPagamento">
        <div className="modalPagamento-header">
          <p className="modalPagamento-titulo">Forma de Pagamento</p>
          <button className="closePagamento-button" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="modalPagamento-grid">
          {formas.map((forma) => (
            <button
              key={forma.id}
              className={`pagamento-card ${formaPagamento === forma.id ? "pagamento-card--ativo" : ""}`}
              onClick={() => setFormaPagamento(forma.id)}
            >
              <FontAwesomeIcon icon={forma.icon} className="pagamento-icon" />
              <span>{forma.label}</span>
            </button>
          ))}
        </div>

        <div className="confirm-complementos">
          <button
            className="button-padrao2"
            disabled={!formaPagamento}
            onClick={() => handleConfirmVenda()}
          >
            Confirmar Pagamento
          </button>
        </div>
      </section>
    </div>,
    document.body 
  )

}

export default ModalPagamento;
