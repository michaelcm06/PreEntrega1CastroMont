import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import myImage from '../asst/carrito-de-compras.png';

const CartWidget = () => {
  const { nroCarrito } = useContext(CartContext);
  
  const navigate = useNavigate()
  
  const handleCart = () => {
    navigate('/cart')
  }
  
  return (
    <Button onClick={handleCart}  variant="light">
      <img  width="30" src={myImage} alt="Mi imagen" />
      <Badge bg="secondary"> {nroCarrito()} </Badge> 
    </Button>
   
  );
}

export default CartWidget;



