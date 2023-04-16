import React, { useEffect, useState, useParams } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "../ItemCount";
// aca meter el itemDetail y adnetro el itemCount

function ItemDetailContainer({ auto }) {
    let stock = auto.stock;
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
            <ItemCount initial = {1} stock={stock} />
                {/* <button className="card-button">Ver más</button> */}
        </div>
        </>
    )
}
export default ItemDetailContainer;
