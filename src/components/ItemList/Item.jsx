import React from 'react';
import './itemList.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Item({ item }) {

    // CREO LA CARTA PARA CADA PRODUCTO 
    return (

        <Card className='card' elevation={10} key={item.id} sx={{ maxWidth: 450 }}>

            <Link to={"/item/" + item.id} className='link'>

                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={item.artista}
                        image={item.imagen}
                        className="card_img"
                    />
                    <CardContent className='item_div'>
                        <Typography c gutterBottom variant="h5" component="div" >
                            {item.nombreDisco}
                        </Typography>
                        <div className='card_bottom'>

                            <Typography c gutterBottom component="div">
                                {item.artista}
                            </Typography>
                            <span className='card_precio'>
                                ${item.precio}
                            </span>
                        </div>
                    </CardContent>

                </CardActionArea>
            </Link>

        </Card >

    )
}
