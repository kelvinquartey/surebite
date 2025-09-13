import React, { useState, useEffect } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [closing, setClosing] = useState(false);

    const handleClose = () => {
    setClosing(true);
    setTimeout(() => setShowLogin(false), 500);
    };

    useEffect(() => {
    const handleEscape = (e) => {
        if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
    }, [setShowLogin]);

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("login-popup")) {
            handleClose()
        }
    }

    const [currentState, setCurrentState] = useState("Login")
  return (
    <div className={`login-popup ${closing ? "fade-out" : "fade-in"}`} onClick={handleOverlayClick}>
        <form action="" className="login-popup-container">
            <div className="login-pop-title">
                <h2>{currentState}</h2>
                <img onClick={()=>handleClose()} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currentState === "Login"?
                <></>:
                <input type="text" placeholder='Your Name' name="" required/>
                }
                {currentState === "Sign Up" && <input type="tel"  placeholder='Your Phone number'name="" id="" />}
                <input type="email" placeholder='Your email' name="" required/>
                <input type="password" placeholder='Password' name="" required/>
            </div>
            <button onClick={() => navigate('/')}>{currentState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" name="" id="" required/>
                <p>By continuing, you are agreeing to our <span className='privacy-policy-login'>Terms of use & privacy policy.</span></p>
            </div>
            {currentState==="Login"?
            <p>Don't have an account? <span onClick={()=>setCurrentState("Sign Up")}>Create a new Account</span></p>:
            <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Sign In</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup