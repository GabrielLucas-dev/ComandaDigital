import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Produtos.css";

function Produtos({whichFilter}) {
  return (
    <>
      <section className="container-produtos">
        <Sidebar />
        <div className="inner-produtos">
          <div className="header-produtos">
            <div>
              <h2>
                Listagem de <span>Produtos</span>
              </h2>
            </div>
            <div className="add-button">
              <Link className="button-padrao" to="/formProduto">
                Adicionar +
              </Link>
            </div>
          </div>
          <div className="options-produtos">
            <ul>
              <NavLink className='li-options' to="/produtos/filterProdutos">Itens (Produtos)</NavLink>
              <NavLink className='li-options' to="/produtos/filterCategorias">Categorias</NavLink>
              <NavLink className='li-options' to="/produtos/filterComplementos">Complementos</NavLink>
              {/* <NavLink className='li-options'>Regras de negócio</NavLink> */}
            </ul>
          </div>
          <div className="produtos-content">
            <div className="inner-produtos-content">
              <div className="produtos-title">
                {whichFilter}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Produtos;
