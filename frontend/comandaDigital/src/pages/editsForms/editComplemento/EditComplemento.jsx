import api from "../../../api/Api"
import { useEffect, useState } from "react"
import {Link, useParams, useNavigate} from 'react-router-dom'

function EditComplemento () {

    const {id_complemento} = useParams()
    const [form, setForm] = useState({
        nome_complemento: '',
        preco: ''
    })
    const navigate = useNavigate()

    useEffect(() => {
        api.get(`http://localhost:3031/complementos/${id_complemento}`)
        .then(res => setForm(res.data))
        .catch(error => console.log(error))
    }, [id_complemento])

    function handleEditSubmit(e) {
        e.preventDefault()

        api.put(`http://localhost:3031/complementos/${id_complemento}`, form)
        .then(res => {
            console.log(res.data)
            navigate('/produtos/filterComplementos')
        })
        .catch(error => console.log(error))
    }

    return(
        <>
         <section className="container-addProduto">
        <div className="div-back-button">
          <Link to="/produtos/filterComplementos" className="button-padrao">
            Voltar
          </Link>
        </div>

        <div className="inner-addProduto">
          <h2 className="add-title">
            Editar <span>Complemento</span>
          </h2>
          <form onSubmit={handleEditSubmit}>
            <div className="form-add">
              <div className="add-layout">
                <label>Complemento</label>
                <input type="text" required placeholder="EX: Leite em pó"
                value={form.nome_complemento}
                 onChange={e => setForm({...form, nome_complemento: e.target.value})} 
                 />
              </div>
              <div className="add-layout">
                <label>Preço</label>
                <input type="text" required placeholder="EX: 2,00"
                value={form.preco} 
                onChange={(e) => setForm({...form, preco: e.target.value})}
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

export default EditComplemento