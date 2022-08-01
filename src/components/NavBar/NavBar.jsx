import React, { useContext } from 'react'
import './navBar.css'
import Logo from '../../imgs/LOGO.png'
import Disco from '../../imgs/DISCO2.png'
import Buscador from './Buscador'
import Carrito from './Carrito'
import { Link } from 'react-router-dom'
import { Context } from '../Context/ContextProvider';

export default function NavBar() {
    let { totalDeProductos } = useContext(Context);
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
                    <Link to='/cart' className='link'>
                        <Carrito total={totalDeProductos} />
                    </Link>
                </div>
            </div>
            <div className='navAbajo'>
                <Link to='/'>
                    <img className='navLogo' src={Logo} alt="" />
                </Link>
            </div>
        </nav>
    )
}
