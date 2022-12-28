// React
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

// Context
import { Context } from '../Context/ContextProvider'
// CSS

export default function CompraExitosa() {
    let { ordenCompra } = useContext(Context)
    //use Navigate
    const navigate = useNavigate()



    return (<>

        <div className="bordeTuCarro" id="PM__form__container">
            <div className="PM__form__container bordeTCNaranja ">
                <p className="PM__form__total  ">
                    Confirmación de compra
                </p>
            </div>
        </div>
        <div className='CE__container'>
            <h3>
                ¡Compra exitosa!
            </h3>
            <p className='CE__codCompra'>
                Tu código de compra es:
            </p>
            <p className='CE__ordCompra'>
                #{ordenCompra.id}
            </p>
            <p className='CE__email'>
                Te enviamos un e-mail a {ordenCompra.correoElectronico} para coordinar el envío
            </p>
            <Link to={"/"}>
                Volver al inicio
            </Link>
        </div>
    </>

    )
}
