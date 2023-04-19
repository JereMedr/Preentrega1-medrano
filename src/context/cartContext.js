import { createContext,useState} from "react";

const cartContext = createContext({
  cart: [],
})

function CartContextProvider(props){

  function addItem(auto,counter){
    setCart([...cart, {auto,counter}]);
  }

  function removeItem(id){
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