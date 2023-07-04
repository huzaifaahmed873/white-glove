import React from 'react'
import Card from '../card'
import { Grid } from '@mui/material'

const InputRadio = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={2} sm={3}>
                    <Card  className=''/>
                </Grid>
                <Grid item xs={12} md={2}  sm={3}>
                    <Card />
                </Grid>
                <Grid item xs={12} md={2}  sm={3}>
                    <Card />
                </Grid>
                <Grid item xs={12} md={2}  sm={3}>
                    <Card />
                </Grid>
                <Grid item xs={12} md={2}  sm={3}>
                    <Card />
                </Grid>
            </Grid>
            {/* <Card /> */}
        </>
    )
}

export default InputRadio