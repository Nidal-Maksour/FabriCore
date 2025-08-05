import React from 'react';
import styled from 'styled-components';

function Dashboard() {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
}

const StyledWrapper  = styled.div`
  .dashboard-container {
    margin-left: 0;
    padding: 20px;
    box-sizing: border-box;
  }

  .summary {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-bottom: 30px;
  }

  .card {
    background-color: var(--lightColor);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    flex: 1;
    min-width: 200px;
    text-align: center;
  }

  .card h3 {
    color: var(--primaryColor);
    margin-bottom: 10px;
  }

  .card p {
    font-size: 24px;
    font-weight: bold;
    color: var(--darkcolor);
    margin: 0;
  }

  .charts {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .chart-box {
    background-color: var(--lightColor);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    flex: 1;
    min-width: 300px;
  }

  .chart-box h3 {
    color: var(--primaryColor);
    margin-bottom: 10px;
  }

  .chart-placeholder {
    background-color: var(--grayColor);
    height: 200px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--darkcolor);
    font-style: italic;
  }
`;

export default Dashboard;