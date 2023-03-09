import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";
import { useParams } from "react-router-dom";
function ItemDetail() {
    const params = useParams();
    const idAuto = params.id;
    console.log(idAuto);
    console.log(data.autos);
    useEffect(() => {
        const promesaItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                let encontrado = data.autos.find((item) => item.id === Number(idUser));
                resolve(encontrado);
            }, 500);
        });

        promesaItem.then((respuesta) => setUser(respuesta));
    }, []);
    return (
        <div>
            <h1>ItemDetail</h1>
        </div>
    );
}

export default ItemDetail;