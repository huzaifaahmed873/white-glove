import { Grid } from '@mui/material'
import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './css/style.css'
import { useNavigate } from 'react-router-dom';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 48;

const SubNav = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();

    const handleDashboard =()=>{
        navigate("/dashboard")
  
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} className='subNavbar borderBottom'>
                    <div>
                        <span className='subHeading'>
                            <KeyboardArrowDownIcon />
                            USCIS TDSS RFP
                        </span>
                        <span className='textBlue' onClick={()=>{handleDashboard()}}>
                            <DashboardIcon
                                sx={{ paddingTop: "10px" }}
                            />
                            Dashboard
                        </span>
                        <span className='list'>
                            <FormatListBulletedIcon
                                sx={{ paddingTop: "10px" }}
                            />
                            List
                        </span>
                        <span className='textBlue'>
                            <LibraryBooksIcon
                                sx={{ paddingTop: "10px" }}
                            />
                            Source
                        </span>

                    </div>
                </Grid>
                <Grid item xs={12} md={6} className='subNavbarEnd borderBottom'>

                    <div>
                        <button className='btn0'>0</button>
                        <button className='btn1'>0</button>
                        <button className='btn2'>0</button>
                        <button className='btn3'>0</button>
                        <button className='active'>Export</button>
                        <button className='active'>
                            Active
                            {/* <KeyboardArrowDownIcon /> */}
                        </button>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                </Grid>
                <Grid item xs={6} md={6} className='subNavbar borderBottom'>
                    <span className='Date'>Started Apr 2</span>
                </Grid>
                <Grid item xs={5} md={6} className='subNavbarEnd borderBottom  '>
                    <span className='Date'>Due Apr 30 (20 weekdays)</span>

                </Grid>
            </Grid>
        </>
    )
}

export default SubNav