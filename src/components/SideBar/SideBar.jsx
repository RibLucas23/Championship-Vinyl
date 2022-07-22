import React from 'react'
import './sideBar.css'
import Disco from '../../imgs/DISCO3.png'
export default function SideBar() {
    return (
        <>
            <div className='sideBar'>

                <div className='genre'>
                    <div className='sideBar_Border'>
                        <div className='sideBar__Title'>
                            <h3>Genres</h3>
                            <img src={Disco} className="sideBar__discoImg" alt="" />
                        </div>

                    </div>
                    <ul>
                        <li>rock</li>
                        <li>pop</li>
                        <li>reggae</li>
                        <li>soul</li>
                        <li>jazz</li>
                        <li>country</li>
                        <li>blues</li>
                        <li>classical</li>
                        <li>latin</li>
                        <li>funk</li>
                        <li>disco</li>
                        <li>metal</li>
                        <li>rap</li>
                        <li>hip-hop</li>
                        <li>electronic</li>
                        <li>other</li>
                    </ul>
                </div>
                <div className='collections'>
                    <div className='sideBar_Border'>
                        <div className='sideBar__Title'>
                            <h3>Collections</h3>
                            <img src={Disco} className="sideBar__discoImg" alt="" />
                        </div>

                    </div>
                    <ul>
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
