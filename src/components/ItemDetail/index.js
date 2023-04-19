import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import ItemCount from "../ItemCount";
//context
import cartContext from "../../context/cartContext";

function ItemDetailContainer({ auto }) {
    const { cart, setCart } = useContext(cartContext);
    const { addItem } = useContext(cartContext);
    function onAddToCart(counter) {
        addItem(auto, counter);
    }

    return (
        <>
            <div className="info-container">
                <div className="main-info">
                    <img src={auto.imagen} alt={auto.modelo} className="card-img"></img>
                    <h1>{auto.marca} {auto.modelo}</h1>
                    <h2>{auto.anio}</h2>
                </div>
                <div className="main-info-detail">
                <h3> Precio: {auto.precio} usd</h3>
                <h3>unidades disponibles</h3>
                <h4> {auto.stock}</h4>
                <ItemCount onAddToCart={onAddToCart} initial={1} stock={auto.stock} />
                </div>
            </div>
        </>
    )
}
export default ItemDetailContainer;
