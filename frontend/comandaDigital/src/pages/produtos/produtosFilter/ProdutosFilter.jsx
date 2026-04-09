import { useEffect, useState } from "react";
import "./ProdutosFilter.css";
import axios from 'axios'

function ProdutosFilter() {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3031/produtos')
        .then(res => setProdutos(res.data))
    }, [])

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
                <button className="exclude-button">Excluir</button>
                <button className="edit-button">Editar</button>
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
