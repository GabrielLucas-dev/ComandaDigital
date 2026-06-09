import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/vendas/Vendas";
import Pdv from "./pages/pdv/Pdv";
import Produtos from "./pages/produtos/Produtos";
import Historico from "./pages/historico/Historico";
import Analises from "./pages/analises/Analises";
import FormProduto from "./pages/formProduto/FormProduto";
import AddProduto from "./pages/formProduto/produto/AddProduto";
import AddCategoria from "./pages/formProduto/categoria/AddCategoria";
import AddComplemento from "./pages/formProduto/complemento/AddComplemento";
import ProdutosFilter from "./pages/produtos/produtosFilter/ProdutosFilter";
import ComplementosFilter from "./pages/produtos/complementosFilter/complementosFilter";
import CategoriasFilter from "./pages/produtos/categoriasFilter/CategoriasFilter";
import EditProduto from "./pages/editsForms/editProduto/EditProduto";
import EditCategoria from "./pages/editsForms/editCategoria/EditCategoria";
import EditComplemento from "./pages/editsForms/editComplemento/EditComplemento";
import ModalPagamento from "./components/modalPagamento/ModalPagamento";
import HistoricoData from './pages/historicoData/HistoricoData'
import VendaDetails from "./components/vendaDetails/VendaDetails";
import Login from "./pages/login/Login";
import PdvConcluir from "./pages/pdvConcluir/PdvConcluir";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<Login/>}/>

          <Route path="/pdv" element={<Pdv />} />
          <Route path="/vendas" element={<Vendas />} />
          <Route path="/historico" element={<Historico />} />
          <Route path="/analises" element={<Analises />} />

          <Route path="/formProduto" element={<FormProduto />} />
          <Route path="/addProduto" element={<AddProduto />} />
          <Route path="/addCategoria" element={<AddCategoria />} />
          <Route path="/addComplemento" element={<AddComplemento />} />

          <Route path="/produtos" element={<Produtos/>}>
            <Route path="filterProdutos" element={<ProdutosFilter/>}/>
            <Route path="filterCategorias" element={<CategoriasFilter  />}/>
            <Route path="filterComplementos" element={<ComplementosFilter />}/>
          </Route>

          <Route path="/produtos/filterProdutos/editProduto/:id_produto" element={< EditProduto/>}/>
          <Route path="/produtos/filterCategorias/editCategoria/:id_categoria" element={<EditCategoria/>}/>
          <Route path="/produtos/filterComplementos/editComplemento/:id_complemento" element={<EditComplemento />}/>

          <Route path="/modalPagamento" element={<ModalPagamento/>}/>

          <Route path="/historico/:data_venda" element={<HistoricoData/>}/>

          <Route path="/teste" element={<VendaDetails />}/>

          <Route path="concluirPdv" element={<PdvConcluir />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
