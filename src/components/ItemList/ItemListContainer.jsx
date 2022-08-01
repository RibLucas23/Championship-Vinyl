import React from 'react'
import { Grid } from '@mui/material'

import { getFirestore, getDocs, collection, query } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loading from '../Utils/Loading';
import './itemList.css'

//aca voy a traer los datos(productos) de la base de datos
export default function ItemListContainer() {

    // CREO LOS ESTADOS 
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { id } = useParams()
    const [itemsPopular, setItemsPopular] = useState([]);
    const [itemsGenero, setItemsGenero] = useState([]);
    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const productosRef = query(collection(db, 'Discos'));
        getDocs(productosRef).then(res => {
            const itemsCompletos = res.docs.map(item => ({ id: item.id, ...item.data() }))
            // Cuando no hay ninguna id espesifica, se muestran todos los productos
            if (id === undefined) {
                setItems(itemsCompletos)
                // console.log(itemsCompletos)
            }
            // // Si hay una id espesifica, se muestra solo el/los productos espesifico
            //filtramos por genero o artista
            else if (id !== undefined) {

                setItemsGenero(itemsCompletos.filter(item => item.genero === id.toLowerCase()))

                setItems(itemsCompletos.filter(item => item.artista === id))

                setItemsPopular(itemsCompletos.filter(item => item.popular === true))


            }


        })

            .catch(error => console.log(error))
            //cuando termina de cargar, se cambia el estado de loading a false
            .finally(() => setLoading(false))


    }, [id])



    return (
        <>
            {loading ? (
                <div className='cargando'>
                    <Loading />
                    <h1>Cargando los productos...</h1>
                </div>
            ) : (

                <div >
                    <Grid container spacing={1} className='itemListContainer'>
                        {(id === undefined) ? (
                            <ItemList productos={items} />
                        ) : (id === "Popular") ? (

                            <ItemList productos={itemsPopular} />
                        ) : (<>
                            {items.length > 0 ? (

                                <ItemList productos={items} />
                            ) : (<ItemList productos={itemsGenero} />)
                            }

                        </>)}
                    </Grid>
                </div>


            )
            }
        </>
    )
}


// {(items.length > 0) ? (
//     <ItemList productos={items} />
// ) : (
//     <ItemList productos={items3} />
// )}