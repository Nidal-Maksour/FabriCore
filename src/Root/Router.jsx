import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Workers from "../pages/Workers/Workers";
import Production from "../pages/Production/Production"
import Machines from "../pages/Machines/Machines"
import Inventory from "../pages/Inventory/Inventory"
import Orders from "../pages/Ordres/Orders"
import Deliveries from "../pages/Deliveries/Deliveries"
import Reports from "../pages/Reports/Reports"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/workers" element={<Workers />} />
                <Route path="/production" element={<Production />} />
                <Route path="/machines" element={<Machines />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/deliveries" element={<Deliveries />} />
                <Route path="/reports" element={<Reports />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;