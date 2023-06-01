import { Grid } from '@mui/material'
import React from 'react'
import '../uploadfile/css/style.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CheckBox } from '@mui/icons-material';
import Loader from '../Loader'
import './css/style.css'
import AppNav from '../navbar';
import SubNav from '../subNav'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pl: 4,
  height: 700,
  overflowY: "scroll"
};

const ProjectOutline = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  const navigate = useNavigate();

  const handleClick =()=>{
      navigate("/timeline")

  }
  const handleChange = (event) => {
    setAge(event.target.value);
    setChecked(event.target.checked);

  };

  return (
    <>
      <AppNav />
      <SubNav />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <div className="RunContent">
            <div className="uploadcard1">
              <span>Now is a great time to run Content on 19 eligible entries</span>
              <div className='center'>
                <div class="upload-btn-wrapper">
                  <button class="btnupload" onClick={handleOpen}>Run Content</button>
                  {/* <input type="file" name="myfile" /> */}
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
            <Grid md={3}>
              <ArrowBackIcon onClick={()=>handleClick()} />
              <h6 className='search'>Search Terms</h6>
              <label className='inputlabel'>Is your solution a hosted or an on premise solution </label>
              <input type="text" className='Modalinput' />
              <div>
                <label className='inputlabel'>Sort By</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  // label="Age"
                  onChange={handleChange}
                  className='Modalinput'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div>
                <label className='inputlabel'>Sort By</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className='Modalinput'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div>
                <label className='inputlabel'>Sort By</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  // label="Age"
                  onChange={handleChange}
                  className='Modalinput'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div>
                <label className='inputlabel'>Sort By</label>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                  className='Modalinput'
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </div>
              <div>
                <CheckBox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />Exact match
              </div>
              <CheckBox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />Library Entries with Attachment(s) only
            </Grid>
            <Grid md={9}>
              <div className='ModalHead'>
                <h6>Is your solution a hosted or an on premise solution  </h6>
              </div>

              <div className='modelBorder'>
                <div className='ques'>
                  <p>Are you a cloud based solution ?</p>
                  <p>Sales Content / Technology</p>
                  <p>NDA</p>
                </div>
                <CheckBox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />Yes
                <hr />
                <p className='modalPara'>White Glove is a cloud-based solution (SaaS). We use Amazon Web Services as our primary solution and DR hosting provider and Rackspace
                  as our secondary.  Rackspace is only used
                  to store encrypted production database backups.
                </p>
                <p className='modalPara'>
                  Primary Data Center: AWS - Northern Virginia, USA
                  Secondary Data Center (Warm DR site: AWS - Northern California, USA.
                  Secondary Data Center (Backups): Rackspace - Northern Virginia, USA,
                </p>
                <p className='modalPara'>
                  For security reasons, Amazon Web Services (AWS) does not disclose the exact physical location of their data centers AWS operates its data centers in alignment wth the Tier III+
                  guidelines, but have chosen not to have a certified Uptime Institute based tiering level that they have more flexibility to expand and improve performance.

                </p>
                <div className='feedback'>
                  <div>
                    <p>Created by Kyle Haas on Dec 11 2019</p>
                    <p>Created by Kyle Haas on Dec 11 2019</p>
                  </div>
                  <div>
                    Reviewed by Kyle Haas on Jan 16, 2020
                    <Loader className='mt-2' />
                  </div>
                </div>
              </div>
              <div className='modelBorder'>
                <div className='ques'>
                  <p>Are you a cloud based solution ?</p>
                  <p>Sales Content / Technology</p>
                  <p>NDA</p>
                </div>
                <CheckBox
                  label="yes"
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                />Yes
                <hr />
                <p className='modalPara'>White Glove is a cloud-based solution (SaaS). We use Amazon Web Services as our primary solution and DR hosting provider and Rackspace
                  as our secondary.  Rackspace is only used
                  to store encrypted production database backups.
                </p>
                <p className='modalPara'>
                  Primary Data Center: AWS - Northern Virginia, USA
                  Secondary Data Center (Warm DR site: AWS - Northern California, USA.
                  Secondary Data Center (Backups): Rackspace - Northern Virginia, USA,
                </p>
                <p className='modalPara'>
                  For security reasons, Amazon Web Services (AWS) does not disclose the exact physical location of their data centers AWS operates its data centers in alignment wth the Tier III+
                  guidelines, but have chosen not to have a certified Uptime Institute based tiering level that they have more flexibility to expand and improve performance.

                </p>
                <div className='feedback'>
                  <div>
                    <p>Created by Kyle Haas on Dec 11 2019</p>
                    <p>Created by Kyle Haas on Dec 11 2019</p>
                  </div>
                  <div>
                    Reviewed by Kyle Haas on Jan 16, 2020
                    <Loader className='mt-2' />
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>

        </Box>
      </Modal>

    </>
  )
}

export default ProjectOutline