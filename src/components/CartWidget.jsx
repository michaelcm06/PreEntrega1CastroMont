import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import myImage from '../asst/carrito-de-compras.png';
import Cart from './Cart';

const CartWidget = () => {
  const { NumCarrito } = useContext(CartContext);
  
  const navigate = useNavigate()
  
  const handleCart = () => {
    navigate(<Cart/>)
  }
  
  return (
    <Button onClick={handleCart}  variant="light">
      <img  width="30" src={myImage} alt="Mi imagen" />
      <Badge bg="secondary"> {NumCarrito()} </Badge> 
    </Button>
   
  );
}

export default CartWidget;
