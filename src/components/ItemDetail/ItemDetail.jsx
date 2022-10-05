import React, { useState, useContext } from 'react'
import { Context } from '../Context/ContextProvider';
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'
// material ui
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
export default function ItemDetail({ item }) {

    const { addToCart } = useContext(Context);

    const [selected, setSelected] = useState(false)
    const [infoCanciones, setInfoCanciones] = useState(true)
    function infoTracklist() {
        if (infoCanciones) {
            setInfoCanciones(false)
        } else {
            setInfoCanciones(true)
        }
    }
    function canciones() {
        setSelected(false)
    }
    function info() {
        setSelected(true)
    }

    const [cantProduc, setcantProduc] = useState(1);
    const onAdd = (cantProduc) => {
        setcantProduc(cantProduc)
    }

    return (
        <>
            {/* Tapa de disco y titulo */}
            <div className='itemDetail_top'>
                <h2>{item.nombreDisco} </h2>
                <div className='item__img'>
                    <img src={item.imagen} alt={item.artista} />
                    <span className='item_precio'> ${item.precio}</span>
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

                <button className='itemDetail_addBtn'
                    onClick={() => {
                        addToCart({ ...item, cantProduc })
                        onAdd(cantProduc)
                    }}> + Agregar al carro</button>
            </div>
        </>
    )
}
