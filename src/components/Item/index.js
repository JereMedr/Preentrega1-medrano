import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function Item({ modelo, marca, anio,id, imagen }) {
    console.log("estoy en Item");
    let photo = imagen
    return (
        <div className="card-container">
            <img src={imagen} alt={modelo} className="card-img"></img>
            <h1>{marca} {modelo}</h1>
            <h2>{anio}</h2>
            <Link to={`/detalle/${id}`}>
                <button className="card-button">Ver más</button>
            </Link>
        </div>
    );
}

export default Item;
