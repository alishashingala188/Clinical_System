import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "../../Pages/appoinment";
import Dashboard from "../../Pages/Dashbaord";

import Orders from "../../Pages/payment";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/orders" element={<Orders />}></Route>
      <Route path="/customers" element={<Customers />}></Route>
    </Routes>
  );
}
export default AppRoutes;
