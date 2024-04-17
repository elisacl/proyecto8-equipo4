import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from './components/App/App';
import GeneralGallery from './components/Views/GeneralGallery/GeneralGallery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "generalgallery",
    element: <GeneralGallery/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);