import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import "./FecharPdv.css";
import comandaDigital from "../../assets/comandaDigital_icon2.png";
import api from "../../api/Api";

function FecharPdv() {
  useAuth();

  const navigate = useNavigate();
  const [pdvId, setPdvId] = useState(null);
  const [resumo, setResumo] = useState(null);
  const [saldoFinal, setSaldoFinal] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingResumo, setLoadingResumo] = useState(true);
  const [confirmarModal, setConfirmarModal] = useState(false);
  // const token = localStorage.getItem('token')

  useEffect(() => {
    async function carregarResumo() {
      try {
        console.log("Buscando PDV...");
        const resPdv = await api.get("/pdv/active");

        console.log("PDV OK", resPdv.data);
        if (!resPdv.data) {
          navigate("/pdv");
          return;
        }
        setPdvId(resPdv.data.id_pdv);

        // console.log("Resumo OK", resResumo.data);

        // TODO: criar endpoint GET /pdv/:id/resumo no backend
        // que retorne total_vendas, quantidade_vendas, saldo_inicial e pagamentos agrupados
        const resResumo = await api.get(`/pdv/${resPdv.data.id_pdv}/resumo`);
        setResumo(resResumo.data);
        console.log(resResumo.data)
      } catch (error) {
        console.error("Erro ao carregar resumo do dia:", error);
      } finally {
        setLoadingResumo(false);
      }
    }

    carregarResumo();
  }, [navigate]);

  async function handleFecharPdv() {
    if (!pdvId) return;
    setLoading(true);
    try {
      const saldo = parseFloat(saldoFinal.replace(",", ".")) || 0;
      await api.put(`/pdv/${pdvId}`, { saldo_final: saldo });
      navigate("/pdv");
      console.log(saldo, pdvId)
    } catch (error) {
      alert(error.response?.data?.message || "Erro ao fechar o PDV");
    } finally {
      setLoading(false);
      setConfirmarModal(false);
    }
  }

  function formatarMoeda(valor = 0) {
    if(valor == null) return "R$ 0,00"
    return Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  // function formatarFormaPagamento(forma) {
  //   const mapa = {
  //     pix: "Pix",
  //     dinheiro: "Dinheiro",
  //     credito: "Cartão de Crédito",
  //     debito: "Cartão de Débito",
  //   };
  //   return mapa[forma] ?? forma;
  // }

  return (
    <>
      {confirmarModal && (
        <div className="fechar-pdv-overlay">
          <div className="fechar-pdv-modal">
            <p className="fechar-pdv-modal-title">Fechar o caixa?</p>
            <p className="fechar-pdv-modal-desc">
              Essa ação encerrará as vendas do dia. Nenhuma nova venda poderá
              ser registrada até a abertura de um novo caixa amanhã.
            </p>
            <div className="fechar-pdv-modal-actions">
              <button
                className="fechar-pdv-btn-confirmar"
                onClick={handleFecharPdv}
                disabled={loading}
              >
                {loading ? "Fechando caixa..." : "Sim, fechar caixa"}
              </button>
              <button
                className="fechar-pdv-btn-cancelar"
                onClick={() => setConfirmarModal(false)}
                disabled={loading}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fechar-pdv-page">
        <div className="fechar-pdv-card">

          <img src={comandaDigital} alt="ComandaDigital" className="fechar-pdv-logo" />
          <p className="fechar-pdv-brand">
            Comanda<span>Digital</span>
          </p>

          <div className="fechar-pdv-divider" />

          <div className="fechar-pdv-status-badge">
            <div className="fechar-pdv-status-dot" />
            <span className="fechar-pdv-status-text">
              Caixa aberto — pronto para fechamento
            </span>
          </div>

          {loadingResumo ? (
            <p style={{ color: "#aaa", fontSize: "0.85rem", marginBottom: "28px" }}>
              Carregando resumo do dia...
            </p>
          ) : resumo ? (
            <>
              <div className="fechar-pdv-resumo">
                <p className="fechar-pdv-resumo-title">Resumo do dia</p>

                <div className="fechar-pdv-resumo-row">
                  <span className="fechar-pdv-resumo-label">Saldo inicial</span>
                  <span className="fechar-pdv-resumo-value">
                    {formatarMoeda(resumo.saldo_inicial)}
                  </span>
                </div>

                <div className="fechar-pdv-resumo-divider" />

                <div className="fechar-pdv-resumo-row">
                  <span className="fechar-pdv-resumo-label">Vendas realizadas</span>
                  <span className="fechar-pdv-resumo-value">
                    {resumo.quantidade_vendas}
                  </span>
                </div>

                <div className="fechar-pdv-resumo-row">
                  <span className="fechar-pdv-resumo-label">Total vendido</span>
                  <span className="fechar-pdv-resumo-value destaque">
                    {formatarMoeda(resumo.total_vendas)}
                  </span>
                </div>
              </div>

              {/* {resumo.pagamentos.length > 0 && (
                <div className="fechar-pdv-pagamentos">
                  <p className="fechar-pdv-pagamentos-title">Por forma de pagamento</p>
                  {resumo.pagamentos.map((p) => (
                    <div key={p.forma_pagamento} className="fechar-pdv-pagamento-item">
                      <span className="fechar-pdv-pagamento-label">
                        {formatarFormaPagamento(p.forma_pagamento)}
                      </span>
                      <span className="fechar-pdv-pagamento-value">
                        {formatarMoeda(p.total)}
                      </span>
                    </div>
                  ))}
                </div>
              )} */}
            </>
          ) : null}

          <div className="fechar-pdv-input-wrapper">
            <label className="fechar-pdv-input-label">
              Saldo em caixa agora (opcional)
            </label>
            <div className="fechar-pdv-input-currency">
              <span className="fechar-pdv-currency-symbol">R$</span>
              <input
                type="number"
                className="fechar-pdv-input"
                placeholder="0,00"
                value={saldoFinal}
                onChange={(e) => setSaldoFinal(e.target.value)}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="fechar-pdv-actions">
            <button
              className="fechar-pdv-btn-confirmar"
              onClick={() => setConfirmarModal(true)}
              disabled={loading || loadingResumo}
            >
              Fechar caixa
            </button>
            <button
              className="fechar-pdv-btn-cancelar"
              onClick={() => navigate("/vendas")}
              disabled={loading}
            >
              Voltar para vendas
            </button>
          </div>

          <p className="fechar-pdv-footer-note">
            O histórico deste caixa ficará salvo para consulta futura.
          </p>

        </div>
      </div>
    </>
  );
}

export default FecharPdv;
