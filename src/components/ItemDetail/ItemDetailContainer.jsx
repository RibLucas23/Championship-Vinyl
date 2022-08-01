import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import Loading from '../Utils/Loading';
import { getFirestore, getDocs, collection, query } from 'firebase/firestore'



export default function ItemDetailContainer() {

    // CREO LOS ESTADOS
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [producto, setProducto] = useState([])
    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const productosRef = query(collection(db, 'Discos'));
        getDocs(productosRef).then(res => {
            const item = res.docs.find(item => item.id === id)
            setProducto({ id: item.id, ...item.data() })

        })
            .catch(error => console.log(error))
            //cuando termina de cargar, se cambia el estado de loading a false
            .finally(() => setLoading(false))
    }, [id])


    return (
        <>
            {loading ? (
                <div className='cargando'>
                    <h1>Cargando el producto...</h1>
                    <Loading />
                </div>) : (
                <ItemDetail item={producto} />
            )
            }
        </>
    )
}