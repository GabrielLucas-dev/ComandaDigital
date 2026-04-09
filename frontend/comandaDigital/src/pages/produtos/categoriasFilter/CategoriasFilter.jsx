import axios from "axios";
import { useEffect, useState } from "react";

function CategoriasFilter() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/categorias")
      .then((res) => setCategorias(res.data))
      .catch((error) => console.log(error));
  }, []);

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
                  <button className="exclude-button">Excluir</button>
                  <button className="edit-button">Editar</button>
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
