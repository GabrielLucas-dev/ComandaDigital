import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Warning.css"

function Warning({message}) {
    return (
        <>
            <div className="container-warning">
                <FontAwesomeIcon icon={faCircleExclamation} /> 
                <p>{message}</p>
            </div>
        </>
    )
}

export default Warning