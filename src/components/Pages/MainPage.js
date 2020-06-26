import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import styled from "styled-components";
import "../accounts/account.css"
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";
import CommodityPrice from "../commodity";
import FixedSocialLinks from "../Pages/fixedSocialLinks";
import Row from "react-bootstrap/Row";
import FeaturedLinks from "../Pages/featuredLinks";
import CategoryLinks from "./bottomCategoryItems";
import Footer from "../footer/footer";
import BottomItem from "../Pages/bottomItem";
import IndexBlog from "../Pages/IndexBlog";
import ItemCategory from "../Pages/ItemCategories";
import { Container } from "semantic-ui-react";
import CategoryCard from "./bottomCategoryItems";
import CategoryCard2 from "./homeCard";
import CategoryCard3 from "./AccessoriesCard";
import LatestDeals from "../card/weeklyDeals";
import Grouped from "../card/groupedCard";
import Grouped1 from "../card/groupedCardWithLocation";
import RFQ from "./rfq";

import Cards from "../card/CardsRows";
import headerLogo from "../headerLogo";





function Page() {
  return (
    <>
     
      <div className="col-12 my-5 index-viewed">
        <Row>
          <div className="col-xs-3 col-lg-3 col-md-0 col-sm-0 Price">
            <CommodityPrice />
          </div>
          <div className="col-xs-9 col-lg-9 col-md-12 col-sm-12 slider">
            <Simpleslider />
          </div>
        </Row>
      </div>
      <div className="col-12 mx-auto my-4">
        <FeaturedLinks />
      </div> 
     
      <div className="col-12 mx-auto my-4">
        <headerLogo />
      </div> 
     
     
      
        <div className= "group d-flex">
          <Grouped/>
          <Grouped1/>
          </div>
      
      <div className="col-12 mx-auto mb-5">
        <CategoryLinks />
    </div>
    <div className="col-12 mx-auto mb-5">
        {/* <HeaderText></HeaderText>
        <hr /> */}
        {/* <div className="my-5">
          <CategoryCard />
        </div> */}
        <div className="my-5">
          <CategoryCard2 />
        </div>
        
        <div className="my-5">
          <CategoryCard3 />
        </div>
        <div className="my-5">
          <LatestDeals />
        </div>
        <div className="my-5">
        </div>
      
        <div className= "group d-flex">
          <Grouped/>
          <Grouped1/>
          </div>
      
        <div className="group d-flex">
        <RFQ/>
                </div>
        </div>
        
        <div className="my-5">
        <Cards/>
        </div>
        

        
      
     {/* <div className="col-12 mx-auto">
        <HeaderText>Most viewed</HeaderText>
        <hr />
        <div className="my-5">
          <BottomItem />
        </div>
      </div> 
      {/* <div className="col-12 mt-5 mx-auto">
        <HeaderText>Blog</HeaderText>
        <hr />
        <div className="my-5">
          <IndexBlog />
        </div>
      </div> */}
        <Footer />
      <FixedSocialLinks />
      <MainHeader />
    </>
  ); 
}
const HeaderText = styled.div`
background-color: #ccc;
  font-family: "Bebas Neue", cursive;
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
`;

export default Page;
