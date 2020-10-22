import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AtataPay from "./Images/atataPay.png";
import AtataSure from "./Images/atatasure.png";
import AtataLogistics from "./Images/atatalogistics.png";
import Atatahouse from "./Images/atatahouse.png";

function Others() {
  const [hover, setHover] = useState("hidden");

  const handleHover = (hover) => {
      setHover(" ");
  };

  const handleHoverOut = (hover) => {
    setHover("hidden");
  };
  return (
    <>
      <div className="others">
        <li>Blog</li>
        <li onMouseEnter={handleHover}>
          Other Services <i class="fas fa-angle-down"></i>
        </li>
      </div>
      {/* Other Dropdown */}
      <div className={`others-dropdown ${hover}`}
      onMouseLeave={handleHoverOut}>
        <div className="item">
          <Link to="/atatapay">
            <img src={AtataPay} />
            Atata Pay
          </Link>
          <Link to="/atatalogistics">
            <img src={AtataLogistics} />
            Atata Logistics
          </Link>
        </div>
        <div className="item">
          <Link to="/atatawarehouse">
            <img src={Atatahouse} />
            Atata House
          </Link>
          <Link to="/atatainsurance">
            <img src={AtataSure} />
            Atata Sure
          </Link>
        </div>
      </div>
    </>
  );
}

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
      <div className="sign-in" onMouseEnter={handleHover}>
        <li>
          Sign In or Register <i class="fas fa-angle-down"></i>
        </li>
      </div>

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
  return (
    <Logos>
      <Others />
      <Account />
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
  padding: 2px 70px;

  li {
    cursor: pointer;
  }
  .others {
    display: flex;
    li {
      margin: 5px 20px;
    }
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
    margin: 5px 20px;
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
    right: 100px;
    top: 30px;
    box-shadow: 2px 2px 5px #00000020;
    padding: 10px 20px;
    a {
      margin: 10px 0px;
    }
  }
`;

export default OtherServices;
