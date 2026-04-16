import { useState } from 'react'
import './Cart.css'
import ModalPagamento from '../modalPagamento/ModalPagamento'

function Cart({cart, onRemove}) {

  //==========================
  // FECHA MODAL PAGAMENTO
  //==========================  
  
  const [isOpenPagamento, setIsOpenPagamento] = useState(false)
  const closeModalPag = () => setIsOpenPagamento(false)

  function handleConfirmProd() {
    setIsOpenPagamento(true)
  }
  

    return(
        <>
        <h3>Resumo do pedido</h3>
          <hr />

          <div className='cart-content'>
            {/* {cart.map((c, i) => {
              return(
                <div>teste</div>
              )
            })} */}

            {cart.map((c, i) => {
              return(
                <div className='cart-item' key={i}>
                  <p className='item'>{c.nome_produto}</p>
                  <p>R${c.preco_produto}</p>
                  <button onClick={() => onRemove(i)}>Excluir</button>
                  <hr />
                </div>
              )
            })}
            
          </div>

          <div className="confirm-order">
            <button className='button-padrao2' onClick={handleConfirmProd}>Confirmar pedido</button>
          </div>

          <div className='modalPagamento'>
              {isOpenPagamento 
              ?
              <ModalPagamento onClose={closeModalPag}/>
              : 
              ''
              }
          </div>
        </>
    )
}

export default Cart