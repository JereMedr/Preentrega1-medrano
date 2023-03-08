import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item({ modelo, marca, precio, id }) {
    console.log("estoy en Item");
    return (
        <div>
            <h1>{modelo}</h1>
        </div>
    );
}


export default Item;
