import React from 'react'
import './navBar.css'
import SearchIcon from '@mui/icons-material/Search';
export default function Buscador() {
    return (
        <div className='div_buscador'>
            <input className='buscador' type="text" placeholder='Search' /> <span className='buscador_icon'>
                <SearchIcon />
            </span>
        </div>
    )
}
