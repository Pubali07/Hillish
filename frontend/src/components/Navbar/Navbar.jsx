import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/img'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import { Menu, X } from 'lucide-react'   // 👈 install once

const Navbar = ({ setShowLogin }) => {
  const [Products, setproducts] = useState("Home")
  const [menuOpen, setMenuOpen] = useState(false)

  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <div className='navbar'>
      <Link to='/'>
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      {/* NAV LINKS */}
      <ul className={`navbar-Products ${menuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={() => { setproducts("Home"); setMenuOpen(false) }}
          className={Products === "Home" ? "active" : ""}>Home</Link>

        <a href='#explore-menu' onClick={() => setMenuOpen(false)}>Products</a>
        <a href='#app-download' onClick={() => setMenuOpen(false)}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenuOpen(false)}>Contact Us</a>
      </ul>

      {/* RIGHT SIDE */}
      <div className="navbar-right">
        <img src={assets.search} alt="" />

        <div className="navbar-search">
          <Link to='/cart'>
            <img src={assets.shopping_cart} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
