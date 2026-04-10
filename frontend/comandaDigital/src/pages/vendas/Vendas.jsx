import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Vendas.css";
import axios from 'axios' 

function Vendas() {

  const [categorias, setCategorias] = useState([])
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3031/categorias')
    .then(res => {
      // console.log(res.data)
      setCategorias(res.data)
    })

    axios.get('http://localhost:3031/produtos')
    .then(res => setProdutos(res.data))
    .catch(error => console.log(error))
  }, [])

  // console.log(categorias)

  return (
    <>
      <section className="container-vendas">
        <Sidebar />

        <div className="teste">
          <div className="vendas-header">
            <div className="header-title">
              <h2>
                Frente do <span>Caixa</span>
              </h2>
            </div>
            <div className="div-search">
              <input type="text" placeholder="Pesquisar..." />
            </div>
          </div>

          <div className="middle-content">
            <div className="sidebar-itens">
              <div className="itens-list">
                <ul>
                  <li>Todos</li>
                  {categorias.map((cat, i) => {
                    return(
                      <li key={i}>{cat.nome_categoria}</li>
                    )
                  })}
                </ul>
              </div>
            </div>

            <div className="vendas-content">
              <div className="vendas-layout">

                {produtos.map((prod, i) => {
                  return(
                <div className="card-venda" key={i}>
                  <p>{prod.nome_produto}</p>
                  <h4>R${prod.preco_produto}</h4>
                  <button className="button-padrao2">Adicionar ao carrinho</button>
                </div>
                  )
                })}

              </div>
            </div>

          </div>
        </div>

        <div className="cart">
          <h3>Resumo do pedido</h3>
          <hr />
          <div className="confirm-order">
            <form action="">
            <p>R$: Valor total</p>
            <input type="submit" value="Confirmar pedido" className="button-padrao" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Vendas;
