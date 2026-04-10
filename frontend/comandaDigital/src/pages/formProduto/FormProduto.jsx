import { Link } from "react-router-dom"
import "./FormProduto.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBoxOpen, faTag, faListCheck } from '@fortawesome/free-solid-svg-icons'

function FormProduto() {
    return(
        <>
        <section className="container-formProduto">
            <div className="div-back-button">
                <Link to="/produtos/filterProdutos" className="button-padrao">Voltar</Link>
            </div>
            <div className="form-produto">
                <h3>O que deseja <span>adicionar</span>?</h3>
                <div className="categories">
                    <ul>
                        <Link className="category-links" to="/addProduto"><FontAwesomeIcon icon={faBoxOpen} /> Produto</Link>
                        <Link className="category-links" to="/addCategoria"><FontAwesomeIcon icon={faTag} /> Categoria</Link>
                        <Link className="category-links" to="/addComplemento"><FontAwesomeIcon icon={faListCheck} /> Complemento</Link>
                    </ul>
                </div>
            </div>

        </section>
        </>
    )
}

export default FormProduto