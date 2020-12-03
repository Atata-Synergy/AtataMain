import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "./carousel.css";
import "react-alice-carousel/lib/alice-carousel.css";
import CarouselImg from "./Images/banner.png";
import CarouselImg2 from "./Images/banner2.png";
import CarouselImg3 from "./Images/banner3.png";

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="carousel">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={CarouselImg} />
          <img src={CarouselImg2} />
          <img src={CarouselImg3} />
        </AliceCarousel>
      </div>
    );
  }
}
