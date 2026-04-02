import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Historico.css";

function Historico() {

    const [date, setDate] = useState()

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
              <input type="date" className="date-historico" onChange={(e) => setDate(e.target.value)}/>
              <input type="submit" className="button-padrao" />
            </div>
          </div>
          <div className="teste2">Historico (sera um map do banco de dados)</div>
        </div>
      </section>
    </>
  );
}

export default Historico;
