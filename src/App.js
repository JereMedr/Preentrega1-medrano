import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route, useParams} from 'react-router-dom';




function App() {

  console.log("estoy en App");
  console.log("userParams:", useParams())

  return (
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element={<ItemListContainer greeting={"Nuestros autos"} />}/>
  
      <Route path="/categoria/:id" element={<ItemListContainer greeting={"Nuestros autos"} />}/>
      <Route path="/detalle/:id" element={<ItemDetailContainer />} />

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
