import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './hoc/Layout.jsx'
import Home from './components/Pages/Home/Home.jsx'
import Vegatables from './components/Pages/Vegetable/Vegatables.jsx'
import Fruits from './components/Pages/Fruits/Fruits.jsx'
import Spices from './components/Pages/Spices/Spices.jsx'
import Grains from './components/Pages/Grains/Grains.jsx'
import OurStory from './components/Pages/OurStory/OurStory.jsx'
import Contactus from './components/Pages/ContactUs/Contactus.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: "",
        element: <Home />
      },
      {
        path: 'vegetables',
        element: <Vegatables />
      },
      {
        path: 'fruits',
        element: <Fruits />
      },
      {
        path: 'spices',
        element: <Spices />
      },
      {
        path: 'grains',
        element: <Grains />
      },
      {
        path: 'OurStory',
        element: <OurStory />
      }
      ,
      {
        path: 'contactus',
        element: <Contactus />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
