import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../Pages/Login & Registration/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Workers from '../Pages/Workers/Workers';
import Production from '../Pages/Production/Production';
import Machines from '../Pages/Machines/Machines';
import Inventory from '../Pages/Inventory/Inventory';
import Orders from '../Pages/Ordres/Orders';
import Deliveries from '../Pages/Deliveries/Deliveries';
import Reports from '../Pages/Reports/Reports';
import Layout from '../Root & Layout/Layout'; 

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/production" element={<Production />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/deliveries" element={<Deliveries />} />
          <Route path="/reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

