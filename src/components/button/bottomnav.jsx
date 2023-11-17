import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', zIndex: 1000 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="LogBook" icon={<FitnessCenterIcon />} />
        <BottomNavigationAction label="Alerts" icon={<NotificationsNoneIcon />} />
        <BottomNavigationAction label="User" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default SimpleBottomNavigation;


{/*npm install @mui/icons-material @mui/material @emotion/styled @emotion/react --force*/}

