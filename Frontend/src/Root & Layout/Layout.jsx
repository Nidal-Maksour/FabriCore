import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar/SidebarMenu.jsx';
import Header from '../Components/Header/Header.jsx';
import { Outlet } from 'react-router-dom';

function Layout({ setIsAuthenticated }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="flex h-screen w-full">
      {sidebarOpen && <Sidebar setIsAuthenticated={setIsAuthenticated} />}
      <div
        className="flex flex-1 flex-col lg:p-4 p-2 lg:py-0 py-0 overflow-y-auto scroll-smooth"
        style={{ marginLeft: sidebarOpen ? '250px' : '0', transition: 'margin-left 0.3s ease' }}
      >
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 bg-white-100 py-3">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
