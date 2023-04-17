import React from "react";
import {Link } from 'react-router-dom';
import CompraFinalizada from "../CompraFinalizada";

function CheckoutCart() {
  return (
    <>
    <h1> CheckoutCart </h1>
    <h2>Datos del comprador form : </h2>
    <form>
        <label>
            Nombre:
            <input type="text" name="name" />
        </label>
        <label>
            Apellido:
            <input type="text" name="lastname" />
        </label>
        <label>
            Email:
            <input type="text" name="email" />
        </label>
        <label>
            Telefono:
            <input type="text" name="phone" />
        </label>
        <label>
            Direccion:
            <input type="text" name="address" />
        </label>
        <div>
           <Link to={'/CompraFinalizada'} >
            <button type="submit">Finalizar compra</button>
           </Link>
        </div>
    </form>

    </>
  )
  
}

export default CheckoutCart;