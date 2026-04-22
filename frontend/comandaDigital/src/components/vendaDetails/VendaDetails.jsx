import { createPortal } from "react-dom"
import './VendaDetails.css'

function VendaDetails() {
    return createPortal(
        <div className="vendaDetails-overlay">
            <section className="container-vendaDetails">
                <p>testando</p>
            </section>
        </div>,
        document.body,
    )
}

export default VendaDetails