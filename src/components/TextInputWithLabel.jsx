import React from 'react';
import { OutlinedInput, InputAdornment, IconButton, Stack } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { RequiredPopper } from './RequiredPopper';

const sxStyle = {
    width: "100%",
}

const TextInputWithLabel = ({ label, placeholder, isPassword, bindValue, onInputChange, isRequired }) => {
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

    let renderIfRequired = <></>
    if (isRequired) {
        renderIfRequired =
            <>
                <RequiredPopper />
            </>
    }
    return (
        <>
            <Stack
                direction="row"
                style={{ width: '100%' }}
            >
                <h6 className='general-label'>{label}</h6>
                {renderIfRequired}
            </Stack>
            <OutlinedInput
                size='small'
                type={!isPassword || showPassword ? 'text' : 'password'}
                endAdornment={
                    endAdornmentIcon
                }
                placeholder={placeholder}
                value={bindValue}
                onChange={onInputChange}
                className='w-100 m-0'
            />
        </>
    );
};

export default TextInputWithLabel;