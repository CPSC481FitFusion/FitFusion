import { Checkbox, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TextInputWithLabel from "../../../components/TextInputWithLabel";

const AlertDetails = () => {
  const [selectedDays, setSelectedDays] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  const handleDayToggle = (day) => {
    setSelectedDays((prevDays) => ({
      ...prevDays,
      [day]: !prevDays[day],
    }));
  };

  return (
    <>
      <Stack direction="row" className="horizontal-stack">
        <Typography className="header-20 align-bottom"> Reminder Name</Typography>
      </Stack>
      <Stack className="input-container text-start w-100 m-0">
        <TextInputWithLabel
          label={" Reminder Details"}
          placeholder={"Click to enter Reminder Name"}
        />
        <TextInputWithLabel
          label={"Reminder Time"}
          placeholder={"Click to enter Reminder Time"}
        />
        <Stack direction="row">
          {Object.keys(selectedDays).map((day) => (
            <Stack
              key={day}
              direction="row"
              alignItems="center"
              spacing={1}
            >
              <Checkbox
                checked={selectedDays[day]}
                onChange={() => handleDayToggle(day)}
              />
              <Typography>{day}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};

export default AlertDetails;
