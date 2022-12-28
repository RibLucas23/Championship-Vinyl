// React
import * as React from 'react';
// Material UI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// Components
import SideBar from '../SideBar/SideBar'
// Context
// CSS
import './conctact.css'
export default function Contact() {
    return (
        <>
            <div className='contact__wrapper'>
                <div className='itemList__sideBar desktop'>
                    <SideBar />
                </div>

                <div className='contact__container'>
                    <h3>Contactanos</h3>

                    {/* FORM */}
                    <Box
                        className='contact__form'
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            className='form__email  form__input '
                            id="outlined-basic" label="Correo Electronico" variant="outlined" />
                        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                        <TextField
                            className='form__asunto form__input '
                            id="outlined-basic"
                            label="Ingrese Un Asunto" variant="outlined" />
                        <TextField
                            className='form__mensaje form__input '
                            id="outlined-multiline-static"
                            label="Ingrese el mensaje"
                            multiline
                            rows={4}
                        />
                    </Box>

                    {/* Seguinos */}
                    <h3>Seguinos</h3>

                    <div className='contact__redes'>


                        <h1>@Championship_Vinyl</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
