import React, { useEffect, useState, useParams,useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemCount";
//context
import cartContext from "../../context/cartContext";


function ItemDetailContainer({ auto }) {
    const { cart, setCart } = useContext(cartContext);
    const {addItem} = useContext(cartContext);

    function onAddToCart(counter) {
        console.log("agregado al carrito:", counter, "unidades")
        addItem(auto, counter);
    }


    return (
        <>
            <p>
                {console.log("estoy en el itemDetailContainer jere Kapo")}
                {console.log("auto:", auto)}
            </p>
            <div className="card-container">
            <img src={auto.imagen} alt={auto.modelo} className="card-img"></img>
            <h1>{auto.marca} {auto.modelo}</h1>
            <h2>{auto.anio}</h2>
            <h3>unidades disponibles</h3>
            <h4> {auto.stock}</h4>
            <ItemCount onAddToCart= {onAddToCart} initial = {1} stock={auto.stock} />
        </div>
        </>
    )
}
export default ItemDetailContainer;
