import { Grid } from '@mui/material'
import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import SideBar from '../SideBar/SideBar'
import './itemDetail.css'
export default function ItemDetail({ item }) {

    const [cantProdCarro, setCantProdCarro] = useState(0);
    const onAdd = (cantidadProducto) => {
        setCantProdCarro(cantidadProducto)
    }
    return (
        <Grid container spacing={2} >
            <Grid item md={3}>
                <SideBar />

            </Grid>
            <Grid item md={9} className="index_grid_itemListContainer">
                <Grid container spacing={2} className='itemDetail'>
                    <Grid item lg={5} className='item__img__box'>
                        <div>
                            <img src={item.imagen} alt={item.artista} className="item__img" />
                        </div>

                    </Grid>
                    <Grid item lg={7} >
                        <h2>{item.nombreDisco} </h2>
                        <div className='itemDetailBox'>
                            <p>Artist: {item.artista}.</p>
                            <p>Year: {item.año}.</p>
                            <p>Genre:{item.genero}.</p>
                            <p>Company: {item.discografica}.</p>
                            <p>Dimensions:  {item.tamaño}.</p>
                            <p>Bonus: {item.bonus}.</p>
                            <p>Discs: {item.cantidadDiscos}.</p>
                            <p>Lenguage: {item.idioma} .</p>
                        </div>
                        <div>
                            <ItemCount onAdd={onAdd} item={item} />

                        </div>
                    </Grid>
                </Grid>
                <div className='titulos related'>
                    <div className='naranja'>
                    </div>
                    <h5>Related</h5>
                </div>
            </Grid>

        </Grid>
    )
}
