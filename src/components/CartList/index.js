import React from 'react';
import { useContext } from 'react';
import cartContext from "../../context/cartContext";

function CartList() {
    const { cart, setCart } = useContext(cartContext);
    const { removeItem } = useContext(cartContext);

    function onRemoveItem(id) {
        removeItem(id);
    }

    return (
        <>
            <h3>Carrito</h3>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th> anio</th>
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
                            <td><button onClick={() => onRemoveItem(item.auto.id)}>Quitar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default CartList;