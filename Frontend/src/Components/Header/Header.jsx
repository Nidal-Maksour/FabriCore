import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Header({ toggleSidebar }) {
  const location = useLocation();

  // Map route paths to page titles
  const pageTitles = {
    '/dashboard': 'Dashboard',
    '/workers': 'Workers',
    '/production': 'Production',
    '/machines': 'Machines',
    '/inventory': 'Inventory',
    '/orders': 'Orders',
    '/deliveries': 'Deliveries',
    '/reports': 'Reports',
  };

  // Get the current page title based on path, fallback to empty string
  const currentPageTitle = pageTitles[location.pathname] || '';

  return (
    <StyledWrapper>
      <header className="header">
        <button onClick={toggleSidebar} className="sidebar-toggle" aria-label="Toggle Sidebar">
          {/* Hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <h1 className="header-title">
          {currentPageTitle ? `FabriCore - ${currentPageTitle}` : 'FabriCore'}
        </h1>

        <div className="header-placeholder"></div>
      </header>
    </StyledWrapper>
  );
}

const StyledWrapper  = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 12px 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
    margin: 0 20px;
  }

  .sidebar-toggle {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--primaryColor);
    padding: 6px;
    transition: color 0.3s ease;
    font-size: 24px;
  }

  .sidebar-toggle:hover {
    color: #084a8e;
  }

  .sidebar-toggle svg {
    width: 28px;
    height: 28px;
    stroke: currentColor;
  }

  .header-title {
    font-size: 28px;
    font-weight: 700;
    color: var(--primaryColor);
    margin: 0;
    user-select: none;
  }

  .header-placeholder {
    width: 28px;
  }
`;

export default Header;
