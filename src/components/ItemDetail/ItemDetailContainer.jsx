// React
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// Material UI
import SideBar from '../SideBar/SideBar'
// Components
import ItemDetail from './ItemDetail'
import Loading from '../Utils/Loading';
// Firebase
import { getFirestore, getDocs, collection, query } from 'firebase/firestore'


export default function ItemDetailContainer() {

    // CREO LOS ESTADOS
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
        setLoading(true)

        //ACCEDO A LA BASE DE DATOS
        const db = getFirestore();
        const productosRef = query(collection(db, 'Discos'));

        //TRAIGO EL OBJETO POR SU ID
        getDocs(productosRef).then(res => {
            const item = res.docs.find(item => item.id === id)
            setProducto({ id: item.id, ...item.data() })
        })

            // Catch Error
            .catch(error => console.log(error))
            //cuando termina de cargar, se cambia el estado de loading a false
            .finally(() => setLoading(false))
    }, [id])


    return (
        <>
            {loading ? (
                <div className='cargando'>
                    <Loading />
                    <h1>Cargando el producto...</h1>
                </div>) : (<>
                    <div className='desktop__itemDetail'>
                        <SideBar />
                        <ItemDetail item={producto} />
                    </div>

                    <div className='movil__itemDetail'>
                        <ItemDetail item={producto} />
                    </div>
                </>)
            }
        </>
    )
}