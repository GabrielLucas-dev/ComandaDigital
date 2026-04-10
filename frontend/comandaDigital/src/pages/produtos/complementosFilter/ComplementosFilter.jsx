import { useEffect, useState } from "react";
import axios from "axios";

function ComplementosFilter() {
  const [complementos, setComplementos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3031/complementos")
      .then((res) => setComplementos(res.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id_complemento) => {
  axios.delete(`http://localhost:3031/complementos/${id_complemento}`)
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

export default ComplementosFilter;
