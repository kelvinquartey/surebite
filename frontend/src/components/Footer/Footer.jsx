import React from 'react'
import './Footer.css'
import { assets} from '../../assets/frontend_assets/assets'


const Footer = () => {
  return (
    <section className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img className='footer-logo' src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt possimus velit animi pariatur. Quod fugit, earum ex vitae aliquid ab suscipit id atque consequatur commodi. Sapiente reprehenderit natus assumenda.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facobook Icon" />
            <img src={assets.twitter_icon} alt="X Icon" />
            <img src={assets.linkedin_icon} alt="Linkedin Icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-567-8910</li>
            <li>contact@surebite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 &copy; surebite.com - All Rights Reserved
      </p>
    </section>
  )
}

export default Footer