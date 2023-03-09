import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
function ItemDetail() {
    const params = useParams();
    const idAuto = params.id;
    console.log(idAuto);
    console.log(data.autos);
    const [auto, setAuto] = useState({});
    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                let encontrado = data.autos.find((item) => item.id === Number(idAuto));
                resolve(encontrado);
            }, 500);
        });

        promesaItem.then((respuesta) => setAuto(respuesta));
    }, []);
    return (
        <div>
            <h1>ItemDetail</h1>
            <h2>{auto.modelo}</h2>
        </div>
    );
}

export default ItemDetail;