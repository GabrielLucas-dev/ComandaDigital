import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Analises.css";
import axios from "axios";

function Analises() {

  const [analises, setAnalises] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3031/analises')
    .then(res => setAnalises(res.data))
  }, [])
  
  if(!analises) return <p>Carregando...</p>

  return (
    <>
      <section className="container-analises">
        <Sidebar />
        <div className="inner-analises">
          <div className="header-analises">
            <h2>Análises</h2>
          </div>

          <div className="analises-title"><h3>Ultimos 30 dias</h3></div>

          <div className="div-analises">
            <div className="analise">
              <h4>Valor vendido</h4>
              <p>R${analises.valorVendas30dias[0]["SUM(valor)"]}</p>
            </div>
            <div className="analise">
              <h4>Numero total de vendas</h4>
              <p>{analises.totalVendas30dias[0]["COUNT(*)"]}</p>
            </div>
            <div className="analise">
              <h4>Ticket médio</h4>
              <p>R${Number(analises.ticketMedio30dias[0]["AVG(valor)"]).toFixed(2)}</p>
            </div>
            <div className="analise">
              <h4>Grafico - Formas de pagamento</h4>
              <p>Pix: {analises.formaPagamentoPix30dias[0]["COUNT(forma_pagamento)"]}</p>
              <p>Débito: {analises.formaPagamentoDebito30dias[0]["COUNT(forma_pagamento)"]}</p>
              <p>Crédito: {analises.formaPagamentoCredito30dias[0]["COUNT(forma_pagamento)"]}</p>
              <p>Dinheiro: {analises.formaPagamentoDinheiro30dias[0]["COUNT(forma_pagamento)"]}</p>
            </div>
          </div>

          <hr />

          <div className="analises-title"><h3>Histórico Completo</h3></div>

          <div className="div-analises">
            <div className="analise">
              <h4>Valor vendido</h4>
              <p>R${analises.valorVendas30dias[0]["SUM(valor)"]}</p>
            </div>
            <div className="analise">
              <h4>Numero total de vendas</h4>
              <p>{analises.totalVendas30dias[0]["COUNT(*)"]}</p>
            </div>
            <div className="analise">
              <h4>Ticket médio</h4>
              <p>R${Number(analises.ticketMedio30dias[0]["AVG(valor)"]).toFixed(2)}</p>
            </div>
            <div className="analise">
              <h4>Grafico - Formas de pagamento</h4>
              <p>Pix: {analises.formaPagamentoPix30dias[0]["COUNT(forma_pagamento)"]}</p>
              <p>Débito: {analises.formaPagamentoDebito30dias[0]["COUNT(forma_pagamento)"]}</p>
              <p>Crédito: {analises.formaPagamentoCredito30dias[0]["COUNT(forma_pagamento)"]}</p>
              <p>Dinheiro: {analises.formaPagamentoDinheiro30dias[0]["COUNT(forma_pagamento)"]}</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Analises;
