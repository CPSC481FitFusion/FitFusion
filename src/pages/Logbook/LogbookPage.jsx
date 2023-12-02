import { Box, Tab, Typography } from "@mui/material";
import AppBottomNavigation from "../../components/AppBottomNavigation";
import React from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import WorkoutTab from "./WorkoutTab/WorkoutTab";
import BodyTab from "./BodyTab/BodyTab";
import GoalsTab from "./GoalTab/GoalsTab";

export const LogbookPage = () => {
  // Get the user default from local storage, for now set at Workout
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Typography className="header-35">Logbook</Typography>
      <Typography className="normal-text-14">
        Click an option below to start tracking!
      </Typography>
      <Box className="w-100">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="Logbook Tab"
              variant="fullWidth"
            >
              <Tab className="tab-option" label="Workout" value="1" />
              <Tab className="tab-option" label="Body" value="2" />
              <Tab className="tab-option" label="Goals" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <WorkoutTab />
          </TabPanel>
          <TabPanel value="2">
            <BodyTab />
          </TabPanel>
          <TabPanel value="3">
            <GoalsTab />
          </TabPanel>
        </TabContext>
      </Box>
      <AppBottomNavigation state={"logbook"} />
    </>
  );
};
