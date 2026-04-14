import { Link, useNavigate } from "react-router-dom";
import "./AddProduto.css";
import axios from "axios";
import { useEffect, useState } from "react";

function AddProduto() {

  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3031/categorias")
      .then((res) => {
        setCategorias(res.data)
      })
      .catch((error) => console.log(error));
  }, []);

  const [selecionado, setSelecionado] = useState();
  const [produto, setProduto] = useState('')
  const [preco, setPreco] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    if(selecionado === "selecione") return alert('Escolha alguma categoria!')

    axios.post('http://localhost:3031/produtos', {
      nome_produto: produto,
      preco_produto: preco,
      categoria_id: selecionado
    })
    .then(res => {
      console.log(res.data)
      navigate('/produtos/filterProdutos')
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
            Novo <span>Produto</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="form-add">
              <div className="add-layout">
                <label>Produto</label>
                <input type="text" required placeholder="EX: Açaí 300ml" onChange={(e) => setProduto(e.target.value)} />
              </div>
              <div className="add-layout">
                <label>Preço</label>
                <input type="text" required placeholder="EX: 20,00" onChange={(e) => setPreco(e.target.value)} />
              </div>
            </div>
            <div className="category">
              <div>
                <label htmlFor="">Categoria</label>
              </div>
              <select
                value={selecionado}
                onChange={(e) => setSelecionado(e.target.value)}
              >
                <option value="selecione">Selecione...</option>
                {categorias.map((cat, i) => {
                  return (
                    <option key={i} value={cat.id_categoria}>
                      {cat.nome_categoria}
                    </option>
                  );
                })}
              </select>
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

export default AddProduto;
