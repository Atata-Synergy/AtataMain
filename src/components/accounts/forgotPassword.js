import React from "react";
import "./forgotpassword.css";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="fp-container">
      <p>Don't Worry, you will get back in a minute</p>
      <small>
        You will have your account back, kindly enter you email below.
      </small>
      <form>
        <div className="form-group">
          <input type="email" placeholder="Enter you email address here" />
          <button className="btn">Reset Password</button>
        </div>

        <Link to='/signin'><button className='back'>{'<<BACK'}</button></Link>
      </form>
    </div>
  );
}
export default ForgotPassword;
