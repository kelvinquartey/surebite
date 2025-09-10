import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    // const [menu, setMenu] = useState("home")

    const{cartItems} = useContext(StoreContext);
    
  return (
    <section className='navbar'>
        <div className='navbar-contents'>
            <Link to='/'><img src={assets.logo} alt="logo" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' className="active">Home</Link>
                <a href='/#explore-menu' >Menu</a>
                <a href='#footer' >Contact Us</a>
            </ul>

            <div className="navbar-right">
                <img src={assets.search_icon} alt="search icon" />
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