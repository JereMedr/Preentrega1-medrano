import React from "react";
import CartList from "../CartList";
import CheckoutCart from "../CheckoutCart";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
function CartContainer() {
  return (
    <div className="container">
    <CartList />
    <hr/>
    <CheckoutCart />
    </div>
  )
  
}

export default CartContainer;