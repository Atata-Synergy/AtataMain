import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "../accounts/account.css";
import MainHeader from "../header/mainHeader";
import Simpleslider from "../carousel/carousel";
import CategoryLinks from "./bottomCategoryItems";
import Footer from "../footer/footer";
import IndexBlog from "../Pages/IndexBlog";
// import CategoryCard2 from "./homeCard";
import CategoryCard from "../card/categoryCard";
import FixedCartButton from "./FixedCartButton";

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
        <div className="my-5">
          {/* <CategoryCard2 /> */}
        </div>

        <div className="my-5">
          <CategoryLinks />
        </div>
      </div>

      <div className="my-5">
        <IndexBlog />
      </div>
      <Footer />

      {/* Fixed properties  */}
      <FixedCartButton />
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
