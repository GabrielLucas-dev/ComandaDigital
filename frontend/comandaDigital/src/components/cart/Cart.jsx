import './Cart.css'

function Cart() {
    return(
        <>
        <h3>Resumo do pedido</h3>
          <hr />

          <div className='cart-content'>
        
          </div>

          <div className="confirm-order">
            <form action="">
            <p>R$: Valor total</p>
            <input type="submit" value="Confirmar pedido" className="button-padrao2" />
            </form>
          </div>
        </>
    )
}

export default Cart