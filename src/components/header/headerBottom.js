import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AllCateDropDown from "./dropdown/allcategoriesDropDown";
import LoginDropDown from "./dropdown/loginDropdown";
import SubMenuList from './dropdown/subMenuList';

function HeaderBottom() {
  //function for hover on All Categories
  function Onhover(e) {
    const Hover = document.getElementById("allCate-SubMenu");
    Hover.classList.remove("hidden");
  }

  function OnLeave(e) {
    const Hover = document.getElementById("allCate-SubMenu");
    Hover.classList.add("hidden");
  }

  // function for hover on login Icon
  function handleOnhover(e) {
    const Hover = document.getElementById("LoginDrop");
    Hover.classList.remove("hidden");
  }
  function handleMouseOut(e) {
    const Hover = document.getElementById("LoginDrop");
    Hover.classList.add("hidden");
  }

  return (
    <>
      <Container>
        <div className="rightMenu">
          <ul>
            <li className="d-flex" onMouseEnter={Onhover}>
              <MenuIcon />
              <p style={{ margin: "0 10px" }}> All Categories </p>
              {OnLeave ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </li>
            <li>Top Selling</li>
            <li>Blog</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </div>
        <div className="leftMenu">
          <form>
            <input type="search" />
            <i class="fa fa-search"></i>
          </form>

          <div className="login">
            <i class="fas fa-user-circle" onMouseEnter={handleOnhover}></i>
          </div>
        </div>
      </Container>

      <DropDown>
        {/* DropDown for All Categories */}
        <div className="d-flex">
        <div
          className="allCate-SubMenu hidden"
          onMouseLeave={OnLeave}
          id="allCate-SubMenu"
        >
          <AllCateDropDown />
        </div>
        <div className='hidden' id='SubMenuList'>
          <SubMenuList />
        </div>
        </div>

        {/* Login Drop Down */}
        <div
          className=" LoginDrop hidden"
          id="LoginDrop"
          onMouseLeave={handleMouseOut}
        >
          <p>
            <LoginDropDown />
          </p>
        </div>
      </DropDown>
    </>
  );
}
const DropDown = styled.div`
  position: absolute;
  width: 100%;
  .allCate-SubMenu {
    margin: 0 0 0 35px;
    font-size:15px;
    text-align: center;
    padding: 10px;
    background: var(--colorLight);
    background-image: url("./Images/bg.png");
    width: 18%;
  }
  .LoginDrop {
    position: absolute;
    right: 4px;
    p {
      // layout
      position: relative;
      max-width: 30em;

      // looks
      background-color: #fff;
      padding: 1.125em 1.5em;
      box-shadow: 2px 2px 5px #aaaaaa;
      border-radius: 1rem;
    }

    p::before {
      // layout
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      bottom: 100%;
      left: 6em; // offset should move with padding of parent
      border: 0.75rem solid transparent;
      border-top: none;

      // looks
      border-bottom-color: #fff;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  background-color: var(--colorGreen);
  display: flex;
  color: var(--colorLight);
  font-weight: 500;
  overflow: hidden;
  .active {
    background-color: var(--colorLight);
    color: var(--colorRed);
  }
  .rightMenu,
  .leftMenu {
    width: 50%;
    margin: 5px;
    margin-left: 2%;
    ul {
      display: flex;
      list-style-type: none;
      margin: 5px;
      li {
        padding: 10px 15px;
      }
      li:hover {
        background-color: var(--colorLightTransparent);
        color: var(--colorLight);
        transition: ease 0.7s;
        border-radius: 5px;
      }
    }
  }
  .leftMenu {
    display: flex;
    form {
      position: relative;
      top: 50%;
      left: 60%;
      transform: translate(-50%, -50%);
      background: var(--colorLightTransparent);
      width: 300px;
      height: 40px;
      box-sizing: border-box;
      border-radius: 5px;
      border: 0px solid white;
      padding: 5px;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 39px;
      background: var(--colorLightTransparent);
      line-height: 30px;
      outline: 0;
      color: var(--colorLight);
      border: 0;
      display: none;
      font-size: 1em;
      border-radius: 5px;
      padding: 0 20px;
    }

    .fa {
      box-sizing: border-box;
      padding: 10px;
      width: 42.5px;
      height: 42.5px;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 50%;
      color: var(--colorLight);
      text-align: center;
      font-size: 1.2em;
      transition: all 1s;
    }

    form:hover {
      width: 300px;
      cursor: pointer;
    }

    form:hover input {
      display: block;
    }

    .login {
      position: relative;
      top: 50%;
      left: 45%;
      transform: translate(-50%, -50%);
      width: 50px;
      height: 40px;
      box-sizing: border-box;
      border-radius: 5px;
      border: 0px solid white;
      padding: 2px 5px 5px 5px;
      i {
        font-size: 35px;
      }
    }
    .LoginDropDown {
      width: 50%;
    }
  }
`;

export default HeaderBottom;
