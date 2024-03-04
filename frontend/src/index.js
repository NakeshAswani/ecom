import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// web routes start
import MainContext from "./context/MainContext"
import Home from './pages/web/Home';
import AboutUs from './pages/web/AboutUs';
import Products from './pages/web/Products';
import CatProduct from './pages/web/CatProduct';
import ProductDetails from './pages/web/ProductDetails';
import Cart from './pages/web/Cart';
// web routes end
// admin routes start
import AdminPanel from './pages/admin/AdminPanel';
import Dashboard from './pages/admin/Dashboard';
import AddCategory from './pages/admin/AddCategory';
import ViewCategory from './pages/admin/ViewCategory';
import AddProduct from './pages/admin/AddProduct';
import ViewProduct from './pages/admin/ViewProduct';
import Users from './pages/admin/Users';
import Orders from './pages/admin/Orders';
import Profile from './pages/admin/Profile';
import Settings from "./pages/admin/Settings"
import Logout from "./pages/admin/Logout"
// admin routes end

const route=createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about-us",
    element: <AboutUs />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:name",
    element: <CatProduct />
  },
  {
    path: "/product/:id",
    element: <ProductDetails />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/admin",
    element: <AdminPanel />
  },
  {
    path: "/admin/profile",
    element: <Profile />
  },
  {
    path: "/admin/settings",
    element: <Settings />
  },
  {
    path: "/admin/logout",
    element: <Logout />
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />
  },
  {
    path: "/admin/dashboard/category/add-category",
    element: <AddCategory />
  },
  {
    path: "/admin/dashboard/category/view-category",
    element: <ViewCategory />
  },
  {
    path: "/admin/dashboard/category/add-product",
    element: <AddProduct />
  },
  {
    path: "/admin/dashboard/category/view-product",
    element: <ViewProduct />
  },
  {
    path: "/admin/dashboard/users",
    element: <Users />
  },
  {
    path: "/admin/dashboard/orders",
    element: <Orders />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainContext>
    <RouterProvider router={route} />
  </MainContext>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
