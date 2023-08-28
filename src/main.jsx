import React from 'react'
import ReactDOM from 'react-dom/client'
import createRoutes from './App.jsx'
import './index.css'
import {RouterProvider} from "react-router-dom"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={createRoutes}> </RouterProvider>
  </React.StrictMode>,
)
