import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
            <li
              className="d-flex"
              onMouseEnter={Onhover}
              onMouseLeave={OnLeave}
            >
              <MenuIcon />
              <p style={{ margin: "0 10px" }}> All Categories </p>
              {OnLeave ? <ExpandLessIcon /> : <ExpandMoreIcon /> }
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
            
            <i
              class="fas fa-user-circle"
              onMouseEnter={handleOnhover}
              onMouseLeave={handleMouseOut}
            ></i>
          </div>
        </div>
      </Container>
      {/* DropDown for All Categories */}
      <div className="hidden" id="allCate-SubMenu">
        Hello1
      </div>

      {/* Login Drop Down */}
      <div className="hidden" id="LoginDrop">
        Hello
      </div>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  background-color: var(--colorRed);
  display: flex;
  color: var(--colorLight);
  font-weight: 500;
  overflow: hidden;
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
