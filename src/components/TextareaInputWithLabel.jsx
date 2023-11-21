import React from 'react';
import { OutlinedInput} from '@mui/material';

const sxStyle = {
    width: "100%",
    marginBottom: "20px",
}

const TextareaInputWithLabel = ({ label, placeholder }) => {
    return (
        <>
            <h6 className='general-label'>{label}</h6>
            <OutlinedInput
                size='small'
                multiline
                maxRows={4}
                sx={sxStyle}
                placeholder={placeholder}
            />
        </>
    );
};

export default TextareaInputWithLabel;