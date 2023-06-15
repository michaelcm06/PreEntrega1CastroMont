import React from 'react'
import './NavBar.css';
import myImage from '../../assets/carrito-de-compras.png';
import myLogo from '../../assets/michpets.jpg';
import CartWidget from "../cart-widget";

const NavBar = () => {
const cart = 3;
return (
<>
  <nav class="p-3 text-bg fixed-top navbar-expand-md">
    <div class="container-fluid">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

        <a href="#" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <img src={myLogo} alt="icono Inicio" class="bi me-2" width="60" height="60" role="img"
            aria-label="Bootstrap" />
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" class="nav-link px-2 text-black">Inicio</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Perros</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Gatos</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Quienes Somos</a></li>
          <li><a href="#" class="nav-link px-2 text-black">Servicios</a></li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-dark me-2">Login</button>
          <button type="button" class="btn btn-warning">Sign up</button>

          <li class="menuItem">
            <a href="#carrito-id">
              <div id="ver-carrito" class="menuLink">
                <img src={myImage} alt="Mi imagen" />
                <CartWidget cartQuantity={cart} />
                <div class="carrito1"></div>
                <div class="carrito2"></div>
                  
              </div>
            </a>
          </li>

        </div>
      </div>
    </div>
  </nav>
</>
)
}

export default NavBar