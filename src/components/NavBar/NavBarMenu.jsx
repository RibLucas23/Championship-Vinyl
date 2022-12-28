// React
import React from 'react'
import { Link } from 'react-router-dom'
// Material UI
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InfoIcon from '@mui/icons-material/Info';
import HelpIcon from '@mui/icons-material/Help';
// Components
import Logo from '../../imgs/LOGO.png'
import Disco from '../../imgs/DISCO2.png'
// CSS
import './navBar.css'


export default function NavBarMenu() {
    return (
        <div className='navMenu__container'>

            <div className='navMenu_Mvl'>
                <ul>
                    <Link to='/' className='link'>
                        <li>
                            <HomeIcon className='navMenu_mvl_icons' /> INICIO</li>
                    </Link>
                    <Link to='/contact'
                        className='link'>
                        <li>
                            <ChatBubbleIcon className='navMenu_mvl_icons' /> Contactanos</li>
                    </Link>
                    <Link to='/about'
                        className='link'>
                        <li>
                            <InfoIcon className='navMenu_mvl_icons' /> Sobre nosotros</li>
                    </Link>
                    <Link to='/ayuda'
                        className='link'>
                        <li>
                            <HelpIcon className='navMenu_mvl_icons' /> Ayuda</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
