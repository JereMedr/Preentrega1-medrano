import React from "react";
import Item from "../Item";
export default function ItemList({data}) {
    return (
        <div>
            <ul>
                {data.map((item) => (
                    console.log("estoy en el map "+item),
                    <Item key={item.id} {...item} />   
                ))}
            </ul>
        </div>
    );

}
