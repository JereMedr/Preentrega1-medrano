import React from "react";
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BsFillCartFill } from 'react-icons/bs';

function CartWidget() {
    return (
        <a href="#" className="cart-widget">
        <BsFillCartFill  />
        <button className="btn btn-danger">4</button>
      </a>
    );
}

export default CartWidget;