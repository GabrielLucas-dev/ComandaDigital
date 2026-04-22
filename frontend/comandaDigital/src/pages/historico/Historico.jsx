import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Historico.css";
import axios from "axios";
import { Link } from "react-router-dom";
import VendaDetails from "../../components/vendaDetails/VendaDetails";

function Historico() {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3031/vendas")
      .then((res) => setVendas(res.data))
      .catch((error) => console.log(error));
  }, []);

  const [date, setDate] = useState();

  const [isOpen, setIsOpen] = useState(false)
  const showDetails = (id) => {
    setIsOpen(true)
  }

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
              <button className="button-padrao">
                <Link to={`/historico/${date}`} className="infos-link">
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
              <h4>Informações da venda</h4>
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
                  <button className="button-padrao2" onClick={() => showDetails(ven.id_venda)}>
                    Detalhes
                  </button>
                </div>
              );
            })}
          </div>

            {isOpen ? <VendaDetails /> : ''}

        </div>
      </section>
    </>
  );
}

export default Historico;
