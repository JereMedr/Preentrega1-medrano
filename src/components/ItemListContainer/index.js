import { useState, useEffect } from "react";
import ItemList from "../ItemList";

function ItemListContainer({ greeting }) {
    const [data, setData] = useState([]);
    console.log("estoy en ItemListContainer");
    const getData = () => {
        console.log("estoy en getData");
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
                setData(myJson)
            });
    }
    useEffect(() => {
        console.log("estoy en useEffect");
        getData()
    }, [])

    return (
        <>
            <h2>{greeting}</h2>
            {console.log("estoy en return")}
            {/* {data.map((item) => (console.log("data item:"+item.modelo)))} */}
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;
