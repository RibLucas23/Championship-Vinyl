import React, { useContext } from 'react'
import './navBar.css'
import Logo from '../../imgs/LOGO.png'
import Disco from '../../imgs/DISCO2.png'
import Carrito from './Carrito'
import { Link } from 'react-router-dom'
import { Context } from '../Context/ContextProvider';
import MenuIcon from '@mui/icons-material/Menu';




export default function NavBar() {
    let { totalDeProductos } = useContext(Context);
    return (
        <nav className='nav'>
            <div className='navArriba'>
                <div className=''>

                    <img src={Disco} className='navDisco' alt="" />
                    <Link to='/'>
                        <img className='navLogo' src={Logo} alt="" />
                    </Link>
                    {/* Menu de navegación */}
                    {/* Menu desktop */}
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
                    </div>
                    {/* Menu movil */}
                    <div className='navMenu_mvl'>
                        <MenuIcon className='navMenu_mvl_icon' />

                    </div>
                </div>
                {/* Carrito */}
                <div className='navCarrito'>
                    <Link to='/cart' className='link'>
                        <Carrito total={totalDeProductos} />
                    </Link>
                </div>
            </div>

        </nav>
    )
}
