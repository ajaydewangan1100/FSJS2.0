import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const routerMe = createBrowserRouter([
    {
      path:'/',
      element: <App />,
      errorElement:
      <div className='text-center my-[10vw]'>Error on loading Website...</div>,
      children:[
        {
        path:"/",
        element:<Home/>,
        errorElement:
        <div className='text-center my-[10vw]'>Error on loading Home page...</div>
        },
        {
        path:"/about",
        element:<About/>,
        errorElement:
        <div  className='text-center my-[10vw]'>Error on loading About page...</div>,
        },
        {
        path:"/contact",
        element:<Contact/>,
        errorElement:
        <div className='text-center my-[10vw]'>Error on loading Contact page...</div>,
        }
        ]
    }
  ])
  

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={routerMe} />
)
