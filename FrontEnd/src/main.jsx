import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

import {Home,About,Services,FooterContact,FooterKnowTheTeam,FooterReference} from "./components/index.jsx"

import { ThemeProvider } from './components/Buttons/ThemeContext.jsx';


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="footer-contact" element={<FooterContact/>}/>
      <Route path="footer-KnowTheTeam" element={<FooterKnowTheTeam/>}/>
      <Route path="footer-reference" element={<FooterReference/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router}/>
  </ThemeProvider>
  </React.StrictMode>,
)
