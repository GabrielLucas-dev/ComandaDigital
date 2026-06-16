import { faAngleLeft, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import './NotFound.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import comandaDigital from '../../assets/comandaDigital_icon3.png'

function NotFound(){

    const navigate = useNavigate()
    function goBack(e){
        e.preventDefault()
        navigate('/vendas')
    }
    
    return(
        <>
        <div className='back-btn'>
            <button className='button-padrao' onClick={goBack}><FontAwesomeIcon icon={faAngleLeft} />Voltar</button>
        </div>
        
        <section className='container-notFound'>
            <div className='icon-div'>
                <img src={comandaDigital} alt="" />
            </div>
            <div className='notFound-div'>
                <FontAwesomeIcon icon={faCircleExclamation} className='warning-icon' />
                <p><span>Erro 404</span> - Rota não encontrada</p>
            </div>
        </section>
        </>
    )
}

export default NotFound