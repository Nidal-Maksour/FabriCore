import React from 'react';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <section className="summary">
        <div className="card">
          <h3>Total Workers</h3>
          <p>128</p>
        </div>
        <div className="card">
          <h3>Active Machines</h3>
          <p>23</p>
        </div>
        <div className="card">
          <h3>Orders</h3>
          <p>47</p>
        </div>
        <div className="card">
          <h3>Deliveries</h3>
          <p>12</p>
        </div>
      </section>

      <section className="charts">
        <div className="chart-box">
          <h3>Production Overview</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>
        <div className="chart-box">
          <h3>Inventory Trends</h3>
          <div className="chart-placeholder">[Chart Placeholder]</div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

