import { useEffect, useState } from "react";
import api from "../../../api/Api";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

function ComplementosFilter() {
  useAuth();

  const [complementos, setComplementos] = useState([]);

  useEffect(() => {
    api
      .get("/complementos")
      .then((res) => setComplementos(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id_complemento) => {
  api.delete(`/complementos/${id_complemento}`)
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
            <h4>Categoria</h4>
          </div>
          <div>
            <h4>Preço</h4>
          </div>
          <div>
            <h4>Ações</h4>
          </div>
        </div>

        <div className="produtosFilter-layout">
          {complementos.map((comp, i) => {
            return (
              <div className="produtosFilter-content" key={i}>
                <div>
                  <p>{comp.id_complemento}</p>
                </div>
                <div>
                  <p>{comp.nome_complemento}</p>
                </div>
                <div>
                  <p>{comp.preco}</p>
                </div>
                <div>
                  <button className="exclude-button" onClick={() => handleDelete(comp.id_complemento)}>Excluir</button>
                  <button className="edit-button"><Link className="edit-link" to={`/produtos/filterComplementos/editComplemento/${comp.id_complemento}`}>Editar</Link></button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ComplementosFilter;
