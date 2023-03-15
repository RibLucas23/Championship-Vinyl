// React
import React, { useState, useContext } from "react";
// Material UI
import { IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// Components
// Context
import { Context } from "../Context/ContextProvider";
// CSS
import './itemCount.css'



export default function ItemCount({ onAdd, item, carrito }) {
    let { addToCart, removeOneItem } = useContext(Context)

    const [cantProduc, setCantProduc] = useState(item.item.cantProduc);

    const suma = () => {
        if (cantProduc < 100) {
            setCantProduc(cantProduc + 1)
            addToCart(item.item)
            console.log(item.item.cantProduc)
        }

    }
    const resta = () => {
        if (cantProduc > 1) {
            removeOneItem(item.item)
            setCantProduc(cantProduc - 1)
        }

    }



    return (
        <>




            <div className="itemCount">

                <IconButton className="itemCount__btn"
                    onClick={resta}>
                    <RemoveIcon fontSize="medium" />
                </IconButton>

                <div className="itemCount__num">
                    {cantProduc}
                </div>


                <IconButton className="itemCount__btn"
                    onClick={suma}>
                    <AddIcon fontSize="medium" />
                </IconButton>
            </div>


        </>
    )
}