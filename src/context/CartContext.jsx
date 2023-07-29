import { createContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'

export const CartContext = createContext();

const { Provider } = CartContext;

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];


const ContextProvider = ( {children} ) =>{
  
    const [carrito, setCarrito] = useState(carritoInicial);
    const [pedidoId, setPedidoId] = useState("");
    
    const agregarAlCarrito = (item, cantidad) => {

        const itemAgregado = { ...item, cantidad };
        const estaEnElCarrito = carrito.find((prod) => prod.id === itemAgregado.id)
        if (estaEnElCarrito) {
          estaEnElCarrito.cantidad += cantidad;
    
        } else {
          setCarrito([...carrito, itemAgregado]);
    
        }
        
    }

    const totalCarrito = () => {
      return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
    }

    const nroCarrito = ()=>{
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    useEffect(()=>{
      localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    const vaciarCarrito = () =>{
      setCarrito([])
      Swal.fire('Tu carrito esta vacio')
    }

return (
    <Provider value={{ pedidoId, setPedidoId, carrito, setCarrito, agregarAlCarrito, nroCarrito, totalCarrito, vaciarCarrito }}>
        { children }
    </Provider>
)


}
export default ContextProvider;
