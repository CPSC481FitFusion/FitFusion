import React, { useState } from "react";
import { Stack, Typography, Box } from "@mui/material";
import TextInputWithLabel from "../../../components/TextInputWithLabel";
import TextareaInputWithLabel from "../../../components/TextareaInputWithLabel";
import GoalDatePicker from "./GoalDatePicker";
import { RequiredInputLabel } from "../../../components/RequiredInputLabel";

const GoalDetails = ({ onGoalNameChange }) => {
  const handleGoalNameChange = (event) => {
    const newName = event.target.value;
    onGoalNameChange(newName);
  };
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <>
      <Stack direction="row" className="horizontal-stack">
        <Typography className="header-20 align-bottom">Set New Goal</Typography>
      </Stack>
      <Stack className="input-container text-start w-100 m-0">
        <TextInputWithLabel
          label={"Goal Name"}
          placeholder={"Click to enter Goal Name"}
          onInputChange={handleGoalNameChange}
          isRequired
        />

        <Box mb={2}> {/* Add a small margin-bottom for spacing */}
        </Box>
        <Typography variant="body1" gutterBottom fontWeight="bold">
          Deadline
        </Typography>
        <GoalDatePicker
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />
        <Box mt={2} mb={2}> {/* Add a small margin-top and margin-bottom for spacing */}
          <TextareaInputWithLabel
            label={"Details"}
            placeholder={"Click to enter Details"}
          />
        </Box>
      </Stack>
    </>
  );
};

export default GoalDetails;

