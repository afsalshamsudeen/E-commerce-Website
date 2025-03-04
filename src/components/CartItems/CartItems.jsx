import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../context/Context';
import remove_icon from '../Assets/cart_cross_icon.png';
function CartItems() {
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return <div>
            <div className="cartitems-format cartitems-format-main">
                <img className='carticon-product-icon' src={e.image} alt="" />
                <p>{e.name}</p>
                <p> ₹{e.new_price} </p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p> ₹{e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        } else{
            return null;
        }
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <dir>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p> ₹{0}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3> ₹{0}</h3>
                </div>
            </dir>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
      <div className="cartitems-promocode">
        <p>If you have a promocode enter it here</p>
        <div className="cartitem-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default CartItems
