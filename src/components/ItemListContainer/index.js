import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import {getDataFromDB, getDataByMarca} from "../../services/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);
    const params  = useParams();
    const marca = params.marca;

    async function fillList() {
        if(marca===undefined) {
            const data = await getDataFromDB();
            setData(data);
        } else {
            const data = await getDataByMarca(marca);
            setData(data);
        }
    }

    useEffect(() => {
        fillList();
    },[marca]);

    return (
        <div className="container">
            <h2 className="text-center">{greeting}</h2>
            <hr/>
            <ItemList data={data}/>
        </div>
    );
}
export default ItemListContainer;
