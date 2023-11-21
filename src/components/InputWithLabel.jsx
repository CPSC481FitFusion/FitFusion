import React from 'react';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const sxStyle = {
    width: "100%",
    marginBottom: "20px",
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            border: "solid 1.5px black"
        }
    },
    "& .MuiInputBase-root-MuiOutlinedInput-root": {
        "&.Mui-focused MuiOutlinedInput-notchedOutline fieldset": {
            border: "solid 1.5px black"
        }
    }

}

const InputWithLabel = ({ label, style, placeholder, isPassword }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let endAdornmentIcon = (<></>);

    if (isPassword === true){
        endAdornmentIcon = (
            <InputAdornment position="end">
                <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        );
    }

    return (
        <>
            <h6 className='general-label'>{label}</h6>
            <OutlinedInput
                size='small'
                type={!isPassword ||  showPassword ? 'text' : 'password'}
                endAdornment={
                    endAdornmentIcon
                }
                sx={sxStyle}
                className={style}
                placeholder={placeholder}
            />
        </>
    );
};

export default InputWithLabel;