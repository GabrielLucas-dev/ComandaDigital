import { Link } from "react-router-dom"
import "./FormProduto.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBoxOpen, faTag, faListCheck } from '@fortawesome/free-solid-svg-icons'

function FormProduto() {
    return(
        <>
        <section className="container-formProduto">
            <div className="div-back-button">
                <Link to="/produtos" className="button-padrao">Voltar</Link>
            </div>
            <div className="form-produto">
                <h3>O que deseja <span>adicionar</span>?</h3>
                <div className="categories">
                    <ul>
                        <li><FontAwesomeIcon icon={faBoxOpen} /> Produto</li>
                        <li><FontAwesomeIcon icon={faTag} /> Categoria</li>
                        <li><FontAwesomeIcon icon={faListCheck} /> Complemento</li>
                    </ul>
                </div>
            </div>

        </section>
        </>
    )
}

export default FormProduto