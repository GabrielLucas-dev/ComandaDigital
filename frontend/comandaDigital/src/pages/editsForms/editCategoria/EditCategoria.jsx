import api from "../../../api/Api"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useAuth } from "../../../hooks/useAuth"

function EditCategoria() {
  useAuth();

    const [form, setForm] = useState({
        nome_categoria: ''
    })
    const {id_categoria} = useParams()
    const navigate = useNavigate() 

    useEffect(() => {
        api.get(`http://localhost:3031/categorias/${id_categoria}`)
        .then(res => setForm(res.data))
    }, [id_categoria])

    function handleEditSubmit(e){
        e.preventDefault()

        api.put(`http://localhost:3031/categorias/${id_categoria}`, form)
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
          <Link to="/produtos/filterCategorias" className="button-padrao">
            Voltar
          </Link>
        </div>

        <div className="inner-addProduto">
          <h2 className="add-title">
            Editar <span>Categoria</span>
          </h2>
          <form onSubmit={handleEditSubmit}>
            <div className="form-add">
              <div className="add-layout2">
                <label>Categoria</label>
                <input type="text" required placeholder="EX: Bebida" 
                value={form.nome_categoria}
                onChange={(e) => setForm({...form, nome_categoria: e.target.value})}
                 />
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

export default EditCategoria