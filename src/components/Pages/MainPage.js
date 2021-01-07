import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "../accounts/account.css";
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";
import CategoryLinks from "./bottomCategoryItems";
import Footer from "../footer/footer";
import IndexBlog from "../Pages/IndexBlog";
import Auction from "../Auction/auction";
import CategoryCard from "../card/categoryCard";
import Featured from "../card/FeaturedProducts";
import Latest from "../card/LatestItem";

function Page() {
  return (
    <>
      <div className="index-viewed">
        <Simpleslider />
      </div>
      <div className="col-12 mx-auto mb-5">
        <CategoryCard />
      </div>
      <div className="col-12 mx-auto mb-5">
        <Auction />
      </div>
      <div className="col-12 mx-auto mb-5">
        <Featured />
      </div>
      <div className="col-12 mx-auto mb-5">
        <Latest />
      </div>

      <div className="my-5">
        <IndexBlog />
      </div>
      <Footer />

      {/* Fixed properties  */}
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
