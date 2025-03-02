import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Login from './Component/Login'
import Register from './Component/Register'
import Aboutus from './Component/Aboutus'
import Contactus from './Component/Contactus'
import Service from './Component/Service';

function App() {
  return (
    <div>

<BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/navbar' element={<Navbar />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/aboutus' element={<Aboutus />}/>
        <Route path='/contact' element={<Contactus />}/>
        <Route path='/footer' element={<Footer />}/>
        <Route path='/service' element={<Service/>}/>


      </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App