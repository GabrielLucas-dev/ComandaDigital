import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDollarSign, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faClock, faChartBar } from '@fortawesome/free-regular-svg-icons'
import comandaDigital from '../../assets/comandaDigital_icon.png'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <section className="container-sidebar">
        <div className="inner-title">
          <img src={comandaDigital} alt="Icone comandaDigital" />
        </div>
        
        <div className="div-links">
          <ul>
            <li><Link className="links" to="/vendas"><FontAwesomeIcon icon={faCartShopping} /></Link></li>
            <li><Link className="links" to="/produtos"><FontAwesomeIcon icon={faDollarSign} /></Link></li>
            <li><Link className="links" to="/historico"><FontAwesomeIcon icon={faClock} /></Link></li>
            <li><Link className="links" to="/analises"><FontAwesomeIcon icon={faChartBar} /></Link></li>
          </ul>
        </div>
        <div className="div-infos">
          <ul>
            <li><FontAwesomeIcon icon={faCircleInfo} /></li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
