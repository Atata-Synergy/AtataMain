import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import {useSelector} from 'react-redux'




function Account() {
  const [hover, setHover] = useState("hidden active");

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
      <li className="sign-in" onMouseEnter={handleHover}>
        <VscAccount /> 
      </li>

      {/* dropdowns */}

      <div
        className={`account-dropdown ${hover}`}
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

function OtherServices() {
  const shoppingCart = useSelector(state => state);
  return (
    <Logos>
      <div className="others">
        <li>Blog</li>
        <li>Lang</li>
      </div>
      <div className="rght-itm">
        <Account />
        <li className="cart">
          <p className="icon">
            <FiShoppingCart />
          </p>
           <span> {shoppingCart} items in cart</span>
        </li>
      </div>
    </Logos>
  );
}

const Logos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  background-color: var(--colorLight);
  list-style-type: none;
  font-size: 12px;
  font-weight: 500;
  color: var(--colorGreen);
  padding: 0 70px;

  li {
    cursor: pointer;
  }
  .others {
    display: flex;
    li {
      margin: 5px 20px;
    }
  }

  .rght-itm {
    width: 20%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  a {
    margin: 2px 20px;
    display: flex;
    flex-direction: column;

    img {
      width: 30px;
    }
  }
  a:hover {
    transition: 0.5s;
    -webkit-filter: grayscale(70%);
    filter: grayscale(70%);
  }
  .sign-in {
    margin: 0.5px 20px;
    font-size: 23px;
  }
  .cart {
    margin: 0px 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    .icon {
      font-size: 23px;
    }
    span {
      font-size: 13px;
    }
  }

  // dropdown CSS

  .others-dropdown {
    position: absolute;
    background-color: white;
    top: 30px;
    left: 153px;
    box-shadow: 2px 2px 5px #00000020;
    padding: 10px 20px;
    .item {
      padding: 10px;
      display: flex;
    }
  }
  .account-dropdown {
    position: absolute;
    background-color: white;
    right: 190px;
    top: 30px;
    box-shadow: 2px 2px 5px #00000020;
    padding: 10px 20px;
    a {
      margin: 10px 0px;
    }
  }
`;

export default OtherServices;
