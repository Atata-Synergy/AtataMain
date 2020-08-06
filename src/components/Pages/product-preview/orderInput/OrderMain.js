import React, { Component } from "react";
import ItemName from "./ItemName";
import ColorSelect from "./OrderColor";
import OrderQtySelect from "./orderQtySelect";
import Details from "./details";
import Sizes from "./OrderSizes";
import Shipping from "./OrderShipping"


class OrderInput extends Component {
  render() {
    return (
      <>
        <ItemName />

        <ColorSelect />

        <Sizes />

        <Shipping />

        <OrderQtySelect />

        <Details />
      </>
    );
  }
}

export default OrderInput;
