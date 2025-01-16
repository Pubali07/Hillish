import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/img'
import {Link} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin}) => {
  const[Products,setproducts]=useState("Home"); 

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
    <Link to='/'> <img src={assets.logo} height='150px' alt="" className="logo" /></Link>
     <ul className="navbar-Products">
      <Link to='/' onClick={()=>setproducts("Home")}className={Products==="Home"?"active":""}>Home</Link>
      <a href='#explore-menu' onClick={()=>setproducts("Products")}className ={Products==="Products"?"active":""}>Products</a>
      <a href='#app-download'  onClick={()=>setproducts("Mobile-App")}className ={Products==="Mobile-App"?"active":""}>Mobile-App</a>
      <a href='#footer' onClick={()=>setproducts("Contact-Us")}className ={Products==="Contact-Us"?"active":""}>Contact Us</a>
     </ul>
      <div className="navbar-right">
        <img src={assets.search} alt="" />
        <div className="navbar-search">
         <Link to={'./cart'}><img src={assets.shopping_cart} alt="" /></Link> 
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
      </div>
 
  )
}

export default Navbar
