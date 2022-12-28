// React
import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Disco from '../../imgs/DISCO3.png'
// CSS
import './sideBar.css'

export default function SideBar() {
    return (
        <>
            <div className='sideBar'>

                <div className='genre'>
                    <div className='sideBar_Border'>
                        <div className='sideBar_separador'>
                        </div>

                        <div className='sideBar__Title'>
                            <h3>Genres</h3>
                            <img src={Disco} className="sideBar__discoImg" alt="" />
                        </div>

                    </div>
                    <ul>
                        <Link to='/genre/Flamenco' className='sideBar__links' >
                            <li>Flamenco</li>
                        </Link>
                        <Link to='/genre/Pop' className='sideBar__links'>
                            <li>Pop</li>
                        </Link>
                        <Link to='/genre/Rock' className='sideBar__links'>
                            <li>Rock</li>
                        </Link>
                        <Link to='/genre/Rhythm and blues' className='sideBar__links'>
                            <li>R&B</li>
                        </Link>
                        <Link to='/genre/Rap' className='sideBar__links'>
                            <li>Rap</li>
                        </Link>

                    </ul>
                </div>
                <div className='collections'>
                    <div className='sideBar_Border'>
                        <div className='sideBar_separador'>
                        </div>
                        <div className='sideBar__Title'>
                            <h3>Collections</h3>
                            <img src={Disco} className="sideBar__discoImg" alt="" />
                        </div>

                    </div>
                    <ul>
                        <Link to='/collection/The Beatles' className='sideBar__links' >
                            <li>The Beatles</li>
                        </Link>
                        <Link to='/collection/Rosalia' className='sideBar__links'>
                            <li>Rosalia</li>
                        </Link>
                        <li> The Beatles</li>
                        <li> The Rolling Stones</li>
                        <li> The Who</li>
                        <li> Led Zeppelin</li>
                        <li> The Doors</li>
                    </ul>

                </div>
            </div>

        </>
    )
}
