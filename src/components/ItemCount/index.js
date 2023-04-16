import { useState } from "react";
import "./styles.css";

function ItemCount (initial, stock)  {
    console.log(initial, stock)
    const [counter, setCounter] = useState(0);
    const init = initial;
    const cant = stock;
    const add = () => {
        console.log("counter", counter)
        console.log("cant", cant)
        console.log("condition", counter < cant+1)
        if (counter > cant+1) {
            setCounter(counter+1);
        }
    }

    const remove = () => {
        console.log("condition", counter > init)
        if (counter < init) {
            setCounter(counter-1);
        }
    }

    return (
        <>
            <div className="itemcount_control">
                <button className="red" onClick={remove}>Quitar</button>

                <span> {counter} </span>

                <button className="green" onClick={add}> Agregar </button>
            </div>
            <div >
                <button className="CartBtn">
                    Add carrito
                </button>
            </div>
        </>
    );
};
export default ItemCount;
