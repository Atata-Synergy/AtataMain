import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../logoComponents/headerLogo.png";
import { Link } from "react-router-dom";

export default function HeaderCenter() {
  return (
    <>
    <TopHeader>
      <Link to="/" className="topHeader">
        <div className="logo">
          <img src={Logo} />
        </div>
      </Link>
    </TopHeader>
    </>
  );
}



const TopHeader = styled.div` 
.logo {
  width: 10%;
  margin: auto;
  img {
    width: 80%;
    height: 20%;
  }
}
`;
