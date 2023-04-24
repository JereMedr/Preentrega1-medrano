import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getSingleAutoFromDB } from "../../services/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
function ItemDetailContainer() {
    const [auto, setAuto] = useState([]);
    const params = useParams();
    const idAuto = params.id;

    useEffect(() => {
        getSingleAutoFromDB(idAuto).then((auto) => {
            setAuto(auto);
        });
    }, [])

    return (
        <div className="center-item" >
            <div>
                <ItemDetail auto={auto} />
            </div>
        </div>
    );
}

export default ItemDetailContainer;