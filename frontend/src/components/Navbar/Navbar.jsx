import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    // const [menu, setMenu] = useState("home")
  return (
    <section className='navbar'>
        <img src={assets.logo} alt="logo" className="logo" />
        <ul className="navbar-menu">
            <Link to='/' className="active">Home</Link>
            <a href='#explore-menu' >Menu</a>
            <a href='#footer' >Contact Us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="search icon" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="basket icon" />
                <div className="dot"></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </section>
  )
}

export default Navbar