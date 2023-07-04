import { Grid } from '@mui/material'
import React ,{ useState, useEffect } from 'react';
import Slider from "react-slick";
import Carousel from '../carousel';

const Categories = () => {
  const category = ['Cloud', 'AIML', 'Agile', 'Data', 'Migration', 'Transformation', 'Management']
  const [answerSelection, setAnswerSelection] = useState("");
let clickAnswer = (k) => setAnswerSelection(k)
   

  return (
    <>
      <Grid container
        spacing={2}>
        {category.map((i, k) => (
          <Grid item xs={12} md={3}

            key={k}
          >
            <Grid className={`card ${answerSelection === k ? 'cardactive' : ''}`} onClick={() => clickAnswer(k)}>
              <div className='card-categor'>
                {i}
              </div>
            </Grid>
          </Grid>
        ))}
      </Grid>


    </>
  )
}

export default Categories