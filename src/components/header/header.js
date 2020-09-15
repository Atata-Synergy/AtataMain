import React, { useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { Link } from "react-router-dom";
import LoginDropDown from "./dropdown/loginDropdown";
import HeaderLogo from "../logoComponents/headerLogo.png";

// function for hover on login Icon
function handleOnhover(e) {
  const Hover = document.getElementById("LoginDrop");
  Hover.classList.remove("hidden");
}
function handleMouseOut(e) {
  const Hover = document.getElementById("LoginDrop");
  Hover.classList.add("hidden");
}

function Header() {
  return (
    <div className="MainHeader">
      <HeaderWrap>
        <div className="d-flex">
          <Logo>
            <span>
              <i class="fas fa-bars"></i>
            </span>
            <div className="logoContainer">
              <Link to="/">
                <img src={HeaderLogo} alt="logo" />
              </Link>
            </div>
          </Logo>
          <div className=" search d-flex">
            <i className=" fas fa-search" />
            <input
              type="Search"
              placeholder="Search products, categories and companies"
            />
            <button>Search</button>
          </div>
          <div className="login">
            <i class="fas fa-user-circle" onMouseEnter={handleOnhover}></i>
          </div>
          <div className=" clicks d-flex">
          <div
          className=" LoginDrop hidden"
          id="LoginDrop"
          onMouseLeave={handleMouseOut}
        >
          <p>
            <LoginDropDown />
          </p>
        </div>
            <Link to="/RFQ">
              <p>RFQ</p>
            </Link>
          </div>
        </div>
      </HeaderWrap>
    </div>
  );
}



const HeaderWrap = styled.div`
  padding: 6px 2rem;
  box-shadow: 2px 2px 7px var(--colorAsh);
  a{
    color: var(--colorBlack);
    :hover{
      transition: all linear 0.3s;
      color: var(--colorGreen);
    }
  }
  .search {
    width: 50%;
    input {
      width: 90%;
      margin: 7px;
      padding: 10px;
      padding-left: 50px;
      height: 40px;
      color: var(--colorAsh);
      border: solid 0.5px var(--colorAsh);
      :focus {
        box-shadow: 2px 0px 5px #0000002a;
        outline: none;
      }
    }
    i {
      position: absolute;
      margin-top: 21px;
      margin-left: 27px;
      color: var(--colorAsh);
    }
    button {
      margin: 7px;
      padding: 7px;
      height: 40px;
      border: none;
      color: var(--colorWhite);
      background-color: var(--colorGreen);
    }
  }
  .clicks {
    margin: 10px;
    margin-left: 25px;
    p {
      margin: 2px 20px;
      font-weight: bold;
      font-size: 18px;
      i {
        padding: 5px;
      }
    }
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 10rem;
  i {
    margin: 16px;
    font-size: 23px;
  }
  img {
    width: 80px;
  }
`;
export default Header;
