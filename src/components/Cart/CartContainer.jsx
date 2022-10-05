import { Button, Container, Grid, Paper } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/ContextProvider'
import Cart from './Cart'
import './carrito.css'


export default function CartContainer() {
    let { carrito, clear, totalDeDinero } = useContext(Context)
    // console.log(carrito)

    return (
        <>
            {/* Si  hay productos mostra... */}

            {carrito.length > 0 ? (
                <>
                    {/* Seguir comprando */}
                    <div className='itemDetail_top'>
                        <div className='seguirComprando'>
                            <Link to='/'>
                                Seguir comprando
                            </Link>
                        </div>

                        <div className='carritoEntero'>
                            <div className='bordeTuCarro'>
                                <h5 className='bordeTCNaranja'>Tu carro</h5>
                            </div>



                            {/* MAPEO EL CARRITO */}
                            <div className='itemsCarritoCompleto'>
                                {carrito.map(item => (
                                    <Cart key={item.id} item={item}
                                    />
                                ))}
                            </div>
                            {/* BOTONERA CARRITO*/}

                            <div className='botoneraCarrito'>
                                {/* total dinero */}
                                <div className='totalDinero'>
                                    <h1>Total: $ {totalDeDinero} </h1>
                                </div>

                                <div className='botonesCarrito'>
                                    {/* clear  */}
                                    < Button variant="contained" color="error" onClick={() => { clear() }}>
                                        clear
                                    </Button >
                                    {/* terminar compra  */}
                                    <Link to="/cart/finish" className='link'>
                                        < Button variant="contained" color="success">
                                            Terminar compra
                                        </Button >
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </>
            ) : (
                <>
                    {/* Si no hay productos mostra... */}
                    <div className='btnCarritoInicio'>
                        <h1 className='h1'>No hay productos en el carrito</h1>
                        <Link to="/" className='link'>
                            <Button variant="contained" color="primary">
                                Ir al inicio
                            </Button>
                        </Link>
                    </div>
                </>
            )}


        </>
    )
}