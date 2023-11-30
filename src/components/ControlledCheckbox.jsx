import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { green } from '@mui/material/colors';

const ControlledCheckbox = () => {
  const [checked, setChecked] = React.useState(false); // Set the initial state to false

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
              color: green[900], // Change color when checked
            },
          }}
        />
      }
      label="Attend One Zumba Class"
    />
  );
};

export default ControlledCheckbox;

