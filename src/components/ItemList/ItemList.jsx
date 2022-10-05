import React from 'react'
import Item from './Item'
// import { Grid } from '@mui/material'


import './itemList.css'

function ItemList({ productos }) {
    // USANDO LOS PRODUCTOS QUE ME PASA ItemListContainer,  MAPEO Y LE PASO POR PARAMETROS A ITEM 
    return (
        <>

            <div className="itemList_wrapper">
                {productos.map(producto => (
                    <div key={producto.id} className="itemList_container">
                        <Item item={producto} />
                    </div>
                ))}
            </div>

            {/* {productos.map(producto => (
                <div key={producto.id} className="grid_itemList">
                    <Grid container spacing={1}>
                        <Grid item md={3} >
                            <Item item={producto} />
                        </Grid>
                    </Grid>
                </div>


            ))} */}




        </>

    )
}

export default ItemList