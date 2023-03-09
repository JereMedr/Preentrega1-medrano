import React from 'react';
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"
import CartWidget from '../CarWidget';
import logo from '../assets/img/logo.png';
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-links">

                <ul>
                    <li><img src={logo}/></li>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='#'>Producto</Link></li>
                    <li><Link to='/detalles'>Detalles</Link></li>
                </ul>
            </div>
            <div className="navbar-carrito">
                <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;