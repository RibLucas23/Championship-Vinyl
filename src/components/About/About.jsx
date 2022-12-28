import React from 'react'
import './about.css'
import highFidelityLogo from '../../imgs/High-fidelity-movie-logo 1.png'
import highFidelity from '../../imgs/high-fidelity 1.png'
import SideBar from '../SideBar/SideBar'
export default function About() {
    return (<>
        <div className='about__sidebar'>
            <div className='itemList__sideBar'>
                <SideBar />
            </div>
            <div>
                <div className='itemListContainer about__title' >
                    <div className='bordeInferior bordeInferior_naranja'>
                        <h3 className='title-center'>Sobre Championship Vinyl</h3>
                    </div>
                </div>

                <main className='about__container'>
                    <div className='about__logo'>
                        <img className='about__logo__img' src={highFidelityLogo} alt="" />
                    </div>
                    <div className='about__text'>

                        <p>Hola! <br /><br />

                            Este proyecto se inspiró en la película High Fidelity, dirigida por Nicholas Lundy y protagonizada por John Cusack, interpretando a Rob Gordon.<br /><br />

                            Intentamos imaginar como sería un
                            e-commerce de Championship Vinyl, la tienda de discos de Rob Gordon.<br /><br />

                            ¿Quiénes somos?<br /><br />

                            Lucas Ribeiro Da Silva, Web Developer<br />
                            <a href="https://www.linkedin.com/in/lucas-ribeiro-da-silva-it/">https://www.linkedin.com/in/lucas-ribeiro-da-silva-it/</a><br /><br />

                            Clara López Pereyra, UX/UI Designer<br />
                            <a href="https://www.linkedin.com/in/clara-lopez-pereyra/">https://www.linkedin.com/in/clara-lopez-pereyra/</a></p><br /><br />
                    </div>
                    <div className='about__logo'>
                        <img className='about__logo__img__bottom' src={highFidelity} alt="" />
                    </div>

                </main>
            </div>
        </div>
    </>
    )
}
