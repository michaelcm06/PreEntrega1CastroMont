# Proyecto e-commerce (React) para CoderHouse

### Instalacion
Para levantar la pagina necesitamos hacer 
npm install 
npm start

### env variables
MICHPETS_FIREBASE_API_KEY=AIzaSyC-gtJliSfIAe_e_dxJBYfo6TNMjaAG6fU


### descripcion del proyecto

Tenemos un Navbar donde se ve el nombre del ecommerce que es un link a la pagina principal donde se ven todos los productos, luego estan los links para ver productos segun su categoria y al final del Navbar vemos el carrito con el numero de productos agregados que clickeando en el carrito nos lleva a la pagina del carrito. Luego tenemos el cuerpo de la pagina donde se muestran los productos, ya sean todos o segun su categoria; estos se muestran en una card y abajo con un boton se puede acceder a los detalles del producto donde podemos poner la cantidad y agregar al carrito.
Dentro del carrito podemos ver los productos agregados y el precio final del carrito, tambien podemos vaciar el carrito o avanzar en la compra. Al avanzar tendremos que llenar un formulario que sera enviado a nuestra base de datos en Firebase en una coleccion llamada pedidos con el detalle del pedido.
