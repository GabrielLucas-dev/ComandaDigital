import "./Sidebar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faClock, faChartBar } from '@fortawesome/free-regular-svg-icons'


function Sidebar() {
  return (
    <>
      <section className="container-sidebar">
        <div className="inner-title">
          <h2>TITULO</h2>
        </div>
        
        <div className="div-links">
          <ul>
            <li><FontAwesomeIcon icon={faCartShopping} /></li>
            <li><FontAwesomeIcon icon={faDollarSign} /></li>
            <li><FontAwesomeIcon icon={faClock} /></li>
            <li><FontAwesomeIcon icon={faChartBar} /></li>
          </ul>
        </div>
        <div className="div-infos">
          <ul>
            <li>infos</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
