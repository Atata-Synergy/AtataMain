import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "../accounts/account.css";
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";
import CommodityPrice from "../ComodityPrice/commodity";
import FixedSocialLinks from "../Pages/fixedSocialLinks";
import Row from "react-bootstrap/Row";
import CategoryLinks from "./bottomCategoryItems";
import Footer from "../footer/footer";
import BottomItem from "../Pages/bottomItem";
import IndexBlog from "../Pages/IndexBlog";
import CategoryCard2 from "./homeCard";
import CategoryCard3 from "./AccessoriesCard";
import LatestDeals from "../card/LatestDeals";
import WeeklyDeals from "../card/weeklyDeals";
import Grouped from "../card/CardSlider";
import RFQ from "./rfq";

import Cards from "../card/CardsRows";
import FixedCartButton from "./FixedCartButton";

function Page() {
  return (
    <>
      <div className="col-12 index-viewed">
        <Row>
          <div className="col-xs-3 col-lg-3 my-4 col-md-12 col-sm-12">
            <CommodityPrice />
          </div>
          <div className="col-xs-9 col-lg-9 col-md-12 my-4 col-sm-12 slider">
            <Simpleslider />
          </div>
        </Row>
      </div>

      <div className="col-12">
        <Grouped />
      </div>

      <div className="col-12 mx-auto mb-5">
        <CategoryCard3 />
      </div>
      <div className="col-12 mx-auto mb-5">
        <div className="my-5">
          <CategoryCard2 />
        </div>

        <div className="my-5">
          <CategoryLinks />
        </div>
        <div className="my-5">
          <LatestDeals />
        </div>
        <div className="my-5">
          <WeeklyDeals />
        </div>

        <div className="group d-flex">
          <RFQ />
        </div>
      </div>

      <div className="my-5">
        <Cards />
      </div>

      <div className="col-12 mx-auto">
        <HeaderText>Most viewed</HeaderText>
        <hr />
        <div className="my-5">
          <BottomItem />
        </div>
      </div>
      <div className="col-12 mt-5 mx-auto">
        <HeaderText>Blog</HeaderText>
        <hr />
        <div className="my-5">
          <IndexBlog />
        </div>
      </div>
      <Footer />

      {/* Fixed properties  */}
      <FixedCartButton />
      <FixedSocialLinks />
      <MainHeader />
      {/* Fixed properties Ends Here  */}
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
