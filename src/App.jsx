import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './componant/Header'
import Footer from './componant/Footer'
import Home from './componant/Home'
import About from './componant/About'
import Contact from './componant/Contact'
import Signin from './componant/Signin'
import Login from './componant/Login'
import Paymentform from './componant/Paymentform'
import Carousel from './componant/Carousel'


function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Paymentform' element={<Paymentform />} />
          <Route path='/Carousel' element={<Carousel />} />
        </Routes>
        <Footer />


      </Router>



    </>
  )
}

export default App
