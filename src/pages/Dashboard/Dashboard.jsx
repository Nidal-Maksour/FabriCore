import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="sidebar">
      <h1>
        Fabri<span>Core</span>
      </h1>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/workers">Workers</Link>
        </li>
        <li>
          <Link to="/production">Production</Link>
        </li>
        <li>
          <Link to="/machines">Machines</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
        <li>
          <Link to="/deliveries">Deliveries</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
