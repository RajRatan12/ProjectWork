import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'

import {Home,About,Services} from "./components/index.jsx"
import FooterAbout from "./components/FooterComponents/FooterAbout.jsx"
import FooterContact from "./components/FooterComponents/FooterContact.jsx"
import FooterKnowTheTeam  from "./components/FooterComponents/FooterKnowTheTeam.jsx"
import FooterReference from './components/FooterComponents/FooterAbout.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="footer-about" element={<FooterAbout/>}/>
      <Route path="footer-contact" element={<FooterContact/>}/>
      <Route path="footer-KnowTheTeam" element={<FooterKnowTheTeam/>}/>
      <Route path="footer-reference" element={<FooterReference/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
