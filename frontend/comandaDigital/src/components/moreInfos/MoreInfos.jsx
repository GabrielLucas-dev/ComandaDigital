import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./moreInfos.css";

function MoreInfos({ onClose }) {
    return (
        <section className="container-moreInfos">
            <div className="inner-moreInfos">
                <button className="close-btn" onClick={onClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <p>Esse sistema é apenas de controle, ele não manipula dinheiro.</p>
            </div>
        </section>
    );
}

export default MoreInfos;