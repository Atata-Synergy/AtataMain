import React from "react";
import styled from "styled-components";
import SliderCard from "./slidercard/SliderCard";
import { Link } from "react-router-dom";

function Card() {
  return (
    <PreviewCard>
      <div className="Content">
        <p>Latest Deals</p>
        <div className="Timer">
          <li className="time" id="hour">00</li>
          <li>:</li>
          <li className="time" id="minutes">00</li>
          <li>:</li>
          <li className="time" id="second">00</li>
        </div>
        <Link to="/" className="content_btn">
          View More
        </Link>
      </div>
      <div className="slides">
        <SliderCard />
      </div>
    </PreviewCard>
  );
}

const PreviewCard = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  overflow: hidden;
  background: linear-gradient(160deg,#ff9900,#ffa21a,#ffab2a,#ffaf31,#ffb134,#ffae31,#ffa41f,#ff9900);
  padding: 10px;
  .Content {
    color: var(--colorWhite);
    width: 30%;
    font-size: 2rem;
    margin-top: 15px;
    padding-left: 15px;
    p {
      font-weight: bold;
    }
    .Timer {
      display: flex;
      list-style-type: none;
      .time {
        background-color: var(--colorWhite);
        color: var(--colorYellow);
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
        font-weight: bold;
        font-size: 40px;
      }
    }
  }
  .content_btn {
    width: 20px;
    background-color: Black;
    color: var(--colorWhite);
    padding: 10px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 5px;
    margin-top: -10%;
    margin-left: 10px;
  }
  .slides {
    width: 70%;
  }
`;

export default Card;
