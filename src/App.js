import React from 'react';
import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from 'react';
import { CartContext } from './context/CartContext';
import Cart from './components/Cart';
import Footer from './components/Footer';


function App() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, valor) => {

    const itemAgregado = { ...item, valor };
    const nuevoCarrito = [itemAgregado]


    const estaEnElCarrito = nuevoCarrito.find((prod) => prod.id === itemAgregado.id)
    if (estaEnElCarrito) {
      estaEnElCarrito.valor += valor;

    } else {
      nuevoCarrito.push(itemAgregado);

    }
    setCarrito(nuevoCarrito);

  }

  const NumCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.valor, 0);
  }
  console.log(NumCarrito)

  return (
    <div>
      <CartContext.Provider value={{ carrito, agregarAlCarrito, NumCarrito }}>
        <BrowserRouter>
          <NavBar categoriaSeleccionada={categoriaSeleccionada} setCategoriaSeleccionada={setCategoriaSeleccionada}/>

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;