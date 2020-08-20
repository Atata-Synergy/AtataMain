import React from "react";
import "./header.css";
import styled from "styled-components";
import MobileHeader from "./MobileHeader";
import HeaderTop from "./headerTop";
import HeaderBottom from "./headerBottom";
import OtherServices from "./OtherServices";

function MainHeader() {
  return (
    <>
      <Header className="MainHeader">
        <HeaderTop/>
        <OtherServices />
        <HeaderBottom />
      </Header>
      <HeaderS className="MainHeader">
        <MobileHeader />
      </HeaderS>
    </>
  );
}

const Header = styled.div`
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const HeaderS = styled.div`
background-color: var(--colorGreen);
  @media screen and (min-width: 425px) {
    display: none;
  }
`;

export default MainHeader;
