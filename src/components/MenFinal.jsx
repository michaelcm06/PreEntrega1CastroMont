import React, { useContext, useEffect } from 'react'
import Swal from 'sweetalert2'
import { CartContext } from '../context/CartContext';


const MensajeGracias = () => {
  const { pedidoId } = useContext(CartContext)
  useEffect(() => {
    Swal.fire({
      title: 'GRACIAS POR TU COMPRA!',
      text: `El ID de tu pedido es: ${pedidoId}`,
      icon: 'success',
    });
  }, [pedidoId]);
  return (
    <div style={{ margin: '100px', display: 'block', color: 'Black' }}>
      <h3>En el transcurso del día nos contactaremos con los detalles del envio</h3>
      <p>Contactanos al 305-240-569-8963</p>
      <p>Escribenos en: MichPets@hotmail.com</p>
      <p> !GRACIAS POR TU COMPRA TE INVITAMOS A SEGUIR MIRANDDO NUESTRA PAGINA WEB! </p>
    </div>
  )
}

export default MensajeGracias
