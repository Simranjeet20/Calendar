import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Index from './Components/Index'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Aboutus from './Components/Aboutus'

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/aboutus' element={<Aboutus />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}
