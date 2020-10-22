import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";
import LoginDropDown from "./dropdown/loginDropdown";
import HeaderLogo from "../logoComponents/headerLogo.png";

// function for hover on login Icon

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
          <div className="login">
            <p>Sign In or Register</p>
          </div>
        </div>
      </div>
    );
  }
}
