import React from 'react';
import { Paper } from '@mui/material';

const sxStyle = {
  marginBottom: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  minHeight: "150px",
  width: '100%'
}
const Container = ({ children, style, elevation }) => {
  return (
    <Paper sx={sxStyle}
      elevation={elevation ?? 0}
      className={style}>
      {children}
    </Paper>
  );
};

export default Container;