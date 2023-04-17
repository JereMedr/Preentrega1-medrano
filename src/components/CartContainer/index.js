import React from "react";
import CartList from "../CartList";
import CheckoutCart from "../CheckoutCart";

function CartContainer() {
  return (
    <>
    <h1> CartContainer </h1>
    <CartList />
    <hr/>
    <CheckoutCart />
    </>
  )
  
}

export default CartContainer;