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
    <div><div className="sidebody">
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
    </div><div class="dashboard-container">
        <header className="dashhead">
          <h1>Dashboard</h1>
        </header>

        <section class="summary">
          <div class="card">
            <h3>Total Workers</h3>
            <p>128</p>
          </div>
          <div class="card">
            <h3>Active Machines</h3>
            <p>23</p>
          </div>
          <div class="card">
            <h3>Orders</h3>
            <p>47</p>
          </div>
          <div class="card">
            <h3>Deliveries</h3>
            <p>12</p>
          </div>
        </section>

        <section class="charts">
          <div class="chart-box">
            <h3>Production Overview</h3>
            <div class="chart-placeholder">[Chart Placeholder]</div>
          </div>
          <div class="chart-box">
            <h3>Inventory Trends</h3>
            <div class="chart-placeholder">[Chart Placeholder]</div>
          </div>
        </section>
      </div>
    </div>
    
  );
}

export default Dashboard;
