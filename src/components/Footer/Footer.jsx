import React from 'react'
import './footer.css'
import Logo from '../../imgs/LOGO.png'
import { Grid } from '@mui/material'
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
                                <li> HOME </li>
                                <li> Popular </li>
                                <li> New </li>
                            </ul>
                        </Grid>
                        <Grid item md={3}>
                            <ul>
                                <li> ABOUT </li>
                                <li> Help </li>
                            </ul>
                        </Grid>
                        <Grid item md={3}>
                            <ul>
                                <li> CONTACT US </li>
                                <li> Map </li>
                                <li> Social </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </footer>
    )
}
