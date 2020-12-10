import React, { Component } from "react";
import ItemName from "./ItemName";
import OrderQtySelect from "./orderQtySelect";
import Details from "./details";
import Sizes from "./OrderSizes";


class OrderInput extends Component {
  render() {
    return (
      <>
        <ItemName />

        {/* <Sizes /> */}

        <OrderQtySelect />
      </>
    );
  }
}

export default OrderInput;
