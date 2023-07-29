import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ItemCount = ({ cantidad, handleRestar, handleSumar, agregarAlCarrito }) => {
  const navigate = useNavigate()
  const SeguirComprando = () => {
    navigate('/');
  }

  return (
    <>
      <Row style={{ display: 'flex' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Button style={{ width: '10%', marginLeft: '40px',background: '#b191dc' }} onClick={handleRestar}>-</Button>
          <p style={{
            marginTop: '20px',
            marginLeft: '40px',
            display: 'inline-block',
            padding: '8px 30px',
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            background: '#b191dc',
            borderRadius: '10%'
          }}>{cantidad}</p>


          <Button style={{ width: '10%', marginLeft: '40px', background: '#b191dc' }} onClick={handleSumar}>+</Button>

        </div>

        <Button style={{ marginLeft: '70px',width: '40%',marginTop: '5px', height: '55px',background: '#b191dc' }} onClick={agregarAlCarrito} size="sm" variant="primary">
          AÑADIR AL CARRITO
        </Button>
        
        <Button style={{ marginLeft: '40px',width: '40%',marginTop: '5px', height: '55px',background: '#b191dc' }} onClick={SeguirComprando} size="sm" variant="primary">
          SEGUIR COMPRANDO
        </Button>

      </Row >
    </>
  )
}

export default ItemCount;
