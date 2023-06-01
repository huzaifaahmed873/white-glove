import { Grid } from '@mui/material'
import React from "react";
import Slider from "react-slick";
import Carousel from '../carousel';

const Categories = () => {
  const category = ['Cloud', 'AIML', 'Agile', 'Data', 'Migration', 'Transformation', 'Management']


  return (
    <>
        <Grid container
        sx={{margin:"0 auto "}}>
      {category.map((i, k) => (
          <Grid xs={12} md={3}
          
            className='card' key={k}
          >
            {i}
          </Grid>
      ))}
        </Grid>


    </>
  )
}

export default Categories