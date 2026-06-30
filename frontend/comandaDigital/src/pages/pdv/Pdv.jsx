import { useAuth } from "../../hooks/useAuth";
import "./Pdv.css";
import comandaDigital from "../../assets/comandaDigital_icon2.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";

function Pdv() {
  useAuth();

  const token = localStorage.getItem("token");

  const [dataAtual, setDataAtual] = useState("");
  const [diaSemana, setDiaSemana] = useState("");
  const [saldoInicial, setSaldoInicial] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const [pdvAberto, setPdvAberto] = useState(false)

  useEffect(() => {
    const hoje = new Date();

    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    setDiaSemana(dias[hoje.getDay()]);

    const dataFormatada = hoje.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    setDataAtual(dataFormatada);
  }, []);

  async function handleAbrirPdv() {
    setLoading(true);
    try {
      const saldo = parseFloat(saldoInicial.replace(",", ".")) || 0;
      await api.post(
        "/pdv",
        { saldo_inicial: saldo },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      navigate('/vendas')
    } catch (error) {
      alert(error.response?.data?.message || "Erro ao abrir o PDV");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    api.get("/pdv/active", {
        headers: { 
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        if(res.data){
            setPdvAberto(true)
        } else{
            setPdvAberto(false)
        }
    }) 
    .catch(error => console.log(error))
  }, [token])

  return (
    <>
    <div className="pdv-page">
      <div className="pdv-card">
        <img src={comandaDigital} alt="ComandaDigital" className="pdv-logo" />
        <p className="pdv-brand">
          Comanda<span>Digital</span>
        </p>
        <div className="pdv-divider" />
        <div className="pdv-status-badge">
          <div className="pdv-status-dot" />
          <span className="pdv-status-text">{pdvAberto ? "Caixa Aberto - clique no botão para entrar" : "Caixa fechado — aguardando abertura "}</span>
        </div>

        <div className="pdv-info-block">
          <div className="pdv-info-row">
            <span className="pdv-info-label">Data</span>
            <span className="pdv-info-value">{dataAtual}</span>
          </div>
          <div className="pdv-info-row">
            <span className="pdv-info-label">Dia da semana</span>
            <span className="pdv-info-value">{diaSemana}</span>
          </div>
        </div>

        {pdvAberto 
        ? '' 
        : 
        <div className="pdv-input-wrapper">
          <label className="pdv-input-label">Troco inicial (opcional)</label>
          <div className="pdv-input-currency">
            <span className="pdv-currency-symbol">R$</span>
            <input
              type="number"
              className="pdv-input"
              placeholder="0,00"
              value={saldoInicial}
              onChange={(e) => setSaldoInicial(e.target.value)}
              min="0"
              step="0.01"
            />
          </div>
        </div>
        }

        <button
          className="pdv-btn"
          onClick={pdvAberto ? () => navigate('/vendas') : handleAbrirPdv}
          disabled={loading}
        >
         {pdvAberto ? "Acessar vendas" : loading ? "Abrindo caixa..." : "Abrir caixa"} 
        </button>

        <p className="pdv-footer-note">
          Ao abrir o caixa, as vendas do dia serão vinculadas a esta sessão.
        </p>

      </div>
    </div>
    </>
  );
}

export default Pdv;
