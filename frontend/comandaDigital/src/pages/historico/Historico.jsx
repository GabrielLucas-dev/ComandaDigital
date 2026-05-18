import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Historico.css";
import api from "../../api/Api";
import { Link } from "react-router-dom";
import VendaDetails from "../../components/vendaDetails/VendaDetails";
import { useAuth } from "../../hooks/useAuth";

function Historico() {
  useAuth();

  const [vendas, setVendas] = useState([]);
  const [vendaEsp, setVendaEsp] = useState([])
  const [itensVenda, setItensVenda] = useState([])

  useEffect(() => {
    api.get("http://localhost:3031/vendas")
      .then((res) => setVendas(res.data))
      .catch((error) => console.log(error));

      api.get("http://localhost:3031/itensVenda/detalhes/:venda_id")
      .then(res => setItensVenda(res.data))
  }, []);

  const [date, setDate] = useState();

  const [isOpen, setIsOpen] = useState(false);

  const showDetails = async (venda, id) => {
    const res = await api.get(`http://localhost:3031/itensVenda/detalhes/${id}`)
    setItensVenda(res.data)
    setVendaEsp(venda)
    setIsOpen(true);
  };

  const closeDetails = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="container-historico">
        <Sidebar />
        <div className="inner-historico">
          <div className="header-historico">
            <div>
              <h2>
                Histórico - Movimentação de <span>Caixa</span>
              </h2>
            </div>
            <div className="search-historico">
              <input
                type="date"
                className="date-historico"
                onChange={(e) => setDate(e.target.value)}
              />
              <button className={date ? "button-padrao" : "button-padrao disabled"}>
                <Link to={date ? `/historico/${date}` : ''} className={date ? "infos-link" : "infos-link disabled"}>
                  Procurar
                </Link>
              </button>
            </div>
          </div>
          <div className="historico-content">
            <div className="header-historico-content">
              <h4>Data</h4>
              <h4>Hora</h4>
              <h4>Valor</h4>
              <h4>Pagamento</h4>
            </div>

            {vendas.map((ven, i) => {
              return (
                <div
                    className={`vendas-historico ${i % 2 === 0 ? "" : "bg-cinza"}`}
                    key={i}
                  >
                    <p>{ven.data_venda.split("T")[0]}</p>
                    <p>{ven.data_venda.split("T")[1].split(".")[0]}</p>
                    <p>R${ven.valor}</p>
                    <p>{ven.forma_pagamento}</p>
                    <button
                      className="button-padrao2"
                      onClick={() => showDetails(ven, ven.id_venda)}
                    >
                      Detalhes
                    </button>
                  </div>
                );
            })}
            {isOpen ? <VendaDetails onClose={closeDetails} venda={vendaEsp} itens={itensVenda} /> : ""}
          </div>
        </div>
      </section>
    </>
  );
}

export default Historico;
