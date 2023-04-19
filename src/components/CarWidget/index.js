import React from "react";
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BsFillCartFill } from 'react-icons/bs';
//context
import { useContext } from "react";
import cartContext  from "../../context/cartContext";

function CartWidget() {
  const { cart } = useContext(cartContext);
  const cartCount = cart.length;
    return (
        <a href="#" className="cart-widget">
        <BsFillCartFill  />
        <button className="btn btn-danger">{cartCount}</button>
      </a>
    );
}

export default CartWidget;