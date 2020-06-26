import React from "react";
import "../accounts/account.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

function Login() {
  return (
    <>
      <LoginDiv>
        <div className="form">
          <form>
            <p> Login</p>
            <div className="form-group">
              <input type="text" placeholder="Username" />
            </div>
            <div className="form-group">
              <input type="Password" placeholder="Password" />
            </div>
            <div className="form-group d-flex">
              <label class="container">
                <input type="checkbox" />
                <span class="checkmark"></span>
                Remember Me
              </label>
              <div>
                <span>Forgot?</span>
              </div>
            </div>
            <div className="button">
              <button className="button">Login</button>
            </div>
          </form>
        </div>
        <hr className="mb-2" />
        <div className="registerLink mb-5">
          <span>
            Already have an account? <Link to="/Register">Register</Link>
          </span>
        </div>
      </LoginDiv>
    </>
  );
}

const LoginDiv = styled.div`
  width: 60%;
  margin: auto;

  .registerLink {
    text-align: center;
    a {
      color: var(--colorGreen);
    }
  }
  .form {
    width: 60%;
    margin: auto;
    margin-top: 7rem;

    .form-group {
      margin: 20px 0;

      input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .container {
        display: block;
        position: relative;
        padding-left: 30px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 13px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      .checkmark {
        position: absolute;
        top: 0rem;
        left: 0rem;
        height: 20px;
        width: 20px;
        border: solid 1px var(--colorAsh);
      }
      .container input:checked ~ .checkmark {
        background-color: var(--colorBlack);
      }
      .checkmark:after {
        content: "";
        position: absolute;
        display: none;
      }
      input:checked ~ .checkmark:after {
        display: block;
      }
      .checkmark:after {
        left: 7px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }

    p {
      text-align: center;
      font-size: 20px;
      font-weight: 900;
      text-transform: uppercase;
      font-family: "Muli", sans-serif;
    }

    input {
      background-color: #f0f0f0;
      border: transparent;
      padding: 15px;
      width: 100%;
      :focus {
        outline-color: var(--colorBlack);
        outline-offset: 10px;
      }
    }
    button {
      width: 100%;
      padding: 12px;
      border: none;
      background-color: var(--colorGreen);
      color: var(--colorLight);
      text-transform: uppercase;
      font-family: "Muli", sans-serif;
      margin-top: 15px;
      :hover {
        transition: all linear 0.3s;
        background-color: var(--colorBlack);
      }
    }
  }
`;

export default Login;
