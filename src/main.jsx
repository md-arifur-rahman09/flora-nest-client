import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './layouts/Root.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import AllPlants from './components/AllPlants.jsx'
import AddPlants from './components/AddPlants.jsx'
import MyPlants from './components/myPlants.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router'
import Error from './components/Error.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import PrivateRouter from './routes/PrivateRouter.jsx'
import PlantDetails from './components/PlantDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: '/allplants',
        Component: AllPlants,
        loader:()=> fetch("http://localhost:5000/trees")
      },
      {
        path: "/plantDetails/:id",
        element: <PrivateRouter><PlantDetails></PlantDetails></PrivateRouter>,
        loader: ({params})=> fetch(`http://localhost:5000/trees/${params.id}`)
      },
      {
        path: '/addplants',
        element: <PrivateRouter><AddPlants></AddPlants></PrivateRouter>
      },
      {
        path: '/myplants',
        element: <PrivateRouter><MyPlants></MyPlants></PrivateRouter>,
        loader:()=> fetch("http://localhost:5000/trees")
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/login',
        Component: Login
      }
    ]
  },
  {
    path: '*',
    Component: Error
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
