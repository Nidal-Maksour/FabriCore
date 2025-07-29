import React from 'react';
import { useLocation } from 'react-router-dom';

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
    <header className="header">
      <button
        onClick={toggleSidebar}
        className="sidebar-toggle"
        aria-label="Toggle Sidebar"
      >
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

      <h1 className="header-title">{currentPageTitle ? `FabriCore - ${currentPageTitle}` : 'FabriCore'}</h1>

      <div className="header-placeholder"></div>
    </header>
  );
}

export default Header;




