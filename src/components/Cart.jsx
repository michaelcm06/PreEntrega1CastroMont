import React, { useContext } from 'react'
import '../components/cart.css'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'


const Cart = () => {
  const { carrito, setCarrito, totalCarrito, vaciarCarrito } = useContext(CartContext)
  const navigate = useNavigate()

  const handleVaciar = () => {
    vaciarCarrito()
  }
  const handleComprar = () => {
    navigate('/finalizarCompra')
  }

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter(producto => producto.id !== id);
    setCarrito(nuevoCarrito);
  };

  const validation = ()=>{
    if(carrito.length === 0){
      return false
    }else{
      return true
    }
  }
  return (
    <div style={{ marginTop: '100px', marginLeft: '100px', color: "white" }}>
      <h1>Carrito</h1>

      {
        carrito.map((prod) => (
          <div key={prod.id} style={{ display: 'flex' }}>
            <Table style={{ width: '60%' }} striped bordered hover>
              <thead>
                <tr style={{ color: 'white', }}>
                  <th style={{ width: "45%",background: '#b191dc' }}>Producto</th>
                  <th style={{ width: "15%",background: '#b191dc' }}>Precio</th>
                  <th style={{ width: "10%",background: '#b191dc' }}>Cantidad</th>
                  <th style={{ width: "30%",background: '#b191dc' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: 'black' }}>{prod.name}</td>
                  <td style={{ color: 'black' }}>${prod.price} </td>
                  <td style={{ color: 'black' }}> {prod.cantidad}</td>
                  <td style={{ color: 'black' }}>${prod.price * prod.cantidad}</td>
                </tr>
              </tbody>
            </Table>
            <button onClick={() => eliminarProducto(prod.id)} className='vaciar' style={{ marginLeft: '20px',marginTop: '0px', background: '#b191dc' }}>Eliminar</button>
          </div>
        )
        )
      }
      <h3 style={{ width: "20%",background: '#b191dc' }}>Total Compra: ${totalCarrito()} </h3>
      <button className='vaciar' disabled={!validation()} onClick={handleComprar} style={{ width: "20%",background: '#b191dc' }}>COMPRAR</button>
      <button className='vaciar' disabled={!validation()} onClick={handleVaciar} style={{ width: "20%",background: '#b191dc' }}>VACIAR CARRITO</button>
      <p></p>
    </div>
  )
}

export default Cart
