import { useEffect, useState } from "react";
import "./ModalComplementos.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark} from '@fortawesome/free-solid-svg-icons'

function ModalComplementos({ onClose }) {
  const [complementos, setComplementos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3031/complementos")
      .then((res) => setComplementos(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <section className="container-modalComplementos">
        <div className="inner-modalComplementos">
          <div className="closeModal-complementos">
            <button className="closeModal-button" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
          </div>
          <div className="modalComplementos-title">
            <p>Escolha até 2 complementos de forma gratuita</p>
          </div>
          <div className="complementos-layout">
            {complementos.map((comp, i) => {
              return (
                <div className="complementos-card" key={i}>
                  <p>{comp.nome_complemento}</p>
                  <p>R${comp.preco}</p>
                  <button className="button-padrao2">Adicionar</button>
                </div>
              );
            })}
          </div>

          <div className="confirm-complementos">
            <button className="button-padrao2" onClick={onClose}>Confirmar Complemetos</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ModalComplementos;
