import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGauge,
  faUsers,
  faIndustry,
  faCogs,
  faBoxesStacked,
  faFileInvoice,
  faTruckFast,
  faChartLine
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="dashbody">
      <div className="sidebar">
        <FontAwesomeIcon icon={faIndustry} className="factory-icon" />
        <h1>
          Fabri<span>Core</span>
        </h1>
        <ul>
          <li>
            <Link to="/dashboard" className="dashlink">
            <FontAwesomeIcon icon={faGauge} /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/workers" className="dashlink">
            <FontAwesomeIcon icon={faUsers} /> Workers
            </Link>
          </li>
          <li>
            <Link to="/production" className="dashlink">
            <FontAwesomeIcon icon={faIndustry} /> Production
            </Link>
          </li>
          <li>
            <Link to="/machines" className="dashlink">
            <FontAwesomeIcon icon={faCogs} /> Machines
            </Link>
          </li>
          <li>
            <Link to="/inventory" className="dashlink">
            <FontAwesomeIcon icon={faBoxesStacked} /> Inventory
            </Link>
          </li>
          <li>
            <Link to="/orders" className="dashlink">
            <FontAwesomeIcon icon={faFileInvoice} /> Orders
            </Link>
          </li>
          <li>
            <Link to="/deliveries" className="dashlink">
            <FontAwesomeIcon icon={faTruckFast} /> Deliveries
            </Link>
          </li>
          <li>
            <Link to="/reports" className="dashlink">
            <FontAwesomeIcon icon={faChartLine} /> Reports
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
