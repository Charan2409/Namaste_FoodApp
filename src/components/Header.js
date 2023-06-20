import React, { lazy, useState } from "react";
import food_logo from "./food_logo.png";
import { Link } from "react-router-dom";
import useOnline from "./useOnline";



const Instamart = lazy(() => import("./components/Instamart"));


const LoggedInUser = () => {
  return false;
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const handleLogOut = () => {
    setIsLoggedIn(false);
  };

  const handleLogIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="Header-container">
      <div className="logo-container">
        <img className="logo" src={food_logo} alt="" />
      </div>
      <div className="nav-container">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/Instamart">
            <li>Instamart</li>
          </Link>
        </ul>
      </div>
      <h3>{isOnline ? "✅" : "🔴"}</h3>
      {isLoggedIn ? (
        <button className="logout-button" onClick={handleLogOut}>
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
