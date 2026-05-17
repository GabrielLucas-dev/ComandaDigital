import { Link, useNavigate } from "react-router-dom"
import api from '../../../api/Api'
import { useState } from "react"

function AddCategoria() {

  const [nomeCategoria, setNomeCategoria] = useState('');
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    api.post('http://localhost:3031/categorias', {nome_categoria: nomeCategoria})
    .then(res => {
      console.log(res.data)
      navigate('/produtos/filterCategorias')
    })
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