// React
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Material UI
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

// Components
import SideBar from '../SideBar/SideBar'
//firebase
import { addDoc, collection, getFirestore } from "firebase/firestore";

// CSS
import './conctact.css'
export default function Contact() {
    //use Navigate
    const navigate = useNavigate()
    //Base de datos (database)
    const db = getFirestore();
    //creo los estados (datos del mensaje)
    const [email, setEmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [mensaje, setMensaje] = useState("");

    // funcion para enviar mensaje a la base de datos
    function enviarMensaje() {
        //si esta vacio algun campo no se puede agregar
        if (email === "" || asunto === "" || mensaje === "") {
            alert('Por favor completa todos los campos')
        }
        let msj = { email: email, asunto: asunto, mensaje: mensaje }
        const mensajesCollection = collection(db, 'mensajes');
        addDoc(mensajesCollection, msj).then(() => {
            alert('Mensaje enviado. Gracias!')
            navigate("/")

        });
    }
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
                        {/* Email */}
                        <TextField
                            className='form__email  form__input '
                            id="outlined-basic" label="Correo Electronico" variant="outlined"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />

                        {/* Asunto */}
                        <TextField
                            className='form__asunto form__input '
                            id="outlined-basic"
                            label="Ingrese Un Asunto" variant="outlined"
                            value={asunto}
                            onChange={(e) => {
                                setAsunto(e.target.value)
                            }}
                        />

                        {/* Mensaje */}
                        <TextField
                            className='form__mensaje form__input '
                            id="outlined-multiline-static"
                            label="Ingrese el mensaje"
                            multiline
                            rows={4}
                            value={mensaje}
                            onChange={(e) => {
                                setMensaje(e.target.value)
                            }}
                        />
                        <Button variant="contained" color="primary" className="carritoBtnComprar" onClick={() => { enviarMensaje() }}> Enviar </Button>
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
