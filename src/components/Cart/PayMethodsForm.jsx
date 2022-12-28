// React
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
// Material UI
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
// Components
import RecomendadosContainer from '../Recomendados/RecomendadosContainer'
// Context
import { Context } from '../Context/ContextProvider'
// CSS
import "./carrito.css";
//firebase
import { addDoc, collection, getFirestore } from "firebase/firestore";


export default function AgregarProductos() {
    //context
    let { carrito, totalDeDinero, setOrdenCompra, clear } = useContext(Context)
    //use Navigate
    const navigate = useNavigate()

    //Base de datos (database)
    const db = getFirestore();
    //creo los estados (datos del producto nuevo)
    const [nombre, setNombre] = useState("");
    const [nTarjeta, setNTarjeta] = useState("");
    const [fVencimiento, setFVencimiento] = useState("");
    const [CVV, setCVV] = useState("");
    const [correoElectronico, setCorreoElectronico] = useState("");
    const [telefonoContact, setTelefonoContact] = useState("");

    useEffect(() => {
        if (!carrito.length > 0) {
            navigate("/")
        }
    },);

    //extraigo del carrito solo datos importantes
    let productosCarrito = []
    productosCarrito = carrito.map(producto => (
        {
            artista: producto.artista,
            disco: producto.nombreDisco,
            cantidad: producto.cantProduc,
            precioUnidad: producto.precio
        }
    ))

    //creo una funcion para agregar la orden nueva
    function agregarOrdenNueva() {
        //si esta vacio algun campo no se puede agregar
        if (nombre === '' || nTarjeta === '' || fVencimiento === '' || CVV === '' || correoElectronico === '' || telefonoContact === '') {
            alert('Por favor completa todos los campos')
        } else {
            //Si todos los campos estan completos, se agrega la orden
            const id = Math.random().toString(36).substr(2, 18)
            //creo variable de la  orden nueva
            let nuevaOrden = { nombre, nTarjeta, correoElectronico, telefonoContact, productosCarrito, totalDeDinero, id };
            const ordenesCollection = collection(db, 'ordenes');
            addDoc(ordenesCollection, nuevaOrden).then(() => {
                setOrdenCompra(nuevaOrden)
                clear()
                navigate("/compraExitosa")

            });

        }
    }

    return (
        <>
            <div className="PM__desktop__container">


                <div className='seguirComprando'>
                    <Link to='/'>
                        Seguir comprando
                    </Link>
                    <div className='cart__recomendados'>
                        <div className='bordeTuCarro'>
                            <h3 className='bordeTCrecomendados'>Recomendados</h3>
                        </div>
                        <RecomendadosContainer />
                    </div>
                </div>

                <div className="PM__desktop__form">
                    <div className="bordeTuCarro" id="PM__form__container">
                        <div className="PM__form__container bordeTCNaranja ">
                            <h3 className="PM__form__total  ">Total:
                                <span className='carritoTotalDinero '> $ {totalDeDinero} </span>
                            </h3>
                        </div>
                    </div>
                    <div className="PM__form">
                        {/*NOMBRE COMPLETO  */}
                        <p> Nombre completo:</p>
                        <TextField id="outlined-basic" className="PM__form__textField" label="Nombre" variant="outlined"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value)
                            }} />

                        {/*N° DE LA TARJETA  */}
                        <p> N° de la tarjeta:</p>
                        <TextField id="outlined-basic" className="PM__form__textField" label="N° de la tarjeta" variant="outlined"
                            value={nTarjeta}
                            onChange={(e) => {
                                setNTarjeta(e.target.value)
                            }} />

                        <div className="PM__form__vencimiento__container">
                            {/*FECHA DE VENCIMIENTO  */}
                            <div id="PM__form__vencimiento">
                                <p> Fecha de vencimiento: </p>
                                <TextField id="outlined-basic" className="PM__form__textField" label="--/--" variant="outlined"
                                    value={fVencimiento}
                                    onChange={(e) => {
                                        setFVencimiento(e.target.value)
                                    }} />
                            </div>

                            {/*CVV */}
                            <div id="PM__form__cvv">
                                <p> CVV: </p>
                                <TextField id="outlined-basic" className="PM__form__textField" label="CVV" variant="outlined"
                                    value={CVV}
                                    onChange={(e) => {
                                        setCVV(e.target.value)
                                    }} />
                            </div>
                        </div>

                        {/*CORREO ELECTRONICO DE LA FACTURACION */}
                        <p> Correo electrónico de la facturación: </p>
                        <TextField id="outlined-basic" className="PM__form__textField" label="Correo electrónico de la facturació" variant="outlined"
                            value={correoElectronico}
                            onChange={(e) => {
                                setCorreoElectronico(e.target.value)
                            }} />

                        {/*TELEFONO DE CONTACTO */}
                        <p> Teléfono de contacto: </p>
                        <TextField id="outlined-basic" className="PM__form__textField" label="Teléfono de contacto" variant="outlined"
                            value={telefonoContact}
                            onChange={(e) => {
                                setTelefonoContact(e.target.value)
                            }} />
                    </div>


                    {/* IMAGEN TARJETA */}
                    <div className="PM__tc__container">
                        <div className="PM__tc">
                            <span className="PM__tc__nTarjeta"> {nTarjeta} </span>
                            <span className="PM__tc__nombre"> {nombre} </span>
                            <span className="PM__tc__fVencimiento"> {fVencimiento} </span>
                        </div>
                    </div>

                    {/* CONFIRMAR COMPRA */}
                    <div className="PM__btn">
                        <Button variant="contained" color="success" className="carritoBtnComprar" onClick={() => { agregarOrdenNueva() }}> Terminar compra </Button>
                    </div>
                </div>
            </div>
        </>
    )
}