import React from 'react'
import Card from '../card'
import { Grid } from '@mui/material'

const InputRadio = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={2} sm={4}>
                    <Card  className='subHeading animate__animated animate__backInUp'/>
                </Grid>
                <Grid item xs={12} md={2}  sm={4}>
                    <Card  className='subHeading animate__animated animate__backInDown' />
                </Grid>
                <Grid item xs={12} md={2}  sm={4}>
                    <Card  className='subHeading animate__animated animate__backInUp' />
                </Grid>
                <Grid item xs={12} md={2}  sm={4}>
                    <Card  className='subHeading animate__animated animate__backInDown' />
                </Grid>
                <Grid item xs={12} md={2}  sm={4}>
                    <Card  className='subHeading animate__animated animate__backInUp' />
                </Grid>
                <Grid item xs={12} md={2}  sm={4}>
                    <Card  className='subHeading animate__animated animate__backInUp' />
                </Grid>
            </Grid>
            {/* <Card /> */}
        </>
    )
}

export default InputRadio