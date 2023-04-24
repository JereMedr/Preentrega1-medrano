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
                    {/* <li><img src={logo}/></li> */}
                    <li> <Link to='/'> <img src={logo} alt='Logo consecionario'/> </Link></li>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='category/Ford'>Ford</Link></li>
                    <li><Link to='category/Chevrolet'>Chevrolet</Link></li>
                    <li><Link to='category/Peugeot'>Peugeot</Link></li>
                </ul>
            </div>
            <div className="navbar-carrito">
                <Link to='/cart'> <CartWidget/></Link>
            </div>
        </div>
    );
}

export default NavBar;