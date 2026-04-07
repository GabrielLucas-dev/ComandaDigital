import { Link } from "react-router-dom"

function AddCategoria() {
    return(
        <>
        <section className="container-addProduto">
        <div className="div-back-button">
          <Link to="/formProduto" className="button-padrao">
            Voltar
          </Link>
        </div>

        <div className="inner-addProduto">
          <h2 className="add-title">
            Nova <span>Categoria</span>
          </h2>
          <form>
            <div className="form-add">
              <div className="add-layout2">
                <label>Categoria</label>
                <input type="text" required placeholder="EX: Bebida" />
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
    )
}

export default AddCategoria