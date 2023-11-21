import React from 'react';
import Button from '@mui/material/Button';

const sxStyle = {
  width: "100%",
  marginY: "10px",
}

const ButtonFilled = ({ text, style, onClick }) => {
  return (
    <Button
      variant="contained"
      sx={sxStyle}
      className={style}
      onClick={onClick}>
      {text}
    </Button>
  );
};

export default ButtonFilled;