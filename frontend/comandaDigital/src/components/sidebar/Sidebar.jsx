import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDollarSign, faCircleInfo, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'
import { faClock, faChartBar } from '@fortawesome/free-regular-svg-icons'
import comandaDigital from '../../assets/comandaDigital_icon3.png'
import { NavLink } from 'react-router-dom'

function Sidebar() {

  const getClass = ({isActive}) => isActive ? "links active" : "links"

  return (
    <>
      <section className="container-sidebar">
        <div className="inner-title">
          <img src={comandaDigital} alt="Icone comandaDigital" />
        </div>
        
        <div className="div-links">
          <ul>
            <li><NavLink className={getClass} to="/vendas"><FontAwesomeIcon icon={faCartShopping} /></NavLink></li>
            <li><NavLink className={getClass} to="/produtos/filterProdutos"><FontAwesomeIcon icon={faDollarSign} /></NavLink></li>
            <li><NavLink className={getClass} to="/historico"><FontAwesomeIcon icon={faClock} /></NavLink></li>
            <li><NavLink className={getClass} to="/analises"><FontAwesomeIcon icon={faChartBar} /></NavLink></li>
          </ul>
        </div>
        <div className="div-infos">
          <ul>
            <li><NavLink className={getClass} to={"/concluirPdv"}><FontAwesomeIcon icon={faClipboardCheck} /></NavLink></li>
            <li><FontAwesomeIcon icon={faCircleInfo} /></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
