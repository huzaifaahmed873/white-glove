import { Grid } from '@mui/material'
import React from 'react'

const REview = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={2} xs={12}>
                    <p className='review-para'>Blue Team</p>
                    <div className='reviewbox1'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <p className='review-para'>Pink Team</p>
                    <div className='reviewbox2'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <p className='review-para'>Red Team</p>
                    <div className='reviewbox3'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <p className='review-para'>Green Team</p>
                    <div className='reviewbox4'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <p className='review-para'>Golden Team</p>
                    <div className='reviewbox5'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
                <Grid item md={2} xs={12}>
                    <p className='review-para'>White Team</p>
                    <div className='reviewbox6'>
                        Conducted before sections are written, Usually of Section Strategy Templates or Annotated Outlines
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default REview