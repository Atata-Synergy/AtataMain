import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { Dropdown,Modal,
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem } from 'reactstrap';
import MainScreen from "../accounts/mainScreen";
import styled from "styled-components";
import Img2 from "./Images/atataSureSmall.png"
     

function NavItem(props) {
  const [show, setShow] = useState(false);
  return (
    <>
    
     <ul class="rightMenu">
        <Link to="/Whislist" className="LinkStyle">
          <li className="LinkStyle">
            <i class="fa fa-shopping-cart"></i>

             <DropdownMenu>
          
          <DropdownItem disabled >
          <ul class="shopping-cart-items">
      <li class="clearfix">
        <img src={Img2} />
        <span class="item-name">Sony DSC-RX100M III</span>
        <span class="item-price">$849.99</span>
        <span class="item-quantity">Quantity: 01</span>
      </li>
      </ul>
                
              
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>


          </li>

        </Link>
   
    
        
       
        
        <Link className="LinkStyle" onClick={() => setShow(true)}>
          <li>
            <i className="fas fa-user-circle"></i>
          </li>
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <MainScreen />
          </Modal>
        </Link>
        <Link to="/RFQ" className="LinkStyle">
          <li>
            <i class="fas fa-file-contract"></i>
          </li>
        </Link>
  </ul>


    </>
  );
}


const navbar= styled.div`
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: var(--text-color);
  text-decoration: none;;
}
/* <li> */
.nav-item {
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Icon Button */
.icon-button {
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: #484a4d;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
}

.icon-button:hover {
  filter: brightness(1.2);
}

.icon-button svg { 
  fill: var(--text-color);
  width: 20px;
  height: 20px;
} 
/* Top Navigation Bar */

/* <nav> */
.navbar {
  height: var(--nav-size);
  background-color: var(--bg);
  padding: 0 1rem;
  border-bottom: var(--border);
}

/* <ul> */
.navbar-nav {
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

padding-top: 10px;
  width:20%;
  padding-bottom: 10px;

  .imagecontainer {
      margin-left:0;
    padding: 10px 0 0 10px;
    width: 10%;
    position: relative;
   
  }
  $main-color: #6394F8;
$light-text: #ABB0BE;

@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);

*, *:before, *:after {
  box-sizing: border-box;
}

body {
  font: 14px/22px "Lato", Arial, sans-serif;
  background: #6394F8;
}

.lighter-text {
  color: #ABB0BE;
}

.main-color-text {
  color: $main-color;
}

nav {
  padding: 20px 0 40px 0;
  background: #F8F8F8;
  font-size: 16px;
  
  .navbar-left {
    float: left;
  }
  
  .navbar-right {
    float: right;
  }
  ul {
    
    li {
      display: inline;
      padding-left: 20px;
      a {
        color: #777777;
        text-decoration: none;
        
        &:hover {
          color: black;
        }
      }
    }
  }
}

.container {
  margin: auto;
  width: 80%;
}

.badge {
    background-color: #6394F8;
    border-radius: 10px;
    color: white;
    display: inline-block;
    font-size: 12px;
    line-height: 1;
    padding: 3px 7px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
}

.shopping-cart {
  margin: 20px 0;
  float: right;
  background: white;
  width: 320px;
  position: relative;
  border-radius: 3px;
  padding: 20px;
  
  
  .shopping-cart-header {
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 15px;
    
    .shopping-cart-total {
      float: right;
    }
  }
  
  .shopping-cart-items {
    
    padding-top: 20px;

      li {
        margin-bottom: 18px;
      }

    img {
      float: left;
      margin-right: 12px;
    }
    
    .item-name {
      display: block;
      padding-top: 10px;
      font-size: 16px;
    }
    
    .item-price {
      color: $main-color;
      margin-right: 8px;
    }
    
    .item-quantity {
      color: $light-text;
    }
  }
   
}

.shopping-cart:after {
	bottom: 100%;
	left: 89%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-bottom-color: white;
	border-width: 8px;
	margin-left: -8px;
}

.cart-icon {
  color: #515783;
  font-size: 24px;
  margin-right: 7px;
  float: left;
}

.button {
  background: $main-color;
  color:white;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  display: block;
  border-radius: 3px;
  font-size: 16px;
  margin: 25px 0 15px 0;
  
  &:hover {
    background: lighten($main-color, 3%);
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}



  .grid{
    display:inline-block;
    column-gap:12px;
    padding-left:20px;
    padding-right:10px;
    margin: 10px 0 0 10px;
  }
  
`;

export default NavItem;
