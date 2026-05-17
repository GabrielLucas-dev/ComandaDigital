import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Vendas.css";
import api from "../../api/Api";
import Cart from "../../components/cart/Cart";
import ModalComplementos from "../../components/modalComplementos/ModalComplementos";

function Vendas() {

  const token = localStorage.getItem("token")
  if(!token) alert("sem token")

  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    api.get("/categorias").then((res) => {
      setCategorias(res.data);
    });

    api
      .get("/produtos")
      .then((res) => setProdutos(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [cart, setCart] = useState([]);
  function addToCart(produto, complementosSel) {
    const novoItem = {
      ...produto,
      complementos: complementosSel,
    };
    setCart((prev) => [...prev, novoItem]);
  }

  //==========================
  // VERIFICAR SE O PRODUTO EXIGE COMPLEMENTO
  //==========================

  //mais para frente tentar fazer isso dinamicamente, adicionando uma regra de negócio para isso
  const nessecitaComplemento = "Açaí";
  const verificaProduto = (produto) => {
    return nessecitaComplemento.includes(produto.nome_categoria);
  };

  //==========================
  // MODAL
  //==========================

  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);

  //==========================
  // BUTTON CARRINHO HANDLER
  //==========================

  const [produtoSelecionado, setProdutoSelecionado] = useState();

  function handleAddProduto(produto) {
    try {
      if (verificaProduto(produto)) {
        setProdutoSelecionado(produto);
        setIsOpen(true);
      } else {
        setProdutoSelecionado(produto);
        addToCart(produto, []);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //==========================
  // BUTTON REMOVER DO CARRINHO
  //==========================

  function removeProd(index) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  //==========================
  // SHOW CATEGORIA|PRODUTOS
  //==========================

  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const [produtosText, setProdutosText] = useState(null);
  const produtosFiltrados = categoriaAtiva
    ? produtos.filter((p) => p.nome_categoria === categoriaAtiva) 
    // .filter((p) => produtosText ? p.nome_produto.toLoweCase().includes(produtosText.toLoweCase()) : true)  //ARRUMAR ISSO
    : produtos;
    const produtosFiltradosText = produtosFiltrados.filter((p) => produtosText ? p.nome_produto.includes(produtosText) : <p>Nada encotrado</p>)   

  // function filterProdutos(prod, prodText) {
  //   return prod.filter((p) => p.nome_produto.includes(prodText) || p.nome_categoria.includes(prodText))
  // }

  // const foundProds = filterProdutos(produtos, produtosText)  

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
              <input type="text" placeholder="Pesquisar..." onChange={e => setProdutosText(e.target.value)} />
            </div>
          </div>

          <div className="middle-content">
            <div className="sidebar-itens">
              <div className="itens-list">
                <ul>
                  <li>
                    <button
                      className={categoriaAtiva === null ? "ativo" : ""}
                      onClick={() => setCategoriaAtiva(null)}
                    >
                      Todos
                    </button>
                  </li>
                  {categorias.map((cat, i) => {
                    return (
                      <li key={i}>
                          <button
                          onClick={() => setCategoriaAtiva(cat.nome_categoria)}
                          className={
                            categoriaAtiva === cat.nome_categoria ? "ativo" : ""
                          }
                        >
                          {cat.nome_categoria}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="vendas-content">
              <div className="vendas-layout">
                {produtosFiltradosText.map((prod, i) => {
                  return (
                    <div className="card-venda" key={i}>
                      <p>{prod.nome_produto}</p>
                      <h4>R${prod.preco_produto}</h4>
                      <button
                        className="button-padrao2"
                        onClick={() => handleAddProduto(prod)}
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <div>
              teste
            {foundProds.map((p, i) => {
               return (
                    <div className="card-venda" key={i}>
                      <p>{p.nome_produto}</p>
                      <h4>R${p.preco_produto}</h4>
                      <button
                        className="button-padrao2"
                        onClick={() => handleAddProduto(p)}
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                  );
            })}
            </div> */}

            <div className="modal-complementos">
              {isOpen ? (
                <ModalComplementos
                  onClose={closeModal}
                  onConfirm={(selecionados) => {
                    addToCart(produtoSelecionado, selecionados);
                    setIsOpen(false);
                  }}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="cart">
          <Cart cart={cart} onRemove={removeProd} />
        </div>
      </section>
    </>
  );
}

export default Vendas;
