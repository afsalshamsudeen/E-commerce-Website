import React, { useState } from 'react';
import "./NavBar.css";
import main_logo from "../Assets/store.png";
// import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';

function NavBar() {
    const [menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={main_logo} alt="logo" className='main-logo'/>
            <p>SHOPPIFY</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>  {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>  {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration: 'none'}} to='womens'>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration: 'none'}} to='kids'>Kid</Link> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="login-cart">
          <Link to='/login'><button>Login</button></Link>  
           <Link to='/cart'><img src={cart_icon} alt="cart" /></Link> 
            <div className="cart-counter">0</div>
        </div>
      
    </div>
  )
}

export default NavBar
