import React, { useState, useContext } from "react";
import { Context } from "../Context/ContextProvider";
import { IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './itemCount.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
export default function ItemCount({ onAdd, item, carrito }) {
    let { addToCart } = useContext(Context)

    const [cantProduc, setCantProduc] = useState(0);

    const suma = () => {
        if (cantProduc < 100) {
            setCantProduc(cantProduc + 1)
        }

    }
    const resta = () => {
        if (cantProduc > 0) {
            setCantProduc(cantProduc - 1)
        }

    }



    return (
        <>
            <div className="recuadro">

                <div className="itemCount">
                    <div>
                        <p>Quantity</p>
                    </div>
                    <div className="itemCount__btns">

                        <IconButton className="itemCount__btn"
                            onClick={resta}>
                            <RemoveIcon fontSize="large" />
                        </IconButton>

                        <div className="itemCount__num">
                            {cantProduc}
                        </div>


                        <IconButton className="itemCount__btn"
                            onClick={suma}>
                            <AddIcon fontSize="large" />
                        </IconButton>
                    </div>

                </div>
                <div className="itemCount__precio">
                    <h2>${item.precio}</h2>

                </div>
            </div>
            <div className='itemCount__comprar'>
                <button className="itemCount__comprar__btn"
                    onClick={() => {
                        addToCart({ ...item, cantProduc })
                        onAdd(cantProduc)
                        console.log(carrito)
                    }}>
                    < ShoppingCartOutlinedIcon />
                    <h2>
                        + Add to cart
                    </h2>
                </button>

            </div>
        </>
    )
}