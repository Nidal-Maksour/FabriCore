import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import {
  faGauge,
  faUsers,
  faIndustry,
  faCogs,
  faBoxesStacked,
  faFileInvoice,
  faTruckFast,
  faChartLine,
  faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

function Sidebar({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <StyledWrapper>
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

        <div className="logout-container">
          <button type="button" className="logout-button" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .sidebody {
    background-color: var(--grayColor);
    margin-left: 250px;
    transition: margin-left 0.3s ease;
  }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: var(--lightColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    color: var(--darkcolor);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
    animation: slideIn 0.5s forwards ease-out;
    z-index: 100;
  }

  @keyframes slideIn {
    to {
      transform: translateX(0);
    }
  }

  .factory-icon {
    font-size: 36px;
    color: var(--primaryColor);
    margin-bottom: 10px;
  }

  .sidebar h1 {
    font-size: 30px;
    margin-bottom: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .sidebar h1 span {
    color: var(--primaryColor);
  }

  .sidebar ul {
    list-style: none;
    padding: 0;
    width: 100%;
    text-align: left;
    margin-bottom: 60px;
  }

  .sidebar ul li {
    width: 100%;
  }

  .dashlink {
    text-decoration: none;
    color: var(--darkcolor);
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 20px;
    width: 100%;
    font-size: 18px;
    transition:
      background-color 0.3s,
      color 0.3s;
    border-left: 4px solid transparent;
    font-weight: 500;
    width: 206px;
  }

  .dashlink svg {
    font-size: 20px;
    color: var(--primaryColor);
    transition: transform 0.3s ease;
  }

  .dashlink:hover {
    background-color: var(--hoverColor);
    border-left: 4px solid var(--primaryColor);
    color: var(--primaryColor);
  }

  .dashlink:hover svg {
    transform: scale(1.3);
  }

  .logout-container {
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
  }

  .logout-button {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 18px;
    color: red;
    text-decoration: none;
    padding: 12px 20px;
    background: none;
    border: none;
    font-weight: 500;
    transition:
      background-color 0.3s,
      color 0.3s;
    width: 100%;
  }

  .logout-button svg {
    color: red;
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  .logout-button:hover {
    background-color: var(--hoverColor);
    border-left: 4px solid red;
    color: red;
  }

  .logout-button:hover svg {
    color: red;
    transform: scale(1.3);
  }
`;

export default Sidebar;