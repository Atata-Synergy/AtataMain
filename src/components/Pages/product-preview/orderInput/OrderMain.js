import React, { Component } from "react";
import ItemName from "./ItemName";
import Counter from '../counter'


class OrderInput extends Component {
  render() {
    return (
      <>
        <ItemName />

        {/* <Sizes /> */}

        <Counter
          productQuantity='2'
          updateQuantity={this.props.updateQuantity}
          resetQuantity={this.resetQuantity}
        />
      </>
    );
  }
}

export default OrderInput;
