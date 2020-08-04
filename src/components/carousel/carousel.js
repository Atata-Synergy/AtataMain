import React, { Component } from "react";
import "../accounts/account.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styled from "styled-components";
import CarouselImg from "./Images/banner.png";
import CarouselImg2 from "./Images/banner2.png";
import CarouselImg3 from "./Images/banner3.png";

export default class SimpleSlider extends Component {
  render() {
    return (
      <>
        <Slider>
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={CarouselImg} className="sliderimg" />
            <img src={CarouselImg2} className="sliderimg" />
            <img src={CarouselImg3} className="sliderimg" />
          </AliceCarousel>
        </Slider>
      </>
    );
  }
}

const Slider = styled.div`
  height: 50%;
  width: 100%;
  color: red;
  .alice-carousel__prev-btn-item,
  .alice-carousel__next-btn-item {
    position: absolute;
    color: var(--colorWhite);
    top: 38%;
  }
  .alice-carousel__prev-btn-item {
    left: 0;
  }
  .alice-carousel__next-btn-item {
    right: 0;
  }
  .arrows {
    position: absolute;
    transform: (-100px, -100px);
  }
`;
