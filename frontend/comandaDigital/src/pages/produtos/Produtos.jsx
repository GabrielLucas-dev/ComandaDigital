import Sidebar from "../../components/sidebar/Sidebar"
import "./Produtos.css"

function Produtos() {
    return(
        <>
        <section className="container-produtos">
            <Sidebar />
            <div className="inner-produtos">
                <div className="header-produtos">
                    <h2>Listagem de <span>Produtos</span></h2>
                    <div>
                        <input type="submit" value="Adicionar +" className="button-padrao" />
                    </div>
                </div>
                <div className="content-produtos">
                    a
                </div>
            </div>
        </section>
        </>
    )
}

export default Produtos