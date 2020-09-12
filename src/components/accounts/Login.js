import React from "react";
import "./login.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../logoComponents/headerLogo.png";



function Login() {
  return (
    <div className="LoginContainer">
      <div className="LogoContaniner">
        <div className="logo">
          <img src={Logo} />
        </div>
      </div>
      <div className="formContaniner">
        <div className="form">
          <form>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="emailaddress@email.com" />
              <p className="error">*Invalid email address</p>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="Password" placeholder="Enter password here..." />
              <p className="error">*Password is incorrect</p>
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              Remember Me
            </div>
            <div className="form-group">
              <button className="btn">Login</button>
              <Link to="/forgotpassword">
                <p className="forgetPwd">Forgot password?</p>
              </Link>
            </div>
            <div className="reg">
             <p>Don't have an account ?</p> 
              <Link to="/register">
                <p className="toReg">Click here to register</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
