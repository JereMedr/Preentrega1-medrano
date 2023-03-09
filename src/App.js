import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route
        path="/"
        element={<ItemListContainer greeting={"Nuestros autos"} />}
      />
      <Route path="/detalle/:id" element={<ItemDetail />} />

    </Routes>
  </BrowserRouter>
    // <BrowserRouter>
    //   <NavBar />

    //   <Routes>
    //     <Route
    //       path="/"
    //       element={<ItemListContainer greeting={"Bienvenidos"} />}
    //     />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
