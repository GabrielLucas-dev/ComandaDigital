import { useEffect, useState } from "react";
import "./ProdutosFilter.css";
import api from '../../../api/Api'
import { Link } from 'react-router-dom'
import { useAuth } from "../../../hooks/useAuth";

function ProdutosFilter() {
  useAuth();

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        api.get('/produtos')
        .then(res => setProdutos(res.data))
    }, [])

    const handleDelete = async (id_produto) => {
      await api.delete(`/produtos/${id_produto}`)
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
              <h4>Preço</h4>
            </div>
            <div>
              <h4>Categoria</h4>
            </div>
            <div>
              <h4>Ações</h4>
            </div>
          </div>

        <div className="produtosFilter-layout">
          
          {produtos.map((prod, i) => {
            return(
                <div className="produtosFilter-content" key={i}>
            <div>
              <p>{prod.id_produto}</p>
            </div>
            <div>
              <p>{prod.nome_produto}</p>
            </div>
            <div>
              <p>R${prod.preco_produto}</p>
            </div>
            <div>
                <p>{prod.nome_categoria}</p>
            </div>
            <div>
                <button className="exclude-button" onClick={() => handleDelete(prod.id_produto)}>Excluir</button>
                <button className="edit-button"><Link className="edit-link" to={`/produtos/filterProdutos/editProduto/${prod.id_produto}`}>Editar</Link></button>
            </div>
          </div>
            )
          })}
         
         </div> 
      </section>
    </>
  );
}

export default ProdutosFilter;
