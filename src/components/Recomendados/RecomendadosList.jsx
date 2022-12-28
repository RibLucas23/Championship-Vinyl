// React
import React from 'react'
// Components
import Recomendados from './Recomendados'
// CSS
import './recomendados.css'
export default function RecomendadosList({ productos }) {
    return (
        <div className="recomendados__wrapper">
            {productos.map(producto => (
                <div key={producto.id} className="recomendados__container">
                    <Recomendados item={producto} />
                </div>
            ))}
        </div>
    )
}
