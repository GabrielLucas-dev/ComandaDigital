import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Vendas.css";
import axios from 'axios' 
import Cart from "../../components/cart/Cart";
import ModalComplementos from "../../components/modalComplementos/ModalComplementos";

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

  const [cart, setCart] = useState([])
  function addToCart(produto, complementosSel){
    const novoItem = {
      ...produto,
      complementos: complementosSel
    }
    setCart(prev => [...prev, ...novoItem])

    // setCart(prev => {
    //   const existe = prev.find(item => item.id_produto === produto.id_produto)
    //   if(existe){
    //     return prev.map(item => {
    //       item.id_produto === produto.id_produto
    //       ? {...item, quantidade: item.quantidade + 1}
    //       : item
    //     })
    //   }
    //   return [...prev, {...produto, quantidade: 1}]
    // })

  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  //==========================
  // MODAL
  //==========================
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)

  //==========================
  // BUTTON CARRINHO HANDLER
  //==========================
  

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
                  <button className="button-padrao2" onClick={() => {setIsOpen(true)} /*() => addToCart(prod)*/} >Adicionar ao carrinho</button>
                </div>
                  )
                })}

              </div>
            </div>

            <div className="modal-complementos">
              {isOpen 
              ?
              < ModalComplementos onClose={closeModal}/> 
              : 
              ""
              }
            </div>

          </div>
        </div>

        <div className="cart">
          <Cart />
        </div>
      </section>
    </>
  );
}

export default Vendas;
