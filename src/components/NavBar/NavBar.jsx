import React from 'react'
import './navBar.css'
import Logo from '../../imgs/LOGO.png'
import Disco from '../../imgs/DISCO2.png'
import Buscador from './Buscador'
import Carrito from './Carrito'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className='nav'>
            <div className='navArribaTodo'>
                <div className='navArriba'>

                    <img src={Disco} className='navDisco' alt="" />
                    {/* Menu de navegación */}
                    <div className='navMenu'>
                        <ul>
                            <Link to='/'>
                                <li>HOME</li>
                            </Link>
                            <Link to='/about'>
                                <li>ABOUT</li>
                            </Link>
                            <Link to='/contact'>
                                <li>CONTACT US</li>
                            </Link>
                        </ul>
                        {/* Buscador */}
                        <div className='navBuscador'>
                            <Buscador />
                        </div>
                    </div>
                </div>
                {/* Carrito */}
                <div className='navCarrito'>
                    <Carrito />
                </div>
            </div>
            <div className='navAbajo'>
                <img className='navLogo' src={Logo} alt="" />
            </div>
        </nav>
    )
}
