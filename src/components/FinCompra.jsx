import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import '../components/finalizarCompra.css'
import { CartContext } from '../context/CartContext';
import { database } from '../firebase/configuracion';


const FinalizarCompra = () => {
    const { vaciarCarrito, carrito, totalCarrito } = useContext(CartContext)
    const navigate = useNavigate()
    const { setPedidoId } = useContext(CartContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    const enviar = (data) => {

        const dataPedido = {
            cliente: data,
            Pedido: carrito,
            total: totalCarrito()  
        }
        
        handleFinalizar()
        const pedidosRef = collection(database, "pedidos")
        addDoc(pedidosRef, dataPedido)
            .then((doc) => {
                setPedidoId(doc.id)
            })
    }
    const handleFinalizar = () => {
        vaciarCarrito();
        navigate('/mensajeGracias')
    }
    

    return (
        <div style={{ margin: "80px", color: 'black' }}>
            <h1>FINALIZA TU COMPRA</h1>
            <br />
            <h3 style={{ marginBottom: "15px" }}>
                COMPLETA TUS DATOS</h3>
            <form style={{ display: "flex", flexDirection: "column", width: "35%" }}
             onSubmit={handleSubmit(enviar)}>
                <input className='inputs' style={{ marginBottom: "20px" }}
                 type='text' placeholder='Nombre y Apellido' 
                 {...register("nombreapellido", { required: true, minLength: 2, maxLength: 25 })} />
                {
                    errors.nombreapellido?.type === "required" && (
                        <p style={{ color: 'red' }}>Ingrese Nombre y Apellido</p>
                    )
                }
                <input className='inputs' style={{ marginBottom: "20px" }} type='email' placeholder='Correo Electronico' {...register("email", { required: true, pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ })} />
                {errors.email?.message && (
                    <small>{errors.email.message}</small>
                )}
                <input className='inputs' style={{ marginBottom: "20px" }} type='phone' placeholder='Celular (+57) xxx xxx xxxx' {...register("telefono", {required:true,})} />

                <button className='enviar btn btn-primary btn-sm' type='submit' style={{ marginLeft: '0px',marginTop: '0px',width: "100%",background: '#b191dc' }}>Finalizar</button>
            </form>
        </div>
    )
}

export default FinalizarCompra
