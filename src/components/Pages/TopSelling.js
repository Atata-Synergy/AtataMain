import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header/header";
import Footer from "../footer/footer";
import styled from "styled-components";
import ItemCards from "../card/card";
import ItemCardsSm from "../card/smallCard";
import CategoryCard from "../card/categoryCard";
import Timmer from '../Pages/Timmer';
import Img1 from "../Pages/categoryImages/clothes.png";
import Img2 from "../Pages/categoryImages/Computer.png";
import Img3 from "../Pages/categoryImages/Furniture.png";
import Img4 from "../Pages/categoryImages/gadgets.png";
import Img5 from "../Pages/categoryImages/machine.png";
import Img6 from "../Pages/categoryImages/phones.png";
import Img7 from "../Pages/categoryImages/shoes.png";
import Img8 from "../Pages/categoryImages/appliance.png";
import Img9 from "../Pages/categoryImages/accessories.png";
import Img10 from "../Pages/categoryImages/Computer.png";
import Grouped from "../card/groupedCard";
import Grouped1 from "../card/groupedCardWithLocation";
import Deals from "../card/LatestDeals";
import form from "../Pages/rfqForm";
import Cards from "../card/CardsRows";
import Forms from "../Pages/rfqForm";
import Cart from "../Pages/CartCss/cart"
import AddToCart from "./addToCart";
import product from "../Pages/ProductCart";
import Logistics from "../LogisticsFormDetails";
import {Container} from "reactstrap";
import Dashboard from "./BuyerDashboard";
import CartPage from "./cartPage";
import CartTable from '../checkoutpage';
import Form from "../LogiisticsUserForm"
import LogisticsForm from "../LogisticsFormDetails";







class TopSelling extends Component {
  render() {
    return (
      <>
        <div className="col-12">
          <div className="row mt-5 mb-5">


         <LogisticsForm/>

   


              
           
</div>
</div>
      
          
          
        
        

      </>
    );
  }
}

export default TopSelling;
