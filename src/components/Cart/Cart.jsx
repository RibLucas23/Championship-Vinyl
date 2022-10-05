
import React, { useContext, useState } from "react";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ItemCount from '../ItemCount/ItemCount'
import { Context } from "../Context/ContextProvider";
import './carrito.css'
import { Card } from "@mui/material";


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




















                {/* <div className="itemCarritoDiv">
                    <h5 className="itemCarritoTitulo" >{item.item.nombreDisco} </h5>
                    <div className="itemCarritoImagen">
                        <img className="imagenCarrito" src={item.item.imagen} alt="" />
                    </div>
                </div>
                <div className="itemCarritoInfo">
                    <p>precio unidad: ${item.item.precio}</p>
                    <p>cantidad de unidades {item.item.cantProduc}</p>
                    <p>Precio total: ${item.item.precio}</p>
                </div>
                <span className="itemCarritoQuitar"
                    onClick={() => {
                        removeItem(item.item.id)
                    }} >
                    Quitar

                </span> */}


            </Card >
        </>
    )
}