import React from 'react';
import Typography from '@mui/material/Typography';

const Title = ({ title }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
  );
};

export default Title;
