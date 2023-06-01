import React from 'react'
import AppNav from '../navbar'
import SubNav from '../subNav'
import { Grid } from '@mui/material'
import Profile from '../../assets/img/Rectangle 344.png'
import Profile1 from '../../assets/img/profile image.png'
import MessageIcon from '@mui/icons-material/Message';
import './css/style.css'


const ProjectTimeline = () => {
    
    return (
        <>
            <AppNav />
            <SubNav />
            <Grid container className='timeline nimate__animated animate__backInUp'>
                <Grid md={12}>
                    <div className='flex background'>
                        <div>
                            <p>5.5 Do you support languages other than English?</p>
                        </div>
                        <div className='profile-img'>
                            <span className='m-2'>Unanswered</span>
                            <img src={Profile} alt="Profile" height={30} width={30} className='m-2' />
                            <img src={Profile1} alt="Profile" height={30} width={30} className='m-2' />
                            <MessageIcon className="m-2" />
                            <span className='m-2'>0</span>
                        </div>

                    </div>
                    <div>

                        <p className='m-2'>White Glove content library supports English, French, German and Spanish </p>        
                        <button className='attachment'>+ Add Attachment</button>      
                    </div>
                    <div className='flex'>
                        <div>
                            <button className='btntime'>Clear Entry</button>
                        </div>
                        <div>
                        <button className='btntime'>Clear Entry</button>
                        <button className='btntime'>Clear Entry</button>
                        </div>
                    </div>
                </Grid>

                <Grid md={12}  spacing={4}>
                    <div className='flex background'>
                        <div>
                            <p>5.5 Do you support languages other than English?</p>
                        </div>
                        <div className='profile-img'>
                            <span className='m-2'>Unanswered</span>
                            <img src={Profile} alt="Profile" height={30} width={30} className='m-2' />
                            <img src={Profile1} alt="Profile" height={30} width={30} className='m-2' />
                            <MessageIcon className="m-2" />
                            <span className='m-2'>0</span>
                        </div>

                    </div>
                    <div>

                        <p className='m-2'>White Glove content library supports English, French, German and Spanish </p>        
                        <button className='attachment'>+ Add Attachment</button>      
                    </div>
                    <div className='flex'>
                        <div>
                            <button className='btntime'>Clear Entry</button>
                        </div>
                        <div>
                        <button className='btntime'>Clear Entry</button>
                        <button className='btntime'>Clear Entry</button>
                        </div>
                    </div>
                </Grid>

                <Grid md={12} spacing={4}>
                    <div className='flex background'>
                        <div>
                            <p>5.5 Do you support languages other than English?</p>
                        </div>
                        <div className='profile-img'>
                            <span className='m-2'>Unanswered</span>
                            <img src={Profile} alt="Profile" height={30} width={30} className='m-2' />
                            <img src={Profile1} alt="Profile" height={30} width={30} className='m-2' />
                            <MessageIcon className="m-2" />
                            <span className='m-2'>0</span>
                        </div>

                    </div>
                    <div>

                        <p className='m-2'>White Glove content library supports English, French, German and Spanish </p>        
                        <button className='attachment'>+ Add Attachment</button>      
                    </div>
                    <div className='flex'>
                        <div>
                            <button className='btntime'>Clear Entry</button>
                        </div>
                        <div>
                        <button className='btntime'>Clear Entry</button>
                        <button className='btntime'>Clear Entry</button>
                        </div>
                    </div>
                </Grid>

            </Grid>
        </>
    )
}

export default ProjectTimeline