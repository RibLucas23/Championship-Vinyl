// React
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// Material UI
import { Button } from '@mui/material'
// Components
import Cart from './Cart'
import RecomendadosContainer from '../Recomendados/RecomendadosContainer'
// Context
import { Context } from '../Context/ContextProvider'
// CSS
import './carrito.css'


export default function CartContainer() {
    let { carrito, clear, totalDeDinero } = useContext(Context)
    //use Navigate
    const navigate = useNavigate()
    useEffect(() => {
        if (!carrito.length > 0) {
            navigate("/")
        }
    },);
    return (

        <>
            {/* Seguir comprando */}
            <div className='itemDetail_top'>
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

                <div className='carritoEntero'>
                    <div className='bordeTuCarro'>
                        <h3 className='bordeTCNaranja'>Tu carro</h3>
                    </div>

                    <div className='tabla__carrito'>

                        <p className='tabla__product'>Product</p>
                        <p className='tabla__price'>Price</p>
                        <p className='tabla__quantity'>Quantity</p>
                        <p className='tabla__total'>Total</p>
                    </div>

                    {/* MAPEO EL CARRITO */}
                    <div className='itemsCarritoCompleto'>
                        {carrito.map(item => (
                            <Cart key={item.id} item={item}
                            />
                        ))}
                    </div>

                    <div className='bordeTuCarro'>
                    </div>
                    {/* BOTONERA CARRITO*/}

                    <div className='botoneraCarrito'>
                        {/* total dinero */}
                        <div className='totalDinero'>
                            <h3>Total:
                                <span> </span>
                                <span className='carritoTotalDinero'>
                                    ${totalDeDinero}
                                </span>
                            </h3>
                        </div>

                        <div className='botonesCarrito'>

                            {/* terminar compra  */}
                            <Link to="/cart/payMethod" className='link'>
                                <button className='carritoBtnComprar'>
                                    <b>
                                        Comprar
                                    </b>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}