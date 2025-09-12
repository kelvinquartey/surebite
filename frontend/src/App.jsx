import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import NotFound from './components/NotFound/NotFound'
import ScrollToTop from './components/Scroll/ScrollToTop'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin}/>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin}/>

        <ScrollToTop />
        <Routes>
          <Route path ='/' element={<Home/>} />
          <Route path ='/cart' element={<Cart/>} />
          <Route path ='/order' element={<PlaceOrder/>} />
          <Route path ='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App