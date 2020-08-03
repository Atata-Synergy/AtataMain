import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ReuseAllCate(props) {
  function Onhover(e) {
    const Hover = document.getElementById("SubMenuList");
    Hover.classList.remove("hidden");
  }
  function OnLeave(e) {
    const Hover = document.getElementById("SubMenuList");
    Hover.classList.add("hidden");
  }
  return (
    <li onMouseEnter={Onhover} onMouseLeave={OnLeave}>
      <Link to="/">
        {props.cate1} / {props.cate2}
      </Link>
    </li>
  );
}

function AllCatedrop() {
  return (
    <>
      <List>
        <ReuseAllCate cate1="Agriculture" cate2="Food and Beverages" />
        <ReuseAllCate cate1="Consumer Electonics" cate2="Home Appliances" />
        <ReuseAllCate cate1="Appreal" cate2="Fashion Accessories" />
        <ReuseAllCate cate1="Home and Garden" cate2="Furniture" />
        <ReuseAllCate cate1="Energy" cate2="Enviroment" />
        <ReuseAllCate cate1="Machinery" cate2="Vehicles and Accessories" />
        <ReuseAllCate cate1="Business Services" cate2="Service Equipment" />
        <ReuseAllCate
          cate1="Sports and Entertainment"
          cate2="Toys and Hobbies"
        />
        <ReuseAllCate
          cate1="Packaging and Printing"
          cate2="Office and School Supplies"
        />
        <ReuseAllCate
          cate1="Beauty and Personal Care"
          cate2="Health and Medical"
        />
        <ReuseAllCate
          cate1="Luggage, Bags and Cases"
          cate2="Shoes and Accessories"
        />
        <ReuseAllCate
          cate1="Minerals and Metallurgy "
          cate2="Rubber and Plastics"
        />
      </List>
    </>
  );
}

const List = styled.div`
  list-style-type: none;
  width: 100%;
  
  

  li {
    width: 110%;    
    margin: auto;
    padding: 4px 15px;
    font-size: 13px;
    a{
      color: var(--colorBlack);
    }
  }
  li:hover{    
    background-color: #fff;
    a{
      color: var(--colorGreen);
      font-weight: 600;
      text-decoration: none;
    }
  }
    
`;
export default AllCatedrop;
