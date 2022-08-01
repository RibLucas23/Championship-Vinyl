import React from 'react'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
export default function Carrito({ total }) {

    return (



        <div className='carrito'>
            <div className='cart'>
                <ShoppingCartRoundedIcon className='cart_icon' />
                <span className='cart__total'>
                    {total}
                </span>
            </div>
        </div>
    )
}
