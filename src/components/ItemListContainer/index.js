import React from "react";
import './styles.css';
import "bootstrap/dist/css/bootstrap.min.css"

function ItemListContainer({greeting}) {
    return (
        <div className="container">
            <h2 className="text-center">{greeting}</h2>
        </div>
    );
}

export default ItemListContainer;