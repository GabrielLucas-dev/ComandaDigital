import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Vendas from "./pages/vendas/Vendas";
import Pdv from "./pages/pdv/Pdv"
import Produtos from "./pages/produtos/Produtos"
import Historico from './pages/historico/Historico'
import Analises from './pages/analises/Analises'
import FormProduto from "./pages/formProduto/FormProduto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pdv" element={<Pdv />}/>
          <Route path="/vendas" element={<Vendas />}/>
          <Route path="/produtos" element={<Produtos />}/>
          <Route path="/historico" element={<Historico />}/>
          <Route path="/analises" element={<Analises />}/>
          <Route path="/formProduto" element={<FormProduto />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
