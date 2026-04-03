import Sidebar from "../../components/sidebar/Sidebar";
import "./Analises.css";

function Analises() {
  return (
    <>
      <section className="container-analises">
        <Sidebar />
        <div className="inner-analises">
          <div className="header-analises">
            <h2>Análises</h2>
          </div>

          <div className="div-analises">
            <div className="analise">
              <h4>Total recebido</h4>
              <p>R$: 1500,00</p>
            </div>
            <div className="analise">
              <h4>Numero de vendas</h4>
              <p>150</p>
            </div>
            <div className="analise">
              <h4>Ticket médio:</h4>
              <p>R$: 10,00</p>
            </div>
            <div className="analise">
              <h4>Grafico - Formas de pagamento</h4>
              <p>grafico</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Analises;
