import Sidebar from "../../components/sidebar/Sidebar";
import "./Vendas.css";

function Vendas() {
  return (
    <>
      <section className="container-vendas">
        <Sidebar />

        <div className="teste">
          <div className="vendas-header">
            <div className="header-title">
              <h2>
                Frente do <span>Caixa</span>
              </h2>
            </div>
            <div className="div-search">
              <input type="text" placeholder="Pesquisar..." />
            </div>
          </div>

          <div className="middle-content">
            <div className="sidebar-itens">
              <div className="itens-list">
                <ul>
                  <li>Todos</li>
                  <li>Açaí no copo</li>
                  <li>Complementos</li>
                  <li>Bebidas</li>
                </ul>
              </div>
            </div>

            <div className="vendas-content">
              <p>vendas content</p>
            </div>
          </div>
        </div>

        <div className="cart">
          <h3>Resumo do pedido</h3>
          <hr />
          <div className="confirm-order">
            <form action="">
            <p>R$: Valor total</p>
            <input type="submit" value="Confirmar pedido" className="button-padrao" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vendas;
