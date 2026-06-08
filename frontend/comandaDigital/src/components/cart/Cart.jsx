import { useState } from "react";
import "./Cart.css";
import ModalPagamento from "../modalPagamento/ModalPagamento";

function Cart({ cart, onRemove, setCart }) {  

  const [isOpenPagamento, setIsOpenPagamento] = useState(false);
  const closeModalPag = () => setIsOpenPagamento(false);
  const [formaPagamento, setFormaPagamento] = useState(null)  

  function handleConfirmProd() {
    setIsOpenPagamento(true);
  }

  return (
    <>
    <div className="cart-title">
      <h3>Resumo do pedido</h3>
    </div>
      <hr />

      <div className="cart-content">
        {cart.map((c, i) => {
          return (
            <div className="cart-item" key={i}>
              <p className="item">{c.nome_produto}</p>
              <p>R${c.preco_produto}</p>
              <button onClick={() => onRemove(i)}>Excluir</button>
              <hr />
            </div>
          );
        })}
      </div>

      <div className="confirm-order">
        <button className="button-padrao2" onClick={handleConfirmProd}>
          Confirmar pedido
        </button>
      </div>

      <div className="modalPagamento">
        {isOpenPagamento && (
          <ModalPagamento
            onClose={closeModalPag}
            cart={cart}
            onConfirm={(forma) => setFormaPagamento(forma)}
            setCart={setCart} 
          />
        )}
      </div>
    </>
  );
}

export default Cart;
