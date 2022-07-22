import { Grid } from '@mui/material'
import React from 'react'
import SideBar from '../SideBar/SideBar'
import ItemListContainer from '../Cards/ItemListContainer'
export default function Index() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={3}>
                    <SideBar />

                </Grid>
                <Grid item md={9}>
                    <ItemListContainer />
                </Grid>

            </Grid>
        </>

    )
}
