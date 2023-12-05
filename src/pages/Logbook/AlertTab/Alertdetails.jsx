import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const AlertDetails = () => {
  const [reminderName, setReminderName] = useState("");
  const [reminderTime, setReminderTime] = useState(new Date());

  return (
    <>
      {/* 1. Make "Add Reminder" smaller and bold */}
      <Typography variant="h5" align="center" gutterBottom>
        <strong>Add Reminder</strong>
      </Typography>
      
      <Stack className="input-container text-start w-100 m-0" spacing={2}>
        <TextInputWithLabel
          label={"Enter a New Reminder Name"}
          placeholder={"Click to enter new Reminder Name"}
          value={reminderName}
          onChange={(e) => setReminderName(e.target.value)}
        />
        
        {/* 2. Style "Enter New Reminder Time" to be the same size as "Enter a New Reminder Name" */}
        <Typography variant="subtitle1">
          <strong>Enter New Reminder Time</strong>
        </Typography>
        
        {/* Use the same style as "Enter a New Reminder Name" */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileTimePicker
            value={reminderTime}
            onChange={(newTime) => setReminderTime(newTime)}
            placeholder="Click to select new Reminder Time"
          />
        </LocalizationProvider>
      </Stack>
    </>
  );
};

export default AlertDetails;
