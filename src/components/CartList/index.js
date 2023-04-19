import React from 'react';
import { useContext,useState,useEffect } from 'react';
import cartContext from "../../context/cartContext";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
function CartList() {
    const { cart } = useContext(cartContext);
    const { removeItem, clear } = useContext(cartContext);
    const [total, setTotal] = useState();

    function onRemoveItem(id) {
        removeItem(id);
    }

    function calcularToralCart() {
        let total = 0;
        cart.forEach((item) => {
            total += item.auto.precio * item.counter;
        });
        return total;
        // setTotal(total);
    }

    useEffect(() => {
        setTotal(calcularToralCart());
    }, [cart]);

    return (
        <div className='container'>
            <h1 className='text-center'>Carrito</h1>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th> yyyy</th>
                        <th>precio</th>
                        <th>Cantidad</th>
                        <th>Quitar</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map over the cart array to render each item */}
                    {cart.map((item) => (
                        <tr key={item.auto.id}>
                            <td>{item.auto.marca}</td>
                            <td>{item.auto.modelo}</td>
                            <td>{item.auto.anio}</td>
                            <td>{item.auto.precio}</td>
                            <td>{item.counter}</td>
                            <td><button className='btn btn-danger' onClick={() => onRemoveItem(item.auto.id)}>Quitar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className='text-center' >total </h2>
            <h3 className='text-center' >{total} usd</h3>
            <div className="d-grid gap-2 col-6 mx-auto">
            <button className='btn btn-dark' onClick={clear}>Vaciar carrito</button>
            </div>
        </div>

    )
}

export default CartList;