import React from 'react';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CartWidget from '../CarWidget';
import logo from '../assets/img/logo.png';

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-links">

                <ul>
                    <li><img src={logo}/></li>
                    <li><a href='#'>Inicio</a></li>
                    <li><a href='#'>Producto</a></li>
                    <li><a href='#'>Contactos</a></li>
                </ul>
            </div>
            <div className="navbar-carrito">
                <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;