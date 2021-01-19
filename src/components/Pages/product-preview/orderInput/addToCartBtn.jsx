import React from 'react'
import { Provider, useDispatch, useSelector } from "react-redux";
import process from "../../../../Redux/addToCart";
import { addCartItem } from "../../../../Redux/addToCart"


export default function AddToCartBtn() {
    const dispatch = useDispatch();
    return (
        <Provider store={process}>
            <button onClick={() => dispatch(addCartItem("Hello"))}>Add to Cart </button>
        </Provider>
    )
}