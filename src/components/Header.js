import React from 'react'
import food_logo from './food_logo.png'

const Header = () => {
  return (
    <div className="Header-container">
      <div className="logo-container">
        <img className ="logo" src={food_logo} alt=''/>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
     </div>
  )
}

export default Header