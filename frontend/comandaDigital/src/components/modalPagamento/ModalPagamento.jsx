import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalPagamento.css";
import {
  faCreditCard,
  faMoneyBill,
  faWallet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { createPortal } from "react-dom";
import api from "../../api/Api";
import { useAuth } from "../../hooks/useAuth";

function ModalPagamento({ onClose, onConfirm, cart }) {
  useAuth();

  const [formaPagamento, setFormaPagamento] = useState(null);

  const formas = [
    { id: "dinheiro", label: "Dinheiro", icon: faMoneyBill },
    { id: "credito", label: "Crédito", icon: faCreditCard },
    { id: "debito", label: "Débito", icon: faWallet },
    { id: "pix", label: "Pix", icon: faPix },
  ];

  const handleConfirmVenda = async () => {
    const venda = {
      forma_pagamento: formaPagamento,
      itens: cart.map((item) => ({
        id_produto: item.id_produto,
        nome_produto: item.nome_produto,
        preco_unitario: item.preco_produto,
        complementos: item.complementos,
      })),
      valor: cart.reduce((acc, item) => acc + Number(item.preco_produto), 0),
    };

    try {
      const resVenda = await api.post("http://localhost:3031/vendas", {
        valor: venda.valor,
        forma_pagamento: venda.forma_pagamento,
      });

      const venda_id = resVenda.data[0].insertId;

      api.post("http://localhost:3031/itensVenda", {
        itens: venda.itens.map((item) => ({
          preco_unitario: item.preco_unitario,
          produto_id: item.id_produto,
          venda_id: venda_id,
          complementos: item.complementos,
          nome_produto: item.nome_produto,
        })),
      }),
        onConfirm?.(formaPagamento);
        onClose();
        cart = [];
    } catch (error) {
      console.log(error);
    }

    console.log(venda);

    
  };

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
    document.body,
  );
}

export default ModalPagamento;
