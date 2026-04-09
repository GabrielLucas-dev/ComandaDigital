import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Produtos.css";

function Produtos() {
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
              <li>Itens (Produtos)</li>
              <li>Categorias</li>
              <li>Complementos</li>
              <li>Regras de negócio</li>
            </ul>
          </div>
          <div className="produtos-content">
            <div className="inner-produtos-content">
              a
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Produtos;
