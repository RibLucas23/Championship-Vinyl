// React
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// Material UI
import MenuIcon from '@mui/icons-material/Menu';
// Components
import Logo from '../../imgs/LOGO.png'
import Disco from '../../imgs/DISCO2.png'
import Carrito from './Carrito'
import NavBarMenu from './NavBarMenu'
import logoDesktop from '../../imgs/Group 42.png'
// Context
import { Context } from '../Context/ContextProvider';
// CSS
import './navBar.css'



export default function NavBar() {
    let { totalDeProductos } = useContext(Context);
    const [oculto, setoculto] = useState(true);
    const mostrar = () => {
        setoculto(!oculto)

    }
    return (
        <nav className='nav'>
            <div className='navArriba'>
                <div>
                    {/* Logos */}
                    <img src={Disco} className='navDisco' alt="" />
                    <Link to='/'>
                        <img className='navLogo' src={Logo} alt="" />
                        {/* <img className='navLogo__desktop' src={logoDesktop} alt="" /> */}
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
                        <MenuIcon className='navMenu_mvl_icon'
                            onClick={() => {
                                mostrar()
                            }} />
                        {!oculto ? (<NavBarMenu />) :
                            (<>
                            </>)}
                        {/* <NavBarMenu /> */}
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
