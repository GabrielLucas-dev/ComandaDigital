import { createPortal } from "react-dom";
import "./VendaDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function VendaDetails({ onClose, venda, itens }) {
  const vendaArr = [venda];

  const count = itens.length;

  return createPortal(
    <div className="vendaDetails-overlay">
      <section className="container-vendaDetails">
        <div className="vendaDetails-header">
          <span>Detalhes da Venda</span>
          <button className="closePagamento-button" onClick={onClose}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        <div className="detalhesVenda-content">
          {vendaArr.map((ven, i) => (
            <div key={i}>
              <div className="detalhes-layout">
                <div>
                  <h4>ID venda</h4>
                  <p>{ven.id_venda}</p>
                </div>
                <div>
                  <h4>Forma pagamento</h4>
                  <p>{ven.forma_pagamento}</p>
                </div>
              </div>
              <div className="detalhes-layout">
                <div>
                  <h4>Data</h4>
                  <p>{ven.data_venda.split("T")[0]}</p>
                </div>
                <div>
                  <h4>Horário</h4>
                  <p>{ven.data_venda.split("T")[1].split(".")[0]}</p>
                </div>
              </div>
              <div className="detalhes-layout">
                <div>
                  <h4>Valor total</h4>
                  <p><span>R${ven.valor}</span></p>
                </div>
                <div>
                  <h4>Itens vendidos</h4>
                  <p>{count}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="vendaDetails-divider"><p>Itens vendidos</p></div>

          {itens.map((item, i) => (
            <div className="item-venda" key={i}>
              <div className="detalhes-layout">
                <div>
                  <h4>Item</h4>
                  <p>{item.nome_produto}</p>
                </div>
                <div>
                  <h4>ID produto</h4>
                  <p>{item.produto_id}</p>
                </div>
              </div>
              <div className="detalhes-layout">
                <div>
                  <h4>Preço unitário</h4>
                  <p>R${item.preco_unitario}</p>
                </div>
                <div>
                  <h4>Complementos</h4>
                  {item.complementos.length > 0 ? (
                    item.complementos.map((c, j) => (
                      <p key={j}>{c.nome_complemento}</p>
                    ))
                  ) : (
                    <p>Sem complementos</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>,
    document.body,
  );
}

export default VendaDetails;
