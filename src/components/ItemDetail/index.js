import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { useState } from "react";


function ItemDetail() {
    const params = useParams();
    const autoId = params.id;
    console.log("autoId:", autoId);
    // const [auto, setAuto] = useState({});

    function getAutoById(id) {
        console.log("estoy en getAutoById");
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log("myJson:", myJson);
                console.log("myJson.autos:", myJson.autos);
                console.log("myJson.autos[0]:", myJson.autos[0]);
                console.log("myJson.autos[0].id:", myJson.autos[0].id);
                console.log("myJson.autos[0].modelo:", myJson.autos[0].modelo);
                console.log("myJson.autos[0].marca:", myJson.autos[0].marca);
                console.log("myJson.autos[0].anio:", myJson.autos[0].anio);
                console.log("myJson.autos[0].imagen:", myJson.autos[0].imagen);
                console.log("myJson.autos[0].descripcion:", myJson.autos[0].descripcion);
                console.log("myJson.autos[0].precio:", myJson.autos[0].precio);
            });
    }
    getAutoById(autoId);

    return (
        <div>
            <h1>ItemDetail</h1>
        </div>
    );
}

export default ItemDetail;