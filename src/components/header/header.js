import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";
import LoginDropDown from "./dropdown/loginDropdown";
import HeaderLogo from "../logoComponents/headerLogo.png";

// function for hover on login Icon


function Account() {
  const [hover, setHover] = useState("hidden");

  const handleHover = (hover) => {
    setTimeout(() => {
      setHover(" ");
    }, 500);
  };

  const handleHoverOut = (hover) => {
    setHover("hidden");
  };

  return (
    <>
      <div className="login" onMouseEnter={handleHover}>
        <li>
          Sign In or Register <i class="fas fa-angle-down"></i>
        </li>
      </div>

      {/* dropdowns */}

      <div
        className={`login-dropdown ${hover}`}
        onMouseLeave={handleHoverOut}
      >
        <Link to="/signin">
          <li>
            Login <i class="fas fa-sign-in-alt"></i>
          </li>
        </Link>
        <Link to="/register">
          <li>
            Register <i class="far fa-user"></i>
          </li>
        </Link>
      </div>
    </>
  );
}

export default class Header extends Component {
  render() {
    
    return (
      <div className="MainHeader">
        <div className="PagesHeader">
          <div className="logo">
            <Link to="/">
              <img src={HeaderLogo} />
            </Link>
          </div>
          <div className="search">
            <input placeholder="search for products here..." />
            <button>Click to Search</button>
          </div>
          <Account />
        </div>
      </div>
    );
  }
}
