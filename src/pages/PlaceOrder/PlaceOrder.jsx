import React, { useState, useEffect } from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets'
import OrderPlaced from '../../components/OrderPlaced/OrderPlaced'
import { useNavigate } from 'react-router-dom'
// import Map from '../../components/Map/Map'

const PlaceOrder = () => {
  const instructions_list = [
    "Meet at the Door",
    "Leave at the Door",
    "Meet outside",
    "Leave at the building reception",
    "Meet in the lobby"
  ]

  const {getTotalCartAmount,deliveryFee, serviceFee, clearCart} = useContext(StoreContext)
  const total = getTotalCartAmount() + deliveryFee + serviceFee;
  const [selectedInstruction, setSelectedInstruction] = useState("Meet at the Door");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const handlePlaceOrder = (e) => {
    e.preventDefault(); 
    setOrderPlaced(true); 
  }; 

  const handleClose = () => {
    navigate('/', {replace:true})
    setOrderPlaced(false);
    clearCart();
  }

  useEffect(() => {
    if (orderPlaced) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [orderPlaced])


  return (
    <>
      <form onSubmit={handlePlaceOrder} className="place-holder">
        {/* <Map/>     */}
        <div className='address-details'>
          <p>Address Details</p>
          <input type="text" placeholder='*Address' name='address' required/>
          <input type="text" placeholder='Apartment,flat or suite number' name='apartment'/>
          <input type="text" placeholder='Floor' name='apartment'/>          
        </div>
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
          <input type="text" placeholder='Additional note' name='additional-note' />
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
        <hr />
        <div className="total-details ">
          <p>Total:</p>
          {getTotalCartAmount() > 0 ? <b>${total}</b>: <b>${getTotalCartAmount()}</b>}
        </div>
        <hr/>
        <button className='place-order'>Place Order</button>
      </form>

    {orderPlaced && <OrderPlaced onClose={() => handleClose()} />}
    </>
  )
}

export default PlaceOrder