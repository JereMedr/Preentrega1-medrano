import { useState } from "react";
import "./styles.css";

function ItemCount({ initial, stock, onAddToCart }) {
    const [counter, setCounter] = useState(0);
    const init = initial;
    const cant = stock;

    const add = () => {
        if (counter < cant) {
            setCounter(counter + 1)
        }
    }

    const remove = () => {
        if (counter > init) {
            setCounter(counter - 1);
        }
    }

    return (
        <>
            <div className="count-container">
                <button className="red" onClick={remove}>Quitar</button>
                <span> {counter} </span>
                <button className="green" onClick={add}> Agregar </button>
            </div>
            <div >
                <button className="CartBtn" onClick={()=>onAddToCart(counter)}>
                    Add carrito
                </button>
            </div>
        </>
    );
};
export default ItemCount;
