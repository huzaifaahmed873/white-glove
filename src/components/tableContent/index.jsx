import { Button, Grid } from '@mui/material'
import React from 'react';
import './css/style.css'
import Switchbtn from '../switchbtn';
import AppNav from '../navbar';
import { useNavigate } from 'react-router-dom';

const RfpTable = () => {
    const navigate = useNavigate();

    const handleClick =()=>{
        navigate("/generalRequirement")

    }

    return (
        <>
        <AppNav />
            <Grid container className='table'>
                <h1>USCIS TDSS RFP</h1>
                <div className='box'>
                <Grid container>
                    <Grid md={1} xs={1}>
                        <div className='btnS'> S </div>
                    </Grid>
                    <Grid md={10} xs={10}>
                        <span className="tableSubhead">4.0 General Requirements</span>         
                    </Grid>
                    <Grid container>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                     </Grid>
                        
                </Grid>
                <Grid container>
                    <Grid md={1} xs={1}>
                        <div className='btnS'> S </div>
                    </Grid>
                    <Grid md={10} xs={10}>
                        <span className="tableSubhead">4.0 General Requirements</span>         
                    </Grid>
                    <Grid container>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                     </Grid>
                        
                </Grid>
                <Grid container>
                    <Grid md={1} xs={1}>
                        <div className='btnS'> S </div>
                    </Grid>
                    <Grid md={10} xs={10}>
                        <span className="tableSubhead">4.0 General Requirements</span>         
                    </Grid>
                    <Grid container>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                            <Grid md={1} xs={1} className='btnlist'>5.1</Grid>
                            <Grid md={10} xs={10} className='tablelist'>
                            Describe the main features of your proposal software.</Grid>
                     </Grid>
                        
                </Grid>
                </div>
                <Grid container className='btn-div'>
                    <Grid md={4}>
                    <span>Auto Select:</span>   
                    <Switchbtn />
                    <p></p>
                    <span>Auto Select:</span>   
                    <Switchbtn />
                    </Grid>
                    <Grid md={5}>
                        <button class="tablebtn">Deselect Numbers</button>
                        <button class="tablebtn">Deselect Numbers</button>
                        <button class="tablebtn">Deselect Numbers</button>
                        <button class="tablebtn">Deselect Numbers</button>

                    </Grid>
                    <Grid md={2}>
                    <button class="tablebtn">Close</button>
                    <button class="tablebtn" onClick={()=>handleClick()}>Save</button>
                    <button class="tablebtn">Import</button>
                    </Grid>
                </Grid>
                
                

            </Grid>
        </>
    )
}

export default RfpTable