import { Grid } from '@mui/material'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import ItemListContainer from '../ItemList/ItemListContainer'
import './home.css'
import { Link, useParams } from 'react-router-dom'
import Buscador from '../Utils/Buscador'
export default function Index() {

    // const { id } = useParams()
    // const [btnBlanco, setBtnBlanco] = React.useState(true)

    // const toggleClass = () => {
    //     setBtnBlanco(!btnBlanco)
    // }
    return (
        <>
            <Buscador />
            <main>

                <div className='etiquetas'>

                    {/* generos */}
                    <Link to='/s'>
                        <button className="etiquetas_secciones ">
                            <p>Géneros</p>
                        </button>
                    </Link>
                    {/* colecciones */}
                    <Link to='/'>
                        <button className="etiquetas_secciones ">
                            <p>Colecciones</p>
                        </button>
                    </Link>
                    {/* Recomendados */}
                    <Link to='/'>
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

                <ItemListContainer />

            </main>
        </>

    )
}


// (id === '/Popular') ? (
//     <>
//         <Link to='/'>
//             <button className={btnBlanco ? ("btn_negro ") : ("btn_blanco")} onClick={toggleClass}>
//                 <h5>New</h5>
//             </button>
//         </Link>
//         <Link to='/Popular'>
//             <button className={btnBlanco ? ("btn_blanco ") : ("btn_negro")} onClick={toggleClass}>
//                 <h5>Popular</h5>
//             </button>
//         </Link>
//     </>


// <>
//                                 <button className="btn_negro">
//                                     <h5>{id}</h5>
//                                 </button>
//                             </>