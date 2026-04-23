import { createPortal } from "react-dom";
import "./VendaDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// import { useEffect, useState } from "react"

function VendaDetails({ onClose, venda, itens }) {
  console.log(itens);
  const vendaArr = [venda];

  const count = itens.length;

  return createPortal(
    <div className="vendaDetails-overlay">
      <section className="container-vendaDetails">
        <button className="closePagamento-button" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className="detalhesVenda-content">
          {vendaArr.map((ven, i) => {
            return (
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
                    <h4>Horario</h4>
                    <p>{ven.data_venda.split("T")[1].split(".")[0]}</p>
                  </div>
                </div>
                <div className="detalhes-layout">
                  <div>
                    <h4>Valor total</h4>
                    <p>R${ven.valor}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="itens-quantidade">
            Quantidade de itens vendidos: <strong>{count}</strong>
          </div>
          <hr />
          <div className="itens-quantidade">Itens vendidos: </div>

          {itens.map((item, i) => {
            return (
              <div key={i}>
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
                    <h4>Preço unitario</h4>
                    <p>R${item.preco_unitario}</p>
                  </div>
                  <div>
                    <h4>complementos</h4>
                    <p>{item.complementos.length > 0 ? item.complementos[0].nome_complemento : 'Sem complemento(s)'}</p>
                    <p>{item.complementos.length > 0 ? item.complementos[1].nome_complemento : ''}</p>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </section>
    </div>,
    document.body,
  );
}

export default VendaDetails;
