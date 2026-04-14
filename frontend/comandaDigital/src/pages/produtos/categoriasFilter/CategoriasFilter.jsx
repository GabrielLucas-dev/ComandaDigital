import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CategoriasFilter() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/categorias")
      .then((res) => setCategorias(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id_categoria) => {
    axios.delete(`http://localhost:3031/categorias/${id_categoria}`)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

    window.location.reload()
  }

  return (
    <>
      <section className="container-produtosFilter">
        <div className="produtosFilter-header">
          <div>
            <h4>Id</h4>
          </div>
          <div>
            <h4>Nome</h4>
          </div>
          <div>
            <h4>Ações</h4>
          </div>
        </div>

        <div className="produtosFilter-layout">
          {categorias.map((cat, i) => {
            return (
              <div className="produtosFilter-content" key={i}>
                <div>
                  <p>{cat.id_categoria}</p>
                </div>
                <div>
                  <p>{cat.nome_categoria}</p>
                </div>
                <div>
                  <button className="exclude-button" onClick={() => handleDelete(cat.id_categoria)}>Excluir</button>
                  <button className="edit-button"><Link className="edit-link" to={`/produtos/filterCategorias/editCategoria/${cat.id_categoria}`}>Editar</Link></button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default CategoriasFilter;
