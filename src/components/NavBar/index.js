import React from 'react';
import './styles.css';

function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-links">
            <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </div>
            <div className="navbar-carrito">
                <p>Carrito</p>
            </div>
        </div>
    );
}

export default NavBar;