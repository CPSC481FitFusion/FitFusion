import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
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
        <Typography className="header-20 align-bottom">Add a new</Typography>
      </Stack>
      <Stack className="input-container text-start w-100 m-0">
        <TextInputWithLabel
          label={"Goal Name"}
          placeholder={"Click to enter Goal Name"}
          onInputChange={handleGoalNameChange}
        />
        
        <Box mb={2}> {/* Add a small margin-bottom for spacing */}
        </Box>
          <Typography variant="body1" gutterBottom fontWeight="bold">
            Click to Enter Goal Deadline Date
          </Typography>
      
        <GoalDatePicker
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />
        
        <Box mt={2} mb={2}> {/* Add a small margin-top and margin-bottom for spacing */}
          <TextareaInputWithLabel
            label={"Goal Details and Notes"}
            placeholder={"Click to enter Notes"}
          />
        </Box>
      </Stack>
    </>
  );
};

export default GoalDetails;

