import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './components/App/App';
import GeneralGallery from './components/Views/GeneralGallery/GeneralGallery';
import LoginPage from './components/Views/LoginPage/LoginPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "generalgallery",
    element: <GeneralGallery/>,
  },
  {
    path: "loginpage",
    element: <LoginPage/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);