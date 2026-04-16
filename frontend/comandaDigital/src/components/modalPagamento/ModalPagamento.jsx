import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ModalPagamento.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function ModalPagamento({onClose}) {
  return (
    <>
      <section className="container-modalPagamento">
          <button className="closePagamento-button" onClick={onClose}><FontAwesomeIcon icon={faXmark} /></button>
        <div className="modalPagamento-layout">
          <div>a</div>
          <div>a</div>
        </div>
        <div className="modalPagamento-layout">
          <div>a</div>
          <div>a</div>
        </div>
        <div className="confirm-complementos">
          <button className="button-padrao2">confirmar</button>
        </div>
      </section>
    </>
  );
}

export default ModalPagamento;
