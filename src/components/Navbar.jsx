import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import myLogo from '../asst/michpets.jpg';



function NavBar({ categoriaSeleccionada, setCategoriaSeleccionada }) {


const [expanded, setExpanded] = useState(false);

const handleToggleNav = () => {
setExpanded(!expanded);
};

const handleSelectCategory = (category) => {
setCategoriaSeleccionada(category.toLowerCase());
};

return (


<Navbar style={{ background: '#b191dc' }} expand="md"  variant="dark" fixed="top">
  <Container fluid>
    <Navbar.Brand as={Link} to="/" className="mr-2">
      <a class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img src={myLogo} alt="icono Inicio" class="bi me-2" width="60" height="60" role="img" aria-label="Bootstrap" />
      </a>
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="navbar-nav" onClick={handleToggleNav} />

    <Navbar.Collapse id="navbar-nav" className={expanded ? 'show' : '' }>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" onClick={()=> handleSelectCategory('all products')}
          className={categoriaSeleccionada === 'all products' ? 'active' : ''}
          >
          <li><a class="nav-link px-2 text-black ">Productos</a></li>
        </Nav.Link>
        <Nav.Link as={Link} to="/productos/Gatos" onClick={()=> handleSelectCategory('Gatos')}
          className={categoriaSeleccionada === 'Gatos' ? 'active' : ''}
          >
          <li><a class="nav-link px-2 text-black">Gatos</a></li>
        </Nav.Link>
        <Nav.Link as={Link} to="/productos/Perros" onClick={()=> handleSelectCategory('Perros')}
          className={categoriaSeleccionada === 'Perros' ? 'active' : ''}
          >
          <li><a class="nav-link px-2 text-black">Perros</a></li>
        </Nav.Link>

      </Nav>
    </Navbar.Collapse>

    <Nav.Link as={Link} to="/cart" className="ml-auto">
      <CartWidget />
    </Nav.Link>
  </Container>
</Navbar>
);
}

export default NavBar;