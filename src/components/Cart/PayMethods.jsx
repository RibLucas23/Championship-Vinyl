// React
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
// Material UI
import { Button } from '@mui/material'
// Components
import visaImg from '../../imgs/metodos de pago/Group 21.png'
import paypalImg from '../../imgs/metodos de pago/Group 20.png'
import mastercardImg from '../../imgs/metodos de pago/Group 33.png'
import tarjetaCredito from '../../imgs/metodos de pago/Visa.png'
import RecomendadosContainer from '../Recomendados/RecomendadosContainer'
// Context
import { Context } from '../Context/ContextProvider'
// CSS
import './carrito.css'




export default function PayMethods() {
    let { carrito } = useContext(Context)
    const [selectPayMethod, setSelectPayMethod] = useState();

    //use Navigate
    const navigate = useNavigate()
    useEffect(() => {
        if (!carrito.length > 0) {
            navigate("/")
        }
    },);

    return (
        <>
            <div className='payMethods__wrapper'>
                <div className='cart__recomendados'>
                    <div className='bordeTuCarro'>
                        <h3 className='bordeTCrecomendados'>Recomendados</h3>
                    </div>
                    <RecomendadosContainer />
                </div>
                <div className='payMethods'>
                    <div className='bordeTuCarro'>
                        <h3 className='bordeTCNaranja'>Metodos de pago</h3>
                    </div>

                    {/* tarjeta visa */}
                    <div className='paymethods_tc_container'>
                        <img src={visaImg} alt="pagar con visa" />
                        <h4><span className='tablet__tc'>**** **** </span>**** 3507</h4>
                        {/* select */}
                        <button className={selectPayMethod === "visa" ? "payMethods_btn payMethods_btn-selected" : "payMethods_btn"}
                            onClick={e => setSelectPayMethod("visa")}
                        >
                        </button>
                    </div>

                    {/* tarjeta Paypal */}
                    <div className='paymethods_tc_container'>
                        <img src={paypalImg} alt="pagar con Paypal" />
                        {/* select */}
                        <button className={selectPayMethod === "paypal" ? "payMethods_btn payMethods_btn-selected" : "payMethods_btn"}
                            onClick={e => setSelectPayMethod("paypal")}
                        >
                        </button>
                    </div>

                    {/* tarjeta Mastercard */}
                    <div className='paymethods_tc_container'>

                        <img src={mastercardImg} alt="pagar con Mastercard" />
                        <h4><span className='tablet__tc'>**** **** </span>**** 9877</h4>

                        {/* select */}
                        <button className={selectPayMethod === "mastercard" ? "payMethods_btn payMethods_btn-selected" : "payMethods_btn"}
                            onClick={e => setSelectPayMethod("mastercard")}
                        >
                        </button>
                    </div>

                    {/* ejemplo de tarjeta */}
                    <div className='tc_example'>
                        <img src={tarjetaCredito} alt="tarjeta de credito de ejemplo" />
                    </div>

                    {/* boton para terminar la compra */}
                    <Link to="/cart/finish" className='link'>
                        <div className='itemDetail_addBtn_container'>
                            <button className='itemDetail_addBtn'>
                                <b>
                                    Continuar compra.
                                </b>
                            </button>
                        </div>
                    </Link>
                </div>
            </div>


        </>

    )
}
