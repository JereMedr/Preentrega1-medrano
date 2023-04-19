import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { CartContextProvider } from './context/cartContext';
import CartContainer from './components/CartContainer';
import CompraFinalizada from './components/CompraFinalizada';
function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Nuestros autos"} />} />
            <Route path="/categoria/:id" element={<ItemListContainer greeting={"Nuestros autos"} />} />
            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/CompraFinalizada" element={<CompraFinalizada />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>

  );
}

export default App;
