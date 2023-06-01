import React from 'react'
import './css/style.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Card = () => {
    return (
        <>
            <div class="card">
                <div class="imgbox">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/752/752241.png"
                    />
                </div>

                <div class="content">
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="rfi" control={<Radio />} label="RFI" />

                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
        </>
    )
}

export default Card