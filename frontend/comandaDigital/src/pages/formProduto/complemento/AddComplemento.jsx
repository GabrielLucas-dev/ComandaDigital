import { Link } from "react-router-dom";

function AddComplemento() {
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
            Novo <span>Complemento</span>
          </h2>
          <form>
            <div className="form-add">
              <div className="add-layout">
                <label>Complemento</label>
                <input type="text" required placeholder="EX: Leite em pó" />
              </div>
              <div className="add-layout">
                <label>Preço</label>
                <input type="text" required placeholder="EX: 2,00" />
              </div>
            </div>
            <div className="add-btn">
              <input
                type="submit"
                value="Confirmar"
                className="button-padrao add-button"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AddComplemento;
