import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Analises.css";
import api from "../../api/Api";
import { useAuth } from "../../hooks/useAuth";
import LineGraph from "../../components/lineGraphs/LineGraph";
import LineGraphComplete from '../../components/lineGraphs/LineGraphComplete'

function Analises() {
  useAuth();

  const [analises30dias, setAnalises30dias] = useState(null);
  const [analisesGerais, setAnalisesGerais] = useState(null);
  const [analisesPeriodo, setAnalisesPeriodo] = useState(null);

  const [dataInicio, setDataInicio] = useState();
  const [dataFim, setDataFim] = useState();

  

  useEffect(() => {
    api
      .get("/analises/30dias")
      .then((res) => setAnalises30dias(res.data));

    api
      .get("/analises/gerais")
      .then((res) => setAnalisesGerais(res.data));

    api
      .get(
        `/analises/periodo?data_inicio=${dataInicio}&data_fim=${dataFim}`,
      )
      .then((res) => setAnalisesPeriodo(res.data));
  }, [dataInicio, dataFim]);

  if (!analises30dias) return <p>Carregando...</p>;
  if (!analisesGerais) return <p>Carregando...</p>;
  if (!analisesPeriodo) return <p>Caregando...</p>

  return (
    <>
      <section className="container-analises">
        <Sidebar />
        <div className="inner-analises">
          <div className="header-analises">
            <h2>Análises</h2>
          </div>

          <div className="analises-title">
            <h3>Ultimos 30 dias</h3>
          </div>

          <div className="div-analises">
            <div className="analise">
              <h4>Valor vendido</h4>
              <p>R${analises30dias.valorVendas30dias[0]["SUM(valor)"]}</p>
            </div>
            <div className="analise">
              <h4>Numero total de vendas</h4>
              <p>{analises30dias.totalVendas30dias[0]["COUNT(*)"]}</p>
            </div>
            <div className="analise">
              <h4>Ticket médio</h4>
              <p>
                R$
                {Number(
                  analises30dias.ticketMedio30dias[0]["AVG(valor)"],
                ).toFixed(2)}
              </p>
            </div>
            <div className="analise">
              <h4>Grafico - Formas de pagamento</h4>
              <p>
                Pix:{" "}
                {
                  analises30dias.formaPagamentoPix30dias[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
              <p>
                Débito:{" "}
                {
                  analises30dias.formaPagamentoDebito30dias[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
              <p>
                Crédito:{" "}
                {
                  analises30dias.formaPagamentoCredito30dias[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
              <p>
                Dinheiro:{" "}
                {
                  analises30dias.formaPagamentoDinheiro30dias[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
            </div>
          </div>

          <div className="graph-container">
                <LineGraph />
          </div>

          <hr />

          <div className="analises-title">
            <h3>Histórico Completo</h3>
          </div>

          <div className="div-analises">
            <div className="analise">
              <h4>Valor vendido</h4>
              <p>R${analisesGerais.valorVendas[0]["SUM(valor)"]}</p>
            </div>
            <div className="analise">
              <h4>Numero total de vendas</h4>
              <p>{analisesGerais.totalVendas[0]["COUNT(*)"]}</p>
            </div>
            <div className="analise">
              <h4>Ticket médio</h4>
              <p>
                R$
                {Number(analisesGerais.ticketMedio[0]["AVG(valor)"]).toFixed(2)}
              </p>
            </div>
            <div className="analise">
              <h4>Grafico - Formas de pagamento</h4>
              <p>
                Pix:{" "}
                {analisesGerais.formaPagamentoPix[0]["COUNT(forma_pagamento)"]}
              </p>
              <p>
                Débito:{" "}
                {
                  analisesGerais.formaPagamentoDebito[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
              <p>
                Crédito:{" "}
                {
                  analisesGerais.formaPagamentoCredito[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
              <p>
                Dinheiro:{" "}
                {
                  analisesGerais.formaPagamentoDinheiro[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
            </div>
          </div>

          <div className="graph-container">
                <LineGraphComplete />
          </div>

          <hr />

          <div className="analises-title">
            <h3>Busca personalizada</h3>
          </div>

          <div className="analises-search">
            <div className="search-box">
              <div>
                <label htmlFor="">De</label>
              </div>
              <div>
                <input
                  type="date"
                  className="date-historico"
                  onChange={(e) => setDataInicio(e.target.value)}
                />
                <label htmlFor=""> 00h00</label>
              </div>
            </div>
            <div className="search-box">
              <div>
                <label htmlFor="">Até</label>
              </div>
              <div>
                <input
                  type="date"
                  className="date-historico"
                  onChange={(e) => setDataFim(e.target.value)}
                />
                <label htmlFor=""> 23h59</label>
              </div>
            </div>
            <div className="search-box-button">
            </div>
          </div>

          <div className="div-analises">
            <div className="analise">
              <h4>Valor vendido</h4>
              <p>R${analisesPeriodo.valorVendasPeriodo[0]["SUM(valor)"]}</p>
            </div>
            <div className="analise">
              <h4>Numero total de vendas</h4>
              <p>{analisesPeriodo.totalVendasPeriodo[0]["COUNT(*)"]}</p>
            </div>
            <div className="analise">
              <h4>Ticket médio</h4>
              <p>
                R$
                {Number(analisesPeriodo.ticketMedioPeriodo[0]["AVG(valor)"]).toFixed(2)}
              </p>
            </div>
            <div className="analise">
              <h4>Grafico - Formas de pagamento</h4>
              <p>
                Pix:{" "}
                {analisesPeriodo.formaPagamentoPixPeriodo[0]["COUNT(forma_pagamento)"]}
              </p>
              <p>
                Débito:{" "}
                {
                  analisesPeriodo.formaPagamentoDebitoPeriodo[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
              <p>
                Crédito:{" "}
                {
                  analisesPeriodo.formaPagamentoCreditoPeriodo[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
              <p>
                Dinheiro:{" "}
                {
                  analisesPeriodo.formaPagamentoDinheiroPeriodo[0][
                    "COUNT(forma_pagamento)"
                  ]
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <LineGraph /> */}
    </>
  );
}

export default Analises;
