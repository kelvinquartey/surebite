import React from 'react'
import "./OrderPlaced.css";
import { assets } from '../../assets/frontend_assets/assets';

const OrderPlaced = ({ onClose }) => {
  return (
    <div className='order-placed'>
        <div className="order-placed-contents">
            <div className="checkmark-row">
            <img src={assets.checkmark} alt="" />
            <h2> Order Placed Successfully!</h2>
            </div>
            <p>Thank you for your purchase. Your food is on the way 🚴‍♂️</p>
            <button onClick={onClose}>Back to Home</button>
        </div>
    </div>
  )
}

export default OrderPlaced
