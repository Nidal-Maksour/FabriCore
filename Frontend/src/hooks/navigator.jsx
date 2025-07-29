// src/components/Sidebar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Workers', path: '/workers' },
    { name: 'Production', path: '/production' },
    { name: 'Machines', path: '/machines' },
    { name: 'Inventory', path: '/inventory' },
    { name: 'Orders', path: '/orders' },
    { name: 'Deliveries', path: '/deliveries' },
    { name: 'Reports', path: '/reports' },
  ];

  return (
    <aside>
      <div>
        <span>FABRI</span>
        <span>CORE</span>
      </div>
      <nav>
        {menuItems.map((item) => (
          <div key={item.name} onClick={() => navigate(item.path)}>
            {item.name}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
