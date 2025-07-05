import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard.jsx'
import Projet from './projet/Projet.jsx'
import Abonner from './abonner/Abonner.jsx'





const router= createBrowserRouter( [
     {
      path: "/",
      element: <Dashboard />,
     },
     {
      path: "/abonner",
      element: <Abonner />
     },
     {
      path:"/projet",
      element: <Projet />
     }
     
  ]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
    router={router}>
      
    </RouterProvider>
  </StrictMode>,
)
