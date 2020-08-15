import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SmallCard from "../../card/smallCard";
import Header from '../../header/header'
import Footer from '../../footer/footer'
import Cart from '../FixedCartButton'

//Carousel
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

//Carousel Images
import Banner2 from "../../carousel/Images/banner2.png";
import Banner3 from "../../carousel/Images/banner3.png";
import Banner4 from "../../carousel/Images/banner.png";

//Category Images
import Img1 from "../../Image/camera.jpg";
import Img2 from "../../Image/gadgets.png";
import Img3 from "../../Image/doublesitter.jpg";
import Img4 from "../../Image/ghana.jpg";
import Img5 from "../../Image/Computer.png";
import Img6 from "../../Image/Furniture.jpg";

function CarouselSlider() {
  return (
    <Slider>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={Banner2} />
        <img src={Banner3} />
        <img src={Banner4} />
      </AliceCarousel>
    </Slider>
  );
}

const Slider = styled.div`
  width: 100%;
  height: 95%;
  margin-bottom: -100px;
  overflow: hidden;
  border: solid 15px var(--colorWhite);
  border-radius: 10px;
  box-shadow: 0px 0px 20px var(--colorLight);
`;

function Card(props) {
  return (
    <ItemCard>
      <div className="Imagecontainer">
        <img src={props.img} />
      </div>
      <div className="Details">
        <p className="title">{props.title}</p>
      </div>
    </ItemCard>
  );
}

const ItemCard = styled.div`
  display: flex;
  background-color: var(--colorWhite);
  border-radius: 5px;
  width: 450px;
  height: 200px;
  overflow: hidden;
  margin: 5px;
  .Imagecontainer {
    width: 60%;
    height: 100%;
    overflow: hidden;
    img {
      margin-top: 20px;
      width: 100%;
    }
  }

  .Details {
    width: 60%;
    margin: 50px 10px;
    .title {
      font-size: 25px;
      font-weight: bold;
      color: black;
    }
    p {
      font-size: 17px;
      color: var(--colorDark);
    }
  }
`;

function CategoryList() {
  return (
    <CateList>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
      <Link to="/">
        <li>Placeholder</li>
      </Link>
    </CateList>
  );
}
const CateList = styled.div`
  width: 97%;
  height: 97%;
  margin: auto;
  background-color: var(--colorLight);
  border: solid 10px var(--colorWhite);
  border-radius: 10px;
  list-style-type: none;
  li {
    padding: 6px;
  }
  a {
    color: var(--colorBlack);
  }
`;

function CategoryCard(props) {
  return (
    <MyCateCard>
      <div className="CategoryName">
        <p>Categories</p>
      </div>
      <div className="FeaturedItems">
        <Card img={Img2} title="TV sets" />
        <Card img={Img3} title="Sound System" />
        <Card img={Img1} title="General Home Electonics" />
      </div>
      <div className="FeaturedItems">
        <Card img={Img4} title="Kitchen Electronics" />
        <Card img={Img5} title="Projectors" />
        <Card img={Img6} title="Camera" />
      </div>
    </MyCateCard>
  );
}

const MyCateCard = styled.div`
  width: 100%;
  background-color: var(--colorLight);
  padding: 10px;
  .CategoryName {
    font-size: 20px;
    font-weight: bold;
  }
  .FeaturedItems {
    display: flex;
  }
`;

function Categories() {
  return (
    <Container>
      <div className="d-flex col-12">
        <div className="col-3 col-lg-3 col-xs-3 col-sm-3 col-md-3">
          <CategoryList />
        </div>
        <div className="col-9 col-lg-9 col-xs-9 col-sm-9 col-md-9">
          <CarouselSlider />
        </div>
      </div>
      <div className="col-12">
        <CategoryCard />
      </div>
      <div className="col-12 my-3">
        <MyCateCard>
          <div className="d-flex my-2">
            <SmallCard img={Img1} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img2} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img3} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img4} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            
          </div>
          <div className="d-flex my-2">
            <SmallCard img={Img1} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img2} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img3} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img4} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            
          </div>
          <div className="d-flex my-2">
            <SmallCard img={Img1} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img2} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img3} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img4} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            
          </div>
          <div className="d-flex my-2">
            <SmallCard img={Img1} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img2} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img3} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            <SmallCard img={Img4} title='Nikon-Camera' moq='10' amount1='50,000' amount2='200,000'/>
            
          </div>
        </MyCateCard>
      </div>
      <Cart />
      <Footer />
      <Header />
    </Container>
  );
}

const Container = styled.div`
padding-top: 9%;
`
export default Categories;
