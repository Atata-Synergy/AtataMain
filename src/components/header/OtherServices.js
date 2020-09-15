import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AtataPay from "./Images/atataPay.png";
import AtataSure from "./Images/atatasure.png";
import AtataLogistics from "./Images/atatalogistics.png";
import Atatahouse from "./Images/atatahouse.png";

function OtherServices() {
  return (
    <Logos>
      <Link to="/atataPay">
        <img src={AtataPay} />
      </Link>
      <Link to="/atataWarehouse">
        <img src={AtataSure} />
      </Link>
      <Link to="/atataInsurance">
        <img src={AtataLogistics} />
      </Link>
      <Link to="/atataLogistics">
        <img src={Atatahouse} />
      </Link>
    </Logos>
  );
}

const Logos = styled.div`
  width: 100%;
  display: flex;
  height: 5%;
  overflow: hidden;
  justify-content: center;
  background-color: var(--colorLight);
  a{
      margin: 2px 27px;
      
  img {
    width: 25px;
  }
  }
  a:hover{
      transition: 0.5s;
    -webkit-filter: grayscale(70%);
    filter: grayscale(70%);
  }
`;

export default OtherServices;
