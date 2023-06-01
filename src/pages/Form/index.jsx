import React, { useState } from 'react'
import InputRadio from '../../components/inputRadio'
import InputText from '../../components/inputText'
import InputSelect from '../../components/inputSelect'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './css/style.css'
// import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import InputDate from '../../components/inputDate';
import Card from '../../components/card';
import UploadFile from '../../components/uploadfile';
import Categories from '../../components/categories';
import TableContent from '../TableContent';
import AppNav from '../../components/navbar';
import { useNavigate } from 'react-router-dom';
import REview from '../../components/review';

const Form = () => {
    const [page, setPage] = useState(0);
    const formLabels = ["Name", "Proposal Manager", "Contributors", "Submission Date", "Proposal Type", "", "Response Categories", "Review Process - Select all that apply"]

    const navigate = useNavigate();

    const formDisplay = () => {
        if (page == 0) {
            return <InputText />
        }
        else if (page === 1) {
            return <InputSelect />
        }
        else if (page === 2) {
            return <InputText />
        }
        else if (page === 3) {
            return <InputDate />
        }
        else if (page === 4) {
            return <InputRadio />
        }
        else if (page === 5) {
            return <UploadFile />
        }else if (page === 6) {
            return <Categories />
        }
        else if (page === 7){
            return <REview />
        }
        else {
            navigate("/tablecontent")
        }
    }
    // const handleClick = () =>{
    //     if(page === formLabels.length - 1){
    //     return <TableContent />
    //     }
    //     else{
    //         setPage((currPage) => currPage + 1)
    //     }
    // }

    return (
        <>
            <Box>
                <Grid container>
                    <AppNav />
                    <Grid
                        direction="column"
                        sx={{ minHeight: '100vh', width: '100vw' }}
                        className='form'
                    >
                        <Grid
                            container
                            direction="column"
                        >
                            <h1
                                className='formHeading animate__animated animate__backInLeft'>
                                Let’s Create a New Project
                            </h1>
                            <h2
                                className='subHeading animate__animated animate__backInRight'
                                >
                                {formLabels[page]}
                            </h2>
                            <div 
                                className='subHeading animate__animated animate__backInRight'
                                >{formDisplay()}
                            </div>
                        </Grid>

                        <Grid
                            className='button'
                            sx={{ my: 20 }}
                        >
                            <Button
                                className='btn'
                                sx={{ py: 2 }}
                                variant="contained"
                                // endIcon={<SendIcon />}
                                disabled={page == 0}
                                onClick={() => {
                                    setPage((currPage) => currPage - 1)
                                }}
                            >
                                Back
                            </Button>
                            <Button
                                className='btn'
                                variant="contained"
                                // endIcon={<SendIcon />}
                                // disabled={page == formLabels.length - 1}
                                onClick={() => {
                                    
                                    setPage((currPage) => currPage + 1)
                                }}
                            >
                                Next
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>

        </>

    )
}

export default Form