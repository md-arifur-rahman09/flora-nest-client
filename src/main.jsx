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

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: '/allplants', Component: AllPlants },
      { path: '/addplants', Component: AddPlants },
      { path: '/myplants', Component: MyPlants },
      { path: '/register', Component: Register },
      { path: '/login', Component: Login }
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
