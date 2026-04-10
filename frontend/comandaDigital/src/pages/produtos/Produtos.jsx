import { Link, NavLink, Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Produtos.css";

function Produtos() {

  const getClass = ({isActive}) => isActive ? 'li-options active2' : 'li-options'
  

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
              <li><NavLink className={getClass} to="filterProdutos">Itens (Produtos)</NavLink></li>
              <li><NavLink className={getClass} to="filterCategorias">Categorias</NavLink></li>
              <li><NavLink className={getClass} to="filterComplementos">Complementos</NavLink></li>
              {/* <NavLink className='li-options'>Regras de negócio</NavLink> */}
            </ul>
          </div>
          <div className="produtos-content">
            <div className="inner-produtos-content">
              <div className="produtos-title">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Produtos;
