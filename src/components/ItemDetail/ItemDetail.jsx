// React
import React, { useState, useContext } from 'react'
// Material UI
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
// Context
import { Context } from '../Context/ContextProvider';
// CSS
import './itemDetail.css'

export default function ItemDetail({ item }) {
    // Context
    const { addToCart } = useContext(Context);

    // Estados
    const [selected, setSelected] = useState(true)
    const [infoCanciones, setInfoCanciones] = useState(true)

    //Funcion que setea si se esta viendo el tracklist  (esconde o muestra)
    function infoTracklist() {
        if (infoCanciones) {
            setInfoCanciones(false)
        } else {
            setInfoCanciones(true)
        }
    }
    //configuro los botones  para seleccionar la que quiero ver y ocultar la que no
    function canciones() {
        setSelected(false)
    }
    function info() {
        setSelected(true)
    }

    //seteo un minimo de 1 producto al momento de querer agregarlo al carrito
    const [cantProduc, setCantProduc] = useState(1);
    const onAdd = (cantProduc) => {
        setCantProduc(cantProduc)
    }

    //CONTADOR PARA AGREGAR O QUITAR PRODUCTO
    const suma = () => {
        if (cantProduc < 100) {
            setCantProduc(cantProduc + 1)
        }
    }
    const resta = () => {
        if (cantProduc > 1) {
            setCantProduc(cantProduc - 1)
        }
    }
    return (
        <>
            {/*******  VERSION MOVIL ****** */}
            <div className='movil__itemDetail'>
                {/* Tapa de disco y titulo */}
                <div className='itemDetail_top'>
                    <div className='item__title'>
                        <h2>{item.nombreDisco} </h2>
                        <AddShoppingCartIcon className='item__title__cart'
                            onClick={() => {
                                addToCart({ ...item, cantProduc })
                                onAdd(cantProduc)
                            }} />
                    </div>
                    <div className='item__img'>
                        <img src={item.imagen} alt={item.artista} />
                        <span className='item_precio'>
                            <b>
                                ${item.precio}
                            </b>
                        </span>
                    </div>

                    <div className='item_imgs'>

                    </div>

                    {/* INFO DISCO  */}
                    <div className='itemDetailBox'>
                        {(selected) ? (<>
                            <p><b>Artist: </b> {item.artista}.</p>
                            <p><b>Year:</b> {item.año}.</p>
                            <p><b>Genre:</b>{item.genero}.</p>
                            <p><b>Company:</b> {item.discografica}.</p>
                            <p><b>Dimensions:</b>  {item.tamaño}.</p>
                            <p><b>Bonus:</b> {item.bonus}.</p>
                            <p><b>Discs:</b> {item.cantidadDiscos}.</p>
                            <p><b>Lenguage:</b> {item.idioma} .</p>
                        </>
                            // TRACKLIST
                        ) : (<>
                            <div className='itemDetail__tracklist'>

                                {/* Mapeo las canciones  */}
                                {item.canciones.map((cancion, index) =>
                                    (index < 12) ? (
                                        <p className={(infoCanciones) ? ("visible") : ("oculto")}
                                            key={index}>
                                            {index + 1}. {cancion}
                                        </p>
                                    ) : (
                                        <p className={(infoCanciones) ? ("oculto") : ("visible")}
                                            key={index}>
                                            {index + 1}. {cancion}
                                        </p>
                                    )
                                )}
                                {/* paginacion tracklist  */}

                                {(infoCanciones) ? (
                                    <span onClick={infoTracklist}> < NavigateNextIcon /> </span>
                                ) : (<span onClick={infoTracklist}> < NavigateBeforeIcon /> </span>)}


                            </div>
                        </>)}
                    </div>
                    {/* BOTONES ITEMDETAIL */}
                    <div className='itemDetail_btns'>
                        <div className={(selected) ? ("itemDetail_btns_on") : ("itemDetail_btns_off")}
                            onClick={info}>
                            <p>Informacion</p>
                        </div>
                        <div className={(selected) ? ("itemDetail_btns_off") : ("itemDetail_btns_on")}
                            onClick={canciones}>
                            <p>Tracklist</p>
                        </div>
                    </div>

                    <div className='itemDetail_addBtn_container'>
                        <button className='itemDetail_addBtn'
                            onClick={() => {
                                addToCart({ ...item, cantProduc })
                                onAdd(cantProduc)
                            }}>
                            <b>
                                + Agregar al carro
                            </b>
                        </button>
                    </div>
                </div>
            </div>

            {/*******  VERSION DESKTOP ****** */}
            <div className='desktop__itemDetail'>
                <div className='item__img'>
                    <img src={item.imagen} alt={item.artista} />
                </div>
                <div className='itemDetail__Container'>
                    <h2> {item.nombreDisco} </h2>
                    {/* BOTONES ITEMDETAIL */}
                    <div className='itemDetail_btns'>
                        <div className={(selected) ? ("itemDetail_btns_on") : ("itemDetail_btns_off")}
                            onClick={info}>
                            <p>Informacion</p>
                        </div>
                        <div className={(selected) ? ("itemDetail_btns_off") : ("itemDetail_btns_on")}
                            onClick={canciones}>
                            <p>Tracklist</p>
                        </div>
                    </div>
                    {/* INFO DISCO  */}
                    <div className='itemDetailBox'>
                        {(selected) ? (<>
                            <p><b>Artist: </b> {item.artista}.</p>
                            <p><b>Year:</b> {item.año}.</p>
                            <p><b>Genre:</b>{item.genero}.</p>
                            <p><b>Company:</b> {item.discografica}.</p>
                            <p><b>Dimensions:</b>  {item.tamaño}.</p>
                            <p><b>Bonus:</b> {item.bonus}.</p>
                            <p><b>Discs:</b> {item.cantidadDiscos}.</p>
                            <p><b>Lenguage:</b> {item.idioma} .</p>
                        </>
                            // TRACKLIST
                        ) : (<>
                            <div className='itemDetail__tracklist'>

                                {/* Mapeo las canciones  */}
                                {item.canciones.map((cancion, index) =>

                                    <p className="visible"
                                        key={index}>
                                        {index + 1}. {cancion}
                                    </p>

                                )}
                            </div>
                        </>)}
                    </div>

                    {/* BOTONERA ITEM COUNT */}
                    <div className='itemCount__container '>
                        <span>Cantidad</span>
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
                        <span className='itemCount_precio '> {cantProduc > 1 ? (
                            <>
                                ${item.precio * cantProduc}
                            </>
                        ) : (
                            <>
                                ${item.precio}
                            </>
                        )}</span>
                    </div>
                    {/* BOTON COMPRAR */}
                    <button className='carritoBtnComprar'
                        onClick={() => {
                            addToCart({ ...item, cantProduc })
                            onAdd(cantProduc)
                        }}>
                        <b>
                            Comprar
                        </b>
                    </button>
                </div>
            </div>

        </>
    )
}
