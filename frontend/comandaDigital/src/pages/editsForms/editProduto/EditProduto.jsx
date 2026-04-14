import { useEffect, useState } from "react";
import "./EditProduto.css";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

function EditProduto() {
  const [categorias, setCategorias] = useState([]);
  const { id_produto } = useParams();
  const [form, setForm] = useState({
    nome_produto: "",
    preco_produto: "",
    categoria_id: "",
  });

  useEffect(() => {
    axios.get(`http://localhost:3031/produtos/${id_produto}`)
    .then((res) => setForm(res.data))
    .catch((error) => console.log(error));

    axios.get("http://localhost:3031/categorias")
    .then((res) => setCategorias(res.data))
    .catch((error) => console.log(error));
  }, [id_produto]);

  const navigate = useNavigate();

  function handleEditSubmit(e) {
    e.preventDefault();

    axios.put(`http://localhost:3031/produtos/${id_produto}`, form)
      .then((res) => {
        console.log(res.data)

        navigate("/produtos/filterProdutos");
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <section className="container-editProduto">
        <div>
          <section className="container-addProduto">
            <div className="div-back-button">
              <Link to="/produtos/filterProdutos" className="button-padrao">
                Voltar
              </Link>
            </div>

            <div className="inner-addProduto">
              <h2 className="add-title">
                Editar <span>Produto</span>
              </h2>
              <form onSubmit={handleEditSubmit}>
                <div className="form-add">
                  <div className="add-layout">
                    <label>Produto</label>
                    <input
                      type="text"
                      required
                      placeholder="EX: Açaí 300ml"
                      value={form.nome_produto}
                      onChange={(e) =>
                        setForm({ ...form, nome_produto: e.target.value })
                      }
                    />
                  </div>
                  <div className="add-layout">
                    <label>Preço</label>
                    <input
                      type="text"
                      required
                      placeholder="EX: 20,00"
                      value={form.preco_produto}
                      onChange={(e) =>
                        setForm({ ...form, preco_produto: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="category">
                  <div>
                    <label htmlFor="">Categoria</label>
                  </div>
                  <select
                    value={form.categoria_id}
                    onChange={(e) =>
                      setForm({ ...form, categoria_id: e.target.value })
                    }
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
        </div>
      </section>
    </>
  );
}

export default EditProduto;
