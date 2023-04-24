import { createContext,useState} from "react";

const cartContext = createContext({
  cart: [],
})

function CartContextProvider(props){

  function addItem(auto,counter){
    if(!isInCart(auto.id)){
      setCart([...cart, {auto,counter}]);
    }
  }

  function isInCart(id){
    return cart.some((item) => item.auto.id === id);
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