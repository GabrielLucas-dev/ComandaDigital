import { Link } from "react-router-dom"
import axios from 'axios'
import { useState } from "react"

function AddCategoria() {

  const [nomeCategoria, setNomeCategoria] = useState('');

  function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:3031/categorias', {nome_categoria: nomeCategoria})
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
  }

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
          <form onSubmit={handleSubmit}>
            <div className="form-add">
              <div className="add-layout2">
                <label>Categoria</label>
                <input type="text" required placeholder="EX: Bebida" onChange={(e) => setNomeCategoria(e.target.value)} />
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