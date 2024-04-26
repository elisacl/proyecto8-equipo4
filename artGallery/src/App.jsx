
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Router2} from './router2/Router2'
import { RouterProvider } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router2}></RouterProvider>
  </React.StrictMode>
)


