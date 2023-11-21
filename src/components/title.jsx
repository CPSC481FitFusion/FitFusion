import React from 'react';
import Typography from '@mui/material/Typography';

const TrackTitle = ({ title }) => {
  return (
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
  );
};

export default TrackTitle;
