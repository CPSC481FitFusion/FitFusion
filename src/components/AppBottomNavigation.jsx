import * as React from 'react';
import { Link } from 'react-router-dom';

import { Box, BottomNavigation, BottomNavigationAction } from '@mui/material';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';

export const AppBottomNavigation = ({ state }) => {
  const [value, setValue] = React.useState(state);

  return (
    <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', zIndex: 1000 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/logbook"
          value="logbook"
          label="Logbook"
          icon={<FitnessCenterIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/alerts"
          value="alerts"
          label="Alerts"
          icon={<NotificationsNoneIcon />} />
        <BottomNavigationAction
          component={Link}
          to="/settings"
          value="settings"
          label="Settings"
          icon={<SettingsIcon />} />
      </BottomNavigation>
    </Box>
  );
}

export default AppBottomNavigation;


{/*npm install @mui/icons-material @mui/material @emotion/styled @emotion/react --force*/ }

