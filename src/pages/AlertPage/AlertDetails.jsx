import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import { RequiredInputLabel } from "../../components/RequiredInputLabel";

const AlertDetails = ({ name, onReminderNameChanged }) => {
  const [reminderName, setReminderName] = useState(name);
  const [reminderTime, setReminderTime] = useState(new Date());

  const onChange = (name) => {
    setReminderName(name);
    onReminderNameChanged(name); // Call the prop after the state update
  }
  return (
    <>
      {/* 1. Make "Add Reminder" smaller and bold */}
      <Typography variant="h5" align="center" gutterBottom>
        <strong>Add New Alert</strong>
      </Typography>

      <Stack className="input-container text-start w-100 m-0" spacing={2}>
        <TextInputWithLabel
          label={"Alert Name"}
          placeholder={"Click to enter new Alert Name"}
          value={reminderName}
          onInputChange={(e) => onChange(e.target.value)}
          isRequired
        />
        <Stack className="mt-3 mb-3">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <RequiredInputLabel label={"Start Time"} />
            <MobileTimePicker
              value={reminderTime}
              className="time-picker"
              onChange={(newTime) => setReminderTime(newTime)}
            />
          </LocalizationProvider>
        </Stack>

      </Stack>
    </>
  );
};

export default AlertDetails;
