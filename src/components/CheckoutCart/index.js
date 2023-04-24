import React from "react";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import cartContext from "../../context/cartContext";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
function CheckoutCart() {
    const { clear } = useContext(cartContext);


    
    return (
        <div className="container">
            <h1 className="text-center"> CheckoutCart </h1>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email </label>
                    <input type="email" className="form-control"  />
                    <div id="emailHelp" className="form-text">Direccion de email donde enviar toda la info de la/las unidades seleccionadas</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Apellido</label>
                    <input type="text" className="form-control" />
                </div>
                <div>
                <Link to={'/CompraFinalizada'} >
                        <button className="btn btn-success btn-lg" type="submit" onClick={clear}>Finalizar compra</button>
                    </Link>
                </div>
            </form>

        </div>
    )

}

export default CheckoutCart;