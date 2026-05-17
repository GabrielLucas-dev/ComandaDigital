import { Link, useNavigate } from "react-router-dom";
import api from '../../../api/Api'
import { useState } from "react";

function AddComplemento() {

  const [nomeComplemento, setNomeComplemento] = useState()
  const [precoComplemento, setPrecoComplemento] = useState()
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    api.post('http://localhost:3031/complementos', {nome_complemento: nomeComplemento, preco: precoComplemento})
    .then(res => {
      console.log(res.data)
      navigate('/produtos/filterComplementos')
    })
    .catch(error => console.log(error))
  }

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
          <form onSubmit={handleSubmit}>
            <div className="form-add">
              <div className="add-layout">
                <label>Complemento</label>
                <input type="text" required placeholder="EX: Leite em pó" onChange={(e => setNomeComplemento(e.target.value))} />
              </div>
              <div className="add-layout">
                <label>Preço</label>
                <input type="text" required placeholder="EX: 2,00" onChange={(e) => setPrecoComplemento(e.target.value)}/>
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
