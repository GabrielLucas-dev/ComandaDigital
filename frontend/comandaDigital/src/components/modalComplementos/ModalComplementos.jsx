import { useEffect, useState } from "react";
import { createPortal } from "react-dom";        
import "./ModalComplementos.css";
import api from "../../api/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ModalComplementos({ onClose, onConfirm }) {
  const [complementos, setComplementos] = useState([]);
  const [selecionados, setSelecionados] = useState([]);

  useEffect(() => {
    api
      .get("http://localhost:3031/complementos")
      .then((res) => setComplementos(res.data))
      .catch((error) => console.log(error));
  }, []);                                        

  const toggleComplementos = (comp) => {
    setSelecionados((prev) => {
      const existe = prev.find((c) => c.id_complemento === comp.id_complemento);
      if (existe) return prev.filter((c) => c.id_complemento !== comp.id_complemento);
      // REGRA DE NEGOCIO, deve ser adaptada a cada estabeleciento 
      if (prev.length >= 2) return prev;         
      return [...prev, comp];
    });
  };

  const handleConfirmar = () => {
    onConfirm(selecionados);
    onClose();
  };

  return createPortal(                          
    <div className="modalComplementos-overlay">
      <section className="container-modalComplementos">
        <div className="inner-modalComplementos">
          <div className="closeModal-complementos">
            <button className="closeModal-button" onClick={onClose}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div className="modalComplementos-title">
            <p>Escolha até 2 complementos de forma gratuita</p>
          </div>
          <div className="complementos-layout">
            {complementos.map((comp, i) => {
              const selecionado = selecionados.find(
                (c) => c.id_complemento === comp.id_complemento
              );
              return (
                <div className="complementos-card" key={i}>
                  <p>{comp.nome_complemento}</p>
                  <p>R${comp.preco}</p>
                  <button
                    className="button-padrao2"
                    onClick={() => toggleComplementos(comp)}
                    style={{ opacity: selecionado ? 0.75 : 1 }}
                  >
                    {selecionado ? "Adicionado" : "Adicionar"}
                  </button>
                </div>
              );
            })}
          </div>
          <div className="confirm-complementos">
            <button className="button-padrao2" onClick={handleConfirmar}>
              Confirmar Complementos ({selecionados.length}/2)
            </button>
          </div>
        </div>
      </section>
    </div>,
    document.body
  );
}

export default ModalComplementos;