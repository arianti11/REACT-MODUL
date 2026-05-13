import React, { Suspense } from 'react';
import "./assets/tailwind.css";
import MainLayout from "./layouts/MainLayout";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Guest = React.lazy(() => import("./pages/Guest"));
// import Dashboard from "./pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        <Route path="/" element={<Guest />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        
      </Routes>
    </Suspense>
  );
}

export default App;