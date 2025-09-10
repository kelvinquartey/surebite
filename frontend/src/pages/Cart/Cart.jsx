import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'
import { assets } from '../../assets/frontend_assets/assets'
import { useNavigate} from 'react-router-dom'

const Cart = () => {

  const {cartItems, food_list, removeFromCart, deleteFromCart, clearCart, getTotalCartAmount, addToCart, deliveryFee, serviceFee} = useContext(StoreContext)
  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className="cart-items">
        {getTotalCartAmount() > 0 ?
          (
            food_list.map((item, index)=>{
              if(cartItems[item._id]>0){
                return(
                  <article className='cart-item-container' key={item._id}>
                    <div className="cart-items-title cart-items-item" >
                      <img className='item-image' src={item.image} alt={item.name} />
                      <div className='cart-column'>
                        <div className="delete-row">
                          <p>{item.name}</p>
                          <img onClick={()=>deleteFromCart(item._id)} src={assets.delete_icon} alt="delete_icon" />
                        </div>
                        <p>${item.price}</p>
                        <div className='food-item-counters'>
                          <img className='adjust-quantity' onClick={()=>removeFromCart(item._id)} src={assets.remove_icon_red} alt="remove icon" />
                          <p>{cartItems[item._id]}</p>
                          <img className='adjust-quantity'onClick={()=>addToCart(item._id)} src={assets.add_icon_green} alt="" />
                        </div>
                        <p>Total: ${item.price * cartItems[item._id]}</p>
                      </div>
                    </div>
                  </article>
                )
              }
            })
          ):
          (<h2 className="empty-cart-message">
              No items in the cart
          </h2>)
        }
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal:</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Service Fee:</p>
              <p>{getTotalCartAmount() > 0 ? `$${serviceFee}`: "$0"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee:</p>
              {getTotalCartAmount() > 0 ? <p>${deliveryFee}</p>: <p>$0</p>}
            </div>
            <hr />
            <div className="cart-total-details ">
              <p>Total:</p>
              {getTotalCartAmount() > 0 ? <b>${getTotalCartAmount() + deliveryFee + serviceFee}</b>: <b>${getTotalCartAmount()}</b>}
            </div>
          </div>
          {getTotalCartAmount() > 0 && <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>}
        </div>
      </div>
    </div>
  )
}

export default Cart