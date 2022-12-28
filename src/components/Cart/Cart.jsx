// React
import React, { useContext, useState } from "react";
// Material UI
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Card } from "@mui/material";
// Components
import ItemCount from '../ItemCount/ItemCount'
// Context
import { Context } from "../Context/ContextProvider";
// CSS
import './carrito.css'


export default function CartProductos(item) {
    let { removeItem } = useContext(Context)
    const [cantProdCarro, setCantProdCarro] = useState(0);
    const onAdd = (cantidadProducto) => {
        setCantProdCarro(cantidadProducto)

    }


    return (
        <>
            <Card elevation={5} className="itemCarrito" >
                <div className="itemCarrito_titulos">
                    <h3>
                        {item.item.nombreDisco}
                    </h3>
                    <h5>
                        {item.item.artista}
                    </h5>
                    <ItemCount stock={item.stock} onAdd={onAdd} item={item} />
                </div>

                <div className="itemCarrito_mid">
                    <h2 className="itemCarrito_precio">
                        {item.item.precioTotal ? (
                            <>
                                ${item.item.precioTotal}
                            </>
                        ) : (
                            <>
                                ${item.item.precio}
                            </>
                        )}
                    </h2>
                    <span className="itemCarritoQuitar"
                        onClick={() => {
                            removeItem(item.item.id)
                        }} >
                        <RemoveShoppingCartIcon /> Quitar
                    </span>
                </div>

                <div className="itemCarrito_derecha" >
                    <img className="itemCarrito_img" src={item.item.imagen} alt="" />
                </div>
            </Card >



            {/* VISTA DESKTOP */}
            <Card elevation={5} className="itemCarrito__desktop" >
                {/* imagen y titulos */}
                <div className="itemCarrito_derecha" >
                    <img className="itemCarrito_img" src={item.item.imagen} alt="" />
                    <div className="itemCarrito_titulos">
                        <h3>
                            {item.item.nombreDisco}
                        </h3>
                        <h5>
                            {item.item.artista}
                        </h5>
                        <span className="itemCarritoQuitar"
                            onClick={() => {
                                removeItem(item.item.id)
                            }} >
                            <RemoveShoppingCartIcon /> Quitar
                        </span>
                    </div>
                </div>

                {/* precio por unidad */}
                <div className="itemCarrito_mid">
                    <h2 className="itemCarrito_precio">
                        ${item.item.precio}
                    </h2>
                </div>

                {/* contador  */}
                <div className="itemCarrito_mid">
                    <ItemCount stock={item.stock} onAdd={onAdd} item={item} />
                </div>

                {/*precio total */}
                <h2 className="itemCarrito_precio">
                    {item.item.precioTotal ? (
                        <>
                            ${item.item.precioTotal}
                        </>
                    ) : (
                        <>
                            ${item.item.precio}
                        </>
                    )}
                </h2>


            </Card>

        </>
    )
}