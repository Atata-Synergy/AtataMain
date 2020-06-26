import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../accounts/account.css";
import CarouselImg from "./Images/banner1.png";
import CarouselImg2 from "./Images/slider2.jpg";
import CarouselImg3 from "./Images/slider4.png";
import CarouselImg5 from "./Images/banner2.png";
import CarouselImg6 from "./Images/slider5.png";
import CarouselImg7 from "./Images/slider3.jpg";

export default class SimpleSlider extends Component {
  render() {
    return (
      <div className="slider">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg2} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg3} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg5} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg6} />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={CarouselImg7} />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
