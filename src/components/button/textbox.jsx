import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TextBox() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-textarea"
        label="Enter Notes Here"
        placeholder="Placeholder"
        multiline
      />
    </Box>
  );
}

export default TextBox;


