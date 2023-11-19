import React from 'react';
import Button from '@mui/material/Button';


const ButtonFilled = ({ text, style, onClick }) => {
  return (
    <Button 
      variant="contained" 
      className={style}
      onclick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonFilled;