// React
import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Components
import RecomendadosList from './RecomendadosList';
// Firebase
import { getFirestore, getDocs, collection, query } from 'firebase/firestore'

//aca voy a traer los datos(productos) de la base de datos
export default function RecomendadosContainer() {

    // CREO LOS ESTADOS 
    const [loading, setLoading] = useState(true)

    const [itemsRecomendados, setItemsRecomendados] = useState([]);
    const { id } = useParams()


    useEffect(() => {
        // accedo a la db
        const db = getFirestore();
        const productosRef = query(collection(db, 'Discos'));

        getDocs(productosRef).then(res => {
            const itemsCompletos = res.docs.map(item => ({ id: item.id, ...item.data() }))
            setItemsRecomendados(itemsCompletos.filter(item => item.top5 === true))
        })

            .catch(error => console.log(error))

    }, [id])




    return (
        <>
            <RecomendadosList productos={itemsRecomendados} />
        </>
    )
}
