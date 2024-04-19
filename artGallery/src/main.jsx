import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './components/App/App';
import LoginForm from './components/Login/LoginForm';
import AdminPage from './components/Views/AdminPage/AdminPage';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/loginform",
    element: <LoginForm/>,
  },
  {
    path: "/adminpage",
    element: <AdminPage/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);