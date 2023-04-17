import { createContext,useState} from "react";

const cartContext = createContext({
  cart: [],
})

function CartContextProvider(props){

  function addItem(auto,counter){
    console.log("addItem de cartContextProvider");
    setCart([...cart, {auto,counter}]);
  }

  function removeItem(id){
    console.log("removeItem de cartContextProvider");
    console.log("id:", id)
    setCart(cart.filter((item) => item.auto.id !== id));
  }

  function clear(){
    setCart([]);
  }


  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart, addItem, removeItem, clear}}>
      {props.children}
    </cartContext.Provider>
  )
}
export { CartContextProvider };

export default cartContext;