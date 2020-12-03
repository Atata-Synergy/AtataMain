import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";

function ItemCards(props) {
  return (
    <ItemCard>
      <div className="image-container">
        <img src={props.img} />
      </div>
      <div className="Card-top">
        <p>{props.title}</p>
      </div>
      <div className="amount mb-2">
        <NumberFormat
          className={"px-1"}
          value={props.amount}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"₦"}
        />
      </div>
      
      <div className="footer">
        <Link to="/cart" className="btn">
          <span className="fas fa-cart-plus"></span>
        </Link>
      </div>
    </ItemCard>
  );
}

const ItemCard = styled.div`
  background-color: var(--colorWhite);
  margin: 3px auto;
  margin-bottom: 0.9rem;
  width: 270px;
  height: 350px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-shadow: 0px 0px 10px #00000015;
  padding: 10px;
  border: solid 0.5px transparent;

  :hover {
    transition: 0.3s;
    border: solid 0.5px var(--colorAsh);
  }
    
  .Card-top {
    span {
      background-color: var(--colorRed);
      color: var(--colorWhite);
      font-size: 10px;
      font-weight: bold;
      margin: 7px 0px;
      padding: 5px 10px;
      border-radius: 5px;
    }
    p {
      text-align: center;
      font-size: 17px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .image-container {
    width: 250px;
    margin: auto;
    height: 200px;
    overflow: hidden;
    align-content: center;
    justify-content: center;
    align-item: center;
    img {
      width: 250px;
      margin: auto;
      height: 200px;
    }
  }
  .amount {
    text-align: center;
    margin-top: -14px;
    span {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .details {
    p {
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: var(--colorAsh);
    }
  }
  .footer {
    display: flex;
    padding: 3px;
    margin-top: 5px;
    background-color: var(--colorLight);
    .btn {
      background-color: var(--colorYellow);
      color: var(--colorBlack);
      width: 100%;
      font-size: 15px;
    }
  }
@media screen and (max-width: 1080px) {  
  width: 140px;
  height: 200px;
  padding: 2px;
  .image-container {
    width: 135px;
    margin: auto;
    height: 100px;
    overflow: hidden;
    img {
      width: 140px;
      margin: auto;
      height: 100px;
    }
  }
  .Card-top {
    p {
      font-size: 13px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .amount {
    span {
      font-size: 15px;
      font-weight: 600;
    }
  }
}
`;
export default ItemCards;
