import React, { useState } from "react";
import { Stack, Typography } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import GoalDatePicker from "./GoalDatePicker";

const GoalDetails = ({ onGoalNameChange }) => {
  const handleGoalNameChange = (event) => {
    const newName = event.target.value;
    onGoalNameChange(newName);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <Stack direction="row" className="horizontal-stack">
        <Typography className="header-20 align-bottom">Goal Name</Typography>
      </Stack>
      <Stack className="input-container text-start w-100 m-0">
        <TextInputWithLabel
          label={"Goal Name"}
          placeholder={"Click to enter Goal Name"}
          onInputChange={handleGoalNameChange}
        />
        <Typography variant="body1" gutterBottom fontWeight="bold">
          Click to Enter Goal Deadline Date
        </Typography>
        <GoalDatePicker selectedDate={selectedDate} onChange={setSelectedDate} />
        <TextareaInputWithLabel
          label={"Goal Details and Notes"}
          placeholder={"Click to enter Notes"}
        />
      </Stack>
    </>
  );
};

export default GoalDetails;

