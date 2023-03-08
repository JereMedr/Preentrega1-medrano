import React from "react";
import Item from "../Item";
// import {autos} from "../../data.json";
export default function ItemList({data}) {
    console.log("estoy en ItemList");
    console.log(data);

    //recorrer data y mostrar los items
    return (
        <div>
            <ul>
                {data.array.forEach(element => {
                   console.log(element); 
                })}
            </ul>
        </div>
    );


    // console.log("estoy en ItemList");
    // const autoList = autos.map((item) => (
    //     console.log("estoy en el map "+item),
    //     <Item key={item.id} {...item} />
    // ));
    // console.log("estoy en ItemList");
    // console.log(data);
    // const [item, setItem] = React.useState([]);
    // React.useEffect(() => {
    //     console.log("estoy en useEffect");
    //     setItem(data);
        
    // }, [data]);
    // console.log("soy el estado item"+item);
    // return (
    //     <div>
    //         <ul>
    //             {data.map((item) => (
    //                 console.log("estoy en el map "+item),
    //                 <Item key={item.id} {...item} />
                    
    //             ))}
    //         </ul>
    //     </div>
    // );
}
