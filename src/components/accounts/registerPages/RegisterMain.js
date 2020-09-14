import React, { Component } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Logo from "../../logoComponents/headerLogo.png";

class RegisterMain extends Component {
  render() {
    return (
      <div className="LoginContainer">
        <div className="LogoContaniner">
          <div className="logo">
            <img src={Logo} />
          </div>
        </div>
        <div className="formContaniner">
          <div className="select-container">
            <div className="highlight-text">
              <p>Choose the type of account</p>
              <small>
                Creating account on ATATA57 is just few steps away, choose to
                sell or to buy
              </small>
            </div>
            <div className="acct-select">
              <Link to="/registerUser">
                <div className="select">
                  <i class="fas fa-shopping-bag"></i>
                  <div className="text">
                    <p>Create a buyer account</p>
                    <small>buyer from sellers accross africa</small>
                  </div>
                </div>
              </Link>
              <Link to="/registerUser">
                <div className="select">
                  <i class="fas fa-user-tie"></i>
                  <div className="text">
                    <p>Become service provider</p>
                    <small>buyer from sellers accross africa</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="signin">
              <p>Already a Member?</p>
              <Link to="/signin">
                <span>Click Here to Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterMain;
