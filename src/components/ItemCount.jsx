import { Button, Row, Col } from 'react-bootstrap';

const ItemCount = ( {cantidad, handleRestar, handleSumar, handleAgregar} ) => {



  return (
    <>
     <Row>
        <Col>
          <Button style={{ background: '#b191dc' }}class="btn btn-primary w-100 justify-content-start" onClick={handleRestar}>-</Button>
        </Col>
        <Col>
          <p class="btn w-100 justify-content-start">{cantidad}</p>
        </Col>
        <Col>
          <Button style={{ background: '#b191dc' }}class="btn btn-primary w-100 justify-content-start" onClick={handleSumar}>+</Button>
        </Col>
      </Row>
      <Button onClick={ handleAgregar }  variant="primary" style={{ background: '#b191dc' }}class="btn btn-primary w-100 text-center" >
        Agregar al carrito
      </Button>
    </>
  )
}

export default ItemCount;
