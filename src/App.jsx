import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Reg from './reg/Reg'
import Log from './auth/Auth'
import { useSelector } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/reg" />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path: '/auth',
    element: <Log />
  },
])

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <>msrifluherui</>
  },
  {
    path: '/reg',
    element: <Navigate to="/" />
  },
  {
    path: '/auth',
    element: <Navigate to="/" />
  },
])

function App() {

  const token = useSelector((state) => state.auth.token)

  console.log(token);


  return (
    token ? <RouterProvider router={authRouter} /> :
    <RouterProvider router={router} />
  )
}

export default App
