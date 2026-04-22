import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// import "./Historico.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function HistoricoData() {

    const [vendasData, setVendasData] = useState([])
    const dateURL = useParams() 
    
    useEffect(() => {
      axios.get(`http://localhost:3031/vendas/${dateURL.data_venda}`)
      .then(res => setVendasData(res.data))
      .catch(error => console.log(error))
    }, [dateURL])

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
              <button className="button-padrao"><Link to={`/historico/${date}`} className="infos-link">Procurar</Link></button>
              <button className="button-padrao gap"><Link to={`/historico`} className="infos-link">Início</Link></button>
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

          {vendasData.map((ven, i) => {
            return(
            <div className={`vendas-historico ${i % 2 === 0 ? '' : 'bg-cinza'}`} key={i}>
              <p>{ven.data_venda.split('T')[0]}</p>
              <p>{ven.data_venda.split('T')[1].split('.')[0]}</p>
              <p>R${ven.valor}</p>
              <p>{ven.forma_pagamento}</p>
              <button className="button-padrao2"><Link className="infos-link">Detalhes</Link></button>
            </div>
          )
          })}
          </div>
        </div>
      </section>
    </>
  );
}

export default HistoricoData;
