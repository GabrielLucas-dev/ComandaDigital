import { Link } from "react-router-dom";
import "./AddProduto.css";

function AddProduto() {
  return (
    <>
      <section className="container-addProduto">
        <div className="div-back-button">
          <Link to="/formProduto" className="button-padrao">
            Voltar
          </Link>
        </div>

        <div className="inner-addProduto">
          <h2 className="add-title">
            Novo <span>Produto</span>
          </h2>
          <form>
            <div className="form-add">
              <div className="add-layout">
                <label>Produto</label>
                <input type="text" required placeholder="EX: Açaí 300ml"/>
              </div>
              <div className="add-layout">
                <label>Preço</label>
                <input type="text" required placeholder="EX: 20,00"/>
              </div>
            </div>
            <div className="add-btn">
                <input type="submit" value="Confirmar" className="button-padrao add-button" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AddProduto;
