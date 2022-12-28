// React
import React from 'react'
import { Link } from 'react-router-dom';
// Material UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function Recomendados({ item }) {
    return (
        <>
            <Card className='card' elevation={5} key={item.id} sx={{ maxWidth: 6000 }}>

                <Link to={"/item/" + item.id} className='link'>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={item.artista}
                            image={item.imagen}
                            className="card_img"
                        />
                        <CardContent className='item_div'>
                            {/* card top */}

                            <Typography c gutterBottom variant="h5" component="div" className='item_title' >
                                {item.nombreDisco}
                            </Typography>


                            {/* card bottom */}
                            <div className='card_bottom'>
                                <Typography c gutterBottom component="div" className='item_artist'>
                                    {item.artista}
                                </Typography>
                                <span className='card_precio'>
                                    <b>
                                        ${item.precio}
                                    </b>
                                </span>
                            </div>
                        </CardContent>

                    </CardActionArea>
                </Link>

            </Card >
        </>
    )
}
