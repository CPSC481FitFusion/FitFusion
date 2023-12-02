import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green } from '@mui/material/colors';

const ControlledCheckbox = ({ goalName }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // Render the checkbox only if goalName is provided
  if (!goalName) {
    return null; // Return null if goalName is not provided
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
          sx={{
            color: green[600],
            '&.Mui-checked': {
              color: green[900],
            },
          }}
        />
      }
      label={goalName}
    />
  );
};

export default ControlledCheckbox;



