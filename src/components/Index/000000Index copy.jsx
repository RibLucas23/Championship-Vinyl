import { Grid } from '@mui/material'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import ItemListContainer from '../ItemList/ItemListContainer'
import './home.css'
import { Link, useParams } from 'react-router-dom'
export default function Index() {

    const { id } = useParams()
    const [btnBlanco, setBtnBlanco] = React.useState(true)

    const toggleClass = () => {
        setBtnBlanco(!btnBlanco)
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <SideBar />

                </Grid>
                <Grid item md={9} className="index_grid_itemListContainer">

                    <div className='titulos'>
                        <div className='naranja'>
                        </div>
                        {(id === undefined) ? (
                            <>
                                {/* generos */}
                                <Link to='/'>
                                    <button className="btn_negro ">
                                        <h5>Géneros</h5>
                                    </button>
                                </Link>
                                {/* colecciones */}
                                <Link to='/Popular'>
                                    <button className="btn_blanco ">
                                        <h5>Colecciones</h5>
                                    </button>
                                </Link>
                                {/* Recomendados */}
                                <Link to='/Popular'>
                                    <button className="btn_blanco ">
                                        <h5>Recomendados</h5>
                                    </button>
                                </Link>
                                {/* Clásicos */}
                                <Link to='/Popular'>
                                    <button className="btn_blanco ">
                                        <h5>Clásicos</h5>
                                    </button>
                                </Link>
                            </>

                        ) : (<>
                            {(id === "Popular") ? (
                                <>
                                    <Link to='/'>
                                        <button className="btn_blanco">
                                            <h5>New</h5>
                                        </button>
                                    </Link>
                                    <Link to='/Popular'>
                                        <button className={btnBlanco ? ("btn_negro ") : ("btn_blanco")} onClick={toggleClass}>
                                            <h5>Popular</h5>
                                        </button>
                                    </Link>
                                </>
                            ) : (
                                <button className="btn_negro">
                                    <h5>{id}</h5>
                                </button>
                            )}
                        </>
                        )


                        }
                    </div>

                    <ItemListContainer />
                </Grid>

            </Grid>
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