import React, { useContext, useEffect, useRef, useState } from 'react'
import ItemCount from './ItemCount';
import { Card } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';


const ItemDetail = ({ item, loading }) => {

  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);
  
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregar = () => {
    agregarAlCarrito()
  }

  

  const cardRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(0);

  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.offsetHeight;
      setCardHeight(height);
    }
  }, []);
  return (
    <div style={{ display: 'flex', marginTop: '100px', marginLeft: '25px'}}>
      
      <Card ref={cardRef} style={{ maxWidth: '300px' }}>
        {item && item.image && (
          <Card.Img
            style={{
              height: '100%',
              maxHeight: '100%',
              objectFit: 'fill',
            }}
            variant="top"
            src={item.image}
            alt={item.name}
          />
        )}
          
      </Card>
      <div style={{ marginLeft: "20px" }}> 
          <Card.Title style={{  }}>{item.name}</Card.Title>
          <Card.Text>Precio: ${item.price}</Card.Text>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Categoria: {item.categoria}</Card.Text></div>
          <ItemCount cantidad={cantidad}
          
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={handleAgregar}
            agregarAlCarrito={() => { agregarAlCarrito(item, cantidad) }} />

    </div>
  )
}

export default ItemDetail;
