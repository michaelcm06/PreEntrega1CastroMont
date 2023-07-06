import React from 'react'
import './Footer.css';
import myLogo from '../asst/michpets.jpg';


const Footer = () => {
return (
<>
  <div class="row">
    <div class="col-6 col-md-2 mb-3">
      <img src={myLogo} class="bi me-2" width="100%" height="90%" role="img" aria-label="Bootstrap"/>

    </div>

    <div class="col-6 col-md-2 mb-3">
      <h3>Acerca de</h3>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">Home</a></li>
        <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">Features</a></li>
        <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">Pricing</a></li>
        <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">FAQs</a></li>
        <li class="nav-item mb-2"><a class="nav-link p-0 text-muted">About</a></li>
      </ul>
    </div>

    <div class="col-md-5 offset-md-1 mb-3">
      <form>
        <h3>Suscribete a nuestras noticias</h3>
        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label for="newsletter1" class="visually-hidden">Correo Electronico</label>

                        <button class="btn text-light" type="submit">Suscribete</button>
                    </div>
      </form>
    </div>
  </div>

  <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
    <p>© 2023 MichPets, Inc. All rights reserved.</p>
  </div>
</>
)
}

export default Footer