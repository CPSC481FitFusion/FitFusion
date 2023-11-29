import React from 'react';
import { OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const sxStyle = {
    width: "100%",
    marginBottom: "20px"
}

const TextInputWithLabel = ({ label, placeholder, isPassword, bindValue, onInputChange }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    let endAdornmentIcon = (<></>);
    if (isPassword) {
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
                type={!isPassword || showPassword ? 'text' : 'password'}
                endAdornment={
                    endAdornmentIcon
                }
                sx={sxStyle}
                placeholder={placeholder}
                value={bindValue}
                onChange={onInputChange}
            />
        </>
    );
};

export default TextInputWithLabel;