import React from "react";
import styled from "styled-components";
import SliderCard from "./SliderCard";
import { Link } from "react-router-dom";

function Card() {
  return (
    <PreviewCard>
      <div className="Content">
        <p>Top Selling</p>
        <h5 className="sm-text">Click the button below to see more</h5>
        <Link to='/' className="content_btn">View More</Link>
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
  background-color: #660404;
  padding: 10px;
  .Content {
    color: var(--colorWhite);
    width: 30%;
    font-size: 4rem;
    p {
      margin-top: 7%;
      font-weight: bold;
    }
    .sm-text {
      font-size: 12px;
      margin-bottom: -5%;
      margin-left: 10px;
    }
  }
  .content_btn {
    width: 20px;
    background-color: var(--colorWhite);
    color: black;
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
