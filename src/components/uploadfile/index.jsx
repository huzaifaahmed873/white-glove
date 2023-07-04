import { Grid } from '@material-ui/core'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import './css/style.css'

const UploadFile = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className="uploadcard subHeading">

            <div className='circle'>
              <AddIcon
                className='plus'
              />
              <div>
                <ShareIcon
                  className='link'
                />
              </div>
            </div>
            <div className='center'>
            <h4 className='strtpro'>Let’s Start Your Project</h4>
              <div class="upload-btn-wrapper">
                <button class="btnupload">Upload RFP</button>
                <input type="file" name="myfile" />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

    </>
  )
}

export default UploadFile