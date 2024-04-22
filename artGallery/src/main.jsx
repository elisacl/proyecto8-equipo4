import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './components/App/App';
import LoginForm from './components/Login/LoginForm';
import AdminPage from './components/Views/AdminPage/AdminPage';
import PersonalGallery from './components/Views/PersonalGallery/PersonalGallery';

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
  {
    path: "/personalgallery",
    element: <PersonalGallery/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
