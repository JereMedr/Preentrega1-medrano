import { useState, useEffect } from "react";
import ItemList from "../ItemList";
import {getDataFromDB} from "../../services/firestore";

function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        getDataFromDB().then((data) => {
            setData(data);
        })    
    }, [])

    return (
        <>
            <h2>{greeting}</h2>
            <ItemList data={data}/>
        </>
    );
}
export default ItemListContainer;
