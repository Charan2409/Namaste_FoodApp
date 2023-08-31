import React, { useState } from "react";
import food_logo from "./food_logo.png";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";
import { useSelector } from "react-redux/es/hooks/useSelector";



const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-wrap bg-pink-50 shadow-lg justify-between">
      <img
        className="h-28 w-28 p-2 m-1 sm:items-center sm:justify-center md:items-start lg:items-start"
        src={food_logo}
        alt=""
      />
      <div className="nav-container">
        <ul className="flex flex-row py-10 sm:justify-center items-center md:justify-center items-center">
          <Link to="/">
            <li className="px-2 hover:font-bold">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2 hover:font-bold">About</li>
          </Link>
          <Link to="/contact">
            <li className="px-2 hover:font-bold">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="px-2 hover:font-bold">Cart-{cartItems.length}</li>
          </Link>
          <Link to="/Instamart">
            <li className="px-2 hover:font-bold">Instamart</li>
          </Link>
        </ul>
      </div>
      <h3 className="px-2 py-10">{isOnline ? "✅" : "🔴"}</h3>
      {isLoggedIn ? (
        <button className="logout-button " onClick={handleLogOut}>
          Log Out
        </button>
      ) : (
        <button className="login-button" onClick={handleLogIn}>
          Log In
        </button>
      )}
    </div>
  );
};

export default Header;
