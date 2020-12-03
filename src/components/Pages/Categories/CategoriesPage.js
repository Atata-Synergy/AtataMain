import React from "react";
import SmallCard from "../../card/smallCard";
import Header from "../../header/header";
import Footer from "../../footer/footer";
import Cart from "../FixedCartButton";
import "./categoriespage.css";
import CategoriesData from "./CategoriesData";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from 'react-router-dom'
//Carousel
import CarouselSlider from "./cart-slider";



function Categories() {
  return (
    <div className="cart-container">
      <section className="top-display">
        <CarouselSlider />
      </section>
      <div className="breadcrumb">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to='/' className='bd-text'>
            Home
          </Link>
          <Link>Category</Link>
        </Breadcrumbs>
      </div>
      <div className="category-shop">
        <section className="side-nav">
          {CategoriesData.SideNav.map((menu) => (
            <li>{menu.category}</li>
          ))}
        </section>
        <section className="shop">
          {CategoriesData.Items.map((item) => (
            <SmallCard img={item.img} title={item.title} amount={item.amount} />
          ))}
        </section>
      </div>
      <Cart />
      <Footer />
      <Header />
    </div>
  );
}
export default Categories;
