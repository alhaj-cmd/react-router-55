import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Nav from './components/Navbar/Nav'
import Main from './components/Main/Main'
import About from './components/About/About'
import Order from './components/Order/Order'
import Contact from './components/Contact/Contact'


const router = createBrowserRouter([
  {
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('tShirts.json')
      
    },
    {
      path:'/order',
      element:<Order></Order>
    },
    {
      path:'/about',
      element:<About></About>
    },
    {
      path:'/contact',
      element:<Contact></Contact>
    }
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={router}
    ></RouterProvider>
    
  </React.StrictMode>,
)
