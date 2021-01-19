import React from "react";
import  '../../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div className="index-page-container">
      <Simpleslider />

      <CategoryCard />

      <Auction />

      <Featured />

      <Latest />

      <IndexBlog />

      <Footer />

      <MainHeader />
    </div>
  );
}

export default Page;
