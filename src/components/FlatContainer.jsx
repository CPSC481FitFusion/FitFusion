import React from 'react';
import { Paper } from '@mui/material';

const sxStyle = {
  marginBottom: "20px",
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