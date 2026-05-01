import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Vendas.css";
import axios from "axios";
import Cart from "../../components/cart/Cart";
import ModalComplementos from "../../components/modalComplementos/ModalComplementos";

function Vendas() {
  const [categorias, setCategorias] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3031/categorias").then((res) => {
      setCategorias(res.data);
    });

    axios
      .get("http://localhost:3031/produtos")
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
    // const produto = setCart(prev => prev.id_produto === prod.id_produto)
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  //==========================
  // SHOW CATEGORIA
  //==========================

  const [categoriaAtiva, setCategoriaAtiva] = useState(null);
  const produtosFiltrados = categoriaAtiva ? produtos.filter(p => p.nome_categoria === categoriaAtiva) : produtos

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
                  <li>
                    <button className="list-button" onClick={() => setCategoriaAtiva(null)}>Todos</button>
                  </li>
                  {categorias.map((cat, i) => {
                    return (
                      <li key={i}>
                        {/* fazer onClick para setar a categoria como o nome da clicada e fazer uma logica pra mostrar apenas o itens com a categoria que tem o nome */}
                        <button onClick={() => setCategoriaAtiva(cat.nome_categoria)}>{cat.nome_categoria}</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="vendas-content">
              <div className="vendas-layout">
                {produtosFiltrados.map((prod, i) => {
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
