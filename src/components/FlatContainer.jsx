import React from 'react';
import { Box, Paper } from '@mui/material';

const sxStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  minHeight: "150px"
}
const FlatContainer = ({ children, style }) => {
  return (
    <Paper sx={sxStyle}
      elevation={0}
      className={style}>
      {children}
    </Paper>
  );
};

export default FlatContainer;