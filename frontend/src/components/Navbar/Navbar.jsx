import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import ScrollNavLink from '../Scroll/ScrollNavLink'

const Navbar = ({setShowLogin}) => {

    const{cartItems} = useContext(StoreContext);
    
    return (
        <section className='navbar'>
            <div className='navbar-contents'>
                <Link to='/' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><img src={assets.logo} alt="logo" className="logo" /></Link>
                <ul className="navbar-menu">
                    <NavLink to='/' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</NavLink>
                    <ScrollNavLink  to="explore-menu" className="navbar-link">
                        Menu
                    </ScrollNavLink >
                    <ScrollNavLink  to="footer" className="navbar-link">
                        Contact Us
                    </ScrollNavLink >
                </ul>

                <div className="navbar-right">
                    {/* <img src={assets.search_icon} alt="search icon" /> */}
                    <div className="navbar-search-icon">
                        <Link to='/cart'><img src={assets.basket_icon} alt="basket icon" /></Link>
                        <div className={Object.keys(cartItems).length > 0?"dot":""}></div>
                    </div>
                    <button onClick={()=>setShowLogin(true)}>Sign In</button>
                </div>
            </div>
        </section>
  )
}

export default Navbar