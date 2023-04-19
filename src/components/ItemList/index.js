import React from "react";
import Item from "../Item";
import "./styles.css";
export default function ItemList({data}) {
    return (
        <div className="catalog-list">
                {data.map((item) => (
                    <Item key={item.id} {...item} />  
                ))}
        </div>
    );

}
