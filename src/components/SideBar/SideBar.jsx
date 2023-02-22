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
                        <Link to='/genre/Folk' className='sideBar__links'>
                            <li>Folk</li>
                        </Link>
                        <Link to='/genre/Jazz' className='sideBar__links'>
                            <li>Jazz</li>
                        </Link>
                        <Link to='/genre/Experimental' className='sideBar__links'>
                            <li>Experimental</li>
                        </Link>
                        <Link to='/genre/Alternative Rock' className='sideBar__links'>
                            <li>Alternative Rock</li>
                        </Link>
                        <Link to='/genre/Punk' className='sideBar__links'>
                            <li>Punk</li>
                        </Link>
                        <Link to='/genre/Reggaetón' className='sideBar__links'>
                            <li>Reggaetón</li>
                        </Link>
                        <Link to='/genre/Electronica' className='sideBar__links'>
                            <li>Electronica</li>
                        </Link>
                    </ul>
                </div>

            </div>

        </>
    )
}
