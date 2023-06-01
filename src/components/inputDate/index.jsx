import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react'
import '../../pages/Form/css/style.css'

const InputDate = () => {
    return (
        <>
            <Grid 
            container
            >
                <Grid item xs={12}
                    justifyContent="center"
                    alignItems="center"
                
                >
                    <input
                        type='date'
                        className='inputForm subHeading animate__animated animate__backInRight' 
                         value="USCIS TDSS"   
                        />
                </Grid>
            </Grid>
        </>
    )
}

export default InputDate