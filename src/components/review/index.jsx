import { Grid } from '@mui/material'
import React from 'react'

const REview = () => {
    return (
        <>
            <Grid container>
                <Grid md={2} xs={12}>
                    <p>Blue Team</p>
                    <div className='reviewbox1 animate__animated animate__backInUp'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid md={2} xs={12}>
                    <p>Pink Team</p>
                    <div className='reviewbox2 animate__animated animate__backInDown'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid md={2} xs={12}>
                    <p>Red Team</p>
                    <div className='reviewbox3 animate__animated animate__backInUp'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid md={2} xs={12}>
                    <p>Green Team</p>
                    <div className='reviewbox4 animate__animated animate__backInDown'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid md={2} xs={12}>
                    <p>Golden Team</p>
                    <div className='reviewbox5 animate__animated animate__backInUp'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid md={2} xs={12}>
                    <p>White Team</p>
                    <div className='reviewbox6 animate__animated animate__backInDown'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default REview