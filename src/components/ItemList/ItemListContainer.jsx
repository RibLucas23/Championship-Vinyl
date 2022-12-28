// React
import React from 'react'
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// Material UI
import { Grid } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
// Components
import ItemList from './ItemList';
import Loading from '../Utils/Loading';
import SideBar from '../SideBar/SideBar'
// Firebase
import { getFirestore, getDocs, collection, query } from 'firebase/firestore'
// CSS
import './itemList.css'

//aca voy a traer los datos(productos) de la base de datos
export default function ItemListContainer() {

    // CREO LOS ESTADOS 
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { id } = useParams()
    const [itemsPopular, setItemsPopular] = useState([]);
    const [itemsGenero, setItemsGenero] = useState([]);
    const [itemsNovedades, setItemsNovedades] = useState([]);
    const [busqueda, setBusqueda] = useState([])
    const [busquedaResult, setBusquedaResult] = useState([])
    const [itemsColecciones, setItemsColecciones] = useState([])
    const [itemsRecomendados, setItemsRecomendados] = useState([])
    const [itemsTop5, setItemsTop5] = useState([]);
    const [selected, setSelected] = useState(true)

    useEffect(() => {
        setLoading(true)
        // accedo a la db
        const db = getFirestore();
        const productosRef = query(collection(db, 'Discos'));

        getDocs(productosRef).then(res => {
            const itemsCompletos = res.docs.map(item => ({ id: item.id, ...item.data() }))

            // Cuando no hay ninguna id específico, se muestran todos los productos
            if (id === undefined) {
                setItems(itemsCompletos)
                setItemsTop5(itemsCompletos.filter(item => item.top5 === true))
                setItemsPopular(itemsCompletos.filter(item => item.popular === true))
                setItemsNovedades(itemsCompletos.filter(item => item.new === true))
            }

            // // Si hay una id específico, se muestra solo el/los productos específicos

            //filtramos por genero o artista
            else if (id !== undefined) {
                setItemsGenero(itemsCompletos.filter(item => item.genero === id))
                setItems(itemsCompletos.filter(item => item.artista === id))
                setItemsPopular(itemsCompletos.filter(item => item.popular === true))
                setItemsColecciones(itemsCompletos.filter(item => item.colecciones === true))
                setItemsRecomendados(itemsCompletos.filter(item => item.Recomendados === true))
            }
        })

            // Catch Error
            .catch(error => console.log(error))

            //cuando termina de cargar, se cambia el estado de loading a false
            .finally(() => setLoading(false))

    }, [id])

    //**BUSCADOR**
    const handleChange = e => {
        if (!e.target.value) {
            //si no se esta buscando se setea vacio
            setBusqueda()
        }
        //cuando se esta buscando algo se setea con el valor del input y se ejecuta la funcion de filtrar con el input como parametro
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    // Funcion Filtrar. 
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = items.filter((elemento) => {
            if (
                elemento.genero.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.artista.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.id.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.año.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
            return resultadosBusqueda
        })
        //se setea la busqueda con los resultados obtenidos
        setBusquedaResult(resultadosBusqueda);
    }

    //botonera novedades y popular 
    // Setea cual es la seleccionada
    function novedades() {
        setSelected(false)
    }
    function popular() {
        setSelected(true)
    }

    return (
        <>
            {/*############################   pantalla de carga mientras se reciben los productos de la db  ############################### */}
            {loading ? (
                <div className='cargando'>
                    <Loading />
                    <h1>Cargando los productos...</h1>
                </div>
            ) :

                // ############################ vista default del menu  ############################
                (<>
                    {/* BUSCADOR MOVIL */}
                    <div className='div_buscador movil'>
                        <input onChange={handleChange}
                            className='buscador'
                            type="text"
                            placeholder='Search'
                        /> <span className='buscador_icon'>
                            <SearchIcon />
                        </span>
                    </div>
                    <div className='etiquetas'>

                        {/* generos */}
                        <Link to='/s'>
                            <button className="etiquetas_secciones ">
                                <p>Géneros</p>
                            </button>
                        </Link>
                        {/* colecciones */}
                        <Link to='/colecciones'>
                            <button className="etiquetas_secciones ">
                                <p>Colecciones</p>
                            </button>
                        </Link>
                        {/* Recomendados */}
                        <Link to='/recomendados'>
                            <button className="etiquetas_secciones ">
                                <p>Recomendados</p>
                            </button>
                        </Link>
                        {/* Clásicos */}
                        <Link to='/'>
                            <button className="etiquetas_secciones ">
                                <p>Clásicos</p>
                            </button>
                        </Link>
                    </div>

                    {/* BUSCADOR DESKTOP */}
                    <div className='itemList__wrapper'>
                        <div className='itemList__sideBar'>
                            {/* buscador desktop */}
                            <div className='div_buscador'>
                                <input onChange={handleChange}
                                    className='buscador__desktop'
                                    type="text"
                                    placeholder='Search'
                                /> <span className='buscador_icon'>
                                    <SearchIcon />
                                </span>
                            </div>
                            {/* Side bar */}
                            <SideBar />
                        </div>

                        {/*############################ vista con BUSQUEDA ############################*/}
                        {busqueda.length > 0 ? (
                            <>
                                <div>
                                    <div className='itemListContainer' >
                                        <div className='bordeInferior bordeInferior_naranja'>
                                            <h3>Resultados de la busqueda: </h3>
                                        </div>
                                    </div>
                                    <ItemList productos={busquedaResult} />
                                </div>

                            </>
                        ) :

                            //############################ Vista por ID ############################
                            (<>
                                {id === "colecciones" ? (
                                    <>
                                        <div>
                                            <div className='itemListContainer' >
                                                <div className='bordeInferior bordeInferior_naranja'>
                                                    <h3>Collecciones</h3>
                                                </div>
                                            </div>
                                            <ItemList productos={itemsColecciones} />
                                        </div>

                                    </>
                                ) :
                                    id === "recomendados" ? (
                                        <>
                                            <div>
                                                <div className='itemListContainer' >
                                                    <div className='bordeInferior bordeInferior_naranja'>
                                                        <h3>Recomendados</h3>
                                                    </div>
                                                </div>
                                                <ItemList productos={itemsRecomendados} />
                                            </div>
                                        </>
                                    ) : id !== undefined ? (
                                        <>
                                            <div>
                                                <div className='itemListContainer' >
                                                    <div className='bordeInferior bordeInferior_naranja'>
                                                        <h3> {id}</h3>
                                                    </div>
                                                </div>
                                                <ItemList productos={itemsGenero} />
                                            </div>
                                        </>
                                    ) :

                                        //############################ Vista DEFAULT de los productos ############################
                                        (
                                            <>
                                                <div>
                                                    <div className='itemListContainer' >
                                                        <div className='bordeInferior bordeInferior_naranja'>
                                                            <h3>Top 5</h3>
                                                        </div>
                                                    </div>
                                                    <ItemList productos={itemsTop5} />

                                                    {/*###### MENU index MOVIL  ######*/}
                                                    <div className='movil_index'>
                                                        <div className='itemListContainer' >
                                                            <div className='bordeInferior_azul bordeInferior '>
                                                                <h3>Novedades</h3>
                                                            </div>
                                                        </div>
                                                        <ItemList productos={itemsNovedades} />

                                                        <div className='itemListContainer' >
                                                            <div className='bordeInferior_naranja bordeInferior'>
                                                                <h3>Popular</h3>
                                                            </div>
                                                        </div>
                                                        <ItemList productos={itemsPopular} />
                                                    </div>


                                                    {/*###### MENU index DESKTOP ######*/}
                                                    <div className='desktop__index'>
                                                        <div className='desktop__index__btnsContainer'>

                                                            <div className={(!selected) ? ("btn_negro") : ("btn_blanco")}
                                                                onClick={novedades}>
                                                                <h3>Novedades</h3>
                                                            </div>
                                                            <div className={(!selected) ? ("btn_blanco") : ("btn_negro")}
                                                                onClick={popular}>
                                                                <h3>Popular</h3>
                                                            </div>
                                                        </div>

                                                        <div>
                                                            {!selected ? (<ItemList productos={itemsNovedades} />) : (<ItemList productos={itemsPopular} />)}

                                                        </div>
                                                    </div>


                                                </div>
                                            </>
                                        )}
                            </>
                            )}
                    </div>

                </>
                )
            }


        </>
    )
}

