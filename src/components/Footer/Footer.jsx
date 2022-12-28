// React
import React from 'react'
import { Link } from 'react-router-dom'
// Material UI
import { Grid } from '@mui/material'
// Components
import Logo from '../../imgs/LOGO.png'
// Context
// CSS
import './footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <Grid container spacing={3}>
                <Grid item md={5} className="footer__logo">
                    <img src={Logo} alt="logo" className="logo" />
                </Grid>
                <Grid item md={7} >
                    <Grid container spacing={3} className="footer__txts">
                        <Grid item md={3}>
                            <ul>
                                <Link to='/' className='link'>
                                    <li> HOME </li>
                                </Link>
                                <Link to='/about' className='link'>
                                    <li> ABOUT </li>
                                </Link>
                                <Link to='/contact' className='link'>
                                    <li> CONTACT </li>
                                </Link>
                            </ul>
                        </Grid>
                        <Grid item md={6}>
                            <ul>
                                <li>
                                    <div className='footer__txts__seccs'>
                                        <p>Popular</p>
                                        <p>Novedades</p>
                                        <p>Colecciones</p>
                                    </div>
                                </li>
                                <li> Ayuda </li>
                                <li> Bucarelli 2340, C.A.B.A., Argentina </li>
                            </ul>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </footer>
    )
}
