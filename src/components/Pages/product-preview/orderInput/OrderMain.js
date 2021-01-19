import React from "react";
import ItemName from "./ItemName";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../../Redux/count";

function OrderInput() {
  const count = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <ItemName />

      {count == 0 ? (
        <button>-</button>
      ) : (
        <button onClick={() => dispatch(decrement())}>-</button>
      )}
      <input type="text" placeholder="0" value={count} />
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}


export default OrderInput;
