import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function ReuseAllCate(props){
    function Onhover(e) {
        const Hover = document.getElementById("subMenuList");
        Hover.classList.remove('hidden');
      }
    return(
        <li onMouseEnter={Onhover}><Link to="/">{props.cate1} / {props.cate2} </Link></li>

    )
}

function AllCatedrop() {
  return (
    <>
    <List>
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />
      <ReuseAllCate cate1='Placeholder' cate2='Placeholder' />    
    </List>
    </>
  );
}


const List =  styled.div`
list-style-type:none;
width:100%;

li{
    padding: 6px 15px;
    a{
        color: var(--colorBlack);
        text-decoration: none;       

    }
    a:hover{
        color: var(--colorGreen);
        font-weight: 600;
    }
}
`
export default AllCatedrop;
