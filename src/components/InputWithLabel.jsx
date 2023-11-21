import React from 'react';
import Button from '@mui/material/Button';
import { Box, TextField, InputLabel } from '@mui/material';

const sxStyle = {
    width: "100%",
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            border: "solid 1.5px black"
        }
    }
}

const InputWithLabel = ({ label, style, placeholder }) => {
    return (
        <>
            <h6 className='general-label'>{label}</h6>
            <TextField
                size="small"
                variant="outlined"
                sx={sxStyle}
                className={style}
                placeholder={placeholder}
            />
        </>
    );
};

export default InputWithLabel;