import { createContext,useState} from "react";

const cartContext = createContext({
  cart: [],
})

function CartContextProvider(props){

  function addItem(){
    console.log("addItem");
  }

  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{cart:cart}}>{props.children}</cartContext.Provider>
  )
}
export { CartContextProvider };

export default cartContext;