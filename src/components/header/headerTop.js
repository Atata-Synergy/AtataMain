import React from "react";
import "./header.css";
import styled from "styled-components";
import Logo from "../logoComponents/headerLogo.png";
import { Link } from "react-router-dom";

export default function HeaderCenter() {
  return (
    <HeaderTop>
      <Link to='/'>
      <div className="logo">
        <img src={Logo} />
      </div>
      </Link>
    </HeaderTop>
  );
}

const HeaderTop = styled.div`
  .logo {
    width: 10%;
    margin: auto;
    img {
      width: 80%;
      height: 20%;
    }
  }
`;
