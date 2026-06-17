import React, { Suspense } from 'react';
import "./assets/tailwind.css";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const LandingPage = React.lazy(() => import('./pages/LandingPage'));

import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";
import Daisyui from './pages/daisyui';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        
        {/* Halaman Landing Page Utama */}
        {/* <Route path="/" element={<LandingPage />} /> */}

        {/* Halaman Dashboard dengan MainLayout wrapper */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} /> 
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />}/>
          <Route path="daisyui" element={<Daisyui />}/> 
        </Route>

        {/* Halaman Autentikasi */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;