import React, { useState } from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const instructions_list = [
    "Meet at the Door",
    "Leave at the Door",
    "Meet outside",
    "Leave at the building reception",
    "Meet in the lobby"
  ]

  const {getTotalCartAmount,deliveryFee, serviceFee} = useContext(StoreContext)
  const total = getTotalCartAmount() + deliveryFee + serviceFee;
  const [selectedInstruction, setSelectedInstruction] = useState(null);

  return (
    <>
    <form action="" className="place-holder">    
      <div className="instructions">
        <p>Instructions for the courier</p>
        <div className="instructions-list">
          {instructions_list.map((instruction,index) => {
            return(
              <span className={`instruction-item ${
                selectedInstruction === instruction ? "active" : ""
                }`} 
                key={index} 
                onClick={() => setSelectedInstruction(instruction)}>
                  {instruction}
              </span>
            )
          })}
        </div>
      </div>

      <div className='additional-note'>
        <input type="text" placeholder='Additional note' className='' />
      </div>


        <div className="cart-total-details">
          <p>Subtotal:</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Service Fee:</p>
          <p>${serviceFee}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee:</p>
          <p>${deliveryFee}</p>
        </div>
      <div className="total-details ">
        <p>Total:</p>
        {getTotalCartAmount() > 0 ? <b>${total}</b>: <b>${getTotalCartAmount()}</b>}
      </div>
      <hr className='hr'/>
      <button className='place-order'>Place Order</button>
    </form>
    </>
  )
}

export default PlaceOrder