import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import "./moreInfos.css";

function MoreInfos({ onClose }) {
    return (
        <section className="container-moreInfos">
            <div className="inner-moreInfos">
                <button className="close-btn closePagamento-button" onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>

                <div className="icon-wrapper">
                    <FontAwesomeIcon icon={faCircleInfo} />
                </div>

                <h3>Sobre o sistema</h3>
                <p>Esse sistema é apenas de controle, ele não manipula dinheiro.</p>

                <button className="confirm-btn" onClick={onClose}>
                    Entendi
                </button>
            </div>
        </section>
    );
}

export default MoreInfos;