import React from "react";
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BsFillCartFill } from 'react-icons/bs';

function CartWidget() {
    return (
        <a href="#" class="cart-widget">
        <BsFillCartFill  />
        <button class="btn btn-danger">4</button>
      </a>
    );
}

export default CartWidget;